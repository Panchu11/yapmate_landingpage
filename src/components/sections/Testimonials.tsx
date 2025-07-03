import React from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  TrendingUp,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Chen',
      handle: '@CryptoAlexC',
      avatar: '/avatars/alex.jpg',
      role: 'Crypto Influencer',
      followers: '127K',
      quote: 'Went from 2K to 50K followers in 3 months using YapMate. My replies now get more engagement than most people\'s main tweets.',
      metrics: '2.3M impressions last month',
      verified: true,
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500',
      emoji: '🚀',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      handle: '@DeFiSarah',
      avatar: '/avatars/sarah.jpg',
      role: 'DeFi Analyst',
      followers: '89K',
      quote: 'YapMate helped me sound like a crypto expert from day one. Now VCs slide into my DMs asking for alpha.',
      metrics: '1.8M impressions last month',
      verified: true,
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      emoji: '🧠',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 3,
      name: 'Mike Thompson',
      handle: '@NFTMike',
      avatar: '/avatars/mike.jpg',
      role: 'NFT Trader',
      followers: '156K',
      quote: 'I used to spend hours crafting replies. Now I generate viral content in seconds. Game changer for busy traders.',
      metrics: '3.1M impressions last month',
      verified: true,
      icon: Zap,
      color: 'from-purple-400 to-pink-500',
      emoji: '⚡',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  ]

  const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
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
      <div className={`card card-step group relative overflow-visible bg-gradient-to-br ${testimonial.bgGradient} border border-white/10 hover:border-green-400/30 transition-all duration-500 pt-8 pb-6 px-6 min-h-[420px] flex flex-col`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Testimonial Number Badge */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-base font-bold text-white">{testimonial.id}</span>
        </motion.div>

        {/* Verified Badge */}
        {testimonial.verified && (
          <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        )}

        {/* Icon */}
        <div className="flex items-center justify-center mb-4 mt-6">
          <motion.div
            className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <testimonial.icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
          </motion.div>
        </div>

        {/* User Info */}
        <div className="text-center space-y-2 relative z-10 mb-4">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-base md:text-lg font-bold text-white">{testimonial.name}</h4>
          </div>
          <p className="text-xs md:text-sm text-green-400 font-medium">{testimonial.handle}</p>
          <p className="text-xs text-gray-400">{testimonial.role} • {testimonial.followers} followers</p>
        </div>

        {/* Quote */}
        <div className="text-center space-y-3 relative z-10 flex-1 flex flex-col min-h-[120px]">
          <blockquote className="text-gray-400 leading-relaxed text-xs md:text-sm px-2 flex-1 italic line-clamp-4">
            "{testimonial.quote}"
          </blockquote>

          {/* Metrics */}
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl p-3 border border-green-400/20 mt-auto">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-green-400">{testimonial.metrics}</span>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
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
      </div>
    </motion.div>
  )

  return (
    <section id="testimonials" className="section-compact">
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
              What Crypto Twitter <span className="text-gradient">Legends</span> Say
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">Real results from real influencers who've transformed their Twitter presence with YapMate.</span>
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid-3 gap-6 pt-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-4 border border-green-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">10K+ Users</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 border border-blue-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">500K+ Replies</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">95% Success</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-4 border border-yellow-400/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">4.9/5 Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
