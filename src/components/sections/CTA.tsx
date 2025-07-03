import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const CTA: React.FC = () => {
  return (
    <section className="section-compact relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          {/* Compact Landscape CTA Card */}
          <div className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-400/20 hover:border-green-400/40 rounded-3xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden group">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400/40 rounded-full animate-bounce" />
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping" />
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />

            {/* 3-Line Layout */}
            <div className="text-center space-y-6 relative z-10 max-w-4xl mx-auto">
              {/* Line 1: Heading */}
              <motion.h2
                className="text-3xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to <span className="text-gradient">Dominate</span> Crypto Twitter?
              </motion.h2>

              {/* Line 2: Text */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join thousands of crypto influencers using YapMate to build their Twitter empire. Start free today!
              </motion.p>

              {/* Line 3: Button */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => alert('Coming Soon!')}
                  className="inline-flex items-center gap-3 px-10 py-4 text-xl font-semibold rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-6 h-6" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400/30 rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${25 + i * 15}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
