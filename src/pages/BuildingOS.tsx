
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Thermometer, 
  Shield, 
  Lightbulb, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const BuildingOSPage: React.FC = () => {
  const icon = Building2;
  const title = "buildingOS";
  const description = "Intelligent building management system that optimizes infrastructure, energy usage, and maintenance across all Éclat properties.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Climate Control: AI-optimized HVAC management with zone-based control, occupancy sensing, and predictive temperature adjustment.",
    "Energy Management: Real-time energy monitoring, automated optimization, and sustainability reporting with carbon footprint tracking.",
    "Security Systems: Integrated access control, surveillance, and anomaly detection with AI-powered threat assessment.",
    "Predictive Maintenance: IoT sensor monitoring of equipment health with AI-driven failure prediction and automated service scheduling.",
    "Space Monitoring: Real-time occupancy tracking, density analysis, and space utilization metrics with 3D visualization.",
    "IoT Integration: Unified management of all connected devices and sensors with open API for third-party integrations."
  ];
  
  const designApproach = [
    "Reduction in energy costs through intelligent optimization and usage patterns.",
    "Reduction in unexpected downtime through predictive maintenance and early issue detection.",
    "Comprehensive protection of physical assets and member safety with intelligent monitoring.",
    "Reduced carbon footprint and alignment with ESG goals through optimized resource usage.",
    "Improved comfort and personalized environmental conditions enhancing satisfaction.",
    "Real-time visibility into building performance metrics for data-driven decisions."
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
      {/* Key Components Section */}
      <div className="space-y-8 animate-fadeIn">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-gradient-primary">{title}</h1>
          </div>
          <p className="text-muted-foreground max-w-3xl">{description}</p>
        </div>

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
      <motion.div 
        className="mt-8 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in energy costs through intelligent optimization and usage patterns.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Maintenance Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in unexpected downtime through predictive maintenance and early issue detection.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Enhanced Security</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive protection of physical assets and member safety with intelligent monitoring.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Reduced carbon footprint and alignment with ESG goals through optimized resource usage.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Member Experience</h3>
              <p className="text-sm text-muted-foreground">
                Improved comfort and personalized environmental conditions enhancing satisfaction.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Operational Insight</h3>
              <p className="text-sm text-muted-foreground">
                Real-time visibility into building performance metrics for data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Integration Points Section */}
      <motion.div 
        className="mt-8 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            Building OS seamlessly connects with other Eclat OS modules to create a cohesive operational environment:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <Cpu className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides building performance data for comprehensive analytics and reporting</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <Building2 className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Coordinates space availability and environmental conditions based on bookings</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <Thermometer className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> Adjusts environmental settings for F&B spaces based on reservations and events</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Shield className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Synchronizes building systems with event schedules and requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-design/20 text-xs font-medium text-module-design mt-0.5">
                <Wrench className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Design OS:</span> Shares building performance data to inform future design and renovation decisions</span>
            </li>
          </ul>
        </div>
      </motion.div>
      
      {/* Design Approach Section */}
      <motion.div 
        className="mt-8 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
      
      {/* User Personas Section - Moved to bottom */}
      <motion.div 
        className="mt-8 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
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
            href="/analytics-os" 
            className="group inline-flex items-center gap-2 text-module-building font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Analytics OS
          </a>
          <a 
            href="/community-os" 
            className="group inline-flex items-center gap-2 text-module-building font-medium hover:underline"
          >
            Next: Community OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default BuildingOSPage;
