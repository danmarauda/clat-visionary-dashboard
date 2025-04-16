
import React from 'react';
import { Laptop } from 'lucide-react';
import ResearchPlaceholder from '@/components/research/ResearchPlaceholder';

const TechnologyEcosystem: React.FC = () => {
  return (
    <ResearchPlaceholder
      title="Technology Ecosystem"
      description="Map the client's current technology stack, document integration points between systems, and identify limitations in the current infrastructure."
      icon={Laptop}
      prevPath="/research/business-operations"
      prevLabel="Back to Business Operations"
      nextPath="/research/automation-opportunities"
      nextLabel="Next: Automation Opportunities"
    />
  );
};

export default TechnologyEcosystem;
