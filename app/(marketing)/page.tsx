import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <div className="flex justify-center mt-24 mb-12">
        <img src="/logo.png" alt="Logo" className="h-48" />
      </div>
      <HeroSection />
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
