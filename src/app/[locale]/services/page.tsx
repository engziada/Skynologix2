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

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      
      <Reveal>
        <FinalCTASection />
      </Reveal>
    </>
  );
}
