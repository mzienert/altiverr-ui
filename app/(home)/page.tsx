import WhoWeAreSection from "@/components/landing/who-we-are-section";
import WhyChooseSection from "@/components/landing/why-choose-section";
import CoreServicesSection from "@/components/landing/core-services-section";
import IndustriesSection from "@/components/landing/industries-section";
import OutcomesSection from "@/components/landing/outcomes-section";
import FrameworkSection from "@/components/landing/framework-section";
import HeroSection from "@/components/landing/hero-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="px-4 mx-auto max-w-7xl w-full">
        <WhoWeAreSection />
        <WhyChooseSection />
        <CoreServicesSection />
        <IndustriesSection />
        <OutcomesSection />
        <FrameworkSection />
      </div>
    </>
  );
}
