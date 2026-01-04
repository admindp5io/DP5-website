import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Difference } from '@/components/sections/Difference'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Framework } from '@/components/sections/Framework'
import { Partners } from '@/components/sections/Partners'
import { Services } from '@/components/sections/Services'
import { Intelligence } from '@/components/sections/Intelligence'
import { Commitment } from '@/components/sections/Commitment'
import { RevenueModel } from '@/components/sections/RevenueModel'
import { WhyMatters } from '@/components/sections/WhyMatters'
import { Success } from '@/components/sections/Success'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Difference />
      <HowItWorks />
      <Framework />
      <Partners />
      <Services />
      <Intelligence />
      <Commitment />
      <RevenueModel />
      <WhyMatters />
      <Success />
      <FinalCTA />
      <Footer />
    </main>
  )
}
