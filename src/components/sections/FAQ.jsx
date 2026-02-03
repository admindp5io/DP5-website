'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * FAQ Section
 * Collapsible accordion for common questions
 */
export function FAQ() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What if we don\'t see results?',
      answer: 'Our revenue-share model means we only win when you win. If a specific initiative doesn\'t perform, we pivot quickly based on data. You approve our work weekly, so there are no surprises. We track every initiative\'s ROI transparently, and if something isn\'t working, we change course or try a different approach.'
    },
    {
      question: 'How much equity do you take?',
      answer: 'Our model is revenue-share based on the incremental growth we generate.  We earn based on performance. Revenue share percentages vary by initiative type and risk level. There are no upfront fees or equity stakes requirements, unless you choose to. We are fully aligned with your success through measurable revenue growth.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We primarily work with B2B SaaS, tech-enabled services, and digital marketplace companies between $500K and $5M ARR. We look for companies with product-market fit seeking to scale predictably. If you\'re in a different industry but have strong fundamentals, reach out—we evaluate every opportunity individually.'
    },
    {
      question: 'How is this different from traditional consulting?',
      answer: 'Traditional consultants charge fees regardless of results and deliver strategy documents. We execute alongside you, fund the experiments ourselves, and only participate in revenue we actually generate. We are invested in your success. If our initiatives don\'t drive measurable growth, we don\'t get paid the revenue share.'
    },
    {
      question: 'What\'s the minimum engagement size?',
      answer: 'We typically work with companies generating at least $500K ARR with clear growth potential. Engagements usually start with a 3-month pilot focused on 2-3 high-impact initiatives. This allows both sides to validate the partnership before committing to longer-term collaboration.'
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'We occasionally work with pre-product-market-fit companies if the opportunity is exceptional, but our model works best for companies that have validated their core offering and are ready to scale. If you\'re earlier stage, we can recommend resources better suited to your current phase.'
    },
    {
      question: 'How do you measure attribution for revenue share?',
      answer: 'We establish clear attribution frameworks before starting any initiative. This includes baseline metrics, tracking mechanisms, and success criteria. For new channels, attribution is straightforward. For optimization work, we use incrementality testing, cohort analysis, and agreed-upon models. Complete transparency is non-negotiable.'
    },
    {
      question: 'Can we end the partnership if it\'s not working?',
      answer: 'Absolutely. Our goal is to make the partnership so valuable you never want to leave, but so fair you always could. You can exit at any milestone with clear settlement terms. You pay for work approved by you and already completed until the time of termination. We aim to earn continued partnership through results, not contracts.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about partnering with DP5
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-text-primary pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-text-secondary mb-4">
            Still have questions?
          </p>
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                const offset = 80
                const elementPosition = contactSection.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - offset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            Schedule a call to discuss your specific situation →
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
