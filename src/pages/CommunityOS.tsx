
import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Network, 
  Award, 
  Heart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const CommunityOSPage: React.FC = () => {
  const icon = Users;
  const title = "communityOS";
  const description = "Sophisticated member engagement platform that fosters meaningful connections and enhances the Éclat community experience.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Member Profiles: Rich member profiles with interests, skills, and networking preferences for meaningful connections.",
    "Intelligent Networking: AI-powered member matching based on professional goals, interests, and potential synergies.",
    "Community Calendar: Curated events, workshops, and networking opportunities with personalized recommendations.",
    "Discussion Forums: Topic-based discussion spaces for knowledge sharing, collaboration, and community building.",
    "Recognition System: Member achievements, contributions, and milestones celebrated through digital recognition.",
    "Wellness Programs: Community-driven wellness initiatives, challenges, and support groups for holistic wellbeing."
  ];
  
  const designApproach = [
    "Increase in member retention through stronger community bonds and engagement.",
    "Increase in member referrals driven by positive community experiences.",
    "Strengthened emotional connection to the Éclat brand through community identity.",
    "Enhanced perceived value of membership beyond physical space and amenities.",
    "Increased business transactions and collaborations between members.",
    "Direct channel for member feedback and continuous service improvement."
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
  
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Meaningful Connections.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Vibrant Community.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-community">communityOS</h2>
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
                  alt={title} 
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
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Member Retention</h3>
              <p className="text-sm text-muted-foreground">
                Increase in member retention through stronger community bonds and engagement.
              </p>
            </div>
            
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Referral Growth</h3>
              <p className="text-sm text-muted-foreground">
                Increase in member referrals driven by positive community experiences.
              </p>
            </div>
            
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Brand Loyalty</h3>
              <p className="text-sm text-muted-foreground">
                Strengthened emotional connection to the Éclat brand through community identity.
              </p>
            </div>
            
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Value Perception</h3>
              <p className="text-sm text-muted-foreground">
                Enhanced perceived value of membership beyond physical space and amenities.
              </p>
            </div>
            
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Business Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Increased business transactions and collaborations between members.
              </p>
            </div>
            
            <div className="bg-module-community/5 p-4 rounded-lg border border-module-community/10">
              <h3 className="font-medium text-module-community mb-2">Feedback Loop</h3>
              <p className="text-sm text-muted-foreground">
                Direct channel for member feedback and continuous service improvement.
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
            Community OS connects with other Eclat OS modules to create a seamless member experience:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Calendar className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Synchronizes community events with venue availability and resources</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Facilitates collaboration spaces based on community interests and activities</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <Heart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> Coordinates community dining experiences and special F&B offerings</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-marketing/20 text-xs font-medium text-module-marketing mt-0.5">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Marketing OS:</span> Leverages community engagement for targeted communications and campaigns</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <Award className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides engagement metrics and community health indicators</span>
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
      
      {/* User Personas Section - Moved to bottom */}
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
            href="/building-os" 
            className="group inline-flex items-center gap-2 text-module-community font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Building OS
          </a>
          <a 
            href="/design-os" 
            className="group inline-flex items-center gap-2 text-module-community font-medium hover:underline"
          >
            Next: Design OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityOSPage;
