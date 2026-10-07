# AeroSeæ Dashboard (Presentation Prototype)

UAV-Based Coastal Waste Monitoring and Cleanup Decision Support Dashboard.
React + Vite + Tailwind CSS v4 + Lucide + Recharts. No backend.

**All data is SAMPLE / DEMONSTRATION data. No real UAV feed is connected.**

## Run
    npm install
    npm run dev

## Build
    npm run build

## Demo accounts (password: demo1234)
- maria.demo@aerosea.example — DENR
- juan.demo@aerosea.example — LGU / DEPS
- pedro.demo@aerosea.example — TUPAD / Cleanup Coordinator

## Deploy (GitHub + Vercel)
1. `git init && git add . && git commit -m "AeroSeæ dashboard"`
2. Create an empty GitHub repo, then `git remote add origin <url> && git push -u origin main`
3. vercel.com → Add New → Project → import the repo
4. Framework: Vite (auto). Build `npm run build`, output `dist`. Click Deploy.

## Later
Replace `src/data/sampleData.js` and the login check in `src/pages/Login.jsx` with Supabase.
