import React from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Smile,
  TrendingUp,
  Brain,
  Clipboard,
  Play,
  ArrowRight
} from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Select a Tweet',
      subtitle: 'Open X (Twitter) and pick any tweet you want to engage with',
      description: 'Market news, CT drama, memes, or alpha drops — choose any tweet that catches your attention.',
      icon: Search,
      color: 'from-purple-500 to-blue-500',
      emoji: '🟣',
      bgGradient: 'from-purple-500/10 to-blue-500/10'
    },
    {
      number: 2,
      title: 'Pick Your Tone',
      subtitle: 'Choose from Smart, Degen, Savage, Zen, Technical, or custom voice',
      description: 'Your tone sets the reply\'s energy — from analytical insights to savage comebacks.',
      icon: Smile,
      color: 'from-blue-500 to-cyan-500',
      emoji: '🔵',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      number: 3,
      title: 'Generate with AI',
      subtitle: 'Click once. YapMate instantly crafts your perfect reply',
      description: 'Trained on high-performing CT data — tuned for engagement and speed.',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      emoji: '🟢',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      number: 4,
      title: 'Copy, Regenerate or One-Click Fill',
      subtitle: 'Copy your AI-crafted reply, regenerate for alternatives, or instantly fill the Twitter reply box',
      description: 'You\'re always in control — edit, regenerate, or post instantly.',
      icon: Clipboard,
      color: 'from-yellow-500 to-orange-500',
      emoji: '🟡',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      number: 5,
      title: 'Go Viral',
      subtitle: 'Post. Watch likes, replies, and retweets climb',
      description: 'All while staying on-brand, fast, and smart.',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      emoji: '🔴',
      bgGradient: 'from-red-500/10 to-pink-500/10'
    }
  ]

  const StepCard = ({ step, index }: { step: any, index: number }) => (
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
      <div className={`card card-step group relative overflow-visible bg-gradient-to-br ${step.bgGradient} border border-white/10 hover:border-green-400/30 transition-all duration-500 pt-8 pb-6 px-6`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Step Number Badge - Enhanced */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-base font-bold text-white">{step.number}</span>
        </motion.div>

        {/* Icon - Enhanced Animation */}
        <div className="flex items-center justify-center mb-3">
          <motion.div
            className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
          </motion.div>
        </div>

        {/* Content - Optimized for 3-column */}
        <div className="text-center space-y-3 relative z-10 flex-1 flex flex-col">
          <div className="space-y-2">
            <motion.h3
              className="text-base md:text-lg font-bold text-white leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step {step.number} — {step.title}
            </motion.h3>
            <p className="text-sm md:text-base font-medium text-green-400 leading-tight">
              {step.subtitle}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base px-1 flex-1">
            {step.description}
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
    <section id="how-it-works" className="section-compact">
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
              ⚙️ How <span className="text-gradient">YapMate</span> Works
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">Engage with precision. Go viral in seconds.</span>
          </motion.p>
        </div>

        {/* Steps Grid - 3 Column Layout */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid-3 gap-6 pt-4">
            {steps.slice(0, 3).map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8 pt-4">
            {steps.slice(3).map((step, index) => (
              <StepCard key={step.number} step={step} index={index + 3} />
            ))}
          </div>
        </div>

        {/* CTA Section - Enhanced */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl p-8 md:p-12 border border-green-400/20 backdrop-blur-sm overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 animate-pulse" />

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400/40 rounded-full animate-bounce" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" />

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 255, 136, 0.3)",
                    "0 0 20px rgba(0, 255, 136, 0.5)",
                    "0 0 10px rgba(0, 255, 136, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Want to see it in action?
              </motion.h3>

              <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
                Join our Discord community for <span className="text-green-400 font-semibold">early access</span> and exclusive updates.
              </p>

              <motion.button
                onClick={() => window.open('https://discord.gg/Zk73mBPyYD', '_blank')}
                className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300"
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
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Play className="w-6 h-6" />
                </motion.div>
                Join Discord for Early Access
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
