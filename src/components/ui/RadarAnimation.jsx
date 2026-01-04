'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Radar Animation Component
 * Continuously rotating radar with pulse effect
 */
export function RadarAnimation() {
  const [rotation, setRotation] = useState(0)
  const [dataPoints, setDataPoints] = useState([])
  const animationRef = useRef(null)

  useEffect(() => {
    // Generate some random data points
    const points = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: (Math.random() * 360),
      distance: 30 + Math.random() * 60,
      active: false,
    }))
    setDataPoints(points)

    // Rotation animation
    let lastTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const delta = now - lastTime
      lastTime = now

      setRotation((prev) => (prev + (delta * 0.05)) % 360)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Update data point activity based on radar line position
  useEffect(() => {
    setDataPoints((prev) =>
      prev.map((point) => {
        const diff = Math.abs(((point.angle - rotation + 360) % 360))
        const active = diff < 30
        return { ...point, active }
      })
    )
  }, [rotation])

  const centerX = 100
  const centerY = 100
  const maxRadius = 90

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Grid circles */}
        {[25, 50, 75, 100].map((percent) => (
          <circle
            key={percent}
            cx={centerX}
            cy={centerY}
            r={(maxRadius * percent) / 100}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Grid lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x = centerX + maxRadius * Math.cos(rad)
          const y = centerY + maxRadius * Math.sin(rad)
          return (
            <line
              key={angle}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          )
        })}

        {/* Scanning line */}
        <line
          x1={centerX}
          y1={centerY}
          x2={
            centerX +
            maxRadius * Math.cos((rotation * Math.PI) / 180)
          }
          y2={
            centerY +
            maxRadius * Math.sin((rotation * Math.PI) / 180)
          }
          stroke="#0066FF"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Scanning gradient */}
        <defs>
          <radialGradient id="scanGradient">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d={`M ${centerX} ${centerY} L ${
            centerX + maxRadius * Math.cos((rotation * Math.PI) / 180)
          } ${
            centerY + maxRadius * Math.sin((rotation * Math.PI) / 180)
          } A ${maxRadius} ${maxRadius} 0 0 0 ${
            centerX +
            maxRadius * Math.cos(((rotation - 60) * Math.PI) / 180)
          } ${
            centerY +
            maxRadius * Math.sin(((rotation - 60) * Math.PI) / 180)
          } Z`}
          fill="url(#scanGradient)"
        />

        {/* Data points */}
        {dataPoints.map((point) => {
          const rad = (point.angle * Math.PI) / 180
          const distance = (maxRadius * point.distance) / 100
          const x = centerX + distance * Math.cos(rad)
          const y = centerY + distance * Math.sin(rad)

          return (
            <motion.circle
              key={point.id}
              cx={x}
              cy={y}
              r={point.active ? 4 : 2}
              fill={point.active ? '#0066FF' : '#00D084'}
              animate={{
                scale: point.active ? [1, 1.5, 1] : 1,
                opacity: point.active ? [1, 0.5, 1] : 0.7,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          )
        })}

        {/* Center dot */}
        <circle
          cx={centerX}
          cy={centerY}
          r="3"
          fill="#0066FF"
        />
      </svg>

      {/* Labels overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-sm font-mono text-accent">SCANNING</div>
          <div className="text-xs text-text-tertiary mt-1">
            {Math.floor(rotation)}°
          </div>
        </div>
      </div>
    </div>
  )
}
