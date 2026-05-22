# Contributing to Aeon8Web

Thank you for wanting to contribute to Aeon8Web! This guide will help you get started.

---

## Code of Conduct

Be respectful, inclusive, and professional. We're building a sovereign, world-class cybersecurity company together.

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/Aeon8Web.git`
3. **Create a branch**: `git checkout -b feat/your-feature-name`
4. **Make changes** and commit (see commit guidelines below)
5. **Push** and open a Pull Request

---

## Branch Naming

- **Features**: `feat/feature-name`
- **Bug fixes**: `fix/bug-name`
- **Refactoring**: `refactor/component-name`
- **Documentation**: `docs/what-changed`
- **Styles**: `style/what-changed`

Example: `feat/add-testimonials-section`

---

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code refactoring
- `style` - Code style (formatting, whitespace)
- `docs` - Documentation updates
- `test` - Adding/updating tests
- `chore` - Build/dependency updates

### Scope
Component or area affected: `components/Hero`, `lib/hooks`, `config`, etc.

### Subject
- Start with lowercase
- 50 characters max
- Imperative mood ("add" not "adds" or "added")

### Body
- Explain **what** and **why**, not how
- 72 character line width
- Wrap lines at 72 chars

### Example
```
feat(components/Hero): add animated badge with pulse effect

- Added Badge component to Hero section
- Implemented CSS animation for pulse effect
- Used Tailwind animation utilities
- Responsive on mobile devices

Closes #42
```

---

## Pull Request Guidelines

### Before You Submit

- [ ] Code passes linting: `npm run lint`
- [ ] Code is formatted: `npm run format`
- [ ] Types check: `npm run type-check`
- [ ] Tests pass: `npm run test`
- [ ] Tests added for new features
- [ ] No console errors/warnings

### PR Title Format
Same as commit messages: `feat(scope): description`

### PR Description Template
```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation update

## Testing Done
Describe how you tested this.

## Screenshots (if applicable)
Add before/after screenshots.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] TypeScript types are correct
- [ ] Documentation updated
```

---

## Code Style Guidelines

### TypeScript/JSX
```tsx
// ✅ Good
const MyComponent: React.FC<Props> = ({ title }) => {
  const [state, setState] = useState(false);
  
  return (
    <div className="bg-midnight p-4">
      <h1>{title}</h1>
    </div>
  );
};

// ❌ Bad
function MyComponent(props) {
  return <div style={{ background: '#050D1A' }}>{props.title}</div>;
}
```

### Tailwind CSS
```tsx
// ✅ Good
<div className="bg-midnight border border-teal rounded-lg p-6 hover:border-white transition-colors">

// ❌ Bad
<div style={{ background: '#050D1A', border: '1px solid #00D4AA' }} className="p-6">
```

### Naming Conventions
- **Components**: PascalCase (`Hero.tsx`, `Navbar.tsx`)
- **Hooks**: camelCase with `use` prefix (`useScroll.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`CONFIG.ts`)

---

## File Structure for New Features

```
components/sections/NewFeature/
├── NewFeature.tsx          # Main component
├── NewFeature.module.css   # Scoped styles (if needed)
└── useNewFeature.ts        # Related hook (if needed)

# OR for simpler components
components/ui/Button.tsx
```

---

## Testing

Write tests for new components and utilities:

```tsx
// tests/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

Run tests:
```bash
npm run test              # Run all tests
npm run test:watch       # Watch mode
npm run test -- --coverage  # With coverage report
```

---

## Environment Variables

When adding new env vars:

1. Add to `.env.example` with description
2. Add to `config/env.ts` (create if needed)
3. Document in `SETUP.md`
4. Update `next.config.js` if public var

---

## Component Documentation

Document complex components with JSDoc:

```tsx
/**
 * Hero section with animated badge and CTA buttons.
 * 
 * @example
 * ```tsx
 * <Hero 
 *   title="Build Secure" 
 *   subtitle="AI-driven enforcement"
 * />
 * ```
 */
export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  // ...
};
```

---

## Performance Considerations

- Use `React.memo` for expensive components
- Lazy load heavy sections with `dynamic()`
- Optimize images with Next.js `<Image>`
- Check bundle size: `npm run build`

---

## Documentation Updates

Update relevant docs:
- Feature doc in `docs/`
- Component usage in component JSDoc
- API changes in `ARCHITECTURE.md`

---

## Need Help?

- **Questions**: Open an issue with `question` label
- **Bug Report**: Describe steps to reproduce
- **Feature Request**: Explain use case and benefits

---

## Review Process

1. Automated checks (linting, tests)
2. Code review by maintainers
3. Approval and merge

---

**Thank you for contributing! 🚀**
