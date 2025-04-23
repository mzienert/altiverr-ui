"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import TextShimmer from "../magicui/text-shimmer";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { BorderBeam } from "../magicui/border-beam";
import { useCtaClick } from "@/hooks/useCtaClick";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const handleCtaClick = useCtaClick();
  
  const scrollToContent = () => {
    document.getElementById('who-we-are')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };
  
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between h-screen mx-auto px-6 text-center md:px-8"
    >
      <div className="flex flex-col items-center justify-center pt-28">
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-sharp">
          Achieve Peak Operational Efficiency with Altiverr's <span className="relative whitespace-nowrap">
            <span className="relative z-10 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent font-bold text-crisp">PEAK</span>
            <span className="absolute inset-x-0 bottom-0 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 opacity-30 blur-sm -z-0"></span>
          </span> Framework
        </h1>
        <p className="mb-6 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-sharp">
          <span className="text-slate-300 dark:text-slate-300 font-medium">P</span>rocess Documentation · <span className="text-slate-300 dark:text-slate-300 font-medium">E</span>fficiency Optimization · <span className="text-slate-300 dark:text-slate-300 font-medium">A</span>utomated Workflows · <span className="text-slate-300 dark:text-slate-300 font-medium">K</span>ey Metrics
        </p>
        <p className="mb-12 max-w-3xl text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-sharp">
          At Altiverr, we empower organizations with the skills and tools to seamlessly integrate AI technologies into their workflows—augmenting human productivity and unlocking unprecedented potential. We believe that the future belongs to those who can effectively partner with AI. Not to replace humans, but to enhance what makes us uniquely human.
        </p>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center pb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="relative group mb-5">
          <button
            onClick={() => handleCtaClick('hero-section-main')}
            className={cn(
              buttonVariants({ size: "lg" }),
              "relative bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 text-white rounded-full px-8 py-6 text-lg font-medium group-hover:scale-105 transition-all duration-300 text-sharp"
            )}
          >
            Schedule a Free Consultation
            <ChevronRight className="ml-1 inline-block size-5 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </button>
          <BorderBeam 
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            size={120}
            duration={8}
            colorFrom="#64748b" 
            colorTo="#334155"
          />
        </div>
        
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-gray-400 hover:text-gray-300 transition-colors mt-4"
          aria-label="Scroll to content"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ChevronDown className="animate-bounce size-6" />
        </button>
      </div>
    </section>
  );
}