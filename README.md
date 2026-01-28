# A Safe Space For Men - Mental Health Platform

A comprehensive mental health support platform built for a Detroit-based 501(c)(3) nonprofit focused on men's mental health and suicide prevention.

## 🎯 Project Overview

This platform serves as the digital front door for men seeking mental health support, providing immediate access to crisis resources, community connection opportunities, and educational content. Built with a focus on accessibility, testing, and user experience.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Jest + React Testing Library (70%+ coverage)
- **Payments:** Stripe (one-time and recurring donations)
- **Forms:** Netlify Forms
- **Deployment:** Netlify with automatic deployments
- **Analytics:** Google Analytics 4

## ✨ Key Features

### Crisis Support

- 24/7 accessible crisis resources in header and footer
- Direct phone links (tel: protocol) for immediate help
- Mobile-optimized emergency access
- WCAG 2.1 AA compliant for accessibility

### Community Features

- Event management and registration
- Member onboarding with custom forms
- Testimonials and impact stories
- Partner organization showcase

### Donation System

- Stripe integration for secure payments
- One-time and monthly recurring donations
- Custom amount support with presets
- Source tracking for campaign analytics
- Social sharing on donation success

### Technical Excellence

- Comprehensive test suite (70%+ coverage across all metrics)
- Server-side rendering for performance
- Progressive enhancement approach
- Responsive design (mobile-first)
- SEO optimized with dynamic metadata

## 📊 Test Coverage

Statements   : 70%+
Branches     : 70%+
Functions    : 70%+
Lines        : 70%+

Critical paths (Header, Footer, Crisis Resources, Donation Flow) maintain 85-90%+ coverage.

## 🏗️ Architecture Decisions

### Component Organization

- **UI Components:** Reusable, atomic design system
- **Layout Components:** Navigation, Header, Footer with consistent crisis access
- **Page Components:** Feature-specific components with clear responsibilities
- **Forms:** Separated with comprehensive validation and error handling

### Testing Strategy

- **Unit Tests:** All components with user interaction
- **Integration Tests:** Critical user journeys (donation flow, crisis access, community joining)
- **Accessibility Tests:** WCAG compliance verification
- **Mobile Tests:** Touch targets, responsive behavior

### Performance

- Next.js Image optimization for all media
- Static site generation where possible
- API route optimization
- Lazy loading for non-critical components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/andreafrazier/a-safe-space-for-men-portfolio.git
cd a-safe-space-for-men-portfolio

# Install dependencies
npm install

# Set up environment variables (see .env.local.example)
cp .env.local.example .env.local
# Edit .env.local with your keys

# Run development server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build
```

### Environment Variables

```bash
# Stripe (use test keys for development)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...

# Airtable (optional, for events management)
AIRTABLE_API_KEY=key...
AIRTABLE_BASE_ID=app...
```

## 📁 Project Structure

src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page with team bios
│   ├── events/            # Events listing
│   ├── join/              # Community onboarding
│   ├── resources/         # Mental health resources
│   └── api/               # API routes (Stripe, forms)
├── components/
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components with validation
│   ├── layout/            # Navigation, Header, Footer
│   ├── sections/          # Page sections (Hero, Stats, etc.)
│   └── common/            # Shared utilities (Crisis Banner, etc.)
├── lib/                   # Utilities and configurations
├── types/                 # TypeScript type definitions
├── data/                  # Static data (team, events, resources)
└── hooks/                 # Custom React hooks

__tests**/                 # Comprehensive test suite
├── components/            # Component tests
├── integration/           # User journey tests
├── accessibility/         # WCAG compliance tests
└── fixtures/              # Mock data for testing

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Specific test file
npm test Header.test.tsx
```

### Testing Philosophy

- **Mental health sensitivity:** Crisis resources tested exhaustively
- **User-centered:** Tests written from user perspective, not implementation
- **Accessibility-first:** All interactive elements verified for keyboard and screen reader access
- **Mobile-responsive:** Touch targets and mobile user flows thoroughly tested

## 🎨 Design System

- **Colors:** Green ribbon theme (mental health awareness), professional blues
- **Typography:** System fonts for performance, clear hierarchy
- **Spacing:** Consistent 8px grid system
- **Breakpoints:** Mobile-first responsive design
- **Accessibility:** WCAG 2.1 AA compliant (minimum 4.5:1 contrast ratios)

## 📈 Performance

- Lighthouse Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## 🔒 Security

- Environment variables never committed
- Stripe keys stored securely
- HTTPS enforced
- Content Security Policy configured
- Form validation and sanitization

## 🤝 Deployment

- **Platform:** Netlify
- **Branch:** Automatic deployments from `main`
- **Build Command:** `npm run build`
- **Environment Variables:** Configured in Netlify dashboard
- **Forms:** Netlify Forms integration for submissions

## 📝 Future Enhancements

- Newsletter integration (Mailchimp/ConvertKit)
- Event RSVP system
- Member dashboard
- Blog/resource library CMS integration
- Automated weekly reporting

## 👤 About the Developer

This project showcases full-stack development capabilities including:

- Modern React/Next.js architecture
- Comprehensive testing strategies
- Payment system integration
- Accessibility compliance
- Process and documentation for enterprise environments

**Andrea Frazier** - Technical PM & Full-Stack Developer

- Portfolio: [https://www.andreafrazier.dev]
- LinkedIn: [https://linkedin.com/in/andreafrazier]
- GitHub: [https://github.com/andreafrazier]

## 📄 License

[Specify your license - MIT, GPL, etc.]

## 🙏 Acknowledgments

Built for **A Safe Space For Men**, a Detroit-based nonprofit dedicated to men's mental health and suicide prevention.

Partner organizations: Henry Ford Health, Meijer, DWHIN, SafetyZone Behavioral Health Urgent Care
