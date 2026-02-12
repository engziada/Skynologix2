import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Layers, Zap, HeadphonesIcon, Award } from "lucide-react";

const icons = [Layers, Zap, HeadphonesIcon, Award];
const keys = ["integrated", "performance", "support", "quality"] as const;

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(`items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
