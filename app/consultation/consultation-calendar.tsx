'use client';

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

export default function ConsultationCalendar() {
  const [isClient, setIsClient] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('');
  
  useEffect(() => {
    setIsClient(true);
    setCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/initial-consultation');
  }, []);
  
  if (!isClient || !calendlyUrl) {
    return (
      <div className="h-[650px] flex items-center justify-center bg-[#273F4F]/20 rounded-lg">
        <div className="animate-pulse text-[#EFEEEA]">Loading calendar...</div>
      </div>
    );
  }
  
  return (
    <InlineWidget 
      url={calendlyUrl}
      styles={{ height: '650px' }}
      pageSettings={{
        backgroundColor: '273F4F',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: 'FE7743', // Our primary orange color
        textColor: 'EFEEEA'     // Our light text color
      }}
      utm={{
        utmSource: 'consultation-page',
        utmMedium: 'website',
        utmCampaign: 'consultation'
      }}
    />
  );
} 