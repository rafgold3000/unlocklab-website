"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import { EXPERIENCE_OPTIONS, LIMITS } from "@/lib/inquiry";
import { CONTACT_EMAIL, OFFER } from "@/lib/offer";

type Status = "idle" | "sending" | "sent" | "failed";

const inputClass =
  "mt-1 w-full rounded border border-rule bg-white px-3 py-2 text-ink placeholder:text-muted/70 focus:border-violet focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-700">
      {message}
    </p>
  );
}

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrors({});

    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="mt-8 border-l-[3px] border-violet pl-5 font-serif text-2xl">
        Thanks, we&apos;ll be in touch {OFFER.responseTime}.
      </p>
    );
  }

  const describedBy = (field: string) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name <span className="text-violet">*</span>
          <input name="name" required autoComplete="name" maxLength={LIMITS.name} className={inputClass} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
          <FieldError id="name-error" message={errors.name} />
        </label>
        <label className="block text-sm font-semibold">
          Email <span className="text-violet">*</span>
          <input name="email" type="email" required autoComplete="email" maxLength={LIMITS.email} className={inputClass} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
          <FieldError id="email-error" message={errors.email} />
        </label>
        <label className="block text-sm font-semibold">
          Role or title
          <input name="role" autoComplete="organization-title" maxLength={LIMITS.role} className={inputClass} aria-invalid={!!errors.role} aria-describedby={describedBy("role")} />
          <FieldError id="role-error" message={errors.role} />
        </label>
        <label className="block text-sm font-semibold">
          Industry
          <input name="industry" maxLength={LIMITS.industry} className={inputClass} aria-invalid={!!errors.industry} aria-describedby={describedBy("industry")} />
          <FieldError id="industry-error" message={errors.industry} />
        </label>
      </div>

      <label className="block text-sm font-semibold">
        Where are you with AI today?
        <select name="experience" defaultValue="" className={inputClass} aria-invalid={!!errors.experience} aria-describedby={describedBy("experience")}>
          <option value="">Choose one (optional)</option>
          {EXPERIENCE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <FieldError id="experience-error" message={errors.experience} />
      </label>

      <label className="block text-sm font-semibold">
        What would you most like AI to help you with?
        <textarea name="goal" rows={4} maxLength={LIMITS.goal} className={inputClass} aria-invalid={!!errors.goal} aria-describedby={describedBy("goal")} />
        <FieldError id="goal-error" message={errors.goal} />
      </label>

      {/* Honeypot: hidden from people and screen readers; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {errors.form && <p className="text-sm text-red-700">{errors.form}</p>}

      {status === "failed" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending this. Please email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a conversation"}
      </Button>
    </form>
  );
}
