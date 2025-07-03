import React from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Zap,
  Users,
  Sparkles,
  Mic,
  Lock,
  TrendingUp,
  Bot,
  Calendar,
  Code,
  Settings
} from 'lucide-react'

const Features: React.FC = () => {
  const currentFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Replies',
      subtitle: 'Replies That Actually Get Engagement',
      description: 'Generate context-aware, crypto-fluent replies in seconds — trained on viral CT data.',
      color: 'from-green-400 to-blue-500',
      stats: ['95% engagement boost', '10x higher average reply visibility'],
      emoji: '🧠'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      subtitle: 'Under 1 Seconds. Always On-Time.',
      description: 'Never miss the window. YapMate loads replies before the timeline moves on.',
      color: 'from-blue-500 to-purple-500',
      stats: ['<1s generation time', 'Works on any tweet, any context'],
      emoji: '⚡'
    },
    {
      icon: Mic,
      title: 'Brand Voice Matching',
      subtitle: 'Your Voice, Perfected by AI',
      description: 'Choose your tone: Expert, Funny, Degen, Savage, or create custom personas.',
      color: 'from-purple-500 to-green-400',
      stats: ['10+ tones', 'Custom voice training coming soon'],
      emoji: '🎙️'
    },
    {
      icon: Lock,
      title: 'Privacy-First Architecture',
      subtitle: 'No Tracking. No Leaks. Ever.',
      description: 'All replies generated locally or through encrypted, non-custodial channels.',
      color: 'from-green-400 to-purple-500',
      stats: ['100% data privacy', 'No account access or scraping'],
      emoji: '🔐'
    },
    {
      icon: TrendingUp,
      title: 'Viral Optimization Engine',
      subtitle: 'Trained on Virality. Tuned for Reach.',
      description: 'Learn from the most liked CT replies. Every output optimized to perform.',
      color: 'from-blue-400 to-green-500',
      stats: ['500K+ viral replies generated', 'CT-native meme + tone injection'],
      emoji: '🚀'
    },
    {
      icon: Users,
      title: 'Community Access',
      subtitle: 'Built With Influencers. Used by Thousands.',
      description: 'Access invite-only Discord of CT strategists, early testers, and alpha drops.',
      color: 'from-purple-400 to-blue-500',
      stats: ['500+ members', 'Direct line to core team'],
      emoji: '🌐'
    },
    {
      icon: Settings,
      title: 'Custom YapMate Agents',
      subtitle: 'Available Now - For Projects & Brands',
      description: 'Custom YapMate tuned for your tone, project, or campaign. Built just for you.',
      color: 'from-pink-400 to-orange-500',
      stats: ['Voice cloning', 'Project-based prompts', 'White-label ready'],
      emoji: '🛠️',
      badge: 'Enterprise Available'
    }
  ]

  const comingSoonFeatures = [
    {
      icon: Bot,
      title: 'Agent Evolution',
      subtitle: 'Learns From You. Improves With You.',
      description: 'Adapts to your reply history, tone, and interaction style — becoming your AI voice twin.',
      color: 'from-cyan-400 to-purple-500',
      stats: ['Learns from past replies', 'Adapts to your audience'],
      emoji: '🧬'
    },
    {
      icon: Calendar,
      title: 'Reply Automation',
      subtitle: 'Auto-Trigger Replies. Engage at Scale.',
      description: 'Set up schedules or keyword triggers for trending hashtags and project posts.',
      color: 'from-orange-400 to-red-500',
      stats: ['Custom triggers', 'One-click autopilot mode'],
      emoji: '🤖'
    },
    {
      icon: Code,
      title: 'API Access',
      subtitle: 'Plug YapMate Into Anything.',
      description: 'Integrate reply engine into dashboards, team workflows, or CT command centers.',
      color: 'from-indigo-400 to-cyan-500',
      stats: ['Secure API endpoints', 'Token-gated access'],
      emoji: '🧰',
      badge: 'Pro & Enterprise Only'
    }
  ]

  const FeatureCard = ({ feature, index, isComingSoon = false }: { feature: any, index: number, isComingSoon?: boolean }) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className={`card card-step group relative overflow-visible bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-green-400/30 transition-all duration-500 ${isComingSoon ? 'opacity-90 coming-soon' : ''} pt-8 pb-6 px-6`}
      style={{ height: 'auto' }}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Feature Number Badge */}
      <motion.div
        className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-base font-bold text-white">{index + 1}</span>
      </motion.div>

      {/* Coming Soon Badge */}
      {isComingSoon && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-medium z-20 shadow-lg">
          Coming Soon
        </div>
      )}

      {/* Pro Badge */}
      {feature.badge && !isComingSoon && (
        <div className={`absolute top-2 right-2 text-white text-xs px-2.5 py-1 rounded-full font-medium z-15 shadow-lg ${
          feature.badge === 'Enterprise Available'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
            : 'bg-gradient-to-r from-yellow-500 to-orange-500'
        }`}>
          {feature.badge}
        </div>
      )}

      {/* Pro Badge for Coming Soon Features - positioned differently to avoid overlap */}
      {feature.badge && isComingSoon && (
        <div className={`absolute top-2 left-16 text-white text-xs px-2.5 py-1 rounded-full font-medium z-15 shadow-lg ${
          feature.badge === 'Enterprise Available'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
            : 'bg-gradient-to-r from-yellow-500 to-orange-500'
        }`}>
          {feature.badge}
        </div>
      )}

      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <motion.div
          className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="text-center space-y-2 flex-1 flex flex-col">
        <div className="space-y-1">
          <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
            {feature.title}
          </h3>
          <p className="text-xs md:text-sm font-medium text-green-400 leading-tight">
            {feature.subtitle}
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed text-xs md:text-sm flex-1 px-1">
          {feature.description}
        </p>

        {/* Stats - Improved Layout */}
        <div className="flex flex-wrap gap-1 justify-center pt-3 mt-auto">
          {feature.stats.map((stat: string, statIndex: number) => (
            <div key={statIndex} className="inline-flex items-center gap-1.5 bg-white/5 rounded-full px-2.5 py-1 border border-white/10">
              <Sparkles className="w-2.5 h-2.5 text-green-400 flex-shrink-0" />
              <span className="text-xs text-green-400 font-medium whitespace-nowrap">{stat}</span>
            </div>
          ))}
        </div>
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
    </motion.div>
  )

  return (
    <section id="features" className="section-compact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Everything You Need to <span className="text-gradient">Win Crypto Twitter</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-secondary text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            YapMate isn't just an AI reply tool — it's your edge in the conversation layer of web3.
            <br />
            <span className="text-white font-medium">Fast, smart, on-brand replies that earn trust, likes, and followers.</span>
          </motion.p>
        </div>

        {/* Current Features */}
        <div className="mb-16 md:mb-20">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 border border-green-400/30 rounded-2xl px-6 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg md:text-xl font-bold text-white">Available Now</span>
              <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
            </motion.div>
          </motion.div>
          {/* First two rows - 3 cards each */}
          <div className="grid-3 max-w-6xl mx-auto gap-6 mb-8 px-4 pt-4">
            {currentFeatures.slice(0, 6).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          {/* Third row - Single card centered */}
          {currentFeatures.length > 6 && (
            <div className="grid grid-cols-1 max-w-md mx-auto gap-6 px-4 pt-4">
              {currentFeatures.slice(6).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index + 6} />
              ))}
            </div>
          )}
        </div>

        {/* Coming Soon Features */}
        <div>
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 border border-purple-400/30 rounded-2xl px-6 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg md:text-xl font-bold text-white">Coming Soon</span>
              <div className="w-2 h-2 bg-purple-400/60 rounded-full"></div>
            </motion.div>
          </motion.div>
          <div className="grid-3 max-w-6xl mx-auto gap-6 px-4 pt-4">
            {comingSoonFeatures.slice(0, 3).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} isComingSoon={true} />
            ))}
          </div>

          {/* Second Row - Remaining Feature Centered */}
          {comingSoonFeatures.length > 3 && (
            <div className="grid grid-cols-1 max-w-md mx-auto mt-8 gap-6">
              {comingSoonFeatures.slice(3).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index + 3} isComingSoon={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Features