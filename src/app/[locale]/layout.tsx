import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, notoSansArabic } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | Skynologix`,
    },
    description: t("description"),
    metadataBase: new URL("https://skynologix.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://skynologix.com/${locale}`,
      siteName: "Skynologix",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass =
    locale === "ar"
      ? `${notoSansArabic.variable} ${inter.variable}`
      : `${inter.variable} ${notoSansArabic.variable}`;

  return (
    <html lang={locale} dir={dir} className={`dark ${fontClass}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Skynologix",
              url: "https://skynologix.com",
              logo: "https://skynologix.com/logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@skynologix.com",
                contactType: "customer service",
                areaServed: "SA",
                availableLanguage: ["Arabic", "English"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressCountry: "SA",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Skynologix",
              url: "https://skynologix.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressRegion: "Riyadh",
                addressCountry: "SA",
              },
              priceRange: "$$",
              openingHours: "Su-Th 09:00-18:00",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar locale={locale} />
            <main className="min-h-screen">{children}</main>
            <Footer locale={locale} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
