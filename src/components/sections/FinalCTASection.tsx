"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 relative overflow-hidden bg-navy-dark">
      {/* Catchy background layer similar to hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-10 scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, #060f1d 90%), linear-gradient(to top, #060f1d 0%, transparent 50%, #060f1d 100%)`,
          }}
        />
        <div className="absolute inset-0 mesh-pattern opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative glass-card rounded-[2.5rem] p-8 sm:p-16 overflow-hidden shadow-2xl group"
          >
            {/* Internal card glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-start">
              {/* Title and Subtitle */}
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
                  {t("title")}
                </h2>
                <p className="text-silver-dark text-lg leading-relaxed">
                  {t("subtitle") || "Join our community and stay updated with the latest in digital innovation."}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/+966XXXXXXXX?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all shadow-lg hover:scale-[1.02]"
                >
                  <MessageCircle size={22} />
                  {t("whatsappBtn")}
                </a>

                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-accent rounded-xl hover:bg-accent-light transition-all shadow-lg glow-effect hover:scale-[1.02]"
                >
                  {t("contactBtn")}
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
