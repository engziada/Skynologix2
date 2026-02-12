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
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
        <div className="w-20 h-24 rounded-3xl bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">{t("successTitle") || "Message Sent!"}</h3>
          <p className="text-lg text-silver-dark font-medium max-w-sm mx-auto">
            {t("success")}
          </p>
        </div>
        <button
          onClick={() => setState("idle")}
          className="mt-8 px-8 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all active:scale-[0.98]"
        >
          {t("sendAnother") || "Send another message"}
        </button>
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
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-silver-dark ms-1">
          {t("name")} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-4 rounded-xl glass-input text-white text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 placeholder:text-silver-dark/30"
          placeholder={t("namePlaceholder") || "Enter your name"}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400 font-medium flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-bold uppercase tracking-widest text-silver-dark ms-1">
          {t("company")}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-5 py-4 rounded-xl glass-input text-white text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 placeholder:text-silver-dark/30"
          placeholder={t("companyPlaceholder") || "Your company name"}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-silver-dark ms-1">
          {t("email")} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-5 py-4 rounded-xl glass-input text-white text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 placeholder:text-silver-dark/30"
          placeholder={t("emailPlaceholder") || "example@email.com"}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400 font-medium flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-silver-dark ms-1">
          {t("phone")} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-5 py-4 rounded-xl glass-input text-white text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 placeholder:text-silver-dark/30 text-start"
          dir="ltr"
          placeholder="+966 5X XXX XXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400 font-medium flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-silver-dark ms-1">
          {t("message")} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-5 py-4 rounded-xl glass-input text-white text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 resize-none placeholder:text-silver-dark/30"
          placeholder={t("messagePlaceholder") || "How can we help you?"}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 font-medium flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {state === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm font-medium bg-red-500/10 p-4 rounded-xl border border-red-500/20">
          <AlertCircle size={18} />
          {t("error")}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white bg-accent rounded-xl hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg glow-effect hover:scale-[1.01] active:scale-[0.99]"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={24} className="animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send size={22} />
            {t("send")}
          </>
        )}
      </button>
    </form>
  );
}
