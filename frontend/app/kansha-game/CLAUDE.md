# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Next.js 15 application with React 19. Common development commands:

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Run Storybook for component development
pnpm storybook

# Build Storybook
pnpm build-storybook
```

## Project Architecture

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: HeroUI (modern React component library)
- **Styling**: Tailwind CSS v4 with HeroUI theming
- **Language**: TypeScript with strict mode
- **Font**: Noto Sans JP for Japanese text support
- **Development Tools**: Storybook for component development, ESLint with Next.js config

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components (currently empty)
- `src/styles/` - Global CSS and Tailwind configuration
  - `global.css` - Main stylesheet with Tailwind imports and HeroUI plugin
  - `hero.ts` - HeroUI configuration export

### Key Configuration Files

- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript config with path aliases (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint with Next.js and Storybook rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

### Application Context

This is a "kansha game" (gratitude game) application - specifically a real-time quiz battle game for dozens of participants. The application has Japanese language support with Noto Sans JP font. The main layout includes HeroUI provider configuration. The current implementation is minimal with placeholder content.

### Project Documentation

Requirements and specifications are documented in the `docs/` directory at the project root:

- `docs/00-overview.md` - Project overview and requirements (in Japanese)

## Development Environment

The project uses `mise` for tool management with:

- Node.js 24.6.0
- pnpm 10.14.0
- turbo 2.5.6
- heroui-cli (latest)

Install mise first, then run `mise install` to set up the development environment.
