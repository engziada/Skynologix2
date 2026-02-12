import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Mail, Phone } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { ar: "/ar/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <section className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("pageTitle")} subtitle={t("pageSubtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glow-border rounded-xl p-8">
            <ContactForm />
          </div>

          {/* Contact Info + WhatsApp */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="glow-border rounded-xl p-8">
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                {t("whatsappTitle")}
              </h3>
              <WhatsAppButton
                text={t("whatsappBtn")}
                message="مرحبًا، أرغب في الاستفسار عن خدماتكم"
              />
            </div>

            {/* Contact Details */}
            <div className="glow-border rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t("emailLabel")}</p>
                  <a
                    href="mailto:info@skynologix.com"
                    className="text-sm font-medium hover:text-accent transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    info@skynologix.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t("phoneLabel")}</p>
                  <a
                    href="tel:+966XXXXXXXX"
                    className="text-sm font-medium hover:text-accent transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    +966XXXXXXXX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
