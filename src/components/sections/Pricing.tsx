import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  Crown, 
  Rocket, 
  Star, 
  TrendingUp
} from 'lucide-react'
import BetaModal from '../ui/BetaModal'

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Rocket,
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started with crypto Twitter',
      features: [
        '10 AI replies per day',
        'Basic tone styles',
        'Community support',
        'Standard analytics'
      ],
      color: 'from-gray-400 to-gray-600',
      emoji: '🚀',
      bgGradient: 'from-gray-500/10 to-gray-600/10',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Crown,
      price: { monthly: 29, annual: 279 },
      description: 'For serious crypto influencers and traders',
      features: [
        'Unlimited AI replies',
        'All premium tones',
        'Priority support',
        'Advanced analytics',
        'Custom tone training',
        'Reply scheduling',
        'Engagement optimization'
      ],
      color: 'from-green-400 to-blue-500',
      emoji: '👑',
      bgGradient: 'from-green-500/10 to-blue-500/10',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Star,
      price: { monthly: 99, annual: 950 },
      description: 'Custom solutions for teams, agencies, and crypto projects - Taking orders now!',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'White-label solution',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Advanced security'
      ],
      color: 'from-purple-400 to-pink-500',
      emoji: '⭐',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      popular: false
    }
  ]

  const getPrice = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly
    return price === 0 ? 'Free' : `$${price}`
  }

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return null
    const monthlyCost = plan.price.monthly * 12
    const savings = monthlyCost - plan.price.annual
    return Math.round((savings / monthlyCost) * 100)
  }

  const PricingCard = ({ plan, index }: { plan: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className={`relative group ${plan.popular ? 'md:scale-105 md:-mt-4' : ''}`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div 
            className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full text-white font-bold text-sm flex items-center gap-2 shadow-xl"
            animate={{ 
              boxShadow: [
                "0 10px 30px rgba(0, 255, 136, 0.3)",
                "0 15px 40px rgba(0, 255, 136, 0.5)",
                "0 10px 30px rgba(0, 255, 136, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Most Popular</span>
          </motion.div>
        </div>
      )}

      <div className={`card card-step group relative overflow-visible bg-gradient-to-br ${plan.bgGradient} border border-white/10 hover:border-green-400/30 transition-all duration-500 ${plan.popular ? 'border-green-400/30' : ''} pt-8 pb-6 px-6`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Plan Badge */}
        <motion.div
          className={`absolute top-2 left-2 w-12 h-12 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm z-10`}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <plan.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Enterprise Available Badge */}
        {plan.id === 'enterprise' && (
          <motion.div
            className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white/20 z-20"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 4px 20px rgba(168, 85, 247, 0.4)",
                "0 8px 30px rgba(168, 85, 247, 0.6)",
                "0 4px 20px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🚀 Available Now
          </motion.div>
        )}

        {/* Plan Header */}
        <div className="text-center space-y-3 relative z-10 mb-6 mt-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{plan.name}</h3>
          <p className="text-sm text-gray-400 px-2">{plan.description}</p>
          
          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl md:text-5xl font-bold text-white">{getPrice(plan)}</span>
              {plan.price.monthly > 0 && (
                <span className="text-gray-400 text-lg">/{isAnnual ? 'year' : 'month'}</span>
              )}
            </div>
            {isAnnual && getSavings(plan) && (
              <div className="inline-flex items-center gap-1 bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                <TrendingUp className="w-3 h-3" />
                Save {getSavings(plan)}%
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 relative z-10 flex-1">
          {plan.features.map((feature: string, featureIndex: number) => (
            <motion.div 
              key={featureIndex} 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 relative z-10">
          <motion.button
            onClick={() => {
              if (plan.id === 'enterprise') {
                const subject = encodeURIComponent('Enterprise Plan Inquiry - Custom Solutions')
                const body = encodeURIComponent(`Hello YapMate Team,

I'm interested in your Enterprise plan and would like to discuss custom solutions for my organization.

Please contact me to discuss:
- Custom pricing based on our needs
- Specific feature requirements
- Implementation timeline
- Support options

Looking forward to hearing from you.

Best regards`)
                window.open(`mailto:admin@yapmate.xyz?subject=${subject}&body=${body}`, '_self')
              } else {
                setIsPricingModalOpen(true)
              }
            }}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-green-400/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.price.monthly === 0 ? 'Start Free' : plan.id === 'enterprise' ? 'Contact Us' : 'Get Started'}
          </motion.button>
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
    <>
    <section id="pricing" className="section-compact">
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
              Choose Your <span className="text-gradient">Power Level</span>
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-medium">From curious explorer to crypto Twitter legend. Start free and unlock your influence potential.</span>
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className={`text-lg font-semibold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 shadow-lg ${
                isAnnual ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-600'
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center"
                animate={{ x: isAnnual ? 44 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <div className={`w-3 h-3 rounded-full ${isAnnual ? 'bg-green-400' : 'bg-gray-400'}`} />
              </motion.div>
            </motion.button>
            <div className="flex items-center gap-3">
              <span className={`text-lg font-semibold transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
              </span>
              <motion.div
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ scale: isAnnual ? 1 : 0.9, opacity: isAnnual ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                Save 20%
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid-3 gap-8 pt-4">
            {plans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Modal */}
    <BetaModal
      isOpen={isPricingModalOpen}
      onClose={() => setIsPricingModalOpen(false)}
      type="pricing"
    />
    </>
  )
}

export default Pricing
