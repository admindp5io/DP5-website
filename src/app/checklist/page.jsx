'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/sections/Footer'
import { CheckCircle2, Circle, TrendingUp, Target, AlertCircle, ArrowRight, BarChart } from 'lucide-react'

/**
 * Growth Readiness Checklist - Interactive Assessment
 * Free interactive tool to assess growth readiness
 */
export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState({})

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const checklistCategories = [
    {
      title: 'Customer Acquisition & Revenue',
      icon: TrendingUp,
      items: [
        'We know our Customer Acquisition Cost (CAC) and it\'s sustainable',
        'Our CAC payback period is less than 12 months',
        'We have a clear understanding of our unit economics',
        'Revenue growth rate is predictable and measurable',
        'We track revenue by channel and can attribute growth',
      ]
    },
    {
      title: 'Product-Market Fit',
      icon: Target,
      items: [
        'Our Net Promoter Score (NPS) is above 30',
        'We have clear product differentiation from competitors',
        'Customer churn rate is below 5% monthly (B2B SaaS)',
        'We receive inbound leads without paid acquisition',
        'Customers can articulate the specific problem we solve',
      ]
    },
    {
      title: 'Pricing & Positioning',
      icon: BarChart,
      items: [
        'Our pricing is based on value, not just costs',
        'We have tested multiple pricing models in the past year',
        'We can clearly explain why our price point makes sense',
        'Pricing objections are less than 20% of sales calls',
        'We have a clear upgrade path for customers',
      ]
    },
    {
      title: 'Go-to-Market Strategy',
      icon: ArrowRight,
      items: [
        'We have a documented ideal customer profile (ICP)',
        'Our sales cycle length is predictable and optimized',
        'We know which marketing channels drive qualified leads',
        'Our messaging resonates with our target audience',
        'We have a repeatable sales process',
      ]
    },
    {
      title: 'Data & Infrastructure',
      icon: AlertCircle,
      items: [
        'We track key growth metrics weekly',
        'Our analytics infrastructure is reliable',
        'We can run A/B tests and measure results',
        'Data informs our strategic decisions',
        'We have visibility into our full customer journey',
      ]
    },
    {
      title: 'Team & Execution',
      icon: Target,
      items: [
        'Our team is aligned on growth priorities',
        'We ship product improvements weekly',
        'Growth initiatives are tracked and measured',
        'We have capacity to execute new experiments',
        'Leadership supports data-driven decisions',
      ]
    },
  ]

  const getScore = () => {
    const totalChecked = Object.values(checkedItems).filter(Boolean).length
    const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0)
    return Math.round((totalChecked / totalItems) * 100)
  }

  const getScoreLevel = (score) => {
    if (score >= 80) return {
      label: 'Excellent',
      color: 'text-success',
      bg: 'bg-success/10',
      advice: 'You have strong fundamentals. You\'re ready to scale. Focus on optimization and strategic experiments.'
    }
    if (score >= 60) return {
      label: 'Good',
      color: 'text-accent',
      bg: 'bg-accent/10',
      advice: 'Solid foundation with room for improvement. Address the key gaps before scaling aggressively.'
    }
    if (score >= 40) return {
      label: 'Fair',
      color: 'text-warning',
      bg: 'bg-warning/10',
      advice: 'Several critical gaps. Focus on the fundamentals first before investing in growth.'
    }
    return {
      label: 'Needs Work',
      color: 'text-error',
      bg: 'bg-error/10',
      advice: 'Significant foundational issues. Consider professional help to build the right systems before scaling.'
    }
  }

  const score = getScore()
  const scoreLevel = getScoreLevel(score)
  const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 gradient-mesh">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Growth Readiness Checklist
              </h1>

              <p className="text-xl sm:text-2xl text-text-secondary mb-8">
                Free self-assessment to identify growth bottlenecks in your B2B company
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>10-minute assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Instant results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>No email required</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Checklist Section */}
      <section className="section-padding bg-bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Complete the Assessment
              </h2>
              <p className="text-lg text-text-secondary">
                Check all items that are true for your company. Be honest—this is for your benefit.
              </p>
            </div>

            <div className="space-y-8">
              {checklistCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                const categoryChecked = category.items.filter((_, itemIndex) =>
                  checkedItems[`${categoryIndex}-${itemIndex}`]
                ).length

                return (
                  <motion.div
                    key={categoryIndex}
                    className="glass rounded-2xl p-6 md:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold">{category.title}</h3>
                        <p className="text-sm text-text-tertiary">
                          {categoryChecked} / {category.items.length} completed
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => {
                        const key = `${categoryIndex}-${itemIndex}`
                        const isChecked = checkedItems[key]

                        return (
                          <button
                            key={itemIndex}
                            onClick={() => toggleItem(categoryIndex, itemIndex)}
                            className={`w-full flex items-start gap-4 p-4 rounded-lg border transition-all text-left ${
                              isChecked
                                ? 'border-text-tertiary bg-bg-primary'
                                : 'border-border hover:border-text-tertiary'
                            }`}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {isChecked ? (
                                <CheckCircle2 className="w-6 h-6 text-text-primary" />
                              ) : (
                                <Circle className="w-6 h-6 text-text-tertiary" />
                              )}
                            </div>
                            <span className={`text-base ${isChecked ? 'text-text-primary' : 'text-text-secondary'}`}>
                              {item}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-bg-primary">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                  <BarChart className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Your Assessment Results
                </h2>
                <div className={`text-6xl font-bold mb-4 ${scoreLevel.color}`}>
                  {score}%
                </div>
                <div className="text-2xl font-semibold mb-6">{scoreLevel.label}</div>
              </div>

              <div className="glass rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold mb-3">What This Means:</h3>
                <p className="text-text-secondary leading-relaxed">
                  {scoreLevel.advice}
                </p>
              </div>

              {score < 80 && (
                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Ready to Address These Gaps?
                  </h3>
                  <p className="text-text-secondary mb-6">
                    We specialize in helping B2B companies build the fundamentals for sustainable growth.
                    Our revenue-share model means we only win when you win.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={() => window.location.href = '/#contact'}
                    >
                      Schedule Free Assessment
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={() => window.location.href = '/how-we-work'}
                    >
                      Learn How We Work
                    </Button>
                  </div>
                </div>
              )}

              {score >= 80 && (
                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    You're Ready to Scale
                  </h3>
                  <p className="text-text-secondary mb-6">
                    With your strong fundamentals, you're positioned for strategic growth experiments.
                    Let's talk about how to optimize and accelerate your next phase.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.location.href = '/#contact'}
                  >
                    Let's Talk Strategy
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
