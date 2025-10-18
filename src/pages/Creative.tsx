
import React from 'react';
import { Paintbrush, Ruler, Box, Clock, FileText, Layers, ArrowRight } from 'lucide-react';

const Creative: React.FC = () => {
  const keyComponents = [
    "3D Visualization: Immersive 3D modeling and visualization tools for space planning and design reviews.",
    "Design Library: Centralized repository of design standards, materials, and brand assets for consistency.",
    "Project Management: Comprehensive tools for timeline tracking, resource allocation, and milestone management.",
    "Documentation: Digital management of creative assets, guidelines, and compliance documentation.",
    "Vendor Management: Streamlined coordination with designers, contractors, and suppliers with performance tracking.",
    "Brand Evolution: Tools for planning and executing brand updates and refreshes with minimal disruption."
  ];
  
  const designApproach = [
    "Streamlines the entire lifecycle of creative asset creation and evolution.",
    "Ensures distinctive aesthetic and functional excellence across all touchpoints.",
    "Reduction in project timelines through streamlined processes and better coordination.",
    "Reduction in costs through better planning and resource management.",
    "Ensures consistent design language and quality standards across all properties.",
    "Data-driven design decisions that maximize functionality, aesthetics, and satisfaction."
  ];
  
  const personas = [
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" }
  ];
  
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Beautiful Design.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Brand Excellence.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-creative">Creative</h2>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Comprehensive creative and brand management platform for maintaining design consistency and brand identity.
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
                  src="/placeholder.svg" 
                  alt="Creative" 
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
            <div className="bg-module-creative/5 p-4 rounded-lg border border-module-creative/10">
              <h3 className="font-medium text-module-creative mb-2">Project Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in project timelines through streamlined processes.
              </p>
            </div>
            
            <div className="bg-module-creative/5 p-4 rounded-lg border border-module-creative/10">
              <h3 className="font-medium text-module-creative mb-2">Cost Control</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in costs through better planning and resource management.
              </p>
            </div>
            
            <div className="bg-module-creative/5 p-4 rounded-lg border border-module-creative/10">
              <h3 className="font-medium text-module-creative mb-2">Brand Consistency</h3>
              <p className="text-sm text-muted-foreground">
                Ensures consistent design language and quality standards.
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
            Creative connects with other modules to ensure cohesive brand development.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-operations/20 text-xs font-medium text-module-operations mt-0.5">
                <Box className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Operations:</span> Incorporates operational requirements and infrastructure planning</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <FileText className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics:</span> Leverages usage data to inform design decisions</span>
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
        
        <div className="mt-8 flex justify-between">
          <a 
            href="/engagement" 
            className="group inline-flex items-center gap-2 text-module-creative font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Engagement
          </a>
          <a 
            href="/events" 
            className="group inline-flex items-center gap-2 text-module-creative font-medium hover:underline"
          >
            Next: Events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Creative;
