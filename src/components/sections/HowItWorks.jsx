'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Timeline } from '@/components/ui/Timeline'
import { useInView } from '@/hooks/useInView'

/**
 * How It Works Section
 * Timeline with 4 steps + transparency callout
 */
export function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const steps = [
    {
      title: 'Deep Evaluation',
      description:
        "We assess your product, market fit, and growth potential. If we see it, we move forward. If we don't, we're honest about it.",
    },
    {
      title: 'Strategy & Alignment',
      description:
        'We map out growth opportunities—new features, market expansions, efficiency improvements. Everything gets your approval before we proceed.',
    },
    {
      title: 'Test & Validate',
      description:
        'We build hypotheses, run experiments, and deliver data-driven insights. You make decisions based on real results, not guesswork.',
    },
    {
      title: 'Scale & Optimize',
      description:
        'As growth compounds, we provide ongoing market intelligence, identify new opportunities, and keep you ahead of industry shifts.',
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-bg-secondary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four steps to sustainable growth.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <Timeline steps={steps} />
        </div>

        {/* Transparency callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="max-w-4xl mx-auto text-center relative overflow-hidden">
            {/* Animated pulse border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(0, 102, 255, 0.4)',
                  '0 0 0 10px rgba(0, 102, 255, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            <h3 className="text-3xl font-semibold mb-4">
              Complete transparency.
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every week, you approve our next moves. Every invoice reflects
              work you've greenlit. Exit anytime with clear settlement
              terms. No surprises. No games.
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
