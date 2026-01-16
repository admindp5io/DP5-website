import { CaseStudies } from '@/components/sections/CaseStudies'
import { Success } from '@/components/sections/Success'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'

/**
 * Results Page
 * Case studies, success metrics, and social proof
 */
export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center gradient-mesh">
        <Container className="relative z-10 text-center">
          <h1 className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-semibold text-gradient mb-6">
            Real Growth, Real Numbers
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">
            We measure success by one metric: measurable revenue growth.
            Here's what that looks like in practice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-text-tertiary">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span>Revenue-share aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Transparent attribution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span>Sustainable outcomes</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Results sections */}
      <CaseStudies />
      <Success />

      {/* Testimonials section placeholder */}
      <section className="section-padding bg-bg-secondary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-8">
              What Our Partners Say
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              Testimonials coming soon. Our current partnerships are under NDA,
              but we'll share client feedback as we're authorized to do so.
            </p>
            {/* Placeholder for future testimonials */}
            <div className="glass rounded-2xl p-8">
              <p className="text-text-tertiary italic">
                "We're in active partnerships with multiple B2B companies. Client
                testimonials will be published here as results are validated and
                we receive permission to share."
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

export const metadata = {
  title: 'Results & Case Studies | DP5',
  description: 'See how we have helped B2B companies achieve measurable, sustainable growth through our revenue-share partnership model.',
}
