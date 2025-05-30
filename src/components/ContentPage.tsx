
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserPersona {
  name: string;
  role: string;
  description: string;
}

interface ContentPageProps {
  title: string;
  icon: LucideIcon;
  description: string;
  imageUrl: string;
  keyComponents: string[];
  designApproach: string[];
  personas: UserPersona[];
  hidePersonas?: boolean;
  hideInputBoxes?: boolean;
  imageBelowContent?: boolean;
}

const ContentPage: React.FC<ContentPageProps> = ({
  title,
  icon: Icon,
  description,
  imageUrl,
  keyComponents,
  designApproach,
  personas,
  hidePersonas = false,
  hideInputBoxes = false,
  imageBelowContent = false,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-gradient-primary">{title}</h1>
        </div>
        <p className="text-muted-foreground max-w-3xl">{description}</p>
      </div>

      <div className="glass rounded-2xl p-6 md:p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className={`grid grid-cols-1 ${!imageBelowContent ? 'lg:grid-cols-2' : ''} gap-8`}>
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

            <div>
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

          {!imageBelowContent && (
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl border border-border/50">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          )}
        </div>
        
        {imageBelowContent && (
          <div className="mt-8 overflow-hidden rounded-xl border border-border/50">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        )}
      </div>

      {!hidePersonas && (
        personas.length > 0 ? (
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl font-semibold mb-4">User Personas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        ) : (
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl font-semibold mb-4">User Personas</h2>
            <div className="glass rounded-xl p-5 border border-dashed border-border/50">
              <p className="text-center text-muted-foreground">No user personas defined yet. Add personas to better understand who will be using this module.</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContentPage;
