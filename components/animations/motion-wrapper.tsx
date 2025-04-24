"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function MotionBlurWrapper({ children, className = "" }: MotionWrapperProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeIn({ children, className = "" }: MotionWrapperProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
} 