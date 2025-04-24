'use client';

import { useState, useEffect } from 'react';
import { getCalendlyUrl, loadCalendlyScript } from '@/lib/calendly';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  text?: string;
  source?: string;
  campaign?: string;
  className?: string;
}

export function CalendlyButton({
  text = 'Book a Free Consultation',
  source = 'website',
  campaign = 'contact',
  className = '',
}: CalendlyButtonProps) {
  const [calendlyUrl, setCalendlyUrl] = useState<string>('');

  useEffect(() => {
    // Load Calendly script
    loadCalendlyScript();
    
    // Generate the URL with tracking parameters
    const url = getCalendlyUrl(source, campaign);
    setCalendlyUrl(url);
  }, [source, campaign]);

  const handleClick = () => {
    // Track the click event if analytics is available
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Calendly Button Clicked', {
        source,
        campaign,
      });
    }
    
    // Open Calendly in popup (if the script is loaded)
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      return false;
    } else {
      // Fallback to opening in new tab
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className={`flex items-center gap-2 ${className}`}
      size="lg"
    >
      <Calendar className="h-5 w-5" />
      {text}
    </Button>
  );
} 