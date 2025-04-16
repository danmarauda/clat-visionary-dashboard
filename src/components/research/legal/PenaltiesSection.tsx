
import React from 'react';

interface PenaltyItem {
  title: string;
  amount: string;
  description: string;
  citation: string;
  link: string;
}

interface PenaltiesSectionProps {
  penaltiesData: PenaltyItem[];
}

const PenaltiesSection: React.FC<PenaltiesSectionProps> = ({ penaltiesData }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Penalties for Unlawful Industrial Action</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {penaltiesData.map((penalty, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-white">{penalty.title}</h3>
            <p className="text-2xl font-bold text-red-500 mb-2">{penalty.amount}</p>
            <p className="text-white/70 mb-4">{penalty.description}</p>
            <p className="text-sm text-white/50">
              <span className="font-semibold">Citation:</span>{' '}
              <a href={penalty.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
                {penalty.citation}
              </a>
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">Employer Obligations During Unlawful Action</h3>
        <ul className="list-disc pl-8 space-y-2 text-white/70">
          <li>Must withhold pay from employees for periods of unprotected industrial action</li>
          <li>For actions less than 4 hours, minimum 4 hours' pay must be withheld</li>
          <li>For actions exceeding 4 hours, pay for the actual period must be withheld</li>
          <li>Can apply to the Fair Work Commission for orders to stop the action</li>
        </ul>
      </div>
    </section>
  );
};

export default PenaltiesSection;
