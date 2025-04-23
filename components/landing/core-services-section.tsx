"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Zap, Cpu, BarChart } from "lucide-react";

export default function CoreServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      icon: <FileText className="size-8 text-blue-500" />,
      title: "Process Documentation",
      description: "We map, document, and systemize your core workflows, creating SOPs, checklists, and visual flows that remove ambiguity."
    },
    {
      icon: <Zap className="size-8 text-yellow-500" />,
      title: "Efficiency Optimization",
      description: "We streamline operations by consolidating assets, building templates, and implementing best practices to eliminate redundancies."
    },
    {
      icon: <Cpu className="size-8 text-purple-500" />,
      title: "Automation & Integration",
      description: "From CRM syncing to invoicing to AI-driven decision support—we automate what you shouldn't be doing manually."
    },
    {
      icon: <BarChart className="size-8 text-green-500" />,
      title: "KPI Monitoring",
      description: "We set up tracking sheets, dashboards, and alert systems to measure what matters and continuously refine performance."
    }
  ];
  
  return (
    <section
      id="core-services"
      ref={ref}
      className="relative mx-auto mb-24 max-w-[80rem] px-6 md:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          What We Deliver
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Our end-to-end solutions address every aspect of operational optimization
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-black/50 backdrop-blur-sm rounded-lg shadow-sm border border-white/10 flex flex-col h-full"
          >
            <div className="mb-4 p-3 rounded-full bg-white/5 w-fit">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-300 flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 