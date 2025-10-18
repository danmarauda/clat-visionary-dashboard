
import React from 'react';
import { Calendar, Users, Clock, MapPin, Ticket, MessageSquare, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const keyComponents = [
    "Event Planning: Comprehensive planning tools with customizable templates, checklists, and timelines for all event types.",
    "Venue Management: 3D visualization of venue layouts, capacity planning, and resource allocation with real-time availability.",
    "Registration & Ticketing: Seamless attendee registration, ticketing, and check-in with customizable forms and payment processing.",
    "Staff Coordination: Intelligent staff scheduling, role assignment, and real-time communication during events.",
    "Attendee Engagement: Digital tools for attendee networking, Q&A, polling, and feedback collection.",
    "Post-Event Analytics: Comprehensive event performance metrics, attendee behavior analysis, and ROI calculation."
  ];
  
  const designApproach = [
    "Transforms how events are planned, executed, and analyzed, providing a seamless experience.",
    "Reduction in event planning and execution time through streamlined workflows.",
    "Increase in event bookings through optimized venue utilization and availability.",
    "Reduction in event staffing costs through intelligent scheduling and automation.",
    "Significantly improved attendee experience through seamless registration and engagement.",
    "Comprehensive event analytics enabling continuous improvement and strategic planning."
  ];
  
  const personas = [
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" }
  ];
  
  return (
    <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 overflow-x-hidden">
      <div className="flex flex-col items-center text-center py-4 sm:py-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Professional Events.</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Seamless Execution.</h2>
        <div className="my-3 sm:my-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide text-module-events">Events</h2>
        </div>
        
        <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-8 px-4">
          Comprehensive event management platform for planning, executing, and analyzing events.
        </p>
      </div>
      
      {/* Key Components Section */}
      <div className="space-y-6 sm:space-y-8 animate-fadeIn">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Components</h2>
                <ul className="space-y-2">
                  {keyComponents.map((component, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-foreground">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="overflow-hidden rounded-lg sm:rounded-xl border border-border/50">
                <img 
                  src="/placeholder.svg" 
                  alt="Events" 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Impact Section */}
      <div className="mt-6 sm:mt-8">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-module-events/5 p-3 sm:p-4 rounded-lg border border-module-events/10">
              <h3 className="text-sm sm:text-base font-medium text-module-events mb-2">Operational Efficiency</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Reduction in event planning and execution time through streamlined workflows.
              </p>
            </div>
            
            <div className="bg-module-events/5 p-3 sm:p-4 rounded-lg border border-module-events/10">
              <h3 className="text-sm sm:text-base font-medium text-module-events mb-2">Revenue Growth</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Increase in event bookings through optimized venue utilization.
              </p>
            </div>
            
            <div className="bg-module-events/5 p-3 sm:p-4 rounded-lg border border-module-events/10">
              <h3 className="text-sm sm:text-base font-medium text-module-events mb-2">Attendee Satisfaction</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Significantly improved attendee experience through seamless execution.
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
            Events seamlessly connects with other modules to create a cohesive event experience.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-operations/20 text-xs font-medium text-module-operations mt-0.5">
                <MapPin className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Operations:</span> Coordinates venue settings and security for events</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-engagement/20 text-xs font-medium text-module-engagement mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Engagement:</span> Promotes events and facilitates networking</span>
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
      
      {/* User Personas Section */}
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
        
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <a 
            href="/creative" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-events text-sm sm:text-base font-medium hover:underline"
          >
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Creative
          </a>
          <a 
            href="/services" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-events text-sm sm:text-base font-medium hover:underline"
          >
            Next: Services
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
