import React from 'react';
import { DollarSign, TrendingUp, Receipt, PieChart, ArrowRight } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Financial Control.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Strategic Growth.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-finance">Finance</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Comprehensive financial management platform for budgeting, invoicing, expense tracking, and financial reporting.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/collaboration" className="group inline-flex items-center gap-2 text-module-finance font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Collaboration
        </a>
        <a href="/customers" className="group inline-flex items-center gap-2 text-module-finance font-medium hover:underline">
          Next: Customers
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Finance;