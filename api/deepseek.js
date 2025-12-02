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
    const COHERE_API_KEY = process.env.COHERE_API_KEY;
    if (!COHERE_API_KEY) {
      return res.status(500).json({ error: "COHERE_API_KEY is not set." });
    }

    const { prompt, mode } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    // Get context based on mode
    const contextMessage = getRelevantContext(prompt, mode || 'academic');

    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r-08-2024",
        message: prompt,
        preamble: contextMessage,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Cohere error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text = data.text?.trim() || "(No response)";

    res.json({ text });
  } catch (err) {
    console.error("Error in /api/deepseek:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
