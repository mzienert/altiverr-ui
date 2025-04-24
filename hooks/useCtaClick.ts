import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';
import { create } from 'zustand';

// Create a global store for Calendly modal state
interface CalendlyModalState {
  isOpen: boolean;
  source: string;
  campaign: string;
  openModal: () => void;
  closeModal: () => void;
  setTracking: (source: string, campaign: string) => void;
}

export const useCalendlyModalStore = create<CalendlyModalState>((set) => ({
  isOpen: false,
  source: 'website',
  campaign: 'default',
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setTracking: (source, campaign) => set({ source, campaign }),
}));

export const useCtaClick = () => {
  const { track } = useAnalytics();
  const { openModal, setTracking } = useCalendlyModalStore();

  const handleCtaClick = useCallback((ctaLocation: string) => {
    // Track the CTA click with the location
    track('cta_click', { ctaLocation });

    // Set the source and campaign for tracking
    setTracking(ctaLocation, 'cta_click');
    
    // Open the Calendly modal
    openModal();
  }, [track, openModal, setTracking]);

  return handleCtaClick;
}; 