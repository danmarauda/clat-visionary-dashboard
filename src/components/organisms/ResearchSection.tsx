
import React from 'react';
import { motion } from 'framer-motion';

interface ResearchSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={`mt-8 ${className}`}>
      <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchSection;
