# ALIAS HQ Client Portal Template

This is a configurable client portal template built with React, TypeScript, and Tailwind CSS. It's designed for consultants and agencies to quickly deploy branded client portals with minimal configuration.

## 🚀 Quick Start

### 1. Clone or Fork This Repository

```bash
git clone [your-repo-url]
cd alias-hq-template
npm install
npm run dev
```

### 2. Configure Your Portal

**Option A: Use the Settings UI (Recommended)**
1. Navigate to `/settings` in your browser
2. Configure branding, modules, and content through the visual interface
3. Export your configuration for version control

**Option B: Edit Configuration Files**
1. Open `src/config/clientConfig.ts`
2. Modify the configuration object with your client's details
3. Save and reload

## 📋 Configuration Options

### Portal Branding
- **Company Name**: Your client's company name
- **Tagline**: Portal tagline or description
- **Logo URL**: Optional custom logo (leave empty for letter logo)
- **Colors**: Primary and accent colors (HSL format)

### Modules
Enable or disable entire module categories:
- **Research**: Client research and intelligence
- **ALIAS HQ Modules**: OS modules (Analytics, Building, etc.)
- **Business Units**: Company divisions and teams
- **Concepts**: Project concepts and proposals

### Navigation
- Automatically generated from enabled modules
- Custom labels for each module category
- Future: Drag-and-drop ordering

### User Configuration
- Default user name and role
- Prepared for authentication integration

## 🎨 Design System

**IMPORTANT**: This template uses a semantic design system. All colors, typography, and spacing are defined in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

**DO NOT** use direct colors like `text-white`, `bg-black`, etc. Always use semantic tokens:
- `text-foreground`, `text-muted-foreground`
- `bg-background`, `bg-card`
- `border-border`
- `text-primary`, `bg-primary`

## 📦 Module Structure

```
src/
├── config/
│   ├── types.ts              # TypeScript interfaces
│   ├── defaultConfig.ts      # Default template configuration
│   └── clientConfig.ts       # Active client configuration
├── contexts/
│   └── ClientConfigContext.tsx  # React context for config
├── components/
│   ├── settings/             # Settings page components
│   └── ...                   # UI components
├── pages/
│   ├── Settings.tsx          # Configuration UI
│   ├── research/             # Research pages
│   └── ...                   # Other pages
└── data/
    └── clients/              # Client data profiles
```

## 🔧 Customization

### Adding a New Client Profile

1. Create a new file in `src/data/clients/[client-name].ts`
2. Export a `ResearchProfile` object
3. Register it in `src/data/clients/index.ts`

### Adding Custom Navigation Items

Edit `src/config/defaultConfig.ts`:

```typescript
navigation: [
  {
    id: 'custom-page',
    name: 'Custom Page',
    path: '/custom',
    icon: 'FileText',
    category: 'research'
  },
  // ... more items
]
```

### Changing Colors

Via Settings UI or in `src/config/defaultConfig.ts`:

```typescript
branding: {
  primaryColor: '#A855F7',  // Purple (default)
  accentColor: '#3B82F6'    // Blue (default)
}
```

## 📤 Export & Import

### Export Configuration
1. Go to Settings → Export tab
2. Click "Export Configuration"
3. Save the JSON file to version control

### Import Configuration
1. Go to Settings → Export tab
2. Click "Import Configuration"
3. Select your JSON file

### Reset to Defaults
Warning: This cannot be undone
1. Go to Settings → Export tab
2. Click "Reset Configuration"

## 🔒 Authentication (Future)

This template is prepared for authentication integration. The structure includes:
- User profile system
- Role-based access control (RBAC) structure
- Protected routes ready to implement

To add authentication:
1. Enable Supabase in your project
2. Add authentication providers
3. Update `src/contexts/ClientConfigContext.tsx` to load user-specific configs

## 📱 Responsive Design

All components are fully responsive and mobile-optimized. The sidebar collapses on mobile, and all pages adapt to screen size.

## 🎯 Use Cases

- **Consulting Agencies**: Client portals for research and proposals
- **Real Estate**: Property portfolios and client dashboards
- **Marketing**: Campaign dashboards and analytics
- **SaaS**: Customer portals and onboarding

## 🚢 Deployment

This template can be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Add these to your hosting platform:

```bash
# Optional: for Supabase integration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 📚 Documentation

- [Configuration Guide](./CONFIGURATION-GUIDE.md)
- [Client Setup Guide](./CLIENT-SETUP-GUIDE.md)
- [Design System](./src/index.css)

## 🤝 Support

For issues or questions:
1. Check the documentation
2. Review existing GitHub issues
3. Create a new issue with details

## 📄 License

[Your License Here]

## 🎉 Credits

Built with:
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide Icons
- React Router
