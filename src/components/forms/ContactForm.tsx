"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) errs.name = t("validation.nameRequired");
    if (!email?.trim()) errs.email = t("validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = t("validation.emailInvalid");
    if (!phone?.trim()) errs.phone = t("validation.phoneRequired");
    if (!message?.trim()) errs.message = t("validation.messageRequired");

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Honeypot check
    if (formData.get("website")) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <p className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {t("name")} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--text-primary)" }}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {t("company")}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--text-primary)" }}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {t("email")} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--text-primary)" }}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {t("phone")} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--text-primary)" }}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {t("message")} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--input-border)", color: "var(--text-primary)" }}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Error message */}
      {state === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          {t("error")}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send size={18} />
            {t("send")}
          </>
        )}
      </button>
    </form>
  );
}
