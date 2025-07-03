// Analytics utility for YapMate landing page
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export interface ConversionEvent {
  event_name: string
  currency?: string
  value?: number
  items?: any[]
}

class Analytics {
  private isInitialized = false
  private isDevelopment = true // Always development for now

  // Initialize Google Analytics 4
  init(measurementId: string) {
    if (this.isInitialized || this.isDevelopment) return

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      page_title: 'YapMate - Revolutionary AI-Powered Crypto Twitter Reply Generator',
      page_location: window.location.href,
      send_page_view: true
    })

    this.isInitialized = true
    console.log('Analytics initialized with ID:', measurementId)
  }

  // Track page views
  trackPageView(page_title: string, page_location?: string) {
    if (!this.isInitialized || this.isDevelopment) {
      console.log('Analytics (dev):', 'Page View', { page_title, page_location })
      return
    }

    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title,
      page_location: page_location || window.location.href,
    })
  }

  // Track custom events
  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (!this.isInitialized || this.isDevelopment) {
      console.log('Analytics (dev):', 'Event', { action, category, label, value })
      return
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // Track conversions
  trackConversion({ event_name, currency = 'USD', value, items }: ConversionEvent) {
    if (!this.isInitialized || this.isDevelopment) {
      console.log('Analytics (dev):', 'Conversion', { event_name, currency, value, items })
      return
    }

    window.gtag('event', event_name, {
      currency,
      value,
      items,
    })
  }

  // Track scroll depth
  trackScrollDepth(percentage: number) {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage
    })
  }

  // Track time on page
  trackTimeOnPage(seconds: number) {
    this.trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      value: seconds
    })
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location: string) {
    this.trackEvent({
      action: 'click',
      category: 'button',
      label: `${buttonName} - ${location}`
    })
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean) {
    this.trackEvent({
      action: success ? 'submit_success' : 'submit_error',
      category: 'form',
      label: formName
    })
  }

  // Track demo interactions
  trackDemoInteraction(action: string, step?: number) {
    this.trackEvent({
      action: 'demo_interaction',
      category: 'demo',
      label: action,
      value: step
    })
  }

  // Track pricing plan views
  trackPricingView(planName: string) {
    this.trackEvent({
      action: 'view_plan',
      category: 'pricing',
      label: planName
    })
  }

  // Track social media clicks
  trackSocialClick(platform: string, location: string) {
    this.trackEvent({
      action: 'social_click',
      category: 'social',
      label: `${platform} - ${location}`
    })
  }

  // Track video interactions
  trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoName: string) {
    this.trackEvent({
      action: `video_${action}`,
      category: 'video',
      label: videoName
    })
  }

  // Track feature interactions
  trackFeatureInteraction(featureName: string, action: string) {
    this.trackEvent({
      action: 'feature_interaction',
      category: 'features',
      label: `${featureName} - ${action}`
    })
  }

  // Track user journey milestones
  trackMilestone(milestone: string) {
    this.trackEvent({
      action: 'milestone',
      category: 'user_journey',
      label: milestone
    })
  }

  // Track errors
  trackError(error: string, location: string) {
    this.trackEvent({
      action: 'error',
      category: 'technical',
      label: `${error} - ${location}`
    })
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number) {
    this.trackEvent({
      action: 'performance',
      category: 'technical',
      label: metric,
      value: Math.round(value)
    })
  }
}

// Create singleton instance
export const analytics = new Analytics()

// Predefined tracking functions for common actions
export const trackingEvents = {
  // Hero section
  heroCtaClick: () => analytics.trackButtonClick('Get Early Access', 'hero'),
  heroScrollDown: () => analytics.trackButtonClick('Scroll Down', 'hero'),
  
  // Demo section
  demoStart: () => analytics.trackDemoInteraction('start'),
  demoComplete: () => analytics.trackDemoInteraction('complete'),
  toneSelection: (tone: string) => analytics.trackDemoInteraction('tone_select', 0),
  
  // Pricing section
  pricingPlanView: (plan: string) => analytics.trackPricingView(plan),
  pricingCtaClick: (plan: string) => analytics.trackButtonClick(`Get ${plan}`, 'pricing'),
  
  // Community section
  discordClick: () => analytics.trackSocialClick('discord', 'community'),
  twitterClick: () => analytics.trackSocialClick('twitter', 'community'),
  
  // Navigation
  navClick: (section: string) => analytics.trackButtonClick(`Nav ${section}`, 'header'),
  
  // Milestones
  reachedFeatures: () => analytics.trackMilestone('reached_features'),
  reachedDemo: () => analytics.trackMilestone('reached_demo'),
  reachedPricing: () => analytics.trackMilestone('reached_pricing'),
  reachedCommunity: () => analytics.trackMilestone('reached_community'),
  
  // Conversions
  emailSignup: (source: string) => analytics.trackConversion({
    event_name: 'email_signup',
    value: 1,
    items: [{ item_name: 'email_signup', item_category: 'conversion', source }]
  }),
  
  earlyAccessRequest: (plan: string) => analytics.trackConversion({
    event_name: 'early_access_request',
    value: plan === 'pro' ? 29 : plan === 'enterprise' ? 99 : 0,
    items: [{ item_name: 'early_access', item_category: 'conversion', plan }]
  })
}

// Initialize analytics on import (disabled for now)
// if (typeof window !== 'undefined') {
//   analytics.init('G-XXXXXXXXXX')
// }
