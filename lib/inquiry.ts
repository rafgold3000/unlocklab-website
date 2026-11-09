// Validation and email formatting for the "Start a conversation" form.
// Pure functions, so they are unit-tested without a server or Resend.

export const EXPERIENCE_OPTIONS = [
  "Haven't really started",
  "I use ChatGPT or Claude now and then",
  "I use AI tools regularly",
  "I've built things with AI",
] as const;

export type Experience = (typeof EXPERIENCE_OPTIONS)[number];

export type Inquiry = {
  name: string;
  email: string;
  role?: string;
  industry?: string;
  experience?: Experience;
  goal?: string;
};

export type ValidationResult =
  | { ok: true; data: Inquiry }
  | { ok: false; spam?: true; errors: Record<string, string> };

export const LIMITS = { name: 100, email: 254, role: 100, industry: 100, goal: 2000 } as const;

// Deliberately simple: one @, no spaces, a dot in the domain.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiry(body: unknown): ValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, errors: { form: "Invalid submission." } };
  }
  const input = body as Record<string, unknown>;

  // Honeypot: people never see this field, so anything in it means a bot.
  if (str(input.website)) return { ok: false, spam: true, errors: {} };

  const name = str(input.name);
  const email = str(input.email);
  const role = str(input.role);
  const industry = str(input.industry);
  const experience = str(input.experience);
  const goal = str(input.goal);
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Please keep this under ${LIMITS.name} characters.`;

  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) errors.email = "Please enter a valid email address.";

  if (role.length > LIMITS.role) errors.role = `Please keep this under ${LIMITS.role} characters.`;
  if (industry.length > LIMITS.industry) errors.industry = `Please keep this under ${LIMITS.industry} characters.`;
  if (goal.length > LIMITS.goal) errors.goal = `Please keep this under ${LIMITS.goal} characters.`;

  if (experience && !(EXPERIENCE_OPTIONS as readonly string[]).includes(experience)) {
    errors.experience = "Please choose one of the options.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const data: Inquiry = { name, email };
  if (role) data.role = role;
  if (industry) data.industry = industry;
  if (experience) data.experience = experience as Experience;
  if (goal) data.goal = goal;
  return { ok: true, data };
}

export function formatInquiryEmail(i: Inquiry): { subject: string; text: string } {
  const subject = `UnlockLab inquiry: ${i.name}`.replace(/[\r\n]+/g, " ");
  const text = [
    "New inquiry from unlocklab.ai",
    "",
    `Name: ${i.name}`,
    `Email: ${i.email}`,
    `Role / title: ${i.role ?? "—"}`,
    `Industry: ${i.industry ?? "—"}`,
    `AI experience: ${i.experience ?? "—"}`,
    "",
    "What they'd most like AI to help with:",
    i.goal ?? "—",
    "",
    "Reply to this email to answer them directly.",
  ].join("\n");
  return { subject, text };
}
