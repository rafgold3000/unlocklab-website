import { describe, expect, test } from "vitest";
import { EXPERIENCE_OPTIONS, formatInquiryEmail, validateInquiry } from "@/lib/inquiry";

describe("validateInquiry", () => {
  test("accepts a minimal valid inquiry", () => {
    const r = validateInquiry({ name: " Ada Lovelace ", email: "ada@example.com" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data).toMatchObject({ name: "Ada Lovelace", email: "ada@example.com" });
  });

  test("requires name and a valid email", () => {
    const r = validateInquiry({ name: "", email: "x" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(Object.keys(r.errors).sort()).toEqual(["email", "name"]);
  });

  test("honeypot submissions are flagged as spam", () => {
    expect(validateInquiry({ name: "Bot", email: "bot@example.com", website: "http://x" })).toEqual({
      ok: false,
      spam: true,
      errors: {},
    });
  });

  test("rejects overlong fields", () => {
    const r = validateInquiry({ name: "A", email: "a@example.com", goal: "x".repeat(2001) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors).toHaveProperty("goal");
  });

  test("rejects unknown experience values", () => {
    const r = validateInquiry({ name: "A", email: "a@example.com", experience: "Expert hacker" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors).toHaveProperty("experience");
  });

  test("rejects a non-object body", () => {
    expect(validateInquiry("nope").ok).toBe(false);
  });

  test("experience options are the four from the spec, in order", () => {
    expect(EXPERIENCE_OPTIONS).toEqual([
      "Haven't really started",
      "I use ChatGPT or Claude now and then",
      "I use AI tools regularly",
      "I've built things with AI",
    ]);
  });
});

describe("formatInquiryEmail", () => {
  test("subject strips newlines", () => {
    const { subject } = formatInquiryEmail({ name: "A\r\nBcc: x@y.z", email: "a@example.com" });
    expect(subject).not.toMatch(/[\r\n]/);
    expect(subject.startsWith("UnlockLab inquiry: ")).toBe(true);
  });

  test("text lists every provided field", () => {
    const { text } = formatInquiryEmail({
      name: "Ada",
      email: "ada@example.com",
      role: "COO",
      industry: "Logistics",
      experience: "I use AI tools regularly",
      goal: "Weekly board reports",
    });
    for (const v of ["Ada", "ada@example.com", "COO", "Logistics", "I use AI tools regularly", "Weekly board reports"]) {
      expect(text).toContain(v);
    }
  });
});
