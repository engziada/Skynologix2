"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

type NavbarProps = {
  locale: string;
};

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/how-it-works", key: "howItWorks" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherLocale = locale === "ar" ? "en" : "ar";
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: "var(--bg-navbar)", borderColor: "var(--border-color)" }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Skynologix"
              width={32}
              height={32}
              className="h-8 w-auto"
              style={{ color: "var(--text-primary)" }}
            />
            <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
              SKYNO<span className="text-accent">LOGIX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href
                    ? "text-accent"
                    : ""
                }`}
                style={pathname !== link.href ? { color: "var(--text-secondary)" } : undefined}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-sm font-semibold px-3 py-1.5 rounded-md border hover:border-accent/30 hover:text-accent transition-colors"
              style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
            >
              {t("switchLang")}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border hover:border-accent/30 hover:text-accent transition-colors"
              style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
            >
              {t("startProject")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t py-4 space-y-2" style={{ borderColor: "var(--border-color)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-accent bg-accent/5"
                    : "hover:text-accent hover:bg-accent/5"
                }`}
                style={pathname !== link.href ? { color: "var(--text-secondary)" } : undefined}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-2 text-center px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
            >
              {t("startProject")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
