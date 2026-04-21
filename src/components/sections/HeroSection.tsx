'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { LINKEDIN_URL, RESUME_PATH } from '@/lib/constants'

// Dynamically import the 3D canvas — must be ssr:false since WebGL requires browser APIs
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-3xl bg-white/40" />
  ),
})

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20 md:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[55%_45%] md:gap-0">
        {/* Left: 3D scene */}
        <motion.div
          className="relative h-[420px] md:h-[600px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroScene />
        </motion.div>

        {/* Right: text */}
        <div className="flex flex-col justify-center md:pl-8">
          <motion.p
            className="font-inter text-xs tracking-[0.35em] uppercase text-ink-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            presents
          </motion.p>

          <motion.h1
            className="font-playfair text-6xl md:text-7xl lg:text-8xl font-black leading-none text-ink-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Mo
            <br />
            Adlouni
          </motion.h1>

          <motion.p
            className="font-playfair text-xl italic text-ink-mid mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Full Stack Software Engineer
          </motion.p>

          <motion.p
            className="font-inter text-sm text-ink-light mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Banking · React · Java · Oregon State University
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-ink-black px-6 py-2.5 font-inter text-sm tracking-widest uppercase text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              View Work →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-6 py-2.5 font-inter text-sm tracking-widest uppercase text-ink-mid transition-all hover:border-ink-black hover:text-ink-black"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="font-inter text-xs tracking-widest uppercase text-ink-light">Scroll</span>
        <motion.div
          className="h-8 w-px bg-ink-light"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
