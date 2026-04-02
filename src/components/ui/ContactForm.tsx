'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FORMSPREE_ENDPOINT } from '@/lib/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="border-b border-border-light bg-transparent pb-3 font-inter text-base text-ink-black placeholder-ink-light outline-none transition-colors focus:border-ink-black"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="border-b border-border-light bg-transparent pb-3 font-inter text-base text-ink-black placeholder-ink-light outline-none transition-colors focus:border-ink-black"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-inter text-xs tracking-[0.25em] uppercase text-ink-light">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="border-b border-border-light bg-transparent pb-3 font-inter text-base text-ink-black placeholder-ink-light outline-none transition-colors focus:border-ink-black resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-6">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-3 rounded-full border border-ink-black bg-ink-black px-8 py-3 font-inter text-sm tracking-widest uppercase text-white transition-colors hover:bg-transparent hover:text-ink-black disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <motion.p
            className="font-inter text-sm text-ink-mid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent — I&apos;ll be in touch.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="font-inter text-sm text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Something went wrong. Try emailing me directly.
          </motion.p>
        )}
      </div>
    </form>
  )
}
