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

### Image Carousel Implementation (July 17, 2025)
- Added interactive image carousel component with navigation controls
- Implemented auto-play functionality with customizable intervals
- Added navigation dots and image counter for better UX
- Integrated 8 new surveillance installation images in "Sistema de Vigilância" project
- Added 7 new electrical work images to "Electricidade" service carousel
- Touch-friendly carousel controls with hover effects
- Smooth transitions with GPU-accelerated animations
- Surveillance project carousel rotates automatically every 4 seconds
- Electrical service carousel rotates automatically every 3 seconds
- Optimized carousel performance with proper image lazy loading

### Performance Optimization (July 12, 2025)
- Implemented lazy loading for Three.js scene and Security Simulator
- Added optimized image component with intersection observer
- Enhanced scroll animations with rootMargin for better UX
- Reduced Three.js object count based on screen size (mobile: 50% fewer objects)
- Added frame rate throttling and performance monitoring
- Implemented GPU acceleration for transforms and animations
- Added performance CSS with hardware acceleration classes
- Memory management with proper disposal of Three.js objects
- Debounced resize handlers to prevent performance issues
- Added performance monitoring hook for development

### Security Simulator Implementation (July 04, 2025)
- Added interactive 3D security simulator using Three.js
- Features 4 security systems: CCTV, Motion Sensors, Access Control, Wireless Network
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
- July 12, 2025. Updated company address to "Avenida Deolinda Rodrigues Estalagem Junto a Pedonal da Moagem sentido Vila de Viana"
- July 17, 2025. Added image carousel functionality to "Sistema de Vigilância" project with 8 new surveillance installation images
- July 17, 2025. Added 7 new electrical work images to "Electricidade" service carousel
- July 17, 2025. Updated company address to "Avenida Deolinda Rodrigues Estalagem Junto a Pedonal da Moagem sentido Vila de Viana"
- July 17, 2025. Updated phone numbers to +244 923711556 and +244 95167755
- July 17, 2025. Updated hero section services to include all specific services: Instalação de câmeras vídeo vigilância, Cerca elétrica, Automação de portão, GPS, Controle de acesso, Video porteiro, Fechadura eletrônico, Biométrico
- July 17, 2025. Changed "Electricidade" service to "Cerca Eléctrica" with updated description
- July 17, 2025. Changed "CFTV" to "CCTV" across all components
- July 17, 2025. Implemented intelligent preloading for image carousel: loads current + next + previous images only, pauses auto-play when not visible, clears intervals on manual navigation
- July 17, 2025. Fixed carousel synchronization issue by removing circular dependencies in useEffect
- July 17, 2025. Improved carousel button synchronization with DOM updates and reduced transition duration for better responsiveness
- July 17, 2025. Fixed OptimizedImage component to properly handle eager loading and error states, ensuring all images load correctly
- July 17, 2025. Expanded services section from 4 to 12 comprehensive security services: Added Videovigilância CCTV, Automação de Portões, GPS Tracking, Controle de Acesso, Vídeo Interfone, Fechaduras Electrónicas, Autenticação Biométrica, Venda de Equipamentos, Instalação Profissional, Manutenção e Suporte, and Monitoramento 24/7
- July 17, 2025. Updated contact form dropdown to include all 12 specific security services plus "Outro Serviço" option
- July 17, 2025. Improved services section layout with responsive grid (1 col mobile, 2 col tablet, 3 col desktop, 4 col xl screens) and updated section description
- July 17, 2025. Updated hero section with new impactful messaging: "Proteja o que realmente importa com tecnologia de ponta" and restructured description into clear value propositions with call-to-action "🔒 Seu espaço mais seguro começa aqui"
- July 17, 2025. Optimized image carousels for better performance: Created SimpleCarousel component to replace complex ImageCarousel, reduced Sistema de Vigilância images from 9 to 5 selected images, increased autoplay interval to 5000ms, removed unused image imports, and applied optimizations across all services and projects sections
- July 17, 2025. Eliminated carousel navigation delays: Implemented direct index navigation, removed intermediate functions, auto-play pauses for 1.5s on manual interaction, removed transition-opacity for instant visual feedback, and applied these optimizations across all 15 carousels (12 services + 3 projects)
- July 17, 2025. Optimized services section for better performance: Kept carousel only for "Cerca Eléctrica" service (7 images), converted all other 11 services to single static images to reduce rendering load and improve page performance
- July 17, 2025. Removed all carousels from projects section: Converted all 3 projects to single static images, ensuring only "Cerca Eléctrica" service maintains carousel functionality across the entire website for maximum performance
- July 17, 2025. Optimized Cerca Eléctrica carousel: Reduced from 7 to 3 high-quality images, implemented preloading, eager loading, and 500ms pause timers for ultra-fast navigation performance

## User Preferences

Preferred communication style: Simple, everyday language.
Image display preference: Use carousel functionality for service images with auto-play enabled.
Spelling preference: Use Portuguese spelling "Electrônica" instead of "Eletrônica".