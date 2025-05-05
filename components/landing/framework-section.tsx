"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Zap, Cpu, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function FrameworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const frameworkSteps = [
    {
      letter: "P",
      title: "Process Documentation",
      description: "Create clear, repeatable systems",
      icon: <FileText className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "E",
      title: "Efficiency Optimization",
      description: "Eliminate wasted time and reduce friction",
      icon: <Zap className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "A",
      title: "Automated Workflows",
      description: "Deploy low-code/no-code automation tools",
      icon: <Cpu className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "K",
      title: "Key Metrics",
      description: "Track what matters and continuously improve",
      icon: <BarChart className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    }
  ];
  
  return (
    <section
      id="framework"
      ref={ref}
      className="py-20 w-full bg-gradient-to-b from-black to-[#273F4F]/80"
    >
      <div className="px-4 mx-auto max-w-7xl w-full">
        <MotionFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#EFEEEA] tracking-tight">
            The <span className="text-[#FE7743]">PEAK</span> Framework: A Clear Path to Optimization
          </h2>
          <p className="text-lg md:text-xl text-[#EFEEEA]/80 max-w-3xl mx-auto">
            PEAK is our proprietary consulting framework, developed specifically to help small and mid-sized businesses create scalable systems that perform
          </p>
        </MotionFadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 w-full">
          {frameworkSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#273F4F]/30 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`${step.color} px-5 py-4 flex items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FE7743]/20 to-[#273F4F]/90"></div>
                <div className="w-12 h-12 rounded-full bg-[#FE7743]/20 flex items-center justify-center mr-3 relative z-10 shadow-lg border border-[#FE7743]/30 text-[#FE7743] text-2xl font-bold">
                  {step.letter}
                </div>
                <h3 className="text-xl font-bold text-[#EFEEEA] relative z-10">
                  {step.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-[#EFEEEA]/90 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {index < frameworkSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-[calc(100%-3rem)] h-px bg-[#FE7743]/20"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-medium text-lg text-[#EFEEEA]/90">
            We don't just advise. We build, implement, and improve until you see results.
          </p>
        </div>
      </div>
    </section>
  );
} 