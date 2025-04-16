
import React from 'react';

const ReferencesSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">8. References and Citations</h2>
      
      <ol className="list-decimal pl-6 mb-4 space-y-3 text-sm text-white/80">
        <li id="ref1">Occupational Health and Safety Regulations 2017 (Vic), Schedule 3 - High risk work licence classes. Available at: <a href="http://classic.austlii.edu.au/au/legis/vic/consol_reg/ohasr2017382/sch3.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">http://classic.austlii.edu.au/au/legis/vic/consol_reg/ohasr2017382/sch3.html</a></li>
        
        <li id="ref2">Occupational Health and Safety Act 2004 (Vic), Section 21 - Duties of employers to employees. Available at: <a href="https://classic.austlii.edu.au/au/legis/vic/consol_act/ohasa2004273/s21.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://classic.austlii.edu.au/au/legis/vic/consol_act/ohasa2004273/s21.html</a></li>
        
        <li id="ref3">RIISAM213E Position and set up mobile lighting - Training.gov.au. Available at: <a href="https://training.gov.au/Training/Details/RIISAM213E" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://training.gov.au/Training/Details/RIISAM213E</a></li>
        
        <li id="ref4">CFMEU (Victorian Construction and General Division) Enterprise Agreement 2024-2027. Fair Work Commission. Available at: <a href="https://www.fwc.gov.au/documents/agreement-applications/ag2025_422.pdf" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://www.fwc.gov.au/documents/agreement-applications/ag2025_422.pdf</a></li>
        
        <li id="ref5">Energy Safe Victoria, No Go Zones – working around energy assets. Available at: <a href="https://www.energysafe.vic.gov.au/industry-guidance/electrical/electrical-network-infrastructure/working-around-powerlines" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://www.energysafe.vic.gov.au/industry-guidance/electrical/electrical-network-infrastructure/working-around-powerlines</a></li>
      </ol>
    </section>
  );
};

export default ReferencesSection;
