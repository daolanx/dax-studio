# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Dax (daolanx) - a freelance frontend developer in Hangzhou, China. Built with Next.js 16, React 19, and Tailwind CSS 4, deployed to Cloudflare Workers via OpenNext adapter.

### Content

- Personal introduction with location
- Blog link (https://www.daolanx.me)
- GitHub profile link
- Twitter link
- Email contact
- Tech stack showcase (React, Next.js, TailwindCSS, TypeScript)

## Commands

```bash
pnpm dev      # Start development server (http://localhost:3000)
pnpm build    # Build production site
pnpm preview # Preview build locally before deploying
pnpm deploy  # Deploy production build to Cloudflare Workers
pnpm lint    # Run ESLint
pnpm check   # Run build + TypeScript type check
pnpm cf-typegen  # Generate Cloudflare types from wrangler.jsonc
```

## Architecture

- **Framework**: Next.js 16 with App Router (`src/app/`)
- **Runtime**: Cloudflare Workers (via OpenNext adapter)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript 5.9
- **Path Aliases**: `@/*` maps to `./src/*`

### Key Files

- `next.config.ts` - Next.js configuration (includes OpenNext Cloudflare init for dev)
- `open-next.config.ts` - OpenNext Cloudflare adapter config
- `wrangler.jsonc` - Cloudflare Workers configuration
- `env.d.ts` - Cloudflare environment types

### Cloudflare Deployment

The app uses `@opennextjs/cloudflare` adapter which transforms Next.js build output for Cloudflare Workers. The `initOpenNextCloudflareForDev()` call in next.config.ts enables `getCloudflareContext()` during development.
