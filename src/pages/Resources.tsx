import React from 'react';
import { Briefcase, MapPin, Calendar, BarChart3, ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Smart Spaces.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Optimized Resources.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-resources">Resources</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Intelligent resource management platform for optimizing space utilization, equipment, and asset allocation.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/services" className="group inline-flex items-center gap-2 text-module-resources font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Services
        </a>
        <a href="/projects" className="group inline-flex items-center gap-2 text-module-resources font-medium hover:underline">
          Next: Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Resources;