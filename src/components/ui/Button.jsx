'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Button component with primary and secondary variants
 */
const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'default',
      className,
      magnetic = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'

    const variants = {
      primary: 'bg-accent text-white hover:bg-accent-hover hover:scale-105',
      secondary:
        'bg-transparent border border-text-primary text-text-primary hover:bg-text-primary/10',
      ghost: 'bg-transparent text-text-primary hover:bg-text-primary/5',
    }

    const sizes = {
      sm: 'px-6 py-2 text-sm rounded-full',
      default: 'px-12 py-4 text-base rounded-full',
      lg: 'px-16 py-5 text-lg rounded-full',
    }

    const MotionButton = motion.button

    return (
      <MotionButton
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: magnetic ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
