"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src={theme === "dark" ? "/logo-white.svg" : "/logo-dark.svg"} alt="Skynologix" width={40} height={40} className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-wide text-white">
                  SKYNO<span className="text-accent">LOGIX</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-end text-silver-dark">
                  {nav("riyadh")}
                </span>
              </div>
            </Link>
            <p className="text-silver-dark text-sm leading-relaxed">
              {t("aboutAgency")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:ms-12">
            <h3 className="text-white font-bold mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-4 text-sm text-silver-dark">
              <li><Link href="/about" className="hover:text-accent transition-colors">{nav("about")}</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">{nav("services")}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-accent transition-colors">{nav("howItWorks")}</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">{nav("portfolio")}</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6">{t("contactUs")}</h3>
            <ul className="space-y-4 text-sm text-silver-dark">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@skynologix.com" className="hover:text-accent transition-colors">info@skynologix.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+966XXXXXXXX" className="hover:text-accent transition-colors">+966 50 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Social - Refined Icons */}
          <div>
            <h3 className="text-white font-bold mb-6">{t("followUs")}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/30 transition-all group shadow-sm">
                <Twitter size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/30 transition-all group shadow-sm">
                <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/30 transition-all group shadow-sm">
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-silver-dark">
            &copy; {year} {locale === "ar" ? "سكاينولوجكس" : "Skynologix"}. {t("rights")}.
          </p>
          <div className="flex gap-6 text-xs text-silver-dark">
            <a href="#" className="hover:text-accent transition-colors">{t("privacyPolicy")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("termsOfService")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
