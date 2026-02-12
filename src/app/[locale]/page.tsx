import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhySection />
      <ProcessSection />
      <FinalCTASection />
    </>
  );
}
