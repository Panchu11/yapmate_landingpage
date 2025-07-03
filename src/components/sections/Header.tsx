import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Star, MapPin, HelpCircle, Shield, LogIn, Sparkles, Clock, Rocket } from 'lucide-react'
import Logo from '../ui/Logo'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const dropdownContainer = document.querySelector('.dropdown-container')

      if (dropdownContainer && !dropdownContainer.contains(target)) {
        setIsNavigationOpen(false)
      }
    }

    if (isNavigationOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isNavigationOpen])

  // Core navigation items for main menu
  const coreNavItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' }
  ]

  // Complete navigation items for dropdown
  // Additional sections for dropdown (excluding main nav items)
  const additionalNavItems = [
    {
      name: 'Testimonials',
      href: '#testimonials',
      icon: Star,
      description: 'Beta tester feedback'
    },
    {
      name: 'Roadmap',
      href: '#roadmap',
      icon: MapPin,
      description: 'Future development plans'
    },
    {
      name: 'Trust Signals',
      href: '#trust-signals',
      icon: Shield,
      description: 'Security & performance'
    },
    {
      name: 'FAQ',
      href: '#faq',
      icon: HelpCircle,
      description: 'Common questions'
    }
  ]



  // INSTANT scroll to section - all sections are pre-rendered
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')

    // Close menus first
    setIsMobileMenuOpen(false)
    setIsNavigationOpen(false)

    // Find and scroll to element (should always exist now)
    const element = document.getElementById(sectionId)

    if (element) {
      const headerHeight = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Visual feedback
      element.style.transition = 'box-shadow 0.3s ease'
      element.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)'
      setTimeout(() => {
        element.style.boxShadow = ''
      }, 1000)
    } else {
      // Fallback for edge cases
      console.warn(`Section ${sectionId} not found`)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-2xl border-b border-white/8 shadow-2xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo Section - Enhanced */}
          <motion.button
            onClick={() => {
              if (window.location.pathname !== '/') {
                window.location.href = '/'
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="md" />
            <motion.div
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-green-400/20 rounded-full px-3 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
              <span className="text-xs font-semibold text-green-400 tracking-wide">BETA</span>
            </motion.div>
          </motion.button>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center">
            {/* Core Navigation Container */}
            <nav className="flex items-center space-x-2 mr-6">
              {coreNavItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    scrollToSection(item.href)
                  }}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium px-4 py-2.5 rounded-xl hover:bg-white/8 group"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="navHover"
                  />
                </motion.button>
              ))}
            </nav>

            {/* More Dropdown - Compact & Elegant */}
            <div className="relative dropdown-container">
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsNavigationOpen(!isNavigationOpen)
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-xl border group ${
                  isNavigationOpen
                    ? 'text-green-400 bg-gradient-to-r from-green-400/10 to-blue-500/10 border-green-400/30 shadow-lg shadow-green-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/8 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isNavigationOpen ? 'rotate-180 text-green-400' : 'group-hover:text-green-400'}`} />
              </motion.button>

              {/* Compact Dropdown Menu */}
              <AnimatePresence>
                {isNavigationOpen && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-3 z-[9999] overflow-hidden"
                  >
                    {/* Elegant Header */}
                    <div className="px-4 pb-2 mb-2 border-b border-white/8">
                      <h3 className="text-sm font-semibold text-white">More Sections</h3>
                    </div>

                    {/* Compact Navigation Items */}
                    <div className="space-y-1 px-2">
                      {additionalNavItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            scrollToSection(item.href)
                          }}
                          className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-white transition-all duration-200 py-2.5 px-3 rounded-xl hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-white/5 to-white/10 rounded-lg flex items-center justify-center group-hover:from-green-400/20 group-hover:to-blue-500/20 transition-all duration-200">
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{item.name}</div>
                            <div className="text-xs text-gray-500 truncate">{item.description}</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sign In Button */}
            <motion.button
              onClick={() => setIsSignInModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-green-400/30 text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 group"
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <LogIn className="w-4 h-4 group-hover:text-green-400 transition-colors duration-200" />
              <span className="font-medium">Sign In</span>
            </motion.button>

          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-all duration-200 p-2.5 rounded-xl hover:bg-white/8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/8"
          >
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {/* Core Navigation */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Navigation</h3>
                  {coreNavItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center w-full text-left text-gray-300 hover:text-white transition-all duration-200 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="relative">
                        {item.name}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Additional Sections */}
                <div className="border-t border-white/8 pt-4">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-4">More</h3>
                  {additionalNavItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + coreNavItems.length) * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-white/5 to-white/10 rounded-lg flex items-center justify-center group-hover:from-green-400/20 group-hover:to-blue-500/20 transition-all duration-200">
                        <item.icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Mobile Sign In Button */}
              <motion.button
                onClick={() => setIsSignInModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full mt-6 px-4 py-3 rounded-xl border border-white/10 hover:border-green-400/30 text-gray-300 hover:text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">Sign In</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In Modal */}
      <AnimatePresence>
        {isSignInModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
              onClick={() => setIsSignInModalOpen(false)}
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
              <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsSignInModalOpen(false)}
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
                    <Sparkles className="w-8 h-8 text-green-400" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    Something Amazing is Coming
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 mb-6 leading-relaxed"
                  >
                    YapMate is currently in <span className="text-green-400 font-semibold">exclusive beta</span> with our amazing community.
                    Sign-in functionality will be available when we launch publicly.
                  </motion.p>

                  {/* Features Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 mb-8"
                  >
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>Early access to premium features</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Rocket className="w-4 h-4 text-purple-400" />
                      <span>Priority support & feedback channel</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Sparkles className="w-4 h-4 text-green-400" />
                      <span>Exclusive beta community access</span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => {
                      setIsSignInModalOpen(false)
                      window.open('https://discord.gg/Zk73mBPyYD', '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 px-6 rounded-xl hover:from-green-300 hover:to-blue-400 transition-all duration-200 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Beta Community
                  </motion.button>

                  {/* Footer Note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs text-gray-500 mt-4"
                  >
                    Be the first to know when we launch publicly
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
