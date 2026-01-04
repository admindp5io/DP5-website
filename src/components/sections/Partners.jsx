'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'

/**
 * Partners Section
 * Simple centered text explaining who DP5 partners with
 */
export function Partners() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} className="section-padding bg-bg-secondary">
      <Container size="sm">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-8"
            variants={lineVariants}
          >
            Who We Partner With
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-text-secondary leading-relaxed"
            variants={lineVariants}
          >
            Built for ambitious companies ready to move fast.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed pt-4"
            variants={lineVariants}
          >
            DP5 works best with organizations that have genuine market potential
            they haven&apos;t fully captured. Companies that want execution
            partners, not advisors. Teams ready to make data-driven decisions
            quickly. Leaders who value transparency and shared success over
            traditional consulting theater.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
            variants={lineVariants}
          >
            We start with emerging companies and scale-ups, but our model works
            for any organization serious about sustainable growth.
          </motion.p>

          <motion.div
            className="pt-8 space-y-4"
            variants={lineVariants}
          >
            <p className="text-xl text-text-primary font-medium">
              If you&apos;re growing but not fast enough, we can help.
            </p>
            <p className="text-xl text-text-primary font-medium">
              If you&apos;re stuck despite having a strong product, we can help.
            </p>
            <p className="text-xl text-text-primary font-medium">
              If you need someone to actually execute, not just advise, we can
              help.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
