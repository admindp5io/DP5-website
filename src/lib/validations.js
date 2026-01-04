import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  interest: z.string().min(1, 'Please select your primary interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
