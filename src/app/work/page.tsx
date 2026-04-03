'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ResumeButton from '@/components/ui/ResumeButton'

const experience = [
  {
    company: 'Wells Fargo',
    title: 'Full Stack Software Engineer',
    period: 'Present',
    description:
      'Developing and maintaining enterprise banking software within a large-scale Java ecosystem. Working across the full software development life cycle using Agile methodologies.',
    tags: ['Java', 'Agile', 'Banking', 'SDLC'],
  },
]

export default function WorkPage() {
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
          Experience
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink-black leading-tight">
            Work
          </h1>
          <ResumeButton />
        </div>

        {/* Experience entries */}
        <div className="flex flex-col gap-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-border-light pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            >
              {/* Left: company + period */}
              <div>
                <p className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light mb-2">
                  {job.period}
                </p>
                <p className="font-playfair text-2xl font-bold text-ink-black">
                  {job.company}
                </p>
              </div>

              {/* Right: role + description */}
              <div>
                <p className="font-playfair text-xl italic text-ink-mid mb-4">
                  {job.title}
                </p>
                <p className="font-inter text-base leading-relaxed text-ink-mid font-light mb-6">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-light bg-white px-3 py-1 font-inter text-xs text-ink-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wells Fargo image */}
        <motion.div
          className="relative mt-16 h-64 md:h-96 overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/images/wellsfargo.jpg"
            alt="Wells Fargo"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-ink-black/20" />
        </motion.div>
      </div>
    </motion.div>
  )
}
