'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIsDesktop } from '@/hooks/useMediaQuery'

/**
 * Custom cursor component (desktop only)
 * Shows a following cursor with outer ring and inner dot
 */
export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!isDesktop) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Outer circle */}
      <motion.div
        className="absolute rounded-full border border-accent/30"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          backgroundColor: isHovering ? '#0066FF' : '#FFFFFF',
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 500,
        }}
      />
    </div>
  )
}
