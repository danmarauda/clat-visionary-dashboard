
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ResearchPlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  prevPath: string;
  prevLabel: string;
  nextPath: string;
  nextLabel: string;
}

const ResearchPlaceholder: React.FC<ResearchPlaceholderProps> = ({
  title,
  description,
  icon: Icon,
  prevPath,
  prevLabel,
  nextPath,
  nextLabel
}) => {
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      </div>

      <div className="glass rounded-xl p-8 mb-6 text-center">
        <h2 className="text-xl font-semibold mb-4">This section is ready for data entry</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <p className="text-sm text-muted-foreground">
          Click the edit button after data is ready to be added to complete this section of the research profile.
        </p>
      </div>

      <div className="flex justify-between mt-12">
        <Link 
          to={prevPath} 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          {prevLabel}
        </Link>
        <Link 
          to={nextPath} 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          {nextLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ResearchPlaceholder;
