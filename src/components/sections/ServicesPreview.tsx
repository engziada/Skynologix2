import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe, Code2, Rocket, Gauge, ArrowRight } from "lucide-react";

const icons = [Globe, Code2, Rocket, Gauge];
const keys = ["domain", "design", "launch", "balance"] as const;

export default function ServicesPreview() {
  const t = useTranslations("services");

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="group glow-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {t(`items.${key}.description`)}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  {t("learnMore")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
