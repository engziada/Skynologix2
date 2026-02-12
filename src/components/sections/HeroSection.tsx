import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center dots-grid overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Decorative glow circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto"
          style={{ color: "var(--text-primary)" }}
        >
          {t("title")}
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20"
          >
            {t("cta")}
            <ArrowRight size={18} />
          </Link>
          <WhatsAppButton
            text={t("whatsapp")}
            message="مرحبًا، أرغب في الاستفسار عن خدماتكم"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
}
