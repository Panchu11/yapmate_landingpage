import { useState, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export const useScrollProgress = () => {
  const scrollYProgress = useMotionValue(0)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      scrollYProgress.set(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [scrollYProgress])

  return scaleX
}
