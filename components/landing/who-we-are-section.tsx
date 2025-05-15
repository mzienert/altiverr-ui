"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function WhoWeAreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section
      id="who-we-are"
      ref={ref}
      className="relative py-20 w-full bg-transparent"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#EFEEEA] tracking-tight">
              <span className="text-[#FE7743]">Unlocking</span> Operational Excellence through Intelligent Automation
            </h2>
          </MotionFadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg md:text-xl text-[#EFEEEA]/80 leading-relaxed">
              At Altiverr, we partner with small and mid-sized businesses to streamline operations and unlock sustainable growth. Our approach centers around the
              <span className="text-[#FE7743] font-semibold"> PEAK</span> Framework – a proven system for identifying and resolving operational bottlenecks to unlock sustainable growth. Whether you're a startup or scaling your business, we're dedicated to helping you eliminate inefficiencies and build a foundation for long-term success. 
            </p>
          </motion.div>
          <motion.div 
            className="relative h-[400px] rounded-xl shadow-lg overflow-hidden bg-[#273F4F]/30 backdrop-blur-sm border border-[#273F4F]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Image 
              src="/meeting.jpg" 
              alt="Team collaborating in a meeting" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 max-w-md text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">Our Vision</h3>
                <p className="text-lg font-medium text-[#EFEEEA]/90">Automate Smarter. Operate Stronger.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 