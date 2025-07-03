import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-8 h-8 text-green-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Privacy Policy</h1>
            </motion.div>
            <p className="text-xl text-gray-300">Your privacy is our priority</p>
            <p className="text-sm text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                YapMate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered Twitter reply generation service. By using YapMate, you agree to the collection and use of information in accordance with this policy.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email address (for account creation and communication)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Usage preferences and settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Generated replies and interaction patterns</li>
                    <li>Feature usage statistics</li>
                    <li>Performance metrics and error logs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>IP address and general location data</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Provision:</strong> To provide and maintain our AI reply generation service</li>
                  <li><strong>Personalization:</strong> To customize your experience and improve AI responses</li>
                  <li><strong>Communication:</strong> To send you updates, security alerts, and support messages</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns and improve our service</li>
                  <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraud</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication protocols</li>
                  <li><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
                  <li><strong>Privacy by Design:</strong> Privacy considerations built into our development process</li>
                  <li><strong>No Twitter Access:</strong> We never access your Twitter account or personal data</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our service</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="text-gray-300">
                <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:hello@agprotocol.xyz" className="text-green-400 hover:text-green-300 transition-colors">hello@agprotocol.xyz</a></p>
                  <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
