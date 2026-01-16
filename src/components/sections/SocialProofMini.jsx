'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { TrendingUp, Target, Users } from 'lucide-react'

/**
 * Social Proof Mini Section
 * Compact trust signals and metrics for homepage
 */
export function SocialProofMini() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  const metrics = [
    {
      icon: TrendingUp,
      value: '$500M+',
      label: 'Revenue Generated',
    },
    {
      icon: Target,
      value: '20+',
      label: 'Companies Scaled',
    },
    {
      icon: Users,
      value: '45+',
      label: 'Years Combined Experience',
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            We've scaled companies from early stage to market leaders
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                className="text-center glass rounded-2xl p-8 group hover:border-accent/50 transition-colors"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base text-text-secondary">
                  {metric.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust badges (placeholder for real logos) */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-text-tertiary mb-8 uppercase tracking-wider">
            Trusted by companies across B2B SaaS, marketplaces, and tech services
          </p>
          {/* Placeholder for client logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {/* Replace these with actual client logos when available */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-success/10 flex items-center justify-center"
              >
                <span className="text-xs text-text-tertiary font-mono">
                  Client Logo
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA to see full results */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="/results"
            className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors group"
          >
            See detailed case studies
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
