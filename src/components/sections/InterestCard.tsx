'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface InterestCardProps {
  id: string
  image: string
  title: string
  caption: string
}

export default function InterestCard({ image, title, caption }: InterestCardProps) {
  return (
    <motion.div
      className="relative flex h-full w-72 flex-none flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
      style={{ scrollSnapAlign: 'start' }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          unoptimized
        />
      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="font-playfair text-lg font-bold text-ink-black mb-1">{title}</p>
        <p className="font-inter text-sm text-ink-light leading-relaxed">{caption}</p>
      </div>
    </motion.div>
  )
}
