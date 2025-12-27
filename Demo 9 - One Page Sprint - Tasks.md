# Development Tasks - Demo 9 (One Page Sprint / Ultra-fast Conversion)

Source docs:

- `docs/global prompt.md` (general Astro + SEO baseline)
- `one-page-sprint/demo9.md` (Demo 9 overrides: **no Tailwind**, tokens + scoped CSS)

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [ ] Confirm business type/theme for the demo (tradie / consultant / cleaning / mobile service / small agency).
- [ ] Confirm brand name (default: "One Page Sprint") + tagline/hero headline direction.
- [ ] Confirm primary conversion actions:
  - [ ] Calls (mobile-first)
  - [ ] Form submissions
- [ ] Confirm site structure is **single page only** (`/`), no extra routes.
- [ ] Confirm CTA labels:
  - [ ] Primary: "Get a free quote" (scrolls to form)
  - [ ] Secondary: "Call now" (`tel:`)
- [ ] Choose ONE strict palette option (tokens):
  - [ ] Option A: Tech Blue
  - [ ] Option B: Modern Green
  - [ ] Option C: Punchy Orange
- [ ] Choose typography approach:
  - [ ] System font stack only (recommended for speed), OR
  - [ ] Optional hosted swap later (Space Grotesk headings + Inter body)
- [ ] Confirm whether pricing tier selection pre-fills the form (optional but recommended).
- [ ] Confirm whether smooth-scroll uses zero JS (anchor only) or tiny JS enhancement.
- [ ] Confirm Perth-local placeholders (suburbs + service area line).

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [ ] Create a new Astro project (static output).
- [ ] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [ ] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [ ] Add/verify npm scripts: `dev`, `build`, `preview`.
- [ ] Ensure **Tailwind is not installed/used** (Demo 9 constraint).
- [ ] Create base folder structure:
  - [ ] `src/pages/index.astro`
  - [ ] `src/components/` (section components)
  - [ ] `src/styles/global.css` (tokens + layout + utilities)
  - [ ] `src/data/` (services/testimonials/faqs/pricing)
- [ ] Add minimal placeholder assets (optional): one hero image max + OG image.

## Phase 2 - Design System (Tokens + Clean CSS)

- [ ] Implement `:root` tokens in `src/styles/global.css`:
  - [ ] Colors (bg/text/muted/surface/accent) from the chosen palette
  - [ ] Spacing scale (4/8/12/16/24/32/48/72)
  - [ ] Radius (cards/images soft; buttons 12–14px)
  - [ ] Type scale (H1/H2/body/small) + max line length (60–70ch)
- [ ] Add layout helpers in `global.css`:
  - [ ] `.container` (responsive max width)
  - [ ] `.section` (consistent padding + separators)
  - [ ] Grid helpers for 12-col “feel” (simple responsive grid, not complex)
- [ ] Define UI patterns:
  - [ ] Primary button (solid accent, white text, strong hover)
  - [ ] Secondary button (outline)
  - [ ] Cards (soft radius, subtle border, hover shadow desktop only)
  - [ ] Hairline borders + faint gradient dividers for section separation
  - [ ] Inline SVG icons (2px stroke, consistent sizing)
- [ ] Implement focus-visible styles and reduced motion (`prefers-reduced-motion`).

## Phase 3 - Components (Astro)

- [ ] Create section components:
  - [ ] `Header.astro` (sticky, lightweight; logo wordmark; Call/Get Quote CTAs)
  - [ ] `Hero.astro` (headline + subhead + CTAs + proof panel + microcopy)
  - [ ] `PainSolution.astro` (pain bullets + solution bullets, max 8 total)
  - [ ] `Services.astro` (3–6 service cards with icons)
  - [ ] `SocialProof.astro` (logo strip + testimonials + optional before/after stats)
  - [ ] `Pricing.astro` (3 tiers; middle “Most popular”; CTA per tier)
  - [ ] `FAQ.astro` (use `<details><summary>` styled; accessible; minimal/no JS)
  - [ ] `ContactForm.astro` (conversion core; hidden pricing tier; success state)
  - [ ] `FooterNAP.astro` (NAP + Perth service area line)
- [ ] Ensure components are semantic and portable (clean markup; no utility-heavy HTML).

## Phase 4 - Content & Data Layer

- [ ] Create data files in `src/data/`:
  - [ ] `services.json` (3–6 items: icon key, title, description, “Included” flag)
  - [ ] `testimonials.json` (3 items: name + Perth suburb + rating + outcome line)
  - [ ] `faqs.json` (6–8 items: Q/A)
  - [ ] `pricing.json` (Starter/Standard/Premium: price placeholder, inclusions, turnaround line, popular flag)
- [ ] Use realistic Perth-local placeholders lightly (Leederville, Victoria Park, Fremantle, Myaree, etc.).
- [ ] Add proof panel placeholders (rating, jobs completed, 3 bullets).

## Phase 5 - Single Page Assembly (`src/pages/index.astro`)

- [ ] Compose the page in this exact conversion order:
  - [ ] Global header (sticky)
  - [ ] Hero + CTA + proof panel
  - [ ] Pain + solution bullets
  - [ ] Services cards
  - [ ] Social proof (logos + testimonials)
  - [ ] Pricing tiers
  - [ ] FAQ accordion
  - [ ] Contact form
  - [ ] Footer NAP + local intent
- [ ] Ensure all CTAs work:
  - [ ] “Get a free quote” scrolls to the form
  - [ ] “Call now” uses `tel:` links
  - [ ] Pricing tier CTA scrolls to form and sets hidden tier (optional but recommended)
- [ ] Add hero background accent (CSS-only gradient blob or subtle pattern).
- [ ] Keep hero copy tight (1–2 lines + short subcopy).

## Phase 6 - SEO & GEO (Perth)

- [ ] Page title + meta description (conversion-focused, not hype).
- [ ] Canonical URL set correctly (respecting `site` + `base`).
- [ ] OpenGraph + Twitter card meta with placeholder OG image.
- [ ] Add JSON-LD schema (pick the best fit for the chosen business):
  - [ ] `LocalBusiness` with Perth, WA address/service area fields
  - [ ] Optional: `FAQPage` schema (if FAQs are stable)
- [ ] Include NAP + “Serving Perth metro…” suburb line in footer.
- [ ] Add `robots.txt`.
- [ ] Add sitemap (if straightforward) and verify it works with the configured `site`.

## Phase 7 - Accessibility & UX Checks

- [ ] Skip link works and is visible on focus.
- [ ] Focus states are visible (not color-only).
- [ ] Contrast AA minimum (accent links must pass on background).
- [ ] FAQ accordion is accessible (`summary` focusable; clear states; no keyboard traps).
- [ ] Buttons/links are real elements (no div-click areas).
- [ ] Tap targets are 44px+ on mobile.
- [ ] Phone number is always easy to access (header + sticky call button behavior if implemented).

## Phase 8 - Performance

- [ ] Minimal JS only (optional smooth scroll + pricing tier selection); otherwise none.
- [ ] No heavy sliders, no video backgrounds, no 3rd-party widgets.
- [ ] Images:
  - [ ] Use 1 hero image max (optional); prefer CSS illustration/pattern
  - [ ] Use modern formats; explicit width/height; lazy-load below fold
- [ ] Fonts:
  - [ ] Prefer system fonts; if adding web fonts, limit to one family and use `display: swap`
- [ ] Target Lighthouse 95+ on mobile across categories (aim 100).

## Phase 9 - Deployment & Handoff

- [ ] Add build/run instructions (README or `/docs/`):
  - [ ] `npm install`
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Final acceptance checklist:
  - [ ] Single URL / single page only
  - [ ] All required sections present in order
  - [ ] CTAs scroll to form and `tel:` works
  - [ ] FAQ works via `<details>` (preferred) with minimal/no JS
  - [ ] No Tailwind, no UI frameworks
  - [ ] Mobile-first and fast

## Optional / Bonus

- [ ] Add a sticky mobile “Call Now” button (only if it doesn’t cover key content).
- [ ] Add pricing tier prefill via query params (e.g., `?tier=standard`) as well as button selection.
- [ ] Add lightweight inline validation + friendly success state (no backend required).

