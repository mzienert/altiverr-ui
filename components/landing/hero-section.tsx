"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import TextShimmer from "../magicui/text-shimmer";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-8 max-w-[80rem] px-6 text-center md:px-8"
    >
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Elevating Human Potential Through Intelligent Collaboration.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        At Altiverr, we empower organizations with the skills and tools to seamlessly integrate AI technologies into their workflows, augmenting human productivity and unlocking unprecedented potential. We believe that the future belongs to those who can effectively partner with AI—not replace humans, but enhance what makes us uniquely human.
      </p>
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>Launching Soon</span>{" "}
        </TextShimmer>
      </div>
    </section>
  );
}
