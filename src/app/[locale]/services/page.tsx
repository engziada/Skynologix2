import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Globe, Code2, Rocket, Gauge } from "lucide-react";

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
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

          <div className="space-y-12 max-w-4xl mx-auto">
            {keys.map((key, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={key}
                  className="glow-border rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                      {t(`items.${key}.title`)}
                    </h2>
                    <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTASection />
    </>
  );
}
