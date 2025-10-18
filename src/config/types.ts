export interface PortalBranding {
  companyName: string;
  tagline: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
}

export interface ModuleConfig {
  enabled: boolean;
  label: string;
  order?: number;
}

export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  icon: string;
  category: string;
}

export interface UserConfig {
  name: string;
  role: string;
  email?: string;
  avatarUrl?: string;
}

export interface ClientConfig {
  id: string;
  branding: PortalBranding;
  modules: {
    research: ModuleConfig;
    aliasHQModules: ModuleConfig;
    businessModules: ModuleConfig;
    concepts: ModuleConfig;
  };
  navigation: NavigationItem[];
  defaultUser: UserConfig;
  activeClientId: string;
}

export interface ClientData {
  id: string;
  name: string;
  config: ClientConfig;
}
