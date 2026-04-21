'use client'

import { motion } from 'framer-motion'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import InterestCard from './InterestCard'
import { interests } from '@/lib/constants'

export default function InterestsGallery() {
  const scrollRef = useHorizontalScroll()

  return (
    <section className="py-20 border-t border-border-light">
      <div className="mb-8 px-6 md:px-12">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-ink-light mb-3">
          Beyond the Code
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl italic text-ink-black">
          A Few Things I Enjoy
        </h2>
      </div>

      {/* Scrollable strip */}
      <motion.div
        ref={scrollRef}
        data-swipe-ignore
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {interests.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
          >
            <InterestCard {...item} />
          </motion.div>
        ))}
        {/* Trailing spacer */}
        <div className="w-6 flex-none" />
      </motion.div>
    </section>
  )
}
