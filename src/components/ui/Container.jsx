import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Container component with responsive padding and max-width
 */
const Container = forwardRef(
  (
    {
      children,
      className,
      size = 'default',
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'max-w-3xl',
      default: 'max-w-container',
      lg: 'max-w-7xl',
      full: 'max-w-full',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'container-custom',
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export { Container }
