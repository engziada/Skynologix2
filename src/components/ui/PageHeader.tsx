import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = "/hero-bg.jpg" 
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center pt-32 pb-24 overflow-hidden bg-navy-dark">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30 scale-105 animate-subtle-zoom"
          sizes="100vw"
        />
        {/* Sophisticated gradient overlay for consistency with hero */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, #060f1d 80%), linear-gradient(to top, #060f1d 0%, transparent 50%, #060f1d 100%)`,
          }}
        />
        {/* Mesh dot pattern */}
        <div className="absolute inset-0 mesh-pattern opacity-15" />
        
        {/* Subtle glow elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading 
          title={title} 
          subtitle={subtitle} 
          centered={true}
        />
      </div>
    </section>
  );
}
