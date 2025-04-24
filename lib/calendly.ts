// This file contains the Calendly utility functions

/**
 * Calendly configuration
 * Replace with your actual Calendly event link
 */
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/initial-consultation';

/**
 * Get pre-configured Calendly URL with UTM parameters for tracking
 */
export function getCalendlyUrl(source: string = 'website', campaign: string = 'contact'): string {
  // Add UTM parameters for tracking
  const utmParams = new URLSearchParams({
    utm_source: source,
    utm_medium: 'website',
    utm_campaign: campaign,
  });
  
  return `${CALENDLY_URL}?${utmParams.toString()}`;
}

/**
 * Load Calendly widget script dynamically
 */
export function loadCalendlyScript(): void {
  if (typeof window !== 'undefined' && !window.Calendly) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
} 