'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { Shield, FileText, Check, RefreshCw } from 'lucide-react'

/**
 * Commitment Section
 * Trust framework with four key points
 */
export function Commitment() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const trustPoints = [
    {
      icon: Shield,
      title: 'Legal Protection',
      description:
        'Agreements protecting both parties. Fair terms. Clear language.',
    },
    {
      icon: FileText,
      title: 'IP Clarity',
      description:
        'Transparent ownership of ideas and execution. No ambiguity.',
    },
    {
      icon: RefreshCw,
      title: 'Exit Provisions',
      description:
        'Clean separation options at every stage. Your choice, always.',
    },
    {
      icon: Check,
      title: 'Weekly Approvals',
      description:
        'You greenlight all work. Complete control over scope and spending.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
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
    <section ref={ref} className="section-padding bg-bg-primary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The model is the proof.
          </motion.p>
        </div>

        {/* Intro text */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Talk is cheap. Revenue-sharing is expensive—for us.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            When we commit to your growth, we&apos;re committing our time,
            expertise, and upfront capital. We only succeed when your revenue
            grows. We don&apos;t get paid for showing up. We get paid for
            results.
          </p>
          <p className="text-xl text-text-primary font-semibold">
            That&apos;s not a sales pitch. That&apos;s alignment.
          </p>
        </motion.div>

        {/* Trust Framework heading */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The Trust Framework
        </motion.h3>

        {/* Trust points grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                className="flex items-start gap-4 group"
                variants={itemVariants}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg glass flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          className="text-center text-2xl font-semibold text-text-primary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We build partnerships, not dependencies.
        </motion.p>
      </Container>
    </section>
  )
}
