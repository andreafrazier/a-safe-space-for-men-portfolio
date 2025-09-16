import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock Stripe provider for donation testing
//const MockStripeProvider = ({ children }: { children: React.ReactNode }) => {
  //return <div data-testid="stripe-provider">{children}</div>
//}

// Custom render function with common providers
const AllTheProviders = ({ children } : { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: AllTheProviders, ...options })
})

export * from '@testing-library/react'
export { customRender as render }

// Common test utilities
export const createMockEvent = (overrides = {}) => ({
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  target: { value: '' },
  currentTarget: { value: ''},
  ...overrides,
})

// Helper for testing accessibility
export const getByTestId = (container: HTMLElement, testId: string) => {
  return container.querySelector(`[data-testid="${testId}"]`)
}

// Helper for testing crisis resources
export const getCrisisLinks = (container: HTMLElement) => {
  return {
    crisisLine: container.querySelector('a[href="tel:988"]'),
    emergency: container.querySelector('a[href="tel:911"]'),
    textLine: container.querySelector('[data-testid="crisis-text"]') || 
               container.textContent?.includes('741741'),
  }
}

// Helper for testing navigation
export const getNavigationItems = (container: HTMLElement) => {
  const nav = container.querySelector('nav')
  if (!nav) return []
  
  return Array.from(nav.querySelectorAll('a')).map(link => ({
    text: link.textContent,
    href: link.getAttribute('href'),
    element: link,
  }))
}

// Helper for testing form validation
export const fillForm = async (
  user: ReturnType<typeof userEvent.setup>,
  form: HTMLElement,
  data: Record<string, string>
) => {
  for (const [name, value] of Object.entries(data)) {
    const field = form.querySelector(`[name="${name}"]`) as HTMLInputElement
    if (field) {
      await user.clear(field)
      if (value) {
        await user.type(field, value)
      }
    }
  }
}

// Mock data for testing
export const mockTeamMember = {
  id: 1,
  name: 'Test Member',
  title: 'Test Title',
  image: '/test-image.jpg',
  bio: 'Test biography content.',
  email: 'test@example.com'
}

export const mockEvent = {
  title: 'Test Event',
  date: '2024-12-15',
  time: '6:00 PM - 8:00 PM',
  location: 'Test Location',
  description: 'Test event description'
}

export const mockTestimonial = {
  quote: 'Test testimonial quote',
  name: 'Test Name',
  role: 'Test Role'
}

// Helper for responsive testing
export const setViewport = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 768,
  })
  window.dispatchEvent(new Event('resize'))
}

// Helper for testing loading states
export const waitForLoadingToFinish = async () => {
  const { waitForElementToBeRemoved } = await import('@testing-library/react')
  try {
    await waitForElementToBeRemoved(
      () => document.querySelector('[data-testid="loading"]'),
      { timeout: 3000 }
    )
  } catch {
    // Loading element might not exist, which is fine
  }
}

// Helper for testing error states
export const mockConsoleError = () => {
  const originalError = console.error
  const mockError = jest.fn()
  console.error = mockError
  
  return {
    mockError,
    restore: () => {
      console.error = originalError
    }
  }
}