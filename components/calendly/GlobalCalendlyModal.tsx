'use client';

import { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { useCalendlyModalStore } from '@/hooks/useCtaClick';

export function GlobalCalendlyModal() {
  const { isOpen, closeModal, source, campaign } = useCalendlyModalStore();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('');

  useEffect(() => {
    // Set client state and get root element
    setIsClient(true);
    setRootElement(document.body);
    
    // Get Calendly URL from environment or use default
    setCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/initial-consultation');
  }, []);

  // UTM parameters for tracking
  const utmParams = {
    utmSource: source,
    utmMedium: 'website',
    utmCampaign: campaign,
  };

  if (!isClient || !rootElement) {
    return null;
  }

  return (
    <PopupModal
      url={calendlyUrl}
      rootElement={rootElement}
      onModalClose={closeModal}
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
  );
} 