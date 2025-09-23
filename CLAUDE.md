# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a system built with Angular 17 and Express.js. The application uses NX monorepo tooling and follows a full-stack architecture with server-side rendering (SSR).

## Key Technologies

- **Frontend**: Angular 17 with SSR, SCSS, TailwindCSS
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Auth0
- **Build System**: NX workspace with Angular DevKit
- **Package Manager**: pnpm (enforced)

## Development Commands

### Core Development
- `pnpm dev` - Start development server with hot reload (builds and serves)
- `pnpm serve` - Run the built application server with file watching
- `pnpm build` - Production build
- `pnpm build:watch` - Build with file watching

### Testing & Quality
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `nx lint` - Run ESLint on the project

### Database
- `pnpm create-migrations` - Generate new database migrations
- `pnpm run-migrations` - Run pending migrations in production
- `pnpm run-migrations-dev` - Run migrations with development environment

### Storybook
- `pnpm storybook` - Start Storybook development server (port 4400)
- `pnpm storybook:build` - Build Storybook for production

## Architecture

### Project Structure
- `src/app/` - Angular application code
  - `pages/` - Route components (dashboard, unauthorized)
  - `components/` - Reusable UI components (header, logout-button)
  - `guards/` - Route guards
  - `providers/` - Angular services and providers
  - `interfaces/` - TypeScript interfaces
- `src/api/` - Express.js backend API
  - `routes.ts` - API route definitions
  - `schemas/` - Drizzle database schemas
  - `user/` - Feature-based controllers
  - `_helpers/` - Utility functions and environment config

### Server Architecture
The application uses Angular Universal for SSR with Express.js:
- `src/ssr.server.ts` - Main server configuration
- API routes mounted under `/api` prefix
- Static file serving for built Angular assets
- CORS enabled for localhost:4200 in development

### Database Setup
- Uses Drizzle ORM with PostgreSQL
- Schema files in `src/api/schemas/`
- Migrations stored in `./drizzle/` directory
- Connection configured via environment variables

## Configuration Files

- `nx.json` - NX workspace configuration with cloud caching
- `project.json` - Angular project configuration with build targets
- `drizzle.config.ts` - Database ORM configuration
- `tailwind.config.js` - TailwindCSS styling configuration
- `.env` - Environment variables (created on install)

## Environment Setup

1. Install dependencies: `pnpm install`
2. Configure environment: `pnpm config` (runs automatically post-install)
3. Run database migrations: `pnpm run-migrations` (runs automatically post-install)
4. Start development: `pnpm dev`

## Build Outputs

- Production build: `dist/socios/`
- Storybook build: `dist/storybook/socios/`
- Coverage reports: `coverage/`

## Notes

- Uses Spanish locale (es-419) by default
- Auth0 integration for authentication
- NX cloud caching enabled for build optimization
- Husky git hooks configured for code quality
- Bundle size limits: 500KB warning, 1MB error for initial bundle