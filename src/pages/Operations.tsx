
import React from 'react';
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

const Operations: React.FC = () => {
  const keyComponents = [
    "Climate Control: AI-optimized HVAC management with zone-based control and occupancy sensing.",
    "Resource Management: Real-time monitoring and automated optimization of all resources.",
    "Security Systems: Integrated access control and intelligent monitoring systems.",
    "Predictive Maintenance: IoT monitoring with AI-driven failure prediction and scheduling.",
    "Space Monitoring: Real-time occupancy and utilization tracking with analytics.",
    "IoT Integration: Unified device management with open APIs for third-party integrations."
  ];
  
  const designApproach = [
    "Reduction in operational costs through intelligent optimization and usage patterns.",
    "Reduction in unexpected downtime through predictive maintenance and early issue detection.",
    "Comprehensive protection of physical assets and personnel safety.",
    "Reduced carbon footprint and alignment with sustainability goals.",
    "Improved comfort and environmental conditions enhancing satisfaction.",
    "Real-time visibility into operational performance for data-driven decisions."
  ];
  
  const personas = [
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" },
    { name: "Name", role: "Role", description: "User Persona Description" }
  ];
  
  return (
    <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 overflow-x-hidden">
      <div className="flex flex-col items-center text-center py-4 sm:py-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Intelligent Infrastructure.</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Efficient Operations.</h2>
        <div className="my-3 sm:my-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide text-module-operations">Operations</h2>
        </div>
        
        <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-8 px-4">
          Intelligent operations management system that optimizes infrastructure, resource usage, and maintenance across all facilities.
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
                  alt="Operations" 
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
            <div className="bg-module-operations/5 p-4 rounded-lg border border-module-operations/10">
              <h3 className="font-medium text-module-operations mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in operational costs through intelligent optimization.
              </p>
            </div>
            
            <div className="bg-module-operations/5 p-4 rounded-lg border border-module-operations/10">
              <h3 className="font-medium text-module-operations mb-2">Maintenance Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in unexpected downtime through predictive maintenance.
              </p>
            </div>
            
            <div className="bg-module-operations/5 p-4 rounded-lg border border-module-operations/10">
              <h3 className="font-medium text-module-operations mb-2">Enhanced Security</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive protection of physical assets and personnel safety.
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
            Operations seamlessly connects with other modules to create a cohesive operational environment.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <Cpu className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics:</span> Provides operational performance data for comprehensive reporting</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-resources/20 text-xs font-medium text-module-resources mt-0.5">
                <Building2 className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Resources:</span> Coordinates space availability and environmental conditions</span>
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
            href="/analytics" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-operations text-sm sm:text-base font-medium hover:underline"
          >
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Analytics
          </a>
          <a 
            href="/engagement" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-operations text-sm sm:text-base font-medium hover:underline"
          >
            Next: Engagement
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Operations;
