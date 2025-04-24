import { Metadata } from "next";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { FileText, Zap, Cpu, BarChart, Mountain, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PEAK Framework | Altiverr",
  description: "Unlock sustainable growth with Altiverr's PEAK Framework - a holistic, systemized approach to business optimization that delivers tangible results.",
};

export default function FrameworkPage() {
  const peakPhases = [
    {
      letter: "P",
      title: "Process Mapping & Documentation",
      description: "We dive deep into your current processes, shadowing your team and uncovering pain points. We map out existing workflows and document them for clarity and consistency.",
      benefits: "Clarity, efficiency, and a foundation for future optimization. Eliminates confusion and ensures everyone is on the same page.",
      deliverables: ["Process maps & videos", "SOPs/checklists"],
      icon: <FileText className="size-10 text-white" />,
      color: "bg-blue-600"
    },
    {
      letter: "E",
      title: "System Design & Integration",
      description: "We architect a tailored tech stack and system integration plan to streamline your operations.",
      benefits: "A blueprint for a future-proofed business, built for scalability and efficiency.",
      deliverables: ["Tech stack integration docs"],
      icon: <Zap className="size-10 text-white" />,
      color: "bg-purple-600"
    },
    {
      letter: "A",
      title: "Automation & Implementation",
      description: "We build and deploy custom automations using tools like Zapier, Make.com, Go High Level, and custom scripts.",
      benefits: "Free up your founder's and team's time, reduce errors, and eliminate manual grunt work.",
      deliverables: ["Automated workflows (Zapier/Make/Go High Level)", "API integrations", "Automation maps", "User training", "Handoff docs"],
      icon: <Cpu className="size-10 text-white" />,
      color: "bg-indigo-600"
    },
    {
      letter: "K",
      title: "Key Metrics & Optimization",
      description: "We define, implement, and monitor key performance indicators (KPIs) for every core process. We provide automated reporting and ongoing optimization plans.",
      benefits: "Lasting improvement and compounding value—not just a one-time \"fix.\" Data-driven decision making.",
      deliverables: ["KPI dashboards", "Performance reports", "Ongoing optimization plans"],
      icon: <BarChart className="size-10 text-white" />,
      color: "bg-cyan-600"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <Mountain className="w-96 h-96 text-white" strokeWidth={1} />
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Unlock Sustainable Growth with the Altiverr PEAK Framework
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-4 my-8">
              {peakPhases.map((phase, index) => (
                <div key={index} className={`${phase.color} h-32 rounded-xl flex flex-col items-center justify-center text-white relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {phase.icon}
                  </div>
                  <span className="text-5xl font-bold">{phase.letter}</span>
                  <div className="h-1 w-8 bg-white/40 my-2"></div>
                  <span className="text-xs font-medium">{phase.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-200 mb-8">
              Are you tired of firefighting operational bottlenecks and feeling like your business is running you, instead of the other way around? At Altiverr, we're obsessed with turning chaotic, manual processes into lean, automated machines that fuel sustainable growth. Our secret? The PEAK Framework.
            </p>
            <p className="text-xl text-gray-200">
              PEAK isn't just automation – it's a holistic, systemized approach to business optimization that delivers tangible results. It's both the client-facing methodology and the backbone of all Altiverr deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* How PEAK Works Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            How PEAK Works: A Step-by-Step Guide to Business Transformation
          </h2>
          
          <div className="max-w-4xl mx-auto my-12">
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              {peakPhases.map((phase, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
                  <div className={`${phase.color} w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white`}>
                    <span className="text-2xl md:text-4xl font-bold">{phase.letter}</span>
                  </div>
                  <p className="text-white mt-2 text-center font-medium">{phase.title.split(' ')[0]}</p>
                  
                  {index < peakPhases.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-24 w-full h-0.5 bg-gray-600">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ChevronRight className="text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-600 z-0"></div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-200">
              PEAK is built on a stepwise, repeatable process, designed to:
            </p>
            <ul className="text-lg text-gray-300 mt-4 space-y-2">
              <li>Diagnose operational bottlenecks.</li>
              <li>Systematize and document critical workflows.</li>
              <li>Engineer and implement automations.</li>
              <li>Track and optimize performance via key metrics.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PEAK Phases Detailed Sections */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {peakPhases.map((phase, index) => (
              <div key={index} className="border border-gray-700 rounded-xl overflow-hidden">
                <div className={`${phase.color} px-6 py-4 flex items-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    {phase.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{phase.letter} - {phase.title}</h3>
                </div>
                
                <div className="p-6 bg-gray-800">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold mb-3 text-white">What it is:</h4>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold mb-3 text-white">What you gain:</h4>
                      <p className="text-gray-300">{phase.benefits}</p>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold mb-3 text-white">Sample Deliverables:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2">•</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PEAK Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            PEAK: It's More Than Just Automation
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-200 mb-8">
              Unlike typical automation consultants who simply string together "Zaps," Altiverr delivers a turnkey set of processes, automations, and metrics you can rely on.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Easy to Understand</h3>
                <p className="text-gray-300">A clear and straightforward process.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Easy to Buy</h3>
                <p className="text-gray-300">Transparent pricing and scope.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Easy to Implement</h3>
                <p className="text-gray-300">We handle the heavy lifting.</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Operational Leverage</h3>
                <p className="text-gray-300">Get your time back and scale without constantly adding new hires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Sample Deliverables Across PEAK
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Process maps & videos",
              "SOPs/checklists",
              "Tech stack integration docs",
              "Automated workflows",
              "KPI dashboards",
              "Handoff guides",
              "Quarterly optimization reviews",
              "API integrations"
            ].map((deliverable, index) => (
              <div key={index} className="aspect-square relative bg-gray-800 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <p className="text-white font-medium">{deliverable}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#273F4F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Business's Potential?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how the Altiverr PEAK Framework can transform your operations and fuel your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyPopupButton 
              text="Schedule a Free Consultation" 
              source="framework"
              campaign="framework_cta"
              className="py-4 px-8 text-lg bg-[#FE7743] hover:bg-[#FE7743]/90 text-black font-medium rounded-full transition-all duration-300"
            />
          </div>
          <p className="mt-8 text-lg font-medium">
            PEAK turns your business into a system that runs itself, with the metrics to prove it.
          </p>
        </div>
      </section>
    </main>
  );
} 