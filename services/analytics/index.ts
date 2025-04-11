import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import { useAnalytics } from '../../hooks/useAnalytics'

const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-abc123']
    })
  ]
})

// Define interfaces for our analytics types
interface AnalyticsProperties {
  [key: string]: any
}

interface PurchaseItem {
  id?: string
  name?: string
  price?: number
  [key: string]: any
}

interface UserTraits {
  firstName?: string
  lastName?: string
  email?: string
  [key: string]: any
}

export const trackEvent = (eventName: string, properties: AnalyticsProperties = {}) => {
  analytics.track(eventName, properties)
}

export const trackPageView = (pageProperties: AnalyticsProperties = {}) => {
  analytics.page(pageProperties)
}

export const identifyUser = (userId: string, traits: UserTraits = {}) => {
  analytics.identify(userId, traits)
}

// Convenience method for common events
export const trackPurchase = (items: PurchaseItem[], total: number) => {
  trackEvent('purchase', {
    items,
    total,
    timestamp: new Date().toISOString()
  })
}

// Export types for use in other files
export type { AnalyticsProperties, PurchaseItem, UserTraits }

function YourComponent() {
  const { track, page, identify } = useAnalytics()

  const handleCheckout = () => {
    track('cartCheckout', {
      item: 'pink socks',
      price: 20,
      // TypeScript will now warn if you pass invalid properties
    })
  }

  // ...
}