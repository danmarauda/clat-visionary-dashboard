
import React from 'react';
import { GreenButton } from '@/components/ui/GreenButton';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center mt-4">
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Executive Overview
        </span>
      </div>

      <div className="flex flex-col items-center text-center py-8 space-y-1 mt-8">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Strategic Vision.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Luxury Innovation.</h2>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-6">
          A comprehensive overview of éclatOS, detailing our vision for unifying luxury experiences
          through intelligent automation and seamless integration.
        </p>
      </div>

      <div className="glass rounded-xl p-8 space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Key Components</h2>
          <ul className="space-y-3">
            {[
              "Integrated workspace analytics and management tools",
              "AI-powered space optimization and resource allocation",
              "Real-time occupancy and utilization metrics",
              "Customizable dashboards for different stakeholder needs",
              "Enterprise-grade security and compliance features"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Design Approach</h2>
          <ul className="space-y-3">
            {[
              "Minimalist interface inspired by luxury technology brands",
              "Consistent visual language across all modules",
              "Intuitive navigation with contextual actions",
              "Focus on data visualization and actionable insights",
              "Accessibility and inclusivity as core design principles"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-border/50 mt-6">
          <img 
            src="/lovable-uploads/cb7b9841-6ec6-4bec-9f17-507322c3b411.png" 
            alt="éclatOS Dashboard" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      <div className="glass rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold">OS Modules Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">buildingOS</h3>
              <p className="text-muted-foreground">Intelligent building management system for optimizing space utilization, environmental controls, and maintenance operations.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">hospitalityOS</h3>
              <p className="text-muted-foreground">Elevated guest experience platform managing reservations, preferences, and personalized service delivery.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">analyticsOS</h3>
              <p className="text-muted-foreground">Comprehensive data analytics engine providing actionable insights across all business operations.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">workspaceOS</h3>
              <p className="text-muted-foreground">Flexible workspace management solution for booking, resource allocation, and utilization tracking.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">communityOS</h3>
              <p className="text-muted-foreground">Member engagement platform facilitating connections, events, and community building.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">designOS</h3>
              <p className="text-muted-foreground">Design system and asset management for maintaining brand consistency across digital touchpoints.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">eventOS</h3>
              <p className="text-muted-foreground">Event planning and management solution for seamless execution of programming and experiences.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">marketingOS</h3>
              <p className="text-muted-foreground">Integrated marketing toolkit for campaign management, content creation, and performance analysis.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Business Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Bureau</h3>
              <p className="text-muted-foreground">Creative agency and strategic consulting services focused on brand development and experience design.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Parlor & Portico</h3>
              <p className="text-muted-foreground">Premium business club and hospitality offerings with exclusive membership experiences.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Galerie</h3>
              <p className="text-muted-foreground">Curated exhibition and art programming space supporting cultural engagement initiatives.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Forme</h3>
              <p className="text-muted-foreground">Wellness and lifestyle brand focused on holistic well-being and physical space design.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Notel</h3>
              <p className="text-muted-foreground">Boutique hospitality concept reimagining the traditional hotel experience for modern travelers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Implementation Timeline</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium">1</span>
            </div>
            <div>
              <h3 className="text-xl font-medium">Discovery & Planning</h3>
              <p className="text-muted-foreground">Initial assessment, requirement gathering, and strategic planning for éclatOS implementation.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium">2</span>
            </div>
            <div>
              <h3 className="text-xl font-medium">Core Platform Development</h3>
              <p className="text-muted-foreground">Building the foundation of éclatOS with essential services and infrastructure.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium">3</span>
            </div>
            <div>
              <h3 className="text-xl font-medium">Module Integration</h3>
              <p className="text-muted-foreground">Sequential development and deployment of specialized OS modules based on priority.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium">4</span>
            </div>
            <div>
              <h3 className="text-xl font-medium">Testing & Optimization</h3>
              <p className="text-muted-foreground">Comprehensive testing, user feedback collection, and system optimization.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium">5</span>
            </div>
            <div>
              <h3 className="text-xl font-medium">Full Deployment & Training</h3>
              <p className="text-muted-foreground">Complete system rollout, user training, and ongoing support establishment.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-8">
        <GreenButton 
          label="View Full Proposal" 
          className="px-6"
        />
        <GreenButton 
          label="Schedule Demo" 
          className="px-6"
        />
      </div>
    </div>
  );
};

export default ExecutiveSummary;
