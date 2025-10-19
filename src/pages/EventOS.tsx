
import React from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Ticket, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const EventOSPage: React.FC = () => {
  const icon = Calendar;
  const title = "eventOS";
  const description = "Comprehensive event management platform for planning, executing, and analyzing events across all Éclat properties.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Event Planning: Comprehensive planning tools with customizable templates, checklists, and timelines for all event types.",
    "Venue Management: 3D visualization of venue layouts, capacity planning, and resource allocation with real-time availability.",
    "Registration & Ticketing: Seamless attendee registration, ticketing, and check-in with customizable forms and payment processing.",
    "Staff Coordination: Intelligent staff scheduling, role assignment, and real-time communication during events.",
    "Attendee Engagement: Digital tools for attendee networking, Q&A, polling, and feedback collection during and after events.",
    "Post-Event Analytics: Comprehensive event performance metrics, attendee behavior analysis, and ROI calculation."
  ];
  
  const designApproach = [
    "Transforms how Éclat plans, executes, and analyzes events, providing a seamless experience.",
    "Reduction in event planning and execution time through streamlined workflows.",
    "Increase in event bookings through optimized venue utilization and availability.",
    "Reduction in event staffing costs through intelligent scheduling and automation.",
    "Significantly improved attendee experience through seamless registration and engagement.",
    "Comprehensive event analytics enabling continuous improvement and strategic planning."
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
  
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Professional Events.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Seamless Execution.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-event">eventOS</h2>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          {description}
        </p>
      </div>
      
      {/* Key Components Section */}
      <div className="space-y-8 animate-fadeIn">
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
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in event planning and execution time through streamlined workflows.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                Increase in event bookings through optimized venue utilization and availability.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Resource Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in event staffing costs through intelligent scheduling and automation.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Attendee Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Significantly improved attendee experience through seamless registration and engagement.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Brand Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Consistently exceptional event execution reinforcing Éclat's premium brand positioning.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Data-Driven Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive event analytics enabling continuous improvement and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Points Section */}
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            Event OS seamlessly connects with other Eclat OS modules to create a cohesive event experience:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-building/20 text-xs font-medium text-module-building mt-0.5">
                <MapPin className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Building OS:</span> Coordinates venue environmental settings and security for events</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> Synchronizes F&B service with event schedules and requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-community/20 text-xs font-medium text-module-community mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Community OS:</span> Promotes events to relevant member segments and facilitates networking</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-marketing/20 text-xs font-medium text-module-marketing mt-0.5">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Marketing OS:</span> Integrates event promotion, registration, and follow-up communications</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <Ticket className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides comprehensive event performance metrics and attendee insights</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Design Approach Section */}
      <div className="mt-8">
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
      <div className="mt-8">
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
            href="/design-os" 
            className="group inline-flex items-center gap-2 text-module-event font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Design OS
          </a>
          <a 
            href="/hospitality-os" 
            className="group inline-flex items-center gap-2 text-module-event font-medium hover:underline"
          >
            Next: Hospitality OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventOSPage;
