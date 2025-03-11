
import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface OSModuleProps {
  moduleName: string;
  moduleColor: string;
  tagline: string;
  description: string;
  keyComponents: string[];
  businessImpact: { title: string; description: string }[];
  integrationPoints: { icon: LucideIcon; module: string; description: string }[];
  designApproach: string[];
  personas: { name: string; role: string; description: string }[];
  imageUrl: string;
  prevModule: { name: string; path: string };
  nextModule: { name: string; path: string };
}

const OSModuleLayout: React.FC<OSModuleProps> = ({
  moduleName,
  moduleColor,
  tagline,
  description,
  keyComponents,
  businessImpact,
  integrationPoints,
  designApproach,
  personas,
  imageUrl,
  prevModule,
  nextModule
}) => {
  // Split tagline on period to create two lines
  const taglineParts = tagline.split('.');
  
  return (
    <div className="w-full max-w-4xl mx-auto px-0">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">{taglineParts[0]}.</h2>
        {taglineParts.length > 1 && (
          <h2 className="text-4xl font-light leading-tight tracking-wide">{taglineParts[1]}.</h2>
        )}
        <div className="my-4">
          <h2 className={`text-4xl font-light leading-tight tracking-wide text-module-${moduleColor}`}>{moduleName}</h2>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          {description}
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
                  src={imageUrl} 
                  alt={moduleName} 
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
            {businessImpact.map((impact, index) => (
              <div key={index} className={`bg-module-${moduleColor}/5 p-4 rounded-lg border border-module-${moduleColor}/10`}>
                <h3 className={`font-medium text-module-${moduleColor} mb-2`}>{impact.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Integration Points Section */}
      <div className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            {moduleName} seamlessly connects with other Eclat OS modules to create a cohesive experience:
          </p>
          
          <ul className="space-y-3">
            {integrationPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <li key={index} className="flex items-start gap-3">
                  <div className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-${point.module}/20 text-xs font-medium text-module-${point.module} mt-0.5`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span><span className="font-medium">{point.module.charAt(0).toUpperCase() + point.module.slice(1)} OS:</span> {point.description}</span>
                </li>
              );
            })}
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
            href={prevModule.path} 
            className={`group inline-flex items-center gap-2 text-module-${moduleColor} font-medium hover:underline`}
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: {prevModule.name}
          </a>
          <a 
            href={nextModule.path} 
            className={`group inline-flex items-center gap-2 text-module-${moduleColor} font-medium hover:underline`}
          >
            Next: {nextModule.name}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OSModuleLayout;
