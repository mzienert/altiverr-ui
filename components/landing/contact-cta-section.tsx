"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import { useCtaClick } from "@/hooks/useCtaClick";

export default function ContactCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const handleCtaClick = useCtaClick();
  
  return (
    <section
      id="contact"
      ref={ref}
      className="relative mx-auto my-24 max-w-[80rem] px-6 md:px-8 py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/30 dark:to-slate-900/20 rounded-xl text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Ready to Elevate Your Operations?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Book your free PEAK Framework consultation and let us identify exactly where automation and process optimization can save you time, reduce costs, and unlock new capacity.
        </p>
        
        <div className="flex justify-center">
          <div className="relative group">
            <button
              onClick={() => handleCtaClick('contact-section-main')}
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 text-white rounded-full px-10 py-7 text-xl font-medium group-hover:scale-105 transition-all duration-300"
              )}
            >
              Schedule a Free Consultation
              <ChevronRight className="ml-1 inline-block size-5 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </button>
            <BorderBeam 
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              size={150}
              duration={8}
              colorFrom="#64748b" 
              colorTo="#334155"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 