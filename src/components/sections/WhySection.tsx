import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Layers, Zap, HeadphonesIcon, Award } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const icons = [Layers, Zap, HeadphonesIcon, Award];
const keys = ["integrated", "performance", "support", "quality"] as const;

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Catchy background elements */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      {/* Floating Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={key} delay={i * 100}>
                <div
                  className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col gap-6 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-base leading-relaxed text-silver-dark font-medium">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
