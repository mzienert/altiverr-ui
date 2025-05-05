"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function OutcomesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      value: "6,000+",
      description: "manual tasks eliminated annually per client",
      color: "bg-[#FE7743]/20 text-[#FE7743]"
    },
    {
      value: "25–40%",
      description: "reduction in operations costs within 3 months",
      color: "bg-[#FE7743]/20 text-[#FE7743]"
    },
    {
      value: "3×",
      description: "faster onboarding time for new clients or staff",
      color: "bg-[#FE7743]/20 text-[#FE7743]"
    },
    {
      value: "2x",
      description: "increase in process compliance and SOP usage across teams",
      color: "bg-[#FE7743]/20 text-[#FE7743]"
    }
  ];
  
  return (
    <section
      id="outcomes"
      ref={ref}
      className="py-20 w-full bg-transparent"
    >
      <MotionFadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#EFEEEA] tracking-tight">
          Operational <span className="text-[#FE7743]">Outcomes</span>, Backed by Data
        </h2>
      </MotionFadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 flex flex-col items-center text-center group hover:bg-[#273F4F]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn("rounded-md px-3 py-1 text-sm font-medium mb-3", stat.color)}>
              Metric
            </div>
            <span className="text-4xl font-bold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">{stat.value}</span>
            <p className="text-[#EFEEEA]/80 leading-relaxed">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 