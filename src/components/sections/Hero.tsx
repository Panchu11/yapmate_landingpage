import React, { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Download,
  Star,
  Users,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Hero: React.FC = memo(() => {
  const scrollToFeatures = useCallback(() => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleInstallExtension = useCallback(() => {
    // Create a beautiful modal-style alert for beta messaging
    const message = `🚀 YapMate is currently in Beta!\n\n📱 Extension will be available soon on Web Store\n\n💬 Join our Discord community for early access and updates!\n\nWould you like to join our Discord now?`

    if (confirm(message)) {
      // Open Discord in new tab
      window.open('https://discord.gg/Zk73mBPyYD', '_blank')
    }
  }, [])

  return (
    <section className="section-hero relative overflow-hidden pt-32">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid-hero">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Hero Headline - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0, 255, 136, 0.3)",
                    "0 0 30px rgba(0, 255, 136, 0.5)",
                    "0 0 20px rgba(0, 255, 136, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI-Powered Crypto
                <br />
                <span className="text-gradient">Twitter Domination</span>
              </motion.h1>
            </motion.div>

            {/* Value Proposition - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
                ⚡ Generate <span className="text-green-400 font-semibold">viral crypto Twitter replies</span> in seconds.
                <br />
                🧠 Build your influence and become a <span className="text-white font-semibold">crypto Twitter legend</span> with AI-powered responses.
              </p>
            </motion.div>

            {/* Social Proof Metrics - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
                <motion.div
                  className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-4 border border-yellow-400/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">4.9/5</div>
                      <div className="text-xs text-gray-400">User Rating</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-4 border border-green-400/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">10K+</div>
                      <div className="text-xs text-gray-400">Active Users</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 border border-blue-400/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">500K+</div>
                      <div className="text-xs text-gray-400">Viral Replies</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTAs - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleInstallExtension}
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(0, 255, 136, 0.2)",
                    "0 15px 40px rgba(0, 255, 136, 0.4)",
                    "0 10px 30px rgba(0, 255, 136, 0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                Install Extension
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={scrollToFeatures}
                className="btn btn-secondary btn-lg inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white/20 hover:border-green-400/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-6 h-6" />
                See Features
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Trust Signals - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Free 7-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Modern Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Preview Card */}
            <div className="relative w-full max-w-md">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>

              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/logo.png"
                    alt="YapMate Logo"
                    className="w-10 h-10 rounded-lg shadow-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">YapMate AI</h3>
                    <p className="text-sm text-gray-400">Chrome Extension</p>
                  </div>
                </div>

                {/* Preview Content */}
                <div className="space-y-3">
                  {/* Original Tweet */}
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">S</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-white">@solana</span>
                          <span className="text-xs text-blue-400">✓</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Solana's network processed 65M transactions yesterday with 400ms finality.
                          The future of high-performance blockchain is here 🚀 #Solana $SOL
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis Panel */}
                  <div className="bg-gradient-to-r from-green-400/5 to-blue-500/5 rounded-lg p-3 border border-green-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">AI Analysis Complete</span>
                      </div>
                      <span className="text-xs text-gray-400">0.8s</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">Context:</span>
                        <span className="text-blue-400">Solana Performance</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">Sentiment:</span>
                        <span className="text-green-400">Bullish</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">Tone Match:</span>
                        <span className="text-purple-400">Degen</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">Viral Score:</span>
                        <span className="text-yellow-400">94%</span>
                      </div>
                    </div>
                  </div>

                  {/* Generated Reply */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Generated Reply</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-400">🧠 AI-Powered</span>
                        <span className="text-xs text-blue-400">⚡ Instant</span>
                      </div>
                    </div>

                    {/* Optimized Reply */}
                    <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg p-4 border border-green-400/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-green-400/10 to-transparent rounded-bl-full"></div>
                      <div className="absolute top-2 right-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-white leading-relaxed mb-3">
                        This is actually insane @solana 🔥 65M TXs while $ETH is doing 15 TPS with $50 gas fees 💀
                        At this rate $SOL is going to flip everything. The future is already here 🚀 #SolanaGang #SOL
                      </p>

                      {/* Feature Showcase */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="text-green-400">🎙️</span>
                          <span className="text-gray-400">Voice:</span>
                          <span className="text-purple-400">Degen</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-blue-400">🚀</span>
                          <span className="text-gray-400">Viral Score:</span>
                          <span className="text-green-400">96%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-purple-400">🔐</span>
                          <span className="text-gray-400">Privacy:</span>
                          <span className="text-green-400">Secure</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⚡</span>
                          <span className="text-gray-400">Speed:</span>
                          <span className="text-blue-400">0.8s</span>
                        </div>
                      </div>
                    </div>

                    {/* Auto-Fill Preview */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Auto-Fill Detected</span>
                        <span className="text-xs text-blue-400">✨ Smart</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">@solana</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">$SOL</span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">#SolanaGang</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">65M TXs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Panel */}
                <div className="mt-4 space-y-3">
                  {/* Action Buttons - Non-clickable */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 cursor-default">
                      <span>📋</span>
                      Copy Reply
                    </div>
                    <div className="px-4 bg-purple-500/20 text-purple-300 py-3 rounded-lg font-medium text-sm border border-purple-500/30 flex items-center justify-center cursor-default">
                      ↻
                    </div>
                    <div className="px-4 bg-white/10 text-white py-3 rounded-lg font-medium text-sm border border-white/20 flex items-center justify-center cursor-default">
                      ⚙️
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>AI-Powered</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Instant Generation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Brand Voice</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span>Privacy-First</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>


          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: '10K+', label: 'Active Users', icon: Users },
            { number: '500K+', label: 'Replies Generated', icon: MessageCircle },
            { number: '4.9★', label: 'User Rating', icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-green-400 mr-2" />
                <div className="text-3xl font-bold text-gradient">
                  {stat.number}
                </div>
              </div>
              <div className="text-sm text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero