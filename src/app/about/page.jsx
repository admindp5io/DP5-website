import { Team } from '@/components/sections/Team'
import { Partners } from '@/components/sections/Partners'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'

/**
 * About Page
 * Team, mission, story, and partners
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center gradient-mesh">
        <Container className="relative z-10 text-center">
          <h1 className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-semibold text-gradient mb-6">
            Who We Are
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto">
            We're not consultants who've never built anything.
            We're former founders, operators, and technical leaders who've
            scaled companies ourselves.
          </p>
        </Container>
      </section>

      {/* Mission/Story section */}
      <section className="section-padding bg-bg-primary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-8 text-center">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                DP5 was founded on a simple observation: most growth consultants
                talk about strategy but rarely execute. They deliver beautiful
                slide decks, charge premium fees, and disappear—leaving companies
                with plans that never become reality.
              </p>
              <p>
                We took a different approach. We only partner with companies where
                we see genuine growth potential. We invest our own time and resources
                upfront. We execute alongside your team. And we only earn when you
                see measurable revenue growth.
              </p>
              <p className="text-xl font-semibold text-text-primary">
                This isn't consulting. It's partnership.
              </p>
              <p>
                Our revenue-share model means we have real skin in the game. If our
                initiatives don't drive growth, we don't get paid. This alignment
                changes everything—it means we're hyper-focused on what actually
                moves the needle, not what looks good in a presentation.
              </p>
              <p>
                We bring deep expertise in market research, product-led growth,
                AI/data products, and strategic execution. But more importantly,
                we bring accountability. Every week, you approve our work. Every
                initiative is measured. Every outcome is transparent.
              </p>
              <p className="text-xl font-semibold text-accent">
                We win when you win. That's the only model that makes sense.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team section */}
      <Team />

      {/* Partners section */}
      <Partners />

      {/* Values/Philosophy section */}
      <section className="section-padding bg-bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-12">
              Our Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  Execution Over Advice
                </h3>
                <p className="text-text-secondary">
                  We don't hand you a strategy document and walk away. We roll
                  up our sleeves and execute with you, week after week, until
                  results are achieved.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  Transparency Always
                </h3>
                <p className="text-text-secondary">
                  You approve our work weekly. You see every metric. You understand
                  attribution. No black boxes, no surprises, no excuses.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  Skin in the Game
                </h3>
                <p className="text-text-secondary">
                  Our revenue-share model means we invest our time and resources
                  upfront. If we don't drive growth, we don't earn. Simple as that.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  Long-Term Thinking
                </h3>
                <p className="text-text-secondary">
                  We're not optimizing for quick wins that damage your brand. We
                  build sustainable growth engines that compound over time.
                </p>
              </div>
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
  title: 'About Us | DP5',
  description: 'Meet the team behind DP5. Former founders and operators who partner with B2B companies to drive sustainable, measurable growth.',
}
