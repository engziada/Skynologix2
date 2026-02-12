import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Reveal from "@/components/ui/Reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { ar: "/ar/about", en: "/en/about" },
    },
  };
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />
      
      <section className="pb-24 relative overflow-hidden bg-primary">
        {/* Catchy background elements */}
        <div className="absolute inset-0 mesh-pattern opacity-5" />
        
        {/* Floating Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
                <p className="text-silver-dark leading-relaxed text-2xl text-center italic font-medium relative z-10">
                  {t("aboutText")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MissionVisionSection />
      <ValuesSection />
      <FinalCTASection />
    </>
  );
}
