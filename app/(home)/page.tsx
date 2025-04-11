import WhoWeAreSection from "@/components/landing/who-we-are-section";
import WhyChooseSection from "@/components/landing/why-choose-section";
import CoreServicesSection from "@/components/landing/core-services-section";
import IndustriesSection from "@/components/landing/industries-section";
import OutcomesSection from "@/components/landing/outcomes-section";
import FrameworkSection from "@/components/landing/framework-section";
import ContactCTASection from "@/components/landing/contact-cta-section";
import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhyChooseSection />
      <CoreServicesSection />
      <IndustriesSection />
      <OutcomesSection />
      <FrameworkSection />
      <ContactCTASection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={1000}
        ease={250}
        size={0.15}
        staticity={30}
        color={"#ffffff"}
      />
    </>
  );
}
