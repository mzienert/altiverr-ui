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
      <div className="h-[650px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="animate-pulse">Loading calendar...</div>
      </div>
    );
  }
  
  return (
    <InlineWidget 
      url={calendlyUrl}
      styles={{ height: '650px' }}
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '64748b', // --color-one
        textColor: '1e293b'     // primary dark color
      }}
      utm={{
        utmSource: 'consultation-page',
        utmMedium: 'website',
        utmCampaign: 'consultation'
      }}
    />
  );
} 