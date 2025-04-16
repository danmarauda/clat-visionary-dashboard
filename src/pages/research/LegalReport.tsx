import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, AlertTriangle, Shield, CheckCircle2, XCircle, HelpCircle, BookOpen, FileCheck, FilePdf } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import GradientCard from '@/components/atoms/GradientCard';
import LegalRequirementsTable, { Requirement } from '@/components/research/LegalRequirementsTable';
import html2pdf from 'html2pdf.js';

const requirements: Requirement[] = [
  { 
    item: "High-risk work licence", 
    mandated: false, 
    citation: "OHS Regulations 2017, Schedule 3", 
    legislation: "Not applicable - light towers excluded from Schedule 3 equipment",
    link: "https://www.legislation.vic.gov.au/in-force/statutory-rules/occupational-health-and-safety-regulations-2017/024"
  },
  { 
    item: "Verification of Competency (VOC)", 
    mandated: "maybe", 
    citation: "OHS Act 2004 s.21; Metro Tunnel EBA cl.32",
    legislation: "General duty of care; EBA plant & equipment clause",
    link: "https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/037"
  },
  { 
    item: "Relevant unit of competency", 
    mandated: false, 
    citation: "Industry Standard (RIISAM213E)",
    legislation: "Not legislatively mandated - industry best practice only",
    link: "https://training.gov.au/Training/Details/RIISAM213E"
  },
  { 
    item: "Site- or EBA-imposed VOC requirement", 
    mandated: "maybe", 
    citation: "Metro Tunnel EBA/Site Rules",
    legislation: "May be contractually binding if specifically included in EBA",
    link: "#"
  },
  { 
    item: "Risk assessment & electrical safety", 
    mandated: true, 
    citation: "OHS Act 2004, ESV Guidance", 
    legislation: "Section 21 - Duties of employers to employees",
    link: "https://esv.vic.gov.au/technical-information/electrical-installations-and-infrastructure/electrical-installation-safety/"
  },
  { 
    item: "Union stoppage for non-safety reason", 
    mandated: false, 
    citation: "Fair Work Act 2009 (Cth) s.418", 
    legislation: "Section 418 - FWC must order that industrial action stop",
    link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_2#_Toc149455609"
  },
  { 
    item: "Union stoppage for safety reason", 
    mandated: true, 
    citation: "OHS Act 2004 s.74", 
    legislation: "Section 74 - Right to cease work",
    link: "https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/037"
  }
];

const penaltiesData = [
  {
    title: "Individual Penalties",
    amount: "$19,800",
    description: "Per contravention under Fair Work Act s.546",
    citation: "Fair Work Act 2009 (Cth) s.546(2)(a)",
    link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_4#_Toc149455996"
  },
  {
    title: "Union Penalties",
    amount: "$99,000",
    description: "Per contravention under Fair Work Act s.546",
    citation: "Fair Work Act 2009 (Cth) s.546(2)(b)",
    link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_4#_Toc149455996"
  }
];

const legislationReferences = [
  {
    title: "OHS Act 2004",
    sections: [
      { 
        reference: "Section 21", 
        description: "Duties of employers to employees",
        link: "https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/037"
      },
      { 
        reference: "Section 74", 
        description: "Right to cease unsafe work",
        link: "https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/037"
      }
    ]
  },
  {
    title: "Fair Work Act 2009 (Cth)",
    sections: [
      { 
        reference: "Section 19", 
        description: "Meaning of industrial action",
        link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_1#_Toc149455437"
      },
      { 
        reference: "Section 418", 
        description: "FWC must order that industrial action stop",
        link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_2#_Toc149455609"
      },
      { 
        reference: "Section 421", 
        description: "Contravening an order stopping industrial action",
        link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_2#_Toc149455614"
      },
      { 
        reference: "Section 546", 
        description: "Pecuniary penalty orders",
        link: "https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_4#_Toc149455996"
      }
    ]
  },
  {
    title: "OHS Regulations 2017",
    sections: [
      { 
        reference: "Schedule 3", 
        description: "High Risk Work Licence Classes",
        link: "https://www.legislation.vic.gov.au/in-force/statutory-rules/occupational-health-and-safety-regulations-2017/024"
      }
    ]
  }
];

const LegalReport = () => {
  const { toast } = useToast();

  const handleExportPDF = () => {
    const element = document.getElementById('legal-report');
    const opt = {
      margin: 1,
      filename: `legal-report-${format(new Date(), 'yyyy-MM-dd')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    toast({
      title: "Preparing PDF...",
      description: "Your report will download shortly.",
    });

    html2pdf().set(opt).from(element).save().then(() => {
      toast({
        title: "PDF Generated",
        description: "Your report has been downloaded successfully.",
      });
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white -mt-20 -mx-6">
      <div className="relative">
        <div id="legal-report" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-16"
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
              <div className="flex items-center gap-2 mt-2 text-sm text-primary/80">
                <FileCheck className="h-4 w-4" />
                <span>Document prepared to be upheld in Victorian court proceedings</span>
              </div>
            </div>
            <Button
              onClick={handleExportPDF}
              className="fixed top-24 right-8 z-50"
              size="lg"
            >
              <FilePdf className="mr-2 h-4 w-4" />
              Export to PDF
            </Button>
          </motion.div>

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
              <span className="font-semibold">Citation:</span> Occupational Health and Safety Regulations 2017 (Vic), Schedule 3 (High Risk Work Licence Classes){' '}
              <a 
                href="https://www.legislation.vic.gov.au/in-force/statutory-rules/occupational-health-and-safety-regulations-2017/024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                [Reference Link]
              </a>
            </p>
          </GradientCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GradientCard 
              gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Metro Tunnel EBA</h2>
              </div>
              <p className="text-white/70 mb-4">
                The Metro Tunnel Project EBA (Clause 32 - Plant and Equipment) may establish additional site-specific VOC requirements that exceed minimum legal standards.
              </p>
              <p className="text-sm text-white/60">
                Even if the EBA requires VOC for light towers, any work stoppage must follow proper dispute resolution procedures outlined in clauses 10-14 of the EBA to be lawful.
              </p>
            </GradientCard>

            <GradientCard 
              gradientColors={["from-purple-500/20", "via-purple-400/20", "to-purple-300/20"]}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold">Applicable Law</h2>
              </div>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2"></div>
                  <span>Victorian Occupational Health and Safety Act 2004</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2"></div>
                  <span>Victorian OHS Regulations 2017</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2"></div>
                  <span>Fair Work Act 2009 (Commonwealth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2"></div>
                  <span>Metro Tunnel Construction Enterprise Agreement</span>
                </li>
              </ul>
            </GradientCard>
          </div>

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
            <p className="text-white/60 text-sm mt-4 italic">
              Note: All legislative references are based on Victorian and Australian Commonwealth law as of April 2025.
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {penaltiesData.map((penalty, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-orange-400">{penalty.title}</h3>
                  <p className="text-3xl font-bold text-orange-400">{penalty.amount}</p>
                  <p className="text-white/70">{penalty.description}</p>
                  <p className="text-sm text-white/60">
                    Citation: <a 
                      href={penalty.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-orange-300"
                    >
                      {penalty.citation}
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-4 pt-4">
              <p className="text-sm text-white/70">
                <strong className="text-orange-400">Legal basis: </strong> 
                According to Fair Work Act 2009 (Cth) s.418, the Fair Work Commission must order that unprotected industrial action stop. 
                Contravention of such orders constitutes a civil remedy provision under s.421, subject to penalties under s.546.
              </p>
            </div>
          </GradientCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GradientCard 
              gradientColors={["from-green-500/20", "via-green-400/20", "to-green-300/20"]}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-400">Legitimate Safety Stoppage</h3>
              </div>
              <p className="text-white/70 text-sm">
                Work stoppage for genuine safety concerns is lawful under OHS Act 2004 s.74, but must relate to "immediate threat" to health or safety, not merely VOC documentation.
              </p>
              <p className="text-white/60 text-xs mt-2">
                <a 
                  href="https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/037" 
                  className="underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View OHS Act 2004 s.74
                </a>
              </p>
            </GradientCard>

            <GradientCard 
              gradientColors={["from-red-500/20", "via-red-400/20", "to-red-300/20"]}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400">Unlawful Industrial Action</h3>
              </div>
              <p className="text-white/70 text-sm">
                Work stoppage solely due to lack of VOC (when not legally required) constitutes unprotected industrial action under Fair Work Act s.19(1).
              </p>
              <p className="text-white/60 text-xs mt-2">
                <a 
                  href="https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_1#_Toc149455437" 
                  className="underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Fair Work Act s.19(1)
                </a>
              </p>
            </GradientCard>

            <GradientCard 
              gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10">
                  <Gavel className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">FWC Intervention</h3>
              </div>
              <p className="text-white/70 text-sm">
                Employers may apply to the Fair Work Commission under s.418 for orders to stop unlawful industrial action relating to VOC requirements.
              </p>
              <p className="text-white/60 text-xs mt-2">
                <a 
                  href="https://www.legislation.gov.au/Details/C2023C00360/Html/Volume_2#_Toc149455609" 
                  className="underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Fair Work Act s.418
                </a>
              </p>
            </GradientCard>
          </div>

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
            <p className="mt-4 text-sm text-white/70">
              All legislative citations have been verified against current Victorian and Commonwealth legislation as of April 2025.
            </p>
          </GradientCard>

          <GradientCard 
            gradientColors={["from-blue-500/20", "via-blue-400/20", "to-blue-300/20"]}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Legislative References</h2>
            </div>
            
            {legislationReferences.map((legislation, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="font-semibold text-primary mb-3">{legislation.title}</h3>
                <div className="space-y-2">
                  {legislation.sections.map((section, sIndex) => (
                    <div key={sIndex} className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <span className="text-white/90 font-medium">{section.reference}</span>
                        <span className="text-white/70"> - {section.description} </span>
                        <a 
                          href={section.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary/80 underline hover:text-primary"
                        >
                          [View Legislation]
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default LegalReport;
