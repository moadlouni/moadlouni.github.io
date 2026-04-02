import Link from 'next/link'
import { LINKEDIN_URL, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border-light px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-inter text-xs tracking-widest uppercase text-ink-light">
          {SITE_NAME}
        </span>
        <div className="flex items-center gap-4">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs tracking-widest uppercase text-ink-light transition-colors hover:text-ink-black"
          >
            LinkedIn
          </Link>
          <span className="font-inter text-xs text-ink-light">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
