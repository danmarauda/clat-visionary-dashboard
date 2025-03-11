
import React from 'react';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'ai-analytics',
    title: 'AI & Analytics',
    description: 'Advanced analytics and AI-powered insights for workspace optimization.',
    path: '/ai-analytics',
  },
  {
    id: 'building-os',
    title: 'Building OS',
    description: 'Comprehensive building management system for modern workspaces.',
    path: '/building-os',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Intuitive dashboards for monitoring all aspects of your workspace.',
    path: '/dashboard',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and compliance features built-in.',
    path: '/security',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-primary">
          Éclat OS
        </h1>
        <p className="text-xl text-muted-foreground">
          The luxury workspace management platform for the modern enterprise
        </p>
      </div>

      <div className="glass overflow-hidden rounded-2xl border border-white/10 shadow-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="aspect-video relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Éclat OS Dashboard Preview"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Proposal and Dashboard Suite
            </h2>
            <p className="text-white/80 max-w-xl">
              Explore our comprehensive solution designed to transform workspace management through elegant design and powerful features.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Link 
            key={feature.id}
            to={feature.path}
            className={cn(
              "group glass rounded-xl p-6 border border-white/5 transition-all duration-300",
              "hover:border-primary/20 hover:shadow-lg",
              "animate-fadeInUp"
            )}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="flex justify-end">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="neo-blur rounded-2xl p-6 sm:p-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Ready to explore?</h2>
            <p className="text-muted-foreground">
              Navigate through our proposal and dashboard suite to discover how Éclat OS can transform your workspace management experience.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                to="/executive-summary"
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
              >
                Executive Summary
              </Link>
              <Link 
                to="/gallery"
                className="px-4 py-2 rounded-lg bg-card hover:bg-card/80 border border-border/50 font-medium transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-primary/40 flex items-center justify-center shadow-lg animate-float">
              <HomeIcon className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
