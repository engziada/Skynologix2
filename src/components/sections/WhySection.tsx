import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Layers, Zap, HeadphonesIcon, Award } from "lucide-react";

const icons = [Layers, Zap, HeadphonesIcon, Award];
const keys = ["integrated", "performance", "support", "quality"] as const;

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col gap-6"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
