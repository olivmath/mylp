# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start - Common Commands

```bash
# Start development server (hot reload on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server (requires build first)
npm start

# Run ESLint
npm run lint
```

## Project Overview

This is a **Next.js 16 + React 19 portfolio website** written in TypeScript. It's a single-page portfolio/landing page built with:
- **Framework:** Next.js 16 with App Router (src/app/)
- **Styling:** Tailwind CSS v4 with PostCSS
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel-ready

The site is **fully static** - no database, no API routes, just content rendered on the client. All data (projects, testimonials, hackathons, FAQs) is hardcoded within components.

## Architecture & Code Structure

### High-Level Architecture

The site follows a **composition model** where `src/app/page.tsx` imports and combines feature components into a single-page experience:

```
page.tsx (home)
  ├── Hero (headline + marquee animation)
  ├── Projetos (project showcase with dual marquees)
  ├── Hackathons (competitions with bento grid)
  ├── Testemunhos (testimonials/reviews)
  ├── FAQ (accordion Q&A)
  └── Footer (links + newsletter)
```

### Directory Organization

- **`src/app/`** - Next.js App Router structure
  - `layout.tsx` - Root layout with HTML metadata and SEO setup
  - `page.tsx` - Home page (imports all feature components)
  - `globals.css` - Global Tailwind imports and CSS variable definitions
  - `favicon.ico`

- **`src/components/`** - React components (each is its own feature section)
  - Each component is self-contained with its own data arrays and styling
  - Uses `'use client'` directive for interactive components (Hero, FAQ, Projetos)
  - Server components where no interactivity is needed (Hackathons, Testemunhos, Footer)

- **`public/`** - Static assets (SVG icons used in components)

### TypeScript Path Aliases

Use `@/` to import from `src/`:
```typescript
import { Hero } from '@/components/Hero'  // NOT ../components/Hero
```

### Component Patterns

1. **Client Components** - Use `'use client'` at the top when they need state or event handling
   - Hero: Marquee animations with CSS keyframes
   - Projetos: Dual-directional marquee scrolling
   - FAQ: useState for accordion toggle

2. **Data in Components** - Each component defines its own data arrays:
   ```typescript
   const projects = [
     { id: 1, title: "...", description: "...", ... },
     // ...
   ]
   ```
   Update data by editing the array directly in the component file.

3. **Animations** - Custom animations using:
   - CSS keyframes inside JSX `<style jsx>` tags
   - Tailwind CSS classes (animate-pulse, transition, etc.)
   - No external animation libraries (Framer Motion, etc.)

4. **Responsive Design** - Mobile-first with Tailwind breakpoints:
   - Use `sm:`, `md:`, `lg:` prefixes for responsive styles
   - Default styles apply to mobile, prefixes override for larger screens

### Styling

- **Tailwind CSS v4** with PostCSS integration
- **CSS Variables** for theme support (see `globals.css`)
- **Dark Mode Ready** - Uses `prefers-color-scheme` media queries
- **No CSS Modules** - Pure Tailwind utility classes + inline styles

### Metadata & SEO

The site uses Next.js `Metadata` API in `src/app/layout.tsx` for:
- Page title
- Meta descriptions
- Open Graph tags (social sharing)
- Language (pt-BR)

## Development Workflow

### Making Changes

1. **Edit Content** - Update component data arrays directly in `src/components/*.tsx`
2. **Edit Styling** - Use Tailwind classes in JSX or update `globals.css` for global styles
3. **Add Components** - Create new file in `src/components/`, import in `page.tsx`
4. **Hot Reload** - Changes auto-reload on `npm run dev`

### Linting

```bash
npm run lint
```

ESLint is configured for Next.js and TypeScript. Run before committing to catch issues.

### Testing

No testing framework is currently set up. Add Jest or Vitest if needed.

## Important Notes

- **Portuguese Language** - Content is in Portuguese (pt-BR)
- **No Backend** - This is a static site; no API routes or database
- **No State Management** - Data is component-local (no Redux, Context, etc.)
- **No Package Install** - Add new dependencies with care; keep the bundle lean
- **Performance** - Relies on Next.js defaults for optimization (code splitting, image optimization, etc.)
- **Vercel Deployment** - Project is configured for Vercel; `npm run build` prepares for deployment

## Common Development Tasks

### Update Project in Projetos Component
Edit the `projects` array in `src/components/Projetos.tsx`, add or remove entries.

### Update Testimonials
Edit the `testimonials` array in `src/components/Testemunhos.tsx`.

### Update Hackathons
Edit the `hackathons` array in `src/components/Hackathons.tsx`. Objects with `featured: true` appear in the top row.

### Update FAQ
Edit the `faqs` array in `src/components/FAQ.tsx`.

### Update Footer Links
Edit the links arrays in `src/components/Footer.tsx` (navigation, social, etc.).

## Recent Refactoring

From git history, recent changes include:
- Removed CTA component (previously in Hero or standalone)
- Standardized quote formatting in Testemunhos
- Redesigned Hackathons with bento grid layout
- Added marquee animations to Projetos and Hero
- Enhanced visual polish with animations

When making changes, maintain consistency with these recent patterns.
