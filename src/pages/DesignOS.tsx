
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Ruler, 
  Box, 
  Clock, 
  FileText, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import ContentPage from '@/components/ContentPage';

const DesignOSPage: React.FC = () => {
  const icon = Paintbrush;
  const title = "designOS";
  const description = "Comprehensive design and construction management platform for creating and evolving Éclat's physical spaces.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "3D Visualization: Immersive 3D modeling and visualization tools for space planning, design reviews, and virtual walkthroughs.",
    "Design Library: Centralized repository of Éclat design standards, materials, fixtures, and furnishings for brand consistency.",
    "Project Management: Comprehensive tools for timeline tracking, resource allocation, and milestone management for construction projects.",
    "Documentation: Digital management of architectural plans, permits, contracts, and compliance documentation.",
    "Vendor Management: Streamlined coordination with architects, designers, contractors, and suppliers with performance tracking.",
    "Space Evolution: Tools for planning and executing space renovations, updates, and reconfigurations with minimal disruption."
  ];
  
  const designApproach = [
    "Streamlines the entire lifecycle of physical space creation and evolution.",
    "Ensures Éclat's distinctive aesthetic and functional excellence across all properties.",
    "Reduction in project timelines through streamlined processes and better coordination.",
    "Reduction in construction and renovation costs through better planning.",
    "Ensures consistent design language and quality standards across all Éclat properties.",
    "Data-driven design decisions that maximize functionality, aesthetics, and member satisfaction."
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
              <Paintbrush className="h-5 w-5 text-primary" />
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
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Project Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in project timelines through streamlined processes and better coordination.
              </p>
            </div>
            
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Cost Control</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in construction and renovation costs through better planning and resource management.
              </p>
            </div>
            
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Brand Consistency</h3>
              <p className="text-sm text-muted-foreground">
                Ensures consistent design language and quality standards across all Éclat properties.
              </p>
            </div>
            
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Risk Mitigation</h3>
              <p className="text-sm text-muted-foreground">
                Reduced compliance issues and construction delays through comprehensive documentation and oversight.
              </p>
            </div>
            
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Space Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven design decisions that maximize functionality, aesthetics, and member satisfaction.
              </p>
            </div>
            
            <div className="bg-module-design/5 p-4 rounded-lg border border-module-design/10">
              <h3 className="font-medium text-module-design mb-2">Expansion Readiness</h3>
              <p className="text-sm text-muted-foreground">
                Scalable design system that facilitates rapid expansion to new locations while maintaining quality.
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
            Design OS connects with other Eclat OS modules to ensure cohesive space development:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-building/20 text-xs font-medium text-module-building mt-0.5">
                <Box className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Building OS:</span> Incorporates building system requirements and infrastructure planning</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <Layers className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Aligns space design with functional requirements and member needs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> Coordinates F&B space design with operational requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Ruler className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Ensures event spaces are designed for versatility and optimal functionality</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <FileText className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Leverages usage data to inform design decisions and space optimization</span>
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
            href="/community-os" 
            className="group inline-flex items-center gap-2 text-module-design font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Community OS
          </a>
          <a 
            href="/event-os" 
            className="group inline-flex items-center gap-2 text-module-design font-medium hover:underline"
          >
            Next: Event OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignOSPage;
