
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { LayoutDashboard } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <ContentPage
      title="Dashboard"
      icon={LayoutDashboard}
      description="The Éclat OS Dashboard provides a customizable, comprehensive overview of your entire workspace ecosystem. With intuitive visualizations and real-time data, stakeholders at every level can monitor performance, identify trends, and make informed decisions."
      imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      keyComponents={[
        "Customizable widget-based interface for personalized views",
        "Real-time data visualization with interactive elements",
        "Role-based dashboard configuration for different user needs",
        "Cross-module data integration for comprehensive insights",
        "Export and reporting capabilities for stakeholder communication"
      ]}
      designApproach={[
        "Clean, minimalist layout that prioritizes important information",
        "Consistent visual language across all data representations",
        "Thoughtful use of color to indicate status and priority",
        "Progressive disclosure of complex data with drill-down capabilities",
        "Responsive design that adapts to different screen sizes and devices"
      ]}
      personas={[
        {
          name: "Alexandra Kim",
          role: "CEO",
          description: "Needs high-level KPIs and performance metrics to inform strategic decisions about workspace investments."
        },
        {
          name: "Marcus Johnson",
          role: "Operations Manager",
          description: "Requires detailed operational metrics and system status to ensure smooth day-to-day functioning."
        },
        {
          name: "Sophia Rodriguez",
          role: "Finance Director",
          description: "Focuses on cost metrics, resource utilization, and ROI data to optimize workspace expenditure."
        }
      ]}
    />
  );
};

export default Dashboard;
