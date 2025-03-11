
import React from 'react';
import { 
  Building2, 
  Thermometer, 
  Shield, 
  Lightbulb, 
  Wrench, 
  Cpu, 
  Database
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const BuildingOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="buildingOS"
      moduleColor="building"
      tagline="Smart Infrastructure. Sustainable Operations."
      description="Intelligent building management system that optimizes infrastructure, energy usage, and maintenance across all Éclat properties."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Climate Control: AI-optimized HVAC management with zone-based control, occupancy sensing, and predictive temperature adjustment.",
        "Energy Management: Real-time energy monitoring, automated optimization, and sustainability reporting with carbon footprint tracking.",
        "Security Systems: Integrated access control, surveillance, and anomaly detection with AI-powered threat assessment.",
        "Predictive Maintenance: IoT sensor monitoring of equipment health with AI-driven failure prediction and automated service scheduling.",
        "Space Monitoring: Real-time occupancy tracking, density analysis, and space utilization metrics with 3D visualization.",
        "IoT Integration: Unified management of all connected devices and sensors with open API for third-party integrations."
      ]}
      businessImpact={[
        {
          title: "Cost Reduction",
          description: "Reduction in energy costs through intelligent optimization and usage patterns."
        },
        {
          title: "Maintenance Efficiency",
          description: "Reduction in unexpected downtime through predictive maintenance and early issue detection."
        },
        {
          title: "Enhanced Security",
          description: "Comprehensive protection of physical assets and member safety with intelligent monitoring."
        },
        {
          title: "Sustainability",
          description: "Reduced carbon footprint and alignment with ESG goals through optimized resource usage."
        },
        {
          title: "Member Experience",
          description: "Improved comfort and personalized environmental conditions enhancing satisfaction."
        },
        {
          title: "Operational Insight",
          description: "Real-time visibility into building performance metrics for data-driven decisions."
        }
      ]}
      integrationPoints={[
        {
          icon: Cpu,
          module: "analytics",
          description: "Provides building performance data for comprehensive analytics and reporting"
        },
        {
          icon: Building2,
          module: "workspace",
          description: "Coordinates space availability and environmental conditions based on bookings"
        },
        {
          icon: Thermometer,
          module: "hospitality",
          description: "Adjusts environmental settings for F&B spaces based on reservations and events"
        },
        {
          icon: Shield,
          module: "event",
          description: "Synchronizes building systems with event schedules and requirements"
        },
        {
          icon: Wrench,
          module: "design",
          description: "Shares building performance data to inform future design and renovation decisions"
        }
      ]}
      designApproach={[
        "Reduction in energy costs through intelligent optimization and usage patterns.",
        "Reduction in unexpected downtime through predictive maintenance and early issue detection.",
        "Comprehensive protection of physical assets and member safety with intelligent monitoring.",
        "Reduced carbon footprint and alignment with ESG goals through optimized resource usage.",
        "Improved comfort and personalized environmental conditions enhancing satisfaction.",
        "Real-time visibility into building performance metrics for data-driven decisions."
      ]}
      personas={[
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        }
      ]}
      prevModule={{ name: "Analytics OS", path: "/analytics-os" }}
      nextModule={{ name: "Community OS", path: "/community-os" }}
    />
  );
};

export default BuildingOSPage;
