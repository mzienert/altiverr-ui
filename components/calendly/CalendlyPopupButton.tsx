'use client';

import { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface CalendlyPopupButtonProps {
  text?: string;
  source?: string;
  campaign?: string;
  className?: string;
  url?: string;
}

// Make Window.analytics available
declare global {
  interface Window {
    analytics: any;
  }
}

export function CalendlyPopupButton({
  text = 'Book a Free Consultation',
  source = 'website',
  campaign = 'contact',
  className = '',
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/initial-consultation',
}: CalendlyPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  
  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true);
    // Set document body as the root element
    setRootElement(document.body);
    
    // Track view if analytics is available
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Calendly Button Viewed', {
        source,
        campaign,
      });
    }
  }, [source, campaign]);
  
  // UTM parameters for tracking
  const utmParams = {
    utmSource: source,
    utmMedium: 'website',
    utmCampaign: campaign,
  };
  
  const handleClick = () => {
    // Track button click
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Calendly Button Clicked', {
        source,
        campaign,
      });
    }
    
    setIsOpen(true);
  };
  
  return (
    <>
      <Button 
        className={`flex items-center gap-2 ${className}`}
        size="lg"
        onClick={handleClick}
      >
        <Calendar className="h-5 w-5" />
        {text}
      </Button>
      
      {isClient && rootElement && (
        <PopupModal
          url={url}
          rootElement={rootElement}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          utm={utmParams}
          prefill={{}}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '64748b', // --color-one
            textColor: '1e293b'     // primary dark color
          }}
        />
      )}
    </>
  );
}

// Add default export to support both import styles
export default CalendlyPopupButton; 