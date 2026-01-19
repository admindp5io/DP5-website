'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { contactFormSchema } from '@/lib/validations'
import { Button } from './Button'
import { cn } from '@/lib/utils'

/**
 * Contact Form Component
 * React Hook Form + Zod validation
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)

      setIsSuccess(true)
      reset()

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = cn(
    'w-full px-4 py-3 bg-bg-tertiary border border-border rounded-lg',
    'text-text-primary placeholder:text-text-tertiary',
    'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20',
    'transition-all duration-200',
    'appearance-none pointer-events-auto'
  )

  const labelClasses = 'block text-sm font-medium text-text-secondary mb-2'

  const errorClasses = 'text-error text-sm mt-1'

  return (
    <div className="w-full">
      {/* Zoho Bookings Embed - Customized Colors */}
      <iframe 
        width='100%' 
        height='750px' 
        src='https://dp5.zohobookings.com/portal-embed#/client-consultations?primaryColor=%230066ff&backgroundColor=%23000000&textColor=%23ffffff&secondaryTextColor=%23a0a0a0' 
        frameBorder='0' 
        allowFullScreen=''
        className="rounded-lg"
        style={{ 
          filter: 'color-scheme: dark'
        }}
      />

      {/* Original form inputs - COMMENTED OUT */}
      {/* 
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={cn(
              inputClasses,
              errors.name && 'border-error shake'
            )}
            placeholder="Your name"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                className={errorClasses}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-error">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              inputClasses,
              errors.email && 'border-error shake'
            )}
            placeholder="your.email@company.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                className={errorClasses}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className={inputClasses}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="interest" className={labelClasses}>
            Primary Interest <span className="text-error">*</span>
          </label>
          <select
            id="interest"
            {...register('interest')}
            className={cn(
              inputClasses,
              'cursor-pointer',
              errors.interest && 'border-error shake'
            )}
          >
            <option value="">Select an option</option>
            <option value="growth">Growth Acceleration</option>
            <option value="cto">Fractional CTO</option>
            <option value="ai">AI/Data Products</option>
            <option value="other">Other</option>
          </select>
          <AnimatePresence>
            {errors.interest && (
              <motion.p
                className={errorClasses}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.interest.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Tell us about your growth goals <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className={cn(
              inputClasses,
              'resize-none',
              errors.message && 'border-error shake'
            )}
            placeholder="Share what you're trying to achieve..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                className={errorClasses}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="w-full sm:w-auto"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Message Sent!
            </>
          ) : (
            'Schedule Evaluation'
          )}
        </Button>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              className="p-4 bg-success/10 border border-success/20 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-success">
                Thanks for reaching out! We'll be in touch within 24 hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      */}
    </div>
  )
}
