import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Users, Star, TrendingUp, Heart, Quote } from 'lucide-react'

const Community: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 0,
      name: 'Alex Chen',
      handle: '@CryptoAlexChen',
      avatar: '🚀',
      role: 'Crypto Influencer',
      followers: '125K',
      content: "YapMate has completely transformed my Twitter engagement! My replies now get 10x more likes and retweets. The AI understands crypto culture perfectly. This is a game-changer for anyone serious about building their CT presence.",
      metrics: { engagement: '+300%', followers: '+15K', reach: '2.5M' }
    },
    {
      id: 1,
      name: 'Sarah Martinez',
      handle: '@DeFiSarah',
      avatar: '💎',
      role: 'DeFi Researcher',
      followers: '89K',
      content: "As someone who spends hours crafting the perfect replies, YapMate saves me so much time while actually improving my engagement. The technical analysis tone is spot-on, and my followers love the quality content.",
      metrics: { engagement: '+250%', followers: '+8K', reach: '1.8M' }
    },
    {
      id: 2,
      name: 'Mike Thompson',
      handle: '@BTCMike',
      avatar: '⚡',
      role: 'Bitcoin Maximalist',
      followers: '67K',
      content: "I was skeptical about AI-generated content, but YapMate's replies feel authentic and match my voice perfectly. It's like having a crypto-savvy writing assistant that never sleeps. Absolutely revolutionary!",
      metrics: { engagement: '+400%', followers: '+12K', reach: '3.2M' }
    }
  ]

  const communityStats = [
    { label: 'Active Users', value: '25,000+', icon: Users, color: 'text-neon-green' },
    { label: 'Replies Generated', value: '2.5M+', icon: MessageCircle, color: 'text-neon-blue' },
    { label: 'Avg. Engagement Boost', value: '300%', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'User Satisfaction', value: '4.9/5', icon: Star, color: 'text-yellow-400' }
  ]

  const socialLinks = [
    {
      name: 'Twitter Community',
      handle: '@Yap_mate',
      members: '15K followers',
      description: 'Latest updates, tips, and community highlights',
      icon: Twitter,
      color: 'from-blue-400 to-cyan-500',
      link: 'https://x.com/Yap_mate'
    },
    {
      name: 'Discord Server',
      handle: 'YapMate Official',
      members: '8K members',
      description: 'Real-time chat, support, and exclusive alpha',
      icon: MessageCircle,
      color: 'from-purple-400 to-pink-500',
      link: 'https://discord.gg/agprotocol'
    }
  ]

  return (
    <section id="community" className="py-20 relative overflow-hidden bg-gradient-to-b from-dark-800 to-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient">Join the Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of crypto enthusiasts who are already dominating Twitter with YapMate
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hologram text-center p-6"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Our Community Says
          </h3>

          <div className="max-w-4xl mx-auto">
            {/* Testimonial Display */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card-hologram p-8 mb-8"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center text-2xl">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                    <span className="text-neon-blue">{testimonials[activeTestimonial].handle}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{testimonials[activeTestimonial].followers} followers</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{testimonials[activeTestimonial].role}</p>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-neon-green/30" />
                    <p className="text-gray-300 text-lg leading-relaxed pl-6">
                      {testimonials[activeTestimonial].content}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center space-x-6 mt-6">
                    <div className="text-center">
                      <div className="text-neon-green font-bold">{testimonials[activeTestimonial].metrics.engagement}</div>
                      <div className="text-gray-400 text-xs">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-neon-blue font-bold">{testimonials[activeTestimonial].metrics.followers}</div>
                      <div className="text-gray-400 text-xs">New Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold">{testimonials[activeTestimonial].metrics.reach}</div>
                      <div className="text-gray-400 text-xs">Monthly Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-neon-green' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hologram p-8 group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${social.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                    {social.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">{social.handle}</p>
                  <p className="text-neon-green text-sm font-semibold mb-3">{social.members}</p>
                  <p className="text-gray-300">{social.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Elite?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Become part of the most influential crypto Twitter community. Share strategies,
            get exclusive tips, and dominate the timeline together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="btn-cyber flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Join Discord</span>
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-neon-blue/30 text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
              <span>Follow on Twitter</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community