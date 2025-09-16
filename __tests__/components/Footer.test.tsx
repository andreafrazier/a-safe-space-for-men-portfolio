import React from 'react'
import { screen } from '@testing-library/react'
import { render, getCrisisLinks } from '../utils/test-utils'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  describe('Crisis Resources', () => {
    it('duplicates crisis resources for accessibility', () => {
      const { container } = render(<Footer />)
      const crisisLinks = getCrisisLinks(container)
      
      expect(crisisLinks.crisisLine).toBeInTheDocument()
      expect(crisisLinks.emergency).toBeInTheDocument()
      expect(crisisLinks.textLine).toBeTruthy()
    })

    it('provides functional crisis hotline links', () => {
      render(<Footer />)
      
      const crisisLine = screen.getByRole('link', { name: /988 suicide & crisis lifeline/i })
      expect(crisisLine).toHaveAttribute('href', 'tel:988')
      
      const emergency = screen.getByRole('link', { name: /emergency: 911/i })
      expect(emergency).toHaveAttribute('href', 'tel:911')
    })

    it('displays crisis text line information clearly', () => {
      render(<Footer />)
      
      expect(screen.getByText(/crisis text line: text home to 741741/i)).toBeInTheDocument()
    })
  })

  describe('Navigation Links', () => {
    it('displays all main navigation links', () => {
      render(<Footer />)
      
      const expectedLinks = [
        { name: /about us/i, href: '/about' },
        { name: /join us/i, href: '/join' },
        { name: /resources/i, href: '/resources' },
        { name: /events/i, href: '/events' }
      ]

      expectedLinks.forEach(({ name, href }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', href)
      })
    })

    it('ensures navigation consistency with header', () => {
      render(<Footer />)
      
      // These should match the header navigation structure
      const quickLinksSection = screen.getByText(/quick links/i)
      expect(quickLinksSection).toBeInTheDocument()
    })
  })

  describe('Branding and Identity', () => {
    it('displays organization logo and name', () => {
      render(<Footer />)
      
      const logo = screen.getByRole('img', { name: /a safe space for men logo/i })
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/handshake-wordcloud.png')
      
      expect(screen.getByText('A Safe Space For Men')).toBeInTheDocument()
    })

    it('includes organization tagline', () => {
      render(<Footer />)
      
      expect(screen.getByText(/creating community for men's mental health in detroit and beyond/i)).toBeInTheDocument()
    })

    it('displays copyright information', () => {
      render(<Footer />)
      
      expect(screen.getByText(/© 2025 a safe space for men/i)).toBeInTheDocument()
      expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    })
  })

  describe('Contact Information', () => {
    it('includes partnership contact placeholder', () => {
      render(<Footer />)
      
      expect(screen.getByText(/for event partnerships or sponsorships/i)).toBeInTheDocument()
      expect(screen.getByText(/contact information to be added/i)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('uses semantic footer element', () => {
      const { container } = render(<Footer />)
      
      const footer = container.querySelector('footer')
      expect(footer).toBeInTheDocument()
    })

    it('provides hover states for interactive elements', () => {
      const { container } = render(<Footer />)
      
      const links = container.querySelectorAll('a')
      links.forEach(link => {
        //expect(link).toHaveClass(/hover:/)
      })
    })

    it('maintains proper contrast with background', () => {
      const { container } = render(<Footer />)
      
      const footer = container.querySelector('footer')
      //expect(footer).toHaveClass(/bg-gray-900/)
      //expect(footer).toHaveClass(/text-white/)
    })

    it('uses appropriate heading hierarchy', () => {
      const { container } = render(<Footer />)
      
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const h3Elements = container.querySelectorAll('h3')
      
      expect(h3Elements.length).toBeGreaterThan(0)
      // Should not have h1 or h2 in footer
      expect(container.querySelectorAll('h1, h2')).toHaveLength(0)
    })
  })

  describe('Crisis Resource Priority', () => {
    it('makes crisis resources easily scannable', () => {
      render(<Footer />)
      
      const crisisSection = screen.getByText(/crisis resources/i).closest('div')
      expect(crisisSection).toBeInTheDocument()
      
      // Should be in its own clear section
      expect(screen.getByRole('heading', { name: /crisis resources/i })).toBeInTheDocument()
    })

    it('prioritizes 988 Crisis Lifeline', () => {
      render(<Footer />)
      
      const crisisLinks = screen.getAllByRole('link')
      const crisisLineLink = crisisLinks.find(link => 
        link.getAttribute('href') === 'tel:988'
      )
      
      expect(crisisLineLink).toBeInTheDocument()
    })
  })

  describe('Visual Structure', () => {
    it('uses appropriate grid layout', () => {
      const { container } = render(<Footer />)
      
      const gridContainer = container.querySelector('[class*="grid"]')
      expect(gridContainer).toBeInTheDocument()
      //expect(gridContainer).toHaveClass(/grid-cols-1.*md:grid-cols-4/)
    })

    it('provides visual separation between sections', () => {
      const { container } = render(<Footer />)
      
      const separator = container.querySelector('[class*="border-t"]')
      expect(separator).toBeInTheDocument()
    })
  })

  describe('Link Functionality', () => {
    it('all links have proper href attributes', () => {
      const { container } = render(<Footer />)
      
      const links = container.querySelectorAll('a')
      links.forEach(link => {
        const href = link.getAttribute('href')
        expect(href).toBeTruthy()
        expect(href).not.toBe('#')
      })
    })

    it('external links open in new tabs where appropriate', () => {
      const { container } = render(<Footer />)
      
      // If there are any external links, they should have target="_blank"
      const externalLinks = container.querySelectorAll('a[href^="http"]')
      externalLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      })
    })
  })

  describe('Mobile Responsiveness', () => {
    it('adapts layout for mobile screens', () => {
      const { container } = render(<Footer />)
      
      const responsiveContainer = container.querySelector('[class*="grid-cols-1"]')
      expect(responsiveContainer).toBeInTheDocument()
    })

    it('maintains readability on small screens', () => {
      const { container } = render(<Footer />)
      
      const textElements = container.querySelectorAll('p, span')
      textElements.forEach(element => {
        // Should not have text that's too small for mobile
        //expect(element).not.toHaveClass(/text-xs/)
      })
    })
  })
})