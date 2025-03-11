
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { FileText } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  return (
    <ContentPage
      title="Executive Summary"
      icon={FileText}
      description="Éclat OS is a comprehensive workspace management platform designed for luxury and enterprise environments. This executive summary outlines the key features, benefits, and strategic advantages of implementing Éclat OS in your organization."
      imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
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
      personas={[
        {
          name: "Sarah Chen",
          role: "Chief Operations Officer",
          description: "Focused on operational efficiency and strategic resource allocation. Needs high-level dashboards and ROI metrics."
        },
        {
          name: "Michael Rodriguez",
          role: "Facilities Manager",
          description: "Responsible for day-to-day building operations. Requires detailed systems monitoring and maintenance scheduling."
        },
        {
          name: "Aisha Patel",
          role: "IT Director",
          description: "Oversees technology integration and security compliance. Needs system health metrics and security dashboards."
        }
      ]}
    />
  );
};

export default ExecutiveSummary;
