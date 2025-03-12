
import React from 'react';
import { GreenButton } from '@/components/ui/GreenButton';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      {/* Navigation Buttons - Moved to top */}
      <div className="mt-6 mb-8 flex justify-between">
        <Link to="/">
          <GreenButton 
            label="Previous: Home" 
            icon={<ArrowLeft className="h-4 w-4" />}
            className="px-6"
          />
        </Link>
        <Link to="/current-landscape">
          <GreenButton 
            label="Next: Current Landscape" 
            icon={<ArrowRight className="h-4 w-4" />}
            className="px-6"
          />
        </Link>
      </div>
    
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Strategic Vision.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Luxury Innovation.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-primary">éclatOS</h2>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          A comprehensive overview of éclatOS, detailing our vision for unifying luxury experiences
          through intelligent automation and seamless integration.
        </p>
      </div>
      
      {/* Key Components Section */}
      <div className="space-y-8 animate-fadeIn">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Key Components</h2>
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
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl border border-border/50">
                <img 
                  src="/lovable-uploads/cb7b9841-6ec6-4bec-9f17-507322c3b411.png" 
                  alt="éclatOS Dashboard" 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Approach Section */}
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Design Approach</h2>
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
      </div>
      
      {/* OS Modules Overview Section */}
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">OS Modules Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      {/* Implementation Timeline Section */}
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Implementation Timeline</h2>
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
      </div>

      <div className="mt-8 flex justify-center gap-6 py-8">
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
