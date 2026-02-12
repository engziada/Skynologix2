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
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div 
                key={key} 
                className="glass-card glass-card-hover rounded-3xl p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                  <Icon size={30} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white tracking-tight">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-silver-dark font-medium">
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
