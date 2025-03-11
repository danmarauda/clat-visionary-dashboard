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
    "Improvement in space utilization through data-driven layout and capacity planning.",
    "Reduction in administrative overhead for workspace management and bookings.",
    "Significantly improved workspace experience through seamless booking and personalization.",
    "Increase in meeting room and event space revenue through optimized availability.",
    "Data-driven insights for future space planning and property expansion decisions.",
    "Premium technology experience differentiating Éclat from traditional workspace providers."
  ];
  
  const personas = [
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
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Smart Spaces.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Seamless Experience.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-workspace">workspaceOS</h2>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Intelligent workspace management platform that optimizes space utilization and enhances 
          the member experience across all Éclat properties.
        </p>
      </div>
      
      {/* Key Components Section */}
      <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Key Components</h2>
                <ul className="space-y-2">
                  {keyComponents.map((component, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl border border-border/50">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Impact Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Space Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Improvement in space utilization through data-driven layout and capacity planning.
              </p>
            </div>
            
            <div className="bg-module-workspace/5 p-4 rounded-lg border border-module-workspace/10">
              <h3 className="font-medium text-module-workspace mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in administrative overhead for workspace management and bookings.
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
                Increase in meeting room and event space revenue through optimized availability.
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
      </div>
      
      {/* Integration Points Section */}
      <div className="mt-8 max-w-4xl mx-auto">
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
      </div>
      
      {/* Design Approach Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Design Approach</h2>
          <ul className="space-y-2">
            {designApproach.map((approach, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                  {index + 1}
                </span>
                <span className="text-foreground">{approach}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* User Personas Section - Moved to bottom */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">User Personas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-white/5 hover:border-primary/20 group"
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <span className="text-lg font-medium text-primary">{persona.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{persona.name}</h3>
                      <p className="text-sm text-muted-foreground">{persona.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                </div>
              </div>
            ))}
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
