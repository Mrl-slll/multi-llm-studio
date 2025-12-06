# API Key Setup Guide

This guide explains how to obtain and configure API keys for all 5 AI models in the UW-Madison Student Guidebook.

---

## 🔑 Required API Keys

### 1. **GROQ_API_KEY** (Llama 3.3 - Ultra Fast)

**Get your key:**
1. Go to: https://console.groq.com
2. Sign up for free account (no credit card required)
3. Navigate to "API Keys" section
4. Click "Create API Key"
5. Copy the key (starts with `gsk_...`)

**Free Tier:**
- ✅ 14,400 requests per day
- ✅ 7,000 requests per minute
- ✅ Completely FREE forever

**Add to Vercel:**
```bash
# In your Vercel project settings
GROQ_API_KEY=gsk_your_key_here
```

---

### 2. **GEMINI_API_KEY** (Gemini 2.0 Flash - Google's Latest)

**Get your key:**
1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Get API key" or "Create API key"
4. Select or create a Google Cloud project
5. Copy the API key

**Free Tier:**
- ✅ 15 requests per minute
- ✅ 1,500 requests per day
- ✅ 1 million requests per month
- ✅ Completely FREE

**Add to Vercel:**
```bash
GEMINI_API_KEY=AIzaSy...your_key_here
```

---

### 3. **HUGGINGFACE_API_KEY** (Llama 3.1 - Open Source)

**Get your key:**
1. Go to: https://huggingface.co/settings/tokens
2. Sign up/login to HuggingFace
3. Click "New token"
4. Give it a name (e.g., "uw-guidebook")
5. Select "Read" permissions
6. Copy the token (starts with `hf_...`)

**Free Tier:**
- ✅ Unlimited requests (with rate limits)
- ✅ Free inference API access
- ✅ Completely FREE

**Add to Vercel:**
```bash
HUGGINGFACE_API_KEY=hf_your_key_here
```

---

### 4. **COHERE_API_KEY** (Command R - Advanced Reasoning)

**Get your key:**
1. Go to: https://dashboard.cohere.com/api-keys
2. Sign up for free account
3. Verify email
4. Go to "API Keys" section
5. Copy the "Trial API Key"

**Free Tier:**
- ✅ $5 in free credits (trial)
- ⚠️ Expires after usage or time limit
- 💰 Then ~$0.50 per million tokens

**Add to Vercel:**
```bash
COHERE_API_KEY=your_cohere_key_here
```

**Note:** Consider removing Cohere after trial expires, or upgrade to paid tier.

---

### 5. **KIMI_API_KEY** (Moonshot - Context Specialist)

**Get your key:**
1. Go to: https://platform.moonshot.cn/console/api-keys
2. Sign up (may require Chinese phone number)
3. Navigate to API Keys section
4. Create new API key
5. Copy the key

**Alternative:** If Kimi signup is difficult, you can:
- Use OpenRouter (https://openrouter.ai) which provides Kimi access
- Or remove Kimi and use only 4 models

**Free Tier:**
- ✅ Free tier available
- ⚠️ May have regional restrictions

**Add to Vercel:**
```bash
KIMI_API_KEY=your_kimi_key_here
```

---

## 📦 How to Add API Keys to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your `multi-llm-studio` project
3. Click "Settings" → "Environment Variables"
4. For each API key, click "Add New":
   - **Key:** `GROQ_API_KEY`
   - **Value:** `gsk_your_actual_key_here`
   - **Environments:** Check all (Production, Preview, Development)
5. Click "Save"
6. Repeat for all 5 keys

### Method 2: Vercel CLI

```bash
# From your project directory
cd /Users/keheming/Desktop/multi-llm-studio

# Add each environment variable
vercel env add GROQ_API_KEY production
vercel env add GEMINI_API_KEY production
vercel env add HUGGINGFACE_API_KEY production
vercel env add COHERE_API_KEY production
vercel env add KIMI_API_KEY production

# Redeploy after adding keys
vercel --prod
```

### Method 3: `.env` file (Local Development Only)

Create a `.env` file in your project root:

```bash
# .env (DO NOT COMMIT THIS FILE!)
GROQ_API_KEY=gsk_your_key_here
GEMINI_API_KEY=AIzaSy...your_key_here
HUGGINGFACE_API_KEY=hf_your_key_here
COHERE_API_KEY=your_cohere_key_here
KIMI_API_KEY=your_kimi_key_here
```

**⚠️ IMPORTANT:** Add `.env` to your `.gitignore` file to prevent committing secrets!

---

## ✅ Verification

After adding all keys, test each model:

1. Visit your deployed site
2. Go to `/studio`
3. Try each model in the dropdown:
   - ⚡ Groq (Llama 3.3)
   - ✨ Gemini 2.0 Flash
   - 🤗 HuggingFace (Llama 3.1)
   - 🔮 Cohere (Command R)
   - 🌙 Kimi (Moonshot)
4. Ask a test question
5. Verify you get a response (not an error)

---

## 🔧 Troubleshooting

### "API key not set" error
- Double-check environment variable name matches exactly
- Redeploy after adding keys: `vercel --prod`
- Check Vercel dashboard → Settings → Environment Variables

### "Invalid API key" error
- Verify key was copied correctly (no extra spaces)
- Check if key has expired (Cohere trial)
- Regenerate key from provider's dashboard

### Rate limit errors
- **Groq:** 14,400/day limit - upgrade if needed
- **Gemini:** 1,500/day limit - wait 24 hours or upgrade
- **HuggingFace:** Temporary rate limit - retry later

### Model not responding
- Check Vercel deployment logs: `vercel logs`
- Verify API endpoint is correct in `studio.html`
- Test API directly using `curl` (see Testing section below)

---

## 🧪 Testing APIs Directly

Test each endpoint with `curl`:

```bash
# Test Groq
curl -X POST https://your-app.vercel.app/api/openai \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello", "mode": "academic"}'

# Test Gemini
curl -X POST https://your-app.vercel.app/api/gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello", "mode": "academic"}'

# Test HuggingFace
curl -X POST https://your-app.vercel.app/api/huggingface \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello", "mode": "academic"}'

# Test Cohere
curl -X POST https://your-app.vercel.app/api/deepseek \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello", "mode": "academic"}'

# Test Kimi
curl -X POST https://your-app.vercel.app/api/kimi \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello", "mode": "academic"}'
```

---

## 💰 Cost Summary

| Model | Free Tier | Cost After Free | Recommendation |
|-------|-----------|-----------------|----------------|
| **Groq** | 14,400/day | FREE forever | ✅ Keep |
| **Gemini** | 1,500/day | FREE forever | ✅ Keep |
| **HuggingFace** | Unlimited* | FREE forever | ✅ Keep |
| **Cohere** | $5 trial | $0.50/M tokens | ⚠️ Optional |
| **Kimi** | Free tier | Varies | ⚠️ Optional |

*Rate limited but no hard cap

**Recommended setup:**
- ✅ Use Groq, Gemini, and HuggingFace (all FREE forever)
- ⚠️ Optional: Add Cohere and Kimi for more variety
- 💡 Minimum viable: Groq + Gemini (2 models, both super fast and FREE)

---

## 🎯 Minimal Setup (Free Forever)

If you only want **FREE forever** models:

1. **Get only these 3 keys:**
   - GROQ_API_KEY
   - GEMINI_API_KEY  
   - HUGGINGFACE_API_KEY

2. **Remove Cohere and Kimi from code** (optional):
   - Edit `studio.html`
   - Remove their `<option>` tags from dropdowns
   - Remove their entries from `providers` object

3. **Deploy with 3 models:**
   ```bash
   vercel --prod
   ```

This gives you 3 excellent AI models, all 100% FREE forever! 🎉

---

## 📚 Additional Resources

- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Groq API Documentation](https://console.groq.com/docs)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [HuggingFace API Documentation](https://huggingface.co/docs/api-inference)
- [Cohere API Documentation](https://docs.cohere.com)

---

## ❓ Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set correctly
3. Test APIs individually with `curl`
4. Check provider dashboards for API key status
5. Review this guide's Troubleshooting section

**Your current deployment:** https://multi-llm-studio-p0jog3smz-codys-projects-6e499556.vercel.app
