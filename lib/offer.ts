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
  lede: "Four weeks, live online, alongside the SkWx builders who deploy this system for clients.",
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

// The "what changes" section: the everyday problem, the Command Center contrast, then the results.
// Rows in today/withCommandCenter pair up one-to-one.
export const PROOF_SECTION = {
  eyebrow: "What changes",
  heading: "Supercharged productivity",
  lede: "It's a familiar routine. You sit down with an open chat window and start entering prompts. You drag in reference files, paste in an email thread or last quarter's numbers, and explain the task and who it's for. It works, and it's how many of us started. But that setup wastes time on every task, and it leaves much of what AI can do on the table. A Command Center does that setup once, and keeps it.",
  today: {
    title: "The familiar routine",
    items: [
      "Open a new chat window and start entering prompts",
      "Explain your role, your goals and who the work is for",
      "Edit the draft until it sounds like you",
      "Copy the output into your own template and fix the formatting",
      "Drag in reference files and paste in background so it has what it needs",
      "Walk it through the same multi-step task again next time",
    ],
  },
  withCommandCenter: {
    title: "With a Command Center",
    items: [
      "Your work picks up where you left off, in a system built for you",
      "Your context (role, objectives, projects) is loaded before you type a word",
      "Drafts come back in your voice, from style files built on your own writing",
      "Your design system makes documents and decks come out on-brand",
      "An inventory of your knowledge, in reference files Claude draws on every time",
      "Your recurring workflows run as skills, connected to the tools you use",
    ],
  },
  resultsTitle: "What that looks like in practice",
  resultsIntro:
    "These results come from the Command Center architecture SkWx deploys for clients. In the intensive, you build your own version of it, around your own work.",
} as const;

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

// Search descriptions are built from the facts above so they cannot drift (spec §3).
type DescribedOffer = {
  priceUsd: number;
  sessions: number;
  sessionHours: number;
  tools: readonly string[];
};

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const word = (n: number) => NUMBER_WORDS[n] ?? String(n);
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export function siteDescription(offer: DescribedOffer): string {
  return `Build your own AI productivity system in ${word(offer.sessions)} weeks, live online, with SkWx builders. ${offer.tools.join(" and ")}, built around your real work.`;
}

export function intensiveDescription(offer: DescribedOffer): string {
  return `A ${word(offer.sessions)}-week build intensive, live online: a discovery call plus ${word(offer.sessions)} ${word(offer.sessionHours)}-hour sessions with SkWx builders. Build your own Command Center with ${offer.tools.join(" and ")}. ${usd(offer.priceUsd)}.`;
}
