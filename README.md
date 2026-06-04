# Ahmed Raza Shaikh — Portfolio

Personal portfolio site. Single-page, dark-themed, fully responsive.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

---

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — only needed for the contact form
npm run dev                  # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm run type-check` | Type-check without emitting |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Font, metadata, body shell, nav + ambient bg
│   ├── page.tsx                # Composes all sections
│   ├── globals.css             # Tailwind v4 @theme tokens + global styles
│   ├── sitemap.ts / robots.ts  # SEO
│   ├── opengraph-image.tsx     # Dynamic social share image
│   └── api/contact/route.ts    # Contact form handler
├── components/
│   ├── Navbar.tsx  NavDots.tsx  AmbientBg.tsx  Footer.tsx
│   ├── sections/   # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/         # Reusable: Button, Section, Pill, SectionHeader,
│                   #   SkillCard, ProjectCard, ExperienceItem,
│                   #   ContactLink, ContactForm
├── data/           # projects.ts, skills.ts, experience.ts
├── hooks/          # useActiveSection.ts
└── lib/            # constants.ts, utils.ts, scroll.ts
```

All content is data-driven — edit `src/data/*` and `src/lib/constants.ts` to update the site.

---

## Adding a project

Edit `src/data/projects.ts`:

```ts
{
  title: "Your Project",
  stack: ["Node.js", "React"],
  accent: "#8b5cf6",                       // violet / cyan / emerald / amber
  screenshot: "/screenshots/project.png",  // drop the PNG in /public/screenshots
  liveUrl: "https://your-app.com",         // null = button disabled
  githubUrl: "https://github.com/you/repo",// null = button disabled
  desc: "Short description.",
}
```

The card auto-shows the image and activates both buttons. For remote image hosts,
add the domain to `images.remotePatterns` in `next.config.ts`.

---

## Contact form

`POST /api/contact` validates input (with a honeypot field for spam).

- **No env keys set** → submissions are logged to the server console and the form
  reports success. Good for local dev.
- **With keys set** → sends email via the [Resend](https://resend.com) REST API
  (no SDK dependency). Set in `.env.local` / your host:

  ```
  RESEND_API_KEY=...
  CONTACT_TO_EMAIL=shaikhahmedraza9@gmail.com
  CONTACT_FROM_EMAIL=portfolio@yourdomain.com   # must be a verified Resend sender
  ```

---

## Deployment

### Vercel (recommended)

Vercel uses its own build pipeline (not Docker) — zero config.

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the contact-form env vars under **Settings → Environment Variables**.
4. Deploy. Add a custom domain under **Domains** and set `NEXT_PUBLIC_SITE_URL`.

### Docker (Cloud Run, Fly.io, Railway, self-host)

The app uses `output: "standalone"`, so the image stays small.

```bash
docker build -t ahmed-portfolio .
docker run -p 3000:3000 \
  -e RESEND_API_KEY=... \
  -e CONTACT_TO_EMAIL=... \
  -e CONTACT_FROM_EMAIL=... \
  ahmed-portfolio
```

> Note: Vercel does **not** run Docker images — the Dockerfile is for other
> container platforms. Both paths are supported out of the box.

---

## Notes

- Server Components by default; only `Navbar`, `NavDots`, and `ContactForm` are
  client components (they need scroll/interaction state).
- Section reveal animations are pure CSS (scroll-driven), respect
  `prefers-reduced-motion`, and degrade gracefully where unsupported.
- Tailwind v4 is configured CSS-first via `@theme` in `globals.css` (no
  `tailwind.config.ts` needed).
```
