'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'

/**
 * Why This Matters Section
 * Bold statements with emphasis on key phrases
 */
export function WhyMatters() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-bg-primary">
      <Container size="sm">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold text-center mb-12"
            variants={lineVariants}
          >
            Why This Matters
          </motion.h2>

          <motion.p
            className="text-2xl sm:text-3xl font-semibold"
            variants={lineVariants}
          >
            Different incentives. Different results.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
            variants={lineVariants}
          >
            Traditional consulting has a fundamental flaw: they get paid whether
            you succeed or not. Advice is easy. Execution is hard. Results are
            rare.
          </motion.p>

          <motion.p
            className="text-xl sm:text-2xl font-semibold text-accent"
            variants={lineVariants}
          >
            We flip that model.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
            variants={lineVariants}
          >
            We do the hard work of understanding your market, building
            hypotheses, running experiments, and proving what works before we
            ask you to scale it. We invest our capital first. We carry the risk
            of being wrong.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
            variants={lineVariants}
          >
            This means we&apos;re ruthlessly focused on what actually drives
            growth, not what sounds impressive in a presentation. We don&apos;t
            have time for theater. We&apos;re betting real money on real
            outcomes.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-bg-secondary to-bg-tertiary p-8 md:p-12 rounded-2xl border border-border"
            variants={lineVariants}
          >
            <p className="text-xl sm:text-2xl font-semibold mb-4">
              When we tell you something will work, we&apos;re putting our own
              resources behind it.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              When we propose a new feature, market expansion, or operational
              change, we&apos;ve already done the research to validate it&apos;s
              worth pursuing.
            </p>
          </motion.div>

          <motion.p
            className="text-2xl sm:text-3xl font-semibold text-center pt-8"
            variants={lineVariants}
          >
            You get a partner who only succeeds when you succeed. We get a
            client who trusts us because our incentives are perfectly aligned.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
