
import React from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Zap, 
  Database, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const AnalyticsOSPage: React.FC = () => {
  const icon = BarChart3;
  const title = "analyticsOS";
  const description = "Comprehensive data analytics and business intelligence platform providing actionable insights across all Éclat operations.";
  const imageUrl = "/placeholder.svg"; // Using placeholder since the referenced image may not exist
  
  const keyComponents = [
    "Real-time Dashboards: Customizable dashboards with real-time data visualization for executives, property managers, and department heads.",
    "Predictive Analytics: AI-powered forecasting for occupancy, revenue, resource utilization, and member engagement.",
    "Unified Data Lake: Centralized repository for all Eclat data with advanced ETL pipelines and data governance.",
    "Performance Metrics: Comprehensive KPIs and metrics tracking for all aspects of Eclat operations.",
    "Trend Analysis: Long-term trend identification and pattern recognition across all data points.",
    "Automated Insights: AI-generated insights and recommendations based on data analysis."
  ];
  
  const designApproach = [
    "Enable leadership to make strategic decisions based on comprehensive data rather than intuition.",
    "Identify bottlenecks and optimization opportunities across all operations.",
    "Uncover new revenue opportunities and optimize pricing strategies.",
    "Analyze member behavior to enhance services and experiences.",
    "Anticipate future trends and needs before they emerge.",
    "Leverage data insights to stay ahead of market trends and competition."
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
    <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 overflow-x-hidden">
      <div className="flex flex-col items-center text-center py-4 sm:py-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Data-Driven Insights.</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">Strategic Decisions.</h2>
        <div className="my-3 sm:my-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide text-module-analytics">analyticsOS</h2>
        </div>
        
        <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-8 px-4">
          {description}
        </p>
      </div>
      
      {/* Key Components Section */}
      <div className="space-y-6 sm:space-y-8 animate-fadeIn">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Components</h2>
                <ul className="space-y-2">
                  {keyComponents.map((component, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-foreground">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="overflow-hidden rounded-lg sm:rounded-xl border border-border/50">
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
      <div className="mt-6 sm:mt-8">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
...
          </div>
        </div>
      </div>
      
      {/* Integration Points Section */}
      <div className="mt-6 sm:mt-8">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Integration Points</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Analytics OS seamlessly integrates with all other Eclat OS modules, providing a unified view of data across the entire platform:
          </p>
          
          <ul className="space-y-3">
...
          </ul>
        </div>
      </div>
      
      {/* Design Approach Section */}
      <div className="mt-6 sm:mt-8">
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Design Approach</h2>
          <ul className="space-y-2">
            {designApproach.map((approach, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-sm sm:text-base text-foreground">{approach}</span>
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
        
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <a 
            href="/workspace-os" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-analytics text-sm sm:text-base font-medium hover:underline"
          >
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Workspace OS
          </a>
          <a 
            href="/building-os" 
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-module-analytics text-sm sm:text-base font-medium hover:underline"
          >
            Next: Building OS
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOSPage;
