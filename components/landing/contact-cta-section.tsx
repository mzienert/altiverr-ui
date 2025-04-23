"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useCtaClick } from "@/hooks/useCtaClick";

export default function ContactCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const handleCtaClick = useCtaClick();
  
  return (
    <section
      id="contact"
      ref={ref}
      className="relative"
    >
      <div 
        className="h-[600px] w-full"
        style={{
          backgroundImage: "url('/forest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Book your free PEAK Framework consultation and let us identify exactly where automation can transform your business
          </p>
          <div className="relative group">
            <button
              onClick={() => handleCtaClick('contact-section-main')}
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full px-8 py-6 text-lg font-medium group-hover:scale-105 transition-all duration-300"
              )}
            >
              Schedule a Free Consultation
              <ChevronRight className="ml-1 inline-block size-5 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 