import React from 'react'
import { motion } from 'framer-motion'

// Section Components (Lazy loaded for performance)
import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import LazySection from '../components/ui/LazySection'

// Lazy load heavy components
const Features = React.lazy(() => import('../components/sections/Features'))
const HowItWorks = React.lazy(() => import('../components/sections/HowItWorks'))
const Testimonials = React.lazy(() => import('../components/sections/Testimonials'))
const Roadmap = React.lazy(() => import('../components/sections/Roadmap'))
const Pricing = React.lazy(() => import('../components/sections/Pricing'))
const TrustSignals = React.lazy(() => import('../components/sections/TrustSignals'))
const FAQ = React.lazy(() => import('../components/sections/FAQ'))
const CTA = React.lazy(() => import('../components/sections/CTA'))
const Footer = React.lazy(() => import('../components/sections/Footer'))

const HomePage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10" role="main" aria-label="Main content">
        {/* Hero loads immediately */}
        <Hero />

        {/* Other sections load lazily with beautiful dividers */}
        <React.Suspense fallback={
          <div className="section flex items-center justify-center">
            <div className="text-green-400 animate-pulse">Loading...</div>
          </div>
        }>
          <LazySection>
            <Features />
          </LazySection>

          <LazySection>
            <HowItWorks />
          </LazySection>

          <LazySection>
            <Testimonials />
          </LazySection>

          <LazySection>
            <Roadmap />
          </LazySection>

          <LazySection>
            <Pricing />
          </LazySection>

          <LazySection>
            <TrustSignals />
          </LazySection>

          <LazySection>
            <FAQ />
          </LazySection>

          <LazySection>
            <CTA />
          </LazySection>
        </React.Suspense>
      </main>

      {/* Footer */}
      <React.Suspense fallback={<div className="h-32"></div>}>
        <Footer />
      </React.Suspense>
    </>
  )
}

export default HomePage
