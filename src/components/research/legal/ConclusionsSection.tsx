
import React from 'react';

const ConclusionsSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Conclusions and Recommendations</h2>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">7.1 Legal Status of VOC Requirements</h3>
      <p className="mb-4 text-white/90">
        Based on comprehensive review of the applicable legislation and regulations:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-white/80">
        <li>There is <strong>no specific legal requirement</strong> under Victorian legislation for operators of portable light towers to hold VOC certification.</li>
        <li>The operation of portable light towers does not constitute "high risk work" requiring licensing under Schedule 3 of the OHS Regulations.</li>
        <li>While employers have a general duty to provide adequate training and instruction, they have flexibility in how they fulfill this obligation, and formal VOC certification is just one potential option.</li>
        <li>Site-specific or project-specific requirements in the Melbourne Metro Tunnel Project may impose VOC requirements beyond the statutory minimum.</li>
      </ol>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">7.2 Legality of Union Action</h3>
      <p className="mb-4 text-white/90">
        Union action to stop work solely on the basis that workers lack VOC certification for portable light towers would likely constitute unlawful industrial action, as:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-white/80">
        <li>Such action would not be in response to a genuine safety concern based on a contravention of OHS legislation (unless other specific safety issues are identified).</li>
        <li>The action would likely be characterized as unprotected industrial action under the Fair Work Act.</li>
        <li>Employers would be entitled to:
            <ul className="list-disc pl-8 mt-2 text-white/70">
                <li>Apply to the Fair Work Commission for orders to stop the action</li>
                <li>Withhold payment from employees participating in the action</li>
                <li>Seek penalties against the union and officials involved</li>
            </ul>
        </li>
      </ol>
    </section>
  );
};

export default ConclusionsSection;
