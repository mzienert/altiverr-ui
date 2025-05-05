"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Zap, Cpu, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function CoreServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      icon: <FileText className="size-10 text-white" />,
      title: "Process Documentation",
      description: "We map, document, and systemize your core workflows, creating SOPs, checklists, and visual flows that remove ambiguity.",
      color: "bg-[#273F4F]"
    },
    {
      icon: <Zap className="size-10 text-white" />,
      title: "Efficiency Optimization",
      description: "We streamline operations by consolidating assets, building templates, and implementing best practices to eliminate redundancies.",
      color: "bg-[#273F4F]"
    },
    {
      icon: <Cpu className="size-10 text-white" />,
      title: "Automation & Integration",
      description: "From CRM syncing to invoicing to AI-driven decision support—we automate what you shouldn't be doing manually.",
      color: "bg-[#273F4F]"
    },
    {
      icon: <BarChart className="size-10 text-white" />,
      title: "KPI Monitoring",
      description: "We set up tracking sheets, dashboards, and alert systems to measure what matters and continuously refine performance.",
      color: "bg-[#273F4F]"
    }
  ];
  
  return (
    <section
      id="core-services"
      ref={ref}
      className="py-20 w-full bg-transparent"
    >
      <MotionFadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#EFEEEA] tracking-tight">
          What We <span className="text-[#FE7743]">Deliver</span>
        </h2>
        <p className="text-lg md:text-xl text-[#EFEEEA]/80 max-w-3xl mx-auto">
          Our end-to-end solutions address every aspect of operational optimization
        </p>
      </MotionFadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#273F4F]/30 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className={`${service.color} px-5 py-4 flex items-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FE7743]/20 to-[#273F4F]/90"></div>
              <div className="w-12 h-12 rounded-full bg-[#FE7743]/20 flex items-center justify-center mr-3 relative z-10 shadow-lg border border-[#FE7743]/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#EFEEEA] relative z-10">
                {service.title}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-[#EFEEEA]/90 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 