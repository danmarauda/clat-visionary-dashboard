
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResearchSectionHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const ResearchSectionHeader: React.FC<ResearchSectionHeaderProps> = ({
  title,
  subtitle,
  icon: Icon
}) => {
  return (
    <div className="flex flex-col items-center text-center py-6">
      <h2 className="text-4xl font-light leading-tight tracking-wide">{title}</h2>
      <h2 className="text-4xl font-light leading-tight tracking-wide">{subtitle}</h2>
      <div className="my-4">
        <div className="p-2 rounded-lg bg-white/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <p className="max-w-2xl text-sm text-muted-foreground mt-8">
        {subtitle}
      </p>
    </div>
  );
};

export default ResearchSectionHeader;
