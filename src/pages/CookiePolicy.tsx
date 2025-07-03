import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Cookie, Settings, BarChart, Shield, Eye, Mail } from 'lucide-react'

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 mb-8"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to YapMate
          </motion.button>

          {/* Title */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Cookie className="w-8 h-8 text-orange-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Cookie Policy</h1>
            </motion.div>
            <p className="text-xl text-gray-300">How we use cookies and similar technologies</p>
            <p className="text-sm text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold">What Are Cookies?</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our service.
                </p>
                <p>
                  YapMate uses cookies and similar technologies to enhance functionality, improve performance, and provide personalized experiences while maintaining our commitment to privacy.
                </p>
              </div>
            </motion.section>

            {/* Types of Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                    <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">Required</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Basic website functionality</li>
                    <li>Load balancing and performance</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    <span className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Page views and user behavior analysis</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Feature usage statistics</li>
                    <li>Error tracking and debugging</li>
                  </ul>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                    <span className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>User preferences and settings</li>
                    <li>Language and region preferences</li>
                    <li>Customized user interface</li>
                    <li>Feature accessibility options</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">How We Use Cookies</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Authentication:</strong> To keep you logged in and secure your session</li>
                  <li><strong>Preferences:</strong> To remember your settings and customizations</li>
                  <li><strong>Performance:</strong> To optimize loading times and user experience</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and improve our service</li>
                  <li><strong>Security:</strong> To detect and prevent fraudulent activities</li>
                  <li><strong>Functionality:</strong> To enable features like dark mode and language preferences</li>
                </ul>
              </div>
            </motion.section>

            {/* Third-Party Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>We may use third-party services that set their own cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Analytics Providers:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>CDN Services:</strong> For content delivery and performance optimization</li>
                  <li><strong>Support Tools:</strong> For customer support and help desk functionality</li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
                </p>
              </div>
            </motion.section>

            {/* Managing Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Managing Your Cookie Preferences</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>You have several options for managing cookies:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                    <p className="text-sm mb-2">You can control cookies through your browser settings:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">YapMate Cookie Settings</h3>
                    <p className="text-sm mb-2">You can manage your cookie preferences for our service:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                      <li>Essential cookies (cannot be disabled)</li>
                      <li>Analytics cookies (can be disabled)</li>
                      <li>Functional cookies (can be disabled)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                    <p className="text-sm text-yellow-200">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our service and your user experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Cookie Retention */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Cookie Retention</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>Different types of cookies are stored for different periods:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Stored for a specific period (typically 1-24 months)</li>
                  <li><strong>Essential Cookies:</strong> Retained as long as necessary for service functionality</li>
                  <li><strong>Analytics Cookies:</strong> Typically retained for 12-24 months</li>
                  <li><strong>Functional Cookies:</strong> Retained based on the specific function (1-12 months)</li>
                </ul>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="text-gray-300">
                <p className="mb-4">If you have any questions about our use of cookies, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:admin@yapmate.xyz" className="text-green-400 hover:text-green-300 transition-colors">admin@yapmate.xyz</a></p>
                  <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CookiePolicy
