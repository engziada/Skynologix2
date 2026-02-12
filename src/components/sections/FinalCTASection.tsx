import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="dots-grid w-full h-full" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          {t("title")}
        </h2>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20"
          >
            {t("contactBtn")}
            <ArrowRight size={18} />
          </Link>
          <WhatsAppButton
            text={t("whatsappBtn")}
            message="مرحبًا، أرغب في بدء مشروع جديد"
          />
        </div>
      </div>
    </section>
  );
}
