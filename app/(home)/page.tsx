import WhoWeAreSection from "@/components/landing/who-we-are-section";
import WhyChooseSection from "@/components/landing/why-choose-section";
import CoreServicesSection from "@/components/landing/core-services-section";
import IndustriesSection from "@/components/landing/industries-section";
import OutcomesSection from "@/components/landing/outcomes-section";
import FrameworkSection from "@/components/landing/framework-section";
import ConsultationCTASection from "@/components/landing/consultation-cta-section";
import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import GradientBackgroundWrapper from "@/components/landing/gradient-background-wrapper";

export default function Page() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Particles
          className="absolute inset-0 -z-10 h-screen"
          quantity={1000}
          ease={250}
          size={0.15}
          staticity={30}
          color={"#ffffff"}
        />
      </div>
      <WhoWeAreSection />
      <GradientBackgroundWrapper>
        <WhyChooseSection />
        <CoreServicesSection />
        <IndustriesSection />
        <OutcomesSection />
        <FrameworkSection />
      </GradientBackgroundWrapper>
      <ConsultationCTASection />
    </>
  );
}
