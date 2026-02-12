import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, Clock, Shield, Smile, HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      {/* Floating Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("sectionTitle")} />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={key} delay={i * 100}>
                <div 
                  className="glass-card glass-card-hover rounded-3xl p-8 text-center group h-full flex flex-col items-center"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
