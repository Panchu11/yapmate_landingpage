import React, { useEffect } from 'react'

// Section Components (Pre-rendered for instant loading)
import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import Roadmap from '../components/sections/Roadmap'
import Pricing from '../components/sections/Pricing'
import TrustSignals from '../components/sections/TrustSignals'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Footer from '../components/sections/Footer'
import PreRenderedSection from '../components/ui/PreRenderedSection'
import { preRenderStrategy, ensureContentAvailability } from '../utils/performance'

const HomePage: React.FC = () => {
  // Ensure all content is immediately available
  useEffect(() => {
    // Small delay to let components mount, then ensure availability
    const timer = setTimeout(() => {
      ensureContentAvailability()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10" role="main" aria-label="Main content">
        {/* Hero loads immediately */}
        <Hero />

        {/* All sections pre-rendered with optimized loading strategy */}
        <PreRenderedSection
          delay={preRenderStrategy.getDelay('features')}
          animationDelay={preRenderStrategy.getAnimationDelay('features')}
        >
          <Features />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('how-it-works')}
          animationDelay={preRenderStrategy.getAnimationDelay('how-it-works')}
        >
          <HowItWorks />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('testimonials')}
          animationDelay={preRenderStrategy.getAnimationDelay('testimonials')}
        >
          <Testimonials />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('roadmap')}
          animationDelay={preRenderStrategy.getAnimationDelay('roadmap')}
        >
          <Roadmap />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('pricing')}
          animationDelay={preRenderStrategy.getAnimationDelay('pricing')}
        >
          <Pricing />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('trust-signals')}
          animationDelay={preRenderStrategy.getAnimationDelay('trust-signals')}
        >
          <TrustSignals />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('faq')}
          animationDelay={preRenderStrategy.getAnimationDelay('faq')}
        >
          <FAQ />
        </PreRenderedSection>

        <PreRenderedSection
          delay={preRenderStrategy.getDelay('cta')}
          animationDelay={preRenderStrategy.getAnimationDelay('cta')}
        >
          <CTA />
        </PreRenderedSection>
      </main>

      {/* Footer */}
      <PreRenderedSection
        delay={preRenderStrategy.getDelay('footer')}
        animationDelay={preRenderStrategy.getAnimationDelay('footer')}
      >
        <Footer />
      </PreRenderedSection>
    </>
  )
}

export default HomePage
