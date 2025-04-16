
import React from 'react';
import { FileSpreadsheet, Building2, Users, Brain, Cog } from 'lucide-react';
import ResearchSection from '@/components/organisms/ResearchSection';
import { motion } from 'framer-motion';
import { ResearchData } from '@/data/clients/types/ResearchTypes';

const DEMO_DATA: ResearchData = {
  clientName: "éclatOS",
  sections: {
    company: {
      id: "company",
      title: "Company Profile",
      gradientColors: ["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"],
      description: "Comprehensive overview of the organization's structure and operations",
      icon: Building2,
      status: "Core",
      tags: ["Structure", "Operations", "Overview"],
    },
    leadership: {
      id: "leadership",
      title: "Leadership Analysis",
      gradientColors: ["from-purple-500/20", "via-purple-400/20", "to-purple-300/20"],
      description: "Analysis of key leadership figures and management approach",
      icon: Users,
      status: "Enhanced",
      tags: ["Management", "Strategy"],
    },
    technology: {
      id: "technology",
      title: "Technology Ecosystem",
      gradientColors: ["from-emerald-500/20", "via-emerald-400/20", "to-emerald-300/20"],
      description: "Overview of current systems and integration points",
      icon: Brain,
      status: "Core",
      tags: ["Systems", "Integration"],
    },
    implementation: {
      id: "implementation",
      title: "Implementation Timeline",
      gradientColors: ["from-amber-500/20", "via-amber-400/20", "to-amber-300/20"],
      description: "Detailed timeline for system implementation and deployment",
      icon: Cog,
      status: "New",
      tags: ["Timeline", "Planning"],
    }
  }
};

const ResearchProfile: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden -mt-20 -mx-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
          tracking-tighter [writing-mode:vertical-rl] blur-[1px]">
          RESEARCH
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 -rotate-180 text-white/[0.03] text-[20rem] font-bold 
          tracking-tighter [writing-mode:vertical-rl] blur-[1px]">
          PROFILE
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
            <h1 className="text-4xl font-light leading-tight tracking-wide">Client Research Profile</h1>
            <h2 className="text-4xl font-light leading-tight tracking-wide text-primary mt-2">
              {DEMO_DATA.clientName}
            </h2>
            <div className="my-4">
              <div className="p-2 rounded-lg bg-white/10 inline-block">
                <FileSpreadsheet className="h-6 w-6 text-primary" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(DEMO_DATA.sections).map((section) => (
              <ResearchSection
                key={section.id}
                section={section}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProfile;
