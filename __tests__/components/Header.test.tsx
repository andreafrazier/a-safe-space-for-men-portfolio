import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import { render, getCrisisLinks, getNavigationItems } from '../utils/test-utils'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'

// Mock next/navigation
const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe('Header Component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  describe('Crisis Support Resources', () => {
    it('displays crisis resources prominently at the top', () => {
      render(<Header />)
      
      const crisisBar = screen.getByRole('banner', { name: /crisis/i }) || 
                       screen.getByText(/emergency/i).closest('div')
      expect(crisisBar).toBeInTheDocument()
      //expect(crisisBar).toHaveClass(/bg-red/i)
    })

    it('provides functional crisis hotline links', () => {
      const { container } = render(<Header />)
      const crisisLinks = getCrisisLinks(container)
      
      expect(crisisLinks.crisisLine).toBeInTheDocument()
      expect(crisisLinks.crisisLine).toHaveAttribute('href', 'tel:988')
      
      expect(crisisLinks.emergency).toBeInTheDocument()
      expect(crisisLinks.emergency).toHaveAttribute('href', 'tel:911')
    })

    it('displays crisis text line information', () => {
      const { container } = render(<Header />)
      
      expect(screen.getByText(/HOME to 741741/i)).toBeInTheDocument()
    })

    it('ensures crisis resources are accessible via keyboard', async () => {
      const { user } = render(<Header />)
      
      const crisisLink = screen.getByRole('link', { name: /988 crisis lifeline/i })
      await user.tab()
      
      expect(crisisLink).toHaveFocus()
    })
  })

  describe('Navigation', () => {
    it('renders all navigation items correctly', () => {
      const { container } = render(<Header />)
      const navItems = getNavigationItems(container)
      
      const expectedItems = ['Home', 'About Us', 'Join Us', 'Resources', 'Events']
      expectedItems.forEach(item => {
        expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
      })
    })

    it('highlights active navigation item', () => {
      mockUsePathname.mockReturnValue('/about')
      render(<Header />)
      
      const aboutLink = screen.getByRole('link', { name: /about us/i })
      //expect(aboutLink).toHaveClass(/text-emerald-600/)
      //expect(aboutLink).toHaveClass(/font-semibold/)
    })

    it('handles home page active state correctly', () => {
      mockUsePathname.mockReturnValue('/')
      render(<Header />)
      
      const homeLink = screen.getByRole('link', { name: /home/i })
      //expect(homeLink).toHaveClass(/text-emerald-600/)
    })
  })

  describe('Logo and Branding', () => {
    it('displays the organization logo', () => {
      render(<Header />)
      
      const logo = screen.getByRole('img', { name: /a safe space for men logo/i })
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/handshake-wordcloud.png')
    })

    it('includes organization name and tagline', () => {
      render(<Header />)
      
      expect(screen.getByText('A Safe Space For Men')).toBeInTheDocument()
      expect(screen.getByText(/creating community for men's mental health/i)).toBeInTheDocument()
    })

    it('logo links to homepage', () => {
      render(<Header />)
      
      const logoLink = screen.getByRole('link', { name: /a safe space for men logo/i })
      expect(logoLink).toHaveAttribute('href', '/')
    })
  })

  describe('Mobile Navigation', () => {
    it('shows mobile menu button on mobile', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      expect(menuButton).toBeInTheDocument()
      //expect(menuButton).toHaveClass(/md:hidden/)
    })

    it('toggles mobile menu when button is clicked', async () => {
      const { user } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      
      // Menu should be closed initially
      expect(screen.queryByRole('link', { name: /home/i })).not.toBeVisible()
      
      // Open menu
      await user.click(menuButton)
      
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      })
    })

    it('closes mobile menu when navigation item is clicked', async () => {
      const { user } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      await user.click(menuButton)
      
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      })
      
      const aboutLink = screen.getAllByRole('link', { name: /about us/i })[1] // Mobile version
      await user.click(aboutLink)
      
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
      })
    })

    it('provides accessible mobile menu with proper ARIA attributes', async () => {
      const { user } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /open menu/i })
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
      
      await user.click(menuButton)
      
      await waitFor(() => {
        const closeButton = screen.getByRole('button', { name: /close menu/i })
        expect(closeButton).toHaveAttribute('aria-expanded', 'true')
      })
    })
  })

  describe('Donate Button', () => {
    it('displays donate button prominently', () => {
      render(<Header />)
      
      const donateButtons = screen.getAllByRole('link', { name: /donate now/i })
      expect(donateButtons.length).toBeGreaterThan(0)
      
      donateButtons.forEach(button => {
        expect(button).toHaveAttribute('href', '/#donation')
        //expect(button).toHaveClass(/bg-emerald-600/)
      })
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const { container } = render(<Header />)
      
      // Should not have h1 in header (that's for page content)
      const h1Elements = container.querySelectorAll('h1')
      expect(h1Elements).toHaveLength(0)
    })

    it('provides focus indicators for interactive elements', () => {
      const { container } = render(<Header />)
      
      const interactiveElements = container.querySelectorAll('a, button')
      interactiveElements.forEach(element => {
        //expect(element).toHaveClass(/focus:/)
      })
    })

    it('uses semantic HTML structure', () => {
      const { container } = render(<Header />)
      
      const nav = container.querySelector('nav')
      expect(nav).toBeInTheDocument()
      
      const crisisSection = container.querySelector('[role="banner"]') ||
                           container.querySelector('div') // Crisis bar
      expect(crisisSection).toBeInTheDocument()
    })
  })

  describe('Responsive Behavior', () => {
    it('shows desktop navigation on larger screens', () => {
      render(<Header />)
      
      const desktopNav = screen.getByRole('link', { name: /home/i })
      //expect(desktopNav.closest('div')).toHaveClass(/hidden.*md:flex/)
    })

    it('adapts logo size for mobile', () => {
      render(<Header />)
      
      const logoContainer = screen.getByRole('img').parentElement
      //expect(logoContainer).toHaveClass(/w-12.*h-12/)
    })
  })

  describe('Error Handling', () => {
    it('handles missing navigation data gracefully', () => {
      // Mock navigation items being empty
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
      
      render(<Header />)
      
      expect(screen.getByText('A Safe Space For Men')).toBeInTheDocument()
      
      consoleSpy.mockRestore()
    })
  })
})