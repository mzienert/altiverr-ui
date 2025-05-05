'use client';

import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function ConsultationCTASection() {
  return (
    <section className="py-16 relative w-full">
      {/* Mountain background */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: "url('/forest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      
      {/* Content with translucent box */}
      <div className="relative z-10 w-full px-4 md:px-8 text-center">
        <div className="bg-[#273F4F]/60 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-12 w-full mx-auto" style={{ maxWidth: "1400px" }}>
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-[#EFEEEA]/80 leading-relaxed">
              Book your free PEAK Framework consultation and let us identify exactly where 
              automation can transform your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CalendlyPopupButton 
                text="Schedule a Free Consultation" 
                source="homepage"
                campaign="main_cta"
                className="py-4 px-8 text-lg bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
              />
              <span className="text-[#EFEEEA]/70">or</span>
              <a 
                href="/consultation" 
                className="text-[#EFEEEA] hover:text-[#FE7743] font-medium underline underline-offset-4"
              >
                View our calendar
              </a>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
} 