require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch"); // if on Node < 18. For Node 18+, global fetch exists, but this keeps it simple.

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files (index.html, etc.) from this folder
app.use(express.static(__dirname));

/**
 * Helper utility to safely read env vars and log warnings once.
 */
function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.warn(`Warning: ${name} is not set. Some API routes may fail.`);
  }
  return value;
}

// === OpenAI (ChatGPT) – gpt‑4o‑mini ===
const OPENAI_API_KEY = requireEnv("OPENAI_API_KEY");

// === Google Gemini ===
const GEMINI_API_KEY = requireEnv("GEMINI_API_KEY");

// === DeepSeek ===
const DEEPSEEK_API_KEY = requireEnv("DEEPSEEK_API_KEY");

// === Kimi AI (Moonshot) ===
const KIMI_API_KEY = requireEnv("KIMI_API_KEY");

// ------------- Routes -------------

/**
 * POST /api/openai
 * Body: { prompt: string }
 * Uses OpenAI's Chat Completions with model gpt‑4o‑mini.
 */
app.post("/api/openai", async (req, res) => {
  try {
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
      const text = await response.text();
      console.error("OpenAI error:", response.status, text);
      return res
        .status(response.status)
        .json({ error: "OpenAI API error", detail: text });
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
});

/**
 * POST /api/gemini
 * Body: { prompt: string }
 * Uses Google Gemini 1.5 Pro via the generative language API.
 */
app.post("/api/gemini", async (req, res) => {
  try {
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not set on the server." });
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt' field." });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${encodeURIComponent(
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
      const text = await response.text();
      console.error("Gemini error:", response.status, text);
      return res
        .status(response.status)
        .json({ error: "Gemini API error", detail: text });
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
});

/**
 * POST /api/deepseek
 * Body: { prompt: string }
 * Uses DeepSeek chat completion endpoint.
 * Docs: https://platform.deepseek.com/
 */
app.post("/api/deepseek", async (req, res) => {
  try {
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
        model: "deepseek-chat", // change if you want a specific DeepSeek model
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
      const text = await response.text();
      console.error("DeepSeek error:", response.status, text);
      return res
        .status(response.status)
        .json({ error: "DeepSeek API error", detail: text });
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
});

/**
 * POST /api/kimi
 * Body: { prompt: string }
 * Example for Kimi (Moonshot) “moonshot‑v1‑8k” style API.
 * Check latest docs for exact URL/model names: https://platform.moonshot.cn
 */
app.post("/api/kimi", async (req, res) => {
  try {
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
        model: "moonshot-v1-8k", // or moonshot-v1-32k / other, see docs
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
      const text = await response.text();
      console.error("Kimi error:", response.status, text);
      return res
        .status(response.status)
        .json({ error: "Kimi API error", detail: text });
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
});

// Fallback route for sanity
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Multi‑LLM Studio backend listening on http://localhost:${PORT}`);
});