import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Construction } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return (
    <>
      <PageHeader title={t("pageTitle")} subtitle={t("comingSoon")} />
      
      <section className="pb-24 relative overflow-hidden bg-primary">
        {/* Catchy background elements */}
        <div className="absolute inset-0 mesh-pattern opacity-5" />
        
        {/* Floating Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="glass-card rounded-3xl p-20 flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center animate-pulse relative z-10">
                <Construction size={48} className="text-accent" />
              </div>
              <div className="space-y-4 text-center relative z-10">
                <p className="text-3xl font-bold text-white tracking-tight">{t("comingSoon")}</p>
                <p className="text-xl text-silver-dark max-w-md mx-auto font-medium leading-relaxed">
                  {t("comingSoonDesc")}
                </p>
              </div>
              <div className="pt-4 relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-lg font-bold text-white bg-accent hover:bg-accent-light transition-all shadow-lg glow-effect hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("talkToUs")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      
      <Reveal>
        <FinalCTASection />
      </Reveal>
    </>
  );
}
