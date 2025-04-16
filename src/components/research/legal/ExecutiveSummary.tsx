
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import GradientCard from '@/components/atoms/GradientCard';

const ExecutiveSummary = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Executive Summary</h2>
      <div className="p-6 rounded-lg bg-white/5 border border-white/10">
        <p className="mb-4 text-white/90">
          This legal analysis examines whether a Verification of Competency (VOC) certification is legally required under Victorian legislation for the operation of portable light towers, with specific reference to requirements applicable to the Melbourne Metro Tunnel Project.
        </p>
        <p className="mb-4 text-white/90">
          Based on comprehensive examination of applicable legislation, regulations, and industry standards, we conclude that:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2 text-white/90">
          <li>There is <strong className="text-red-400">no specific legal requirement under Victorian legislation</strong> for operators of portable light towers to hold a VOC certification.</li>
          <li>Portable light towers do not fall within the categories of "high risk work" equipment requiring licensing under Schedule 3 of the Victorian Occupational Health and Safety Regulations 2017.</li>
          <li>While not a legislative requirement, VOC certification may be mandated by contractual obligations, site-specific requirements, or Enterprise Bargaining Agreements (EBAs) applicable to the Melbourne Metro Tunnel Project.</li>
          <li>Industrial action by the CFMEU or any union to stop work solely on the basis that workers lack VOC certification for portable light towers would likely constitute <strong className="text-red-400">unlawful industrial action</strong> under the Fair Work Act 2009 (Cth) unless specific safety concerns are identified.</li>
        </ol>
      </div>
      
      <GradientCard 
        gradientColors={["from-red-500/20", "via-red-400/20", "to-red-300/20"]}
        className="mt-6 border-2 border-red-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-white/10">
            <AlertTriangle className="h-5 w-5 text-red-400" />
          </div>
          <h2 className="text-xl font-semibold text-red-400">Key Finding</h2>
        </div>
        <p className="text-white/90 font-semibold text-lg mb-4">
          There is <span className="text-red-400 font-bold">NO specific legal requirement</span> under Victorian law for operators of portable light towers to hold VOC certification.
        </p>
        <p className="text-white/70 text-sm">
          <span className="font-semibold">Citation:</span> Occupational Health and Safety Regulations 2017 (Vic), Schedule 3 (High Risk Work Licence Classes)
        </p>
      </GradientCard>
    </section>
  );
};

export default ExecutiveSummary;
