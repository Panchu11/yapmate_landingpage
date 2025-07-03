import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap, Brain, DollarSign, HelpCircle, Star, MapPin, Shield } from 'lucide-react'
import Logo from '../ui/Logo'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.relative')) {
        setIsNavigationOpen(false)
      }
    }
    if (isNavigationOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isNavigationOpen])

  // Core navigation items for main menu
  const coreNavItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' }
  ]

  // Complete navigation items for dropdown
  const allNavItems = [
    {
      name: 'Features',
      href: '#features',
      icon: Zap,
      description: 'AI-powered reply generation',
      category: 'Product'
    },
    {
      name: 'How it Works',
      href: '#how-it-works',
      icon: Brain,
      description: 'Simple 4-step process',
      category: 'Product'
    },
    {
      name: 'Testimonials',
      href: '#testimonials',
      icon: Star,
      description: 'Beta tester feedback',
      category: 'Social Proof'
    },
    {
      name: 'Roadmap',
      href: '#roadmap',
      icon: MapPin,
      description: 'Future development plans',
      category: 'Product'
    },
    {
      name: 'Pricing',
      href: '#pricing',
      icon: DollarSign,
      description: 'Plans and pricing',
      category: 'Business'
    },
    {
      name: 'Trust Signals',
      href: '#trust-signals',
      icon: Shield,
      description: 'Security and reliability',
      category: 'Social Proof'
    },
    {
      name: 'FAQ',
      href: '#faq',
      icon: HelpCircle,
      description: 'Common questions',
      category: 'Support'
    }
  ]

  // Handle early access button click
  const handleEarlyAccess = () => {
    const message = `🚀 YapMate is currently in Beta!\n\n🎯 Want early access?\n\n💬 Join our Discord community to:\n• Get beta access\n• Connect with other testers\n• Provide feedback\n• Get updates\n\nWould you like to join our Discord now?`

    if (confirm(message)) {
      window.open('https://discord.gg/Zk73mBPyYD', '_blank')
    }
  }

  // Smooth scroll to section with header offset - Enhanced for lazy loading
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')

    // Close menus first
    setIsMobileMenuOpen(false)
    setIsNavigationOpen(false)

    // Function to perform the scroll
    const performScroll = (element: HTMLElement) => {
      const headerHeight = 100 // Account for fixed header height + padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Visual feedback - briefly highlight the section
      element.style.transition = 'box-shadow 0.3s ease'
      element.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)'
      setTimeout(() => {
        element.style.boxShadow = ''
      }, 1000)
    }

    // Try to find the element immediately
    let element = document.getElementById(sectionId)

    if (element) {
      performScroll(element)
    } else {
      // Element not found - might be lazy loaded
      // Wait a bit for lazy loading and try again
      setTimeout(() => {
        element = document.getElementById(sectionId)
        if (element) {
          performScroll(element)
        } else {
          // Still not found - scroll to approximate position based on section order
          const sectionOrder = ['features', 'how-it-works', 'testimonials', 'roadmap', 'pricing', 'faq']
          const sectionIndex = sectionOrder.indexOf(sectionId)

          if (sectionIndex !== -1) {
            // Estimate position based on section index (each section ~800px)
            const estimatedPosition = (sectionIndex + 1) * 800
            window.scrollTo({
              top: estimatedPosition,
              behavior: 'smooth'
            })

            // Try again after scrolling to trigger lazy loading
            setTimeout(() => {
              const finalElement = document.getElementById(sectionId)
              if (finalElement) {
                performScroll(finalElement)
              }
            }, 1000)
          }
        }
      }, 100)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <motion.button
            onClick={() => {
              // Navigate to home and scroll to top
              if (window.location.pathname !== '/') {
                window.location.href = '/'
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="md" />
            <motion.div
              className="hidden sm:flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-400">Beta</span>
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Core Navigation Items */}
            {coreNavItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('Navigation clicked:', item.name)
                  scrollToSection(item.href)
                }}
                className="text-gray-300 hover:text-neon-green transition-colors duration-200 font-medium px-2 py-1"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('More dropdown clicked')
                  setIsNavigationOpen(!isNavigationOpen)
                }}
                className="flex items-center gap-1 text-gray-300 hover:text-neon-green transition-colors duration-200 font-medium px-2 py-1"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isNavigationOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isNavigationOpen && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 mt-3 w-80 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-4 z-50"
                  >
                    {/* Dropdown Header */}
                    <div className="px-4 pb-3 border-b border-white/10">
                      <h3 className="text-sm font-semibold text-white">All Sections</h3>
                      <p className="text-xs text-gray-400 mt-1">Navigate to any section</p>
                    </div>

                    {/* Navigation Items by Category */}
                    <div className="py-2">
                      {['Product', 'Social Proof', 'Business', 'Support'].map((category) => {
                        const categoryItems = allNavItems.filter(item => item.category === category)
                        if (categoryItems.length === 0) return null

                        return (
                          <div key={category} className="mb-3">
                            <div className="px-4 py-1">
                              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">{category}</h4>
                            </div>
                            {categoryItems.map((item, index) => (
                              <motion.button
                                key={item.name}
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  console.log('Dropdown item clicked:', item.name)
                                  scrollToSection(item.href)
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-all duration-200 group"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ x: 4 }}
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-green-400/30 group-hover:to-blue-500/30 transition-all duration-200">
                                  <item.icon className="w-4 h-4 text-green-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors duration-200">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-400 truncate">
                                    {item.description}
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Early Access Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('Early Access clicked')
                handleEarlyAccess()
              }}
              className="btn-cyber text-sm px-6 py-2 ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
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
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="container py-8">
              {/* Mobile Navigation */}
              <nav className="space-y-1 mb-8">
                {/* Core Navigation */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white mb-3 px-4">Main Navigation</h3>
                  {coreNavItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-gray-300 hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* All Sections */}
                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-sm font-semibold text-white mb-3 px-4">All Sections</h3>
                  {allNavItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + coreNavItems.length) * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-3 h-3 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </nav>

              <motion.button
                onClick={handleEarlyAccess}
                className="btn-cyber text-sm px-6 py-2 w-full mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get Early Access
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-80"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Subtle glow effect when scrolled */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.header>
  )
}

export default Header
