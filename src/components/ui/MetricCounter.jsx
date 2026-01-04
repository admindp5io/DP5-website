'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

/**
 * Animated counter component with odometer effect
 */
export function MetricCounter({ target, duration = 1500, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3)

        setCount(Math.floor(target * easeProgress))

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView, target, duration])

  return (
    <span ref={ref} className="font-mono">
      {prefix}{count}{suffix}
    </span>
  )
}
