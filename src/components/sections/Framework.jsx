'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import {
  Package,
  TrendingUp,
  Cog,
  Database,
  Code,
} from 'lucide-react'

/**
 * Framework Section
 * Interactive diagram showing the DP5 Growth Accelerator
 */
export function Framework() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodes = [
    {
      id: 'product',
      label: 'Product Evolution',
      description:
        'Identify features that unlock new revenue streams. We add value, not complexity.',
      icon: Package,
      angle: 0,
    },
    {
      id: 'market',
      label: 'Market Expansion',
      description:
        'Find untapped segments ready for your solution. Data-driven territory mapping.',
      icon: TrendingUp,
      angle: 72,
    },
    {
      id: 'operations',
      label: 'Operational Excellence',
      description:
        'Eliminate bottlenecks killing your momentum. Streamline what slows you down.',
      icon: Cog,
      angle: 144,
    },
    {
      id: 'data',
      label: 'Data Strategy',
      description:
        'Turn your information into competitive advantage. Intelligence you can act on.',
      icon: Database,
      angle: 216,
    },
    {
      id: 'technology',
      label: 'Technology Architecture',
      description:
        'Build systems that scale with demand. Infrastructure that grows with you.',
      icon: Code,
      angle: 288,
    },
  ]

  // Calculate positions for nodes in a circle
  const radius = 180
  const centerX = 200
  const centerY = 200

  const getNodePosition = (angle) => {
    const rad = (angle - 90) * (Math.PI / 180)
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    }
  }

  return (
    <section id="framework" ref={ref} className="section-padding bg-bg-primary">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-section-mobile sm:text-section-tablet lg:text-section-desktop font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The Framework
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The DP5 Growth Accelerator.
          </motion.p>
          <motion.p
            className="text-lg text-text-secondary mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Growth isn&apos;t one-dimensional. Our proprietary framework
            addresses every lever that matters.
          </motion.p>
        </div>

        {/* Framework Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-square max-w-2xl mx-auto">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{ overflow: 'visible' }}
            >
              {/* Connection lines from center to nodes */}
              {nodes.map((node, index) => {
                const pos = getNodePosition(node.angle)
                return (
                  <motion.line
                    key={`line-${node.id}`}
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke="rgba(0, 102, 255, 0.2)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      inView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                )
              })}

              {/* Center node */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="50"
                  fill="rgba(0, 102, 255, 0.2)"
                  stroke="#0066FF"
                  strokeWidth="2"
                />
                <text
                  x={centerX}
                  y={centerY - 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="600"
                >
                  Growth
                </text>
                <text
                  x={centerX}
                  y={centerY + 15}
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="600"
                >
                  Accelerator
                </text>
              </motion.g>
            </svg>

            {/* Orbiting nodes (positioned absolutely) */}
            {nodes.map((node, index) => {
              const pos = getNodePosition(node.angle)
              const Icon = node.icon

              return (
                <motion.div
                  key={node.id}
                  className="absolute"
                  style={{
                    left: `${(pos.x / 400) * 100}%`,
                    top: `${(pos.y / 400) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="relative cursor-pointer">
                    <div className="w-16 h-16 rounded-full glass border-2 border-accent flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Tooltip */}
                    {hoveredNode === node.id && (
                      <motion.div
                        className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 glass rounded-lg p-4 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <h4 className="font-semibold mb-2 text-sm">
                          {node.label}
                        </h4>
                        <p className="text-xs text-text-secondary">
                          {node.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Node labels below diagram (mobile-friendly) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:hidden">
            {nodes.map((node, index) => {
              const Icon = node.icon
              return (
                <motion.div
                  key={`label-${node.id}`}
                  className="glass rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {node.label}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
