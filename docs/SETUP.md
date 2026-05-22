# Aeon8Web — Setup & Development Guide

## Quick Start

### Prerequisites
- **Node.js**: >= 18.17.0
- **npm**: >= 9.0.0
- **Git**: latest

### 1. Clone & Install

```bash
git clone https://github.com/try2hk/Aeon8Web.git
cd Aeon8Web
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
# Edit .env.local with your settings
```

### 3. Run Development Server

```bash
npm run dev
# Open http://localhost:3000 in browser
```

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
Aeon8Web/
├── app/                    # Next.js app directory (pages, layouts)
├── components/
│   ├── sections/          # Page sections (Hero, About, Products, etc.)
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── common/            # Reusable UI elements
│   └── ui/                # Atomic UI components (Button, Card, etc.)
├── lib/
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions (formatters, validators)
│   └── api/               # API client & server utilities
├── public/
│   ├── images/            # Static images, logos
│   ├── fonts/             # Custom fonts
│   └── icons/             # Icon assets
├── styles/                # Global CSS (Tailwind overrides)
├── tests/                 # Jest test files
├── config/                # Configuration constants
├── docs/                  # Development documentation
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind theme & plugins
├── next.config.js         # Next.js configuration
├── jest.config.js         # Jest testing configuration
└── .env.example           # Environment variables template
```

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (hot reload enabled) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Auto-format code (Prettier) |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | Check TypeScript types |

---

## Development Workflow

### 1. Creating a New Component

```bash
# Example: Create a new section component
touch components/sections/YourComponent.tsx
```

**Template**:
```tsx
import React from 'react';

interface YourComponentProps {
  // Define props here
}

export const YourComponent: React.FC<YourComponentProps> = ({}) => {
  return (
    <section>
      {/* Component content */}
    </section>
  );
};
```

### 2. Creating a New Page

In Next.js app directory, create a file in `app/`:

```tsx
// app/page.tsx
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

### 3. Writing Styles

Use **Tailwind CSS** utility classes (preferred). Avoid inline CSS.

```tsx
// Good ✅
<div className="bg-midnight border border-border rounded-lg p-6">

// Bad ❌
<div style={{ background: '#050D1A', border: '1px solid #1B3A5C' }}>
```

### 4. Working with Hooks

Custom hooks go in `lib/hooks/`:

```tsx
// lib/hooks/useScroll.ts
import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return isScrolled;
};
```

---

## Code Quality

### Type Safety
All files should be `.ts` or `.tsx`. Strict TypeScript mode is enabled.

```bash
npm run type-check  # Verify all types
```

### Code Formatting
Auto-format before commit:

```bash
npm run format      # Format all files
npm run lint        # Check linting issues
```

### Testing
Add tests in `tests/` directory:

```bash
npm run test        # Run all tests
npm run test:watch  # Watch mode
```

---

## Performance Tips

1. **Image Optimization**: Use Next.js `<Image>` component
2. **Code Splitting**: Each page automatically code-split
3. **Lazy Loading**: Use `dynamic()` for heavy components
4. **CSS**: Tailwind auto-purges unused styles in production

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "start"]
```

### Environment Variables in Production
Add to your hosting platform (Vercel, AWS, etc.):
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_GITHUB_REPO`
- etc. (see `.env.example`)

---

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### TypeScript Errors
```bash
npm run type-check  # See all errors
# Fix and save, TypeScript will auto-check
```

---

## Getting Help

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
