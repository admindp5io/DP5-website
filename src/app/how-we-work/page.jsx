import { Framework } from '@/components/sections/Framework'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { RevenueModel } from '@/components/sections/RevenueModel'
import { Commitment } from '@/components/sections/Commitment'
import { WhyMatters } from '@/components/sections/WhyMatters'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'

/**
 * How We Work Page
 * Deep dive into process, methodology, and partnership structure
 */
export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center gradient-mesh">
        <Container className="relative z-10 text-center">
          <h1 className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-semibold text-gradient mb-6">
            How We Partner With You
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto">
            A proven methodology, transparent process, and aligned incentives.
            Here's exactly how we work together to drive sustainable growth.
          </p>
        </Container>
      </section>

      {/* Process sections */}
      <HowItWorks />
      <Framework />
      <RevenueModel />
      <Commitment />
      <WhyMatters />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'How We Work | DP5',
  description: 'Learn about our proven growth methodology, weekly execution process, and revenue-share partnership model.',
}
