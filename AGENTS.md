# Viteo Studio — Site Web

Site vitrine haute performance : Astro 5, Tailwind CSS 4, TypeScript.
Deux langues (FR/EN), deux thèmes (dark/light), déploiement cible : Vercel.

## Commandes

```bash
# Node 22 requis (nvm use 22)
npm run dev       # Serveur de développement
npm run build     # Build production → dist/
npm run preview   # Prévisualisation du build
```

## Architecture

```
src/
├── components/sections/   # Hero, Stats, Services, Process, Pricing, Testimonials, CTA
├── i18n/ui.ts             # TOUT le texte FR + EN — éditer ici
├── layouts/BaseLayout.astro
├── pages/fr/ & pages/en/  # Pages des deux langues
└── styles/global.css      # Design tokens CSS (thème dark/light)
```

## Design system

- `--c-accent` : #3DFF7A (dark) / #007A34 (light) — vert Lighthouse
- `--font-display` : Space Grotesk Variable
- `--font-body` : Inter Variable
- `--font-mono` : ui-monospace
- Thème : `data-theme="dark|light"` sur `<html>`

## i18n

Toutes les traductions : `src/i18n/ui.ts`
Fonctions : `useTranslations(lang)`, `localizePath(path, lang)`
Langues : `fr` (défaut), `en`

## BMAD v6.9.0

Installé dans `_bmad/`. Langue : Français. Output : `_bmad-output/`

Agents disponibles :
- `/bmad-agent-pm` — Product Manager (PRD, epics)
- `/bmad-agent-architect` — Architecture technique
- `/bmad-agent-dev` — Développement
- `/bmad-agent-ux-designer` — UX Design
- `/bmad-create-prd` — Créer un PRD
- `/bmad-create-epics-and-stories` — Stories
- `/bmad-brainstorming` — Brainstorming

## SEO

- Schema.org JSON-LD dans BaseLayout (Organization)
- Hreflang FR ↔ EN sur toutes les pages
- Sitemap : `@astrojs/sitemap` (auto-généré au build)
- Open Graph + Twitter Card sur toutes les pages
- Score Lighthouse cible : 95-100/100

## Déploiement Astro

- [Pages et routing](https://docs.astro.build/en/guides/routing/)
- [Composants Astro](https://docs.astro.build/en/basics/astro-components/)
- [i18n](https://docs.astro.build/en/guides/internationalization/)
