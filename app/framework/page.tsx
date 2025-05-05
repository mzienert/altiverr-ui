"use client";

import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { FileText, Zap, Cpu, BarChart, Mountain, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  className?: string;
}

const MotionFadeIn = ({ children, className = "" }: MotionFadeInProps) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default function FrameworkPage() {
  const peakPhases = [
    {
      letter: "P",
      title: "Process: Building Your Operational OS",
      description: "We conduct a deep dive into your core business workflows: sales, operations, client delivery, onboarding, and support. We map and document these workflows, uncovering bottlenecks and areas for improvement.",
      benefits: "A clear, documented understanding of your business operations—the foundation for scalable growth. Eliminates confusion and ensures consistent execution.",
      deliverables: ["10–15 page Operational OS in Google Sheets, paired with explainer Looms. (Visual maps & walkthroughs)"],
      icon: <FileText className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "E",
      title: "Efficiency: Centralizing Your Systems",
      description: "We centralize all process assets – templates, SOPs, links, and tools – creating a single source of truth for your team. We fill content or resource gaps and build repeatable systems.",
      benefits: "Eliminate wasted time searching for information. Increased consistency and faster onboarding for new team members.",
      deliverables: ["Fully organized cloud-based workspace + SOP archive. (Built within ClickUp, Asana, Notion, Drive, or your preferred system)"],
      icon: <Zap className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "A",
      title: "Automation: Working Smarter, Not Harder",
      description: "We build integrations and deploy templated workflows after establishing a solid operational foundation. Utilizing tools like Go High Level, Salesforce, Zapier, or Make.com to automate repetitive tasks.",
      benefits: "Free up founder and team time, reduce errors, and eliminate manual grunt work, allowing you to focus on strategic growth.",
      deliverables: ["Pre-built automations deployed + training walkthroughs. (Automated lead gen, email sequences, task handoffs)"],
      icon: <Cpu className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    },
    {
      letter: "K",
      title: "Knowledge Systems: Data-Driven Decision Making",
      description: "We define, implement, and monitor key performance indicators (KPIs) for every core process. We automate metric collection and feedback loops, enabling real-time data insights.",
      benefits: "Lasting improvement and compounding value. Data-informed decision-making leads to optimized performance and scalable growth.",
      deliverables: ["Notion or Airtable dashboard + SOP on usage. (Automated reporting workflows)"],
      icon: <BarChart className="size-10 text-white" />,
      color: "bg-[#273F4F]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center overflow-hidden bg-transparent pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-30 backdrop-filter backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Mountain className="w-[350px] h-[350px] text-[#FE7743]/20" strokeWidth={2} />
        </div>
        <div className="relative z-20 w-full px-4 text-center pb-8">
          <MotionFadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#EFEEEA] tracking-tight leading-tight mt-8">
              The <span className="text-[#FE7743]">PEAK</span> Framework
            </h1>
            <p className="text-lg md:text-xl text-[#EFEEEA]/80 max-w-3xl mx-auto">
              A holistic, systemized approach to business optimization that delivers tangible results
            </p>
            <div className="mt-4">
              <p className="text-xl text-[#EFEEEA]/90 mb-4">
                PEAK is built on a stepwise, repeatable process, designed to:
              </p>
              <div className="max-w-2xl mx-auto text-lg text-[#EFEEEA]/80 flex flex-col items-center">
                <div className="flex items-start gap-3 mb-3 w-fit">
                  <ChevronRight className="text-[#FE7743] flex-shrink-0 mt-1" />
                  <span>Diagnose operational bottlenecks</span>
                </div>
                <div className="flex items-start gap-3 mb-3 w-fit">
                  <ChevronRight className="text-[#FE7743] flex-shrink-0 mt-1" />
                  <span>Systematize and document critical workflows</span>
                </div>
                <div className="flex items-start gap-3 mb-3 w-fit">
                  <ChevronRight className="text-[#FE7743] flex-shrink-0 mt-1" />
                  <span>Engineer and implement automations</span>
                </div>
                <div className="flex items-start gap-3 mb-3 w-fit">
                  <ChevronRight className="text-[#FE7743] flex-shrink-0 mt-1" />
                  <span>Track and optimize performance via key metrics</span>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </section>
      
      {/* PEAK Phases Detailed Sections */}
      <section className="py-10 bg-transparent w-full">
        <div className="px-4 mx-auto max-w-7xl w-full">
          <MotionFadeIn className="text-center mb-8">
            <p className="text-lg text-[#EFEEEA]/80 max-w-3xl mx-auto">
              Each phase builds upon the previous, creating a comprehensive approach to business optimization
            </p>
          </MotionFadeIn>
          
          <div className="grid grid-cols-1 gap-8 w-full">
            {peakPhases.map((phase, index) => (
              <motion.div 
                key={index} 
                className="bg-[#273F4F]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#273F4F]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={`${phase.color} px-5 py-4 flex items-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FE7743]/20 to-[#273F4F]/90"></div>
                  <div className="w-12 h-12 rounded-full bg-[#FE7743]/20 flex items-center justify-center mr-3 relative z-10 shadow-lg border border-[#FE7743]/30">
                    {phase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#EFEEEA] relative z-10">
                    <span className="text-[#FE7743]">{phase.letter}</span> - {phase.title}
                  </h3>
                </div>
                
                <div className="p-5">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-semibold mb-2 text-[#FE7743]">What it is:</h4>
                      <p className="text-[#EFEEEA]/90 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-semibold mb-2 text-[#FE7743]">What you gain:</h4>
                      <p className="text-[#EFEEEA]/90 text-sm leading-relaxed">{phase.benefits}</p>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-semibold mb-2 text-[#FE7743]">Sample Deliverables:</h4>
                      <ul className="text-[#EFEEEA]/90 space-y-1 text-sm">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center">
                            <ArrowRight className="mr-2 h-3 w-3 text-[#FE7743]" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PEAK Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#273F4F]/80">
        <div className="px-4 mx-auto max-w-7xl">
          <MotionFadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
              PEAK: <span className="text-[#FE7743]">More Than Just Automation</span>
            </h2>
            <p className="text-xl text-[#EFEEEA]/80 max-w-3xl mx-auto">
              Unlike typical automation consultants who simply string together "Zaps," Altiverr delivers a turnkey set of processes, automations, and metrics you can rely on.
            </p>
          </MotionFadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 group hover:bg-[#273F4F]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">Easy to Understand</h3>
              <p className="text-[#EFEEEA]/80 leading-relaxed">A clear and straightforward process that anyone on your team can grasp.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 group hover:bg-[#273F4F]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">Easy to Buy</h3>
              <p className="text-[#EFEEEA]/80 leading-relaxed">Transparent pricing and scope with no hidden costs or surprises.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 group hover:bg-[#273F4F]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">Easy to Implement</h3>
              <p className="text-[#EFEEEA]/80 leading-relaxed">We handle the heavy lifting so you can focus on your core business.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 group hover:bg-[#273F4F]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#EFEEEA] group-hover:text-[#FE7743] transition-colors duration-300">Operational Leverage</h3>
              <p className="text-[#EFEEEA]/80 leading-relaxed">Get your time back and scale without constantly adding new hires.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 