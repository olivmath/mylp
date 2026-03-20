# Portfolio Redesign Brief — Lucas Oliveira (olivmath)

## Who

- **Name:** Lucas Oliveira
- **Brand:** olivmath
- **Role:** Senior Blockchain Engineer & Cryptography Specialist
- **Background:** Mathematics + 6+ years blockchain
- **USP:** DREX/CBDC/VISA/TECBAN experience | Math background | F/OSS contributor | Excellent teacher
- **Location:** Florianópolis, SC, Brasil

## Target Audience

- Startups crypto, enterprises entering blockchain, DeFi protocols, fintechs, government/CBDC
- Wants freelance/consulting clients
- Site is a portfolio to send to people to showcase work

## What Visitors Want

- Check if he's legit
- Find a mentor/teacher/consultant
- Hire a senior blockchain/cryptography engineer
- Organize an event

## Brand Perception (desired)

- Corporate, premium, specialist
- NOT too heavy or too minimalist — a beautiful "packaging" for real work
- Easy to scan without being overloaded

## Primary CTAs

1. Schedule a call (WhatsApp)
2. Follow on social media (GitHub, LinkedIn, X)

## Content & Structure

### Essential Sections
- Hero
- Projects (with side drawer for details, no separate pages)
- Hackathons
- Testimonials
- Footer

### Nice to Have
- Blog (future)
- i18n: PT, EN, ES

### Not Needed
- FAQ (low priority)
- Newsletter (doesn't have one)

## Visual Preferences

### Liked Vibes
- Clean minimalist (b)
- Glassmorphism/futuristic (c)
- Editorial/magazine (d)

### Reference Sites
- https://www.patreon.com/ — premium creative, typography hierarchy, dark/light rhythm
- https://coralcap.co/ — institutional minimalism, editorial grid, photography
- https://www.foundersfuture.com/us — premium institutional, founder photos, metrics, clean

### Competitor
- https://www.rubenmarcus.dev — dark hacker vibe (opposite of what Lucas wants)

### Colors
- Navy blue + light blue palette, serious but animated
- Other colors that complement to form a cohesive palette

### Typography
- Infer from context (ended up using: Playfair Display, Inter, Space Grotesk, DM Sans, JetBrains Mono)

### Photos
- Has several photos, can mock for now and replace later

### Social
- LinkedIn: /in/olivmath
- GitHub: /olivmath
- X: /olivmath_

## What He Dislikes About Current Site

- Visual and overall impression feels generic/"template-like"
- Needs a beautiful packaging for real work
- Should be easy to visualize without being heavy or too minimalist

## What He Likes

- Maybe the current structure (sections order)

## Critical Feedback

- **Each design approach MUST have genuinely different layouts and structures**, not just different styling on the same skeleton. Vary: section order, grid layouts, card shapes, content hierarchy, animation patterns, and overall page flow.

## Technical Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 + PostCSS
- Static site, Vercel deployment
- Package manager: pnpm
- Shared data: src/data/content.ts

## Existing Data (src/data/content.ts)

Exports: profile, projects, hackathons, testimonials, services, quickLinks

## Available Fonts (in layout.tsx)

- `font-serif` → Playfair Display
- `font-sans` → Inter
- `font-mono` → JetBrains Mono
- `font-display` → Space Grotesk
- `font-body` → DM Sans
