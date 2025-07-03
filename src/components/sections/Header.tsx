import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../ui/Logo'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.relative')) {
        setIsResourcesOpen(false)
      }
    }
    if (isResourcesOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isResourcesOpen])

  // Navigation items - Updated to match actual sections
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  // Resources dropdown items
  const resourceItems = [
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Trust Signals', href: '#trust-signals' },
    { name: 'Discord Community', href: 'https://discord.gg/Zk73mBPyYD', external: true }
  ]

  // Smooth scroll to section with header offset - Enhanced for lazy loading
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')

    // Close mobile menu first
    setIsMobileMenuOpen(false)
    setIsResourcesOpen(false)

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
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Navigation button clicked:', item.name, item.href)
                  scrollToSection(item.href)
                }}
                className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/5 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  initial={{ width: 0 }}
                />
              </motion.button>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsResourcesOpen(!isResourcesOpen)
                }}
                className="relative flex items-center gap-1 text-gray-300 hover:text-white transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/5 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  initial={{ width: 0 }}
                />
              </motion.button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 mt-3 w-56 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {resourceItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault()
                          console.log('Resource dropdown clicked:', item.name, item.href)
                          if (item.external) {
                            window.open(item.href, '_blank')
                          } else {
                            scrollToSection(item.href)
                          }
                          setIsResourcesOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg mx-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              onClick={() => {
                // Add sign in functionality here
                console.log('Sign In clicked')
                // Show coming soon message for now
                alert('Sign In functionality coming soon! YapMate is currently in beta.')
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium px-6 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
            <motion.button
              onClick={() => {
                // Scroll to pricing section
                scrollToSection('#pricing')
              }}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
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
              <nav className="space-y-2 mb-8">
                {navItems.map((item, index) => (
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

                {/* Mobile Resources Section */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 font-semibold mb-4 px-4 uppercase tracking-wide">Resources</p>
                  {resourceItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        if (item.external) {
                          window.open(item.href, '_blank')
                        } else {
                          scrollToSection(item.href)
                        }
                      }}
                      className="block w-full text-left text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + index) * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <motion.button
                  onClick={() => {
                    // Add sign in functionality here
                    console.log('Sign In clicked')
                    // You can replace this with actual sign in logic
                    window.open('https://app.yapmate.ai/signin', '_blank')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full text-gray-300 hover:text-white transition-all duration-300 font-medium py-3 px-6 rounded-xl hover:bg-white/5 border border-white/10 hover:border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>
                <motion.button
                  onClick={() => {
                    // Scroll to pricing or open signup
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      console.log('Get Started clicked')
                      alert('Get Started functionality coming soon!')
                    }
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
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
