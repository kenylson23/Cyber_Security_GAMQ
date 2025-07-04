# Kenylson-Tech - Electronic Security & Technology Solutions

## Overview

This is a modern full-stack web application for Kenylson-Tech, a technology company specializing in electronic security, IT infrastructure, and cybersecurity solutions. The application features a sleek, modern design with interactive 3D elements and smooth animations, built using React, TypeScript, and Express.js.

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

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

### Production Deployment
- Static files served from `dist/public`
- Express server runs on Node.js
- Database hosted on Neon (serverless PostgreSQL)

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

## Changelog
- July 04, 2025. Initial setup
- July 04, 2025. Added Security Simulator 3D feature

## User Preferences

Preferred communication style: Simple, everyday language.