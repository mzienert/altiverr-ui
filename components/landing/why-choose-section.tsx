"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, BarChart3, Workflow, Users } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFadeIn } from '../animations/motion-wrapper';

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const features = [
    {
      icon: <CheckCircle2 className="size-10 text-[#FE7743]" />,
      title: "Proven Results",
      description: "Clients using the PEAK Framework report eliminating 6,000+ manual tasks per year on average."
    },
    {
      icon: <BarChart3 className="size-10 text-[#FE7743]" />,
      title: "ROI-Driven",
      description: "Most businesses see a 25% to 40% reduction in operations costs within the first 90 days."
    },
    {
      icon: <Workflow className="size-10 text-[#FE7743]" />,
      title: "Flexible Implementation",
      description: "Whether we're automating invoicing, syncing your tools, or systemizing client onboarding, our solutions are tailored to your exact workflows."
    },
    {
      icon: <Users className="size-10 text-[#FE7743]" />,
      title: "Human-First Philosophy",
      description: "Our goal isn't to replace your team—it's to free them up to focus on what humans do best: create, lead, and grow."
    }
  ];
  
  return (
    <section
      id="why-choose"
      ref={ref}
      className="py-20 bg-transparent w-full"
    >
      <MotionFadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
          Why SMBs <span className="text-[#FE7743]">Choose Altiverr</span>
        </h2>
      </MotionFadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 flex gap-6 group hover:bg-[#273F4F]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">{feature.title}</h3>
              <p className="text-[#EFEEEA]/80 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 