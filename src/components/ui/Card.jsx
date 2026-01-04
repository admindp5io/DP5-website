'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Card component with glass morphism effect
 */
const Card = forwardRef(
  (
    {
      children,
      className,
      hover = true,
      padding = 'default',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'glass rounded-xl'

    const paddings = {
      none: '',
      sm: 'p-6',
      default: 'p-8 md:p-12',
      lg: 'p-12 md:p-16',
    }

    const hoverStyles = hover
      ? 'transition-all duration-400 hover:transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-accent/20'
      : ''

    const MotionCard = motion.div

    return (
      <MotionCard
        ref={ref}
        className={cn(baseStyles, paddings[padding], hoverStyles, className)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </MotionCard>
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader component
 */
const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/**
 * CardTitle component
 */
const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

/**
 * CardDescription component
 */
const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-base text-text-secondary', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

/**
 * CardContent component
 */
const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
