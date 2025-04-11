import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const analytics = Analytics({
  app: 'altiverr',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-D6D70ETZSV']
    })
  ]
})

// Type definitions for analytics events
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}

export interface PageView {
  url: string
  title?: string
  properties?: Record<string, any>
}

// Helper functions for common analytics actions
export const trackEvent = (event: AnalyticsEvent) => {
  analytics.track(event.name, event.properties)
}

export const trackPageView = (pageView: PageView) => {
  analytics.page({
    url: pageView.url,
    title: pageView.title,
    ...pageView.properties
  })
}

// Custom hook for analytics
export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView
  }
} 