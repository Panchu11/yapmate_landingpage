import { useEffect, useState, useCallback } from 'react'

interface AccessibilityPreferences {
  reducedMotion: boolean
  highContrast: boolean
  largeText: boolean
  screenReader: boolean
}

export const useAccessibility = () => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    screenReader: false
  })

  const [focusVisible, setFocusVisible] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPreferences(prev => ({ ...prev, reducedMotion: reducedMotionQuery.matches }))

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange)

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setPreferences(prev => ({ ...prev, highContrast: highContrastQuery.matches }))

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({ ...prev, highContrast: e.matches }))
    }

    highContrastQuery.addEventListener('change', handleHighContrastChange)

    // Check for screen reader
    const screenReaderDetected = window.navigator.userAgent.includes('NVDA') || 
                                 window.navigator.userAgent.includes('JAWS') || 
                                 window.speechSynthesis !== undefined

    setPreferences(prev => ({ ...prev, screenReader: screenReaderDetected }))

    // Focus visible detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true)
      }
    }

    const handleMouseDown = () => {
      setFocusVisible(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
      highContrastQuery.removeEventListener('change', handleHighContrastChange)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  // Apply accessibility classes to document
  useEffect(() => {
    const classes = []
    
    if (preferences.reducedMotion) classes.push('reduce-motion')
    if (preferences.highContrast) classes.push('high-contrast')
    if (preferences.largeText) classes.push('large-text')
    if (focusVisible) classes.push('focus-visible')

    document.documentElement.className = classes.join(' ')

    return () => {
      document.documentElement.className = ''
    }
  }, [preferences, focusVisible])

  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }, [])

  const skipToContent = useCallback(() => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
      announceToScreenReader('Skipped to main content')
    }
  }, [announceToScreenReader])

  const togglePreference = useCallback((key: keyof AccessibilityPreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }, [])

  return {
    preferences,
    focusVisible,
    announceToScreenReader,
    skipToContent,
    togglePreference
  }
}

// Hook for managing focus trap
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isActive])
}

// Hook for keyboard navigation
export const useKeyboardNavigation = () => {
  const handleKeyDown = useCallback((e: KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }, [])

  const makeKeyboardAccessible = useCallback((action: () => void) => {
    return {
      onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(e.nativeEvent, action),
      tabIndex: 0,
      role: 'button'
    }
  }, [handleKeyDown])

  return { makeKeyboardAccessible }
}

// Hook for managing ARIA live regions
export const useAriaLiveRegion = () => {
  const [liveRegion, setLiveRegion] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const region = document.createElement('div')
    region.setAttribute('aria-live', 'polite')
    region.setAttribute('aria-atomic', 'true')
    region.className = 'sr-only'
    region.id = 'aria-live-region'

    document.body.appendChild(region)
    setLiveRegion(region)

    return () => {
      if (document.body.contains(region)) {
        document.body.removeChild(region)
      }
    }
  }, [])

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority)
      liveRegion.textContent = message

      // Clear after announcement
      setTimeout(() => {
        if (liveRegion) {
          liveRegion.textContent = ''
        }
      }, 1000)
    }
  }, [liveRegion])

  return { announce }
}
