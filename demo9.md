Demo 9 — One-page conversion (Ultra fast) “One Page Sprint”

Astro demo prompt (no Tailwind — use scoped CSS + design tokens)

Goal

Build a single-page, ultra-fast landing site for “fast/simple/cheap” businesses (think: tradies, consultants, cleaning, mobile services, small agencies) whose only goal is leads (calls + form submissions).

Core conversion model

Promise + CTA (above the fold)

Why this / why now (pain → solution)

What you get (services)

Proof (reviews + logos)

Decision (pricing)

Objection handling (FAQ)

Final CTA (contact)

Design system (proper choices)
Why NOT Tailwind here

This demo is meant to sell speed + simplicity. Tailwind encourages large utility-heavy HTML (more bytes + less “design system clarity” in a demo). Instead:

Use design tokens in :root

Use one CSS file + component-scoped CSS where needed

Keep markup clean, semantic, and portable for client handoff

Style direction

“Bold Modern Landing”: crisp typography, high contrast, generous whitespace, modern gradients used sparingly, and a single strong accent color.

Visual language

Layout: 12-col feel, but implement as simple responsive containers

Section separators: subtle hairline borders + faint gradient dividers

Icons: inline SVG (tiny set), consistent 2px stroke, same size everywhere

Cards: soft radius, subtle shadow, no glassmorphism

CTAs: one primary button style, one secondary outline style

Color palette (tokens)

Choose one of these palettes. Keep it strict: 1 accent, 1 background, 1 text, 1 muted.

Option A — Tech Blue (safe, high trust)

Background: #0B1020 (deep navy) or #F7F8FB (light)

Text: #0E1222 (light theme) / #F2F5FF (dark theme)

Accent: #3B82F6 (blue)

Muted: #6B7280

Surface: #FFFFFF or #111A33

Option B — Modern Green (local services)

Background: #F7FAF8

Text: #0F1A14

Accent: #16A34A

Muted: #64748B

Surface: #FFFFFF

Option C — Punchy Orange (cheap/fast vibe)

Background: #FFF7ED

Text: #1F2937

Accent: #F97316

Muted: #6B7280

Surface: #FFFFFF

Rule: Use accent only for primary CTA, links, and pricing highlight.

Typography (explicit choices)

Use system stack by default to avoid font requests and maximize performance, but allow one optional Google font as a “swap in later”.

Default (recommended for speed)

Headings: system-ui stack, 700–800 weight

Body: system-ui stack, 400–500

If you want one hosted font (optional)

Headings: Space Grotesk (700)

Body: Inter (400/500)

Type scale

H1: clamp(2.25rem, 4vw, 3.25rem)

H2: clamp(1.5rem, 2.5vw, 2rem)

Body: 1rem–1.0625rem

Small: 0.9375rem

Line lengths

Max paragraph width: 60–70ch

Keep hero copy to 1–2 lines + short subcopy

Components & UI patterns
Buttons

Primary: solid accent background, white text, 12–14px radius, strong hover

Secondary: transparent + 1px border, inherits accent

Add microcopy under hero CTA:

“Reply within 1 business day”

“No lock-in, no jargon”

Cards

For Services + Pricing:

16px padding mobile / 24px desktop

Border: 1px rgba(…, 0.08)

Shadow: subtle, only on hover (desktop)

Icons

Use 6–10 consistent SVG icons:

Bolt (speed)

Phone

Shield (trust)

Calendar

Check circle

Map pin

Page layout (single page)
0) Global header (sticky, lightweight)

Left: logo wordmark (text-based)

Right: “Call now” + “Get quote” buttons

Sticky with slight blur only if cheap (otherwise just border + solid background)

Mobile: collapse to logo + CTA button.

1) Hero + CTA (must be conversion-ready)

Hero headline formula: Outcome + speed
Examples:

“A clean one-page site that gets you leads — live this week.”

“Simple website. Clear offer. More enquiries.”

Subheadline: 1 sentence on who it’s for + why it works.

Primary CTA: “Get a free quote” (scroll to form)
Secondary CTA: “Call now” (tel:)

Hero layout

Left: text + CTAs

Right: “proof panel” card with:

⭐ 4.9 average rating (placeholder)

120+ jobs completed (placeholder)

3 bullets: “Fast turnaround / Mobile-first / SEO-ready”

Add a subtle background accent:

gradient blob behind hero (CSS-only) OR thin diagonal pattern (CSS)

2) Pain → Solution bullets (fast scanning)

Title: “If your website does any of these, you’re losing leads:”

Too slow

Too hard to contact you

Not clear what you do

Doesn’t look good on mobile

Then: “One Page Sprint fixes it with:”

One clear offer

One clear CTA

Proof + pricing

Instant contact options

Keep to 8 bullets max, two columns on desktop.

3) Services cards (3–6 items)

Title: “What we build”
Cards:

“One-page landing”

“Call + quote funnel”

“Basic local SEO setup”

“Copy polish”

“Analytics ready”

“Fast hosting setup”

Each card includes:

Icon

1-line title

2-line description

Tiny “Included” badge where relevant

4) Social proof (make it feel real)

Two-layer proof:

Logo strip (5–8 grey placeholders)

Testimonials (3 cards)

Name + suburb (Perth-based placeholders)

Star rating

Short, specific outcome (“Calls doubled in 2 weeks” style)

Optional: “Before/After” mini stat pills:

“Load time: 6.2s → 1.1s”

“Enquiry rate: +38%”

5) Pricing tiers (Starter / Standard / Premium)

Goal: make selection easy.

Layout

3 cards, middle one “Most popular”

Monthly vs one-off? Keep it one-off for “cheap/fast” vibe:

Starter: “Perfect to launch”

Standard: “Best value”

Premium: “Best for growth”

Pricing card content

Price placeholder (don’t over-specify)

5–8 included items (checklist)

“Turnaround time” line (big)

CTA per card: “Choose Starter” etc. (scrolls to form with hidden field)

Add a note under pricing:

“Hosting and domain can be handled for you.”

6) FAQ accordion (minimal JS or CSS-only)

6–8 questions max:

“How fast can it go live?”

“Can I edit text/images?”

“Do you do hosting?”

“What if I need more pages later?”

“Is SEO included?”

“Can you connect forms to email?”

Interaction requirement: accessible (button + aria-expanded).
If you want zero JS, use <details><summary> styled nicely.

7) Contact form (conversion core)

Title: “Get a quote in 60 seconds”
Fields (keep minimal):

Name

Email

Phone (optional but recommended)

Business type (select)

Suburb (text)

Message (textarea)

Hidden: selected pricing tier

Add:

Privacy microcopy: “No spam. Just a reply.”

Alternative CTA: “Prefer to call? (08) XXXX XXXX”

8) Footer NAP + Local intent

Include:

Business name

Address (or service area)

Phone

Email

Hours

ABN (optional)

Suburb list line (short): “Serving Perth CBD, Fremantle, Subiaco, …”

Performance rules (hard constraints)

Minimal JS: only for smooth scroll + pricing tier selection (optional). Otherwise: none.

No heavy sliders, no video backgrounds, no 3rd-party widgets.

Images:

Use 1 hero image max (optional). Prefer CSS illustration/pattern.

If images used: modern formats, explicit width/height, lazy-load below fold.

Fonts:

Prefer system fonts; if using web fonts, load one family, display: swap.

Lighthouse targets:

95+ on mobile across categories (aim 100).

Accessibility:

Proper contrast, focus states, real buttons/links, skip link.

Astro implementation guidance (without Tailwind)
Structure

src/pages/index.astro (single page)

src/components/:

Header.astro

Hero.astro

PainSolution.astro

Services.astro

SocialProof.astro

Pricing.astro

FAQ.astro

ContactForm.astro

FooterNAP.astro

src/styles/global.css (tokens + layout + utilities)

src/data/:

services.json

testimonials.json

faqs.json

pricing.json

CSS approach (clean + scalable)

global.css: tokens + base styles + layout helpers (.container, .section, .grid)

Component-scoped <style> only for unique visuals (hero background, separators)

Content defaults (placeholders that feel realistic)

Use Perth-local placeholders lightly:

Testimonials mention suburbs (Leederville, Victoria Park, Fremantle, Myaree, etc.)

Footer: “Serving Perth metro”

Contact: “Perth, WA”

Tone: practical, direct, not “agency fluff”.

Final acceptance checklist

Single URL / only

All sections present in order

CTA buttons scroll to form

Pricing selection pre-fills form (optional)

FAQ works with <details> (preferred)

No Tailwind, no UI frameworks

Minimal JS (or none)

Mobile-first and fast