"use client";

import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  text: string;
  phone?: string;
  message?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function WhatsAppButton({
  text,
  phone = "+966XXXXXXXX",
  message = "",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const href = `https://wa.me/${cleanPhone}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;

  const baseStyles =
    "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 shadow-green-500/20",
    outline:
      "border-2 border-green-500/30 text-green-500 hover:bg-green-500/5 hover:border-green-500",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={24} />
      {text}
    </a>
  );
}
