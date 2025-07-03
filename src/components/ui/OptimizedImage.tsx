import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
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
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Generate optimized image URL (in a real app, you'd use a service like Cloudinary)
  const getOptimizedSrc = (originalSrc: string) => {
    // For now, return original src
    // In production, you'd add query parameters for optimization:
    // return `${originalSrc}?w=${width}&h=${height}&q=${quality}&f=webp`
    return originalSrc
  }

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setIsError(true)
    onError?.()
  }

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
          src={getOptimizedSrc(src)}
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
}

export default OptimizedImage
