import { useCallback } from 'react';
import { 
  trackEvent, 
  trackPageView, 
  identifyUser, 
  trackPurchase,
  type AnalyticsProperties,
  type PurchaseItem,
  type UserTraits
} from '../lib/analytics';

export const useAnalytics = () => {
  const track = useCallback((eventName: string, properties: AnalyticsProperties = {}) => {
    console.log('tracking event', eventName, properties);
    trackEvent(eventName, properties);
  }, []);

  const page = useCallback((properties: AnalyticsProperties = {}) => {
    trackPageView(properties);
  }, []);

  const identify = useCallback((userId: string, traits: UserTraits = {}) => {
    identifyUser(userId, traits);
  }, []);

  const purchase = useCallback((items: PurchaseItem[], total: number) => {
    trackPurchase(items, total);
  }, []);

  return {
    track,
    page,
    identify,
    purchase
  };
};

// Export the hook type for consumers
export type AnalyticsHook = ReturnType<typeof useAnalytics>;