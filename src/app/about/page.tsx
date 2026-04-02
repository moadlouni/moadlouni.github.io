'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
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
          Background
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink-black mb-16 leading-tight">
          About Me
        </h1>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/coffee_berries.jpg"
              alt="Coffee berries"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="flex flex-col gap-8 pt-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-inter text-lg leading-relaxed text-ink-mid font-light">
              Java Software Engineer with a demonstrated history of working in the banking industry.
            </p>
            <p className="font-inter text-base leading-relaxed text-ink-mid font-light">
              Skilled in Management, Software Development Life Cycle (SDLC), Agile Methodologies, Public Speaking, and Testing.
            </p>
            <p className="font-inter text-base leading-relaxed text-ink-mid font-light">
              Well-rounded engineering professional with a Computer Science education from Oregon State University.
            </p>

            {/* Skills */}
            <div className="border-t border-border-light pt-8">
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light mb-6">
                Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Agile / SDLC', 'Banking Systems', 'Management', 'Public Speaking', 'Testing'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-light bg-white px-4 py-1.5 font-inter text-xs text-ink-mid"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border-light pt-8">
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light mb-2">
                Education
              </p>
              <p className="font-playfair text-xl font-bold text-ink-black">
                Oregon State University
              </p>
              <p className="font-inter text-sm text-ink-light mt-1">B.S. Computer Science</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
