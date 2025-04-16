
import React from 'react';
import { Database } from 'lucide-react';
import ResearchPlaceholder from '@/components/research/ResearchPlaceholder';

const ImplementationRoadmap: React.FC = () => {
  return (
    <ResearchPlaceholder
      title="Implementation Roadmap"
      description="Develop a phased implementation approach with timelines, dependencies, and resource requirements for each automation initiative."
      icon={Database}
      prevPath="/research/automation-opportunities"
      prevLabel="Back to Automation Opportunities"
      nextPath="/executive-summary"
      nextLabel="Next: Executive Summary"
    />
  );
};

export default ImplementationRoadmap;
