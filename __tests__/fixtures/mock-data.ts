export const mockTeamMembers = [
  {
    id: 1,
    name: 'William J. Word',
    title: 'Founder & CEO',
    image: '/images/team/william-word.jpg',
    bio: 'William J. Word is a visionary leader and community advocate dedicated to breaking barriers in men\'s mental health.',
    email: 'asafespaceformen@gmail.com'
  },
]

export const mockEvents = [
  {
    title: 'Men\'s Mental Health Workshop',
    date: '2025-08-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Detroit Community Center',
    description: 'Join us for an interactive workshop on stress management and emotional wellness.'
  },
]

export const mockTestimonials = [
  {
    quote: 'A Safe Space For Men helped me realize I wasn\'t alone in my struggles. The support group gave me tools I never knew I needed.',
    name: 'Marcus T.',
    role: 'Group Member'
  },
]

export const mockStats = [
  {
    percentage: '64%',
    description: 'of men are at risk of moderate-high stress',
    icon: '❤️'
  },
]

export const mockPartners = [
  { name: 'Detroit Mental Health Alliance', logo: '🤝' },
  { name: 'Michigan Men\'s Health Initiative', logo: '💪' },
  { name: 'Community Wellness Center', logo: '🏥' },
  { name: 'Barbershop Collective', logo: '✂️' },
  { name: 'Local Faith Communities', logo: '⛪' },
  { name: 'Detroit Therapy Network', logo: '🧠' }
]

// Navigation Mock Data
export const mockNavigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/join', label: 'Join Us' },
  { href: '/resources', label: 'Resources' },
  { href: '/events', label: 'Events' }
]

// Crisis Resources Mock Data
export const mockCrisisResources = {
  crisisLine: {
    number: '988',
    label: '988 Crisis Lifeline',
    href: 'tel:988'
  },
  emergency: {
    number: '911',
    label: 'Emergency: 911',
    href: 'tel:911'
  },
  textLine: {
    number: '741741',
    label: 'Crisis Text Line: HOME to 741741',
    instructions: 'Text HOME to 741741'
  }
}

// Test Environment Helpers
export const mockWindowLocation = (url = 'http://localhost:3000') => {
  const location = new URL(url)
  Object.defineProperty(window, 'location', {
    value: {
      href: location.href,
      origin: location.origin,
      protocol: location.protocol,
      host: location.host,
      hostname: location.hostname,
      port: location.port,
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      assign: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
    },
    writable: true,
  })
}

export const mockScrollBehavior = () => {
  window.scrollTo = jest.fn()
  Element.prototype.scrollIntoView = jest.fn()
}

