'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { MetricCounter } from './MetricCounter'

/**
 * Timeline component with animated connecting line
 */
export function Timeline({ steps }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -40 },
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
    <div ref={ref} className="relative">
      {/* Connecting line */}
      <div className="absolute left-8 md:left-0 top-0 bottom-0 w-[2px] bg-border">
        <motion.div
          className="w-full bg-accent origin-top"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      {/* Steps */}
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-8 md:gap-12"
            variants={stepVariants}
          >
            {/* Number indicator */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center">
                <span className="text-2xl font-mono font-semibold text-accent">
                  <MetricCounter target={index + 1} prefix="0" />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
