
import React from 'react';
import { Cog } from 'lucide-react';
import ResearchPlaceholder from '@/components/research/ResearchPlaceholder';

const AutomationOpportunities: React.FC = () => {
  return (
    <ResearchPlaceholder
      title="Automation Opportunities"
      description="Document high-impact automation candidates, quantify business value, and provide technical implementation specifications for each opportunity."
      icon={Cog}
      prevPath="/research/technology-ecosystem"
      prevLabel="Back to Technology Ecosystem"
      nextPath="/research/implementation-roadmap"
      nextLabel="Next: Implementation Roadmap"
    />
  );
};

export default AutomationOpportunities;
