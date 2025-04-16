
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, AlertTriangle, Shield } from 'lucide-react';
import { format } from 'date-fns';
import GradientCard from '@/components/atoms/GradientCard';
import LegalRequirementsTable from '@/components/research/LegalRequirementsTable';

const requirements = [
  { 
    item: "High-risk work licence", 
    mandated: false, 
    citation: "OHS Regulations 2017, Sch 3" 
  },
  { 
    item: "Verification of Competency (VOC)", 
    mandated: false, 
    citation: "OHS Act 2004 s.21 (general duty)" 
  },
  { 
    item: "Relevant unit of competency", 
    mandated: false, 
    citation: "Industry Standard (RIISAM213E)" 
  },
  { 
    item: "Site- or EBA-imposed VOC requirement", 
    mandated: 'maybe', 
    citation: "Enterprise Agreement/Site Rules" 
  },
  { 
    item: "Risk assessment & electrical safety", 
    mandated: true, 
    citation: "OHS Act 2004, ESV Guidance" 
  },
  { 
    item: "Union stoppage for non-safety reason", 
    mandated: false, 
    citation: "Fair Work Act 2009 (Cth)" 
  },
  { 
    item: "Union stoppage for safety reason", 
    mandated: true, 
    citation: "OHS Act 2004 s.74" 
  }
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
              <h3 className="text-2xl font-light mt-4">RE: VOC Requirements for Portable Light Towers in Victoria</h3>
              <p className="text-muted-foreground mt-2">
                {format(new Date(2025, 3, 16), 'EEEE, MMMM do yyyy')}
              </p>
            </div>
          </motion.div>

          {/* Key Findings Alert */}
          <GradientCard 
            gradientColors={["from-red-500/20", "via-red-400/20", "to-red-300/20"]}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-xl font-semibold text-red-400">Key Finding</h2>
            </div>
            <p className="text-white/90 font-semibold text-lg mb-4">
              There is <span className="text-red-400">NO specific legal requirement</span> under Victorian law for operators of portable light towers to hold VOC certification.
            </p>
          </GradientCard>

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
            <LegalRequirementsTable requirements={requirements} />
          </GradientCard>

          {/* Penalties Alert */}
          <GradientCard 
            gradientColors={["from-orange-500/20", "via-red-400/20", "to-pink-300/20"]}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <Shield className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-xl font-semibold text-orange-400">Penalties for Unlawful Industrial Action</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">Unlawful industrial action can result in significant penalties:</p>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Individual penalties: Up to <span className="text-orange-400 font-semibold">$19,800</span> per contravention</li>
                <li>Union penalties: Up to <span className="text-orange-400 font-semibold">$99,000</span> per contravention</li>
              </ul>
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
              After thorough examination of Victorian legislation and regulations, I conclude that there is no specific legal requirement under Victorian law for operators of portable light towers to hold a Verification of Competency (VOC) certification. While employers have general duties to ensure workplace safety and adequate training, the specific requirement for VOC certification for portable light tower operation is not mandated in Victorian legislation.
            </p>
          </GradientCard>

          {/* Conclusion */}
          <GradientCard 
            gradientColors={["from-green-500/20", "via-green-400/20", "to-green-300/20"]}
            className="mb-8"
          >
            <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <h2 className="text-xl font-semibold text-green-400 mb-4">Key Conclusion</h2>
              <p className="text-white/90 leading-relaxed">
                Based on thorough examination of the applicable legislation and regulations, there is no specific legal requirement under Victorian law for operators of portable light towers to hold VOC certification. The operation of portable light towers does not constitute "high risk work" requiring licensing under Schedule 3 of the OHS Regulations.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Union action to stop work solely on the basis that workers lack VOC certification for portable light towers would likely constitute unlawful industrial action, as such action would not be in response to a genuine safety concern based on a contravention of OHS legislation.
              </p>
            </div>
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
