'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

/**
 * Growth Graph Component
 * Animated compound growth curve
 */
export function GrowthGraph() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const pathRef = useRef(null)

  const width = 600
  const height = 400
  const padding = 40

  // Generate exponential growth curve points
  const generateCurve = () => {
    const points = []
    const numPoints = 50
    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * (width - 2 * padding) + padding
      const progress = i / numPoints
      // Exponential growth: y = a * e^(bx)
      const y =
        height -
        padding -
        (Math.exp(progress * 2.5) - 1) * ((height - 2 * padding) / (Math.exp(2.5) - 1))
      points.push(`${x},${y}`)
    }
    return points.join(' L ')
  }

  const pathData = `M ${generateCurve()}`

  const milestones = [
    { x: 25, label: 'Q1', description: 'Initial traction' },
    { x: 40, label: 'Q2', description: 'Validation' },
    { x: 60, label: 'Q3', description: 'Scale begins' },
    { x: 85, label: 'Q4', description: 'Compounding' },
  ]

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = length
      pathRef.current.style.strokeDashoffset = length
    }
  }, [])

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ overflow: 'visible' }}
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => {
          const y = padding + (i * (height - 2 * padding)) / 4
          return (
            <line
              key={`grid-h-${i}`}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
          )
        })}

        {/* Axes */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 5}
          textAnchor="middle"
          fill="#A0A0A0"
          fontSize="14"
        >
          Time
        </text>
        <text
          x={10}
          y={height / 2}
          textAnchor="middle"
          fill="#A0A0A0"
          fontSize="14"
          transform={`rotate(-90, 10, ${height / 2})`}
        >
          Revenue
        </text>

        {/* Growth curve */}
        <motion.path
          ref={pathRef}
          d={pathData}
          stroke="#0066FF"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: pathRef.current?.getTotalLength() || 1000 }}
          animate={
            inView
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: pathRef.current?.getTotalLength() || 1000 }
          }
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Gradient fill under curve */}
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${pathData} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
          fill="url(#curveGradient)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Milestones */}
        {milestones.map((milestone, index) => {
          const x = padding + (milestone.x / 100) * (width - 2 * padding)
          const progress = milestone.x / 100
          const y =
            height -
            padding -
            (Math.exp(progress * 2.5) - 1) *
              ((height - 2 * padding) / (Math.exp(2.5) - 1))

          return (
            <motion.g
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
            >
              <circle cx={x} cy={y} r="6" fill="#00D084" />
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="12"
                fontWeight="600"
              >
                {milestone.label}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
