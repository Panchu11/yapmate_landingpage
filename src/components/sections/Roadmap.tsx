import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  Brain,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  Circle
} from 'lucide-react'

const Roadmap: React.FC = () => {
  const roadmapPhases = [
    {
      id: 1,
      phase: 'Q2 2025',
      title: 'Foundation & Launch',
      subtitle: 'Core YapMate with AI-powered reply generation',
      description: 'Launch essential features for crypto Twitter engagement.',
      status: 'completed',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500',
      emoji: '🚀',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      progress: 100,
      features: [
        'Chrome Extension Release',
        'AI Reply Generation',
        'Core Tone Selection',
        'Twitter Integration'
      ]
    },
    {
      id: 2,
      phase: 'Q3 2025',
      title: 'AI Evolution & Personalization',
      subtitle: 'Advanced AI that learns your voice and style',
      description: 'Enhanced AI with personalization and viral optimization.',
      status: 'in-progress',
      icon: Brain,
      color: 'from-blue-400 to-cyan-500',
      emoji: '🧠',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      progress: 75,
      features: [
        'Agent Evolution System',
        'Custom Voice Training',
        'Context-Aware Responses',
        'Viral Optimization Engine'
      ]
    },
    {
      id: 3,
      phase: 'Q3 2025',
      title: 'Automation & Community',
      subtitle: 'Scale your engagement with smart automation',
      description: 'Advanced automation tools and community features for scaling engagement.',
      status: 'upcoming',
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      emoji: '👥',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      progress: 25,
      features: [
        'Reply Automation',
        'Community Access',
        'Influencer Collaboration',
        'Team Workspaces'
      ]
    },
    {
      id: 4,
      phase: 'Q3-Q4 2025',
      title: 'Platform Expansion',
      subtitle: 'Beyond Twitter - multi-platform domination',
      description: 'Multi-platform expansion beyond Twitter.',
      status: 'planned',
      icon: Globe,
      color: 'from-yellow-400 to-orange-500',
      emoji: '🌐',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      progress: 0,
      features: [
        'Discord Integration',
        'Telegram Integration',
        'API Access',
        'Multi-platform Support'
      ]
    },
    {
      id: 5,
      phase: 'Available Now',
      title: 'Enterprise & Custom Agents',
      subtitle: 'Available now - Custom solutions for your business',
      description: 'Enterprise solutions and custom agents - Taking orders!',
      status: 'available',
      icon: TrendingUp,
      color: 'from-red-400 to-rose-500',
      emoji: '🏢',
      bgGradient: 'from-red-500/10 to-rose-500/10',
      progress: 100,
      features: [
        'Custom YapMate Agents',
        'Enterprise Dashboard',
        'White-label Solutions',
        'Advanced Security'
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-400" />
      case 'available':
        return <CheckCircle className="w-4 h-4 text-purple-400" />
      default:
        return <Circle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/20 text-green-400 border-green-400/30'
      case 'in-progress':
        return 'bg-blue-400/20 text-blue-400 border-blue-400/30'
      case 'available':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/30'
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/30'
    }
  }

  const RoadmapCard = ({ phase, index }: { phase: any, index: number }) => (
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
      <div className={`card card-step group relative overflow-visible bg-gradient-to-br ${phase.bgGradient} border border-white/10 hover:border-green-400/30 transition-all duration-500 pt-8 pb-6 px-6 min-h-[420px] flex flex-col`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Phase Badge */}
        <motion.div
          className={`absolute top-2 left-2 ${phase.phase.includes('Available Now') ? 'w-20 h-8 rounded-xl px-2' : phase.phase.includes('Q3-Q4') ? 'w-16 h-8 rounded-xl px-1' : 'w-12 h-8 rounded-lg'} bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10`}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className={`${phase.phase.includes('Available Now') ? 'text-xs' : 'text-xs'} font-bold text-white text-center leading-tight`}>{phase.phase.replace(' 2025', '')}</span>
        </motion.div>

        {/* Status Badge */}
        <div className={`absolute top-2 right-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(phase.status)} z-10`}>
          {getStatusIcon(phase.status)}
          {phase.status === 'in-progress' ? 'In Progress' : phase.status === 'completed' ? 'Completed' : phase.status === 'available' ? 'Available Now' : 'Planned'}
        </div>



        {/* Icon */}
        <div className="flex items-center justify-center mb-4 mt-2">
          <motion.div
            className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <phase.icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3 relative z-10 flex-1 flex flex-col min-h-[200px]">
          <div className="space-y-1">
            <p className="text-xs font-bold text-green-400">{phase.phase}</p>
            <motion.h3
              className="text-base md:text-lg font-bold text-white leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {phase.title}
            </motion.h3>
            <p className="text-xs md:text-sm font-medium text-green-400 leading-tight">
              {phase.subtitle}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-xs md:text-sm px-1 line-clamp-3">
            {phase.description}
          </p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Progress</span>
              <span className="text-xs font-bold text-white">{phase.progress}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-1.5">
              <motion.div
                className={`h-1.5 rounded-full bg-gradient-to-r ${phase.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${phase.progress}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-1.5 pt-2">
            {phase.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2 text-left"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span className="text-xs text-gray-300">{feature}</span>
              </motion.div>
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
      </div>
    </motion.div>
  )

  return (
    <section id="roadmap" className="section-compact">
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
              Development <span className="text-gradient">Roadmap</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">Our journey to revolutionize crypto Twitter engagement through innovative AI technology.</span>
          </motion.p>
        </div>

        {/* Roadmap Grid - 3 Column Layout */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid-3 gap-6 pt-4">
            {roadmapPhases.slice(0, 3).map((phase, index) => (
              <RoadmapCard key={phase.id} phase={phase} index={index} />
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8 pt-4">
            {roadmapPhases.slice(3).map((phase, index) => (
              <RoadmapCard key={phase.id} phase={phase} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap