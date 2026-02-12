import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Globe, Code2, Rocket, Gauge } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("sectionTitle"),
    description: t("sectionSubtitle"),
    alternates: {
      canonical: `/${locale}/services`,
      languages: { ar: "/ar/services", en: "/en/services" },
    },
  };
}

const icons = [Globe, Code2, Rocket, Gauge];
const keys = ["domain", "design", "launch", "balance"] as const;

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      <PageHeader title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

      <section className="pb-24 relative overflow-hidden bg-primary">
        {/* Catchy background elements */}
        <div className="absolute inset-0 mesh-pattern opacity-5" />
        
        {/* Floating Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {keys.map((key, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={key} delay={i * 100}>
                  <div
                    className="glass-card glass-card-hover rounded-3xl p-10 flex flex-col gap-8 group h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-5 text-white tracking-tight">
                        {t(`items.${key}.title`)}
                      </h2>
                      <p className="leading-relaxed text-lg text-silver-dark font-medium">
                        {t(`items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      
      <FinalCTASection />
    </>
  );
}
