
import React from 'react';
import { 
  Building2, 
  Users, 
  Brain,
  Cog,
  Network,
  Timer,
  FileSpreadsheet
} from 'lucide-react';
import ResearchSectionHeader from '@/components/atoms/ResearchSectionHeader';
import ResearchSection from '@/components/organisms/ResearchSection';
import ResearchDataCard from '@/components/molecules/ResearchDataCard';
import { cn } from '@/lib/utils';

const ResearchProfile: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden -mt-20 -mx-6">
      {/* Background decoration */}
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
          <ResearchSectionHeader
            title="Client Research"
            subtitle="Comprehensive Analysis & Insights"
            icon={FileSpreadsheet}
          />

          {/* Company Profile Section */}
          <ResearchSection title="Company Profile">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResearchDataCard
                title="Company Information"
                content="{{companyName}}, Founded {{foundingDate}}"
                gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
              />
              <ResearchDataCard
                title="Industry Details"
                content="{{industry}} - {{subIndustries}}"
                gradientColors={["from-purple-500/20", "via-purple-400/20", "to-purple-300/20"]}
              />
              <ResearchDataCard
                title="Business Model"
                content="{{businessModel}}"
                gradientColors={["from-green-500/20", "via-green-400/20", "to-green-300/20"]}
              />
            </div>
          </ResearchSection>

          {/* Leadership Analysis Section */}
          <ResearchSection title="Leadership Analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResearchDataCard
                title="Executive Team"
                content="{{executiveProfiles}}"
                gradientColors={["from-amber-500/20", "via-amber-400/20", "to-amber-300/20"]}
              />
              <ResearchDataCard
                title="Management Style"
                content="{{managementStyle}}"
                gradientColors={["from-pink-500/20", "via-pink-400/20", "to-pink-300/20"]}
              />
              <ResearchDataCard
                title="Innovation Approach"
                content="{{innovationStrategy}}"
                gradientColors={["from-cyan-500/20", "via-cyan-400/20", "to-cyan-300/20"]}
              />
            </div>
          </ResearchSection>

          {/* Additional sections following the same pattern */}
          <ResearchSection title="Technology Ecosystem">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResearchDataCard
                title="Current Systems"
                content="{{currentSystems}}"
                gradientColors={["from-indigo-500/20", "via-indigo-400/20", "to-indigo-300/20"]}
              />
              <ResearchDataCard
                title="Integration Points"
                content="{{integrationPoints}}"
                gradientColors={["from-rose-500/20", "via-rose-400/20", "to-rose-300/20"]}
              />
              <ResearchDataCard
                title="Tech Stack"
                content="{{techStack}}"
                gradientColors={["from-emerald-500/20", "via-emerald-400/20", "to-emerald-300/20"]}
              />
            </div>
          </ResearchSection>

          {/* Implementation Timeline Section */}
          <ResearchSection title="Implementation Timeline">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <ResearchDataCard
                title="Phase 1: Discovery"
                content="{{phase1Timeline}}"
                gradientColors={["from-sky-500/20", "via-sky-400/20", "to-sky-300/20"]}
              />
              <ResearchDataCard
                title="Phase 2: Implementation"
                content="{{phase2Timeline}}"
                gradientColors={["from-violet-500/20", "via-violet-400/20", "to-violet-300/20"]}
              />
            </div>
          </ResearchSection>
        </div>
      </div>
    </div>
  );
};

export default ResearchProfile;
