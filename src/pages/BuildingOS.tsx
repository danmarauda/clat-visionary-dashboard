
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
import ContentPage from '@/components/ContentPage';

const BuildingOSPage: React.FC = () => {
  const icon = Building2;
  const title = "Building OS";
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
    "15-30% reduction in energy costs through intelligent optimization and usage patterns.",
    "40% reduction in unexpected downtime through predictive maintenance and early issue detection.",
    "Comprehensive protection of physical assets and member safety with intelligent monitoring.",
    "Reduced carbon footprint and alignment with ESG goals through optimized resource usage.",
    "Improved comfort and personalized environmental conditions enhancing satisfaction.",
    "Real-time visibility into building performance metrics for data-driven decisions."
  ];
  
  const personas = [
    {
      name: "Michael Chen",
      role: "Facility Manager",
      description: "Responsible for overall building operations and maintenance."
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Director",
      description: "Focuses on energy efficiency and environmental impact."
    },
    {
      name: "David Rodriguez",
      role: "Security Manager",
      description: "Oversees building security systems and personnel."
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
        
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                15-30% reduction in energy costs through intelligent optimization and usage patterns.
              </p>
            </div>
            
            <div className="bg-module-building/5 p-4 rounded-lg border border-module-building/10">
              <h3 className="font-medium text-module-building mb-2">Maintenance Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                40% reduction in unexpected downtime through predictive maintenance and early issue detection.
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
