'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50)
  })

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex items-center gap-1 rounded-full border border-border-light bg-white/80 px-3 py-2 backdrop-blur-sm"
        animate={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ duration: 0.3 }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-colors duration-200 font-inter ${
                isActive
                  ? 'text-ink-black'
                  : 'text-ink-light hover:text-ink-mid'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-parchment"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          )
        })}
      </motion.div>
    </motion.nav>
    </div>
  )
}
