
import React from 'react';
import { motion } from 'framer-motion';
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
import ContentPage from '@/components/ContentPage';

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
      name: "Persona Name 1",
      role: "Role Title",
      description: "Persona description and key responsibilities."
    },
    {
      name: "Persona Name 2",
      role: "Role Title",
      description: "Persona description and key responsibilities."
    },
    {
      name: "Persona Name 3",
      role: "Role Title",
      description: "Persona description and key responsibilities."
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
      <ContentPage
        title={title}
        icon={icon}
        description={description}
        imageUrl={imageUrl}
        keyComponents={keyComponents}
        designApproach={designApproach}
        personas={personas}
      />
      
      {/* Additional Content Section */}
      <motion.div 
        className="mt-12 max-w-4xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Integration Points</h2>
          <p className="text-muted-foreground mb-4">
            Analytics OS seamlessly integrates with all other Eclat OS modules, providing a unified view of data across the entire platform:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-building/20 text-xs font-medium text-module-building mt-0.5">
                <BarChart3 className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Building OS:</span> Energy usage patterns, occupancy trends, maintenance predictions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-workspace/20 text-xs font-medium text-module-workspace mt-0.5">
                <LineChart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Workspace OS:</span> Space utilization metrics, booking patterns, member flow analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-hospitality/20 text-xs font-medium text-module-hospitality mt-0.5">
                <PieChart className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Hospitality OS:</span> F&B performance, service delivery metrics, inventory optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-event/20 text-xs font-medium text-module-event mt-0.5">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Event OS:</span> Event ROI analysis, attendance patterns, resource utilization</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-community/20 text-xs font-medium text-module-community mt-0.5">
                <Database className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Community OS:</span> Engagement metrics, network analysis, content performance</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-marketing/20 text-xs font-medium text-module-marketing mt-0.5">
                <Zap className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Marketing OS:</span> Campaign performance, brand sentiment analysis, conversion metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-module-design/20 text-xs font-medium text-module-design mt-0.5">
                <Database className="h-4 w-4" />
              </div>
              <span><span className="font-medium">Design OS:</span> Project performance metrics, cost analysis, timeline tracking</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Data-Driven Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Enable leadership to make strategic decisions based on comprehensive data rather than intuition.
              </p>
            </div>
            
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Identify bottlenecks and optimization opportunities across all operations.
              </p>
            </div>
            
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                Uncover new revenue opportunities and optimize pricing strategies.
              </p>
            </div>
            
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Member Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Analyze member behavior to enhance services and experiences.
              </p>
            </div>
            
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Predictive Planning</h3>
              <p className="text-sm text-muted-foreground">
                Anticipate future trends and needs before they emerge.
              </p>
            </div>
            
            <div className="bg-module-analytics/5 p-4 rounded-lg border border-module-analytics/10">
              <h3 className="font-medium text-module-analytics mb-2">Competitive Advantage</h3>
              <p className="text-sm text-muted-foreground">
                Leverage data insights to stay ahead of market trends and competition.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <a 
            href="/workspace-os" 
            className="group inline-flex items-center gap-2 text-module-analytics font-medium hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Previous: Workspace OS
          </a>
          <a 
            href="/building-os" 
            className="group inline-flex items-center gap-2 text-module-analytics font-medium hover:underline"
          >
            Next: Building OS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsOSPage;
