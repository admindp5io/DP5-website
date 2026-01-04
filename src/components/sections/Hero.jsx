'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

/**
 * Hero Section
 * Full viewport height with animated gradient background
 */
export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circles */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-success/15 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{ bottom: '10%', right: '15%' }}
        />

        {/* Additional accent circle */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-accent/10 blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          style={{ top: '50%', right: '20%' }}
        />

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 102, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 102, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Background animated metrics (subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-9xl font-mono text-text-primary"
          animate={{
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          10X
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-9xl font-mono text-text-primary"
          animate={{
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          $$$
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-light"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don&apos;t give growth advice.
          </motion.h1>

          {/* Secondary headline */}
          <motion.h2
            className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-semibold text-gradient"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We make you grow.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            DP5 partners with ambitious companies to achieve sustainable,
            measurable growth. No fluff. No empty strategies. Just real results
            backed by revenue-sharing confidence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              magnetic
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  const offset = 80 // Header height
                  const elementPosition = contactSection.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              Start Growing Now
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-8 h-8 text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
