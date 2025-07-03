import React, { useState, useRef, useEffect, memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { optimizeImage } from '../../utils/performance'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholder?: string
  quality?: number
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  quality = 85,
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  // Optimize image source with performance utils
  const optimizedSrc = optimizeImage(src, { width, height, quality })
  const containerRef = useRef<HTMLDivElement>(null)

  // Optimized event handlers
  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsError(true)
    onError?.()
  }, [onError])

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])



  const imageStyle = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={imageStyle}
    >
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
          style={imageStyle}
        >
          {placeholder ? (
            <div className="text-gray-400 text-center">
              <div className="text-4xl mb-2">{placeholder}</div>
              <div className="text-sm">Loading...</div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-neon-green border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-400 text-sm">Loading image...</span>
            </div>
          )}
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div
          className="absolute inset-0 bg-gray-800 flex items-center justify-center"
          style={imageStyle}
        >
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.1
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage
