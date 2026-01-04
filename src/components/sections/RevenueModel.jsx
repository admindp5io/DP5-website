'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'

/**
 * Revenue Model Section
 * Timeline-style layout explaining how partnerships work
 */
export function RevenueModel() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const modelSections = [
    {
      number: '01',
      title: 'Initial Engagement',
      description:
        'We evaluate your opportunity. If we see genuine growth potential and you want to move forward, we establish the partnership framework.',
    },
    {
      number: '02',
      title: 'Weekly Cycles',
      description:
        'Every week, we present what we plan to work on. You approve it. We execute. We generate invoices for approved work. Complete transparency.',
    },
    {
      number: '03',
      title: 'Revenue Share',
      description:
        'For growth initiatives we propose and execute, we participate in the upside. The exact terms depend on the engagement, but the principle stays the same: we win when you win.',
    },
    {
      number: '04',
      title: 'Exit Strategy',
      description:
        'At any point, you can exit with clear settlement terms. You pay for committed work already in progress. No penalties. No pressure. Clean separation.',
    },
    {
      number: '05',
      title: 'Optional Retainer',
      description:
        'For ongoing market intelligence and strategic guidance, we offer retainer arrangements. Quarterly briefings, trend analysis, competitive monitoring. Keep your edge sharp.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="revenue-model" ref={ref} className="section-padding bg-bg-secondary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The Revenue Model
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How we actually work together.
          </motion.p>
          <motion.p
            className="text-lg text-text-secondary mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Before we start any work, we establish clear terms. Here&apos;s how
            it works in practice.
          </motion.p>
        </div>

        {/* Model sections */}
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {modelSections.map((section, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 group"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg glass flex items-center justify-center">
                  <span className="text-2xl font-mono font-semibold text-accent">
                    {section.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  {section.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          className="text-center text-2xl font-semibold text-text-primary mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          The goal is simple: make the partnership so valuable that you never
          want to leave, but so fair that you always could.
        </motion.p>
      </Container>
    </section>
  )
}
