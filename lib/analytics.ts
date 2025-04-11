// Type definitions for analytics events
export interface AnalyticsProperties {
  [key: string]: any;
}

export interface AnalyticsEvent {
  name: string;
  properties?: AnalyticsProperties;
}

export interface PageView {
  url: string;
  title?: string;
  properties?: AnalyticsProperties;
}

export interface PurchaseItem {
  id?: string;
  name?: string;
  price?: number;
  [key: string]: any;
}

export interface UserTraits {
  firstName?: string;
  lastName?: string;
  email?: string;
  [key: string]: any;
}

// Helper function to ensure gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && 
         typeof window.gtag !== 'undefined' && 
         process.env.NODE_ENV === 'production';
};

// Helper functions for common analytics actions
export const trackEvent = (event: AnalyticsEvent | string, properties: AnalyticsProperties = {}) => {
  if (!isGtagAvailable()) return;

  const eventName = typeof event === 'string' ? event : event.name;
  const eventProperties = typeof event === 'string' ? properties : { ...event.properties, ...properties };
  
  window.gtag('event', eventName, eventProperties);
};

export const trackPageView = (pageView: PageView | AnalyticsProperties = {}) => {
  if (!isGtagAvailable()) return;

  if ('url' in pageView) {
    window.gtag('event', 'page_view', {
      page_location: pageView.url,
      page_title: pageView.title,
      ...pageView.properties
    });
  } else {
    window.gtag('event', 'page_view', pageView);
  }
};

export const identifyUser = (userId: string, traits: UserTraits = {}) => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!isGtagAvailable() || !gaId) return;

  window.gtag('config', gaId, {
    user_id: userId,
    ...traits
  });
};

// Convenience method for common events
export const trackPurchase = (items: PurchaseItem[], total: number) => {
  if (!isGtagAvailable()) return;

  trackEvent({
    name: 'purchase',
    properties: {
      items,
      total,
      currency: 'USD', // Add currency for GA4 ecommerce
      timestamp: new Date().toISOString()
    }
  });
}; 