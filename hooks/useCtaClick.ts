import { useCallback, useRef, useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

export const useCtaClick = () => {
  const { track } = useAnalytics();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  // Create a hidden anchor element for opening links
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('a');
      link.style.display = 'none';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      linkRef.current = link;
      
      return () => {
        document.body.removeChild(link);
      };
    }
  }, []);

  const handleCtaClick = useCallback((ctaLocation: string) => {
    console.log('tracking cta click', ctaLocation);
    // Track the CTA click with the location
    track('cta_click', { ctaLocation });

    // Handle different CTA types based on the action needed
    // For now, all CTAs go to Calendly, but we track which one was clicked
    if (linkRef.current) {
      linkRef.current.href = 'https://calendly.com/matt-altiverr/30min';
      linkRef.current.click();
    } else {
      // Fallback if the ref isn't available
      window.open('https://calendly.com/matt-altiverr/30min', '_blank');
    }
  }, [track]);

  return handleCtaClick;
}; 