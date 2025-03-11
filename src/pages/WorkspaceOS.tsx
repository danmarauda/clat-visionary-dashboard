
import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Users, 
  MapPin, 
  Bell, 
  Laptop, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import ContentPage from '@/components/ContentPage';

const WorkspaceOSPage: React.FC = () => {
  const icon = Briefcase;
  const title = "workspaceOS";
  const description = "Intelligent workspace management platform that optimizes space utilization and enhances the member experience across all Éclat properties.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Desk Management: Intuitive desk booking system with interactive floor plans, preferences, and neighborhood settings.",
    "Meeting Room Booking: Comprehensive meeting room scheduling with equipment selection, catering options, and video conferencing integration.",
    "Visitor Management: Streamlined visitor registration, host notifications, and digital wayfinding for a premium guest experience.",
    "Space Visualization: 3D visualization of workspaces with real-time occupancy data and interactive navigation.",
    "Notifications & Alerts: Personalized notifications for bookings, visitors, amenities, and community events.",
    "Mobile Experience: Comprehensive mobile app for on-the-go workspace management, access control, and service requests."
  ];
  
  const designApproach = [
    "30% improvement in space utilization through data-driven layout and capacity planning.",
    "40% reduction in administrative overhead for workspace management and bookings.",
    "Significantly improved workspace experience through seamless booking and personalization.",
    "20% increase in meeting room and event space revenue through optimized availability.",
    "Data-driven insights for future space planning and property expansion decisions.",
    "Premium technology experience differentiating Éclat from traditional workspace providers."
  ];
  
  const personas = [
    {
      name: "Persona Name 1",
      role: "Role Title",
      description: "Persona description and key responsibilities."
    },
    {
      name: "Persona Name 2",
      role: "Role Title",
      description: "Persona description and key responsibilities."
    },
    {
      name: "Persona Name 3",
      role: "Role Title",
      description: "Persona description and key responsibilities."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <ContentPage
        title={title}
        icon={icon}
        description={description}
        imageUrl={imageUrl}
        keyComponents={keyComponents}
        designApproach={designApproach}
        personas={personas}
      />
      
      {/* Additional Content Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            Workspace OS seamlessly connects with other Eclat OS modules to create a cohesive member experience:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-building/20 text-xs font-medium text-module-building mt-0.5">
                <Bell className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Building OS:</span> Coordinates environmental settings based on space occupancy and preferences</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <Bell className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> Enables in-workspace dining orders and meeting room catering</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-community/20 text-xs font-medium text-module-community mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Community OS:</span> Facilitates workspace sharing and collaboration between members</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Calendar className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Synchronizes meeting room availability with event scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <Bell className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides comprehensive space utilization metrics and occupancy patterns</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Space Optimization</h3>
              <p className="text-sm text-muted-foreground">
                30% improvement in space utilization through data-driven layout and capacity planning.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                40% reduction in administrative overhead for workspace management and bookings.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Member Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Significantly improved workspace experience through seamless booking and personalization.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                20% increase in meeting room and event space revenue through optimized availability.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Resource Planning</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven insights for future space planning and property expansion decisions.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Competitive Advantage</h3>
              <p className="text-sm text-muted-foreground">
                Premium technology experience differentiating Éclat from traditional workspace providers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <a 
            href="/marketing-os" 
            className="group inline-flex items-center gap-2 text-module-workspace font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Marketing OS
          </a>
          <a 
            href="/analytics-os" 
            className="group inline-flex items-center gap-2 text-module-workspace font-medium hover:underline"
          >
            Next: Analytics OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceOSPage;
