import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, AlertTriangle, Shield, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
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
    mandated: "maybe", 
    citation: "OHS Act 2004 s.21; Metro Tunnel EBA cl.32" 
  },
  { 
    item: "Relevant unit of competency", 
    mandated: false, 
    citation: "Industry Standard (RIISAM213E)" 
  },
  { 
    item: "Site- or EBA-imposed VOC requirement", 
    mandated: "maybe", 
    citation: "Metro Tunnel EBA/Site Rules" 
  },
  { 
    item: "Risk assessment & electrical safety", 
    mandated: true, 
    citation: "OHS Act 2004, ESV Guidance" 
  },
  { 
    item: "Union stoppage for non-safety reason", 
    mandated: false, 
    citation: "Fair Work Act 2009 (Cth) s.418" 
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
              <h1 className="text-4xl font-light leading-tight tracking-wide">Victorian Construction Legislation Report</h1>
              <h2 className="text-4xl font-light leading-tight tracking-wide text-primary">Melbourne Metro Tunnel Project</h2>
              <h3 className="text-2xl font-light mt-4">RE: VOC Requirements for Portable Light Towers in Victoria</h3>
              <p className="text-muted-foreground mt-2">
                {format(new Date(2025, 3, 16), 'EEEE, MMMM do yyyy')}
              </p>
            </div>
          </motion.div>

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
              There is <span className="text-red-400 font-bold">NO specific legal requirement</span> under Victorian law for operators of portable light towers to hold VOC certification.
            </p>
          </GradientCard>

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

          <GradientCard 
            gradientColors={["from-orange-500/20", "via-red-400/20", "to-pink-300/20"]}
            className="mb-8 border-2 border-orange-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <AlertTriangle className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-xl font-semibold text-orange-400">Penalties for Unlawful Industrial Action</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-orange-400">Individual Penalties</h3>
                <p className="text-3xl font-bold text-orange-400">$19,800</p>
                <p className="text-white/70">Per contravention under FWA s.546</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-orange-400">Union Penalties</h3>
                <p className="text-3xl font-bold text-orange-400">$99,000</p>
                <p className="text-white/70">Per contravention under FWA s.546</p>
              </div>
            </div>
          </GradientCard>

          <GradientCard 
            gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Site Requirements</h3>
                </div>
                <p className="text-white/70">
                  The Metro Tunnel Project EBA (Clause 32 - Plant and Equipment) may establish additional site-specific VOC requirements that exceed minimum legal standards.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Rail Industry Standards</h3>
                </div>
                <p className="text-white/70">
                  RIW Business Rules (Code 76499) include VOC requirements for lighting towers in rail infrastructure projects.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard 
            gradientColors={["from-green-500/20", "via-green-400/20", "to-green-300/20"]}
            className="mb-8 border-2 border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <Gavel className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-xl font-semibold text-green-400">Legal Standing</h2>
            </div>
            <p className="text-white/90">
              This document is designed to be upheld in a Victorian court of law. It is prepared with due reference to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/70">
              <li>Victorian Occupational Health and Safety Act 2004</li>
              <li>Victorian OHS Regulations 2017</li>
              <li>Fair Work Act 2009 (Cth)</li>
              <li>Melbourne Metro Tunnel Construction Enterprise Agreement</li>
              <li>Rail Industry Worker Business Rules</li>
            </ul>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default LegalReport;
