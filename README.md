# Viteo Studio

Site vitrine haute performance pour l'agence Viteo Studio. Construit avec Astro 5, Tailwind CSS 4 et TypeScript — déployé sur Vercel.

Objectif Lighthouse : 95-100/100 en production.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Astro 5 |
| CSS | Tailwind CSS 4 (via Vite plugin) |
| Langage | TypeScript |
| Polices | Space Grotesk Variable, Inter Variable |
| Sitemap | `@astrojs/sitemap` |
| Déploiement | Vercel |

---

## Prérequis

- Node.js >= 22.12.0 (utiliser `nvm use 22`)
- npm

---

## Installation

```bash
git clone git@github.com:johnyfetra/viteo.git
cd viteo
npm install
```

## Commandes

```bash
npm run dev       # Serveur de développement — http://localhost:4321
npm run build     # Build production → dist/
npm run preview   # Prévisualisation du build local
```

---

## Structure du projet

```
src/
├── components/
│   ├── sections/          # Hero, Stats, Services, Process, Pricing, Testimonials, CTA
│   ├── ui/                # Composants UI réutilisables
│   ├── Nav.astro
│   └── Footer.astro
├── i18n/
│   └── ui.ts              # Toutes les traductions FR + EN
├── layouts/
│   └── BaseLayout.astro   # Layout principal (SEO, meta, thème)
├── pages/
│   ├── fr/                # index, services, tarifs, a-propos, contact
│   └── en/                # index, services, pricing, about, contact
└── styles/
    └── global.css         # Design tokens CSS (couleurs, typographie, thèmes)

public/                    # Assets statiques
astro.config.mjs           # Config Astro (i18n, sitemap, site URL)
```

---

## Internationalisation

Deux langues supportées : `fr` (défaut) et `en`.

Toutes les chaînes de texte sont centralisées dans `src/i18n/ui.ts`. Pour modifier un texte, éditer uniquement ce fichier — jamais directement dans les composants.

```ts
// src/i18n/ui.ts
import { useTranslations, localizePath } from '../i18n/utils';

const t = useTranslations(lang);
t('hero.title');
```

Les routes sont préfixées : `/fr/...` et `/en/...`.

---

## Thème dark / light

Le thème est géré via l'attribut `data-theme="dark|light"` sur la balise `<html>`. Les tokens CSS sont définis dans `global.css` :

```css
:root { --c-accent: #3DFF7A; }                /* dark */
[data-theme="light"] { --c-accent: #007A34; } /* light */
```

Le toggle est persisté en `localStorage` et appliqué avant le premier rendu (script inline dans `<head>`) pour éviter le flash de thème.

---

## SEO

- Schema.org JSON-LD (`Organization`) dans `BaseLayout.astro`
- Balises `hreflang` FR/EN sur toutes les pages
- Open Graph et Twitter Card configurés
- Sitemap XML généré automatiquement au build (`/sitemap-index.xml`)
- URL canonique : `https://viteo.studio`

---

## Déploiement

Le projet est configuré pour Vercel. Chaque push sur `main` déclenche un déploiement automatique.

```bash
git push origin main
```

Variables d'environnement requises : aucune pour le build de base.

---

## Pricing

| Offre | Prix | Délai |
|---|---|---|
| Essentiel | 890 € | 7 jours |
| Performance | 1 890 € | 14 jours |
| Signature | 3 900 € | 21 jours |

Garantie contractuelle Lighthouse 95+/100 à la livraison.
