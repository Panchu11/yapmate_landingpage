import { useEffect, useRef, useCallback } from 'react'
import { analytics, trackingEvents } from '../utils/analytics'

// Hook for tracking scroll depth
export const useScrollTracking = () => {
  const scrollDepthRef = useRef<Set<number>>(new Set())
  const timeOnPageRef = useRef<number>(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      // Track scroll milestones (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100]
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthRef.current.has(milestone)) {
          scrollDepthRef.current.add(milestone)
          analytics.trackScrollDepth(milestone)
        }
      })
    }

    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000)
      analytics.trackTimeOnPage(timeOnPage)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
}

// Hook for tracking section visibility
export const useSectionTracking = (sectionName: string) => {
  const sectionRef = useRef<HTMLElement>(null)
  const hasTrackedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedRef.current) {
            hasTrackedRef.current = true
            
            // Track milestone based on section
            switch (sectionName) {
              case 'features':
                trackingEvents.reachedFeatures()
                break
              case 'demo':
                trackingEvents.reachedDemo()
                break
              case 'pricing':
                trackingEvents.reachedPricing()
                break
              case 'community':
                trackingEvents.reachedCommunity()
                break
            }

            analytics.trackEvent({
              action: 'section_view',
              category: 'navigation',
              label: sectionName
            })
          }
        })
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [sectionName])

  return sectionRef
}

// Hook for tracking button clicks
export const useButtonTracking = () => {
  const trackClick = useCallback((buttonName: string, location: string, additionalData?: any) => {
    analytics.trackButtonClick(buttonName, location)
    
    if (additionalData) {
      analytics.trackEvent({
        action: 'button_click_detailed',
        category: 'interaction',
        label: `${buttonName} - ${location}`,
        value: additionalData.value
      })
    }
  }, [])

  return { trackClick }
}

// Hook for tracking form interactions
export const useFormTracking = (formName: string) => {
  const trackFormStart = useCallback(() => {
    analytics.trackEvent({
      action: 'form_start',
      category: 'form',
      label: formName
    })
  }, [formName])

  const trackFormSubmit = useCallback((success: boolean, errorMessage?: string) => {
    analytics.trackFormSubmission(formName, success)
    
    if (!success && errorMessage) {
      analytics.trackError(errorMessage, formName)
    }
  }, [formName])

  const trackFieldInteraction = useCallback((fieldName: string, action: 'focus' | 'blur' | 'change') => {
    analytics.trackEvent({
      action: `field_${action}`,
      category: 'form',
      label: `${formName} - ${fieldName}`
    })
  }, [formName])

  return {
    trackFormStart,
    trackFormSubmit,
    trackFieldInteraction
  }
}

// Hook for tracking demo interactions
export const useDemoTracking = () => {
  const trackDemoStep = useCallback((step: number, action: string) => {
    analytics.trackDemoInteraction(action, step)
  }, [])

  const trackToneSelection = useCallback((tone: string) => {
    trackingEvents.toneSelection(tone)
  }, [])

  const trackDemoComplete = useCallback(() => {
    trackingEvents.demoComplete()
    analytics.trackConversion({
      event_name: 'demo_completion',
      value: 1
    })
  }, [])

  return {
    trackDemoStep,
    trackToneSelection,
    trackDemoComplete
  }
}

// Hook for tracking performance metrics
export const usePerformanceTracking = () => {
  useEffect(() => {
    // Track basic performance metrics
    trackBasicPerformance()

    function trackBasicPerformance() {
      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        analytics.trackPerformance('page_load_time', loadTime)
      })

      // Track DOM content loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const domLoadTime = performance.now()
          analytics.trackPerformance('dom_content_loaded', domLoadTime)
        })
      }
    }
  }, [])
}

// Hook for tracking user engagement patterns
export const useEngagementTracking = () => {
  const mouseMovementRef = useRef(0)
  const clickCountRef = useRef(0)
  const keyPressCountRef = useRef(0)

  useEffect(() => {
    let engagementTimer: NodeJS.Timeout

    const trackEngagement = () => {
      const engagementScore = mouseMovementRef.current + clickCountRef.current * 2 + keyPressCountRef.current * 3
      
      analytics.trackEvent({
        action: 'engagement_score',
        category: 'user_behavior',
        value: Math.min(engagementScore, 100) // Cap at 100
      })

      // Reset counters
      mouseMovementRef.current = 0
      clickCountRef.current = 0
      keyPressCountRef.current = 0
    }

    const handleMouseMove = () => {
      mouseMovementRef.current = Math.min(mouseMovementRef.current + 1, 50)
    }

    const handleClick = () => {
      clickCountRef.current = Math.min(clickCountRef.current + 1, 20)
    }

    const handleKeyPress = () => {
      keyPressCountRef.current = Math.min(keyPressCountRef.current + 1, 10)
    }

    // Track engagement every 30 seconds
    engagementTimer = setInterval(trackEngagement, 30000)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    window.addEventListener('keypress', handleKeyPress, { passive: true })

    return () => {
      clearInterval(engagementTimer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [])
}

// Hook for tracking errors
export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      analytics.trackError(event.message, event.filename || 'unknown')
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackError(String(event.reason), 'promise_rejection')
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])
}
