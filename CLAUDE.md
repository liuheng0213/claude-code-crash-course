# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.3 application called "HookHub" using:
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- Next.js App Router architecture

## Development Commands

```bash
# Install dependencies
cd hookhub
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
hookhub/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Geist fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Key Architecture Details

### Path Aliases
- TypeScript is configured with `@/*` path alias mapping to the root directory
- Import example: `import Component from "@/app/component"`

### Styling
- Uses Tailwind CSS v4 with PostCSS
- Dark mode support via `dark:` classes
- Custom font variables: `--font-geist-sans` and `--font-geist-mono` loaded via `next/font/google`

### Next.js Configuration
- App Router (not Pages Router)
- TypeScript strict mode enabled
- Target ES2017 for compilation
- JSX runtime: `react-jsx`

## Development Notes

- The project uses the Next.js App Router pattern (app directory), not the legacy Pages Router
- All components are React Server Components by default unless marked with `"use client"`
- The development server supports hot module replacement for immediate feedback
- Images should use the `next/image` component for automatic optimization
