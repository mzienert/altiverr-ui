"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function WhoWeAreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section
      id="who-we-are"
      ref={ref}
      className="relative mx-auto pt-24 pb-16 max-w-[80rem] px-6 md:px-8"
    >
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-20 h-1 bg-slate-500 rounded-full mb-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Unlocking Operational Excellence through Intelligent Automation
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Altiverr is an AI consulting and operations optimization partner built for small and mid-sized businesses. Our proprietary <span className="relative whitespace-nowrap">
              <span className="text-slate-700 dark:text-slate-300 font-semibold">PEAK</span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 opacity-30 blur-sm"></span>
            </span> Framework delivers a structured, proven approach to operational clarity and efficiency. Whether you're a five-person team or a growing mid-market business, we work with you to eliminate bottlenecks, streamline workflows, and unlock scalable growth.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl shadow-lg overflow-hidden">
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
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-lg font-medium text-white/90">Elevating Human Potential Through Intelligent Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 