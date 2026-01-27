# A Safe Space For Men

A community-driven website dedicated to breaking barriers in men's mental health, providing support groups, crisis resources, therapy networks, and advocacy in Detroit and beyond.

**Live Site**: [https://asafespaceformen.org](https://asafespaceformen.org)

**Repository**: [https://github.com/andreafrazier/a-safe-space-for-men](https://github.com/andreafrazier/a-safe-space-for-men) *(Private Repository)*

> **Note**: This is a private repository. A sanitized public version for portfolio purposes will be created separately.

---

## 🌟 Mission

Our mission is to create a safe, supportive, and non-judgmental space where men can openly explore and prioritize their emotional well-being. Through community support groups, mental health education, therapy referrals, and crisis intervention resources, we are dedicated to breaking down societal stigmas around vulnerability and emotional expression.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18.0.0 or higher (currently using v22.19.0)
- **npm** v9.0.0 or higher
- **Git**

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/andreafrazier/a-safe-space-for-men.git
   cd a-safe-space-for-men
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (App Router with Static Export)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Payments**: Stripe Checkout (via Netlify Functions)
- **Deployment**: Netlify
- **Testing**: Jest 29.7.0 + React Testing Library
- **Build Tool**: SWC (via @swc/jest)

---

## 📁 Project Structure

```
a-safe-space-for-men/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout with Header/Footer
│   │   ├── page.tsx                 # Homepage
│   │   │
│   │   ├── about/                   # ✅ About page
│   │   │   ├── AboutPageClient.tsx  # Client component
│   │   │   └── page.tsx             # About page wrapper
│   │   │
│   │   ├── start-here/              # ✅ Mental health triage & assessment
│   │   │   └── page.tsx             # Crisis triage, assessments, support options
│   │   │
│   │   ├── find-support/            # ✅ Mental health resource directory
│   │   │   └── page.tsx             # Searchable therapy & resource directory
│   │   │
│   │   ├── events/                  # ✅ Events listing and calendar
│   │   │   └── page.tsx             # Upcoming events, workshops, support groups
│   │   │
│   │   ├── join/                    # ✅ Community signup
│   │   │   └── page.tsx             # Join form with Netlify integration
│   │   │
│   │   ├── donate/                  # ✅ Donation form
│   │   │   └── page.tsx             # Stripe-powered donation with tracking
│   │   │
│   │   └── donation-success/        # ✅ Post-donation confirmation
│   │       └── page.tsx             # Success page with impact messaging
│   │
│   ├── components/
│   │   ├── forms/
│   │   │   ├── JoinUsForm.tsx       # ✅ Netlify Forms integration
│   │   │   └── DonationForm.tsx     # ✅ Stripe Checkout integration
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Main navigation with crisis resources
│   │   │   └── Footer.tsx           # Site footer with crisis hotlines
│   │   │
│   │   ├── pages/
│   │   │   ├── EventsPage.tsx       # Events page component
│   │   │   ├── FindSupportPage.tsx  # Find Support page component
│   │   │   ├── JoinUsPage.tsx       # Join Us page component
│   │   │   └── StartHerePage.tsx    # Start Here page component
│   │   │
│   │   ├── sections/
│   │   │   ├── SimpleBio.tsx        # Team member biography modal
│   │   │   ├── SimpleStats.tsx      # Statistics display component
│   │   │   └── TeamMemberCard.tsx   # Team member card
│   │   │
│   │   └── ui/
│   │       └── NavBar.tsx           # Navigation bar component
│   │
│   ├── data/
│   │   ├── about-data.ts            # Team and organizational data
│   │   └── events.ts                # Events data
│   │
│   └── types/
│       ├── about.ts                 # About page types
│       ├── events.ts                # Events types
│       └── modules.d.ts             # Module declarations
│
├── netlify/
│   └── functions/
│       └── stripe-create-checkout-session.mts  # ✅ Stripe Checkout handler
│
├── public/
│   ├── images/
│   │   ├── handshake-wordcloud.png  # 🎨 Partnership/cooperation branding
│   │   ├── breakthestigma-green.png # 🎨 Mental health awareness ribbon
│   │   ├── og-image.png             # Open Graph social image
│   │   ├── hero/                    # Hero section images
│   │   ├── team/                    # Team member photos
│   │   └── events/                  # Event photos
│   │
│   └── _forms.html                  # ✅ Netlify Forms endpoint
│
├── __tests__/                       # Test suite (expanding coverage)
├── jest.config.js                   # Jest configuration
├── jest.setup.js                    # Jest setup file
├── next.config.js                   # Next.js static export config
├── netlify.toml                     # Netlify deployment config
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## ✅ Core Features

### **Pages**

- ✅ **Homepage** - Hero section, mission statement, statistics, testimonials, donation CTA
- ✅ **About Page** - Team biographies, organizational values, mission story
- ✅ **Start Here** - Mental health triage with free assessments (depression, anxiety), personalized support recommendations
- ✅ **Find Support** - Comprehensive searchable directory of mental health resources, therapists, and support services
- ✅ **Events Page** - Upcoming workshops, support groups, community events with calendar integration
- ✅ **Join Page** - Community member signup with interest selection and availability preferences
- ✅ **Donate** - Secure donation form with one-time and monthly giving options
- ✅ **Donation Success** - Post-donation confirmation with impact messaging and next steps

### **Navigation & Layout**

- ✅ **Responsive Header** - Mobile-friendly navigation with priority crisis resources
- ✅ **Footer** - Site links, contact information, and prominent crisis hotlines
- ✅ **Mobile Menu** - Accessible hamburger navigation for all screen sizes
- ✅ **Crisis Banner** - Always-visible access to crisis support resources

**Navigation Structure:**

- Home
- About
- Start Here
- Find Support
- Join
- Events
- Donate (Button)

### **Forms & Integrations**

#### **Join Us Form** (Netlify Forms)

- Interest selection (support groups, volunteering, advocacy)
- Availability preferences
- Experience and motivation fields
- Email confirmation with next steps
- Spam protection via honeypot

#### **Donation Form** (Stripe Checkout via Netlify Functions)

- **Preset amounts**: $25, $50, $100, $250
- **Custom amount** option
- **Donation types**: One-time or monthly recurring
- **Source tracking** for analytics:
  - `?source=header-nav` - Header navigation donate button
  - `?source=homepage-donation` - Homepage donation section
  - `?source=join-upsell` - Join page donation upsell
  - `?source=direct` - Direct navigation (no referrer)
- Secure Stripe Checkout hosted page
- Success page with session data

### **Payment Processing Architecture**

#### **Netlify Functions Implementation**

The donation system uses **Netlify Serverless Functions** instead of Next.js API routes for better static site compatibility:

**Function Location**: `netlify/functions/stripe-create-checkout-session.mts`

**Key Features**:

- Lazy initialization of Stripe client
- Environment variable validation
- Support for both one-time and monthly donations
- Metadata tracking for analytics
- Success/cancel URL handling with query parameters

**Request Flow**:
```typescript
1. User submits donation form
2. DonationForm.tsx sends POST to Netlify Function
3. Function creates Stripe Checkout Session
4. User redirected to Stripe hosted checkout
5. After payment, redirected to /donation-success with:
   - amount
   - frequency (one-time/monthly)
   - source (tracking parameter)
   - session_id
```

**Environment Variables Required**:
```env
STRIPE_SECRET_KEY=sk_live_...           # Stripe secret key
NEXT_PUBLIC_SITE_URL=https://...        # Base URL for redirects
```

**Webhook Handler**: 

- File exists but not yet implemented
- Reserved for future donation confirmation automation

---

## 🎨 Branding Assets

### **Primary Logos**

1. **`handshake-wordcloud.png`**
   - Partnership and cooperation wordcloud
   - Key values: cooperate, connect, integrate, welcome, assist, bridge
   - Usage: Homepage hero, partnership materials, about page, social media

2. **`breakthestigma-green.png`**
   - Mental health awareness ribbon design
   - "Break the Stigma" messaging in organization green
   - Usage: Crisis resources, advocacy content, social media, event materials

### **Brand Colors**

- **Primary Green**: Mental health awareness, hope, growth
- **Supporting Colors**: Professional, accessible, warm
- **Crisis Red/Orange**: Emergency resources, urgent calls-to-action

### **Visual Identity**

- Clean, modern design
- Accessible contrast ratios (WCAG 2.1 AA compliant)
- Mobile-first responsive layouts
- Compassionate, non-clinical imagery

---

## 📝 Netlify Forms Implementation

### How It Works

Forms submit directly to Netlify's backend via the `_forms.html` endpoint:

```typescript
// From JoinUsForm.tsx
const formParams = new URLSearchParams();
formParams.append('form-name', 'join-us');
formParams.append('name', formData.name);
formParams.append('email', formData.email);
// ... add all form fields

const response = await fetch('/_forms.html', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: formParams.toString()
});
```

### Form Configuration

Static HTML form at `public/_forms.html`:

- `data-netlify="true"` attribute enables Netlify Forms
- `data-netlify-honeypot="bot-field"` provides spam protection
- Field names match TypeScript submission exactly

### Accessing Submissions

In Netlify dashboard:

1. Navigate to **Site Dashboard** → **Forms**
2. View all submissions in real-time
3. Configure email notifications for new submissions
4. Set up spam filtering rules
5. Export submissions as CSV for member management

---

## 💳 Stripe Integration Deep Dive

### Payment Flow Architecture

```
User Flow:
┌─────────────────┐
│  Donate Page    │
│  /donate        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ DonationForm    │
│ Captures:       │
│ - Amount        │
│ - Frequency     │
│ - Source param  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│ Netlify Function            │
│ stripe-create-checkout-     │
│ session.mts                 │
│                             │
│ - Validates input           │
│ - Creates Stripe session    │
│ - Returns checkout URL      │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────┐
│ Stripe Hosted   │
│ Checkout Page   │
│ (Secure PCI)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Payment Success │
│ /donation-      │
│ success?params  │
└─────────────────┘
```

### Netlify Function Implementation

**File**: `netlify/functions/stripe-create-checkout-session.mts`

**Key Features**:
```typescript
// Lazy Stripe initialization
let stripeInstance: Stripe | null = null;
function getStripeClient(): Stripe {
  if (stripeInstance) return stripeInstance;
  const secretKey = Netlify.env.get("STRIPE_SECRET_KEY");
  stripeInstance = new Stripe(secretKey, {
    apiVersion: "2025-08-27.basil",
    typescript: true,
  });
  return stripeInstance;
}

// Session creation for one-time donations
sessionParams = {
  payment_method_types: ["card", "link"],
  line_items: [{
    price_data: {
      currency: "usd",
      product_data: {
        name: "Donation to A Safe Space For Men",
        description: "Supporting men's mental health and wellness",
      },
      unit_amount: Math.round(amount * 100), // Cents
    },
    quantity: 1,
  }],
  mode: "payment",
  success_url: `${baseUrl}/donation-success?params`,
  cancel_url: `${baseUrl}/?donation=cancelled`,
  metadata: { donation_type, amount, source }
};

// Session creation for monthly subscriptions
sessionParams = {
  // ... similar structure
  mode: "subscription",
  line_items: [{
    price_data: {
      // ... product data
      recurring: { interval: "month" }
    }
  }]
};
```

### Donation Source Tracking

The donation form captures `source` query parameters for analytics:

| Source | URL | Context |
|--------|-----|---------|
| `header-nav` | `/donate?source=header-nav` | Header navigation donate button |
| `homepage-donation` | `/donate?source=homepage-donation` | Homepage donation section CTA |
| `join-upsell` | `/donate?source=join-upsell` | Join page donation upsell |
| `direct` | `/donate` (no param) | Direct navigation, bookmarks |

**Tracking Flow**:
```typescript
// 1. User clicks donate button with source parameter
<Link href="/donate?source=homepage-donation">Donate</Link>

// 2. DonationForm captures source on mount
const searchParams = useSearchParams();
const [donationSource, setDonationSource] = useState('direct');

useEffect(() => {
  const source = searchParams.get('source') || 'direct';
  setDonationSource(source);
}, [searchParams]);

// 3. Source passed to Stripe function
const response = await fetch('/.netlify/functions/stripe-create-checkout-session', {
  body: JSON.stringify({
    amount,
    donationType,
    source: donationSource  // Tracked in Stripe metadata
  })
});

// 4. Source included in success URL
success_url: `${baseUrl}/donation-success?amount=${amount}&frequency=one-time&source=${donationSource}`
```

### Testing Donations

**Stripe Test Cards**:
```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
3D Secure: 4000 0027 6000 3184

Expiration: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits
```

**Test Mode Environment**:
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

## 🚀 Deployment to Netlify

### Build Configuration

```toml
# netlify.toml
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NEXT_TELEMETRY_DISABLED = "1"
  NODE_VERSION = "22.19.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"
```

### Environment Variables

Set these in Netlify Dashboard → Site Settings → Environment Variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://asafespaceformen.org
```

### Deployment Steps

1. **Connect GitHub repository** to Netlify
2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Functions directory: `netlify/functions`
3. **Add environment variables** via dashboard
4. **Enable Netlify Forms** (automatically detected from `_forms.html`)
5. **Test Stripe** in test mode before going live
6. **Deploy!**

### Post-Deployment Checklist

- [ ] Test donation flow end-to-end
- [ ] Verify form submissions arrive in Netlify
- [ ] Confirm crisis resources links work
- [ ] Test mobile navigation
- [ ] Check all page metadata/SEO
- [ ] Verify source tracking in Stripe dashboard
- [ ] Test with Stripe test cards
- [ ] Switch to Stripe live keys when ready

---

## 🧪 Testing

### Available Test Commands

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage

# CI mode (no watch, coverage required)
npm run test:ci

# Specific test categories
npm run test:accessibility    # WCAG compliance tests
npm run test:integration      # Cross-component tests
npm run test:components       # Individual component tests
npm run test:crisis          # Crisis resource tests
npm run test:forms           # Form validation tests
```

### Testing Strategy

**Priority 1: Crisis-Critical Components**

- Header (crisis resource accessibility)
- Footer (emergency hotlines)
- Start Here page (assessment functionality)

**Priority 2: Financial Components**

- DonationForm (payment security)
- Donation success page (confirmation accuracy)
- Source tracking (analytics integrity)

**Priority 3: User Journeys**

- Homepage → Start Here → Find Support
- Homepage → Donate → Success
- Join form submission

### Coverage Goals

Configured in `jest.config.js`:

- **Global**: 70% coverage across all metrics (branches, functions, lines, statements)
- **Critical components**: 90%+ coverage
  - Header.tsx
  - Footer.tsx
  - DonationForm.tsx
  - StartHerePage.tsx

---

## 🛠️ Tools & Utilities

### QR Code Generator

**Location**: `tools/qr-generators/`

A standalone HTML utility for generating donation QR codes with embedded branding. Creates scannable QR codes with the organization's logo overlay for use in marketing materials, events, and fundraising campaigns.

#### Features

- **4 Pre-configured QR Codes**:
  - General Donation (`?source=qr-code-general`)
  - Event/Flyer (`?source=qr-code-event`)
  - Social Media (`?source=qr-code-social`)
  - Email Campaign (`?source=qr-code-email`)

- **Logo Embedding**: Handshake wordcloud logo centered with error correction for scanability
- **Source Tracking**: Each QR code includes unique source parameter for analytics
- **High Quality**: 512x512px PNG output suitable for print (up to 3-4 inches)
- **Offline Capable**: Uses local QRious library (no CDN dependencies)

#### How to Use

1. **Open the generator**:

```bash
   # Navigate to the tools directory
   cd tools/qr-generators
   
   # Open in browser (using local file server)
   # Example with VS Code Live Server extension or Python
   python -m http.server 5500
```

2. **Access in browser**:

```
   http://localhost:5500/tools/qr-generators/qr-code-generator.html
```

3. **Download QR codes**:
   - Click "Download QR Code" button under each QR code
   - Files save as: `Donate-QR-General.png`, `Donate-QR-Event.png`, etc.

4. **Test before use**:
   - Scan each QR code with your phone
   - Verify it redirects to: `asafespaceformen.org/donate?source=qr-code-[type]`
   - Confirm source parameter appears in URL

#### Files Structure
```
tools/qr-generators/
├── qr-code-generator.html       # Main generator interface
├── handshake-wordcloud.png      # Logo for embedding
├── libs/
│   └── qrious.min.js           # QR code generation library (local)
└── README.md                    # Tool-specific documentation
```

#### When to Regenerate QR Codes

Regenerate QR codes when:

- Donation URL changes
- Adding new campaign sources
- Logo/branding updates
- Creating campaign-specific QR codes

#### Technical Details

- **Library**: QRious 4.0.2 (local copy in `libs/`)
- **Error Correction**: Level H (30%) - allows logo overlay while maintaining scanability
- **Format**: PNG with transparent background option
- **Dependencies**: None (fully self-contained, works offline)

#### Troubleshooting

**QR codes not generating?**

- Ensure you're running via a local server (not opening HTML directly via file://)
- Check browser console for JavaScript errors
- Verify `libs/qrious.min.js` exists

**Logo not appearing?**

- Confirm `handshake-wordcloud.png` is in the same directory as HTML file
- Check browser console for image load errors
- QR codes will still generate without logo (fallback behavior)

**QR codes not scanning?**

- Test with multiple phones/apps
- Ensure adequate lighting when scanning
- Print size should be at least 1.5 inches square
- Verify logo isn't too large (should be <30% of QR area)

---

## 📞 Contact & Crisis Resources

### General Contact

- **Website**: [https://asafespaceformen.org](https://asafespaceformen.org)
- **Email**: <asafespaceformen@gmail.com>
- **Partnerships**: Contact via email above

### Crisis Resources (Available 24/7)

**Immediate Help**:

- **988 Suicide & Crisis Lifeline**: Call or text **988**
- **Crisis Text Line**: Text **HOME** to **741741**
- **Emergency**: Call **911**

**Crisis Resources Locations on Site**:

- Header navigation (Start Here link)
- Footer (prominent crisis section)
- Start Here page (comprehensive crisis triage)
- All pages (persistent access)

---

## 🤝 Contributing

### For Team Members

This is a private repository. Team members with access can contribute by:

1. **Clone the repository** (requires GitHub access)
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Write tests** for new functionality
4. **Commit changes** with clear messages
5. **Push to branch** (`git push origin feature/amazing-feature`)
6. **Open Pull Request** for review

### Development Guidelines

- Follow TypeScript best practices
- Write accessible HTML (WCAG 2.1 AA compliance)
- Test on mobile devices
- Include tests for critical functionality
- Maintain mental health content sensitivity
- Never commit API keys or secrets

### Content Guidelines

When adding mental health content:

- Use person-first language
- Avoid clinical jargon where possible
- Provide actionable next steps
- Include crisis resources prominently
- Be mindful of triggering content
- Cite sources for statistics

---

## 📋 Roadmap

### Current Quarter (Q1 2025)

- [ ] Expand test coverage to 75%+
- [ ] Implement Stripe webhook handler
- [ ] Add email confirmations for donations
- [ ] Create blog/articles section
- [ ] Expand Find Support directory
- [ ] Add event registration system

### Short-term (Q2 2025)

- [ ] Multi-language support (Spanish first)
- [ ] Automated weekly CSV reports for member intake
- [ ] Partner dashboard for resource providers
- [ ] Enhanced donation analytics
- [ ] Mobile app prototype

### Long-term Vision

- [ ] Peer support matching system
- [ ] Virtual support group platform
- [ ] Integration with Detroit healthcare systems
- [ ] AI-powered crisis triage (ethical implementation)
- [ ] Expanded assessment tools

---

## 🏆 Partnerships

**Current Partners**:

- **Henry Ford Health** - Healthcare integration
- **Meijer** - Community support
- **DWHIN** - Detroit Wellness and Health Integration Network
- **SafetyZone Behavioral Health** - Office space and clinical support

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🆘 If You're In Crisis

**If you or someone you know is in crisis:**

- **988 Suicide & Crisis Lifeline**: Call or text **988**
- **Crisis Text Line**: Text **HOME** to **741741**
- **Emergency**: Call **911**

**You are not alone. Help is available 24/7.**

These resources are free, confidential, and available to everyone. Trained counselors are ready to listen and provide support.

---

## 🙏 Acknowledgments

### Leadership Team

- **Founder & CEO**: William J. Word
- **Lead Developer**: Andrea Frazier

### Board & Advisory

- Darryl Woods
- Douglas Monds
- Michael Ross

### Community

- All the men who've trusted us with their stories
- Mental health professionals supporting our mission
- Detroit community partners and volunteers

---

**A Safe Space For Men** - Creating community for men's mental health in Detroit and beyond.

*Established 2024 | 501(c)(3) Nonprofit Organization*

*Documentation Last Updated: January 2025*
