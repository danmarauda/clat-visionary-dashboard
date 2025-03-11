
import React from 'react';
import ContentPage from '@/components/ContentPage';
import { Cpu } from 'lucide-react';

const AIAnalytics: React.FC = () => {
  return (
    <ContentPage
      title="AI & Analytics"
      icon={Cpu}
      description="The AI & Analytics module of Éclat OS leverages advanced artificial intelligence and machine learning algorithms to provide deep insights into workspace utilization, occupancy patterns, and resource optimization opportunities."
      imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      keyComponents={[
        "Predictive occupancy modeling and forecasting",
        "Anomaly detection for space utilization patterns",
        "Automated resource optimization recommendations",
        "Natural language query interface for data exploration",
        "Machine learning models for continuous improvement"
      ]}
      designApproach={[
        "Intuitive data visualization with interactive elements",
        "Progressive disclosure of complex analytics",
        "Clear presentation of AI-generated insights and recommendations",
        "Seamless integration with other Éclat OS modules",
        "Ethical AI principles with transparent logic and decision paths"
      ]}
      personas={[
        {
          name: "David Kim",
          role: "Data Scientist",
          description: "Works with advanced analytics to extract insights from workspace data. Needs powerful visualization tools and access to raw data."
        },
        {
          name: "Olivia Johnson",
          role: "Workplace Strategist",
          description: "Uses analytics to inform workspace design decisions. Requires trend analysis and space optimization recommendations."
        },
        {
          name: "Thomas Weber",
          role: "Executive Decision Maker",
          description: "Relies on high-level insights for strategic planning. Needs clear, actionable intelligence without technical complexity."
        }
      ]}
    />
  );
};

export default AIAnalytics;
