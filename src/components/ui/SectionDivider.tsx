import React from 'react'
import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'particles' | 'wave'
  className?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const renderDivider = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent transform translate-y-4"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform translate-y-8"></div>
          </div>
        )
      
      case 'particles':
        return (
          <div className="relative h-32 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-green rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )
      
      case 'wave':
        return (
          <div className="relative h-32 overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 255, 136, 0.1)" />
                  <stop offset="50%" stopColor="rgba(0, 212, 255, 0.2)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )
      
      default:
        return (
          <div className="relative h-24 flex items-center justify-center">
            <motion.div
              className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-4 h-4 bg-neon-green rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </div>
        )
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {renderDivider()}
    </div>
  )
}

export default SectionDivider
