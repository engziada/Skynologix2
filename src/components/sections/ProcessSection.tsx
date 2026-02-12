import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

const stepKeys = ["step1", "step2", "step3", "step4", "step5"] as const;

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 start-6 w-0.5 bg-accent/20" />

          <div className="space-y-8">
            {stepKeys.map((key, i) => (
              <div key={key} className="relative flex gap-6">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-accent/20">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="glow-border rounded-xl p-5 flex-1">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {t(`steps.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
