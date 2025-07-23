// __tests__/components/Header.test.tsx - Priority test for crisis support accessibility

import { render, screen, userEvent, testCrisisResourceAccess, testNavigationAccessibility, testMobileResponsiveness } from '@tests/utils/test-utils'
import Header from '@/components/layout/Header'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header Component - Crisis Support Priority', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('🚨 CRITICAL: Crisis Resources Accessibility', () => {
    it('displays crisis resources prominently at the top', () => {
      const { container } = render(<Header />)
      
      // Find the crisis bar directly by its classes
      const crisisBar = container.querySelector('.bg-red-600.text-white.fixed')
      expect(crisisBar).toBeInTheDocument()
      expect(crisisBar).toHaveClass('bg-red-600', 'text-white', 'fixed', 'w-full', 'top-0', 'z-50')
      
      // Verify crisis content is present
      expect(screen.getByText(/Emergency:/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /988 crisis lifeline/i })).toBeInTheDocument()
    })

    it('provides immediate access to crisis hotlines', async () => {
      render(<Header />)
      
      await testCrisisResourceAccess(screen.getByRole)
    })

    it('displays crisis text line information clearly', () => {
      render(<Header />)
      
      expect(screen.getByText(/Crisis Text:/i)).toBeInTheDocument()
      expect(screen.getByText(/HOME to 741741/i)).toBeInTheDocument()
    })

    it('uses proper semantic HTML for screen readers', () => {
      render(<Header />)
      
      const crisisLinks = screen.getAllByRole('link')
      const phoneLinks = crisisLinks.filter(link => 
        link.getAttribute('href')?.startsWith('tel:')
      )
      
      expect(phoneLinks.length).toBeGreaterThanOrEqual(2) // 988 and 911
    })

    it('maintains crisis resource visibility on mobile', () => {
      const { container } = render(<Header />)
      
      // Crisis bar should remain visible on mobile
      const crisisBar = container.querySelector('.bg-red-600')
      expect(crisisBar).toBeInTheDocument()
      expect(crisisBar).toHaveClass('fixed', 'w-full', 'top-0')
    })
  })

  describe('Navigation Functionality', () => {
    it('renders all main navigation items', () => {
      render(<Header />)
      
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /join us/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /resources/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /events/i })).toBeInTheDocument()
    })

    it('highlights active navigation state correctly', () => {
      render(<Header />)
      
      const homeLink = screen.getByRole('link', { name: /home/i })
      expect(homeLink).toHaveClass('text-emerald-600', 'font-semibold')
    })

    it('displays organization logo and branding prominently', () => {
      render(<Header />)
      
      const logo = screen.getByRole('img', { name: /a safe space for men logo/i })
      expect(logo).toBeInTheDocument()
      
      const orgName = screen.getByText('A Safe Space For Men')
      expect(orgName).toBeInTheDocument()
      expect(orgName).toHaveClass('font-bold', 'text-xl')
    })

    it('includes prominent donation call-to-action', () => {
      render(<Header />)
      
      const donateButton = screen.getByRole('link', { name: /donate now/i })
      expect(donateButton).toBeInTheDocument()
      expect(donateButton).toHaveClass('bg-emerald-600')
      expect(donateButton).toHaveAttribute('href', '/#donation')
    })
  })

  describe('Mobile Experience', () => {
    it('provides accessible mobile menu', async () => {
      const { container } = render(<Header />)
      
      const { mobileMenuButton } = testMobileResponsiveness(container)
      expect(mobileMenuButton).toBeInTheDocument()
    })

    it('toggles mobile menu correctly', async () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      await user.click(menuButton)
      
      // Menu should be visible
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      
      // All navigation items should be visible in mobile menu
      expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2) // Desktop + mobile
    })

    it('closes mobile menu when navigation item is clicked', async () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      await user.click(menuButton)
      
      const mobileHomeLink = screen.getAllByRole('link', { name: /home/i })[1] // Mobile version
      await user.click(mobileHomeLink)
      
      // Menu should close - check that close button is no longer visible
      expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    })

    it('maintains crisis resources visibility in mobile menu', async () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      await user.click(menuButton)
      
      // Crisis resources should still be visible even when mobile menu is open
      await testCrisisResourceAccess(screen.getByRole)
    })
  })

  describe('Accessibility Compliance', () => {
    it('maintains proper heading hierarchy', () => {
      const { container } = render(<Header />)
      
      // Header should not contain h1 (that's for page content)
      const h1Elements = container.querySelectorAll('h1')
      expect(h1Elements).toHaveLength(0)
    })

    it('provides proper ARIA labels for interactive elements', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button')
      expect(menuButton).toHaveAttribute('aria-label')
      expect(menuButton).toHaveAttribute('aria-expanded')
    })

    it('ensures sufficient color contrast for crisis resources', () => {
      const { container } = render(<Header />)
      
      // Find the crisis bar with red background
      const crisisBar = container.querySelector('.bg-red-600')
      expect(crisisBar).toBeInTheDocument()
      expect(crisisBar).toHaveClass('bg-red-600', 'text-white')
      
      // Verify the crisis content is visible
      const emergencyText = screen.getByText(/Emergency:/i)
      expect(emergencyText).toBeInTheDocument()
      expect(emergencyText).toBeVisible()
      
      // Check that crisis links have proper contrast
      const crisisLine = screen.getByRole('link', { name: /988 crisis lifeline/i })
      expect(crisisLine).toBeInTheDocument()
      expect(crisisLine).toBeVisible()
    })

    it('supports keyboard navigation through crisis resources', async () => {
      render(<Header />)
      
      // Crisis resources should be first in tab order
      const crisisLinks = screen.getAllByRole('link').filter(link => 
        link.getAttribute('href')?.startsWith('tel:')
      )
      
      // Tab to first crisis resource
      await user.tab()
      expect(crisisLinks[0]).toHaveFocus()
    })

    it('uses high contrast colors for crisis resources visibility', () => {
      const { container } = render(<Header />)
      
      const crisisBar = container.querySelector('.bg-red-600')
      expect(crisisBar).toBeInTheDocument()
      expect(crisisBar).toHaveClass('bg-red-600', 'text-white')
    })
  })

  describe('Performance and Loading', () => {
    it('renders crisis resources immediately without delay', () => {
      const startTime = performance.now()
      render(<Header />)
      
      // Crisis resources should be available immediately
      expect(screen.getByText(/Emergency:/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /988 crisis lifeline/i })).toBeInTheDocument()
      
      const endTime = performance.now()
      expect(endTime - startTime).toBeLessThan(100) // Should render very quickly
    })

    it('loads without JavaScript errors', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
      
      render(<Header />)
      
      expect(consoleSpy).not.toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('Content Accuracy', () => {
    it('displays correct crisis hotline numbers', () => {
      render(<Header />)
      
      // Verify exact crisis contact information
      expect(screen.getByRole('link', { name: /988 crisis lifeline/i }))
        .toHaveAttribute('href', 'tel:988')
      expect(screen.getByRole('link', { name: /911 emergency/i }))
        .toHaveAttribute('href', 'tel:911')
      expect(screen.getByText(/HOME to 741741/i)).toBeInTheDocument()
    })

    it('displays organization mission clearly', () => {
      render(<Header />)
      
      expect(screen.getByText('A Safe Space For Men')).toBeInTheDocument()
      expect(screen.getByText(/creating community for men's mental health/i)).toBeInTheDocument()
    })
  })
})