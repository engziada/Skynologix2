import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

const labelKeys = [
  "discovery",
  "expertise",
  "process",
  "flexibility",
  "techIntegration",
  "support",
] as const;

interface ProcessSectionProps {
  hideHeading?: boolean;
}

export default function ProcessSection({ hideHeading = false }: ProcessSectionProps) {
  const t = useTranslations("process");

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        )}

        {/* Horizontal stepper */}
        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Horizontal line */}
          <div className="absolute top-[20px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            {labelKeys.map((key, i) => (
              <div key={key} className="relative flex flex-col items-center text-center group">
                {/* Dot / Indicator */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-[1rem] border flex items-center justify-center transition-all duration-500 shadow-xl ${
                    i === 0
                      ? "bg-accent border-accent/50 shadow-accent/40 scale-110"
                      : "glass-card group-hover:border-accent/50 group-hover:scale-110"
                  }`}
                >
                  <span className={`text-base font-black ${i === 0 ? "text-white" : "text-silver-dark group-hover:text-accent"}`}>
                    {i + 1}
                  </span>
                </div>
                
                {/* Label */}
                <h3
                  className={`mt-8 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    i === 0 ? "text-accent" : "text-white group-hover:text-accent"
                  }`}
                >
                  {t(`labels.${key}`)}
                </h3>
                
                {/* Mobile line indicator */}
                <div className={`mt-3 h-[2px] w-10 transition-all duration-500 md:hidden ${i === 0 ? "bg-accent" : "bg-white/10 group-hover:bg-accent/50"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
