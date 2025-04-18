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

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const industries = [
    {
      icon: <ShoppingBag className="size-8 text-indigo-500" />,
      name: "Retail & E-Commerce"
    },
    {
      icon: <Truck className="size-8 text-blue-500" />,
      name: "Logistics & Warehousing"
    },
    {
      icon: <Briefcase className="size-8 text-purple-500" />,
      name: "Professional Services"
    },
    {
      icon: <Heart className="size-8 text-pink-500" />,
      name: "Healthcare & Wellness Providers"
    },
    {
      icon: <Database className="size-8 text-cyan-500" />,
      name: "SaaS & IT Firms"
    },
    {
      icon: <Construction className="size-8 text-amber-500" />,
      name: "Construction & Manufacturing"
    }
  ];
  
  return (
    <section
      id="industries"
      ref={ref}
      className="relative mx-auto my-24 max-w-[80rem] px-6 md:px-8 py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/80 dark:to-slate-800/60 rounded-xl"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Built for Operations-Heavy Teams
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg mb-12">
          Altiverr works with SMBs across a wide range of industries, especially those with operations that rely on repeatable tasks, cross-functional workflows, and data flows:
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className="p-4 bg-white dark:bg-gray-800/60 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center h-full"
          >
            <div className="mb-4 p-3 rounded-full bg-gray-50 dark:bg-gray-700/40">
              {industry.icon}
            </div>
            <h3 className="text-lg font-medium">{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
} 