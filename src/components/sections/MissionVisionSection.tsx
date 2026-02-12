import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Eye } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function MissionVisionSection() {
  const t = useTranslations("mission");

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Catchy background elements */}
      <div className="absolute inset-0 mesh-pattern opacity-5" />
      
      {/* Floating Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-light/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("sectionTitle")} />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <Reveal delay={100} className="h-full">
            <div className="glass-card glass-card-hover rounded-3xl p-10 md:p-12 group h-full">
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
          </Reveal>

          {/* Vision */}
          <Reveal delay={200} className="h-full">
            <div className="glass-card glass-card-hover rounded-3xl p-10 md:p-12 group h-full">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
