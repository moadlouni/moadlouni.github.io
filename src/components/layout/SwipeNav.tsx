'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

const THRESHOLD = 70
const MAX_DURATION = 600

export default function SwipeNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    let startX = 0
    let startY = 0
    let startTime = 0
    let startedInsideIgnore = false

    const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p)

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      startTime = Date.now()
      const target = e.target as HTMLElement | null
      startedInsideIgnore = !!target?.closest('[data-swipe-ignore]')
    }

    const onEnd = (e: TouchEvent) => {
      if (startedInsideIgnore) return
      const t = e.changedTouches[0]
      const dx = t.clientX - startX
      const dy = t.clientY - startY
      if (Date.now() - startTime > MAX_DURATION) return
      if (Math.abs(dx) < THRESHOLD) return
      if (Math.abs(dx) < Math.abs(dy) * 1.5) return

      const current = normalize(pathname || '/')
      const currentIdx = NAV_LINKS.findIndex((l) =>
        l.href === '/' ? current === '/' : current === l.href || current.startsWith(l.href + '/')
      )
      if (currentIdx < 0) return

      if (dx < 0 && currentIdx < NAV_LINKS.length - 1) {
        router.push(NAV_LINKS[currentIdx + 1].href)
      } else if (dx > 0 && currentIdx > 0) {
        router.push(NAV_LINKS[currentIdx - 1].href)
      }
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [pathname, router])

  return <>{children}</>
}
