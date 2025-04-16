
import React from 'react';

const VOCRequirementsSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">2. VOC Requirements for Portable Light Towers</h2>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">2.1 High Risk Work Licensing Requirements</h3>
      <p className="mb-4 text-white/90">
        The OHS Regulations Part 3.6 and Schedule 3 define what constitutes "high risk work" requiring licensing. After comprehensive review of Schedule 3, it is clear that portable light towers are <strong>not listed</strong> among the equipment requiring high risk work licensing.
      </p>
      
      <div className="bg-white/5 border-l-4 border-white/20 p-4 mb-6 rounded-r">
        <p className="mb-2 text-white/80 italic">
          "A high risk work licence means any of the licences listed in Schedule 3 of the regulations, which describes the scope of the licence and its exclusions."
        </p>
        <p className="text-sm text-white/60">- OHS Regulations 2017, Regulation 5 (Definition)</p>
      </div>
      
      <p className="mb-4 text-white/90">
        The high risk work license categories in Schedule 3 cover:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li>Scaffolding and rigging</li>
        <li>Crane and hoist operation</li>
        <li>Forklift operation</li>
        <li>Pressure equipment operation</li>
      </ul>
      
      <p className="mb-6 text-white/90">
        Portable light towers do not fall within any of these categories.
      </p>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">2.2 VOC as an Industry Practice</h3>
      <p className="mb-4 text-white/90">
        Verification of Competency (VOC) is an industry practice used to verify that a worker has the ability to safely operate specific equipment or perform certain tasks, even where no formal license is required by law.
      </p>
      
      <p className="mb-4 text-white/90">
        Based on information from the Rail Industry Worker (RIW) Business Rules, there appears to be industry-specific VOC requirements for portable light towers in the rail sector. However, this is an <strong>industry standard rather than a legislative requirement</strong>.
      </p>
    </section>
  );
};

export default VOCRequirementsSection;
