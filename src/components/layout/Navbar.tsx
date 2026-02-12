"use client";

import { useState, useEffect } from "react";
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
  { href: "/services", key: "services" },
  { href: "/how-it-works", key: "howItWorks" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-navy-dark/80 backdrop-blur-lg py-0 border-white/5 shadow-xl" 
          : "bg-transparent py-2 border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[75px]" : "h-[95px]"}`}>
          {/* Logo + RIYADH */}
          <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <Image
              src={theme === "dark" ? "/logo-white.svg" : "/logo-dark.svg"}
              alt="Skynologix"
              width={45}
              height={45}
              className="h-11 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-wide text-white group-hover:text-accent transition-colors">
                SKYNO<span className="text-accent group-hover:text-white transition-colors">LOGIX</span>
              </span>
              <span className="text-[11px] font-medium tracking-[0.4em] text-end text-silver-dark group-hover:text-silver-light transition-colors">
                {t("riyadh")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-accent relative group ${
                  pathname === link.href ? "text-accent" : "text-silver-dark"
                }`}
              >
                {t(link.key)}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          {/* Actions - Right */}
          <div className="flex items-center gap-5">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-xs font-bold tracking-tighter" style={{ color: "var(--text-secondary)" }}>
              <Link
                href={pathname}
                locale="en"
                className={`px-2 py-1 rounded-md transition-all ${locale === "en" ? "bg-accent text-white shadow-lg" : "hover:text-accent hover:bg-accent/10"}`}
              >
                EN
              </Link>
              <Link
                href={pathname}
                locale="ar"
                className={`px-2 py-1 rounded-md transition-all ${locale === "ar" ? "bg-accent text-white shadow-lg" : "hover:text-accent hover:bg-accent/10"}`}
              >
                AR
              </Link>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:text-accent transition-all text-silver-dark shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button - Always visible, compact on mobile when scrolled */}
            <Link
              href="/contact"
              className={`inline-flex items-center font-bold text-white bg-accent rounded-xl hover:bg-accent-light transition-all shadow-lg glow-effect hover:scale-[1.02] active:scale-[0.98] ${
                scrolled
                  ? "px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm"
                  : "hidden lg:inline-flex px-6 py-2.5 text-sm"
              }`}
            >
              {scrolled ? t("bookConsultation") : t("startProject")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3.5 text-base font-bold uppercase tracking-widest rounded-xl transition-all ${
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-silver-dark hover:text-accent hover:bg-accent/5"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-6 mt-4 text-center px-6 py-4 text-base font-bold text-white bg-accent rounded-xl hover:bg-accent-light transition-all shadow-lg"
            >
              {t("startProject")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
