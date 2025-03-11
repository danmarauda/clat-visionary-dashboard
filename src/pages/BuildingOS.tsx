
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { Building } from 'lucide-react';

const BuildingOS: React.FC = () => {
  return (
    <ContentPage
      title="Building OS"
      icon={Building}
      description="Building OS is the core module of Éclat OS that provides comprehensive management and control of all building systems. From HVAC and lighting to access control and security, Building OS delivers a unified interface for monitoring and optimizing your entire workspace infrastructure."
      imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
      keyComponents={[
        "Centralized building systems monitoring and control",
        "Energy usage optimization and sustainability metrics",
        "Smart lighting and temperature management",
        "Access control and security system integration",
        "Maintenance scheduling and alert management"
      ]}
      designApproach={[
        "Intuitive floor plan visualization with status overlays",
        "One-click system controls with visual confirmation",
        "Real-time status indicators using consistent color coding",
        "Mobile-responsive interface for on-the-go management",
        "Customizable dashboards for different user roles"
      ]}
      personas={[
        {
          name: "Robert Johnson",
          role: "Facility Manager",
          description: "Responsible for overall building operations. Needs comprehensive system overview and maintenance tools."
        },
        {
          name: "Emma Chen",
          role: "Sustainability Director",
          description: "Focused on energy efficiency and environmental impact. Requires detailed usage metrics and optimization tools."
        },
        {
          name: "James Wilson",
          role: "Security Manager",
          description: "Manages building security and access. Needs security system status and access control management."
        }
      ]}
    />
  );
};

export default BuildingOS;
