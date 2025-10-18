import React from 'react';
import { UserCircle, TrendingUp, Mail, Phone, ArrowRight } from 'lucide-react';

const Customers: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Customer Relationships.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Business Growth.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-customers">Customers</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Powerful customer relationship management platform for managing contacts, deals, and customer interactions.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/finance" className="group inline-flex items-center gap-2 text-module-customers font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Finance
        </a>
        <a href="/people" className="group inline-flex items-center gap-2 text-module-customers font-medium hover:underline">
          Next: People
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Customers;