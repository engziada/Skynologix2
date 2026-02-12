import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesPreview />
      <ProcessSection />
      <MissionVisionSection />
      <ValuesSection />
      <FinalCTASection />
    </>
  );
}
