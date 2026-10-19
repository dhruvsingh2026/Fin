# Finexaa — B2B Fashion & Leather-Goods Trading Marketplace

A responsive, production-quality landing page for **Finexaa**, a premium B2B-first trading marketplace connecting footwear, leather goods, handbag, and apparel buyers, retailers, wholesalers, and manufacturers.

Built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS 4** (`@tailwindcss/vite` with `@theme` design tokens).

---

## 📌 GitHub Repository Note

> **Repository:** `github.com/dhruvsingh2026/Fin`
> 
> As an automated workspace assistant, I operate strictly inside this AI Studio build environment and do not possess credentials or network permissions to push directly to your remote GitHub repository. All transformed and newly created files are listed below so you can apply or push them to your repository (`git status` / `git commit`).

---

## 🏛️ The 11 Sections (in exact order)

1. **Header** (`src/components/Header.tsx`): Normal-flow (non-sticky) white header with the `Finexaa` wordmark, `FinexaaMark` (geometric saddle-stitch "F"), 5 in-page anchors (`#marketplace`, `#categories`, `#suppliers`, `#how-it-works`, `#about`), "Explore Marketplace" CTA, and an accessible mobile drawer with keyboard focus trap, Escape key handling, and $\ge 44\text{px}$ touch targets.
2. **Hero** (`src/components/Hero.tsx`): B2B headline (*"Where fashion finds / its next market."*) in Bricolage Grotesque, framed by two floating product preview tiles (Low-Top Sneaker and Saddle Tote) labelled "Sample listing", hairline connectors leading to "Buyers" and "Suppliers" indicators, and a central `FinexaaMark` emblem.
3. **Category Strip** (`src/components/CategoryStrip.tsx`, `id="categories"`): Shallow rounded bordered bar with six typographic links and line icons: Leather Shoes, Sneakers, Handbags, Apparel, Wallets & Belts, and Wholesale Collections.
4. **Feature Grid** (`src/components/FeatureGrid.tsx`, `id="marketplace"`): Asymmetric grid inside a soft linen panel featuring:
   - 2/3 Discovery card with a handbag sample listing, materials, indicative price ($185 / unit · Indicative), and "Send an enquiry" action.
   - 1/3 Category overview list with category breakdown.
   - 3 lower cards: *Discover styles* (product art thumbnails), *Find suppliers* (illustrative atelier maker profile), and *Organise collections* (curated line sheet sample).
   - Signature inline icon chips embedded directly into headings.
5. **Assortment Showcase** (`src/components/AssortmentShowcase.tsx`, `id="assortment"`): *"Every category, / one marketplace."* Three equal cards featuring material backgrounds (tan leather grain with saddle stitch, linen weave, suede brown) with distinct product art (Penny Loafer, Bifold Wallet, Suede Overshirt).
6. **Trade Network** (`src/components/TradeNetworkDiagram.tsx`, `id="suppliers"`): Hub-and-spoke diagram with a central ~200×140px Ink tile with leather texture, `FinexaaMark` and `Finexaa` wordmark, connected via light radial lines to 8 commerce nodes (Retailers, Buyers, Wholesalers, Suppliers, Manufacturers, Footwear, Leather Goods, Apparel).
7. **From Discovery to Trade** (`src/components/SourcingWorkflow.tsx`, `id="sourcing"`): Full-width linen band featuring a 6-stage vertical tablist with complete keyboard navigation (Arrow Up/Down, Home, End) and an illustrative stage preview panel.
8. **Audiences** (`src/components/Audiences.tsx`, `id="audiences"`): *"Built for both sides of trade."* Two equal-height cards for *Buyers and Retailers* (linen) and *Suppliers and Sellers* (white bordered) with benefit bullets and direct enquiry CTAs.
9. **FAQ** (`src/components/FAQ.tsx`, `id="faq"`): Narrow ~720px column with 6 accordion rows detailing trading workflows, sample terms, and sourcing enquiries with a smooth CSS height/opacity transition.
10. **How Finexaa Works** (`src/components/Workflow.tsx`, `id="how-it-works"`): 3 understated workflow cards: *01. Explore Categories*, *02. Discover Products and Suppliers*, and *03. Start a Trading Enquiry*.
11. **Footer** (`src/components/Footer.tsx`, `id="about"`):
    - Upper section: Brand overview, sourcing enquiry form (`#contact`) with email validation, role selector, optional requirement textarea, and honest unconfigured endpoint handling.
    - 4 structured navigation columns with valid in-page anchors.
    - Lower section: Calm material still life SVG (folded linen, leather drape curves, saddle stitch lines) overlaid with an oversized, cropped semi-transparent `Finexaa` wordmark (~13–14vw) that scales responsively without horizontal scroll.

---

## 🎨 Design System & Color Tokens

Defined in `@theme` inside `src/index.css`:

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `ink` | `#172A25` | Headings, primary text, primary button background, focus rings |
| `leather` | `#C5A77A` | Accent fills, borders, decorative stitch marks (never text on white) |
| `leather-tint` | `#EFE6D6` | Eyebrow pills, chip backgrounds |
| `leather-border` | `#E2D5C0` | Borders for chips and pills |
| `linen` | `#F6F2EB` | Soft surfaces, full-width contrasting band, card fills |
| `surface-soft` | `#FBF9F5` | Mockup containers and subtle inner panels |
| `white` | `#FFFFFF` | Dominant page background |
| `muted` | `#6D766F` | Secondary body text on white |
| `muted-linen` | `#5E675F` | Secondary text on linen surfaces ($\ge 4.5:1$ contrast) |
| `border` | `#E7E6E0` | Subtle hairline dividers and card outlines |

### Typography
- **Bricolage Grotesque**: Hero headline, section headings, card titles, and the `Finexaa` wordmark.
- **Poppins**: Navigation, paragraphs, buttons, labels, category chips, and form fields.

---

## 📁 Data Configuration Map (`src/data/`)

All marketplace copy, sample listings, and categories are centralized in config files:
- `src/data/nav.ts`: Top bar and mobile navigation items.
- `src/data/categories.ts`: Category strip links and icons.
- `src/data/products.ts`: Sample product listings with illustrative prices and materials.
- `src/data/features.ts`: Feature grid discovery highlights, categories, and maker placeholders.
- `src/data/assortment.ts`: Three assortment cards with material themes.
- `src/data/sourcing.ts`: Sourcing workflow stages, bullets, and preview mock data.
- `src/data/audiences.ts`: Buyer & Supplier audience cards (with extension point for future pricing tiers).
- `src/data/faqs.ts`: 6 marketplace trading questions and neutral answers.
- `src/data/workflow.ts`: 3 onboarding steps for "How Finexaa works".
- `src/data/footer.ts`: Footer brand copy, navigation columns, and optional external links.

---

## ✉️ Enquiry Form Endpoint (`VITE_FORM_ENDPOINT`)

The lead enquiry form in the footer (`#contact`) submits via `POST` with the payload:
```json
{
  "email": "buyer@boutique.com",
  "role": "Buyer or retailer",
  "message": "Interested in sampling SS27 loafers",
  "source": "finexaa-landing"
}
```

- If `VITE_FORM_ENDPOINT` is configured in `.env.local`, the form sends the submission to that endpoint.
- If `VITE_FORM_ENDPOINT` is empty or omitted, the form gracefully informs the user:
  > *"Form endpoint not configured (set VITE_FORM_ENDPOINT in environment)."*
  It will never fabricate a false success state.

---

## 🛠️ Build & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Run Vite dev server (runs on port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Production build
npm run build
```

### Vercel / Netlify / Cloud Run
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `18.x` or `20.x`
- No backend server required; purely static SPA.
