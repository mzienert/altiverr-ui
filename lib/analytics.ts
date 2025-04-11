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

// Helper functions for common analytics actions
export const trackEvent = (event: AnalyticsEvent | string, properties: AnalyticsProperties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventName = typeof event === 'string' ? event : event.name;
    const eventProperties = typeof event === 'string' ? properties : { ...event.properties, ...properties };
    
    window.gtag('event', eventName, eventProperties);
  }
};

export const trackPageView = (pageView: PageView | AnalyticsProperties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    if ('url' in pageView) {
      window.gtag('event', 'page_view', {
        page_location: pageView.url,
        page_title: pageView.title,
        ...pageView.properties
      });
    } else {
      window.gtag('event', 'page_view', pageView);
    }
  }
};

export const identifyUser = (userId: string, traits: UserTraits = {}) => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (typeof window !== 'undefined' && window.gtag && gaId) {
    window.gtag('config', gaId, {
      user_id: userId,
      ...traits
    });
  }
};

// Convenience method for common events
export const trackPurchase = (items: PurchaseItem[], total: number) => {
  trackEvent({
    name: 'purchase',
    properties: {
      items,
      total,
      timestamp: new Date().toISOString()
    }
  });
}; 