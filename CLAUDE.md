# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React + Vite + TypeScript application with a multi-layered architecture:

### Core Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Components**: shadcn-ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query) for server state

### AI Integration
- **CopilotKit**: Integrated for AI-powered features (v1.7.1)
  - React Core and UI components
  - Runtime for backend processing
  - Custom agents and memory management
- **Mastra Framework**: AI agent orchestration
  - Canvas agent for collaborative features
  - LibSQL storage for in-memory data
  - Custom logging with configurable levels

### Data Layer
- **Supabase**: Backend-as-a-Service for authentication and database
  - Client configured at `src/integrations/supabase/client.ts`
  - Secrets management for API keys
- **Storage**: Mastra uses LibSQL with in-memory configuration

### Project Structure

```
src/
├── pages/              # Route components (25+ pages)
│   ├── research/       # Client research section pages
│   └── [concepts]      # Various concept pages
├── components/         # Reusable UI components
│   ├── ui/            # shadcn-ui base components
│   ├── canvas/        # Canvas-related components
│   ├── copilot/       # CopilotKit integration
│   └── copilot-web/   # Web-specific copilot features
├── lib/               # Utility functions and shared logic
│   ├── canvas/        # Canvas state management
│   ├── copilot-*      # Copilot agents, chat, memory
│   └── shared/        # Shared types and Convex client
├── hooks/             # Custom React hooks
├── mastra/            # Mastra AI framework configuration
└── integrations/      # External service integrations
```

### Key Architectural Patterns

1. **Component Organization**: Components are split between pages (route components) and reusable components. The UI library follows shadcn-ui patterns.

2. **AI Agent System**: The application uses Mastra for agent orchestration with a canvas agent for collaborative features. CopilotKit provides the UI layer for AI interactions.

3. **Type Safety**: TypeScript is configured with relaxed settings (`noImplicitAny: false`, `strictNullChecks: false`) for rapid development.

4. **Path Aliases**: Uses `@/` alias for `src/` directory imports.

5. **Development Features**: Includes Lovable tagger for component tracking in development mode.

### Testing

Test files are primarily located in the `copilot/` subdirectory:
- Unit tests: `*.test.ts` files
- E2E tests: `*.spec.ts` files in `copilot/tests/`

### Environment Configuration

The app uses Supabase with hardcoded credentials in the client. For production, ensure proper environment variable management for sensitive data.

### Key Dependencies

- **UI/UX**: Framer Motion for animations, Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Dates**: date-fns for date manipulation
- **Theming**: next-themes for dark mode support
- **Notifications**: Sonner for toast notifications