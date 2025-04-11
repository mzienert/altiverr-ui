import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

// Initialize analytics instance
export const analytics = Analytics({
  app: 'altiverr',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-D6D70ETZSV']
    })
  ]
})

// Type definitions for analytics events
export interface AnalyticsProperties {
  [key: string]: any
}

export interface AnalyticsEvent {
  name: string
  properties?: AnalyticsProperties
}

export interface PageView {
  url: string
  title?: string
  properties?: AnalyticsProperties
}

export interface PurchaseItem {
  id?: string
  name?: string
  price?: number
  [key: string]: any
}

export interface UserTraits {
  firstName?: string
  lastName?: string
  email?: string
  [key: string]: any
}

// Helper functions for common analytics actions
export const trackEvent = (event: AnalyticsEvent | string, properties: AnalyticsProperties = {}) => {
  if (typeof event === 'string') {
    analytics.track(event, properties)
  } else {
    analytics.track(event.name, event.properties)
  }
}

export const trackPageView = (pageView: PageView | AnalyticsProperties = {}) => {
  if ('url' in pageView) {
    analytics.page({
      url: pageView.url,
      title: pageView.title,
      ...pageView.properties
    })
  } else {
    analytics.page(pageView)
  }
}

export const identifyUser = (userId: string, traits: UserTraits = {}) => {
  analytics.identify(userId, traits)
}

// Convenience method for common events
export const trackPurchase = (items: PurchaseItem[], total: number) => {
  trackEvent({
    name: 'purchase',
    properties: {
      items,
      total,
      timestamp: new Date().toISOString()
    }
  })
}

// Custom hook for analytics
export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView,
    identifyUser,
    trackPurchase
  }
} 