'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { useInView } from '@/hooks/useInView'
import { Target, Zap, Shield } from 'lucide-react'

/**
 * Difference Section - The Three Pillars
 * Three-column grid with glass morphism cards
 */
export function Difference() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const pillars = [
    {
      icon: Target,
      title: 'Market Intelligence',
      description:
        "We don't guess. We research your industry, study competitive landscapes, and identify genuine opportunities others miss.",
    },
    {
      icon: Zap,
      title: 'Full-Cycle Execution',
      description:
        "From hypothesis to experimentation to measurable results. We don't hand you a strategy document and disappear. We execute with you.",
    },
    {
      icon: Shield,
      title: 'Aligned Partnership',
      description:
        'Clear legal frameworks. Transparent weekly invoicing. Flexible engagement terms that scale with your growth. You stay in control while we drive results.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
        {/* Intro text */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The DP5 Difference
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We bet on your growth. Literally.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-text-secondary mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We study your product. We analyze your market. And if we see
            potential—real, measurable potential—we carry the upfront costs
            ourselves. Why? Because we only win when you win.
          </motion.p>
        </div>

        {/* Three Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full group cursor-pointer">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-12 h-12 text-accent mb-6" />
                    </motion.div>
                    <CardTitle className="text-2xl mb-4">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
