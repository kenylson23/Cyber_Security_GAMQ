# G.A.M.Q - Electronic Security & Technology Solutions

## Overview

This is a modern full-stack web application for G.A.M.Q, a technology company specializing in electronic security, IT infrastructure, and cybersecurity solutions. The application features a sleek, modern design with interactive 3D elements and smooth animations, built using React, TypeScript, and Express.js.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with custom shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **3D Graphics**: Three.js for interactive 3D elements
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API endpoints
- **Development**: Hot module replacement with Vite integration

## Key Components

### Frontend Components
1. **Hero Section**: Interactive landing area with 3D elements
2. **Services Section**: Showcases four main service categories
3. **About Section**: Company information with feature highlights
4. **Security Simulator**: Interactive 3D simulator showcasing security systems
5. **Projects Section**: Portfolio of completed projects
6. **Contact Section**: Contact form with validation
7. **Stats Section**: Animated statistics counters
8. **Navigation**: Responsive navigation with smooth scrolling
9. **Footer**: Company information and social links

### Backend Components
1. **API Routes**: Contact form submission and data retrieval
2. **Database Schema**: Users and contacts tables
3. **Storage Layer**: Abstracted storage interface with in-memory fallback
4. **Form Validation**: Zod schema validation for contact submissions

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data is validated using Zod schema
3. Data is sent to `/api/contact` endpoint
4. Backend validates data and stores in database
5. Success/error response returned to frontend
6. User receives toast notification

### Database Schema
- **Users Table**: id, username, password (for future admin functionality)
- **Contacts Table**: id, name, email, service, message, createdAt

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom color schemes
- **Animation**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js for interactive elements
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: TanStack Query for API calls

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Database Provider**: Neon Database serverless connection

## Deployment Strategy

### Netlify Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Static Deployment**: Files served directly from CDN
3. **SPA Routing**: Client-side routing with redirects

### Build Configuration
- **Build Command**: `npx vite build --config vite.config.turbo.ts --mode production`
- **Publish Directory**: `dist/public`
- **Node Version**: 18
- **JavaScript Target**: ES2020 (suporte para BigInt)

### Production Deployment
- Static files served from Netlify CDN
- Client-side routing configured with `_redirects`
- Optimized caching for assets

## Recent Changes

### Security Simulator Implementation (July 04, 2025)
- Added interactive 3D security simulator using Three.js
- Features 4 security systems: CFTV, Motion Sensors, Access Control, Wireless Network
- Includes real-time animations, system switching, and control panel
- Added navigation menu item for easy access
- Custom CSS styling for enhanced visual effects
- Full mobile responsiveness with touch optimization
- Responsive 3D container (300px on mobile, 500px on desktop)
- Mobile-first layout with reordered elements for better UX
- Touch-friendly controls and interaction feedback

### Netlify Deploy Configuration (July 04, 2025)
- Created `netlify.toml` with optimized build configuration
- Added `vite.config.netlify.ts` and `vite.config.fast.ts` for different build scenarios
- Configured SPA routing with `_redirects` file
- Added `.nvmrc` for Node.js version management
- Created `build-netlify.sh` script for local testing
- Optimized chunking and caching for better performance
- Build command: `npx vite build --config vite.config.turbo.ts --mode production`
- Publish directory: `dist/public`
- Fixed "client/index.html not found" issue with proper path configuration
- Fixed BigInt literals error by updating target from ES2015 to ES2020
- Created multiple Vite configs for different build scenarios (turbo, minimal, fast, netlify)
- Ultra-optimized build configuration for faster deployment
- Ready for static deployment on Netlify CDN



## Changelog
- July 04, 2025. Initial setup
- July 04, 2025. Added Security Simulator 3D feature
- July 04, 2025. Configured for Netlify static deployment
- July 12, 2025. Updated company name from "Kenylson-Tech" to "G.A.M.Q"
- July 12, 2025. Updated services to focus on: Venda, Instalação, Manutenção de Equipamentos de Segurança Eletrônica, e Electricidade
- July 12, 2025. Added real company images to all services and projects sections
- July 12, 2025. Updated company address to "Viana-Estalagem sentido Cacuaco junto a margem"

## User Preferences

Preferred communication style: Simple, everyday language.