# Gemini 2.0 Flash API Key Setup

## ⚠️ Important: Google AI Studio Access Issue

**Current Status:** Google AI Studio redirects to region availability page for some users.

## 🔧 Solution: Use Google Cloud Console Instead

### Method 1: Google Cloud Console (RECOMMENDED)

1. **Go to Google Cloud Console:**
   ```
   https://console.cloud.google.com/
   ```

2. **Create or Select a Project:**
   - Click "Select a project" dropdown at the top
   - Click "New Project"
   - Name it: `uw-guidebook` or similar
   - Click "Create"

3. **Enable Generative Language API:**
   - In the search bar, type: "Generative Language API"
   - Click on it
   - Click "Enable"
   - Wait ~30 seconds for activation

4. **Create API Key:**
   - Go to: APIs & Services → Credentials
   - Click "+ CREATE CREDENTIALS"
   - Select "API Key"
   - Copy the key (starts with `AIzaSy...`)

5. **Restrict API Key (Optional but Recommended):**
   - Click "Edit API key" (pencil icon)
   - Under "API restrictions", select "Restrict key"
   - Choose "Generative Language API"
   - Save

6. **Add to Vercel:**
   ```bash
   # Go to Vercel dashboard
   # Settings → Environment Variables
   # Add: GEMINI_API_KEY = AIzaSy...your_key_here
   
   # Or via CLI:
   vercel env add GEMINI_API_KEY production
   # Paste your key when prompted
   
   # Redeploy:
   vercel --prod
   ```

---

### Method 2: Google AI Studio (If Accessible)

If you can access without redirects:

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with Google
3. Click "Get API Key" or "Create API Key"
4. Copy the key
5. Add to Vercel (same as above)

---

## 🧪 Testing Your API Key

After adding to Vercel, test it:

```bash
# Replace YOUR_KEY with your actual key
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=YOUR_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

**Expected Response:**
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Hello! How can I help you today?"
          }
        ]
      }
    }
  ]
}
```

**Error Response (Invalid Key):**
```json
{
  "error": {
    "code": 400,
    "message": "API key not valid. Please pass a valid API key.",
    "status": "INVALID_ARGUMENT"
  }
}
```

---

## 📍 Region Availability

Gemini API is available in these regions:
- ✅ United States
- ✅ Canada
- ✅ Europe (most countries)
- ✅ Japan
- ✅ Australia
- ✅ India
- ❌ China (blocked)

**Your location:** Madison, WI, USA ✅ **SUPPORTED**

---

## 🆓 Free Tier Details

**Gemini 2.0 Flash Free Tier:**
- 15 requests per minute
- 1,500 requests per day
- 1,000,000 requests per month
- **Completely FREE** - no credit card required

---

## ❓ Troubleshooting

### "API key not valid" error
- Verify key copied correctly (no extra spaces)
- Check if Generative Language API is enabled
- Wait 5 minutes after creating key
- Try regenerating the API key

### Still getting redirected on AI Studio
- Use Google Cloud Console method instead
- AI Studio has known redirect issues for some accounts
- Cloud Console is more stable and reliable

### "403 Forbidden" error
- Check if API is enabled in your project
- Verify billing is enabled (free tier doesn't require payment, but billing account must be linked)
- Check API key restrictions

---

## 📚 Resources

- [Google AI Studio](https://aistudio.google.com/)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [Available Regions](https://ai.google.dev/gemini-api/docs/available-regions)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)

---

## 🎯 Quick Start Checklist

- [ ] Go to Google Cloud Console
- [ ] Create new project
- [ ] Enable Generative Language API
- [ ] Create API key
- [ ] Copy key (starts with AIzaSy...)
- [ ] Add to Vercel environment variables
- [ ] Deploy: `vercel --prod`
- [ ] Test in studio with a question

**Once completed, Gemini 2.0 Flash will appear as an option in your studio!** ✨
