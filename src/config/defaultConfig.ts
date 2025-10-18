import { ClientConfig } from './types';

export const defaultConfig: ClientConfig = {
  id: 'client-portal-template',
  branding: {
    companyName: 'Your Company',
    tagline: 'Client Portal - Configure in Settings',
    logoUrl: undefined,
    primaryColor: '#A855F7',
    accentColor: '#3B82F6'
  },
  modules: {
    research: { enabled: true, label: 'RESEARCH', order: 1 },
    aliasHQModules: { enabled: true, label: 'ALIAS HQ MODULES', order: 2 },
    businessUnits: { enabled: true, label: 'BUSINESS UNITS', order: 3 },
    concepts: { enabled: true, label: 'CONCEPTS', order: 4 }
  },
  navigation: [
    // RESEARCH
    { id: 'client-research-overview', name: 'Client Research Overview', path: '/research/overview', icon: 'FileText', category: 'research' },
    { id: 'company-profile', name: 'Company Profile', path: '/research/company', icon: 'Building2', category: 'research' },
    { id: 'leadership-analysis', name: 'Leadership Analysis', path: '/research/leadership', icon: 'Users', category: 'research' },
    { id: 'technology-ecosystem', name: 'Technology Ecosystem', path: '/research/technology', icon: 'Server', category: 'research' },
    { id: 'business-operations', name: 'Business Operations', path: '/research/operations', icon: 'Settings', category: 'research' },
    { id: 'automation-opportunities', name: 'Automation Opportunities', path: '/research/automation', icon: 'Sparkles', category: 'research' },
    { id: 'implementation-roadmap', name: 'Implementation Roadmap', path: '/research/roadmap', icon: 'Map', category: 'research' },
    
    // ALIAS HQ MODULES
    { id: 'gantt-chart', name: 'Gantt Chart', path: '/gantt', icon: 'BarChart3', category: 'aliasHQModules' },
    { id: 'ai-analytics', name: 'AI Analytics', path: '/ai-analytics', icon: 'Brain', category: 'aliasHQModules' },
    { id: 'gallery', name: 'Gallery', path: '/gallery', icon: 'Image', category: 'aliasHQModules' },
    { id: 'dashboard', name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', category: 'aliasHQModules' },
    
    // BUSINESS UNITS
    { id: 'analytics-os', name: 'Analytics OS', path: '/analytics-os', icon: 'TrendingUp', category: 'businessUnits' },
    { id: 'building-os', name: 'Building OS', path: '/building-os', icon: 'Building', category: 'businessUnits' },
    { id: 'community-os', name: 'Community OS', path: '/community-os', icon: 'Users', category: 'businessUnits' },
    { id: 'design-os', name: 'Design OS', path: '/design-os', icon: 'Palette', category: 'businessUnits' },
    { id: 'event-os', name: 'Event OS', path: '/event-os', icon: 'Calendar', category: 'businessUnits' },
    { id: 'hospitality-os', name: 'Hospitality OS', path: '/hospitality-os', icon: 'Coffee', category: 'businessUnits' },
    { id: 'workspace-os', name: 'Workspace OS', path: '/workspace-os', icon: 'Briefcase', category: 'businessUnits' },
    
    // CONCEPTS
    { id: 'concept-1', name: 'Concept 1', path: '/concept-1', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-2', name: 'Concept 2', path: '/concept-2', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-3', name: 'Concept 3', path: '/concept-3', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-4', name: 'Concept 4', path: '/concept-4', icon: 'Lightbulb', category: 'concepts' },
  ],
  defaultUser: {
    name: 'Admin User',
    role: 'Administrator',
    email: 'admin@example.com'
  },
  activeClientId: 'client-portal-template'
};
