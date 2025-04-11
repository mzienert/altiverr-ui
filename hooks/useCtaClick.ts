import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';

export const useCtaClick = () => {
  const { track } = useAnalytics();

  const handleCtaClick = useCallback((ctaLocation: string) => {
    // Track the CTA click with the location
    track('cta_click', { ctaLocation });

    // Handle different CTA types based on the action needed
    // For now, all CTAs go to Calendly, but we track which one was clicked
    window.open('https://calendly.com/matt-altiverr/30min', '_blank');
  }, [track]);

  return handleCtaClick;
}; 