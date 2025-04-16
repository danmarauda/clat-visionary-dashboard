
export interface CompanyProfile {
  companyName: string;
  foundingDate: string;
  industry: string;
  subIndustries: string[];
  businessModel: string;
  employeeCount: number;
  location: string;
  website: string;
}

export interface LeadershipProfile {
  name: string;
  title: string;
  bio: string;
  experience: string[];
  achievements: string[];
  linkedIn?: string;
}

export interface TechnologyProfile {
  currentSystems: string[];
  integrationPoints: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
  };
}

export interface ImplementationPhase {
  name: string;
  duration: string;
  objectives: string[];
  deliverables: string[];
  risks: string[];
}

export interface ResearchProfile {
  company: CompanyProfile;
  leadership: LeadershipProfile[];
  technology: TechnologyProfile;
  implementation: ImplementationPhase[];
}
