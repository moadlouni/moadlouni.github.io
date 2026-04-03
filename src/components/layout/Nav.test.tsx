import React from 'react'
import { render, screen } from '@testing-library/react'
import Nav from './Nav'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

jest.mock('next/navigation')
jest.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, ...props }: React.ComponentProps<'nav'>) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: React.ComponentProps<'span'>) => <span {...props}>{children}</span>,
  },
  useScroll: () => ({ scrollY: { on: jest.fn(), destroy: jest.fn() } }),
  useMotionValueEvent: jest.fn(),
}))

const mockUsePathname = usePathname as jest.Mock

describe('Nav', () => {
  it('renders all navigation links', () => {
    mockUsePathname.mockReturnValue('/')
    render(<Nav />)

    NAV_LINKS.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    })
  })

  it('links point to correct hrefs', () => {
    mockUsePathname.mockReturnValue('/')
    render(<Nav />)

    NAV_LINKS.forEach((link) => {
      const el = screen.getByText(link.label).closest('a')
      expect(el).toHaveAttribute('href', link.href)
    })
  })

  it('marks the current route as active', () => {
    mockUsePathname.mockReturnValue('/about')
    render(<Nav />)

    // The active link should have the darker text class
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveClass('text-ink-black')
  })

  it('marks non-active links with lighter text', () => {
    mockUsePathname.mockReturnValue('/')
    render(<Nav />)

    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveClass('text-ink-light')
  })

  it('treats / as active only when pathname is exactly /', () => {
    mockUsePathname.mockReturnValue('/about')
    render(<Nav />)

    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).not.toHaveClass('text-ink-black')
  })
})
