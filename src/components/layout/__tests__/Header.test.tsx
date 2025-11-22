import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Header } from '../Header'

// Mock the scrollToSection utility
vi.mock('@/lib/scrollToSection', () => ({
  scrollToSection: vi.fn(() => Promise.resolve()),
}))

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Desktop Navigation', () => {
    it('renders all navigation links', () => {
      render(<Header />)

      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /testimonials/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    })

    it('prevents default link behavior when clicked', async () => {
      render(<Header />)

      const aboutLink = screen.getByRole('link', { name: /about/i })
      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })

      aboutLink.dispatchEvent(clickEvent)

      expect(clickEvent.defaultPrevented).toBe(true)
    })

    it('calls scrollToSection when navigation link clicked', async () => {
      const user = userEvent.setup()
      const { scrollToSection } = await import('@/lib/scrollToSection')

      render(<Header />)

      const aboutLink = screen.getByRole('link', { name: /about/i })
      await user.click(aboutLink)

      // Wait for async handler to complete
      await waitFor(() => {
        expect(scrollToSection).toHaveBeenCalledWith('#about')
      })
    })
  })

  describe('Mobile Navigation', () => {
    it('opens mobile menu when hamburger clicked', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(menuButton)

      // Sheet content should be visible (check for SheetDescription which is unique to menu)
      await waitFor(() => {
        expect(screen.getByText('Navigation & Contact')).toBeInTheDocument()
      })
    })

    it('renders navigation buttons inside mobile menu', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Open mobile menu
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(menuButton)

      // Check for navigation buttons (not links) inside the menu
      await waitFor(() => {
        const navButtons = screen.getAllByRole('button').filter(button =>
          ['About', 'Services', 'Gallery', 'Testimonials', 'Contact'].includes(button.textContent || '')
        )
        expect(navButtons).toHaveLength(5)
      })
    })

    it('closes mobile menu after navigation button clicked', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Open mobile menu
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(menuButton)

      // Wait for menu to open
      await waitFor(() => {
        expect(screen.getByText('Navigation & Contact')).toBeInTheDocument()
      })

      // Click a navigation button
      const aboutButton = screen.getByRole('button', { name: /about/i })
      await user.click(aboutButton)

      // Menu should close (SheetDescription should disappear)
      await waitFor(() => {
        expect(screen.queryByText('Navigation & Contact')).not.toBeInTheDocument()
      })
    })

    it('scrolls to section after mobile menu navigation', async () => {
      const user = userEvent.setup()
      const { scrollToSection } = await import('@/lib/scrollToSection')

      render(<Header />)

      // Open mobile menu
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(menuButton)

      await waitFor(() => {
        expect(screen.getByText('Navigation & Contact')).toBeInTheDocument()
      })

      // Click Gallery navigation button
      const galleryButton = screen.getByRole('button', { name: /gallery/i })
      await user.click(galleryButton)

      // scrollToSection should be called with the correct ID
      await waitFor(() => {
        expect(scrollToSection).toHaveBeenCalledWith('#gallery')
      })
    })

    it('delays scroll until after drawer close animation', async () => {
      const user = userEvent.setup()
      const { scrollToSection } = await import('@/lib/scrollToSection')

      // Track timing of calls
      const callTimes: number[] = []
      let drawerCloseTime = 0

      // Mock scrollToSection to record when it's called
      vi.mocked(scrollToSection).mockImplementation(() => {
        callTimes.push(Date.now())
        return Promise.resolve()
      })

      render(<Header />)

      // Open mobile menu
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(menuButton)

      await waitFor(() => {
        expect(screen.getByText('Navigation & Contact')).toBeInTheDocument()
      })

      // Record when we click (drawer starts closing)
      drawerCloseTime = Date.now()

      // Click navigation button
      const aboutButton = screen.getByRole('button', { name: /about/i })
      await user.click(aboutButton)

      // Wait for scrollToSection to be called
      await waitFor(() => {
        expect(scrollToSection).toHaveBeenCalled()
      })

      // Verify there was a delay between drawer close and scroll
      const scrollTime = callTimes[0]
      const delay = scrollTime - drawerCloseTime

      // Should wait at least 300ms for drawer animation
      expect(delay).toBeGreaterThanOrEqual(300)
    })
  })

  describe('Accessibility', () => {
    it('has accessible label for mobile menu button', () => {
      render(<Header />)

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
      expect(menuButton).toBeInTheDocument()
    })

    it('navigation has proper aria-label', () => {
      render(<Header />)

      const desktopNav = screen.getByRole('navigation', { name: /main/i })
      expect(desktopNav).toBeInTheDocument()
    })
  })
})
