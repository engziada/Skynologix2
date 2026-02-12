import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

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
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("pageTitle")} subtitle={t("pageSubtitle")} />
          <div className="max-w-3xl mx-auto">
            <p className="text-silver-dark leading-relaxed text-lg text-center">
              {t("aboutText")}
            </p>
          </div>
        </div>
      </section>
      <MissionVisionSection />
      <ValuesSection />
      <FinalCTASection />
    </>
  );
}
