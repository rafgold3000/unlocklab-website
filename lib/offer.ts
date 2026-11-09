// Single source of truth for every offer fact on the site.
// Pages, metadata and JSON-LD all read from here so they cannot drift apart.
// Facts come from the approved spec (docs/superpowers/specs/2026-11-09-unlocklab-redesign-design.md, §4–§5)
// and the program overview it names. Do not add facts that are not in those sources.

export const SITE_URL = "https://unlocklab.ai";
export const CONTACT_EMAIL = "rafael@skwx.ai";

export const OFFER = {
  name: "The Command Center Build Intensive",
  label: "The Command Center Build Intensive · First cohort forming now",
  headline: "Build your personal productivity engine.",
  definition:
    "A personal productivity engine: your context, your voice, your design system, your workflows.",
  lede: "Four weeks, live online, alongside the SkWx builders who deploy this system for clients. A partnership between UnlockLab and SkWx.",
  priceUsd: 1500,
  sessions: 4,
  sessionHours: 2,
  mode: "online",
  cohortStatus: "First cohort forming now",
  responseTime: "within one business day",
  tools: ["Claude Code", "Claude Cowork"],
  audience:
    "Mid-level to executive professionals in non-technical roles who want to use Claude to solve real problems at work and build their own tools. No coding background needed.",
  discoveryCall:
    "You start with a one-on-one discovery call with a SkWx consultant, who learns your role, your priorities and the problems you want to solve. The examples, exercises and skills are then built around your work, and Claude Code and Claude Cowork are installed and working before the first session.",
  differentiators: [
    {
      title: "Consultative",
      body: "A discovery call shapes the four weeks around your role and your challenges.",
    },
    {
      title: "Built on your real problems",
      body: "Every session applies what you learn to work you actually do.",
    },
    {
      title: "Led by builders",
      body: "SkWx designs and builds these systems for teams and businesses, so you learn from working practice, not theory.",
    },
  ],
  weeks: [
    {
      title: "Foundations of Claude Code and Claude Cowork",
      build: ["Your project folder and first project instructions"],
      learn: [
        "How Claude works with context, files and instructions",
        "The terminal basics you need, and nothing more",
        "When to use Claude Code and when to use Claude Cowork",
      ],
    },
    {
      title: "Reference files and connectors",
      build: [
        "Your context: role, objectives, voice and style files drawn from your own writing",
        "Your first connections to the tools you use",
      ],
      learn: [
        "How reference files make Claude consistent from one task to the next",
        "How connectors link Claude to other applications and data, and what to keep private",
      ],
    },
    {
      title: "Skills and a design system",
      build: [
        "Skills for the tasks you repeat",
        "A design system for branded, personalized documents and presentations",
      ],
      learn: [
        "How a skill is structured, and how to create, test and improve one",
        "How a design system keeps your documents and decks consistent",
      ],
    },
    {
      title: "Command Center architecture",
      build: ["Your full Command Center, designed around real challenges from your work"],
      learn: [
        "How instructions, reference files, skills and connectors fit together",
        "How to maintain and extend your Command Center on your own",
      ],
    },
  ],
  leaveWith: [
    "A personal productivity system built around your role, connected to your tools and already handling your first recurring tasks",
    "Reference files, skills and a design system you own and can reuse",
    "The know-how to extend it to new kinds of recurring work as your needs and the technology change",
    "A certificate of completion",
    "One hour of one-on-one support from SkWx afterwards, used however suits you: messages, quick calls or a single session",
  ],
  whatYouNeed: ["A Claude Pro account", "The Claude desktop app"],
} as const;

export const PROOF = [
  { task: "Proposals and pitches", before: "4–6 hours", after: "45 minutes" },
  { task: "Research and business development prep", before: "2 staff days", after: "1 hour" },
  { task: "Deck and presentation drafting", before: "6–7 hours", after: "1 hour" },
  { task: "Team management and pipeline visibility", before: "2–3 hours a week", after: "minutes" },
] as const;

export const PROOF_ATTRIBUTION =
  "Results reported by the CEO of a strategic communications firm, for their own work, after six months using the system.";

export const PARTNERS = {
  unlocklab: { name: "UnlockLab", url: SITE_URL },
  skwx: {
    name: "SkWx",
    url: "https://skwx.ai",
    description: "an innovation lab and AI solutions studio",
  },
  fidelic: {
    name: "FidelicAI",
    description: "builds ready-to-work AI agents for businesses",
  },
} as const;
