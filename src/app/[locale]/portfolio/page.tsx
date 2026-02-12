import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Construction } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { use } from "react";

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

export default function PortfolioPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("portfolio");

  return (
    <>
      <PageHeader title={t("pageTitle")} subtitle={t("comingSoon")} />
      
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass-card rounded-3xl p-20 flex flex-col items-center gap-8 shadow-2xl">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center animate-pulse">
                <Construction size={48} className="text-accent" />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">{t("comingSoon")}</p>
              <p className="text-silver-dark max-w-md text-center font-medium">
                {locale === "ar" 
                  ? "نحن نعمل حالياً على تجهيز معرض أعمالنا لنعرض لكم أفضل مشاريعنا."
                  : "We are currently working on our portfolio to showcase our best projects to you."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      <FinalCTASection />
    </>
  );
}
