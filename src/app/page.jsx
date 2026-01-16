import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Difference } from '@/components/sections/Difference'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { SocialProofMini } from '@/components/sections/SocialProofMini'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

/**
 * Homepage - Streamlined Sales Funnel
 * Goal: Convert visitors to schedule call or download checklist
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Difference />
      <HowItWorks />
      <SocialProofMini />
      <FinalCTA />
      <Footer />
    </main>
  )
}
