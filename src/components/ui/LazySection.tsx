import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
  fallback?: React.ReactNode
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  className = '',
  fallback = null
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true)
            setHasLoaded(true)
            // Disconnect observer after loading to improve performance
            observer.disconnect()
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, hasLoaded])

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-neon-green border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-400">Loading section...</span>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default LazySection
