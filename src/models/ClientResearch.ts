
// Types for client research data

// Company Profile
export interface CompanyInfo {
  companyName: string;
  foundingYear: string;
  headquarters: string;
  employeeCount: string;
  industry: string;
  subIndustries: string[];
  businessModel: string;
  revenueStreams: string[];
  missionStatement: string;
  competitiveAdvantage: string;
  targetMarkets: string[];
  websiteURL: string;
}

// Leadership Analysis
export interface LeaderProfile {
  name: string;
  position: string;
  background: string;
  expertise: string;
  technologyStance: string;
  linkedinUrl: string;
}

// Business Operations
export interface BusinessProcess {
  name: string;
  description: string;
  painPoints: string[];
  efficiencyMetrics: {
    cycleTime: string;
    errorRate: string;
    resourceUtilization: string;
  };
}

// Technology Ecosystem
export interface TechnologySystem {
  name: string;
  category: string;
  description: string;
  integrationPoints: string[];
  limitations: string[];
}

// Automation Opportunity
export interface AutomationOpportunity {
  name: string;
  currentProcess: string;
  painPoints: string[];
  businessImpact: string;
  automationApproach: string;
  systemsIntegration: string[];
  implementationComplexity: "Low" | "Medium" | "High";
  timeToValue: string;
  roi: {
    timeSavings: string;
    errorReduction: string;
    processAcceleration: string;
    annualBenefits: string;
    annualCosts: string;
    implementationCost: string;
    firstYearROI: string;
  };
}

// Implementation Roadmap
export interface ImplementationPhase {
  name: string;
  description: string;
  timeline: string;
  keyDeliverables: string[];
  dependencies: string[];
}

// Complete Client Research Profile
export interface ClientResearchProfile {
  companyInfo: CompanyInfo;
  leadershipProfiles: LeaderProfile[];
  businessProcesses: BusinessProcess[];
  technologySystems: TechnologySystem[];
  automationOpportunities: AutomationOpportunity[];
  implementationPhases: ImplementationPhase[];
}
