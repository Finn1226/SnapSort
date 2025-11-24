# SnapSort Landing Page Setup Guide

## Step 1: Set Up Google Sheets Data Collection (5 minutes)

### A. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "SnapSort Responses"

### B. Set Up Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Copy ALL the code from `google-script.js` and paste it
4. Click **💾 Save** (name it "SnapSort Tracker")
5. Click **Deploy → New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Configure:
   - **Description**: "SnapSort Response Tracker"
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Click **Deploy**
10. Click **Authorize access** and go through Google's permission flow
11. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/ABC123.../exec
    ```

### C. Update Your Website

1. Open `script.js`
2. Find this line near the top:
   ```javascript
   const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your Web App URL (keep the quotes)
4. Save the file

### D. Test It

1. Open `index.html` in your browser
2. Click one of the buttons
3. Check your Google Sheet - you should see a new row with the data!

---

## Step 2: Host Your Website (5 minutes)

### Option A: Netlify (Recommended - Easiest)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub (or email)
3. Drag and drop your **entire SnapSort folder** onto Netlify
4. Wait 30 seconds for deployment
5. You'll get a URL like: `https://snapsort-abc123.netlify.app`
6. (Optional) Click "Domain settings" to customize the URL

### Option B: GitHub Pages

1. Create a new repository on GitHub
2. Upload your files (index.html, style.css, script.js)
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be at: `https://yourusername.github.io/snapsort`

### Option C: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → Project
4. Import your SnapSort folder
5. Click Deploy
6. You'll get a URL like: `https://snapsort.vercel.app`

---

## Step 3: Share with 100 People

1. Copy your hosted URL
2. Send it to your 100 people via:
   - Email
   - WhatsApp/iMessage
   - Social media
   - QR code (use [qr-code-generator.com](https://www.qr-code-generator.com))

---

## Step 4: Monitor Results

1. Open your Google Sheet
2. Watch responses come in real-time!
3. Each row shows:
   - **Timestamp**: When they clicked
   - **Action**: "signup" or "decline"
   - **User Agent**: Their browser/device
   - **Screen Size**: Their screen resolution

### Calculate Conversion Rate:

```
Conversion Rate = (Signups ÷ Total Responses) × 100
```

---

## Troubleshooting

### No data appearing in Google Sheet?

- Check that you replaced `YOUR_GOOGLE_SCRIPT_URL_HERE` in script.js
- Open browser console (F12) - any error messages?
- Make sure your Google Apps Script deployment is set to "Anyone" access

### Button clicks not working?

- Check browser console for errors
- Make sure all 3 files (HTML, CSS, JS) are in the same folder
- Try a different browser

### Website not loading after deployment?

- Check that all files uploaded correctly
- Wait 1-2 minutes for deployment to complete
- Clear your browser cache

---

## Quick Reference

**Your Google Sheet**: [Link to your sheet]
**Your Hosted Website**: [Link after deployment]
**Analytics Location**: Your Google Sheet, real-time updates

---

## Need Help?

Common issues:

- **CORS errors**: Normal with Google Apps Script's no-cors mode
- **Slow responses**: Google Sheets can take 1-2 seconds to update
- **Missing data**: Check that script.js has the correct SCRIPT_URL
