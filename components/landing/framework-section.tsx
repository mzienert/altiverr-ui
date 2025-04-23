"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Zap, Cpu, BarChart } from "lucide-react";

export default function FrameworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const frameworkSteps = [
    {
      letter: "P",
      title: "Process Documentation",
      description: "Create clear, repeatable systems",
      icon: <FileText className="size-6 text-white" />,
      color: "bg-blue-600"
    },
    {
      letter: "E",
      title: "Efficiency Optimization",
      description: "Eliminate wasted time and reduce friction",
      icon: <Zap className="size-6 text-white" />,
      color: "bg-purple-600"
    },
    {
      letter: "A",
      title: "Automated Workflows",
      description: "Deploy low-code/no-code automation tools",
      icon: <Cpu className="size-6 text-white" />,
      color: "bg-indigo-600"
    },
    {
      letter: "K",
      title: "Key Metrics",
      description: "Track what matters and continuously improve",
      icon: <BarChart className="size-6 text-white" />,
      color: "bg-cyan-600"
    }
  ];
  
  return (
    <section
      id="framework"
      ref={ref}
      className="relative mx-auto px-6 md:px-8 py-16 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          The PEAK Framework: A Clear Path to Optimization
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          PEAK is our proprietary consulting framework, developed specifically to help small and mid-sized businesses create scalable systems that perform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {frameworkSteps.map((step, index) => (
          <div key={index} className="relative flex flex-col">
            <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
              {step.letter}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
            <p className="text-gray-300 mb-4">{step.description}</p>
            
            {index < frameworkSteps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-12 w-[calc(100%-3rem)] h-px bg-white/20"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="font-medium text-lg text-white">
          We don't just advise. We build, implement, and improve until you see results.
        </p>
      </div>
    </section>
  );
} 