# UnlockLab Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild unlocklab.ai around The Command Center Build Intensive (UnlockLab × SkWx). The new site has an Editorial look, a working inquiry form that emails Rafael, and truthful metadata and structured data.

**Architecture:**
- **One source of facts.** `lib/offer.ts` is the single source of truth for every offer fact: name, price, format, proof and contact details. The pages, metadata and JSON-LD all read from it, so they can't drift apart.
- **The form.** It posts to a Next.js route handler that validates the submission with pure functions in `lib/inquiry.ts` and sends a plain-text email through Resend.
- **Past workshops** are a static list in `lib/workshops.ts`. Nothing is sorted into "past" or "upcoming" at build time anymore.

**Tech Stack:**
- existing: Next.js 15.5 (App Router), React 19, Tailwind 3, `next/font/google` (Fraunces and Inter)
- added: `resend` (^6.37) for email and `vitest` (^5.1) for unit tests

**Spec:** `docs/superpowers/specs/2026-11-09-unlocklab-redesign-design.md`. Read it before starting. It holds the facts, tone rules and anti-goals.

## Global Constraints

- Work on branch `redesign/command-center-intensive`. Never push to `main`. Merging needs Rafael's approval of the Vercel preview.
- **Course facts:** add none beyond spec §4–§5 and the overview doc named in spec §3. No invented testimonials, numbers, superlatives or guarantees.
- **Offer name:** "The Command Center Build Intensive". **Headline:** "Build your personal productivity engine."
- **Definition, verbatim:** "A personal productivity engine: your context, your voice, your design system, your workflows."
- **Proof attribution, verbatim:** "Results reported by the CEO of a strategic communications firm, for their own work, after six months using the system."
- **Facts:** price $1,500 per person (USD). Format: a 1:1 discovery call plus four live 2-hour sessions, **online**. "First cohort forming now," with no dates anywhere.
- **Who runs it:** UnlockLab and SkWx are presented as **partners**. SkWx is "an innovation lab and AI solutions studio." Don't center Rafael personally.
- **Words to avoid** as the main framing: "course," "class," "lesson," "curriculum," "student." No hype words like "revolutionary," "unlock your potential" or "10x." (The overview doc's own title can be cited internally but not used as page copy.)
- **The form:**
  - success text: "Thanks, we'll be in touch within one business day."
  - destination: rafael@skwx.ai
  - sender domain: unlocklab.ai
  - the visitor gets no confirmation email
- **Look:**
  - paper `#f6f2ea`, ink `#1c1b19`, muted `#5b574f`, rule `#e3ddd0`, deep paper `#efe9dd`
  - accent violet `#5b4bd1`, the only accent color
  - Fraunces for headlines, Inter for body text
  - no gradients, no stock photos, no dark mode
- **Canonical host:** `https://unlocklab.ai`. www also serves 200 today, so every page sets a canonical URL.

## Review Focus

1. **Bots fill the honeypot.** The visitor sees success and no email is sent. Test: `inquiry.test.ts › honeypot submissions are flagged as spam` (Task 6).
2. **Resend is missing or fails** (no API key, or the API returns an error). The visitor sees an error that names rafael@skwx.ai, and what they typed stays in the form. Tests: `route.test.ts › returns 500 when RESEND_API_KEY is missing` and `› returns 502 when Resend errors` (Task 6), plus a manual check in Task 8.
3. **Hostile or oversized input**: a 20,000-character message, a newline in the name (header or subject injection), or HTML in the fields. Oversized input is rejected, newlines are stripped from the subject line, and the email is sent as plain text only. Tests: `inquiry.test.ts › rejects overlong fields` and `› subject strips newlines` (Task 6).
4. **Double-clicking Submit** must not send two emails. The button is disabled while a request is in flight. This is checked manually in Task 8.
5. **Facts drift** between visible copy and JSON-LD (price, mode, provider). Test: `offer.test.ts › course JSON-LD mirrors offer facts` (Task 7).

---

### Task 1: Test harness and the offer facts module

**Files:**
- Modify: `package.json` (add a `"test": "vitest run"` script and the `vitest` dev dependency)
- Create: `vitest.config.ts` (with the `@` alias pointing to the repo root and `environment: "node"`)
- Create: `lib/offer.ts`
- Test: `lib/offer.test.ts`

**Interfaces:**
- Produces: from `lib/offer.ts`:
  - `export const SITE_URL = "https://unlocklab.ai"`
  - `export const CONTACT_EMAIL = "rafael@skwx.ai"`
  - `export const OFFER` with these fields (all `as const`):
    - `name`, `headline`, `definition`, `label` ("The Command Center Build Intensive · First cohort forming now")
    - `lede`
    - `priceUsd: 1500`
    - `sessions: 4`, `sessionHours: 2`, `mode: "online"`
    - `cohortStatus: "First cohort forming now"`
    - `responseTime: "within one business day"`
    - `whatYouNeed: string[]`, `leaveWith: string[]`
    - `weeks: { title: string; build: string[]; learn: string[] }[]`, with the four weeks from the overview doc and Build listed before Learn
    - `differentiators: { title: string; body: string }[]`, the three from the overview: Consultative / Built to solve your real problems / Taught by builders
  - `export const PROOF: { task: string; before: string; after: string }[]`, the four rows from spec §5, verbatim
  - `export const PROOF_ATTRIBUTION`
  - `export const PARTNERS`:
    - `{ unlocklab: { name: "UnlockLab", url: SITE_URL }`
    - `skwx: { name: "SkWx", url: "https://skwx.ai", description: "an innovation lab and AI solutions studio" }`
    - `fidelic: { name: "FidelicAI", description: "builds ready-to-work AI agents for businesses" } }`

- [ ] **Step 1: Install vitest, add the script and config, then write a failing test** that pins these spec values:

```ts
import { OFFER, PROOF, PROOF_ATTRIBUTION, CONTACT_EMAIL } from "@/lib/offer";
test("offer facts match the spec", () => {
  expect(OFFER.name).toBe("The Command Center Build Intensive");
  expect(OFFER.headline).toBe("Build your personal productivity engine.");
  expect(OFFER.definition).toBe("A personal productivity engine: your context, your voice, your design system, your workflows.");
  expect(OFFER.priceUsd).toBe(1500);
  expect([OFFER.sessions, OFFER.sessionHours, OFFER.mode]).toEqual([4, 2, "online"]);
  expect(CONTACT_EMAIL).toBe("rafael@skwx.ai");
  expect(PROOF_ATTRIBUTION).toBe("Results reported by the CEO of a strategic communications firm, for their own work, after six months using the system.");
  expect(PROOF.map(p => [p.before, p.after])).toEqual([
    ["4–6 hours", "45 minutes"], ["2 staff days", "1 hour"], ["6–7 hours", "1 hour"], ["2–3 hours a week", "minutes"]]);
  expect(OFFER.weeks).toHaveLength(4);
});
test("no copy uses banned classroom or hype words", () => {
  const text = JSON.stringify({ OFFER, PROOF }).toLowerCase();
  for (const w of ["course", "class", "lesson", "curriculum", "student", "revolutionary", "10x", "unlock your potential"]) expect(text).not.toContain(w);
});
```

- [ ] **Step 2:** Run `npm test`. Expected: FAIL, because `lib/offer` can't be resolved.
- [ ] **Step 3:** Write `lib/offer.ts` with the values above. Take the week, leave-with and what-you-need content from the overview doc (path in spec §3), reworded to the tone in spec §9.
- [ ] **Step 4:** Run `npm test`. Expected: PASS (2 tests).
- [ ] **Step 5:** Commit: `git add package.json package-lock.json vitest.config.ts lib/offer.ts lib/offer.test.ts && git commit -m "Add offer facts module and test harness"`

### Task 2: Editorial visual system and site shell

**Files:**
- Modify:
  - `tailwind.config.ts` (replace the color and gradient tokens)
  - `app/globals.css` (paper background and ink text; delete `.gradient-text` and `.glow-effect`)
  - `app/layout.tsx`
  - `components/Navigation.tsx`, `components/Footer.tsx`, `components/Button.tsx`
- Create: `components/CurrentYear.tsx`
- Delete: `components/Card.tsx`, once Tasks 3 and 5 stop importing it. Delete it in whichever of those tasks removes the last import.

**Interfaces:**
- Produces:
  - **Tailwind colors:** `paper`, `paper-deep`, `ink`, `muted`, `rule`, `violet`
  - **Font utilities:** `font-serif` (Fraunces, via the CSS variable `--font-serif`) and `font-sans` (Inter, via `--font-sans`)
  - **`Button`:** accepts `href?: string`, which renders a Next `<Link>` styled as a button (violet fill, `rounded`, no gradient). The variants are `primary` and `outline`.
  - **`CurrentYear`:** a `"use client"` component that renders `new Date().getFullYear()` with `suppressHydrationWarning`.

- [ ] **Step 1: Update `app/layout.tsx`.**
  - Load Fraunces (weights 400 and 600) and Inter through `next/font/google` as CSS variables.
  - Remove `className="dark"` from `<html>`.
  - Set `metadata.metadataBase = new URL(SITE_URL)`, plus a title template `"%s · UnlockLab"` and the default title `OFFER.name + " · UnlockLab"`.
- [ ] **Step 2: Rewrite the navigation.**
  - Links: wordmark "UnlockLab" (serif) → `/`, "The Intensive" → `/intensive`, "About" → `/about`, and a `Button` "Start a conversation" → `/intensive#start`.
  - Remove both Notion links. Keep the mobile menu behavior.
- [ ] **Step 3: Rewrite the footer.**
  - It contains the wordmark and the line "A partnership between UnlockLab and SkWx."
  - Links: Past workshops (`/events`), About, and the contact email (`mailto:` link).
  - The copyright line is `© <CurrentYear /> UnlockLab`.
- [ ] **Step 4: Verify.**
  - Run `npm run build`. Expected: it succeeds. Pages that still use old classes may look wrong until Tasks 3–5 rewrite them.
  - Run `grep -rn "notion.site\|gradient-primary\|gradient-text" components app/layout.tsx`. Expected: no output.
- [ ] **Step 5:** Commit: `git commit -am "Editorial visual system, navigation and footer"`

### Task 3: Past workshops (fixes the build-time events bug)

**Files:**
- Create: `lib/workshops.ts`, `lib/workshops.test.ts`
- Rewrite: `app/events/page.tsx`

**Interfaces:**
- Produces: `export type Workshop = { title: string; date: string /* YYYY-MM-DD */; time: string; place: string; host: string; summary: string; url: string }` and `export const PAST_WORKSHOPS: Workshop[]`, sorted newest first.

Decision (Claude's): no "upcoming" section exists until events resume, so nothing is ever sorted by time. That removes the bug at its source. The page title is "Past workshops," and there are no Luma iframes.

- [ ] **Step 1: Write the failing test.**

```ts
import { PAST_WORKSHOPS } from "@/lib/workshops";
test("past workshops are the two confirmed events, newest first", () => {
  expect(PAST_WORKSHOPS.map(w => [w.title, w.date])).toEqual([
    ["Next-Gen Knowledge Work with Claude Code", "2025-10-28"],
    ["Apple Silicon AI Builders Breakfast · NYC", "2025-10-08"]]);
  expect(PAST_WORKSHOPS.every(w => w.place.includes("26 Broadway"))).toBe(true);
});
```

- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3: Fill in `lib/workshops.ts`** with the details from spec §6.4.
  - Next-Gen: host "UnlockLab with SkWx and FidelicAI", url `https://luma.com/00wvf46f`
  - Apple Silicon: host "FidelicAI (Memetica Corporation)", url `https://luma.com/y73kqjyz`
- [ ] **Step 4: Rewrite `app/events/page.tsx`** as a server component.
  - Each workshop renders as a text card: title, date formatted with `timeZone: "America/New_York"`, time, place, host, summary, and a "Event page" link.
  - Below the list, add the hosts note with the SkWx and FidelicAI lines from `PARTNERS`.
  - End with a link to `/intensive`.
  - Export `metadata`: title "Past workshops", a one-sentence description, and `alternates.canonical: "/events"`.
- [ ] **Step 5: Verify.**
  - Run `npm test && npm run build`. Expected: PASS, and the build succeeds.
  - Run `grep -n "iframe\|placeholder\|new Date()" app/events/page.tsx`. Expected: no output.
- [ ] **Step 6:** Commit: `git add lib/workshops* app/events/page.tsx && git commit -m "Past workshops as static summaries"`

### Task 4: Home page

**Files:**
- Rewrite: `app/page.tsx`
- Create: `components/Proof.tsx`, `components/Definition.tsx`

**Interfaces:**
- Consumes: `OFFER`, `PROOF`, `PROOF_ATTRIBUTION` and `PARTNERS` (Task 1), and `Button` (Task 2).
- Produces: `<Proof />`, which renders the before→after rows and the attribution, and `<Definition />`, which renders "Command Center *noun*" and `OFFER.definition`. Task 5 reuses both.

- [ ] **Step 1: Build the page sections, in order.**
  1. **Opening.** Match the `.superpowers/brainstorm/69322-1794244144/content/hero-combined.html` mockup: `OFFER.label`, an `<h1>` with `OFFER.headline`, `OFFER.lede`, a `Button` → `/intensive#start`, then `<Definition />`.
  2. **"The hole in the AI story."** Write about 120 words from spec §1: enterprises with tech teams, early adopters, and the professional in the middle losing hundreds of hours to tinkering. Then the turn: this closes that gap.
  3. **`<Proof />`.** Precede it with one sentence: these results come from the same architecture, and participants build their own version around their own work.
  4. **How it works.** Three steps: discovery call → four live online sessions → you leave with a working system. Link to `/intensive`.
  5. **Closing call to action**, plus a small "Past workshops" link.
- [ ] **Step 2:** Export `metadata`: title `OFFER.name`, a description of about 155 characters naming the partnership, live online format, Claude Code and Claude Cowork, and `alternates.canonical: "/"`.
- [ ] **Step 3: Verify.**
  - Run `npm run build`, then `npx next start -p 3123`.
  - `curl -s localhost:3123/` should contain "Build your personal productivity engine.", "45 minutes" and "strategic communications firm".
  - It should not contain "Join Community" or "notion.site".
- [ ] **Step 4:** Commit: `git commit -am "New home page"` (add the new components).

### Task 5: The Intensive page and About page

**Files:**
- Create: `app/intensive/page.tsx`
- Rewrite: `app/about/page.tsx`

**Interfaces:**
- Consumes: `OFFER`, `PARTNERS`, `<Proof />` and `<Definition />` (Tasks 1 and 4). Also `<InquiryForm />` (Task 6); until Task 6 lands, render a `<div id="start" />` placeholder there.

- [ ] **Step 1: Build `/intensive`, in the order of spec §6.2.**
  - the professional's pressure
  - `OFFER.differentiators`
  - who it's for
  - the discovery call and the four weeks: each week shows **Build** items first, then Learn
  - `<Proof />`
  - leave-with and what-you-need
  - a price block: "$1,500 per person", with `OFFER.cohortStatus`
  - a section with `id="start"` holding the form

  Export `metadata` with `alternates.canonical: "/intensive"`.
- [ ] **Step 2: Rewrite About around the UnlockLab × SkWx partnership.**
  - Keep the paragraphs from the current Philosophy section that still fit spec §1 and §9. Drop anything community-, Notion- or "Teach a Class"-related.
  - Link to Past workshops.
  - Delete `components/Card.tsx` if it's no longer imported.
  - Export `metadata` with `alternates.canonical: "/about"`.
- [ ] **Step 3: Verify.**
  - Run `npm test && npm run build`.
  - Run `grep -rln "components/Card" app components`. Expected: no output.
  - `curl` `/intensive` and confirm it contains "$1,500" and "online" and does not contain the word "course".
- [ ] **Step 4:** Commit: `git add -A app components && git commit -m "Intensive and About pages"`

### Task 6: Inquiry form and email delivery

**Files:**
- Create: `lib/inquiry.ts`, `lib/inquiry.test.ts`, `app/api/inquiry/route.ts`, `app/api/inquiry/route.test.ts`, `components/InquiryForm.tsx`
- Modify: `app/intensive/page.tsx` (replace the placeholder), `package.json` (add `resend`)

**Interfaces:**
- Produces:
  - `export const EXPERIENCE_OPTIONS`: the four strings from spec §7, verbatim, in order.
  - `export type Inquiry = { name: string; email: string; role?: string; industry?: string; experience?: (typeof EXPERIENCE_OPTIONS)[number]; goal?: string }`
  - `export function validateInquiry(body: unknown): { ok: true; data: Inquiry } | { ok: false; spam?: true; errors: Record<string, string> }`
    - The honeypot field is named `website`. If it's non-empty, the result is `{ ok: false, spam: true, errors: {} }`.
    - Limits: name ≤ 100, role and industry ≤ 100 each, goal ≤ 2,000 characters. All fields are trimmed.
  - `export function formatInquiryEmail(i: Inquiry): { subject: string; text: string }`
    - The subject is `"UnlockLab inquiry: " + name`, with CR and LF removed.
    - The text lists every field, one per line.
  - The route `POST /api/inquiry` takes a JSON body and responds `200 {ok:true}`, `400 {errors}`, `500 {error:"not_configured"}` or `502 {error:"send_failed"}`.
  - Environment variables: `RESEND_API_KEY` (required), `INQUIRY_TO` (default `CONTACT_EMAIL`), `INQUIRY_FROM` (default `"UnlockLab <hello@unlocklab.ai>"`).

- [ ] **Step 1: Write failing tests in `lib/inquiry.test.ts`.**
  - **`accepts a minimal valid inquiry`:** name and email only, so `ok` is true.
  - **`requires name and a valid email`:** `{name:"", email:"x"}` returns errors with keys `name` and `email`.
  - **`honeypot submissions are flagged as spam`:** a submission with `website:"http://x"` returns `spam: true`.
  - **`rejects overlong fields`:** a goal of 2,001 characters returns an error on `goal`.
  - **`rejects unknown experience values`.**
  - **`subject strips newlines`:** with the name `"A\r\nBcc: x@y.z"`, the subject contains no `\n` or `\r`.
- [ ] **Step 2: Write failing tests in `route.test.ts`.**
  - Mock `resend` with `vi.mock`.
  - **`returns 500 when RESEND_API_KEY is missing`.**
  - **`returns 502 when Resend errors`:** the mock `emails.send` resolves `{ error: {...} }`.
  - **`sends once with replyTo set to the submitter and returns 200`:** check that `send` was called once with `to: "rafael@skwx.ai"`, `replyTo: <email>`, a `text` body and no `html`.
  - **`spam returns 200 without sending`.**
- [ ] **Step 3:** Run `npm test`. Expected: the new tests FAIL.
- [ ] **Step 4:** Implement `lib/inquiry.ts` and `app/api/inquiry/route.ts`. In the route, construct the Resend client inside the handler (so the env check runs per request) and set `export const runtime = "nodejs"`.
- [ ] **Step 5:** Run `npm test`. Expected: all tests PASS.
- [ ] **Step 6: Build `components/InquiryForm.tsx`** (client component).
  - **Fields:** labeled inputs for the spec §7 fields, a `<select>` for experience, and a visually hidden `website` input with `tabIndex={-1}` and `autoComplete="off"`.
  - **While sending:** the submit button is disabled and reads "Sending…".
  - **On 200:** replace the form with "Thanks, we'll be in touch within one business day."
  - **On 400:** show the field errors inline.
  - **On any other result or a network failure:** keep the inputs and show "Something went wrong sending this. Please email rafael@skwx.ai directly." with a `mailto:` link.
- [ ] **Step 7:** Put `<InquiryForm />` in the `#start` section of `/intensive`.
- [ ] **Step 8: Verify the build.** Run `npm test && npm run build`. Expected: PASS, and the build succeeds.
- [ ] **Step 9:** Commit: `git add -A lib app components package*.json && git commit -m "Inquiry form with Resend delivery"`

### Task 7: Metadata, robots, sitemap and JSON-LD

**Files:**
- Create: `app/robots.ts`, `app/sitemap.ts`, `lib/jsonld.ts`, `components/JsonLd.tsx`
- Modify: `lib/offer.test.ts`, `app/layout.tsx`, `app/intensive/page.tsx`

**Interfaces:**
- Produces:
  - `export function organizationJsonLd(): object`: an `Organization` named UnlockLab with `url: SITE_URL` and a description naming the partnership with SkWx. Rendered once, in the layout.
  - `export function courseJsonLd(): object`, rendered on `/intensive`, with:
    - `@type: "Course"`, `name: OFFER.name`, and a description
    - `provider: [UnlockLab Organization, SkWx Organization (url https://skwx.ai)]`
    - `offers: { @type: "Offer", price: String(OFFER.priceUsd), priceCurrency: "USD", category: "Paid" }`
    - `hasCourseInstance: { @type: "CourseInstance", courseMode: "online" }`
    - No dates, ratings or addresses.
  - `<JsonLd data={object} />` renders a `<script type="application/ld+json">`.

- [ ] **Step 1: Add a failing test to `lib/offer.test.ts`: `course JSON-LD mirrors offer facts`.**
  - `offers.price === "1500"`
  - `offers.priceCurrency === "USD"`
  - `hasCourseInstance.courseMode === OFFER.mode`
  - the provider names equal `["UnlockLab", "SkWx"]`
  - the serialized JSON doesn't contain `"startDate"` or `"aggregateRating"`
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement the JSON-LD.**
  - Write `lib/jsonld.ts` and `JsonLd`, and wire them into the layout and `/intensive`.
  - `robots.ts`: allow everything, with `sitemap: SITE_URL + "/sitemap.xml"`.
  - `sitemap.ts`: lists `/`, `/intensive`, `/about` and `/events`.
- [ ] **Step 4: Verify.**
  - Run `npm test && npm run build`.
  - Start the server.
  - `curl -s localhost:3123/robots.txt` should list the sitemap.
  - `curl -s localhost:3123/sitemap.xml` should have 4 `<loc>` entries.
  - `curl -s localhost:3123/intensive | grep -c 'application/ld+json'` should print `2`.
  - Each page's `<title>` should differ, and each should have `<link rel="canonical" href="https://unlocklab.ai/...">`.
- [ ] **Step 5:** Commit: `git add -A app lib components && git commit -m "Metadata, robots, sitemap and structured data"`

### Task 8: Preview, email setup and Rafael's review

These steps need a human. The rule from the cookbook applies: prepare everything, then give Rafael one plain instruction at each boundary.

- [ ] **Step 1:** Push the branch: `git push -u origin redesign/command-center-intensive`. Wait for the Vercel check on the commit to reach `success`, as seen in `gh api repos/rafgold3000/unlocklab-website/commits/<sha>/status`.
- [ ] **Step 2 (Rafael): Create the Resend account and API key.** Rafael signs up at resend.com and creates an API key. Claude walks him through it and adds `unlocklab.ai` as a sending domain.
- [ ] **Step 3 (Rafael or Claude in the browser): Add DNS records.** Add the DNS records Resend lists to unlocklab.ai at GoDaddy. Don't touch any other records. Wait until Resend shows the domain as **Verified**.
- [ ] **Step 4 (Rafael's Vercel login): Set the environment variables** on the `unlocklab-website` Vercel project, for both Preview and Production:
  - `RESEND_API_KEY`
  - for testing first, `INQUIRY_TO=delivered@resend.dev` (Resend's test inbox)

  Then redeploy the preview.
- [ ] **Step 5: Test the form on the preview.**
  - A valid submission returns 200, and the Resend dashboard shows it delivered to `delivered@resend.dev`.
  - Double-click Submit and confirm only one email is sent.
  - Temporarily unset the key (or point `INQUIRY_FROM` at an unverified domain), then confirm the error message with rafael@skwx.ai appears and the inputs are kept.
  - Afterwards, set `INQUIRY_TO=rafael@skwx.ai` and send one real test.
- [ ] **Step 6: Check the structured data.** Paste the preview's `/intensive` HTML into https://validator.schema.org and confirm there are no errors. Record that eligibility for Google's Course rich result was assessed separately and is not guaranteed.
- [ ] **Step 7 (Rafael): Review.** Rafael reviews the preview for tone, how SkWx is represented, and the facts. Apply his changes on the branch.
- [ ] **Step 8: Merge, with Rafael's explicit approval.**
  - Fast-forward `main` to the branch.
  - Confirm the production deploy succeeds.
  - Re-run the Task 7 Step 4 checks against `https://unlocklab.ai`.
  - Confirm the live footer shows the current year and `/events` has no iframes.
