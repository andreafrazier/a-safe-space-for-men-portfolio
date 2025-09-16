import React from 'react'
import { screen, within } from '@testing-library/react'
import { render } from '../utils/test-utils'
import HomePage from '@/app/page'

describe('HomePage Component', () => {
  describe('Hero Section', () => {
    it('renders the main hero content', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { level: 1, name: /empower your journey/i })).toBeInTheDocument()
      expect(screen.getByText(/together, we can break the stigma and foster hope/i)).toBeInTheDocument()
    })

    it('displays the mission statement prominently', () => {
      render(<HomePage />)
      
      const missionText = screen.getByText(/a safe space for men aims to foster resilience/i)
      expect(missionText).toBeInTheDocument()
    })

    it('includes call-to-action buttons', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('link', { name: /join our community/i })).toHaveAttribute('href', '/join')
      expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '/about')
    })

    it('displays the break the stigma image with proper alt text', () => {
      render(<HomePage />)
      
      const heroImage = screen.getByRole('img', { name: /break the stigma.*green awareness ribbon/i })
      expect(heroImage).toBeInTheDocument()
      expect(heroImage).toHaveAttribute('src', '/images/breakthestigma-green.png')
    })
  })

  describe('Mission Statement Section', () => {
    it('displays the complete mission statement', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument()
      expect(screen.getByText(/create a safe, supportive, and non-judgmental space/i)).toBeInTheDocument()
      expect(screen.getByText(/breaking down societal stigmas/i)).toBeInTheDocument()
    })
  })

  describe('Statistics Section', () => {
    it('displays mental health statistics', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /the reality we're addressing/i })).toBeInTheDocument()
      
      // Check for key statistics
      expect(screen.getByText('64%')).toBeInTheDocument()
      expect(screen.getByText(/moderate-high stress/i)).toBeInTheDocument()
      
      expect(screen.getByText('40%')).toBeInTheDocument()
      expect(screen.getByText(/never discussed their mental health/i)).toBeInTheDocument()
      
      expect(screen.getByText('4x')).toBeInTheDocument()
      expect(screen.getByText(/higher suicide rate than women/i)).toBeInTheDocument()
    })

    it('includes proper icons for statistics', () => {
      const { container } = render(<HomePage />)
      
      const statCards = container.querySelectorAll('[class*="bg-white"][class*="rounded-lg"]')
      expect(statCards.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Testimonials Section', () => {
    it('displays community testimonials', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /voices from our community/i })).toBeInTheDocument()
      
      // Check for testimonial content
      expect(screen.getByText(/helped me realize I wasn't alone/i)).toBeInTheDocument()
      expect(screen.getByText(/changed my perspective on vulnerability/i)).toBeInTheDocument()
      expect(screen.getByText(/literally saved my life/i)).toBeInTheDocument()
    })

    it('includes testimonial attribution', () => {
      render(<HomePage />)
      
      expect(screen.getByText('Marcus T.')).toBeInTheDocument()
      expect(screen.getByText('David L.')).toBeInTheDocument()
      expect(screen.getByText('James R.')).toBeInTheDocument()
    })
  })

  describe('Events Section', () => {
    it('displays upcoming events preview', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /view all events/i })).toHaveAttribute('href', '/events')
    })

    it('shows event details', () => {
      render(<HomePage />)
      
      // Check for sample events
      expect(screen.getByText(/mental health workshop/i)).toBeInTheDocument()
      expect(screen.getByText(/support group meeting/i)).toBeInTheDocument()
      expect(screen.getByText(/community wellness walk/i)).toBeInTheDocument()
    })

    it('includes event metadata', () => {
      render(<HomePage />)
      
      // Look for date and time patterns
      expect(screen.getByText(/august 15, 2025/i)).toBeInTheDocument()
      expect(screen.getByText(/6:00 PM - 8:00 PM/i)).toBeInTheDocument()
    })
  })

  describe('Community Partners Section', () => {
    it('displays partner organizations', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /community partners/i })).toBeInTheDocument()
      
      // Check for partner names
      expect(screen.getByText(/detroit mental health alliance/i)).toBeInTheDocument()
      expect(screen.getByText(/michigan men's health initiative/i)).toBeInTheDocument()
    })
  })

  describe('Donation Section', () => {
    it('displays donation call-to-action', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument()
      expect(screen.getByText(/your donation helps us create safe spaces/i)).toBeInTheDocument()
    })

    it('shows impact messaging', () => {
      render(<HomePage />)
      
      expect(screen.getByText('$25')).toBeInTheDocument()
      expect(screen.getByText(/supports one man attending a mental health workshop/i)).toBeInTheDocument()
      
      expect(screen.getByText('$50')).toBeInTheDocument()
      expect(screen.getByText('$100')).toBeInTheDocument()
      expect(screen.getByText('$250')).toBeInTheDocument()
    })

    it('includes tax-deductible notice', () => {
      render(<HomePage />)
      
      expect(screen.getByText(/501\(c\)\(3\) organization/i)).toBeInTheDocument()
      expect(screen.getByText(/tax-deductible/i)).toBeInTheDocument()
    })

    it('has donation section ID for anchor links', () => {
      const { container } = render(<HomePage />)
      
      const donationSection = container.querySelector('#donation')
      expect(donationSection).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const { container } = render(<HomePage />)
      
      // Should have exactly one h1
      const h1Elements = container.querySelectorAll('h1')
      expect(h1Elements).toHaveLength(1)
      expect(h1Elements[0]).toHaveTextContent(/empower your journey/i)
      
      // Should have multiple h2s for sections
      const h2Elements = container.querySelectorAll('h2')
      expect(h2Elements.length).toBeGreaterThan(3)
    })

    it('includes proper alt text for images', () => {
      render(<HomePage />)
      
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img.getAttribute('alt')).not.toBe('')
      })
    })

    it('uses semantic HTML for content sections', () => {
      const { container } = render(<HomePage />)
      
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(5)
    })

    it('provides accessible form elements in donation section', () => {
      render(<HomePage />)
      
      // DonationForm should be rendered with proper accessibility
      const donationSection = screen.getByText(/support our mission/i).closest('section')
      expect(donationSection).toBeInTheDocument()
    })
  })

  describe('Performance', () => {
    it('uses Next.js Image component for optimization', () => {
      render(<HomePage />)
      
      const optimizedImages = screen.getAllByTestId('next-image')
      expect(optimizedImages.length).toBeGreaterThan(0)
    })

    it('includes priority loading for hero image', () => {
      render(<HomePage />)
      
      const heroImage = screen.getByRole('img', { name: /break the stigma/i })
      expect(heroImage).toHaveAttribute('data-priority', 'true')
    })
  })

  describe('Links and Navigation', () => {
    it('all internal links point to correct pages', () => {
      render(<HomePage />)
      
      expect(screen.getByRole('link', { name: /join our community/i })).toHaveAttribute('href', '/join')
      expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '/about')
      expect(screen.getByRole('link', { name: /view all events/i })).toHaveAttribute('href', '/events')
    })

    it('donation anchor links work correctly', () => {
      render(<HomePage />)
      
      const donateLinks = screen.getAllByRole('link', { name: /donate/i })
      donateLinks.forEach(link => {
        expect(link.getAttribute('href')).toMatch(/#donation$/)
      })
    })
  })

  describe('Content Integrity', () => {
    it('displays consistent organization messaging', () => {
      render(<HomePage />)
      
      const orgName = screen.getAllByText(/a safe space for men/i)
      expect(orgName.length).toBeGreaterThan(0)
    })

    it('includes mental health focus throughout content', () => {
      render(<HomePage />)
      
      expect(screen.getByText(/mental health/i)).toBeInTheDocument()
      expect(screen.getByText(/emotional well-being/i)).toBeInTheDocument()
    })
  })
})