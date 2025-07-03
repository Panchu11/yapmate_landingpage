import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Accessibility, 
  X, 
  Eye, 
  Type, 
  Pause, 
  Volume2,
  Settings,
  SkipForward
} from 'lucide-react'
import { useAccessibility, useAriaLiveRegion } from '../../hooks/useAccessibility'

const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { preferences, togglePreference, skipToContent } = useAccessibility()
  const { announce } = useAriaLiveRegion()

  const handleToggle = (key: keyof typeof preferences, label: string) => {
    togglePreference(key)
    const newState = !preferences[key]
    announce(`${label} ${newState ? 'enabled' : 'disabled'}`)
  }

  const accessibilityOptions = [
    {
      key: 'highContrast' as const,
      label: 'High Contrast',
      description: 'Increase color contrast for better visibility',
      icon: Eye,
      enabled: preferences.highContrast
    },
    {
      key: 'largeText' as const,
      label: 'Large Text',
      description: 'Increase text size for better readability',
      icon: Type,
      enabled: preferences.largeText
    },
    {
      key: 'reducedMotion' as const,
      label: 'Reduce Motion',
      description: 'Minimize animations and transitions',
      icon: Pause,
      enabled: preferences.reducedMotion
    }
  ]

  return (
    <>
      {/* Skip to Content Link */}
      <button
        className="skip-link"
        onClick={skipToContent}
        onFocus={() => announce('Skip to main content link focused')}
      >
        Skip to main content
      </button>

      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          announce(isOpen ? 'Accessibility menu closed' : 'Accessibility menu opened')
        }}
        className="fixed top-4 left-4 z-50 w-12 h-12 bg-dark-800 border border-neon-green/30 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close accessibility menu' : 'Open accessibility menu'}
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <Accessibility className="w-6 h-6 text-neon-green" />
      </motion.button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-menu"
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-4 left-20 z-50 w-80 bg-dark-800/95 backdrop-blur-xl border border-neon-green/30 rounded-xl overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-neon-green" />
                <h2 id="accessibility-title" className="text-lg font-bold text-white">
                  Accessibility
                </h2>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  announce('Accessibility menu closed')
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green rounded"
                aria-label="Close accessibility menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <p id="accessibility-description" className="text-gray-400 text-sm">
                Customize your experience with these accessibility options
              </p>

              {/* Quick Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    skipToContent()
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center space-x-3 p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green"
                  aria-describedby="skip-description"
                >
                  <SkipForward className="w-5 h-5 text-neon-green" />
                  <div className="text-left">
                    <div className="text-white font-medium">Skip to Content</div>
                    <div id="skip-description" className="text-gray-400 text-xs">
                      Jump directly to main content
                    </div>
                  </div>
                </button>
              </div>

              {/* Accessibility Options */}
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm">Display Options</h3>
                {accessibilityOptions.map((option) => (
                  <div
                    key={option.key}
                    className="flex items-center justify-between p-3 bg-dark-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <option.icon className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          {option.label}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {option.description}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleToggle(option.key, option.label)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green ${
                        option.enabled ? 'bg-neon-green' : 'bg-gray-600'
                      }`}
                      aria-label={`${option.enabled ? 'Disable' : 'Enable'} ${option.label}`}
                      aria-pressed={option.enabled}
                      role="switch"
                    >
                      <motion.div
                        className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-lg"
                        animate={{ x: option.enabled ? 24 : 2 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Screen Reader Info */}
              {preferences.screenReader && (
                <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Volume2 className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium text-sm">
                      Screen Reader Detected
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Enhanced screen reader support is active. All interactive elements 
                    include proper ARIA labels and descriptions.
                  </p>
                </div>
              )}

              {/* Keyboard Shortcuts */}
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm">Keyboard Shortcuts</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-gray-400">
                    <span>Tab</span>
                    <span>Navigate forward</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shift + Tab</span>
                    <span>Navigate backward</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Enter / Space</span>
                    <span>Activate button</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Escape</span>
                    <span>Close dialogs</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityToolbar
