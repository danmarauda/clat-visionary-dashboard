
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, Link2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">éclatOS Proposal</h1>
        <p className="text-muted-foreground">Enterprise Operating System for Luxury Experiences</p>
      </div>

      <div className="flex flex-col items-center text-center py-12 space-y-4">
        <h2 className="text-4xl font-bold">One platform.</h2>
        <h2 className="text-4xl font-bold">Every luxury experience.</h2>
        <p className="max-w-3xl text-muted-foreground mt-4">
          A comprehensive operating system unifying Éclat's diverse business verticals through intelligent automation
          and seamless integration.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Unified Business Platform</h2>
          <p className="text-muted-foreground">
            Seamlessly integrated solutions for every Eclat business vertical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl space-y-4">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Centralized Management</h3>
            <p className="text-muted-foreground">
              Manage all business verticals from a single, unified platform with
              real-time insights and controls.
            </p>
          </div>

          <div className="glass p-6 rounded-xl space-y-4">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Link2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p className="text-muted-foreground">
              Connect all your business processes and data flows with our
              intelligent integration framework.
            </p>
          </div>

          <div className="glass p-6 rounded-xl space-y-4">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Intelligent Automation</h3>
            <p className="text-muted-foreground">
              Automate routine tasks and workflows with AI-powered tools that
              learn and adapt to your business.
            </p>
          </div>
        </div>
      </div>

      <div className="neo-blur rounded-xl p-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Ready to explore the full proposal?</h2>
            <p className="text-muted-foreground">
              Navigate through the sidebar to discover all aspects of the éclatOS platform.
            </p>
          </div>
          <Link 
            to="/executive-summary"
            className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors flex items-center gap-2"
          >
            Start Tour
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
