import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  const t = useTranslations("mission");

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="glass-card glass-card-hover rounded-3xl p-10 md:p-12 group">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
              <Target size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
              {t("missionTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-silver-dark font-medium">
              {t("missionText")}
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card glass-card-hover rounded-3xl p-10 md:p-12 group">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
              <Eye size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
              {t("visionTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-silver-dark font-medium">
              {t("visionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
