import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from '../Contact'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock Sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

describe('Contact Component - Web3Forms Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockFetch.mockClear()
  })

  it('should render contact form with all fields', () => {
    render(<Contact />)

    // Use more specific selectors to avoid ambiguity
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /^email$/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/phone.*optional/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('should render direct contact options', () => {
    render(<Contact />)

    expect(screen.getByText(/call us/i)).toBeInTheDocument()
    expect(screen.getByText(/email us/i)).toBeInTheDocument()
    expect(screen.getByText(/whatsapp/i)).toBeInTheDocument()
  })

  it('should submit form to Web3Forms API endpoint', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    // Fill out form using more specific selectors
    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '07123456789')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'I need a quote for a custom staircase')

    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))

    // Verify fetch was called with Web3Forms endpoint
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.web3forms.com/submit',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      )
    })
  })

  it('should include access_key in submission payload', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      const callArgs = mockFetch.mock.calls[0]
      const body = JSON.parse(callArgs[1].body)
      expect(body).toHaveProperty('access_key')
      expect(body.access_key).toBeTruthy()
    })
  })

  it('should include all form fields in submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '07123456789')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      const callArgs = mockFetch.mock.calls[0]
      const body = JSON.parse(callArgs[1].body)
      expect(body).toMatchObject({
        name: 'John Smith',
        email: 'john@example.com',
        phone: '07123456789',
        message: 'Test message',
      })
      expect(body.subject).toBeDefined()
    })
  })

  it('should show success toast on successful submission', async () => {
    const user = userEvent.setup()
    const { toast } = await import('sonner')

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        expect.stringContaining('back to you'),
        expect.objectContaining({
          description: expect.stringContaining('sent successfully'),
        })
      )
    })
  })

  it('should reset form after successful submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    const nameInput = screen.getByRole('textbox', { name: /^name$/i }) as HTMLInputElement
    const emailInput = screen.getByRole('textbox', { name: /^email$/i }) as HTMLInputElement
    const messageInput = screen.getByRole('textbox', { name: /^message$/i }) as HTMLTextAreaElement

    await user.type(nameInput, 'John Smith')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(nameInput.value).toBe('')
      expect(emailInput.value).toBe('')
      expect(messageInput.value).toBe('')
    })
  })

  it('should show error toast on submission failure', async () => {
    const user = userEvent.setup()
    const { toast } = await import('sonner')

    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false, message: 'Server error' }),
    })

    render(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringContaining('problem'),
        expect.any(Object)
      )
    })
  })

  it('should disable submit button while submitting', async () => {
    const user = userEvent.setup()
    mockFetch.mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ success: true })
      }), 100))
    )

    render(<Contact />)

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Button should show "Sending..." and be disabled
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
  })

  it('should handle phone field as optional', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact />)

    // Submit without phone number
    await user.type(screen.getByRole('textbox', { name: /^name$/i }), 'John Smith')
    await user.type(screen.getByRole('textbox', { name: /^email$/i }), 'john@example.com')
    await user.type(screen.getByRole('textbox', { name: /^message$/i }), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      const callArgs = mockFetch.mock.calls[0]
      const body = JSON.parse(callArgs[1].body)
      // Phone should be 'N/A' or empty string when not provided
      expect(body.phone).toMatch(/N\/A|/)
    })
  })

  it('should validate required fields before submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    // Try to submit empty form
    await user.click(screen.getByRole('button', { name: /send message/i }))

    // Should show validation errors (Zod validation)
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument()
    })

    // Fetch should not be called
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
