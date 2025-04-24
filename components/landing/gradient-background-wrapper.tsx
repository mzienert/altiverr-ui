"use client";

interface GradientBackgroundWrapperProps {
  children: React.ReactNode;
}

export default function GradientBackgroundWrapper({
  children
}: GradientBackgroundWrapperProps) {
  return (
    <div 
      className="relative" 
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #d6d8d3 100%)'
      }}
    >
      {children}
    </div>
  );
} 