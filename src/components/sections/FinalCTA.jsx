'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ui/ContactForm'
import { useInView } from '@/hooks/useInView'
import { useState } from 'react'

/**
 * Final CTA Section
 * Two CTAs + contact form
 */
export function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [showForm, setShowForm] = useState(false)

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
    <section id="contact" ref={ref} className="relative section-padding gradient-mesh overflow-hidden">
      {/* Background particles (subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Headline */}
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            variants={itemVariants}
          >
            Ready to grow for real?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary mb-8"
            variants={itemVariants}
          >
            If you're tired of consultants who sell certainty but avoid risk, let's have a different conversation..
          </motion.p>

          {/* Value proposition */}
          <motion.div
            className="space-y-4 mb-12"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl text-text-secondary">
              We'll evaluate your opportunity honestly. If we see growth
              potential, we'll show you exactly how we'd unlock it.
              And we'll back it with our own investment.
            </p>
            <p className="text-base text-text-tertiary">
              No obligation. No sales pressure. Just an honest assessment of
              whether we can help you grow.
            </p>
          </motion.div>

          {/* CTAs */}
          {!showForm && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              variants={itemVariants}
            >
              <Button
                size="lg"
                magnetic
                onClick={() => setShowForm(true)}
              >
                Book Your Strategy Call
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  window.location.href = '/checklist'
                }}
              >
                Take Free Assessment
              </Button>
            </motion.div>
          )}

          {/* Contact Form */}
          {showForm && (
            <motion.div
              className="max-w-2xl mx-auto mt-12 glass rounded-2xl p-6 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-left">
                Get Started
              </h3>
              <ContactForm />
            </motion.div>
          )}

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-semibold text-accent mb-2">
                100%
              </div>
              <div className="text-sm text-text-secondary">
                Revenue-Share Aligned
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-accent mb-2">
                Weekly
              </div>
              <div className="text-sm text-text-secondary">
                Approval & Transparency
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-accent mb-2">
                Anytime
              </div>
              <div className="text-sm text-text-secondary">
                Exit Options
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
