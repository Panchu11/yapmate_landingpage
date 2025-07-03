import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  TrendingUp,
  Shield,
  Mic,
  Zap,
  Smartphone,
  Edit3
} from 'lucide-react'

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      id: 1,
      question: "Will this actually make me go viral?",
      answer: "Our users average 10x more engagement within 30 days. The AI studies viral patterns from top crypto influencers to craft replies that get massive likes and retweets. Results vary, but most users see their first viral reply within 24 hours.",
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500',
      emoji: '🚀',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 2,
      question: "Is this safe for my Twitter account?",
      answer: "100% safe. YapMate works locally in your browser, never stores your data, and all replies look completely natural. Twitter can't detect it's AI-generated because it mimics human conversation patterns.",
      icon: Shield,
      color: 'from-blue-400 to-cyan-500',
      emoji: '🔐',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 3,
      question: "Can I sound like myself, not a robot?",
      answer: "Absolutely! Choose from 10+ personality modes or train a custom voice. Sound like a crypto expert, witty commentator, or market analyst - always authentically you. The AI learns your style over time.",
      icon: Mic,
      color: 'from-purple-400 to-pink-500',
      emoji: '🎭',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 4,
      question: "How many replies can I generate per day?",
      answer: "This depends on your plan. Free users get 10 replies per day, Pro users get 100, and Enterprise users have unlimited access. All plans include our core AI features.",
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      emoji: '⚡',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      id: 5,
      question: "Does YapMate work on mobile devices?",
      answer: "Currently, YapMate is available as a Chrome extension for desktop use. Mobile app support is coming in Q4 2024 as part of our platform expansion.",
      icon: Smartphone,
      color: 'from-indigo-400 to-purple-500',
      emoji: '📱',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    },
    {
      id: 6,
      question: "Can I edit generated replies before posting?",
      answer: "Yes! YapMate generates suggestions that you can copy, regenerate for alternatives, or use as inspiration. You're always in control - edit, customize, or post instantly.",
      icon: Edit3,
      color: 'from-red-400 to-rose-500',
      emoji: '✏️',
      bgGradient: 'from-red-500/10 to-rose-500/10'
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const FAQCard = ({ faq, index }: { faq: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-green-400/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10">
        {/* Simple Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-8 h-8 bg-gradient-to-br ${faq.color} rounded-lg flex items-center justify-center`}>
            <faq.icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg">{faq.emoji}</span>
          <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full font-medium">
            Q{faq.id}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Question Button */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left bg-transparent border-none cursor-pointer group/btn"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-bold text-white leading-tight group-hover/btn:text-green-400 transition-colors duration-300 pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover/btn:text-green-400 transition-colors duration-300" />
              </motion.div>
            </div>
          </button>

          {/* Answer */}
          <AnimatePresence>
            {openItems.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 pt-4 mt-3">
                  <p className="text-gray-400 leading-relaxed text-sm text-left">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
    <section id="faq" className="section-compact">
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
              Got <span className="text-gradient">Questions?</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">Everything you need to know about becoming a crypto Twitter legend with YapMate.</span>
          </motion.p>
        </div>

        {/* FAQ Grid - 3 Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid-3 gap-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <FAQCard key={faq.id} faq={faq} index={index} />
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid-3 gap-6 mt-8">
            {faqs.slice(3).map((faq, index) => (
              <FAQCard key={faq.id} faq={faq} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
