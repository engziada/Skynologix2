import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const labelKeys = [
  "discovery",
  "expertise",
  "process",
  "flexibility",
  "techIntegration",
  "support",
] as const;

const stepKeys = ["step1", "step2", "step3", "step4", "step5"] as const;

interface ProcessSectionProps {
  hideHeading?: boolean;
}

export default function ProcessSection({ hideHeading = false }: ProcessSectionProps) {
  const t = useTranslations("process");

  return (
    <section className="py-32 lg:py-40 bg-primary relative overflow-hidden">
      {/* Catchy background elements */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      {/* Floating Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        )}

        {/* Horizontal stepper - Visual guide */}
        <div className="relative max-w-5xl mx-auto mt-16 mb-28">
          <div className="absolute top-[24px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden md:block" />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {labelKeys.map((key, i) => (
              <div key={key} className="relative flex flex-col items-center text-center group">
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 ${
                    i === 0
                      ? "bg-accent border-accent/50 shadow-lg shadow-accent/20"
                      : "glass-card border-white/5 group-hover:border-accent/30"
                  }`}
                >
                  <span className={`text-lg font-black ${i === 0 ? "text-white" : "text-silver-dark group-hover:text-accent"}`}>
                    {i + 1}
                  </span>
                </div>
                <span className="mt-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-silver-dark">
                  {t(`labels.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stepKeys.map((key, i) => (
            <Reveal key={key} delay={i * 100}>
              <div
                className="glass-card glass-card-hover rounded-3xl p-12 relative overflow-hidden group h-full flex flex-col"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-black text-2xl">
                    0{i + 1}
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-white tracking-tight">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed text-silver-dark font-medium flex-grow">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
          
          {/* Final "Ready" Card */}
          <Reveal delay={stepKeys.length * 100}>
            <div className="glass-card rounded-3xl p-12 bg-accent/5 border-accent/20 flex flex-col justify-center items-center text-center space-y-6 h-full">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {t("labels.support")}
              </h3>
              <p className="text-lg lg:text-xl text-silver-dark font-medium">
                {t("steps.step5.description")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
