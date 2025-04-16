
import React from 'react';

const EmployerObligationsSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Employer Obligations Under OHS Legislation</h2>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">3.1 General Duties of Employers</h3>
      <p className="mb-4 text-white/90">
        Section 21 of the OHS Act imposes a general duty on employers to provide and maintain a working environment that is safe and without risks to health, so far as is reasonably practicable. This includes:
      </p>
      
      <div className="bg-white/5 border-l-4 border-white/20 p-4 mb-6 rounded-r">
        <p className="mb-2 text-white/80">
          "(1) An employer must, so far as is reasonably practicable, provide and maintain for employees of the employer a working environment that is safe and without risks to health."
        </p>
        <p className="mb-2 text-white/80">
          "(2) Without limiting subsection (1), an employer contravenes that subsection if the employer fails to do any of the following—
          <br />(a) provide or maintain plant or systems of work that are, so far as is reasonably practicable, safe and without risks to health;
          <br />(b) make arrangements for ensuring, so far as is reasonably practicable, safety and the absence of risks to health in connection with the use, handling, storage or transport of plant or substances;
          <br />...
          <br />(e) provide such information, instruction, training or supervision to employees of the employer as is necessary to enable those persons to perform their work in a way that is safe and without risks to health."
        </p>
        <p className="text-sm text-white/60">- Occupational Health and Safety Act 2004 (Vic), Section 21</p>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">3.2 Training and Competency Requirements</h3>
      <p className="mb-4 text-white/90">
        While employers must ensure workers are appropriately trained, the OHS Act and Regulations do not mandate specific VOC certification for portable light tower operation. An employer's obligation is to ensure operators are adequately trained and competent, which may be accomplished through various means, including but not limited to:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li>In-house training programs</li>
        <li>Manufacturer's guidelines and instructions</li>
        <li>Standard operating procedures</li>
        <li>Supervision by experienced personnel</li>
        <li>Third-party training or certification (which may include VOC)</li>
      </ul>
      
      <p className="mb-4 text-white/90">
        The appropriate level of training should be determined based on a risk assessment of the specific equipment and operating environment.
      </p>
    </section>
  );
};

export default EmployerObligationsSection;
