'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Hook to detect if an element is in viewport using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {[React.RefObject, boolean]} Ref and inView state
 */
export function useInView(options = {}) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting

        if (isInView) {
          setInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, inView]
}
