import { getTranslations } from "next-intl/server";
import ProcessSection from "@/components/sections/ProcessSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "process" });
  return {
    title: t("sectionTitle"),
    description: t("sectionSubtitle"),
    alternates: {
      canonical: `/${locale}/how-it-works`,
      languages: { ar: "/ar/how-it-works", en: "/en/how-it-works" },
    },
  };
}

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      <ProcessSection />
      <FinalCTASection />
    </div>
  );
}
