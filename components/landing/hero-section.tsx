"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCtaClick } from "@/hooks/useCtaClick";
import { Button } from '@/components/ui/button';
import { MotionFadeIn } from '../animations/motion-wrapper';
import { ArrowDown } from 'lucide-react';

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
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden text-[#EFEEEA] py-4 relative z-10">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Text content */}
          <MotionFadeIn className="flex flex-col gap-6 order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#FE7743]">Systemize,</span>
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#FE7743]">Automate, Scale.</span>
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#EFEEEA]">
              Let's Optimize
              <br />
              Your Business.
            </h2>
            <p className="text-lg md:text-xl text-[#EFEEEA]/80">
              Altiverr's PEAK framework turns your SMB into a predictable, efficient operation. Book a Free Assessment to identify key areas for improvement and see how we can help you achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                onClick={() => handleCtaClick('hero_section')}
                size="lg"
                className="flex items-center gap-2 bg-[#FE7743] hover:bg-[#FE7743]/90 text-[#000000] font-medium"
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-[#EFEEEA] border-[#273F4F] hover:bg-[#273F4F]/30"
                onClick={scrollToContent}
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}