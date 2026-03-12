# Community Hub

A modern community center website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with Tailwind CSS v4
- React 18 with TypeScript
- Routing with Wouter
- UI components from Radix UI
- Form handling with React Hook Form
- State management with TanStack Query
- Animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Type Checking

```bash
pnpm typecheck
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── ui/           # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Wouter** - Lightweight routing
- **Radix UI** - Accessible component primitives
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation
