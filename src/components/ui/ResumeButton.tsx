'use client'

import { motion } from 'framer-motion'
import { RESUME_PATH } from '@/lib/constants'

export default function ResumeButton() {
  return (
    <motion.a
      href={RESUME_PATH}
      download
      className="inline-flex items-center gap-3 rounded-full border border-ink-black bg-ink-black px-8 py-3 font-inter text-sm tracking-widest uppercase text-white transition-colors hover:bg-transparent hover:text-ink-black"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>Download Resume</span>
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        →
      </motion.span>
    </motion.a>
  )
}
