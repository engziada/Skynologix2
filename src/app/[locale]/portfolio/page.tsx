import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Construction } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });
  return {
    title: t("pageTitle"),
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: { ar: "/ar/portfolio", en: "/en/portfolio" },
    },
  };
}

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <>
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title={t("pageTitle")} />
          <div className="flex flex-col items-center gap-4 py-16">
            <Construction size={64} className="text-accent/30" />
            <p className="text-lg text-silver-dark">{t("comingSoon")}</p>
          </div>
        </div>
      </section>
      <FinalCTASection />
    </>
  );
}
