
import React from 'react';
import { BarChart3 } from 'lucide-react';
import ResearchPlaceholder from '@/components/research/ResearchPlaceholder';

const BusinessOperations: React.FC = () => {
  return (
    <ResearchPlaceholder
      title="Business Operations"
      description="Analyze core business processes, document operational workflows, and identify efficiency gaps and pain points across departments."
      icon={BarChart3}
      prevPath="/research/leadership-analysis"
      prevLabel="Back to Leadership Analysis"
      nextPath="/research/technology-ecosystem"
      nextLabel="Next: Technology Ecosystem"
    />
  );
};

export default BusinessOperations;
