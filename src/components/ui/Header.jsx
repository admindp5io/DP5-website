'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { cn } from '@/lib/utils'

/**
 * Header/Navigation Component
 * Fixed header with logo and navigation links
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map(link => ({
        id: link.href.substring(1), // Remove #
        element: document.querySelector(link.href)
      }))

      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const sectionTop = section.element.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id)
            break
          }
        }
      }

      // If at top of page, clear active section
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Framework', href: '#framework' },
    { label: 'Services', href: '#services' },
    { label: 'Revenue Model', href: '#revenue-model' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/95 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 group"
          >
            {/* Logo placeholder - USER SHOULD REPLACE THIS */}
            <img src="/logo.png" alt="DP5 Logo" className="w-10 h-10 object-contain group-hover:text-accent transition-colors" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    'text-sm font-medium relative group transition-colors duration-200',
                    isActive
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-200',
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  />
                </a>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-bg-primary border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container>
              <nav className="py-6 space-y-4">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={cn(
                        'block text-base font-medium py-2 transition-colors duration-200',
                        isActive
                          ? 'text-accent border-l-2 border-accent pl-4'
                          : 'text-text-secondary hover:text-accent'
                      )}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
