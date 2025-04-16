
import React from 'react';

interface LegislationSection {
  reference: string;
  description: string;
  link: string;
}

interface LegislationCategory {
  title: string;
  sections: LegislationSection[];
}

interface LegislationReferencesSectionProps {
  legislationReferences: LegislationCategory[];
}

const LegislationReferencesSection: React.FC<LegislationReferencesSectionProps> = ({ 
  legislationReferences 
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Legislation References</h2>
      
      {legislationReferences.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <ul className="divide-y divide-white/10">
              {category.sections.map((section, sectionIndex) => (
                <li key={sectionIndex} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{section.reference}</p>
                      <p className="text-white/70 text-sm">{section.description}</p>
                    </div>
                    <a 
                      href={section.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-2 md:mt-0 text-xs underline text-primary hover:text-primary/80 transition-colors"
                    >
                      View Legislation
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LegislationReferencesSection;
