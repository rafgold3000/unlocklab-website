# UnlockLab Website

A modern, responsive website for UnlockLab - an AI education startup community. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Dark mode with vibrant gradients (blue, purple, cyan)
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Framer Motion powered animations and transitions
- 🎯 **SEO Optimized**: Meta tags and OpenGraph support
- 🧩 **Reusable Components**: Clean, modular component architecture

## Pages

1. **Home (Landing Page)**: Hero section with animated gradient, stats, and feature highlights
2. **About Us**: Mission, values, team, and story sections
3. **Events**: Upcoming and past events with registration CTAs

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Deploy to Vercel

1. **Authenticate GitHub CLI** (if not already done):
   ```bash
   gh auth login
   ```

2. **Create GitHub repository and push**:
   ```bash
   gh repo create unlocklab-website --public --source=. --remote=origin --push
   ```

3. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

Your site will be live with automatic deployments on every push to main!

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── events/
│   │   └── page.tsx          # Events page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home/Landing page
├── components/
│   ├── Navigation.tsx        # Navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── Button.tsx            # Reusable button
│   └── Card.tsx              # Reusable card
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  background: {
    DEFAULT: "#0a0a0a",
    secondary: "#111111",
  },
  primary: {
    DEFAULT: "#3b82f6",
    // ... more colors
  },
}
```

### Content

- Landing page content: `app/page.tsx`
- About page content: `app/about/page.tsx`
- Events page content: `app/events/page.tsx`

## Development

```bash
# Run dev server with hot reload
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## License

MIT

---

Built with ❤️ using [Claude Code](https://claude.com/claude-code)
