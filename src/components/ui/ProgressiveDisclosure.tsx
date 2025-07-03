import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus } from 'lucide-react'

interface ProgressiveDisclosureProps {
  children: React.ReactNode[]
  initialCount?: number
  expandText?: string
  collapseText?: string
  className?: string
}

const ProgressiveDisclosure: React.FC<ProgressiveDisclosureProps> = ({
  children,
  initialCount = 3,
  expandText = "Show All Features",
  collapseText = "Show Less",
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const hasMoreItems = children.length > initialCount

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsExpanded(!isExpanded)
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className={className}>
      {/* Always Visible Items */}
      <div className="grid-3">
        {children.slice(0, initialCount).map((child, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            {child}
          </motion.div>
        ))}
      </div>

      {/* Expandable Items */}
      <AnimatePresence mode="wait">
        {isExpanded && hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: {
                height: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.4, delay: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.4, delay: 0.2, ease: "easeIn" }
              }
            }}
            className="overflow-hidden"
          >
            <div className="grid-3 mt-lg">
              {children.slice(initialCount).map((child, index) => (
                <motion.div
                  key={index + initialCount}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1 + 0.3
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20,
                    transition: {
                      duration: 0.3,
                      delay: (children.slice(initialCount).length - index - 1) * 0.05
                    }
                  }}
                  className="w-full"
                >
                  {child}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Button */}
      {hasMoreItems && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-xl"
        >
          <motion.button
            onClick={handleToggle}
            disabled={isAnimating}
            className="btn btn-secondary btn-lg group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-sm"
            >
              {isExpanded ? (
                <>
                  <ChevronDown className="w-5 h-5" />
                  <span>{collapseText}</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>{expandText}</span>
                  <span className="ml-sm px-sm py-xs bg-green-400/20 text-green-400 rounded-full text-xs font-semibold">
                    +{children.length - initialCount}
                  </span>
                </>
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default ProgressiveDisclosure
