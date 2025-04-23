"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function OutcomesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      value: "6,000+",
      description: "manual tasks eliminated annually per client",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    },
    {
      value: "25–40%",
      description: "reduction in operations costs within 3 months",
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    },
    {
      value: "3×",
      description: "faster onboarding time for new clients or staff",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
      value: "2x",
      description: "increase in process compliance and SOP usage across teams",
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
    }
  ];
  
  return (
    <section
      id="outcomes"
      ref={ref}
      className="relative mx-auto mb-24 max-w-[80rem] px-6 md:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          Operational Outcomes, Backed by Data
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="p-6 bg-black/50 backdrop-blur-sm rounded-lg shadow-sm border border-white/10 flex flex-col items-center text-center"
          >
            <div className={cn("rounded-md px-3 py-1 text-sm font-medium mb-3", stat.color)}>
              Metric
            </div>
            <span className="text-4xl font-bold mb-2 text-white">{stat.value}</span>
            <p className="text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 