'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'

/**
 * Problem Section
 * Centered text with line-by-line reveals
 */
export function Problem() {
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
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold"
            variants={lineVariants}
          >
            Growth consultants talk.
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-light text-text-secondary"
            variants={lineVariants}
          >
            You&apos;re still waiting for results.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary pt-8"
            variants={lineVariants}
          >
            You&apos;ve heard it before. Growth strategies. Market positioning.
            Digital transformation roadmaps. Beautiful presentations. Zero
            execution. Zero accountability.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary"
            variants={lineVariants}
          >
            Meanwhile, your product has genuine potential. Your market is ready.
            But nobody&apos;s willing to put skin in the game to prove their
            advice actually works.
          </motion.p>

          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary pt-8 relative inline-block"
            variants={lineVariants}
          >
            That changes here.
            <motion.span
              className="absolute bottom-0 left-0 h-[3px] bg-accent"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
