'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader } from '@/components/ui/Card'
import { useInView } from '@/hooks/useInView'
import { Linkedin } from 'lucide-react'

/**
 * Team Section
 * Meet the founders/team behind DP5
 */
export function Team() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const teamMembers = [
    {
      name: 'Founder Name',
      role: 'Co-Founder & CEO',
      bio: 'Former Head of Growth at [Company Name]. 10+ years scaling B2B SaaS companies from $1M to $50M ARR. Expert in product-led growth, pricing optimization, and revenue operations.',
      credentials: [
        'Led growth at [Previous Company]',
        'Scaled 3 companies past $10M ARR',
        'Stanford MBA, UC Berkeley Engineering'
      ],
      linkedin: '#',
      image: '/team/placeholder-1.jpg' // Replace with actual image
    },
    {
      name: 'Founder Name',
      role: 'Co-Founder & CTO',
      bio: 'Former Principal Engineer at [Tech Company]. 15+ years building AI/ML products and data infrastructure. Specializes in turning complex technical capabilities into customer value.',
      credentials: [
        'Built data platform serving 100M+ users',
        'Published researcher in ML/AI',
        'MIT Computer Science'
      ],
      linkedin: '#',
      image: '/team/placeholder-2.jpg' // Replace with actual image
    },
    {
      name: 'Advisor Name',
      role: 'Strategic Advisor',
      bio: 'Former VP of Marketing at [Enterprise Company]. 20+ years driving growth for B2B tech companies. Deep expertise in enterprise sales, demand generation, and go-to-market strategy.',
      credentials: [
        'Advisor to 15+ tech startups',
        'Built marketing teams at 3 unicorns',
        'Wharton MBA'
      ],
      linkedin: '#',
      image: '/team/placeholder-3.jpg' // Replace with actual image
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
    <section ref={ref} className="section-padding bg-bg-primary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Operators who've been in your shoes
          </motion.p>
          <motion.p
            className="text-base text-text-tertiary mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're not consultants who've never built anything. We're former founders,
            executives, and technical leaders who've scaled companies ourselves.
          </motion.p>
        </div>

        {/* Team members grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full group">
                <CardHeader>
                  {/* Placeholder avatar */}
                  <div className="mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-success/20 mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl font-bold text-accent">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {member.credentials.map((credential, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start">
                          <span className="text-success mr-2">•</span>
                          <span>{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LinkedIn link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Combined experience */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">45+</div>
                <div className="text-sm text-text-secondary">
                  Combined Years of Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">$500M+</div>
                <div className="text-sm text-text-secondary">
                  In Revenue Generated
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm text-text-secondary">
                  Companies Scaled
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
