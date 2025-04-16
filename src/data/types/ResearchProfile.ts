
export interface CompanyProfile {
  clientName: string;
  foundingDate: string;
  headquarters: {
    city: string;
    state: string;
    country: string;
  };
  employeeCount: number;
  industry: string;
  subIndustries: string[];
  businessModel: string;
  revenueStreams: string[];
  missionStatement: string;
  competitiveAdvantage: string;
  targetMarkets: string[];
  websiteURL: string;
  socialProfiles?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  companyLogo?: string;
}

export interface LeadershipProfile {
  name: string;
  title: string;
  profileImageURL?: string;
  linkedInURL: string;
  bio: string;
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  careerHistory: {
    company: string;
    title: string;
    years: string;
  }[];
  achievements?: string[];
  thoughtLeadership?: {
    type: string;
    title: string;
    url?: string;
    date: string;
  }[];
  technologyStance?: string;
}

export interface AutomationOpportunity {
  opportunityId: string;
  title: string;
  category: "Process" | "Data" | "Decision" | "Communication";
  businessFunction: string;
  currentProcess: string;
  painPoints: string[];
  proposedSolution: string;
  businessImpact: Record<string, string>;
  systemsIntegration: string[];
  implementationComplexity: "Low" | "Medium" | "High";
  timeToValue: string;
  implementationPhase: number;
  technicalRequirements: {
    workflowDiagram?: string;
    integrationRequirements: string[];
    dataRequirements: string[];
    userInterfaces: string[];
  };
  roiFramework: {
    timeSavings: string;
    errorReduction: string;
    acceleratedRevenue: string;
    implementationCost: string;
  };
}

export interface ResearchProfile {
  companyProfile: CompanyProfile;
  leadershipProfiles: LeadershipProfile[];
  automationOpportunities: AutomationOpportunity[];
}
