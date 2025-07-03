import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  // Navigation items - Core sections only for clean design
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  // Smooth scroll to section with header offset - Enhanced for lazy loading
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')

    // Close mobile menu first
    setIsMobileMenuOpen(false)

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
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-neon-green transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}


            <motion.button
              className="btn-cyber text-sm px-6 py-2"
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


              </nav>


              <motion.button
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
