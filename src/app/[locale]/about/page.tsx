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
      
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <p className="text-silver-dark leading-relaxed text-2xl text-center italic font-medium relative z-10">
                  {t("aboutText")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal delay={100}>
        <MissionVisionSection />
      </Reveal>
      
      <Reveal>
        <ValuesSection />
      </Reveal>
      
      <Reveal>
        <FinalCTASection />
      </Reveal>
    </>
  );
}
