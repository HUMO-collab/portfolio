# Portfolio — Deploy Instructions

## Before deploying: 2 things to update

1. Open `src/data/projects.js` and fix:
   - `email` — your actual email address
   - Add `liveUrl` for Levarto 3D once deployed
   - Add `upwork` and `fiverr` links once those are live

2. Add your profile photo to `public/` (optional but good)

## Deploy to Vercel (5 minutes)

```bash
# Step 1 — go to portfolio folder
cd "c:/Users/DELL/new operating structure formats/DEV_WORKFLOW/portfolio"

# Step 2 — install dependencies
npm install

# Step 3 — preview locally (optional)
npm run dev

# Step 4 — push to GitHub first
git init
git add .
git commit -m "feat: portfolio v1"
git remote add origin https://github.com/HUMO-collab/portfolio.git
git push -u origin main

# Step 5 — deploy via Vercel CLI
vercel
# Follow prompts: link to HUMO-collab team, set project name to "lehumo-portfolio"
# Then deploy production:
vercel --prod
```

## Your live URL after deploy
`https://lehumo-portfolio.vercel.app` (or custom domain later)

## Send this to the partner
Once live, message the partner:
> "Here's my portfolio: [URL] — includes CleanOps, Levarto 3D, Estates, and the OCR system."
