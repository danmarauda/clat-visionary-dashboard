import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const CurrentLandscape: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center mt-4">
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          System Analysis
        </span>
      </div>

      <div className="flex flex-col items-center text-center py-8 space-y-1 mt-16">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Current State.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Future Possibilities.</h2>
        
        <div className="my-24 py-8">
          <span className="text-8xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Current Landscape
          </span>
        </div>
        
        <p className="max-w-2xl text-sm text-muted-foreground">
          Analysis of existing challenges and limitations across Éclat's expanding portfolio of premium sub-brands.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">System Fragmentation</h2>
          <p className="text-muted-foreground">
            Éclat's rapid expansion has led to a proliferation of disconnected systems across properties. Each location operates with its own tech stack, creating operational silos that prevent seamless information flow and coordination between departments and locations.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Data Isolation</h2>
          <p className="text-muted-foreground">
            Critical operational data remains trapped in separate systems, making it difficult to gain comprehensive insights across the organization. This fragmentation prevents leadership from accessing unified analytics and hinders data-driven decision making at all levels.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Workflow Inefficiencies</h2>
          <p className="text-muted-foreground">
            Staff must navigate multiple platforms, duplicate data entry, and manage complex handoffs between systems. These inefficiencies consume valuable time, increase error rates, and detract from delivering exceptional member experiences.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Scaling Difficulties</h2>
          <p className="text-muted-foreground">
            The current technology approach requires significant configuration and integration work for each new location. This creates delays in opening new properties, increases IT costs, and makes it challenging to maintain consistency across the expanding portfolio.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Limited Intelligence</h2>
          <p className="text-muted-foreground">
            Existing systems lack advanced AI capabilities that could automate routine tasks, provide predictive insights, and create more responsive environments. This limitation prevents Éclat from fully leveraging its operational data to enhance both efficiency and member experiences.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <a 
          href="/executive-summary" 
          className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Executive Summary
        </a>
        <a 
          href="/analytics-os" 
          className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Next: Analytics OS
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CurrentLandscape;
