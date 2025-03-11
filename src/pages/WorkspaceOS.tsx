
import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Users, 
  Bell
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const WorkspaceOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="workspaceOS"
      moduleColor="workspace"
      tagline="Smart Spaces. Seamless Experience."
      description="Intelligent workspace management platform that optimizes space utilization and enhances the member experience across all Éclat properties."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Desk Management: Intuitive desk booking system with interactive floor plans, preferences, and neighborhood settings.",
        "Meeting Room Booking: Comprehensive meeting room scheduling with equipment selection, catering options, and video conferencing integration.",
        "Visitor Management: Streamlined visitor registration, host notifications, and digital wayfinding for a premium guest experience.",
        "Space Visualization: 3D visualization of workspaces with real-time occupancy data and interactive navigation.",
        "Notifications & Alerts: Personalized notifications for bookings, visitors, amenities, and community events.",
        "Mobile Experience: Comprehensive mobile app for on-the-go workspace management, access control, and service requests."
      ]}
      businessImpact={[
        {
          title: "Space Optimization",
          description: "Improvement in space utilization through data-driven layout and capacity planning."
        },
        {
          title: "Operational Efficiency",
          description: "Reduction in administrative overhead for workspace management and bookings."
        },
        {
          title: "Member Satisfaction",
          description: "Significantly improved workspace experience through seamless booking and personalization."
        },
        {
          title: "Revenue Growth",
          description: "Increase in meeting room and event space revenue through optimized availability."
        },
        {
          title: "Resource Planning",
          description: "Data-driven insights for future space planning and property expansion decisions."
        },
        {
          title: "Competitive Advantage",
          description: "Premium technology experience differentiating Éclat from traditional workspace providers."
        }
      ]}
      integrationPoints={[
        {
          icon: Bell,
          module: "building",
          description: "Coordinates environmental settings based on space occupancy and preferences"
        },
        {
          icon: Bell,
          module: "hospitality",
          description: "Enables in-workspace dining orders and meeting room catering"
        },
        {
          icon: Users,
          module: "community",
          description: "Facilitates workspace sharing and collaboration between members"
        },
        {
          icon: Calendar,
          module: "event",
          description: "Synchronizes meeting room availability with event scheduling"
        },
        {
          icon: Bell,
          module: "analytics",
          description: "Provides comprehensive space utilization metrics and occupancy patterns"
        }
      ]}
      designApproach={[
        "Improvement in space utilization through data-driven layout and capacity planning.",
        "Reduction in administrative overhead for workspace management and bookings.",
        "Significantly improved workspace experience through seamless booking and personalization.",
        "Increase in meeting room and event space revenue through optimized availability.",
        "Data-driven insights for future space planning and property expansion decisions.",
        "Premium technology experience differentiating Éclat from traditional workspace providers."
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
      prevModule={{ name: "Marketing OS", path: "/marketing-os" }}
      nextModule={{ name: "Analytics OS", path: "/analytics-os" }}
    />
  );
};

export default WorkspaceOSPage;
