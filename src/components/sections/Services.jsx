'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { useInView } from '@/hooks/useInView'
import { Plus, X } from 'lucide-react'

/**
 * Services Section
 * Bento grid with expandable service cards
 */
export function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [expandedCard, setExpandedCard] = useState(null)

  const services = [
    {
      id: 'cto',
      title: 'Fractional CTO Services',
      short: 'Technology leadership without full-time overhead.',
      expanded:
        'Strategic architecture decisions. Technical roadmap execution. Team guidance when you need it. Get executive-level technology leadership without the full-time cost. We integrate with your team to make critical technical decisions, mentor developers, and ensure your technology strategy aligns with business goals.',
    },
    {
      id: 'ai',
      title: 'AI & Data Product Management',
      short: 'Turn AI opportunities into revenue.',
      expanded:
        'Build data products that matter. Navigate the hype, capture the value. We help you identify genuine AI opportunities in your business, build practical data products that generate revenue, and cut through the noise to implement solutions that actually work for your use case.',
    },
    {
      id: 'architecture',
      title: 'Architecture & Systems Design',
      short: 'Build infrastructure that supports scale.',
      expanded:
        'Technology decisions that compound, not constrain. We design systems that grow with your business, choosing technologies that provide long-term value. From microservices to monoliths, cloud architecture to databases, we make decisions based on your actual needs, not industry trends.',
    },
    {
      id: 'delivery',
      title: 'Project Delivery',
      short: 'Execute with certified management expertise.',
      expanded:
        'On time. On scope. On point. Certified project management that actually delivers results. We use proven methodologies adapted to your team\'s workflow, ensuring projects ship on schedule with clear communication and measurable outcomes.',
    },
  ]

  const handleToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" ref={ref} className="section-padding bg-bg-primary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Full-Spectrum Services
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything growth requires.
          </motion.p>
          <motion.p
            className="text-lg text-text-secondary mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Growth needs the right foundation. We provide the full spectrum.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const isExpanded = expandedCard === service.id
            const isOtherExpanded = expandedCard && expandedCard !== service.id

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={isOtherExpanded ? 'opacity-50' : 'opacity-100'}
                transition={{ opacity: { duration: 0.3 } }}
              >
                <Card
                  padding="default"
                  hover={!isExpanded}
                  className="h-full cursor-pointer relative overflow-hidden group"
                  onClick={() => handleToggle(service.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold flex-1">
                        {service.title}
                      </h3>
                      <motion.button
                        className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isExpanded ? (
                          <X className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </motion.button>
                    </div>

                    <p className="text-lg text-text-secondary">
                      {service.short}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-border mt-4">
                            <p className="text-base text-text-secondary leading-relaxed">
                              {service.expanded}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-lg text-text-secondary mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          These aren&apos;t separate offerings. They&apos;re integrated
          components of your growth engine.
        </motion.p>
      </Container>
    </section>
  )
}
