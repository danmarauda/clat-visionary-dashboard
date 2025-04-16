
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, BarChart3, Database, Laptop, Cog, ArrowRight } from 'lucide-react';

const ClientResearchOverview: React.FC = () => {
  const researchSections = [
    {
      icon: FileText,
      title: "Company Profile",
      description: "Company fundamentals, market positioning, business model, and key differentiators",
      path: "/research/company-profile",
      color: "blue"
    },
    {
      icon: Users,
      title: "Leadership Analysis",
      description: "Leadership profiles, expertise assessment, and technology adoption stance",
      path: "/research/leadership-analysis",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Business Operations",
      description: "Operational workflow analysis, process efficiency evaluation, and pain points",
      path: "/research/business-operations",
      color: "amber"
    },
    {
      icon: Laptop,
      title: "Technology Ecosystem",
      description: "Current technology stack, integration points, and system limitations",
      path: "/research/technology-ecosystem",
      color: "green"
    },
    {
      icon: Cog,
      title: "Automation Opportunities",
      description: "High-impact automation candidates with business value assessment",
      path: "/research/automation-opportunities",
      color: "red"
    },
    {
      icon: Database,
      title: "Implementation Roadmap",
      description: "Phased implementation plan with timelines and dependencies",
      path: "/research/implementation-roadmap",
      color: "indigo"
    }
  ];

  return (
    <div className="container max-w-5xl mx-auto py-8">
      <div className="text-center mb-12">
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Client Research
        </span>
        
        <h1 className="text-4xl font-light mt-6 mb-3">Research Profile</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive analysis of client operations, technology landscape, and automation opportunities.
          Review and confirm the findings to ensure accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {researchSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link 
              key={index}
              to={section.path}
              className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 group"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-${section.color}/10 mb-4`}>
                <IconComponent className={`h-5 w-5 text-${section.color}-500`} />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {section.description}
              </p>
              <div className="flex items-center text-sm text-primary/80 group-hover:text-primary font-medium">
                View Section
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-between mt-12">
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <Link 
          to="/executive-summary" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          Next: Executive Summary
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ClientResearchOverview;
