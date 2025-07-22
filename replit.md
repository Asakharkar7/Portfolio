# Replit.md

## Overview

This is a full-stack portfolio website built with React frontend and Express.js backend. The application showcases a data analyst's professional profile with sections for skills, experience, projects, education, and contact. It features a modern, responsive design using Tailwind CSS and shadcn/ui components with smooth animations powered by Framer Motion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, hosted in the `client/` directory
- **Backend**: Express.js REST API in the `server/` directory  
- **Shared**: Common schemas and types in the `shared/` directory
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Deployment**: Configured for production builds with Vite bundling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **Routing**: wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture  
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL session store using connect-pg-simple
- **Development**: Hot reload with tsx for development server
- **Production**: ESBuild for server bundling

### Database Schema
The application uses a minimal user schema with Drizzle ORM:
- Users table with id, username, and password fields
- Database migrations stored in `migrations/` directory
- Type-safe database operations with auto-generated TypeScript types

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Routes**: Express routes handle business logic and database operations
3. **Database**: Drizzle ORM provides type-safe database access
4. **Response**: JSON responses sent back to client for state updates

The contact form submission follows this flow:
- Form data validated on client with Zod schemas
- POST request to `/api/contact` endpoint
- Server processes and logs contact information
- Success/error response returned to client
- UI updated with toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database connection for PostgreSQL
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI transitions
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across the application
- **@replit/vite-plugin-***: Replit-specific development plugins
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- Vite dev server for frontend with hot module replacement
- tsx for backend development with automatic restarts
- Replit-specific plugins for development environment integration

### Production Build
1. **Frontend**: Vite builds React app to `dist/public/`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend build served by Express in production
4. **Database**: Drizzle migrations applied via `db:push` command

### Key Build Considerations
- **Monorepo Structure**: Single package.json manages both frontend and backend
- **Path Aliases**: TypeScript path mapping for clean imports (`@/`, `@shared/`)
- **Asset Handling**: Static assets served from Express in production
- **Environment Variables**: DATABASE_URL required for database connection

The application is designed to be easily deployable on Replit with minimal configuration, using environment variables for database connections and serving both API and static assets from a single Express server.