
import React from 'react';
import { motion } from 'framer-motion';
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
import ContentPage from '@/components/ContentPage';

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
    "35% reduction in event planning and execution time through streamlined workflows.",
    "25% increase in event bookings through optimized venue utilization and availability.",
    "20% reduction in event staffing costs through intelligent scheduling and automation.",
    "Significantly improved attendee experience through seamless registration and engagement.",
    "Comprehensive event analytics enabling continuous improvement and strategic planning."
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
      <motion.div 
        className="mt-12 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
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
        
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                35% reduction in event planning and execution time through streamlined workflows.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                25% increase in event bookings through optimized venue utilization and availability.
              </p>
            </div>
            
            <div className="bg-module-event/5 p-4 rounded-lg border border-module-event/10">
              <h3 className="font-medium text-module-event mb-2">Resource Optimization</h3>
              <p className="text-sm text-muted-foreground">
                20% reduction in event staffing costs through intelligent scheduling and automation.
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
      </motion.div>
    </div>
  );
};

export default EventOSPage;
