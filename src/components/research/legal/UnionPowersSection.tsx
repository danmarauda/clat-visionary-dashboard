
import React from 'react';

const UnionPowersSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Union Powers and Limitations</h2>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">5.1 Legal Basis for Union Intervention</h3>
      <p className="mb-4 text-white/90">
        Under the Fair Work Act 2009 (Cth), unions have certain rights to represent workers in relation to workplace health and safety matters. However, these rights are subject to significant limitations:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li>Union officials may enter a workplace to investigate suspected contraventions of the Fair Work Act or a fair work instrument (s.481)</li>
        <li>Union officials with permits may enter premises to investigate suspected contraventions of workplace health and safety laws (s.494)</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">5.2 Right of Entry Requirements</h3>
      <p className="mb-4 text-white/90">
        For a union official to lawfully enter a workplace to investigate OHS concerns:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-white/80">
        <li>The official must hold a valid entry permit</li>
        <li>The official must provide at least 24 hours' notice before entry (unless investigating an imminent risk)</li>
        <li>The suspected contravention must relate to an employee who is a member of the union and whose industrial interests the union is entitled to represent</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">5.3 Legitimate Safety Concerns vs. Industrial Tactics</h3>
      <p className="mb-6 text-white/90">
        For a union to legitimately stop work on safety grounds, there must be a reasonable concern about an imminent risk to health or safety. The absence of VOC certification for portable light tower operation, when such certification is not legally required, would not, in itself, constitute a legitimate safety concern justifying a work stoppage.
      </p>
    </section>
  );
};

export default UnionPowersSection;
