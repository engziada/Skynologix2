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
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const variants = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-50",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={18} />
      {text}
    </a>
  );
}
