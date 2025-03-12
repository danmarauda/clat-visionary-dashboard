
import React from 'react';
import { 
  Utensils, 
  Coffee, 
  ShoppingCart, 
  Users, 
  Clock, 
  BarChart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const HospitalityOSPage: React.FC = () => {
  const icon = Utensils;
  const title = "hospitalityOS";
  const description = "Sophisticated food & beverage management platform that elevates the dining and service experience across all Éclat properties.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Table Management: Interactive floor plans, reservation management, and real-time table status tracking with wait time predictions.",
    "Menu Management: Digital menu creation, seasonal updates, pricing optimization, and dietary preference tracking.",
    "Inventory Control: Real-time inventory tracking, automated ordering, supplier management, and waste reduction analytics.",
    "Staff Scheduling: AI-optimized staff scheduling based on forecasted demand, skill requirements, and staff preferences.",
    "Order Management: Seamless order taking, kitchen communication, and service timing with mobile device integration.",
    "Performance Analytics: Comprehensive F&B performance metrics, sales analysis, and profitability tracking by item and service period."
  ];
  
  const designApproach = [
    "Streamlines all aspects of food and beverage operations, ensuring exceptional dining experiences.",
    "Increase in F&B revenue through optimized menu engineering and service efficiency.",
    "Reduction in food waste and reduction in inventory costs through intelligent management.",
    "Improvement in staff productivity through optimized scheduling and streamlined workflows.",
    "Consistently exceptional dining experiences with personalized service and reduced wait times.",
    "Data-driven decision making for menu development, pricing, and service optimization."
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
        <h2 className="text-4xl font-light leading-tight tracking-wide">Exceptional Dining.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Seamless Service.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-hospitality">hospitalityOS</h2>
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
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                Increase in F&B revenue through optimized menu engineering and service efficiency.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Reduction in food waste and inventory costs through intelligent management.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Service Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Consistently exceptional dining experiences with personalized service and reduced wait times.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Staff Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Improvement in staff productivity through optimized scheduling and streamlined workflows.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Member Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Significantly improved dining satisfaction through personalized experiences and preference tracking.
              </p>
            </div>
            
            <div className="bg-module-hospitality/5 p-4 rounded-lg border border-module-hospitality/10">
              <h3 className="font-medium text-module-hospitality mb-2">Operational Insight</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven decision making for menu development, pricing, and service optimization.
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
            Hospitality OS seamlessly connects with other Eclat OS modules to create a cohesive dining experience:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Coordinates F&B service for events with specialized menus and staffing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-community/20 text-xs font-medium text-module-community mt-0.5">
                <Users className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Community OS:</span> Tracks member dining preferences and facilitates community dining experiences</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <Coffee className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Enables desk/office ordering and coordinates meeting room catering</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-marketing/20 text-xs font-medium text-module-marketing mt-0.5">
                <ShoppingCart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Marketing OS:</span> Supports F&B promotions, special events, and loyalty programs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-analytics/20 text-xs font-medium text-module-analytics mt-0.5">
                <BarChart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Analytics OS:</span> Provides comprehensive F&B performance metrics and member insights</span>
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
            href="/event-os" 
            className="group inline-flex items-center gap-2 text-module-hospitality font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Event OS
          </a>
          <a 
            href="/marketing-os" 
            className="group inline-flex items-center gap-2 text-module-hospitality font-medium hover:underline"
          >
            Next: Marketing OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalityOSPage;
