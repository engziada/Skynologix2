import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone } from "lucide-react";

type FooterProps = {
  locale: string;
};

const quickLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/how-it-works", key: "howItWorks" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.svg" alt="Skynologix" width={28} height={28} className="h-7 w-auto" />
              <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                SKYNO<span className="text-accent-light">LOGIX</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent-light transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
              {t("contactUs")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Mail size={16} className="text-accent-light shrink-0" />
                <a href="mailto:info@skynologix.com" className="hover:text-accent-light transition-colors">
                  info@skynologix.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Phone size={16} className="text-accent-light shrink-0" />
                <a href="tel:+966XXXXXXXX" className="hover:text-accent-light transition-colors">
                  +966XXXXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-xs" style={{ borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
          &copy; {year} Skynologix. {t("rights")}.
        </div>
      </div>
    </footer>
  );
}
