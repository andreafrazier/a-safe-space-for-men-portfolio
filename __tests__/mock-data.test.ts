import { mockEvents, mockTestimonials, mockStats } from './fixtures/mock-data'

describe('Mock Data', () => {
  it('imports mock events correctly', () => {
    expect(mockEvents).toBeDefined()
    expect(Array.isArray(mockEvents)).toBe(true)
    expect(mockEvents.length).toBeGreaterThan(0)
  })

  it('imports mock testimonials correctly', () => {
    expect(mockTestimonials).toBeDefined()
    expect(Array.isArray(mockTestimonials)).toBe(true)
    expect(mockTestimonials.length).toBeGreaterThan(0)
  })

  it('imports mock stats correctly', () => {
    expect(mockStats).toBeDefined()
    expect(Array.isArray(mockStats)).toBe(true)
    expect(mockStats.length).toBeGreaterThan(0)
  })

  it('mock data has expected structure', () => {
    const event = mockEvents[0]
    expect(event).toHaveProperty('title')
    expect(event).toHaveProperty('date')
    expect(event).toHaveProperty('time')
    expect(event).toHaveProperty('location')

    const testimonial = mockTestimonials[0]
    expect(testimonial).toHaveProperty('quote')
    expect(testimonial).toHaveProperty('name')
    expect(testimonial).toHaveProperty('role')
  })
})