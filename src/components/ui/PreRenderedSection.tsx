import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PreRenderedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  animationDelay?: number
}

const PreRenderedSection: React.FC<PreRenderedSectionProps> = ({
  children,
  delay = 0,
  className = '',
  animationDelay = 0
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Small delay to stagger animations and improve perceived performance
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: animationDelay
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default PreRenderedSection
