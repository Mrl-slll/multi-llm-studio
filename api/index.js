const fetch = require("node-fetch");

module.exports = async (req, res) => {
  // Enable CORS
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

  const { method, url } = req;
  const path = url.split('?')[0];

  // Route handling
  if (method === 'POST' && path === '/api/openai') {
    return handleOpenAI(req, res);
  } else if (method === 'POST' && path === '/api/gemini') {
    return handleGemini(req, res);
  } else if (method === 'POST' && path === '/api/deepseek') {
    return handleDeepSeek(req, res);
  } else if (method === 'POST' && path === '/api/kimi') {
    return handleKimi(req, res);
  } else if (method === 'GET' && path === '/health') {
    return res.status(200).json({ ok: true });
  }

  res.status(404).json({ error: 'Not found' });
};

async function handleOpenAI(req, res) {
  try {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY is not set on the server." });
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content:
              "You are ChatGPT running inside a local Multi‑LLM Studio. " +
              "Answer clearly and concisely. The user may be testing multiple models side by side.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "(No text returned from OpenAI.)";

    res.json({ text });
  } catch (err) {
    console.error("Error in /api/openai:", err);
    res.status(500).json({ error: "Internal server error (OpenAI)" });
  }
}

async function handleGemini(req, res) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not set on the server." });
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${encodeURIComponent(
      GEMINI_API_KEY
    )}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text =
      data.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("\n").trim() ||
      "(No text returned from Gemini.)";

    res.json({ text });
  } catch (err) {
    console.error("Error in /api/gemini:", err);
    res.status(500).json({ error: "Internal server error (Gemini)" });
  }
}

async function handleDeepSeek(req, res) {
  try {
    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
    if (!DEEPSEEK_API_KEY) {
      return res.status(500).json({ error: "DEEPSEEK_API_KEY is not set on the server." });
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content:
              "You are DeepSeek running inside a local Multi‑LLM Studio. " +
              "Answer clearly and logically. The user may be comparing you with other models.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("DeepSeek error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "(No text returned from DeepSeek.)";

    res.json({ text });
  } catch (err) {
    console.error("Error in /api/deepseek:", err);
    res.status(500).json({ error: "Internal server error (DeepSeek)" });
  }
}

async function handleKimi(req, res) {
  try {
    const KIMI_API_KEY = process.env.KIMI_API_KEY;
    if (!KIMI_API_KEY) {
      return res.status(500).json({ error: "KIMI_API_KEY is not set on the server." });
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

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
          {
            role: "system",
            content:
              "You are Kimi AI running inside a local Multi‑LLM Studio. " +
              "Answer in a friendly and detailed way. The user may be comparing multiple models.",
          },
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
}
