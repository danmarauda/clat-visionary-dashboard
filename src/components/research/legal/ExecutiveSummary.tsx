
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import GradientCard from '@/components/atoms/GradientCard';

const ExecutiveSummary = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Executive Summary</h2>
      <GradientCard 
        gradientColors={["from-red-500/20", "via-red-400/20", "to-red-300/20"]}
        className="mb-8 border-2 border-red-500/20"
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
