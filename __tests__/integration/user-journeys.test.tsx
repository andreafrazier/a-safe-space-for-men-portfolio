import React from 'react'
import { screen, waitFor, within } from '@testing-library/react'
import { render } from '../utils/test-utils'
import HomePage from '@/app/page'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mockScrollBehavior } from '../fixtures/mock-data'

// Mock Stripe
//jest.mock('@stripe/stripe-js')

// Mock Next.js navigation
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, replace: jest.fn(), prefetch: jest.fn() }),
  usePathname: () => '/',
  useSearchParams: () => ({ get: jest.fn() }),
}))

describe('Critical User Journeys', () => {
  beforeEach(() => {
    mockScrollBehavior()
    mockPush.mockClear()
    global.fetch = jest.fn()
  })

  describe('Crisis Support Access Journey', () => {
    it('provides immediate access to crisis resources from any page', async () => {
      const { user } = render(
        <div>
          <Header />
          <HomePage />
          <Footer />
        </div>
      )

      // Crisis resources should be immediately visible
      expect(screen.getByText(/emergency/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /988 crisis lifeline/i })).toBeVisible()
      expect(screen.getByRole('link', { name: /emergency: 911/i })).toBeVisible()

      // Should be keyboard accessible as first tab stop
      await user.tab()
      expect(document.activeElement).toHaveAttribute('href', 'tel:988')

      // Crisis resources should also be in footer
      const footer = screen.getByRole('contentinfo') || screen.getByText(/crisis resources/i).closest('footer')
      expect(footer).toBeInTheDocument()
      expect(within(footer as HTMLElement).getByRole('link', { name: /988/i })).toBeInTheDocument()
    })

    it('crisis phone links work correctly', async () => {
      const { user } = render(<Header />)

      const crisisLink = screen.getByRole('link', { name: /988 crisis lifeline/i })
      expect(crisisLink).toHaveAttribute('href', 'tel:988')

      const emergencyLink = screen.getByRole('link', { name: /emergency: 911/i })
      expect(emergencyLink).toHaveAttribute('href', 'tel:911')

      // Links should be clickable (in real scenario would open phone app)
      await user.click(crisisLink)
      // In test environment, just verify no errors occurred
      expect(crisisLink).toBeInTheDocument()
    })
  })

  describe('Community Joining Journey', () => {
    it('guides users from awareness to action', async () => {
      const { user } = render(<HomePage />)

      // Hero section should inspire action
      expect(screen.getByRole('heading', { level: 1, name: /empower your journey/i })).toBeInTheDocument()
      expect(screen.getByText(/together, we can break the stigma/i)).toBeInTheDocument()

      // Mission builds trust
      expect(screen.getByText(/safe, supportive, and non-judgmental space/i)).toBeInTheDocument()

      // Statistics create urgency
      expect(screen.getByText('64%')).toBeInTheDocument()
      expect(screen.getByText(/moderate-high stress/i)).toBeInTheDocument()

      // Testimonials build credibility
      expect(screen.getByText(/helped me realize I wasn't alone/i)).toBeInTheDocument()

      // Clear call to action
      const joinButton = screen.getByRole('link', { name: /join our community/i })
      expect(joinButton).toBeInTheDocument()
      expect(joinButton).toHaveAttribute('href', '/join')

      await user.click(joinButton)
      // Would navigate to join page in real app
    })

    it('provides multiple paths to joining', () => {
      render(
        <div>
          <Header />
          <HomePage />
        </div>
      )

      // Header navigation
      const headerJoinLink = screen.getByRole('link', { name: /join us/i })
      expect(headerJoinLink).toHaveAttribute('href', '/join')

      // Hero CTA
      const heroCTA = screen.getByRole('link', { name: /join our community/i })
      expect(heroCTA).toHaveAttribute('href', '/join')

      // Multiple opportunities to convert
      expect(screen.getAllByRole('link', { name: /join/i }).length).toBeGreaterThanOrEqual(2)
    })
  })

  //describe('Donation Flow Journey', () => {
    //it('motivates donation through impact storytelling', async () => {
      //const { user } = render(<HomePage />)

      // Scroll to donation section
      //const donationSection = screen.getByRole('heading', { name: /support our mission/i })
      //expect(donationSection).toBeInTheDocument()

      // Impact messaging should be clear
      //expect(screen.getByText('$25')).toBeInTheDocument()
      //expect(screen.getByText(/supports one man attending a mental health workshop/i)).toBeInTheDocument()

      //expect(screen.getByText('$50')).toBeInTheDocument()
      //expect(screen.getByText(/funds educational materials/i)).toBeInTheDocument()

      // Tax deductibility should be mentioned
      //expect(screen.getByText(/501\(c\)\(3\)/i)).toBeInTheDocument()
      //expect(screen.getByText(/tax-deductible/i)).toBeInTheDocument()
    //})

    //it('provides clear donation process', async () => {
      //global.fetch = jest.fn().mockResolvedValueOnce({
        //ok: true,
        //json: () => Promise.resolve({ sessionId: 'test-session' })
      //})

      //const { user } = render(<HomePage />)

      // Find and interact with donation form
      //const donationSection = screen.getByText(/support our mission/i).closest('section')
      //expect(donationSection).toBeInTheDocument()

      // Look for donation form elements within the section
      //const fiftyDollarButton = screen.getByRole('button', { name: '$50' })
      //expect(fiftyDollarButton).toBeInTheDocument()

      //await user.click(fiftyDollarButton)

      //const donateButton = screen.getByRole('button', { name: /donate/i })
      //await user.click(donateButton)

      // Should initiate Stripe process
      //await waitFor(() => {
        //expect(global.fetch).toHaveBeenCalledWith(
          //expect.stringContaining('/api/stripe'),
          //expect.objectContaining({
            //method: 'POST'
          //})
        //)
      //})
    //})
  //})

  describe('Information Discovery Journey', () => {
    it('allows users to learn about the organization', async () => {
      const { user } = render(<HomePage />)

      // Mission section provides core information
      expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument()
      expect(screen.getByText(/breaking down societal stigmas/i)).toBeInTheDocument()

      // Statistics provide context
      expect(screen.getByRole('heading', { name: /the reality we're addressing/i })).toBeInTheDocument()

      // Testimonials provide social proof
      expect(screen.getByRole('heading', { name: /voices from our community/i })).toBeInTheDocument()

      // Events show active community
      expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()

      // Partners show credibility
      expect(screen.getByRole('heading', { name: /community partners/i })).toBeInTheDocument()

      // Learn more CTA
      const learnMoreButton = screen.getByRole('link', { name: /learn more/i })
      expect(learnMoreButton).toHaveAttribute('href', '/about')
    })
  })

  describe('Mobile User Experience', () => {
    it('provides complete experience on mobile devices', async () => {
      const { user } = render(
        <div>
          <Header />
          <HomePage />
          <Footer />
        </div>
      )

      // Mobile menu should be accessible
      const menuButton = screen.getByRole('button', { name: /menu/i })
      expect(menuButton).toBeInTheDocument()

      await user.click(menuButton)

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      })

      // Crisis resources should still be prominent
      expect(screen.getByText(/emergency/i)).toBeInTheDocument()

      // Content should be readable
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

      // CTAs should be accessible
      expect(screen.getByRole('link', { name: /join our community/i })).toBeInTheDocument()
    })
  })

  describe('Navigation Consistency', () => {
    it('maintains consistent navigation across components', () => {
      render(
        <div>
          <Header />
          <Footer />
        </div>
      )

      // Header navigation
      const headerAbout = screen.getByRole('link', { name: /about us/i })
      expect(headerAbout).toHaveAttribute('href', '/about')

      // Footer should have matching navigation
      const footerLinks = screen.getAllByRole('link', { name: /about us/i })
      expect(footerLinks.length).toBeGreaterThanOrEqual(2)

      footerLinks.forEach(link => {
        expect(link).toHaveAttribute('href', '/about')
      })
    })

    it('provides working navigation to all main pages', () => {
      render(<Header />)

      const expectedPages = [
        { name: /home/i, href: '/' },
        { name: /about us/i, href: '/about' },
        { name: /join us/i, href: '/join' },
        { name: /resources/i, href: '/resources' },
        { name: /events/i, href: '/events' }
      ]

      expectedPages.forEach(({ name, href }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveAttribute('href', href)
      })
    })
  })

  describe('Error Handling Journey', () => {
    it('handles donation errors gracefully', async () => {
      global.fetch = jest.fn().mockRejectedValueOnce(new Error('Payment failed'))

      const { user } = render(<HomePage />)

      const fiftyDollarButton = screen.getByRole('button', { name: '$50' })
      await user.click(fiftyDollarButton)

      const donateButton = screen.getByRole('button', { name: /donate/i })
      await user.click(donateButton)

      await waitFor(() => {
        expect(screen.getByText(/error/i) || screen.getByText(/try again/i)).toBeInTheDocument()
      })

      // User should be able to retry
      expect(donateButton).not.toBeDisabled()
    })

    it('provides helpful error messages', async () => {
      const { user } = render(<HomePage />)

      // Try to donate without selecting amount
      const donateButton = screen.getByRole('button', { name: /donate/i })
      await user.click(donateButton)

      await waitFor(() => {
        const errorMessage = screen.getByText(/please select/i) || 
                            screen.getByText(/amount is required/i)
        expect(errorMessage).toBeInTheDocument()
        //expect(errorMessage).toHaveAttribute('role', 'alert') ||
        //expect(errorMessage).toHaveClass(/text-red/)
      })
    })
  })

  describe('Accessibility Journey', () => {
    it('supports complete keyboard navigation', async () => {
      const { user } = render(
        <div>
          <Header />
          <HomePage />
        </div>
      )

      // Start with crisis resources
      await user.tab()
      expect(document.activeElement).toHaveAttribute('href', 'tel:988')

      // Continue through navigation
      await user.tab()
      expect(document.activeElement).toHaveAttribute('href', 'tel:911')

      // Should reach main navigation
      await user.tab()
      const mainNavElement = document.activeElement
      expect(mainNavElement?.closest('nav')).toBeInTheDocument()

      // Should be able to navigate to main content
      let tabCount = 0
      while (tabCount < 10 && !document.activeElement?.textContent?.includes('Join Our Community')) {
        await user.tab()
        tabCount++
      }

      // Should find main CTA
      expect(document.activeElement?.textContent).toMatch(/Join|Learn|Donate/)
    })

    it('provides proper heading structure for screen readers', () => {
      render(<HomePage />)

      // Single H1
      const h1Elements = screen.getAllByRole('heading', { level: 1 })
      expect(h1Elements).toHaveLength(1)

      // Logical H2 structure
      const h2Elements = screen.getAllByRole('heading', { level: 2 })
      expect(h2Elements.length).toBeGreaterThan(4)

      // Each section should have a clear heading
      const sectionHeadings = [
        /our mission/i,
        /the reality we're addressing/i,
        /voices from our community/i,
        /upcoming events/i,
        /support our mission/i
      ]

      sectionHeadings.forEach(heading => {
        expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
      })
    })
  })

  describe('Performance and Loading', () => {
    it('loads critical content immediately', () => {
      render(<HomePage />)

      // Hero content should be immediately available
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getByText(/together, we can break the stigma/i)).toBeInTheDocument()

      // Crisis resources should be immediately available
      expect(screen.getByRole('link', { name: /988/i })).toBeInTheDocument()

      // Primary CTA should be visible
      expect(screen.getByRole('link', { name: /join our community/i })).toBeInTheDocument()
    })

    it('uses optimized images', () => {
      render(<HomePage />)

      const images = screen.getAllByRole('img')
      images.forEach(img => {
        // Next.js Image component should be used
        expect(img).toHaveAttribute('data-testid', 'next-image')
      })

      // Hero image should have priority loading
      const heroImage = screen.getByRole('img', { name: /break the stigma/i })
      expect(heroImage).toHaveAttribute('data-priority', 'true')
    })
  })

  describe('Cross-Component Integration', () => {
    it('maintains state consistency across components', async () => {
      const { user } = render(
        <div>
          <Header />
          <HomePage />
          <Footer />
        </div>
      )

      // Navigation should work from header
      const headerAbout = screen.getAllByRole('link', { name: /about us/i })[0]
      expect(headerAbout).toHaveAttribute('href', '/about')

      // Same navigation should exist in footer
      const footerAbout = screen.getAllByRole('link', { name: /about us/i }).find(link => 
        link.closest('footer')
      )
      expect(footerAbout).toHaveAttribute('href', '/about')

      // Crisis resources should be consistent
      const headerCrisis = screen.getAllByRole('link', { name: /988/i })[0]
      const footerCrisis = screen.getAllByRole('link', { name: /988/i }).find(link =>
        link.closest('footer')
      )

      expect(headerCrisis).toHaveAttribute('href', 'tel:988')
      expect(footerCrisis).toHaveAttribute('href', 'tel:988')
    })

    it('provides consistent branding across components', () => {
      render(
        <div>
          <Header />
          <Footer />
        </div>
      )

      // Logo should appear in both header and footer
      const logos = screen.getAllByRole('img', { name: /a safe space for men logo/i })
      expect(logos.length).toBeGreaterThanOrEqual(2)

      // Organization name should be consistent
      const orgNames = screen.getAllByText('A Safe Space For Men')
      expect(orgNames.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Social Proof and Trust Building', () => {
    it('builds trust through multiple touchpoints', () => {
      render(<HomePage />)

      // Statistics build credibility
      expect(screen.getByText('64%')).toBeInTheDocument()
      expect(screen.getByText('4x')).toBeInTheDocument()

      // Testimonials provide social proof
      const testimonials = [
        /helped me realize I wasn't alone/i,
        /changed my perspective on vulnerability/i,
        /literally saved my life/i
      ]

      testimonials.forEach(testimonial => {
        expect(screen.getByText(testimonial)).toBeInTheDocument()
      })

      // Partners show community support
      expect(screen.getByText(/detroit mental health alliance/i)).toBeInTheDocument()
      expect(screen.getByText(/michigan men's health initiative/i)).toBeInTheDocument()

      // Professional leadership
      expect(screen.getByText(/community partners/i)).toBeInTheDocument()
    })
  })

  describe('Call-to-Action Effectiveness', () => {
    it('provides clear next steps at every stage', () => {
      render(<HomePage />)

      // Primary CTA in hero
      expect(screen.getByRole('link', { name: /join our community/i })).toBeInTheDocument()

      // Secondary CTA for learning
      expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()

      // Events engagement
      expect(screen.getByRole('link', { name: /view all events/i })).toBeInTheDocument()

      // Donation CTA
      const donateButtons = screen.getAllByRole('link', { name: /donate/i })
      expect(donateButtons.length).toBeGreaterThanOrEqual(1)

      // Each CTA should have clear purpose and destination
      expect(screen.getByRole('link', { name: /join our community/i })).toHaveAttribute('href', '/join')
      expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '/about')
      expect(screen.getByRole('link', { name: /view all events/i })).toHaveAttribute('href', '/events')
    })
  })
})