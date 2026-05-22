# Aeon8Web

**Modern, Production-Grade Marketing & Sales Website for Aeon8 Systems**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Apache%202.0-green)](LICENSE)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/try2hk/Aeon8Web.git
cd Aeon8Web

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 📋 What's Included

### ✨ Features
- **Responsive Design** — Mobile-first, works on all devices
- **Dark Theme** — Enterprise-grade dark UI
- **Type-Safe** — Full TypeScript support (strict mode)
- **Performance** — Optimized with Next.js & Tailwind
- **SEO Ready** — Meta tags, structured data
- **Accessibility** — WCAG compliant
- **Testing** — Jest + React Testing Library configured

### 🎨 Sections
- **Hero** — Eye-catching introduction with stats
- **About** — Company overview and mission
- **Products** — Aeon Sentinel & Aeon8 Academy
- **Fields** — 6 operational domains
- **Tech Stack** — Engineering philosophy & tools
- **Certifications** — Global industry certifications
- **Contact** — Multi-channel inquiry forms

### 🛠️ Tech Stack
```
Frontend:    Next.js 14 + React 18 + TypeScript
Styling:     Tailwind CSS 3.4 + PostCSS
Testing:     Jest + React Testing Library
Linting:     ESLint + Prettier
Deployment:  Vercel-ready, Docker support
```

---

## 📁 Project Structure

```
Aeon8Web/
├── app/                  # Next.js pages & layouts
├── components/
│   ├── sections/        # Page sections
│   ├── layout/          # Navbar, Footer, Ticker
│   ├── common/          # Reusable UI blocks
│   └── ui/              # Atomic components
├── lib/
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   └── api/             # API utilities
├── public/
│   ├── images/          # Logos, illustrations
│   ├── fonts/           # Custom typefaces
│   └── icons/           # SVG icons
├── styles/              # Global CSS
├── config/              # Constants & config
├── tests/               # Jest test files
├── docs/                # Documentation
└── [config files]
```

See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed structure.

---

## 🔧 Development

### Available Commands

```bash
npm run dev              # Start dev server (port 3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types
npm run test             # Run Jest tests
npm run test:watch       # Run tests in watch mode
```

### Writing Code

**Create a new component**:
```tsx
// components/sections/MySection.tsx
import React from 'react';

export const MySection: React.FC = () => {
	return (
		<section className="bg-midnight min-h-screen p-8">
			<h2 className="text-3xl font-bold text-white">My Section</h2>
		</section>
	);
};
```

**Style with Tailwind**:
```tsx
// ✅ Do this
<div className="bg-midnight border border-teal rounded-lg p-6">

// ❌ Not this
<div style={{ background: '#050D1A', border: '1px solid #00D4AA' }}>
```

**Use custom hooks**:
```tsx
import { useScroll } from '@/lib/hooks/useScroll';

export const MyComponent = () => {
	const isScrolled = useScroll();
	// ...
};
```

---

## 🎯 Component Guidelines

### Naming
- **Components**: `PascalCase` → `Hero.tsx`
- **Hooks**: `camelCase` with `use` prefix → `useScroll.ts`
- **Utilities**: `camelCase` → `formatDate.ts`

### Structure
```tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

interface MyComponentProps {
	title: string;
	onAction?: () => void;
}

/**
 * MyComponent does this.
 * 
 * @example
 * ```tsx
 * <MyComponent title="Hello" onAction={() => console.log('clicked')} />
 * ```
 */
export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};
```

---

## 🧪 Testing

Write tests for all components:

```tsx
// tests/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
	it('renders with text', () => {
		render(<Button>Click</Button>);
		expect(screen.getByText('Click')).toBeInTheDocument();
	});
});
```

Run tests:
```bash
npm run test              # Single run
npm run test:watch       # Watch mode
```

---

## 🌐 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Key variables:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_REPO=https://github.com/try2hk/Aeon8_Sentinel
NEXT_PUBLIC_SITE_URL=https://aeon8systems.in
```

See [.env.example](.env.example) for all options.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel deploy
```

### Docker
```bash
docker build -t aeon8web .
docker run -p 3000:3000 aeon8web
```

### Manual (Node.js)
```bash
npm run build
npm start  # Runs on port 3000
```

---

## 📚 Documentation

- **[SETUP.md](docs/SETUP.md)** — Complete setup & development guide
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** — Technical architecture & patterns
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — Contribution guidelines
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com

---

## ✅ Code Quality

### Type Safety
```bash
npm run type-check    # Verify all TypeScript types
```

### Code Formatting
```bash
npm run format        # Auto-format all files
npm run lint          # Check for linting issues
```

### Testing
```bash
npm run test          # Run all tests
npm run test:watch   # Watch mode
```

---

## 🔒 Security

- **Headers**: CSP, X-Frame-Options, X-XSS-Protection configured
- **Input**: React auto-escapes content (XSS protection)
- **Env Vars**: Private vars never exposed to browser
- **Dependencies**: Regular updates via dependabot

---

## 🎯 Project Goals

Build a **production-grade, developer-friendly** marketing website that:
- ✅ Reflects Aeon8's engineering excellence
- ✅ Converts visitors to pilot customers
- ✅ Scales to enterprise grade
- ✅ Supports multiple developers
- ✅ Maintains high code quality

---

## 👥 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Fork & clone instructions
- Branch naming conventions
- Commit message format
- PR guidelines
- Code style rules

### Quick Summary
1. Fork & clone
2. Create branch: `git checkout -b feat/your-feature`
3. Make changes & commit: `git commit -m "feat(scope): description"`
4. Push & open PR
5. Respond to review feedback
6. Merge after approval

---

## 📄 License

Apache License 2.0 — See [LICENSE](LICENSE) for details.

---

## 📞 Support

- **Issues**: Report bugs or request features via GitHub Issues
- **Email**: contact@aeon8systems.in
- **GitHub**: https://github.com/try2hk/Aeon8Web

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [Jest](https://jestjs.io) — Testing framework

---

**Made with ❤️ by Aeon8 Systems | Secure. Empower. Sovereign.**
