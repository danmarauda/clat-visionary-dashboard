
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GradientCard from '../atoms/GradientCard';
import ResearchSectionHeader from '../molecules/ResearchSectionHeader';
import { ClientSection } from '@/data/clients/types/ResearchTypes';

interface ResearchSectionProps {
  section: ClientSection;
  children?: React.ReactNode;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({
  section,
  children
}) => {
  return (
    <GradientCard
      gradientColors={section.gradientColors}
      className="mb-6"
    >
      <ResearchSectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon as LucideIcon}
        status={section.status}
      />
      
      <div className="space-y-4">
        <p className="text-base text-white/70">
          {section.description}
        </p>

        {section.benefits && (
          <ul className="space-y-2">
            {section.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <div className="h-1 w-1 rounded-full bg-primary/50" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {section.tags && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {section.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md
                  bg-white/5 text-white/70
                  border border-white/10
                  group-hover:bg-white/10 
                  transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>
    </GradientCard>
  );
};

export default ResearchSection;
