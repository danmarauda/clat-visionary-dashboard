
import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import ContentPage from '@/components/ContentPage';

const CurrentLandscape: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium w-fit">
              <FileText className="mr-1 h-3.5 w-3.5" />
              Current Landscape
            </div>
            <h1 className="text-4xl font-bold">Operational Challenges</h1>
            <p className="text-lg text-muted-foreground">
              Analysis of existing challenges and limitations across Éclat's expanding portfolio of premium sub-brands.
            </p>
          </div>
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
    </div>
  );
};

export default CurrentLandscape;
