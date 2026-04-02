'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ui/ContactForm'
import { LINKEDIN_URL } from '@/lib/constants'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <motion.div
      className="pt-28 pb-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-ink-light mb-4">
          Get in Touch
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink-black leading-tight">
            Contact
          </h1>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-6 py-2.5 font-inter text-xs tracking-widest uppercase text-ink-mid transition-colors hover:border-ink-black hover:text-ink-black"
          >
            LinkedIn →
          </Link>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-inter text-lg leading-relaxed text-ink-mid font-light mb-6">
              This is how you can reach me.
            </p>
            <p className="font-inter text-sm leading-relaxed text-ink-light">
              Whether it&apos;s a career opportunity, collaboration, or just to say hello — I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
