import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap, Brain, Star, MapPin, DollarSign, HelpCircle, Shield } from 'lucide-react'
import Logo from '../ui/Logo'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

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
    window.open('https://discord.gg/Zk73mBPyYD', '_blank')
  }

  // Smooth scroll to section with header offset
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
      // Element not found - might be lazy loaded, wait and try again
      setTimeout(() => {
        element = document.getElementById(sectionId)
        if (element) {
          performScroll(element)
        } else {
          // If still not found, try scrolling to estimated position
          const sectionOrder = ['features', 'how-it-works', 'testimonials', 'roadmap', 'pricing', 'trust-signals', 'faq']
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
          <div className="hidden md:flex items-center">
            {/* Core Navigation Container */}
            <nav className="flex items-center space-x-6 mr-8">
              {coreNavItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    scrollToSection(item.href)
                  }}
                  className="text-gray-300 hover:text-neon-green transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* More Dropdown - Fixed with proper isolation */}
            <div className="relative dropdown-container">
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsNavigationOpen(!isNavigationOpen)
                }}
                className={`flex items-center gap-1 transition-colors duration-200 font-medium px-3 py-2 rounded-lg border ${
                  isNavigationOpen
                    ? 'text-neon-green bg-white/10 border-green-400/30'
                    : 'text-gray-300 hover:text-neon-green hover:bg-white/5 border-transparent hover:border-white/10'
                }`}
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
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 mt-3 w-80 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-4 z-[9999]"
                    style={{ zIndex: 9999 }}
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
                                  scrollToSection(item.href)
                                }}
                                className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5 mx-2"
                                whileHover={{ x: 4 }}
                              >
                                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                                  <item.icon className="w-3 h-3 text-green-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{item.name}</div>
                                  <div className="text-xs text-gray-500">{item.description}</div>
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

            {/* Early Access Button - No Animations */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleEarlyAccess()
                }}
                className="btn-cyber text-sm px-6 py-2 border border-green-400/20 hover:border-green-400/40 transition-colors duration-200"
              >
                Get Early Access
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                      transition={{ delay: index * 0.05 }}
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

              <button
                onClick={handleEarlyAccess}
                className="btn-cyber text-sm px-6 py-2 w-full mt-6 transition-colors duration-200"
              >
                Get Early Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
