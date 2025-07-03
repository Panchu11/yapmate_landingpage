// Performance optimization utilities for YapMate Landing Page
import { lazy, ComponentType } from 'react'

// Pre-rendering strategy for instant content loading
export const preRenderStrategy = {
  // Critical sections that should load immediately
  critical: ['hero', 'features', 'how-it-works'],

  // Important sections with slight delay
  important: ['testimonials', 'pricing', 'roadmap'],

  // Secondary sections with more delay
  secondary: ['trust-signals', 'faq', 'cta', 'footer'],

  // Get delay for section
  getDelay: (sectionName: string): number => {
    if (preRenderStrategy.critical.includes(sectionName)) return 0
    if (preRenderStrategy.important.includes(sectionName)) return 100
    if (preRenderStrategy.secondary.includes(sectionName)) return 200
    return 300
  },

  // Get animation delay for section
  getAnimationDelay: (sectionName: string): number => {
    if (preRenderStrategy.critical.includes(sectionName)) return 0
    if (preRenderStrategy.important.includes(sectionName)) return 0.1
    if (preRenderStrategy.secondary.includes(sectionName)) return 0.2
    return 0.3
  }
}

// Legacy lazy loading (kept for compatibility)
export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return lazy(importFn)
}

// Preload critical resources and ensure instant content availability
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ]

  fontPreloads.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = href
    link.onload = () => {
      link.rel = 'stylesheet'
    }
    document.head.appendChild(link)
  })
}

// Force immediate content rendering
export const ensureContentAvailability = () => {
  // Force browser to render all content immediately
  if (typeof window !== 'undefined') {
    // Disable lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
      img.removeAttribute('loading')
    })

    // Force layout calculation to ensure all elements are rendered
    document.body.offsetHeight

    // Trigger a repaint to ensure everything is visible
    requestAnimationFrame(() => {
      document.body.style.transform = 'translateZ(0)'
      requestAnimationFrame(() => {
        document.body.style.transform = ''
      })
    })
  }
}

// Image optimization and lazy loading
export const optimizeImage = (src: string, options: {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'avif' | 'auto'
} = {}) => {
  const { width, height, quality = 85, format = 'auto' } = options
  
  // For production, you might want to use a service like Cloudinary or Vercel's image optimization
  let optimizedSrc = src
  
  // Add query parameters for optimization (if using a service)
  const params = new URLSearchParams()
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  if (quality) params.set('q', quality.toString())
  if (format !== 'auto') params.set('f', format)
  
  if (params.toString()) {
    optimizedSrc = `${src}?${params.toString()}`
  }
  
  return optimizedSrc
}

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => func(...args), wait)
  }
}

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Resource hints for better loading
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'vercel.com'
  ]
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = `//${domain}`
    document.head.appendChild(link)
  })
  
  // Preconnect to critical domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]
  
  preconnectDomains.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = href
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })
}

// Critical CSS inlining helper
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style')
  style.textContent = css
  style.setAttribute('data-critical', 'true')
  document.head.appendChild(style)
}

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now()
  fn()
  const end = performance.now()
  
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log(`${name} took ${end - start} milliseconds`)
  }
  
  return end - start
}

// Bundle splitting helpers
export const loadChunk = async (chunkName: string) => {
  try {
    const module = await import(/* webpackChunkName: "[request]" */ `../components/${chunkName}`)
    return module.default
  } catch (error) {
    console.error(`Failed to load chunk: ${chunkName}`, error)
    throw error
  }
}

// Memory management
export const cleanupResources = () => {
  // Clean up any global event listeners
  window.removeEventListener('scroll', () => {})
  window.removeEventListener('resize', () => {})
  
  // Clear any intervals or timeouts
  // This would be called in useEffect cleanup
}

// Web Vitals optimization
export const optimizeWebVitals = () => {
  // Optimize Largest Contentful Paint (LCP)
  const optimizeLCP = () => {
    // Preload hero images
    const heroImages = document.querySelectorAll('[data-hero-image]')
    heroImages.forEach(img => {
      if (img instanceof HTMLImageElement) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = img.src
        document.head.appendChild(link)
      }
    })
  }
  
  // Optimize First Input Delay (FID)
  const optimizeFID = () => {
    // Use requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Defer non-critical JavaScript
        import('../utils/analytics').then(() => {
          // Initialize analytics after main thread is free
          console.log('Analytics loaded')
        })
      })
    }
  }
  
  // Optimize Cumulative Layout Shift (CLS)
  const optimizeCLS = () => {
    // Add explicit dimensions to images
    const images = document.querySelectorAll('img:not([width]):not([height])')
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Set aspect ratio to prevent layout shift
        img.style.aspectRatio = '16/9' // Default aspect ratio
      }
    })
  }
  
  optimizeLCP()
  optimizeFID()
  optimizeCLS()
}

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('SW registered: ', registration)
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError)
    }
  }
}

export default {
  createLazyComponent,
  preloadCriticalResources,
  optimizeImage,
  createIntersectionObserver,
  debounce,
  throttle,
  addResourceHints,
  inlineCriticalCSS,
  measurePerformance,
  loadChunk,
  cleanupResources,
  optimizeWebVitals,
  registerServiceWorker
}
