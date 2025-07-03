import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, CreditCard, Gavel } from 'lucide-react'

const TermsOfService: React.FC = () => {
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
              <FileText className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Terms of Service</h1>
            </motion.div>
            <p className="text-xl text-gray-300">Your agreement with YapMate</p>
            <p className="text-sm text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Acceptance */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using YapMate's AI-powered Twitter reply generation service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </motion.section>

            {/* Service Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Service Description</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>YapMate provides AI-powered tools for generating Twitter replies and social media content. Our services include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-generated reply suggestions for Twitter posts</li>
                  <li>Customizable tone and voice settings</li>
                  <li>Privacy-first architecture with no account access</li>
                  <li>Enterprise solutions and custom agent development</li>
                  <li>Community access and support</li>
                </ul>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">User Responsibilities</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>As a user of YapMate, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service in compliance with all applicable laws and regulations</li>
                  <li>Not use the service for harassment, spam, or malicious activities</li>
                  <li>Respect intellectual property rights and third-party content</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Not attempt to reverse engineer or exploit the service</li>
                  <li>Review and approve all AI-generated content before posting</li>
                  <li>Take responsibility for all content posted using our service</li>
                </ul>
              </div>
            </motion.section>

            {/* Prohibited Uses */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Prohibited Uses</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>You may not use YapMate for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generating harmful, offensive, or illegal content</li>
                  <li>Impersonating others or creating fake identities</li>
                  <li>Spreading misinformation or false claims</li>
                  <li>Violating Twitter's Terms of Service or community guidelines</li>
                  <li>Automated posting or spam activities</li>
                  <li>Market manipulation or financial fraud</li>
                  <li>Any activity that could harm our service or other users</li>
                </ul>
              </div>
            </motion.section>

            {/* Payment Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Payment and Billing</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Free Trial:</strong> We offer a 7-day free trial for new users</li>
                  <li><strong>Subscription Plans:</strong> Monthly and annual billing options available</li>
                  <li><strong>Payment Processing:</strong> Payments processed securely through third-party providers</li>
                  <li><strong>Refunds:</strong> Refunds available within 30 days of purchase for annual plans</li>
                  <li><strong>Cancellation:</strong> You may cancel your subscription at any time</li>
                  <li><strong>Price Changes:</strong> We reserve the right to modify pricing with 30 days notice</li>
                  <li><strong>Enterprise:</strong> Custom pricing and terms available for enterprise customers</li>
                </ul>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>YapMate IP:</strong> All rights to YapMate's technology, algorithms, and branding remain with us</li>
                  <li><strong>Generated Content:</strong> You retain rights to content generated using our service</li>
                  <li><strong>User Content:</strong> You grant us limited rights to use your content for service improvement</li>
                  <li><strong>Third-Party Content:</strong> Respect all third-party intellectual property rights</li>
                  <li><strong>Feedback:</strong> Any feedback provided to us may be used for service improvement</li>
                </ul>
              </div>
            </motion.section>

            {/* Disclaimers */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">Disclaimers and Limitations</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Availability:</strong> We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
                  <li><strong>AI Accuracy:</strong> AI-generated content may not always be accurate or appropriate</li>
                  <li><strong>User Responsibility:</strong> You are responsible for reviewing and approving all generated content</li>
                  <li><strong>No Warranties:</strong> Service provided "as is" without warranties of any kind</li>
                  <li><strong>Limitation of Liability:</strong> Our liability is limited to the amount paid for the service</li>
                  <li><strong>Third-Party Services:</strong> We are not responsible for third-party service failures</li>
                </ul>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Termination</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>Either party may terminate this agreement:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>User Termination:</strong> You may cancel your account at any time</li>
                  <li><strong>Service Termination:</strong> We may suspend or terminate accounts for violations</li>
                  <li><strong>Data Retention:</strong> Account data will be deleted within 30 days of termination</li>
                  <li><strong>Survival:</strong> Certain provisions will survive termination</li>
                </ul>
              </div>
            </motion.section>

            {/* Governing Law */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Governing Law</h2>
              </div>
              <p className="text-gray-300">
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or the use of our service shall be resolved through binding arbitration.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="text-gray-300">
                <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:hello@agprotocol.xyz" className="text-green-400 hover:text-green-300 transition-colors">hello@agprotocol.xyz</a></p>
                  <p><strong>Subject:</strong> Terms of Service Inquiry</p>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
