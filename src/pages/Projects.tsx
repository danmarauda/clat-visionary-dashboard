import React from 'react';
import { Kanban, CheckCircle, Calendar, Users, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Strategic Delivery.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Project Excellence.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-projects">Projects</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Comprehensive project management platform for planning, tracking, and delivering projects on time and within budget.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/resources" className="group inline-flex items-center gap-2 text-module-projects font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Resources
        </a>
        <a href="/documents" className="group inline-flex items-center gap-2 text-module-projects font-medium hover:underline">
          Next: Documents
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Projects;