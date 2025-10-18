
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart3, Compass, FlaskConical, Building, Users, GanttChart, ArrowRight } from 'lucide-react';
import { useClientConfig } from '@/contexts/ClientConfigContext';

const Home = () => {
  const { config } = useClientConfig();
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    const hasVisited = localStorage.getItem('alias_has_visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('alias_has_visited', 'true');
    }
  }, []);

  const handleStartTour = () => {
    setShowWelcome(false);
  };

  const sections = [
    {
      title: "Client Research",
      description: "Review and verify the comprehensive client intelligence gathered by our AI research team.",
      icon: FileText,
      to: "/research",
      color: "bg-module-analytics text-white"
    },
    {
      title: "Executive Summary",
      description: "High-level overview of the solution and key benefits.",
      icon: BarChart3,
      to: "/executive-summary",
      color: "bg-module-community text-white"
    },
    {
      title: "Current Landscape",
      description: "Analysis of existing challenges and operational limitations.",
      icon: Compass,
      to: "/current-landscape",
      color: "bg-module-design text-white"
    },
    {
      title: "Solution Modules",
      description: "Explore the proposed OS modules and their functionality.",
      icon: FlaskConical,
      to: "/analytics-os",
      color: "bg-module-hospitality text-white"
    },
    {
      title: "Implementation",
      description: "Detailed timelines and deployment strategy.",
      icon: GanttChart,
      to: "/timeline",
      color: "bg-module-workspace text-white"
    }
  ];

  return (
    <div className="w-full h-full max-w-6xl mx-auto py-6 sm:py-8 md:py-12">
      {showWelcome && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border max-w-lg w-full rounded-xl shadow-lg p-6 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Welcome to {config.branding.companyName}</h2>
            <p className="text-muted-foreground mb-6">
              {config.branding.tagline}
            </p>
            <button 
              onClick={handleStartTour}
              className="w-full py-2.5 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-center py-8 space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{config.branding.companyName}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {config.branding.tagline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, i) => (
          <Link 
            key={i} 
            to={section.to}
            className="group relative overflow-hidden rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 mb-4 group-hover:scale-110 transition-transform">
              <section.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{section.title}</h3>
            <p className="text-muted-foreground text-sm">{section.description}</p>
            <div className="mt-4 flex items-center text-sm text-primary/80 group-hover:text-primary font-medium">
              View Section
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
