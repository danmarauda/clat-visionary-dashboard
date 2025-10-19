
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import GradientCard from '@/components/atoms/GradientCard';

interface Requirement {
  item: string;
  mandated: boolean;
  citation: string;
}

const requirements: Requirement[] = [
  { item: "High-risk work licence", mandated: false, citation: "OHS Regulations 2017, Sch 3" },
  { item: "Verification of Competency (VOC)", mandated: true, citation: "OHS Act 2004 s.21, Regs 2017" },
  { item: "Relevant unit of competency", mandated: true, citation: "RTO/Industry Standard" },
  { item: "Site- or EBA-imposed VOC requirement", mandated: true, citation: "Enterprise/Union Rule" },
  { item: "Risk assessment & electrical safety", mandated: true, citation: "OHS Act 2004, ESV Guidance" },
  { item: "Union stoppage for non-safety reason", mandated: false, citation: "Fair Work Act/Federal Court" },
  { item: "Union stoppage for safety reason", mandated: true, citation: "OHS Act 2004 s.74" }
];

const LegalReport = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden -mt-20 -mx-6">
      {/* Background text decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
          tracking-tighter [writing-mode:vertical-rl] blur-[1px]">
          LEGAL
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
          tracking-tighter [writing-mode:vertical-rl] blur-[1px]">
          REPORT
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-light leading-tight tracking-wide">Victorian Court of Law</h1>
              <h2 className="text-4xl font-light leading-tight tracking-wide text-primary">Australia</h2>
              <p className="text-muted-foreground mt-4">
                {format(new Date(2025, 3, 16), 'EEEE, MMMM do yyyy')}
              </p>
            </div>
          </motion.div>

          {/* Requirements Table */}
          <GradientCard 
            gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/10">
                <Gavel className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Legal Requirements</h2>
            </div>

            <div className="grid gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    {req.mandated ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{req.item}</p>
                      <p className="text-sm text-white/60 mt-1">{req.citation}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    req.mandated 
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                  }`}>
                    {req.mandated ? "Required" : "Not Required"}
                  </span>
                </motion.div>
              ))}
            </div>
          </GradientCard>

          {/* Executive Summary */}
          <GradientCard 
            gradientColors={["from-purple-500/20", "via-purple-400/20", "to-purple-300/20"]}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Executive Summary</h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              This report provides a clear, impartial, and legally robust analysis as to whether a licence or
              Verification of Competency (VOC) is required to set up and operate a portable light tower in
              Victoria, Australia, with full reference to relevant legislation, industrial instruments, and judicial
              precedent.
            </p>
          </GradientCard>

          {/* Important Notice */}
          <GradientCard 
            gradientColors={["from-orange-500/20", "via-red-400/20", "to-pink-300/20"]}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/10">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Important Notice</h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              This document is prepared with due reference to Victorian and Commonwealth industrial law,
              the relevant codes of practice, and union policy statements, and adopts a fair and balanced
              approach suitable for scrutiny in legal proceedings in Victoria. For determination of disputes in
              specific circumstances, professional legal representation should be sought.
            </p>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default LegalReport;
