import { render } from '@testing-library/react'

describe('Test Setup Verification', () => {
  it('Jest is working correctly', () => {
    expect(true).toBe(true)
  })

  it('can import React Testing Library', () => {
    expect(render).toBeDefined()
  })


  it('Jest DOM matchers are available', () => {
    const div = document.createElement('div')
    div.textContent = 'Hello World'
    document.body.appendChild(div)
    
    expect(div).toBeInTheDocument()
    expect(div).toHaveTextContent('Hello World')
  })

  it('Next.js mocks are working', () => {
    // Test that our mocks from jest.setup.js are working
    const { usePathname } = require('next/navigation')
    expect(usePathname).toBeDefined()
  })
})