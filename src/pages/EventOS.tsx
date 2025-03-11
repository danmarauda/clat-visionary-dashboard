
import React from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Ticket, 
  MessageSquare
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const EventOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="eventOS"
      moduleColor="event"
      tagline="Smart Spaces. Seamless Experience."
      description="Comprehensive event management platform for planning, executing, and analyzing events across all Éclat properties."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Event Planning: Comprehensive planning tools with customizable templates, checklists, and timelines for all event types.",
        "Venue Management: 3D visualization of venue layouts, capacity planning, and resource allocation with real-time availability.",
        "Registration & Ticketing: Seamless attendee registration, ticketing, and check-in with customizable forms and payment processing.",
        "Staff Coordination: Intelligent staff scheduling, role assignment, and real-time communication during events.",
        "Attendee Engagement: Digital tools for attendee networking, Q&A, polling, and feedback collection during and after events.",
        "Post-Event Analytics: Comprehensive event performance metrics, attendee behavior analysis, and ROI calculation."
      ]}
      businessImpact={[
        {
          title: "Operational Efficiency",
          description: "Reduction in event planning and execution time through streamlined workflows."
        },
        {
          title: "Revenue Growth",
          description: "Increase in event bookings through optimized venue utilization and availability."
        },
        {
          title: "Resource Optimization",
          description: "Reduction in event staffing costs through intelligent scheduling and automation."
        },
        {
          title: "Attendee Satisfaction",
          description: "Significantly improved attendee experience through seamless registration and engagement."
        },
        {
          title: "Brand Enhancement",
          description: "Consistently exceptional event execution reinforcing Éclat's premium brand positioning."
        },
        {
          title: "Data-Driven Decisions",
          description: "Comprehensive event analytics enabling continuous improvement and strategic planning."
        }
      ]}
      integrationPoints={[
        {
          icon: MapPin,
          module: "building",
          description: "Coordinates venue environmental settings and security for events"
        },
        {
          icon: Clock,
          module: "hospitality",
          description: "Synchronizes F&B service with event schedules and requirements"
        },
        {
          icon: Users,
          module: "community",
          description: "Promotes events to relevant member segments and facilitates networking"
        },
        {
          icon: MessageSquare,
          module: "marketing",
          description: "Integrates event promotion, registration, and follow-up communications"
        },
        {
          icon: Ticket,
          module: "analytics",
          description: "Provides comprehensive event performance metrics and attendee insights"
        }
      ]}
      designApproach={[
        "Transforms how Éclat plans, executes, and analyzes events, providing a seamless experience.",
        "Reduction in event planning and execution time through streamlined workflows.",
        "Increase in event bookings through optimized venue utilization and availability.",
        "Reduction in event staffing costs through intelligent scheduling and automation.",
        "Significantly improved attendee experience through seamless registration and engagement.",
        "Comprehensive event analytics enabling continuous improvement and strategic planning."
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
      prevModule={{ name: "Design OS", path: "/design-os" }}
      nextModule={{ name: "Hospitality OS", path: "/hospitality-os" }}
    />
  );
};

export default EventOSPage;
