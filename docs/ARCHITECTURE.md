# Aeon8Web Architecture & Design

## Overview

**Aeon8Web** is a modern, production-grade marketing and sales website for Aeon8 Systems. It's built with:

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (utility-first)
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel-ready (or Docker)

---

## Technology Stack

### Core
| Layer | Technology | Purpose |
|-------|------------|---------|
| Runtime | Node.js 18+ | Server & CLI |
| Framework | Next.js 14 | React app framework |
| Language | TypeScript 5.4 | Type-safe JavaScript |
| Styling | Tailwind CSS 3.4 | Utility CSS |
| Package Mgr | npm | Dependency management |

### Development
| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| Jest | Unit testing |
| TypeScript | Type checking |

---

## Project Structure

```
Aeon8Web/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (/)
│   ├── api/                    # API routes (optional)
│   └── robots.txt              # SEO
│
├── components/                 # React Components
│   ├── sections/               # Page sections (reusable)
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Products.tsx       # Products section
│   │   ├── Fields.tsx         # Our Field section
│   │   ├── HowWeBuild.tsx     # Tech stack section
│   │   ├── Certifications.tsx # Certs section
│   │   └── Contact.tsx        # Contact section
│   │
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Ticker.tsx         # Top ticker
│   │   └── Footer.tsx         # Page footer
│   │
│   ├── common/                # Common UI blocks
│   │   ├── Card.tsx           # Reusable card component
│   │   ├── Grid.tsx           # Grid layout
│   │   └── Section.tsx        # Section wrapper
│   │
│   └── ui/                    # Atomic UI components
│       ├── Button.tsx         # Button component
│       ├── Badge.tsx          # Badge component
│       └── Input.tsx          # Form inputs
│
├── lib/                        # Utilities & Hooks
│   ├── hooks/                 # Custom React hooks
│   │   ├── useScroll.ts      # Scroll position hook
│   │   ├── useMobileMenu.ts  # Mobile menu state
│   │   └── useInView.ts      # Intersection observer
│   │
│   ├── utils/                # Helper functions
│   │   ├── cn.ts             # classname merger (Tailwind)
│   │   ├── formatters.ts     # Text/date formatters
│   │   └── validators.ts     # Input validators
│   │
│   └── api/                  # API utilities
│       ├── client.ts         # API client (if needed)
│       └── endpoints.ts      # API endpoints config
│
├── public/                    # Static assets
│   ├── images/               # Images, logos
│   ├── fonts/                # Custom fonts
│   └── icons/                # SVG icons
│
├── styles/                   # Global CSS
│   ├── globals.css          # Global Tailwind styles
│   └── animations.css       # Custom animations
│
├── config/                   # Configuration
│   ├── constants.ts         # App constants
│   ├── seo.ts              # SEO config
│   └── env.ts              # Environment variables (typed)
│
├── tests/                   # Test files
│   ├── __tests__/           # Jest test files
│   ├── fixtures/            # Test data
│   └── mocks/               # Mock data
│
├── docs/                    # Documentation
│   ├── SETUP.md            # Setup guide
│   ├── ARCHITECTURE.md     # This file
│   └── COMPONENT_GUIDE.md  # Component patterns
│
└── [config files]          # package.json, tsconfig, etc.
```

---

## Component Architecture

### Section Components

Large page sections that are self-contained:

```tsx
// components/sections/Hero.tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  title = 'Default Title',
  subtitle = 'Default subtitle'
}) => {
  return (
    <section className="min-h-screen bg-midnight pt-32 pb-20">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-dim mt-4">{subtitle}</p>
      <Button>Get Started</Button>
    </section>
  );
};
```

### Layout Components

Persistent UI across pages:

```tsx
// components/layout/Navbar.tsx
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-100 bg-navy border-b border-border">
      {/* Navbar content */}
    </nav>
  );
};
```

### UI Components

Atomic, reusable components:

```tsx
// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded transition-colors';
  const variants = {
    primary: 'bg-orange text-white hover:bg-odim',
    secondary: 'bg-transparent border border-teal text-teal hover:bg-teal hover:text-midnight',
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
```

---

## Styling System

### Color Palette

Defined in `tailwind.config.js`:

```js
colors: {
  midnight: '#050D1A',    // Background
  navy: '#0A192F',        // Dark backgrounds
  panel: '#0F2236',       // Cards/panels
  border: '#1B3A5C',      // Borders
  orange: '#F97316',      // Primary CTA
  odim: '#C05A10',        // Orange dimmed
  teal: '#00D4AA',        // Secondary/accent
  text: '#C9D1D9',        // Body text
  dim: '#7A8A9A',         // Dimmed text
  white: '#EEF2F7',       // Bright text
}
```

### Utility Classes

Use Tailwind utilities for everything:

```tsx
// Bad ❌
<div style={{ padding: '24px', background: '#050D1A' }}>

// Good ✅
<div className="p-6 bg-midnight">
```

### Responsive Design

Mobile-first approach:

```tsx
// xs (0px) → sm (640px) → md (768px) → lg (1024px) → xl (1280px) → 2xl (1536px)
<div className="p-4 sm:p-6 md:p-8 lg:p-12">
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    Responsive Title
  </h1>
</div>
```

---

## State Management

### Local Component State
Use `useState` for component-level state:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Custom Hooks
Extract reusable logic into hooks:

```tsx
// lib/hooks/useMobileMenu.ts
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  
  return { isOpen, toggle, close };
};
```

### URL State (Query Params)
Use Next.js router for page state:

```tsx
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/products?type=sentinel');
```

---

## Routing

Next.js App Router file-based routing:

```
app/
├── page.tsx              → /
├── about/page.tsx        → /about
├── products/page.tsx     → /products
└── api/
    └── contact/route.ts  → POST /api/contact
```

---

## Performance Optimization

### Code Splitting
Automatic with Next.js:
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/sections/Products'));
```

### Image Optimization
Use Next.js `Image` component:
```tsx
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="Aeon8 Logo"
  width={200}
  height={200}
/>
```

### CSS Optimization
Tailwind auto-purges unused styles in production.

---

## Testing Strategy

### Unit Tests
Test individual components:

```tsx
// tests/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Integration Tests
Test component interactions:

```tsx
// tests/__tests__/Navbar.test.tsx
describe('Navbar', () => {
  it('opens mobile menu on button click', () => {
    // Render, find button, click, assert menu is visible
  });
});
```

### E2E Tests (Future)
Use Playwright or Cypress for user flows.

---

## Environment Variables

Typed environment config:

```ts
// config/env.ts
export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  githubRepo: process.env.NEXT_PUBLIC_GITHUB_REPO || '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;
```

---

## Deployment

### Vercel (Recommended)
```bash
vercel deploy  # Automatic CI/CD
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
CMD ["npm", "start"]
```

---

## SEO & Meta Tags

Use Next.js Metadata API:

```tsx
// app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon8 Systems',
  description: 'Sovereign Cybersecurity & Kernel Engineering',
};

export default function Home() {
  // ...
}
```

---

## Security Considerations

- **CSP Headers**: Configured in `next.config.js`
- **XSS Protection**: React escapes content by default
- **CSRF**: Use SameSite cookies for forms
- **Env Vars**: Never expose secrets (use private env vars)

---

## Git Workflow

1. Create feature branch: `git checkout -b feat/component-name`
2. Make changes
3. Commit: `git commit -m "feat(scope): description"`
4. Push & create PR
5. Merge after review

---

## Debugging

### Development Server Logs
```bash
npm run dev
# Errors appear in terminal and browser console
```

### TypeScript Errors
```bash
npm run type-check
```

### Browser DevTools
- Inspect React components with React DevTools extension
- Check network tab for API calls
- Use Console tab for debugging

---

## Future Enhancements

- [ ] E2E testing with Playwright
- [ ] Dark/Light mode toggle
- [ ] Blog/CMS integration
- [ ] Analytics dashboard
- [ ] Multi-language support

---

## References

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
