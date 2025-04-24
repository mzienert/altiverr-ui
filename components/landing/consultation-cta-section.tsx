'use client';

import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { motion } from "framer-motion";

export default function ConsultationCTASection() {
  return (
    <section className="relative">
      {/* Mountain background */}
      <div 
        className="h-[600px] w-full"
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-[#273F4F] backdrop-blur-sm dark:bg-[#273F4F]/30 rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-[#EFEEEA]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ready to Elevate Your Operations?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#EFEEEA]/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Book your free PEAK Framework consultation and let us identify exactly where 
              automation can transform your business
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CalendlyPopupButton 
                text="Schedule a Free Consultation" 
                source="homepage"
                campaign="main_cta"
                className="py-6 px-8 text-lg bg-[#FE7743] hover:bg-[#FE7743]/90 text-[#000000] rounded-full transition-all duration-300"
              />
              <span className="text-[#EFEEEA]/70">or</span>
              <a 
                href="/consultation" 
                className="text-[#EFEEEA] hover:text-[#FE7743] font-medium underline underline-offset-4"
              >
                View our calendar
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 