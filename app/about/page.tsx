import { Metadata } from "next";
import { MotionFadeIn } from "@/components/animations/motion-wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Altiverr | Our Story",
  description: "Learn about Altiverr's mission, vision, and the team behind our success",
};

export default function AboutPage() {
  return (
    <div className="px-4 mx-auto max-w-7xl py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#EFEEEA] tracking-tight">
        About <span className="text-[#FE7743]">Altiverr</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-start mb-20">
        <MotionFadeIn className="space-y-8 md:col-span-4">
          <div className="relative h-[400px] rounded-xl shadow-xl overflow-hidden bg-[#273F4F]/30 backdrop-blur-sm border border-[#273F4F]/30">
            <Image 
              src="/1551805746955.jpeg" 
              alt="Matthew Zienert, Altiverr Founder" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">Matthew Zienert</h3>
              <p className="text-white/80">Founder & Lead Engineer</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FE7743]">Certifications</h3>
            <a href="https://www.credly.com/badges/e66eb0e0-8b35-413b-9985-c915f860a67f/public_url" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
              <Image 
                src="/aws-certified-ai-practitioner-early-adopter.png" 
                alt="AWS Certified AI Practitioner" 
                width={180}
                height={180}
                className="hover:opacity-90 transition-opacity cursor-pointer"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </MotionFadeIn>

        <MotionFadeIn className="prose dark:prose-invert max-w-none md:col-span-6">
          <p className="text-lg text-[#EFEEEA]/90 mb-6 leading-relaxed">
            Tired of operational chaos holding your business back? Altiverr is a systems integration and automation consultancy founded by software engineer Matthew Zienert, bringing over a decade of hands-on experience in building, optimizing, and scaling technology for ambitious businesses – those driven to innovate and achieve rapid growth.
          </p>
          <p className="text-lg text-[#EFEEEA]/90 mb-6 leading-relaxed">
            With a background spanning full-stack development, cloud infrastructure (AWS, GCP), and advanced automation, Altiverr is engineered to help businesses cut through operational chaos and unlock new levels of efficiency, resulting in thousands of tasks automated and significant cost savings for our clients. We specialize in designing and implementing automated systems—integrating best-in-class tools, AI solutions, and process workflows that eliminate bottlenecks, reduce manual labor, and drive measurable growth.
          </p>
          <p className="text-lg text-[#EFEEEA]/90 mb-6 leading-relaxed">
            Matthew's career has been built on solving real business problems, from developing complex web applications and scalable SaaS platforms to architecting data pipelines and migrating legacy systems to the cloud. Altiverr translates this deep technical expertise into practical, high-leverage solutions for clients who are serious about working smarter.
          </p>
          <p className="text-lg text-[#EFEEEA]/90 mb-6 leading-relaxed">
            Our approach is grounded in systemization, maximum efficiency, and a healthy disregard for business-as-usual. Whether you're looking to automate key workflows, overhaul your tech stack, or finally get your ops under control, Altiverr is the partner for teams ready to move fast and think differently.
          </p>
          <p className="text-lg text-[#EFEEEA]/90 mb-10 font-medium leading-relaxed">
            Let's discuss how Altiverr can transform your business.
          </p>
        </MotionFadeIn>
      </div>
    </div>
  );
} 