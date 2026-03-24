# Diz Eden — Luxury Short-Let Website

A premium single-page website for Diz Eden, a luxury 1-bedroom apartment in East Legon, Accra, Ghana.

## 🌐 Live Site
[https://dizeden.vercel.app](https://dizeden.vercel.app)

## 🛠️ Tech Stack
- **React** + **Vite** (fast dev & build)
- **Tailwind CSS** v3 + **shadcn/ui** components
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📁 Project Structure
```
diz-eden-website/
├── public/
│   ├── images/           ← Property photos (room1.jpg, gallery1-4.jpg, etc.)
│   └── favicon.svg
├── src/
│   ├── components/       ← All UI components
│   │   ├── AnimeNavBar.tsx
│   │   ├── HeroSection.jsx
│   │   ├── IntroSection.jsx
│   │   ├── PropertyShowcase.jsx
│   │   ├── Amenities.jsx
│   │   ├── GalleryLightbox.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   ├── BookingWidget.jsx
│   │   ├── BookingFooter.jsx
│   │   └── ui/           ← shadcn/ui primitives
│   ├── pages/
│   │   └── Home.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deploying to Vercel

### Option A — Vercel Dashboard (Recommended)
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — hit **Deploy**

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## 🔧 Before Deploying — Checklist
- [ ] Replace `233xxxxxxxxx` in `BookingWidget.jsx` and `BookingFooter.jsx` with your real WhatsApp number
- [ ] Replace placeholder images in `public/images/` with final high-res photos
- [ ] Update `og:url` in `index.html` with your final domain

## 💻 Local Development
```bash
npm install
npm run dev
```

## 📦 Build for Production
```bash
npm run build
npm run preview   # preview the production build locally
```
