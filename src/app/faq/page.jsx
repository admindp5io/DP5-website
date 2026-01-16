'use client'

import { FAQ } from '@/components/sections/FAQ'
import { Services } from '@/components/sections/Services'
import { Intelligence } from '@/components/sections/Intelligence'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/**
 * FAQ Page
 * Common questions, resources, and detailed service information
 */
export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center gradient-mesh">
        <Container className="relative z-10 text-center">
          <h1 className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-semibold text-gradient mb-6">
            Common Questions
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">
            Everything you need to know about partnering with DP5
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.location.href = '/checklist'
            }}
          >
            Take Free Assessment
          </Button>
        </Container>
      </section>

      {/* FAQ section */}
      <FAQ />

      {/* Services overview */}
      <Services />

      {/* Intelligence/Resources */}
      <Intelligence />

      {/* Resources section */}
      <section className="section-padding bg-bg-primary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-12 text-center">
              Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Growth Assessment */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Growth Readiness Assessment
                </h3>
                <p className="text-text-secondary mb-6">
                  A free interactive self-assessment to identify growth bottlenecks and
                  opportunities in your current strategy.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    window.location.href = '/checklist'
                  }}
                >
                  Start Assessment
                </Button>
              </div>

              {/* Contact for custom questions */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Have a Specific Question?
                </h3>
                <p className="text-text-secondary mb-6">
                  Can't find what you're looking for? Schedule a 30-minute
                  call and we'll answer all your questions.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) {
                      const offset = 80
                      const elementPosition = contactSection.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - offset

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Additional resources placeholder */}
            <div className="mt-12 text-center glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                More Resources Coming Soon
              </h3>
              <p className="text-text-secondary">
                We're building a library of frameworks, playbooks, and growth
                resources. Subscribe to get notified when new content is published.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
