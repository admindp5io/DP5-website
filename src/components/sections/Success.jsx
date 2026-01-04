'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { GrowthGraph } from '@/components/ui/GrowthGraph'
import { useInView } from '@/hooks/useInView'

/**
 * Success Section
 * Text content + growth graph visualization
 */
export function Success() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section ref={ref} className="section-padding bg-bg-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text content (3 columns on desktop) */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold"
              variants={itemVariants}
            >
              What Success Looks Like
            </motion.h2>

            <motion.p
              className="text-2xl sm:text-3xl font-semibold text-accent"
              variants={itemVariants}
            >
              Measurable. Sustainable. Compound.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              We&apos;re not chasing vanity metrics. We&apos;re building growth
              engines.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              Success means your revenue increases because of specific,
              measurable initiatives we&apos;ve executed together. It means
              you&apos;ve entered new markets with confidence because we
              validated them first. It means your product has features that
              customers actually want because we tested demand before building.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              Success means you have data-driven clarity on what&apos;s working
              and what isn&apos;t. It means you&apos;re making faster, better
              decisions because you have the right intelligence.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-text-primary font-semibold leading-relaxed"
              variants={itemVariants}
            >
              And success means we&apos;ve built systems that continue
              generating growth after our initial engagement ends. We&apos;re
              not creating dependency. We&apos;re creating capability.
            </motion.p>

            <motion.p
              className="text-xl sm:text-2xl font-semibold pt-4"
              variants={itemVariants}
            >
              By the end of the year, you&apos;ll have a portfolio of wins. Real
              results you can point to. Revenue you can measure. Growth you can
              sustain.
            </motion.p>
          </motion.div>

          {/* Right: Growth graph (2 columns on desktop) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <GrowthGraph />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
