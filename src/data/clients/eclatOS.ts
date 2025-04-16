
import { ResearchProfile } from '../types/ResearchProfile';

export const eclatOSProfile: ResearchProfile = {
  companyProfile: {
    clientName: '[Client Name]',
    foundingDate: '[YYYY-MM-DD]',
    headquarters: {
      city: '[City]',
      state: '[State]',
      country: '[Country]'
    },
    employeeCount: 0,
    industry: '[Primary Industry]',
    subIndustries: ['[Sub-Industry 1]', '[Sub-Industry 2]'],
    businessModel: '[Business Model Description]',
    revenueStreams: ['[Revenue Stream 1]', '[Revenue Stream 2]'],
    missionStatement: '[Mission Statement]',
    competitiveAdvantage: '[Competitive Advantage Description]',
    targetMarkets: ['[Target Market 1]', '[Target Market 2]'],
    websiteURL: '[Website URL]'
  },
  leadershipProfiles: [
    {
      name: '[Leader Name]',
      title: '[Position Title]',
      linkedInURL: '[LinkedIn URL]',
      bio: '[Professional Biography]',
      careerHistory: [
        {
          company: '[Previous Company]',
          title: '[Previous Title]',
          years: '[Year Range]'
        }
      ]
    }
  ],
  automationOpportunities: [
    {
      opportunityId: 'AO-001',
      title: '[Opportunity Title]',
      category: 'Process',
      businessFunction: '[Business Function]',
      currentProcess: '[Current Process Description]',
      painPoints: ['[Pain Point 1]', '[Pain Point 2]'],
      proposedSolution: '[Proposed Solution Description]',
      businessImpact: {
        timeReduction: '[Time Reduction Metric]',
        errorReduction: '[Error Reduction Metric]'
      },
      systemsIntegration: ['[System 1]', '[System 2]'],
      implementationComplexity: 'Medium',
      timeToValue: '[Time to Value]',
      implementationPhase: 1,
      technicalRequirements: {
        integrationRequirements: ['[Integration Requirement 1]'],
        dataRequirements: ['[Data Requirement 1]'],
        userInterfaces: ['[UI Requirement 1]']
      },
      roiFramework: {
        timeSavings: '[Time Savings Calculation]',
        errorReduction: '[Error Reduction Calculation]',
        acceleratedRevenue: '[Revenue Impact Calculation]',
        implementationCost: '[Implementation Cost Details]'
      }
    }
  ]
};
