
import React from 'react';

const RegulatoryFramework = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Applicable Regulatory Framework</h2>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">1.1 Primary Legislation</h3>
      <p className="mb-4 text-white/90">
        The operation of portable light towers in Victoria is primarily governed by:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li><strong>Occupational Health and Safety Act 2004 (Vic)</strong> ("OHS Act")</li>
        <li><strong>Occupational Health and Safety Regulations 2017 (Vic)</strong> ("OHS Regulations")</li>
        <li><strong>Fair Work Act 2009 (Cth)</strong> (for industrial relations matters)</li>
      </ul>
      
      <p className="mb-4 text-white/90">
        The OHS Act establishes the overarching framework for workplace safety in Victoria, while the OHS Regulations provide more specific requirements for various aspects of workplace health and safety, including the operation of plant and equipment.
      </p>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">1.2 Relevant Regulatory Bodies</h3>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li><strong>WorkSafe Victoria</strong> – responsible for administering and enforcing the OHS Act and Regulations</li>
        <li><strong>Fair Work Commission</strong> – deals with industrial disputes and actions</li>
      </ul>
    </section>
  );
};

export default RegulatoryFramework;
