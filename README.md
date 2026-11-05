# 4lads Properties – Next.js + Tailwind + Framer Motion + Prisma 7 + PostgreSQL

## Run it (first time)

```
npm install
cp .env.example .env            # Windows: copy .env.example .env
docker compose up -d            # starts PostgreSQL (Docker Desktop must be running)
npx prisma migrate dev --name init   # creates the tables
npx prisma generate                  # creates the client in app/generated/prisma
npx prisma db seed                   # loads dummy properties, team, testimonials
npm run dev                          # http://localhost:3000
```

Run `npx prisma generate` again after every change to `prisma/schema.prisma`.
`npx prisma studio` opens a browser view of your data.

## Folder map

```
app/
  page.js                 home (reads database)
  listings/page.js        filter + list (reads database)
  properties/[id]/page.js detail page (reads database)
  generated/prisma/       created by `prisma generate` – never edit
components/               Header, Reveal, Counter, PropertyCard, Gallery
data/data.js              static text: agency info, areas, stats, services
lib/prisma.js             the shared database client
prisma/
  schema.prisma           your tables
  seed.ts, seed-data.ts   dummy data loader
  migrations/             created by migrate
public/images, videos     your own photos / videos
prisma.config.ts          Prisma CLI settings (database URL comes from .env)
```

Edit rows in `npx prisma studio`, or in `prisma/seed-data.ts` and re-run the seed.
