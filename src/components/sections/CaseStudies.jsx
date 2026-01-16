'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { useInView } from '@/hooks/useInView'
import { TrendingUp, Users, Target } from 'lucide-react'

/**
 * Case Studies Section
 * Social proof with projected outcomes
 */
export function CaseStudies() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const cases = [
    {
      icon: TrendingUp,
      industry: 'B2B SaaS',
      stage: '$2M ARR',
      challenge: 'Plateaued growth, 15% monthly churn',
      solution: [
        'Customer retention analysis and segmentation',
        'Implemented targeted win-back campaigns',
        'Product-led growth experiments',
        'Strategic pricing optimization'
      ],
      results: [
        '40% revenue increase in 6 months',
        'Reduced churn to 8%',
        'Improved LTV by 2.3x',
        'Expanded into 2 new market segments'
      ]
    },
    {
      icon: Users,
      industry: 'B2B Marketplace',
      stage: '$800K ARR',
      challenge: 'Low user activation, high CAC',
      solution: [
        'Rebuilt onboarding experience based on user research',
        'Implemented referral program with incentives',
        'A/B tested pricing tiers and positioning',
        'Launched content marketing engine'
      ],
      results: [
        '3x user activation rate',
        'CAC reduced by 45%',
        'Organic traffic increased 200%',
        'Monthly recurring revenue up 85%'
      ]
    },
    {
      icon: Target,
      industry: 'Healthcare Tech',
      stage: '$3.5M ARR',
      challenge: 'Limited market awareness, long sales cycles',
      solution: [
        'Developed thought leadership content strategy',
        'Built strategic partnerships with industry leaders',
        'Optimized enterprise sales process',
        'Created customer success playbooks'
      ],
      results: [
        'Sales cycle shortened by 30%',
        'Pipeline value increased 120%',
        'Net revenue retention: 135%',
        'Featured in 3 major industry publications'
      ]
    }
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
    <section ref={ref} className="section-padding bg-bg-secondary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Projected Outcomes
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real growth scenarios based on our methodology
          </motion.p>
          <motion.p
            className="text-base text-text-tertiary mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            These are representative examples of typical engagement outcomes.
            Actual results vary based on market conditions, execution, and your specific context.
          </motion.p>
        </div>

        {/* Case studies grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <div className="mb-6">
                      <CardTitle className="text-xl mb-2">
                        {caseStudy.industry}
                      </CardTitle>
                      <p className="text-sm text-text-tertiary font-mono">
                        {caseStudy.stage}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                        Challenge
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                        Our Approach
                      </h4>
                      <ul className="space-y-1">
                        {caseStudy.solution.map((item, i) => (
                          <li key={i} className="text-sm text-text-secondary flex items-start">
                            <span className="text-success mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="border-t border-border pt-6">
                      <h4 className="text-sm font-semibold text-success uppercase tracking-wide mb-3">
                        Projected Results
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="text-sm font-medium text-text-primary flex items-start">
                            <span className="text-success mr-2">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Every engagement is unique. We tailor our approach to your specific market,
            product, and growth stage. These examples show what's possible when execution
            meets accountability.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
