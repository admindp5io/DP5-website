'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/hooks/useInView'
import { Mail, Linkedin } from 'lucide-react'

/**
 * Footer Section
 * Three-column layout with links
 */
export function Footer() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigate: [
      { label: 'Home', href: '/' },
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'Results', href: '/results' },
      { label: 'About', href: '/about' },
    ],
    resources: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Growth Assessment', href: '/checklist' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  const scrollToSection = (e, href) => {
    e.preventDefault()

    // Handle external links
    if (href === '#') return

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
    <footer ref={ref} className="bg-bg-secondary border-t border-border">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-accent mb-4">DP5</h3>
            <p className="text-base text-text-secondary">
              Growth partners with skin in the game
            </p>
          </motion.div>

          {/* Column 2: Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-200 text-base relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-200 text-base relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@dp5.com"
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="text-base">hello@dp5.com</span>
              </a>
              <a
                href="https://linkedin.com/company/dp5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-base">Follow on LinkedIn</span>
              </a>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text-tertiary mb-2">Legal</p>
                <div className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-tertiary">
              © {currentYear} DP5. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary text-center sm:text-right max-w-2xl">
              All growth partnerships subject to mutual evaluation and
              contractual agreement. Revenue-share terms customized per
              engagement.
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
