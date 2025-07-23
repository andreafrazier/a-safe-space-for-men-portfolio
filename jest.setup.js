import '@testing-library/jest-dom'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  })),
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
    has: jest.fn(),
  })),
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>
  },
}))

// Mock Lucide React icons for consistent testing
jest.mock('lucide-react', () => ({
  Menu: () => <span data-testid="menu-icon">Menu</span>,
  X: () => <span data-testid="x-icon">X</span>,
  Heart: () => <span data-testid="heart-icon">Heart</span>,
  Users: () => <span data-testid="users-icon">Users</span>,
  Calendar: () => <span data-testid="calendar-icon">Calendar</span>,
  ArrowRight: () => <span data-testid="arrow-right-icon">ArrowRight</span>,
  Target: () => <span data-testid="target-icon">Target</span>,
  Building: () => <span data-testid="building-icon">Building</span>,
  Network: () => <span data-testid="network-icon">Network</span>,
  CheckCircle: () => <span data-testid="check-circle-icon">CheckCircle</span>,
}))

// Mock window.matchMedia for responsive design testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Global timeout for async operations
jest.setTimeout(10000)