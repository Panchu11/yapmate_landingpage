import { useEffect, useRef, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
}

interface ResourceTiming {
  name: string
  duration: number
  size: number
  type: string
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({})
  const [resources, setResources] = useState<ResourceTiming[]>([])
  const [isMonitoring, setIsMonitoring] = useState(false)
  const observerRef = useRef<PerformanceObserver | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return

    setIsMonitoring(true)

    // Monitor navigation timing
    const measureNavigationTiming = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          timeToInteractive: navigation.domInteractive - (navigation.fetchStart || 0)
        }))
      }
    }

    // Monitor paint timing
    const measurePaintTiming = () => {
      const paintEntries = performance.getEntriesByType('paint')
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            firstContentfulPaint: entry.startTime
          }))
        }
      })
    }

    // Monitor resource timing
    const measureResourceTiming = () => {
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      const resourceData: ResourceTiming[] = resourceEntries.map(entry => ({
        name: entry.name.split('/').pop() || entry.name,
        duration: entry.duration,
        size: entry.transferSize || 0,
        type: getResourceType(entry.name)
      }))
      setResources(resourceData)
    }

    // Performance Observer for LCP and CLS
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lastEntry.startTime
          }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: clsValue
          }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: (entry as any).processingStart - entry.startTime
            }))
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        observerRef.current = lcpObserver
      } catch (error) {
        console.warn('Performance Observer not supported:', error)
      }
    }

    // Initial measurements
    setTimeout(() => {
      measureNavigationTiming()
      measurePaintTiming()
      measureResourceTiming()
    }, 1000)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      setIsMonitoring(false)
    }
  }, [])

  const getResourceType = (url: string): string => {
    if (url.includes('.js')) return 'script'
    if (url.includes('.css')) return 'stylesheet'
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return 'image'
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font'
    return 'other'
  }

  const getPerformanceScore = (): number => {
    const { firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift, firstInputDelay } = metrics
    
    let score = 100
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8s-3s, poor: >3s)
    if (firstContentfulPaint) {
      if (firstContentfulPaint > 3000) score -= 25
      else if (firstContentfulPaint > 1800) score -= 10
    }
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5s-4s, poor: >4s)
    if (largestContentfulPaint) {
      if (largestContentfulPaint > 4000) score -= 25
      else if (largestContentfulPaint > 2500) score -= 10
    }
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (cumulativeLayoutShift) {
      if (cumulativeLayoutShift > 0.25) score -= 25
      else if (cumulativeLayoutShift > 0.1) score -= 10
    }
    
    // FID scoring (good: <100ms, needs improvement: 100ms-300ms, poor: >300ms)
    if (firstInputDelay) {
      if (firstInputDelay > 300) score -= 25
      else if (firstInputDelay > 100) score -= 10
    }
    
    return Math.max(0, score)
  }

  const getOptimizationSuggestions = (): string[] => {
    const suggestions: string[] = []
    const { firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift, firstInputDelay } = metrics
    
    if (firstContentfulPaint && firstContentfulPaint > 1800) {
      suggestions.push('Optimize critical rendering path to improve First Contentful Paint')
    }
    
    if (largestContentfulPaint && largestContentfulPaint > 2500) {
      suggestions.push('Optimize largest content element (images, videos) to improve LCP')
    }
    
    if (cumulativeLayoutShift && cumulativeLayoutShift > 0.1) {
      suggestions.push('Add size attributes to images and reserve space for dynamic content')
    }
    
    if (firstInputDelay && firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time to improve interactivity')
    }
    
    // Resource-based suggestions
    const largeResources = resources.filter(r => r.size > 100000) // > 100KB
    if (largeResources.length > 0) {
      suggestions.push(`Optimize large resources: ${largeResources.map(r => r.name).join(', ')}`)
    }
    
    const slowResources = resources.filter(r => r.duration > 1000) // > 1s
    if (slowResources.length > 0) {
      suggestions.push(`Improve loading speed for: ${slowResources.map(r => r.name).join(', ')}`)
    }
    
    return suggestions
  }

  return {
    metrics,
    resources,
    isMonitoring,
    performanceScore: getPerformanceScore(),
    suggestions: getOptimizationSuggestions()
  }
}
