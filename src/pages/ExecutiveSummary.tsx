
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { FileText } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center mt-4">
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Executive Overview
        </span>
      </div>

      <div className="flex flex-col items-center text-center py-8 space-y-1 mt-16">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Strategic Vision.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Luxury Innovation.</h2>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          A comprehensive overview of éclatOS, detailing our vision for unifying luxury experiences
          through intelligent automation and seamless integration.
        </p>
      </div>

      <ContentPage
        title=""
        icon={FileText}
        description=""
        imageUrl="/lovable-uploads/cb7b9841-6ec6-4bec-9f17-507322c3b411.png"
        keyComponents={[
          "Integrated workspace analytics and management tools",
          "AI-powered space optimization and resource allocation",
          "Real-time occupancy and utilization metrics",
          "Customizable dashboards for different stakeholder needs",
          "Enterprise-grade security and compliance features"
        ]}
        designApproach={[
          "Minimalist interface inspired by luxury technology brands",
          "Consistent visual language across all modules",
          "Intuitive navigation with contextual actions",
          "Focus on data visualization and actionable insights",
          "Accessibility and inclusivity as core design principles"
        ]}
        personas={[]}
        hidePersonas={true}
        imageBelowContent={true}
      />
    </div>
  );
};

export default ExecutiveSummary;
