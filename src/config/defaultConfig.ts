import { ClientConfig } from './types';

export const defaultConfig: ClientConfig = {
  id: 'alias-hq-default',
  branding: {
    companyName: 'ALIAS HQ',
    tagline: 'Online Hub for Clients, Customers, and Consultants',
    logoUrl: undefined,
    primaryColor: '#A855F7',
    accentColor: '#3B82F6'
  },
  modules: {
    research: { enabled: true, label: 'RESEARCH', order: 1 },
    aliasHQModules: { enabled: true, label: 'ALIAS Platform Modules', order: 2 },
    businessModules: { enabled: true, label: 'BUSINESS MODULES', order: 3 },
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
    
    // ALIAS Platform Modules
    { id: 'gantt-chart', name: 'Gantt Chart', path: '/gantt', icon: 'BarChart3', category: 'aliasHQModules' },
    { id: 'ai-analytics', name: 'AI Analytics', path: '/ai-analytics', icon: 'Brain', category: 'aliasHQModules' },
    { id: 'gallery', name: 'Gallery', path: '/gallery', icon: 'Image', category: 'aliasHQModules' },
    { id: 'dashboard', name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', category: 'aliasHQModules' },
    
    // BUSINESS MODULES
    { id: 'analytics', name: 'Analytics', path: '/analytics', icon: 'BarChart3', category: 'businessModules' },
    { id: 'operations', name: 'Operations', path: '/operations', icon: 'Settings', category: 'businessModules' },
    { id: 'engagement', name: 'Engagement', path: '/engagement', icon: 'Users', category: 'businessModules' },
    { id: 'creative', name: 'Creative', path: '/creative', icon: 'Palette', category: 'businessModules' },
    { id: 'events', name: 'Events', path: '/events', icon: 'Calendar', category: 'businessModules' },
    { id: 'services', name: 'Services', path: '/services', icon: 'Coffee', category: 'businessModules' },
    { id: 'resources', name: 'Resources', path: '/resources', icon: 'Briefcase', category: 'businessModules' },
    { id: 'projects', name: 'Projects', path: '/projects', icon: 'Kanban', category: 'businessModules' },
    { id: 'documents', name: 'Documents', path: '/documents', icon: 'FileText', category: 'businessModules' },
    { id: 'collaboration', name: 'Collaboration', path: '/collaboration', icon: 'Users2', category: 'businessModules' },
    { id: 'finance', name: 'Finance', path: '/finance', icon: 'DollarSign', category: 'businessModules' },
    { id: 'customers', name: 'Customers', path: '/customers', icon: 'UserCircle', category: 'businessModules' },
    { id: 'people', name: 'People', path: '/people', icon: 'Heart', category: 'businessModules' },
    
    // CONCEPTS
    { id: 'concept-1', name: 'Concept 1', path: '/concept-1', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-2', name: 'Concept 2', path: '/concept-2', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-3', name: 'Concept 3', path: '/concept-3', icon: 'Lightbulb', category: 'concepts' },
    { id: 'concept-4', name: 'Concept 4', path: '/concept-4', icon: 'Lightbulb', category: 'concepts' },
  ],
  defaultUser: {
    name: 'Jesse Hayes',
    role: 'Founder/Director',
    email: 'jesse@aliashq.com'
  },
  activeClientId: 'alias-hq-default'
};
