import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, Clock, Shield, Smile, HeartHandshake } from "lucide-react";

const icons = [Lightbulb, Clock, Shield, Smile, HeartHandshake];
const keys = [
  "clarity",
  "commitment",
  "credibility",
  "comfort",
  "continuousSupport",
] as const;

export default function ValuesSection() {
  const t = useTranslations("values");

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={key} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
