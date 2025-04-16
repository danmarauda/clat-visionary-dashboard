
import React from 'react';

interface SectionTitleProps {
  number: number;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <h2 className="text-2xl font-bold mb-6">
      <span className="section-number">{number}</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
