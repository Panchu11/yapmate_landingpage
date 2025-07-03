import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, X, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { usePerformanceMonitor } from '../../hooks/usePerformanceMonitor'

const PerformanceDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { metrics, resources, performanceScore, suggestions, isMonitoring } = usePerformanceMonitor()

  if (!isMonitoring) return null

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    return <AlertTriangle className="w-5 h-5 text-red-400" />
  }

  const formatTime = (time: number) => {
    if (time < 1000) return `${Math.round(time)}ms`
    return `${(time / 1000).toFixed(2)}s`
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes}B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-dark-800 border border-neon-green/30 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6 text-neon-green" />
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-4 right-4 z-50 w-96 max-h-[80vh] bg-dark-800/95 backdrop-blur-xl border border-neon-green/30 rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-neon-green" />
                <h3 className="text-lg font-bold text-white">Performance</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Overall Score */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getScoreIcon(performanceScore)}
                  <span className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
                    {Math.round(performanceScore)}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">Overall Performance Score</p>
              </div>

              {/* Core Metrics */}
              <div>
                <h4 className="text-white font-semibold mb-3">Core Web Vitals</h4>
                <div className="space-y-2">
                  {metrics.firstContentfulPaint && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">First Contentful Paint</span>
                      <span className={`text-sm font-medium ${
                        metrics.firstContentfulPaint < 1800 ? 'text-green-400' : 
                        metrics.firstContentfulPaint < 3000 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {formatTime(metrics.firstContentfulPaint)}
                      </span>
                    </div>
                  )}
                  
                  {metrics.largestContentfulPaint && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Largest Contentful Paint</span>
                      <span className={`text-sm font-medium ${
                        metrics.largestContentfulPaint < 2500 ? 'text-green-400' : 
                        metrics.largestContentfulPaint < 4000 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {formatTime(metrics.largestContentfulPaint)}
                      </span>
                    </div>
                  )}
                  
                  {metrics.cumulativeLayoutShift !== undefined && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Cumulative Layout Shift</span>
                      <span className={`text-sm font-medium ${
                        metrics.cumulativeLayoutShift < 0.1 ? 'text-green-400' : 
                        metrics.cumulativeLayoutShift < 0.25 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {metrics.cumulativeLayoutShift.toFixed(3)}
                      </span>
                    </div>
                  )}
                  
                  {metrics.firstInputDelay && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">First Input Delay</span>
                      <span className={`text-sm font-medium ${
                        metrics.firstInputDelay < 100 ? 'text-green-400' : 
                        metrics.firstInputDelay < 300 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {formatTime(metrics.firstInputDelay)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Resource Analysis */}
              {resources.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Resource Analysis</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {resources.slice(0, 5).map((resource, index) => (
                      <div key={index} className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 truncate flex-1 mr-2">
                          {resource.name}
                        </span>
                        <div className="flex space-x-2">
                          <span className="text-gray-500">{formatSize(resource.size)}</span>
                          <span className={`${
                            resource.duration < 500 ? 'text-green-400' : 
                            resource.duration < 1000 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {formatTime(resource.duration)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {suggestions.slice(0, 3).map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-xs leading-relaxed">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PerformanceDashboard
