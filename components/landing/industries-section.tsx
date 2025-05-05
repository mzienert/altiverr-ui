"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShoppingBag, 
  Truck, 
  Briefcase, 
  Heart, 
  Database, 
  Construction 
} from "lucide-react";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const industries = [
    {
      icon: <ShoppingBag className="size-8 text-[#FE7743]" />,
      name: "Retail & E-Commerce"
    },
    {
      icon: <Truck className="size-8 text-[#FE7743]" />,
      name: "Logistics & Warehousing"
    },
    {
      icon: <Briefcase className="size-8 text-[#FE7743]" />,
      name: "Professional Services"
    },
    {
      icon: <Heart className="size-8 text-[#FE7743]" />,
      name: "Healthcare & Wellness Providers"
    },
    {
      icon: <Database className="size-8 text-[#FE7743]" />,
      name: "SaaS & IT Firms"
    },
    {
      icon: <Construction className="size-8 text-[#FE7743]" />,
      name: "Construction & Manufacturing"
    }
  ];
  
  return (
    <section
      id="industries"
      ref={ref}
      className="py-20 w-full bg-transparent"
    >
      <MotionFadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#EFEEEA] tracking-tight">
          Built for <span className="text-[#FE7743]">Operations-Heavy</span> Teams
        </h2>
        <p className="text-lg md:text-xl text-[#EFEEEA]/80 max-w-3xl mx-auto mb-12">
          Altiverr works with SMBs across a wide range of industries, especially those with operations that rely on repeatable tasks, cross-functional workflows, and data flows:
        </p>
      </MotionFadeIn>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
        {industries.map((industry, index) => (
          <motion.div 
            key={index} 
            className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#273F4F]/50 flex flex-col items-center text-center h-full group hover:bg-[#273F4F]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="mb-4 p-3 rounded-full bg-[#FE7743]/20 border border-[#FE7743]/30">
              {industry.icon}
            </div>
            <h3 className="text-lg font-medium text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 