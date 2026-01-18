# HookHub - MVP Specification

## Overview

HookHub is a web application for discovering and browsing open source Claude Code hooks from GitHub. It displays hooks in a clean grid layout.

## MVP Scope

**In Scope:**
- Display hooks in a responsive grid layout
- Show hook name, category, description, and repo link
- Filter by category
- Static data source (JSON/TypeScript file)

**Out of Scope:**
- User authentication
- Hook submissions
- Rating/voting
- GitHub API integration

## Data Model

```typescript
interface Hook {
  id: string;
  name: string;
  description: string;
  category: HookCategory;
  repoUrl: string;
  author: string;
}

type HookCategory =
  | "Development Tools"
  | "Code Quality"
  | "Multi-Agent"
  | "Notifications"
  | "Language Support"
  | "Testing"
  | "Monitoring";
```

## UI Layout

```
┌─────────────────────────────────────────────┐
│  HookHub - Discover Claude Code Hooks       │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  [All] [Dev Tools] [Quality] [Testing] ...  │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ Category │ │ Category │ │ Category │    │
│  │ Name     │ │ Name     │ │ Name     │    │
│  │ Desc...  │ │ Desc...  │ │ Desc...  │    │
│  │ @author  │ │ @author  │ │ @author  │    │
│  │ [GitHub] │ │ [GitHub] │ │ [GitHub] │    │
│  └──────────┘ └──────────┘ └──────────┘    │
└─────────────────────────────────────────────┘
```

**Grid:** 3 columns desktop, 2 tablet, 1 mobile

## Components

```
hookhub/
├── app/
│   ├── page.tsx              # Main page with grid
│   └── globals.css
├── components/
│   ├── HookCard.tsx          # Individual hook card
│   ├── HookGrid.tsx          # Grid container
│   └── CategoryFilter.tsx    # Category filter pills
├── data/
│   └── hooks.ts              # Static hooks data
└── types/
    └── index.ts              # TypeScript interfaces
```

## Initial Hooks Data

| Name | Category | Author | Description |
|------|----------|--------|-------------|
| claude-hooks | Development Tools | johnlindquist | TypeScript-based hook configuration system |
| cchooks | Development Tools | GowayLee | Lightweight Python SDK for writing hooks |
| claude-code-hooks-sdk | Development Tools | beyondcode | Laravel-inspired PHP SDK for hooks |
| claudekit | Development Tools | carlrannaberg | Custom commands, hooks, and utilities toolkit |
| TypeScript Quality Hooks | Code Quality | bartolli | TypeScript/ESLint/Prettier quality checks |
| TDD Guard | Testing | nizos | Enforces test-driven development principles |
| Claude Hook Comms | Multi-Agent | aannoo | Multi-agent collaboration via @-mentions |
| claude-code-hooks-multi-agent-observability | Monitoring | disler | Real-time agent monitoring with Vue 3 |
| CC Notify | Notifications | dazuiba | Desktop notifications for Claude Code |
| Claudio | Notifications | ctoth | OS-native sounds for Claude Code |
| Britfix | Language Support | Talieisin | American to British English converter |

## Tech Stack

- Next.js 16.1.3 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4

## Sources

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
- [claude-hooks](https://github.com/johnlindquist/claude-hooks)
- [claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)
