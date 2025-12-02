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
    const KIMI_API_KEY = process.env.KIMI_API_KEY;
    if (!KIMI_API_KEY) {
      return res.status(500).json({ error: "KIMI_API_KEY is not set on the server." });
    }

    const { prompt, mode } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    // Get context based on mode
    const contextMessage = getRelevantContext(prompt, mode || 'academic');

    const response = await fetch("https://api.moonshot.cn/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${KIMI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "moonshot-v1-8k",
        max_tokens: 1024,
        messages: [
          { role: "system", content: contextMessage },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Kimi error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "(No text returned from Kimi AI.)";

    res.json({ text });
  } catch (err) {
    console.error("Error in /api/kimi:", err);
    res.status(500).json({ error: "Internal server error (Kimi)" });
  }
};
