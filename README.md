# Dax Studio

Personal portfolio website for Dax, a freelance frontend developer based in Hangzhou, China.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/daolanx/dax-studio)

Live: [https://www.daolanx.com](www.daolanx.com)

## Features

- **LCARS Terminal Aesthetic** - Star Trek-inspired interface with authorization-style intro
- **Typing Animation** - Natural typing effect with randomized delays to simulate human typing
- **Keyboard Navigation** - Full keyboard support (arrow keys + enter) for menu navigation
- **Responsive Design** - Adapts seamlessly across desktop and mobile devices
- **Analytics** - Umami privacy-focused analytics integration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Cloudflare Workers (via OpenNext adapter)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4
- **Components**: React 19

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

| Command       | Description                        |
| :------------ | :--------------------------------- |
| `pnpm dev`    | Start development server          |
| `pnpm build`  | Build for production              |
| `pnpm preview` | Preview build locally            |
| `pnpm deploy` | Deploy to Cloudflare Workers      |
| `pnpm lint`   | Run ESLint                        |
| `pnpm check`  | Run build + TypeScript check      |

## Project Structure

```
src/
├── app/
│   ├── page.tsx       # Main homepage
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
└── components/
    ├── TerminalBio.tsx   # Typing effect component
    └── TerminalMenu.tsx  # Navigation menu
```

## License

MIT
