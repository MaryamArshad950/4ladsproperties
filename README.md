# 4Lads Properties - Real Estate in Karachi – Next.js demo
```
npm install
npm run dev     # http://localhost:3000
```
- Stack: Next.js 14 + Tailwind CSS 3 + Framer Motion. Dummy data: `data/data.js` (edit agency info, listings, stats, team)
- Pages: `/` home, `/listings` (filters via URL), `/properties/[id]` detail
- Next step: replace `data/data.js` with a CMS/DB (Sanity, Strapi, Supabase) and add real photos using `next/image`.

## Images & videos
Put files in `public/images/properties/` and `public/videos/`, then reference them in `data/data.js`:
`images: ["/images/properties/1-1.jpg", ...]` and `video: "/videos/1-tour.mp4"`.
The first image is the card thumbnail; extra images become clickable thumbnails; a Video tab appears when `video` is set.
