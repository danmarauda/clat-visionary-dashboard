import React from 'react';
import { Coffee, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Exceptional Service.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Customer Delight.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-services">Services</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Sophisticated service management platform that elevates customer experience and operational efficiency.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/events" className="group inline-flex items-center gap-2 text-module-services font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Events
        </a>
        <a href="/resources" className="group inline-flex items-center gap-2 text-module-services font-medium hover:underline">
          Next: Resources
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Services;