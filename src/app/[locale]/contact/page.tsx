import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <>
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />
      
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Reveal>
              <div className="glass-card rounded-3xl p-10 md:p-12 shadow-2xl h-full">
                <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">
                  {t("formTitle")}
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Contact Info + WhatsApp */}
            <div className="space-y-8 h-full">
              {/* WhatsApp CTA */}
              <Reveal delay={100}>
                <div className="glass-card rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors" />
                  <h3 className="text-2xl font-bold mb-8 text-white tracking-tight relative z-10">
                    {t("whatsappTitle")}
                  </h3>
                  <div className="relative z-10">
                    <WhatsAppButton
                      text={t("whatsappBtn")}
                      message="مرحبًا، أرغب في الاستفسار عن خدماتكم"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Contact Details */}
              <Reveal delay={200}>
                <div className="glass-card rounded-3xl p-10 md:p-12 shadow-2xl space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                      <Mail size={28} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest mb-1 text-silver-dark">{t("emailLabel")}</p>
                      <a
                        href="mailto:info@skynologix.com"
                        className="text-xl font-bold text-white hover:text-accent transition-colors"
                      >
                        info@skynologix.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                      <Phone size={28} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest mb-1 text-silver-dark">{t("phoneLabel")}</p>
                      <a
                        href="tel:+966XXXXXXXX"
                        className="text-xl font-bold text-white hover:text-accent transition-colors"
                      >
                        +966XXXXXXXX
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
