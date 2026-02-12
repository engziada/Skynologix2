import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe, Code2, Rocket, Gauge, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const icons = [Globe, Code2, Rocket, Gauge];
const keys = ["domain", "design", "launch", "balance"] as const;

export default function ServicesPreview() {
  const t = useTranslations("services");

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Catchy background elements */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      {/* Floating Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={key} delay={i * 100}>
                <div
                  className="glass-card glass-card-hover rounded-3xl p-10 flex flex-col gap-6 h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-lg leading-relaxed mb-8 text-silver-dark font-medium">
                      {t(`items.${key}.description`)}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-lg font-bold text-accent hover:text-accent-light transition-all group/link"
                    >
                      {t("learnMore")}
                      <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
