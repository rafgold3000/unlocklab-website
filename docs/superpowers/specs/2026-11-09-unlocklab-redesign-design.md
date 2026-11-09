# UnlockLab website redesign: design

*Date: 2026-11-09. Owner: Rafael Goldberg. Status: draft for approval.*
*Replaces the working notes in `docs/progress-2026-11-05.md`, which hold the history of how these decisions were made.*

## 1. Intent

unlocklab.ai becomes the home of one offer: **The Command Center Build Intensive**. It is a four-week build intensive, run as a partnership between UnlockLab and SkWx, in which a busy professional builds their own AI productivity system with the people who build these systems for clients.

The site exists to make one kind of visitor feel *"this is the answer I've been looking for, and I want to talk to them,"* and then make starting that conversation easy.

### The insight the site is built around (Rafael's)

The AI productivity story has a hole in it.

- Large enterprises have technology teams rolling AI out company-wide.
- Developers and early adopters live inside the newest tools.
- Busy professionals in non-technical roles sit in between. They are somehow expected to deliver the productivity gains, so they tinker: taking classes, reading, and watching YouTube videos from unvetted people. That adds up to hundreds of hours spent understanding, practicing and working things out alone.

The intensive closes that gap. It is **not a class**. You leave with a working system and expanded capability, not academic knowledge. The outcome is radical productivity gains, shown with real results (§5) rather than claimed in adjectives.

### Who it's for (Rafael's)

Mid-career to executive professionals, roughly 35–55, in non-technical roles. They want AI's benefits fast and don't have time to learn it the slow way. No coding background needed. Most arrive **by referral**, so the site mostly has to confirm and convert someone who has already heard about it. Search engines and people's AI assistants also need to be able to find and describe it correctly.

## 2. Goals, non-goals, anti-goals

**Goals**
- A referred visitor understands the offer, believes it, and submits the form.
- The site presents SkWx accurately as an innovation lab and AI solutions studio, and as UnlockLab's partner.
- Search engines and AI assistants can read the same facts a person sees: what it is, its format, price and who runs it.
- Fix the existing bugs listed in §8.

**Non-goals**
- Online payment, booking calendars or checkout. The form starts a conversation.
- Showing cohort dates. The first cohort is forming now, and dates depend on who signs up.
- Promoting events. Events leave the main navigation (§6.4).
- Changes to skwx.ai. Those are parked for later.

**Anti-goals: these would make it a failure even if it works**
- **Hype tone or invented claims.** No made-up testimonials, numbers, superlatives or outcome guarantees. Every fact comes from §5 or the course overview.
- **Implying that participants will personally get the client's results.** The results show what the architecture can do. They are not a promise.
- **Making it about Rafael personally.** The team is SkWx, in partnership with UnlockLab.
- **Sounding like a classroom.** Avoid words like "course," "lessons," "curriculum" or "students" as the main framing. Use "intensive," "build," "session" and "participant."

## 3. Constraints

- The existing stack stays: Next.js 15 (App Router), React 19, Tailwind 3, framer-motion, deployed on Vercel. `npm run build` passes today.
- Build on a branch, preview it on Vercel, and get Rafael's review before merging. Nothing goes live without his approval.
- **Source of truth for course facts:** `SkWx Command Center/Clients/Unlock Lab/Proposals/claude-command-center-build-overview-v2-2026-10-12.md` (in Rafael's iCloud Documents under `Rafi Professional/SkWx/SkWx Command Center/SkWx Command Center/`). Copy may be reworded and reframed, but facts may not be added.
- The facts must match everywhere they appear: page text, metadata, structured data and the on-page form confirmation.

## 4. The offer (facts)

| | |
|---|---|
| Name | **The Command Center Build Intensive** |
| Headline | **Build your personal productivity engine.** |
| Definition of a Command Center (Rafael's words) | *A personal productivity engine: your context, your voice, your design system, your workflows.* |
| Who runs it | A partnership between UnlockLab and SkWx. SkWx is "an innovation lab and AI solutions studio" whose builders have deployed this system for clients. |
| Format | A 1:1 discovery call, then four live 2-hour sessions, **online** |
| Price | $1,500 per person |
| Tools | Claude Code and Claude Cowork. Name them in the subtitle or body for findability. |
| What you need | A Claude Pro account and the Claude desktop app |
| Cohort | "First cohort forming now." No dates. |
| You leave with | From the overview: a personal system built around your role, connected to your tools, already handling your first recurring tasks; reference files, skills and a design system you own; the knowledge to extend it; a certificate of completion; one hour of 1:1 SkWx support after the program |
| The four weeks | From the overview: (1) foundations of Claude Code and Cowork, (2) reference files and connectors, (3) skills and a design system, (4) Command Center architecture. Each week has *Learn* and *Build* steps. Lead with the Build steps. |

## 5. Proof

Use these exact results, presented as before → after pairs:

- Proposals and pitches: **4–6 hours → 45 minutes**
- Research and business development prep: **2 staff days → 1 hour**
- Deck and presentation drafting: **6–7 hours → 1 hour**
- Team management and pipeline visibility: **2–3 hours a week → minutes**

Attribution, wording as agreed with Rafael:
> *Results reported by the CEO of a strategic communications firm, for their own work, after six months using the system.*

Framing: these come from the Command Center architecture that SkWx deploys for clients. Participants build their own personal version of the same architecture around their own work. Don't name the client or the team size. These are results, not quotes, so write no quotes in the client's voice.

## 6. Pages

Visual direction B, **Editorial / executive** (Rafael's choice):
- warm off-white paper (about `#f6f2ea`) with near-black text
- serif headlines (Fraunces) and Inter body text
- SkWx violet (about `#5b4bd1`) as the only accent color
- generous spacing and thin rules, no stock photos and no gradients

References:
- `.superpowers/brainstorm/41180-1793903208/content/visual-direction.html` (option B)
- `.superpowers/brainstorm/69322-1794244144/content/hero-combined.html` (the agreed homepage opening)

The current dark, gradient look is retired.

**Navigation:** UnlockLab · The Intensive · About · **Start a conversation**, where the last item is a button linking to the form.

### 6.1 Home (`/`)
1. **Opening** (agreed):
   - label: "The Command Center Build Intensive · First cohort forming now"
   - headline: "Build your personal productivity engine."
   - a short lede: four weeks, live online, alongside the SkWx builders who deploy this system for clients, as a partnership between UnlockLab and SkWx
   - a "Start a conversation" button
   - then the **dictionary-style definition**: *Command Center (noun). A personal productivity engine: your context, your voice, your design system, your workflows.*
2. **The hole in the AI story.** A short section on §1's insight: enterprises, early adopters, and the professional left in the middle.
3. **Proof.** The results from §5.
4. **How it works, briefly.** Discovery call → four sessions → you leave with a working system. Link to `/intensive`.
5. **Closing call to action**, plus a small link to past workshops (§6.4).

### 6.2 The Intensive (`/intensive`)
The full page for deciding, ending in the form. It covers, in this order:
- the professional's pressure (§1)
- what sets it apart: consultative, built on your real problems, taught by builders
- who it's for
- the discovery call and the four weeks
- proof (§5)
- what you leave with and what you need
- $1,500
- the form (§7)

### 6.3 About (`/about`)
Rewrite it around the **UnlockLab × SkWx partnership**, with SkWx as an innovation lab and AI solutions studio whose builders deploy these systems for clients. Keep any of the existing philosophy copy that still fits this framing. Drop the "Join the Community" and "Teach a Class" Notion links.

### 6.4 Past workshops
Events leave the main navigation. Keep a small "Past workshops" section, which can be a section on About or a lightweight `/events` page linked from the footer (builder's call). Show each event as a simple text summary with title, date, place and one line, and **no Luma iframes**.

- **Next-Gen Knowledge Work with Claude Code.** October 28, 2025, 9–11 AM, 26 Broadway, New York. A hands-on Claude Code workshop for non-coders. The current site wrongly titles it "Building AI skills that scale" and dates it 2025-01-30. Luma: https://luma.com/00wvf46f
- Hosts line:
  - *SkWx is an innovation lab and AI solutions studio.*
  - *FidelicAI builds ready-to-work AI agents for businesses.* (Rafael's wording. fidelic.ai doesn't say this yet; see §10.)
- **Apple Silicon AI Builders Breakfast · NYC.** October 8, 2025, 9–11 AM, 26 Broadway, New York. Hosted by FidelicAI (Memetica Corporation). A morning gathering for developers building AI on Apple Silicon, with live demos of tools such as MLX and PyTorch Metal, followed by open hacking. Luma: https://luma.com/y73kqjyz
- List the events newest first.
- The Dec 3 and Dec 10, 2025 placeholders ("Intro to Claude Code for Non-Technical Knowledge Workers," "Build Your Own Assistant with Claude Code") **did not take place**. Remove them.

The page must work out "past" or "upcoming" at request time or on the client, not at build time (§8).

## 7. The form

**Fields**
- Name and email (required)
- Role/title and industry (short text, optional)
- AI experience (select):
  - "Haven't really started"
  - "I use ChatGPT or Claude now and then"
  - "I use AI tools regularly"
  - "I've built things with AI"
- "What would you most like AI to help you with?" (optional text box)

**Success message:** "Thanks, we'll be in touch within one business day."

**Delivery**
- Submissions are sent by email through **Resend** (free tier, approved by Rafael) to **rafael@skwx.ai**. The submitter's email goes in the Reply-To field, so Rafael can reply directly.
- **The visitor gets no confirmation email**, only the on-page message. *(Claude's call: this avoids sending mail to whatever address someone types in.)*
- **Sending domain: `unlocklab.ai`**, for example `UnlockLab <hello@unlocklab.ai>`. *(Claude's call.)*
  - Its DNS is at GoDaddy (`domaincontrol.com`) and it has no MX records, so adding Resend's records can't disrupt any email.
  - skwx.ai is deliberately not used, because it runs Google Workspace mail.
- **Human steps, at build time:**
  1. Rafael creates the Resend account.
  2. Rafael adds the DNS records Resend lists in GoDaddy, or signs in and lets Claude add them in the browser.
  3. The API key is stored as a Vercel environment variable on the project. This needs Rafael's Vercel login, because there's no Vercel CLI link in the repo.
  - Plan these steps early, because end-to-end form testing waits on domain verification.
- Build and test against a throwaway address first, then switch to the real address.
- Add basic spam protection, such as a honeypot field. No CAPTCHA unless spam shows up.
- If sending fails, the visitor sees a clear error that includes rafael@skwx.ai as a fallback.

## 8. Fixes and behind-the-scenes work

- **Events date bug.** Past or upcoming is currently decided at build time (`app/events/page.tsx`), so expired events still show as upcoming and past events render as empty iframes. Fix it as part of §6.4.
- **Footer year** is frozen at build time. Make it current.
- **Per-page titles and descriptions.** Every page currently shares the ones in `app/layout.tsx`.
- **`robots.txt` and `sitemap.xml`** (Next.js `app/robots.ts` and `app/sitemap.ts`).
- **JSON-LD**, with the same facts as the visible page:
  - `Organization` for UnlockLab, with SkWx as a partner
  - `Course` for the intensive: online, four sessions, $1,500 USD offer, provider UnlockLab and SkWx
  - Following Fidelic cookbook guidance (`fidelic` MCP), validate it.
- Remove the Notion "Join the Community" and "Teach a Class" links. "Start a conversation" is the single action.

## 9. Tone

- Confident, direct and plain: builders talking to peers. Short sentences, concrete nouns, and numbers where they're real.
- Name the frustration honestly (the hours of tinkering) without mocking anyone.
- Never use hype ("revolutionary," "unlock your potential," "10x") or classroom language (§2).
- *This is Claude's reading of what Rafael described ("tone and how it represents SkWx" is what would make him wince). He'll judge it on the preview.*

## 10. Follow-ups outside this project
- fidelic.ai doesn't yet describe FidelicAI as building "ready-to-work AI agents for businesses." It's worth aligning the two sites.
- skwx.ai improvements (robots, sitemap, structured data, a clearer homepage headline) are parked.

## 11. Open questions for Rafael
None.

*Done separately on 2026-11-09, with Rafael's approval: Next.js was upgraded from 15.5.6 to 15.5.29 (React Server Components security fix) and is live on main (`e51c66d`). The redesign branch starts from there.*

## 12. Claude's calls, for Rafael to check
- The route is `/intensive` (rather than `/course`), to match the "not a class" framing. Old `/events` URLs remain reachable.
- Lead each week with its *Build* step.
- The past workshops placement is left to the builder (§6.4).
- Tone guidance (§9).
- Honeypot spam protection with a fallback email on errors (§7).
- No confirmation email to the visitor. Send from `unlocklab.ai`, with Reply-To set to the submitter (§7).

## 13. Left to the builder
Component structure, animation (keep it restrained, if any), responsive layout details, exact section copy within §4–§9, how Resend is wired up (a route handler or a server action), and the JSON-LD shape within §8.
