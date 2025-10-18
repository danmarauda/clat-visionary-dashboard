import React from 'react';
import { Heart, Users, Award, Calendar, ArrowRight } from 'lucide-react';

const People: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Team Excellence.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">People First.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-people">People</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Integrated human resources platform for managing team members, performance, and organizational culture.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/customers" className="group inline-flex items-center gap-2 text-module-people font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Customers
        </a>
        <a href="/analytics" className="group inline-flex items-center gap-2 text-module-people font-medium hover:underline">
          Next: Analytics
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default People;