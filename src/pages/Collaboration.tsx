import React from 'react';
import { Users2, MessageSquare, Video, Share2, ArrowRight } from 'lucide-react';

const Collaboration: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Connected Teams.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Productive Collaboration.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-collaboration">Collaboration</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Integrated team collaboration platform for communication, coordination, and knowledge sharing.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/documents" className="group inline-flex items-center gap-2 text-module-collaboration font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Documents
        </a>
        <a href="/finance" className="group inline-flex items-center gap-2 text-module-collaboration font-medium hover:underline">
          Next: Finance
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Collaboration;