import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MessageCircle, Lightbulb, Award, Eye } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-dark">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-40 scale-105 animate-subtle-zoom"
          sizes="100vw"
        />
        {/* Gradient overlay: more sophisticated depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 70% 50%, transparent 0%, #060f1d 70%), linear-gradient(to left, transparent, #060f1d 80%)`,
          }}
        />
        {/* Mesh dot pattern */}
        <div className="absolute inset-0 mesh-pattern opacity-20" />
        
        {/* Floating glow elements */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full md:w-3/5 ms-auto space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-sm font-bold text-accent tracking-wider uppercase">
                {t("badge1Title")}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] text-white tracking-tight">
              {t("title")}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-silver-dark font-medium">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row-reverse flex-wrap gap-6 pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-xl font-bold text-white bg-accent hover:bg-accent-light transition-all shadow-xl glow-effect hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("cta")}
              <ArrowRight size={22} />
            </Link>
            <a
              href="https://wa.me/+966XXXXXXXX?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 glass-card border border-white/10 rounded-xl text-xl font-bold text-white hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={22} />
              {t("whatsapp")}
            </a>
          </div>

          {/* Feature Badges - Refined Glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Eye, titleKey: "badge3Title" },
              { icon: Award, titleKey: "badge2Title" },
              { icon: Lightbulb, titleKey: "badge1Title" },
            ].map(({ icon: Icon, titleKey }) => (
              <div
                key={titleKey}
                className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl text-white tracking-tight">{t(titleKey)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
