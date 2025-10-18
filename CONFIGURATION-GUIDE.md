# Configuration Guide

Complete reference for configuring your ALIAS HQ Client Portal.

## Configuration Structure

The main configuration file is located at `src/config/clientConfig.ts` and uses the `ClientConfig` interface defined in `src/config/types.ts`.

## ClientConfig Interface

```typescript
interface ClientConfig {
  id: string;                    // Unique identifier for this configuration
  branding: PortalBranding;      // Visual branding settings
  modules: ModuleConfig;         // Module enable/disable toggles
  navigation: NavigationItem[];  // Navigation menu items
  defaultUser: UserConfig;       // Default user information
  activeClientId: string;        // Active client data profile ID
}
```

## Branding Configuration

### PortalBranding

```typescript
interface PortalBranding {
  companyName: string;     // Company name displayed in sidebar and home
  tagline: string;         // Tagline displayed on home page
  logoUrl?: string;        // Optional custom logo URL
  primaryColor: string;    // Primary brand color (HSL format)
  accentColor: string;     // Accent color for highlights
}
```

### Example

```typescript
branding: {
  companyName: 'Acme Corp',
  tagline: 'Your trusted partner for digital transformation',
  logoUrl: 'https://example.com/logo.png', // Optional
  primaryColor: '#A855F7',
  accentColor: '#3B82F6'
}
```

### Logo Guidelines

- **With Custom Logo**: Provide a URL to your logo image
  - Recommended size: 40x40px (small), 88x88px (large)
  - Format: PNG with transparency or SVG
  - Falls back to letter logo if URL fails to load

- **Without Custom Logo**: Leave `logoUrl` undefined
  - Displays first letter of company name
  - Styled with primary color and border

## Module Configuration

Control which module categories appear in your portal.

### Module Options

```typescript
interface ModuleConfig {
  enabled: boolean;  // Show/hide this module category
  label: string;     // Custom label for the category
  order?: number;    // Display order (optional)
}
```

### Available Modules

1. **research** - Client Research Section
   - Company Profile
   - Leadership Analysis
   - Technology Ecosystem
   - Business Operations
   - Automation Opportunities
   - Implementation Roadmap

2. **aliasHQModules** - ALIAS HQ Modules
   - Gantt Chart
   - AI Analytics
   - Gallery
   - Dashboard

3. **businessUnits** - Business Units
   - Analytics OS
   - Building OS
   - Community OS
   - Design OS
   - Event OS
   - Hospitality OS
   - Workspace OS

4. **concepts** - Concepts
   - Concept 1-4

### Example

```typescript
modules: {
  research: { 
    enabled: true, 
    label: 'CLIENT RESEARCH',
    order: 1 
  },
  aliasHQModules: { 
    enabled: true, 
    label: 'TOOLS & DASHBOARDS',
    order: 2 
  },
  businessUnits: { 
    enabled: false,  // Hidden
    label: 'BUSINESS UNITS',
    order: 3 
  },
  concepts: { 
    enabled: true, 
    label: 'PROJECT IDEAS',
    order: 4 
  }
}
```

## Navigation Configuration

Navigation items are automatically generated from enabled modules, but you can customize them.

### NavigationItem

```typescript
interface NavigationItem {
  id: string;        // Unique identifier
  name: string;      // Display name
  path: string;      // Route path
  icon: string;      // Lucide icon name
  category: string;  // Module category
}
```

### Example

```typescript
navigation: [
  {
    id: 'custom-dashboard',
    name: 'My Dashboard',
    path: '/dashboard',
    icon: 'LayoutDashboard',
    category: 'aliasHQModules'
  },
  // ... more items
]
```

### Available Lucide Icons

Common icons you can use:
- `FileText`, `Building2`, `Users`, `Brain`
- `Settings`, `BarChart3`, `Calendar`, `Coffee`
- `Lightbulb`, `Briefcase`, `Image`, `TrendingUp`

See [Lucide Icons](https://lucide.dev/icons/) for the full list.

## User Configuration

Default user information displayed in the sidebar.

### UserConfig

```typescript
interface UserConfig {
  name: string;       // User's full name
  role: string;       // User's role or title
  email?: string;     // Optional email
  avatarUrl?: string; // Optional avatar image URL
}
```

### Example

```typescript
defaultUser: {
  name: 'John Smith',
  role: 'Project Manager',
  email: 'john@example.com',
  avatarUrl: 'https://example.com/avatar.jpg'
}
```

## Client Data Profiles

Link your configuration to client research data.

### activeClientId

Points to a client profile in `src/data/clients/`:

```typescript
activeClientId: 'acme-corp'
```

This loads research data from `src/data/clients/acme-corp.ts`.

## Storage

Configuration is stored in browser localStorage under the key `alias-hq-client-config`.

### Manual Storage Access

```javascript
// Get current config
const config = JSON.parse(localStorage.getItem('alias-hq-client-config'));

// Set config
localStorage.setItem('alias-hq-client-config', JSON.stringify(config));

// Clear config (resets to defaults)
localStorage.removeItem('alias-hq-client-config');
```

## Configuration Methods

### Method 1: Settings UI (Recommended)

1. Navigate to `/settings`
2. Use the tabbed interface to configure:
   - **Branding** - Logo, colors, company name
   - **Client Data** - Link to research profiles
   - **Modules** - Enable/disable categories
   - **Navigation** - View navigation structure
   - **Export** - Download/upload config

### Method 2: Direct File Editing

Edit `src/config/clientConfig.ts`:

```typescript
export const loadClientConfig = (): ClientConfig => {
  // Add your custom logic here
  return customConfig;
};
```

### Method 3: Environment Variables

For deployment-specific configs:

```typescript
// src/config/clientConfig.ts
const getConfigFromEnv = (): ClientConfig => {
  return {
    branding: {
      companyName: import.meta.env.VITE_COMPANY_NAME || 'ALIAS HQ',
      // ... more from env
    },
    // ...
  };
};
```

Then in `.env`:
```bash
VITE_COMPANY_NAME=Acme Corp
VITE_TAGLINE=Digital Transformation Partner
```

## Validation

The configuration system includes basic validation:

- Required fields must be present
- Colors should be valid color strings
- Navigation paths should be valid routes
- Icon names should exist in Lucide Icons

Invalid configs fall back to defaults with console warnings.

## Best Practices

1. **Version Control**: Export your config and commit to git
2. **Environment Separation**: Use different configs for dev/staging/production
3. **Logo Fallback**: Always test without custom logo
4. **Module Dependencies**: Some pages may depend on enabled modules
5. **Testing**: Test all navigation items after configuration changes

## Migration Guide

### From Hardcoded to Configured

If migrating from hardcoded values:

1. Export current config from Settings UI
2. Review exported JSON
3. Customize as needed
4. Import back or commit to version control
5. Deploy with new config

## Troubleshooting

### Config Not Loading
- Check browser console for errors
- Verify JSON syntax if manually editing
- Clear localStorage and reload

### Logo Not Showing
- Verify URL is accessible
- Check CORS headers if external URL
- Ensure image format is supported

### Module Not Appearing
- Check `enabled: true` in modules config
- Verify navigation items have correct category
- Check browser console for route errors

## Advanced: Dynamic Configuration

For multi-tenant setups, load config based on domain:

```typescript
export const loadClientConfig = (): ClientConfig => {
  const hostname = window.location.hostname;
  
  if (hostname.includes('client-a.com')) {
    return clientAConfig;
  } else if (hostname.includes('client-b.com')) {
    return clientBConfig;
  }
  
  return defaultConfig;
};
```

## Support

For configuration questions or issues, see:
- [README-TEMPLATE.md](./README-TEMPLATE.md)
- [CLIENT-SETUP-GUIDE.md](./CLIENT-SETUP-GUIDE.md)
