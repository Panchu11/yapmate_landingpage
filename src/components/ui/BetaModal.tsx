import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Clock, Rocket, Zap, Crown, Users } from 'lucide-react'

interface BetaModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'install' | 'pricing' | 'footer' | 'signin'
}

const BetaModal: React.FC<BetaModalProps> = ({ isOpen, onClose, type }) => {
  const getModalContent = () => {
    switch (type) {
      case 'install':
        return {
          icon: Zap,
          iconColor: 'text-blue-400',
          title: 'Extension Coming Soon',
          description: 'YapMate browser extension is in final development stages. Join our exclusive beta community to be the first to experience the magic!',
          features: [
            { icon: Clock, color: 'text-blue-400', text: 'First access to browser extension' },
            { icon: Rocket, color: 'text-purple-400', text: 'Beta testing privileges' },
            { icon: Sparkles, color: 'text-green-400', text: 'Shape the future of YapMate' }
          ],
          buttonText: 'Join Beta Waitlist',
          footerText: 'Extension launches with public release'
        }
      
      case 'pricing':
        return {
          icon: Crown,
          iconColor: 'text-yellow-400',
          title: 'Premium Plans Launching Soon',
          description: 'Our premium subscription plans are being crafted with exclusive features. Beta testers get special early-bird pricing!',
          features: [
            { icon: Crown, color: 'text-yellow-400', text: 'Early-bird pricing discounts' },
            { icon: Zap, color: 'text-blue-400', text: 'Premium features preview' },
            { icon: Users, color: 'text-green-400', text: 'VIP beta community access' }
          ],
          buttonText: 'Reserve Premium Access',
          footerText: 'Pricing available at public launch'
        }
      
      case 'footer':
        return {
          icon: Rocket,
          iconColor: 'text-purple-400',
          title: 'Ready to Transform Your Replies?',
          description: 'YapMate is revolutionizing how people engage online. Join thousands of beta testers already experiencing the future!',
          features: [
            { icon: Sparkles, color: 'text-green-400', text: 'Exclusive beta community' },
            { icon: Clock, color: 'text-blue-400', text: 'Early access to all features' },
            { icon: Rocket, color: 'text-purple-400', text: 'Direct feedback to developers' }
          ],
          buttonText: 'Start Your Journey',
          footerText: 'Join the YapMate revolution'
        }
      
      default: // signin
        return {
          icon: Sparkles,
          iconColor: 'text-green-400',
          title: 'Something Amazing is Coming',
          description: 'YapMate is currently in exclusive beta with our amazing community. Sign-in functionality will be available when we launch publicly.',
          features: [
            { icon: Clock, color: 'text-blue-400', text: 'Early access to premium features' },
            { icon: Rocket, color: 'text-purple-400', text: 'Priority support & feedback channel' },
            { icon: Sparkles, color: 'text-green-400', text: 'Exclusive beta community access' }
          ],
          buttonText: 'Join Beta Community',
          footerText: 'Be the first to know when we launch publicly'
        }
    }
  }

  const content = getModalContent()
  const IconComponent = content.icon

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6"
                >
                  <IconComponent className={`w-8 h-8 ${content.iconColor}`} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  {content.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {content.description}
                </motion.p>

                {/* Features Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-8"
                >
                  {content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                      <feature.icon className={`w-4 h-4 ${feature.color}`} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    onClose()
                    window.open('https://discord.gg/Zk73mBPyYD', '_blank')
                  }}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 px-6 rounded-xl hover:from-green-300 hover:to-blue-400 transition-all duration-200 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content.buttonText}
                </motion.button>

                {/* Footer Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs text-gray-500 mt-4"
                >
                  {content.footerText}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BetaModal
