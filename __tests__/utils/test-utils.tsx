import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock Stripe provider for donation testing
const MockStripeProvider = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="stripe-provider">{children}</div>
}

// Custom render function with common providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <MockStripeProvider>{children}</MockStripeProvider>
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

// Helper function to test crisis resource accessibility
export const testCrisisResourceAccess = async (getByRole: any) => {
  const crisisLine = getByRole('link', { name: /988 crisis lifeline/i })
  const emergency = getByRole('link', { name: /911 emergency/i })
  
  expect(crisisLine).toBeInTheDocument()
  expect(crisisLine).toHaveAttribute('href', 'tel:988')
  expect(emergency).toBeInTheDocument()
  expect(emergency).toHaveAttribute('href', 'tel:911')
  
  // Test that crisis resources are visible and accessible
  expect(crisisLine).toBeVisible()
  expect(emergency).toBeVisible()
  
  return { crisisLine, emergency }
}

// Helper function to test navigation accessibility
export const testNavigationAccessibility = async (container: HTMLElement) => {
  // Check for proper heading hierarchy
  const h1Elements = container.querySelectorAll('h1')
  expect(h1Elements).toHaveLength(1) // Should only have one h1
  
  // Check for navigation landmark
  const nav = container.querySelector('nav')
  expect(nav).toBeInTheDocument()
  
  // Check for main content area
  const main = container.querySelector('main')
  expect(main).toBeInTheDocument()
  
  return { nav, main }
}

// Helper function to test join us form functionality (non-Stripe)
export const testJoinFormInteraction = async (user: any, getByRole: any, getByLabelText: any) => {
  // Test basic form interaction without payment
  const nameInput = getByLabelText(/name/i)
  const emailInput = getByLabelText(/email/i)
  const submitButton = getByRole('button', { name: /join/i })
  
  await user.type(nameInput, 'John Doe')
  await user.type(emailInput, 'john@example.com')
  
  expect(submitButton).toBeInTheDocument()
  
  return { nameInput, emailInput, submitButton }
}

// Helper function to test mobile responsiveness
export const testMobileResponsiveness = (container: HTMLElement) => {
  // Check for mobile menu button
  const mobileMenuButton = container.querySelector('[aria-label*="menu"]')
  expect(mobileMenuButton).toBeInTheDocument()
  
  // Check for responsive classes (Tailwind)
  const responsiveElements = container.querySelectorAll('[class*="md:"], [class*="lg:"], [class*="sm:"]')
  expect(responsiveElements.length).toBeGreaterThan(0)
  
  return { mobileMenuButton }
}

// Helper function to test form validation
export const testFormValidation = async (user: any, getByRole: any, getByLabelText: any) => {
  const emailInput = getByLabelText(/email/i)
  const submitButton = getByRole('button', { name: /submit/i })
  
  // Test empty submission
  await user.click(submitButton)
  
  // Test invalid email
  await user.type(emailInput, 'invalid-email')
  await user.click(submitButton)
  
  // Test valid email
  await user.clear(emailInput)
  await user.type(emailInput, 'test@example.com')
  
  return { emailInput, submitButton }
}

// Helper function to test testimonial accessibility
export const testTestimonialAccessibility = (container: HTMLElement) => {
  const testimonials = container.querySelectorAll('[role="article"], blockquote')
  
  testimonials.forEach(testimonial => {
    // Check for proper citation
    const citation = testimonial.querySelector('cite')
    expect(citation).toBeInTheDocument()
  })
  
  return testimonials
}

// Helper function to test event listing accessibility
export const testEventAccessibility = (container: HTMLElement) => {
  const events = container.querySelectorAll('[role="article"]')
  
  events.forEach(event => {
    // Check for time elements
    const timeElement = event.querySelector('time')
    if (timeElement) {
      expect(timeElement).toHaveAttribute('datetime')
    }
    
    // Check for proper headings
    const heading = event.querySelector('h3, h4')
    expect(heading).toBeInTheDocument()
  })
  
  return events
}

// Helper function to simulate keyboard navigation
export const testKeyboardNavigation = async (user: any, container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  )
  
  // Tab through focusable elements
  for (let i = 0; i < Math.min(5, focusableElements.length); i++) {
    await user.tab()
  }
  
  return focusableElements
}

// Helper to check color contrast (simplified)
export const checkColorContrast = (element: HTMLElement) => {
  const styles = window.getComputedStyle(element)
  const backgroundColor = styles.backgroundColor
  const color = styles.color
  
  // Basic check - ensure colors are set
  expect(backgroundColor).toBeTruthy()
  expect(color).toBeTruthy()
  
  return { backgroundColor, color }
}

// Mental health specific test data
export const testData = {
  crisisResources: {
    lifeline: '988',
    emergency: '911',
    textLine: 'HOME to 741741'
  },
  
  testimonials: [
    {
      quote: "A Safe Space For Men helped me realize I wasn't alone in my struggles.",
      name: "Test User 1",
      role: "Group Member"
    },
    {
      quote: "Finding this community changed my perspective on vulnerability.",
      name: "Test User 2", 
      role: "Workshop Participant"
    }
  ],
  
  events: [
    {
      title: "Men's Mental Health Workshop",
      date: "2025-08-15",
      time: "6:00 PM - 8:00 PM",
      location: "Detroit Community Center"
    }
  ],
  
  donationAmounts: [25, 50, 100, 250], // For future use when Stripe is implemented
  
  teamMembers: [
    {
      name: "William J. Word",
      title: "Founder & CEO",
      image: "/images/team/william-word.jpg"
    }
  ]
}

// Async utilities
export const waitForLoadingToFinish = () => {
  return new Promise(resolve => setTimeout(resolve, 100))
}

// Export everything including the custom render
export * from '@testing-library/react'
export { customRender as render, userEvent }