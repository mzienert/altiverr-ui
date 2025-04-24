'use client';

import { useEffect, useRef, useState } from 'react';
import { getCalendlyUrl, loadCalendlyScript } from '@/lib/calendly';

interface CalendlyEmbedProps {
  source?: string;
  campaign?: string;
  className?: string;
}

declare global {
  interface Window {
    Calendly: any;
    analytics: any;
  }
}

export function CalendlyEmbed({
  source = 'website',
  campaign = 'consultation',
  className = '',
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(1200);
  
  useEffect(() => {
    // Load Calendly script
    loadCalendlyScript();
    
    // Handle messages from Calendly iframe
    const handleCalendlyMessage = (e: MessageEvent) => {
      // Check if this is a Calendly event
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        console.log('Calendly event detected:', e.data.event);
        
        // Set appropriate heights based on the current view
        switch (e.data.event) {
          case 'calendly.profile_page_viewed':
          case 'calendly.event_type_viewed':
            // Initial view - default height
            setContainerHeight(1200);
            break;
            
          case 'calendly.date_and_time_selected':
            // Date selection view - slightly taller
            setContainerHeight(1500);
            break;
            
          case 'calendly.form_started':
          case 'calendly.form_viewed':
            // Form view - much taller to accommodate all fields
            setContainerHeight(2000);
            // Scroll to keep the form in view
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 500);
            break;
            
          case 'calendly.form_submission_failed':
            // When form fails, ensure enough height for error messages
            setContainerHeight(2200);
            break;
            
          case 'calendly.event_scheduled':
            // Confirmation view - can be shorter
            setContainerHeight(1200);
            break;
        }
      }
    };
    
    // Add the event listener
    window.addEventListener('message', handleCalendlyMessage);
    
    // Check viewport size and adjust initial height
    const adjustForViewport = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setContainerHeight(isMobile ? 1500 : 1200);
    };
    
    // Set initial height based on viewport
    adjustForViewport();
    
    // Listen for resize events
    window.addEventListener('resize', adjustForViewport);
    
    // Initialize Calendly inline widget when script is loaded
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.Calendly && containerRef.current) {
        const calendlyUrl = getCalendlyUrl(source, campaign);
        
        // Track view if analytics is available
        if (window.analytics) {
          window.analytics.track('Calendly Widget Viewed', {
            source,
            campaign,
          });
        }
        
        // Clear any existing content in case of re-render
        if (containerRef.current.firstChild) {
          containerRef.current.innerHTML = '';
        }
        
        // Initialize inline widget with Calendly's preferred method
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
          prefill: {},
          utm: {
            utmSource: source,
            utmMedium: 'website',
            utmCampaign: campaign,
          }
        });
        
        clearInterval(interval);
      }
    }, 200);
    
    return () => {
      window.removeEventListener('message', handleCalendlyMessage);
      window.removeEventListener('resize', adjustForViewport);
      clearInterval(interval);
    };
  }, [source, campaign]);
  
  return (
    <div 
      ref={containerRef} 
      className={`calendly-embed-container ${className}`}
      style={{ minHeight: `${containerHeight}px` }}
      data-auto-load="false"
    ></div>
  );
} 