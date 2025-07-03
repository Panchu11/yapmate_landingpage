import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, MessageCircle } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neon-green/20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/logo.png"
              alt="YapMate Logo"
              className="w-10 h-10 rounded-lg shadow-lg"
            />
            <span className="text-2xl font-cyber font-bold text-gradient">
              YapMate
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://x.com/Yap_mate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://discord.gg/agprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 YapMate. All rights reserved. Built for the crypto community.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer