'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useCtaClick } from "@/hooks/useCtaClick";

export default function ServicesPage() {
  const handleCtaClick = useCtaClick();

  return (
    <div className="px-4 mx-auto max-w-7xl py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#EFEEEA] tracking-tight">
        Our <span className="text-[#FE7743]">Services</span>
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#EFEEEA]">Altiverr: Build Your Scalable Backend</h2>
          <p className="text-lg text-[#EFEEEA]/80 leading-relaxed mb-6">
            Altiverr helps small to mid-sized service-based businesses, making $20k–$250k+ per month, build robust and scalable backends. 
            We're not just automating tasks – we're crafting a full systems architecture, leveraging our PEAK Framework, to eliminate 
            manual processes, improve visibility, and empower your team to scale without chaos.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-[#EFEEEA]">Our Services</h2>
        
        {/* Service 1 */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Analysis & Strategy Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">1. Audit & PEAK Blueprint</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Tired of juggling multiple tools, struggling with manual processes, and relying on one person to 'know how things work'? 
                Our Audit & PEAK Blueprint service uses our PEAK Framework to analyze your current backend, identify critical bottlenecks, 
                and design a scalable systems architecture. You're not just getting a list of to-dos – you're receiving a clear roadmap 
                for building a robust and optimized backend that's ready to scale.
              </p>
              <Button 
                onClick={() => handleCtaClick('services_audit_blueprint')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Let's Uncover Your Bottlenecks
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service 2 */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Onboarding Process Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">2. Automated Onboarding Systems</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Stop manually onboarding clients and losing leads. We'll design and build automated onboarding systems 
                tailored to your specific process – leveraging the PEAK Framework – connecting your CRM, project management, 
                and communication tools. Say goodbye to manual data entry and hello to a streamlined workflow.
              </p>
              <Button 
                onClick={() => handleCtaClick('services_automate_onboarding')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg" 
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Automate Onboarding
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service 3 */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Interconnected Systems Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">3. Connect Your Systems</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Leverage the PEAK Framework to connect your key systems – CRM, project management, communication tools – and 
                automate repetitive tasks, creating a cohesive and efficient backend.
              </p>
              <Button 
                onClick={() => handleCtaClick('services_connect_systems')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Connect Your Systems
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service 4 - New Targeted Automation Sprints */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Quick Automation Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">4. Targeted Automation Sprints</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Already know what needs fixing? We scope and deliver automation projects fast. Whether it's a lead intake process, 
                Slack notifications, or payment flow, we'll streamline it with full testing and handoff. Built using the PEAK Framework 
                for scale, not patchwork.
              </p>
              <Button 
                onClick={() => handleCtaClick('services_automation_sprints')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Let's Build One System Right
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service 5 - Documentation & Training (was 4 before) */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Documentation & Training Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">5. Systems Documentation & Training</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Don't just get automations - get ownership. Every Altiverr system comes with comprehensive SOPs, 
                detailed documentation, and personalized training for your team. We're committed to empowering your team 
                to take full control of your backend, ensuring long-term sustainability and reducing reliance on external 
                consultants. Built with the PEAK Framework in mind!
              </p>
              <Button 
                onClick={() => handleCtaClick('services_documentation_training')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Build a Scalable Team
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service 6 - New Strategy & Consulting Support */}
        <div className="bg-[#273F4F]/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#273F4F]/50 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service image */}
              <div className="w-full aspect-square bg-[#1B2B38] rounded-lg flex items-center justify-center">
                <span className="text-[#EFEEEA]/50">Strategic Planning Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#EFEEEA]">6. Strategy & Consulting Support</h3>
              <p className="text-[#EFEEEA]/80 mb-6 leading-relaxed">
                Need clarity before committing to a full build? Book a focused session where we review your ops, 
                suggest priority systems, and map out an implementation path. Perfect for leaders who need strategy before action.
              </p>
              <Button 
                onClick={() => handleCtaClick('services_strategy_consulting')}
                className="flex items-center gap-2 py-3 px-6 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Calendar className="h-5 w-5" />
                Start With Strategy
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bold attention-grabbing title */}
        <h2 className="text-4xl font-bold mt-16 mb-6 text-center text-[#EFEEEA]">Let's Build What <span className="text-[#FE7743]">Scales</span></h2>
        
        {/* Final CTA */}
        <div className="mt-10 flex justify-center">
          <Button 
            onClick={() => handleCtaClick('services_get_started')}
            className="flex items-center gap-2 py-4 px-8 bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300 shadow-lg text-lg"
            size="lg"
          >
            <Calendar className="h-6 w-6" />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
} 