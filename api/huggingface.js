const fetch = require("node-fetch");
const { getRelevantContext } = require('./rag-context.js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
    if (!HUGGINGFACE_API_KEY) {
      return res.status(500).json({ error: "HUGGINGFACE_API_KEY is not set." });
    }

    const { prompt, mode } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    // Get context based on mode
    const contextMessage = getRelevantContext(prompt, mode || 'academic');

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.1-8B-Instruct",
          messages: [
            { role: "system", content: contextMessage },
            { role: "user", content: prompt }
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Hugging Face error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content?.trim() || "(No response)";

    return res.status(200).json({
      answer: text,
      model: "meta-llama/Llama-3.1-8B-Instruct"
    });

  } catch (error) {
    console.error("Error in /api/huggingface:", error);
    return res.status(500).json({ error: error.message });
  }
};
