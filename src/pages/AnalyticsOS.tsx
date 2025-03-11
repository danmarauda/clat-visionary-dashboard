
import React from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Zap, 
  Database
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const AnalyticsOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="analyticsOS"
      moduleColor="analytics"
      tagline="Data-Driven Insights. Strategic Decisions."
      description="Comprehensive data analytics and business intelligence platform providing actionable insights across all Éclat operations."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "Real-time Dashboards: Customizable dashboards with real-time data visualization for executives, property managers, and department heads.",
        "Predictive Analytics: AI-powered forecasting for occupancy, revenue, resource utilization, and member engagement.",
        "Unified Data Lake: Centralized repository for all Eclat data with advanced ETL pipelines and data governance.",
        "Performance Metrics: Comprehensive KPIs and metrics tracking for all aspects of Eclat operations.",
        "Trend Analysis: Long-term trend identification and pattern recognition across all data points.",
        "Automated Insights: AI-generated insights and recommendations based on data analysis."
      ]}
      businessImpact={[
        {
          title: "Data-Driven Decisions",
          description: "Enable leadership to make strategic decisions based on comprehensive data rather than intuition."
        },
        {
          title: "Operational Efficiency",
          description: "Identify bottlenecks and optimization opportunities across all operations."
        },
        {
          title: "Revenue Growth",
          description: "Uncover new revenue opportunities and optimize pricing strategies."
        },
        {
          title: "Member Satisfaction",
          description: "Analyze member behavior to enhance services and experiences."
        },
        {
          title: "Predictive Planning",
          description: "Anticipate future trends and needs before they emerge."
        },
        {
          title: "Competitive Advantage",
          description: "Leverage data insights to stay ahead of market trends and competition."
        }
      ]}
      integrationPoints={[
        {
          icon: BarChart3,
          module: "building",
          description: "Energy usage patterns, occupancy trends, maintenance predictions"
        },
        {
          icon: LineChart,
          module: "workspace",
          description: "Space utilization metrics, booking patterns, member flow analysis"
        },
        {
          icon: PieChart,
          module: "hospitality",
          description: "F&B performance, service delivery metrics, inventory optimization"
        },
        {
          icon: TrendingUp,
          module: "event",
          description: "Event ROI analysis, attendance patterns, resource utilization"
        },
        {
          icon: Database,
          module: "community",
          description: "Engagement metrics, network analysis, content performance"
        },
        {
          icon: Zap,
          module: "marketing",
          description: "Campaign performance, brand sentiment analysis, conversion metrics"
        },
        {
          icon: Database,
          module: "design",
          description: "Project performance metrics, cost analysis, timeline tracking"
        }
      ]}
      designApproach={[
        "Enable leadership to make strategic decisions based on comprehensive data rather than intuition.",
        "Identify bottlenecks and optimization opportunities across all operations.",
        "Uncover new revenue opportunities and optimize pricing strategies.",
        "Analyze member behavior to enhance services and experiences.",
        "Anticipate future trends and needs before they emerge.",
        "Leverage data insights to stay ahead of market trends and competition."
      ]}
      personas={[
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
      ]}
      prevModule={{ name: "Workspace OS", path: "/workspace-os" }}
      nextModule={{ name: "Building OS", path: "/building-os" }}
    />
  );
};

export default AnalyticsOSPage;
