import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  const t = useTranslations("mission");

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <div className="glow-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Target size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              {t("missionTitle")}
            </h3>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("missionText")}
            </p>
          </div>

          {/* Vision */}
          <div className="glow-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Eye size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              {t("visionTitle")}
            </h3>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("visionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
