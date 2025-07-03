import React, { useEffect, useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import {
  preloadCriticalResources,
  addResourceHints,
  optimizeWebVitals,
  registerServiceWorker
} from './utils/performance'

// Layout Components

// Legal Pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'))
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'))
const HomePage = React.lazy(() => import('./pages/HomePage'))

// Hooks (temporarily disabled for debugging)

function App() {
  const [isReady, setIsReady] = useState(false)

  // Initialize performance optimizations
  useEffect(() => {
    // Preload critical resources
    preloadCriticalResources()

    // Add resource hints for better loading
    addResourceHints()

    // Optimize Web Vitals
    optimizeWebVitals()

    // Register service worker for caching
    registerServiceWorker()

    // Mark app as ready
    setIsReady(true)
  }, [])

  // Analytics tracking hooks (temporarily disabled)
  // useScrollTracking()
  // usePerformanceTracking()
  // useEngagementTracking()
  // useErrorTracking()

  // Performance monitoring (temporarily disabled)
  // const { performanceScore, suggestions } = usePerformanceMonitor()

  // Accessibility (temporarily disabled)
  // const { preferences } = useAccessibility()

  // Performance logging temporarily disabled

  useEffect(() => {
    // Quick initialization
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        color: '#ffffff',
        overflowX: 'hidden',
        position: 'relative',
        background: '#0a0a0a'
      }}>
        {/* Main Content */}
        <AnimatePresence>
          {isReady && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Suspense fallback={
                <div className="section flex items-center justify-center">
                  <div className="text-green-400 animate-pulse">Loading...</div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                </Routes>
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(26, 26, 26, 0.9)',
              color: '#ffffff',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              backdropFilter: 'blur(20px)',
            },
            success: {
              iconTheme: {
                primary: '#00ff88',
                secondary: '#0a0a0a',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff4444',
                secondary: '#0a0a0a',
              },
            },
          }}
        />

        {/* Accessibility Toolbar and Performance Dashboard temporarily disabled */}

        {/* Vercel Analytics for visitor tracking */}
        <Analytics />

        {/* Vercel Speed Insights for performance monitoring */}
        <SpeedInsights />
      </div>
    </Router>
  )
}

export default App
