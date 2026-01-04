'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { RadarAnimation } from '@/components/ui/RadarAnimation'
import { useInView } from '@/hooks/useInView'

/**
 * Intelligence Section
 * Two-column layout with radar visualization
 */
export function Intelligence() {
  const [ref, inView] = useInView({ threshold: 0.3 })

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold"
              variants={itemVariants}
            >
              Ongoing Intelligence
            </motion.h2>

            <motion.p
              className="text-xl sm:text-2xl text-text-secondary"
              variants={itemVariants}
            >
              Stay ahead with market intelligence.
            </motion.p>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              Markets shift. Competitors adapt. Opportunities emerge and
              disappear.
            </motion.p>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              Our retainer clients receive quarterly market assessments built
              specifically for their product and industry. Distilled insights on
              trends, threats, and opportunities you can actually act on.
            </motion.p>

            <motion.p
              className="text-lg text-text-primary font-medium leading-relaxed"
              variants={itemVariants}
            >
              No generic industry reports. No recycled research. Just
              intelligence tailored to your next move.
            </motion.p>

            <motion.p
              className="text-base text-text-secondary leading-relaxed italic"
              variants={itemVariants}
            >
              Think of it as having a dedicated research team constantly
              scanning the horizon for your growth opportunities.
            </motion.p>
          </motion.div>

          {/* Right: Radar visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="glass rounded-2xl p-8 md:p-12">
              <RadarAnimation />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
