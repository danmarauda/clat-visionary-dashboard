
import React from 'react';
import { motion } from 'framer-motion';

interface ResearchDataCardProps {
  title: string;
  content: string | React.ReactNode;
  gradientColors: string[];
}

const ResearchDataCard: React.FC<ResearchDataCardProps> = ({
  title,
  content,
  gradientColors
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative p-6 rounded-xl overflow-hidden
        bg-white/5 backdrop-blur-sm
        border border-white/10
        hover:border-white/20
        transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-20 ${gradientColors.join(' ')}`}
      />
      <div className="relative space-y-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {title}
        </h3>
        <div className="text-sm text-white/70">
          {content}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchDataCard;
