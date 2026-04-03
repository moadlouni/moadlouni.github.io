import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

// Strip framer-motion animation props so they don't leak to real DOM elements
const stripMotionProps = <T extends object>(props: T) => {
  const { whileHover, whileTap, initial, animate, transition, ...rest } =
    props as T & Record<string, unknown>
  void whileHover; void whileTap; void initial; void animate; void transition
  return rest
}

jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: React.ComponentProps<'button'> & Record<string, unknown>) => (
      <button {...stripMotionProps(props)}>{children}</button>
    ),
    p: ({ children, ...props }: React.ComponentProps<'p'> & Record<string, unknown>) => (
      <p {...stripMotionProps(props)}>{children}</p>
    ),
  },
}))

const mockFetch = jest.fn()
global.fetch = mockFetch

describe('ContactForm', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submit button is enabled by default', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
  })

  it('shows "Sending…" and disables button during submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockReturnValue(new Promise(() => {}))

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveTextContent('Sending…')
  })

  it('shows success message on successful submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValue({ ok: true })

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('resets form fields after successful submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValue({ ok: true })

    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement
    await user.type(nameInput, 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(nameInput.value).toBe('')
    })
  })

  it('shows error message on non-ok response', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValue({ ok: false })

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('shows error message when fetch throws (network error)', async () => {
    const user = userEvent.setup()
    mockFetch.mockRejectedValue(new Error('Network error'))
    jest.spyOn(console, 'error').mockImplementation(() => {})

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('sets aria-busy=true on button while sending', async () => {
    const user = userEvent.setup()
    mockFetch.mockReturnValue(new Promise(() => {}))

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Mo')
    await user.type(screen.getByLabelText('Email'), 'mo@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })
})
