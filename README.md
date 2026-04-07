# Rico Tri Wibowo — Portfolio

Personal portfolio website for **Rico Tri Wibowo**, QA Engineer & Project Manager based in Bandung, Indonesia.

Live: [rico-tri-wibowo.vercel.app](https://rico-tri-wibowo.vercel.app)

---

## Tech Stack

| Layer      | Technology                                     |
|------------|------------------------------------------------|
| Framework  | [Astro 5](https://astro.build) — static output |
| Styling    | [Tailwind CSS v3](https://tailwindcss.com)     |
| Syntax HL  | Shiki (built into Astro)                       |
| Font       | Inter — Google Fonts                           |
| Hosting    | [Vercel](https://vercel.com) — auto-deploy     |
| Repo       | github.com/ricobowo/rico-portfolio             |

---

## Branches

| Branch              | Description                   |
|---------------------|-------------------------------|
| `main`              | Vanilla HTML/CSS/JS — v0.6.2  |
| `feature/astro-dev` | Astro Dev Portfolio — v0.7.0+ |

---

## Project Structure

```
/
├── public/
│   ├── img/           # Favicon set + OG image (meta.png)
│   ├── cv/            # CV PDF — Rico_Tri_Wibowo_CV.pdf
│   └── robots.txt
├── src/
│   ├── assets/        # Profile picture (profile.png)
│   ├── components/
│   │   ├── Profile.astro            # Name, title, location, stats row
│   │   ├── Contact.astro            # Terminal widget + CV button + socials
│   │   ├── Socials.astro            # Social icon link row
│   │   ├── SocialIcon.astro         # SVG icon switcher per platform
│   │   ├── ContentLink.astro        # Tab bar label (controls radio input)
│   │   ├── ContentExperience.astro  # Tab 1: experience.json
│   │   ├── ContentProjects.astro    # Tab 2: projects.md
│   │   ├── ContentAbout.astro       # Tab 3: about.ts (TypeScript code block)
│   │   └── ContentReadme.astro      # Tab 4: README.md (professional summary)
│   ├── layouts/
│   │   └── Layout.astro             # HTML shell + SEO meta tags
│   ├── pages/
│   │   └── index.astro              # Single page — tab system + layout
│   └── styles/
│       └── global.scss              # CSS reset only
├── astro.config.mjs                 # Astro config (site URL, integrations)
├── tailwind.config.js               # Theme: colors + font family
├── CHANGELOG.md                     # Version history
└── VERSION                          # Current version number
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production (output to /dist)
npm run build
```

---

## Customization Guide

| What to change       | File to edit                              |
|----------------------|-------------------------------------------|
| Name, title, bio     | `src/components/Profile.astro`            |
| Social links         | `src/components/Socials.astro`            |
| Work experience      | `src/components/ContentExperience.astro`  |
| Portfolio projects   | `src/components/ContentProjects.astro`    |
| Skills code block    | `src/components/ContentAbout.astro`       |
| README tab content   | `src/components/ContentReadme.astro`      |
| SEO meta tags        | `src/layouts/Layout.astro`                |
| Accent color         | `tailwind.config.js` — `primary` value   |
| Site URL             | `astro.config.mjs` — `site` value        |

---

## Version History

See [CHANGELOG.md](./CHANGELOG.md) for full release notes.
Current version: **v0.7.0**

---

© 2026 Rico Tri Wibowo
