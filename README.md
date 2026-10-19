# Lasso — Modern Payment Infrastructure Landing Page

A complete, responsive, production-quality recreation of the Lasso payment-orchestration SaaS landing page, built with React 18, Vite, and Tailwind CSS.

## 🚀 Overview & Features

- **11 Exact Sections in Order**:
  1. **Header**: Normal-flow (non-sticky) navigation with cactus mark + `lasso` wordmark, 5 in-page anchor links, compact "Get in touch" CTA, and an accessible mobile drawer with keyboard/focus management.
  2. **Hero**: Two-line Bricolage Grotesque headline framed by floating armchair & backpack product previews, light-gray hairline connectors to `Trial A` / `Trial B` pills, and central cactus emblem.
  3. **Payment Provider Strip**: Shallow, rounded white container with 9 recognized payment provider SVG marks (Shop Pay, Mastercard, Klarna, Google Pay, Apple Pay, Affirm, Adyen, PayPal, Checkout.com).
  4. **Asymmetric Feature Grid**: Pale-blue outer container holding:
     - 2/3 Checkout card with realistic interactive order summary, headphones SVG, skeleton bars, and Apple Pay / G Pay / Klarna pills.
     - 1/3 Conversion card with `7.35%` metric, `+1.62%` change pill, and blue area chart.
     - 3 bottom cards: *Grow with insights* (95.4% pass-rate arc), *Protect revenue* (blocked transaction alert), and *Earn more* (cart with 1-click upsell bump).
     - Signature inline icon chips embedded directly into headings.
  5. **"Send volume. We can handle it."**: 3 equal cards with blue-toned wave and cloud vector art, featuring volume distribution progress bars, floating payment pills, and a live session A/B routing node graph.
  6. **"No transaction left behind."**: Hub-and-spoke payment orchestration network with a central ~200×140px blue tile (wave art, lasso wordmark, cactus base) connected via curved radial lines to 8 payment processor nodes.
  7. **Checkout as a Service**: Full-bleed pale-blue band featuring a 6-item vertical selector with tablist ARIA semantics, paired with a live 3-device checkout simulator panel that dynamically reacts to the active selection.
  8. **Pricing**: Annual / Monthly switchable toggle powering Growth (pale blue card with 10 features and 1% fee note) and Enterprise (white card with custom pricing and volume fee rate) from a single config object.
  9. **FAQ**: Narrow ~720px column with 6 accordion rows, smooth height transitions, rotating `+` / `−` triggers, and ARIA expanded attributes.
  10. **"Sync."**: Understated 3-step onboarding workflow cards with subtle borders and step counters.
  11. **Footer**: Upper section with brand copy, email signup form (with client-side regex validation and environment endpoint handling), and 4 navigation columns. Lower section with a 420–500px cool pale-blue alpine mountain landscape SVG overlaid with a giant cropped semi-transparent `lasso` wordmark.

## 🎨 Typography & Color System

- **Fonts**:
  - `Bricolage Grotesque`: Headlines, card titles, display metrics, plan names, prices, and wordmark.
  - `Poppins`: Navigation, paragraphs, buttons, captions, form inputs, metadata, and FAQ copy.
- **Brand Colors**:
  - `--blue`: `#397AF4` (CTAs, active states, charts, links)
  - `--navy`: `#16223B` (Headings, primary text)
  - `--bg`: `#FFFFFF` (Page background)
  - `--pale`: `#F0F6FF` (Cards, Checkout-as-a-Service band)
  - `--border`: `#E6ECF4` (Subtle card and section dividers)
  - `--muted`: `#69758A` (Secondary text and metadata)

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18+
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev

# Compile TypeScript and build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment (e.g. Vercel, Netlify, Cloud Run)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or 20.x

## ⚙️ Configuration & Content Editing

All text, pricing, features, and navigation links live in organized TypeScript files under `src/data/`:
- `src/data/nav.ts`: Top bar navigation items and anchor links.
- `src/data/logos.ts`: Payment provider strip names and categories.
- `src/data/features.ts`: Asymmetric feature grid headlines, metrics, and checkout mock items.
- `src/data/volume.ts`: Volume scaling cards and descriptions.
- `src/data/services.ts`: Checkout as a Service tabs, bullet points, and device preview mock data.
- `src/data/pricing.ts`: Growth and Enterprise pricing, discounts, cadence labels, and feature checklists.
- `src/data/faqs.ts`: FAQ questions and answers.
- `src/data/workflow.ts`: 3-step onboarding workflow cards.
- `src/data/footer.ts`: Footer brand description and link columns.

## ✉️ Form Endpoint Configuration

The contact sales / email capture form in the footer is wired to submit via `POST` to the environment variable `VITE_FORM_ENDPOINT`.

To configure:
1. Create a `.env.local` file in the root directory:
   ```env
   VITE_FORM_ENDPOINT="https://your-api-endpoint.com/api/contact"
   ```
2. If `VITE_FORM_ENDPOINT` is omitted or left blank, the form validates the email and displays a clear notice: *"Form endpoint not configured (set VITE_FORM_ENDPOINT in environment)"*. It will never fabricate a fake success state.

## 🏷️ Simplified Logos for Production Replacement

The following payment marks are implemented as lightweight inline SVGs to guarantee zero external asset breakage:
- **Shop Pay** (`src/components/PaymentPartnerStrip.tsx`)
- **Mastercard** (`src/components/PaymentPartnerStrip.tsx`)
- **Klarna** (`src/components/PaymentPartnerStrip.tsx`)
- **Google Pay** (`src/components/PaymentPartnerStrip.tsx`)
- **Apple Pay** (`src/components/PaymentPartnerStrip.tsx`)
- **Affirm** (`src/components/PaymentPartnerStrip.tsx`)
- **Adyen** (`src/components/PaymentPartnerStrip.tsx`)
- **PayPal** (`src/components/PaymentPartnerStrip.tsx`)
- **Checkout.com** (`src/components/PaymentPartnerStrip.tsx`)

For enterprise production use, replace these with your organization's licensed brand SVG files from their respective merchant partner kits.
