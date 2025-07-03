import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Lock
} from 'lucide-react'

const TrustSignals: React.FC = () => {
  const trustSignals = [
    {
      id: 1,
      icon: Shield,
      title: '100% Safe & Secure',
      subtitle: 'Bank-level encryption, no data storage',
      description: 'Your Twitter account and data are completely safe with our privacy-first architecture.',
      color: 'from-green-400 to-blue-500',
      emoji: '🔒',
      bgGradient: 'from-green-500/10 to-blue-500/10'
    },
    {
      id: 2,
      icon: Award,
      title: '30-Day Money Back',
      subtitle: 'Not satisfied? Get a full refund',
      description: 'We\'re so confident you\'ll love YapMate, we offer a no-questions-asked refund policy.',
      color: 'from-blue-500 to-purple-500',
      emoji: '💰',
      bgGradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
      id: 3,
      icon: Users,
      title: '10,000+ Happy Users',
      subtitle: 'Join the crypto Twitter elite',
      description: 'Thousands of influencers and traders trust YapMate to boost their engagement.',
      color: 'from-purple-500 to-green-400',
      emoji: '👥',
      bgGradient: 'from-purple-500/10 to-green-500/10'
    },
    {
      id: 4,
      icon: Zap,
      title: 'Instant Results',
      subtitle: 'See viral replies within 24 hours',
      description: 'Most users see their first viral reply within the first day of using YapMate.',
      color: 'from-yellow-400 to-orange-500',
      emoji: '⚡',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    }
  ]

  const metrics = [
    { value: '10,000+', label: 'Active Users', icon: Users, color: 'from-green-400 to-emerald-500' },
    { value: '500K+', label: 'Viral Replies', icon: TrendingUp, color: 'from-blue-400 to-cyan-500' },
    { value: '95%', label: 'Success Rate', icon: Award, color: 'from-purple-400 to-pink-500' },
    { value: '4.9/5', label: 'User Rating', icon: Shield, color: 'from-yellow-400 to-orange-500' }
  ]

  const TrustSignalCard = ({ signal, index }: { signal: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`card card-step group relative overflow-visible bg-gradient-to-br ${signal.bgGradient} border border-white/10 hover:border-green-400/30 transition-all duration-500 pt-8 pb-6 px-6`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Signal Number Badge */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-base font-bold text-white">{signal.id}</span>
        </motion.div>

        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <motion.div
            className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${signal.color} rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <signal.icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3 relative z-10 flex-1 flex flex-col">
          <div className="space-y-1">
            <motion.h3
              className="text-base md:text-lg font-bold text-white leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {signal.title}
            </motion.h3>
            <p className="text-xs md:text-sm font-medium text-green-400 leading-tight">
              {signal.subtitle}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-xs md:text-sm px-1 flex-1">
            {signal.description}
          </p>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
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
  )

  return (
    <section id="trust-signals" className="section-compact">
      <div className="container">
        {/* Section Header - Enhanced */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 255, 136, 0.3)",
                  "0 0 30px rgba(0, 255, 136, 0.5)",
                  "0 0 20px rgba(0, 255, 136, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Trusted by <span className="text-gradient">Crypto Twitter</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">Join thousands of successful crypto influencers who trust YapMate with their Twitter growth.</span>
          </motion.p>
        </div>

        {/* Trust Signals Grid */}
        <div className="max-w-6xl mx-auto mb-16 px-4">
          <div className="grid-2 md:grid-cols-4 gap-6 pt-4">
            {trustSignals.map((signal, index) => (
              <TrustSignalCard key={signal.id} signal={signal} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className={`bg-gradient-to-br ${metric.color}/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm text-center`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lock className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-white">SSL Encrypted</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white">GDPR Compliant</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-white">SOC 2 Certified</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSignals
