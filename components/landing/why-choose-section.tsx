"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, BarChart3, Workflow, Users } from "lucide-react";

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const features = [
    {
      icon: <CheckCircle2 className="size-10 text-green-500" />,
      title: "Proven Results",
      description: "Clients using the PEAK Framework report eliminating 6,000+ manual tasks per year on average."
    },
    {
      icon: <BarChart3 className="size-10 text-blue-500" />,
      title: "ROI-Driven",
      description: "Most businesses see a 25% to 40% reduction in operations costs within the first 90 days."
    },
    {
      icon: <Workflow className="size-10 text-purple-500" />,
      title: "Flexible Implementation",
      description: "Whether we're automating invoicing, syncing your tools, or systemizing client onboarding, our solutions are tailored to your exact workflows."
    },
    {
      icon: <Users className="size-10 text-orange-500" />,
      title: "Human-First Philosophy",
      description: "Our goal isn't to replace your team—it's to free them up to focus on what humans do best: create, lead, and grow."
    }
  ];
  
  return (
    <section
      id="why-choose"
      ref={ref}
      className="relative mx-auto pb-16 max-w-[80rem] px-6 md:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
          Why SMBs Choose Altiverr
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex gap-6 p-6 bg-black/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10"
          >
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 