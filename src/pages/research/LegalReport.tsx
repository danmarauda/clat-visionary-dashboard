import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import html2pdf from 'html2pdf.js';
import { format } from 'date-fns';
import LegalReportHeader from '@/components/research/legal/LegalReportHeader';
import TitleSection from '@/components/research/legal/TitleSection';
import ExecutiveSummary from '@/components/research/legal/ExecutiveSummary';
import RegulatoryFramework from '@/components/research/legal/RegulatoryFramework';
import VOCRequirementsSection from '@/components/research/legal/VOCRequirementsSection';
import EmployerObligationsSection from '@/components/research/legal/EmployerObligationsSection';
import ProjectRequirementsSection from '@/components/research/legal/ProjectRequirementsSection';
import UnionPowersSection from '@/components/research/legal/UnionPowersSection';
import PenaltiesSection from '@/components/research/legal/PenaltiesSection';
import ConclusionsSection from '@/components/research/legal/ConclusionsSection';
import LegislationReferencesSection from '@/components/research/legal/LegislationReferencesSection';
import ReferencesSection from '@/components/research/legal/ReferencesSection';
import LegalRequirementsTable, { Requirement } from '@/components/research/LegalRequirementsTable';

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
    mandated: 'maybe' as 'maybe', 
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
    mandated: 'maybe' as 'maybe', 
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
    
    const originalBackground = element.style.background;
    const originalColor = element.style.color;
    
    element.style.background = '#000';
    element.style.color = '#fff';
    
    element.classList.add('pdf-export-mode');
    
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .pdf-export-mode {
        background-color: #000 !important;
        color: #fff !important;
      }
      .pdf-export-mode * {
        color: #fff !important;
        background-color: transparent !important;
      }
      .pdf-export-mode table {
        border-color: rgba(255, 255, 255, 0.2) !important;
      }
      .pdf-export-mode .border {
        border-color: rgba(255, 255, 255, 0.2) !important;
      }
      .pdf-export-mode a {
        color: #3b82f6 !important;
      }
    `;
    document.head.appendChild(styleElement);

    const opt = {
      margin: 1,
      filename: `legal-report-${format(new Date(), 'yyyy-MM-dd')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        backgroundColor: '#000000',
        useCORS: true,
        logging: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait',
        putOnlyUsedFonts: true,
        compress: true,
        background: '#000000'
      }
    };

    toast({
      title: "Preparing PDF...",
      description: "Your report will download shortly.",
    });

    html2pdf().set(opt).from(element).save().then(() => {
      element.style.background = originalBackground;
      element.style.color = originalColor;
      element.classList.remove('pdf-export-mode');
      document.head.removeChild(styleElement);
      
      toast({
        title: "PDF Generated",
        description: "Your report has been downloaded successfully.",
      });
    }).catch((error) => {
      console.error("PDF generation error:", error);
      
      element.style.background = originalBackground;
      element.style.color = originalColor;
      element.classList.remove('pdf-export-mode');
      document.head.removeChild(styleElement);
      
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF.",
        variant: "destructive"
      });
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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

      <div id="legal-report" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-end mb-12">
          <Button onClick={handleExportPDF} size="lg" className="glass">
            <FileText className="mr-2 h-4 w-4" />
            Export to PDF
          </Button>
        </div>

        <div className="space-y-12">
          <LegalReportHeader />
          <TitleSection />
          <ExecutiveSummary />
          <RegulatoryFramework />
          <VOCRequirementsSection />
          <EmployerObligationsSection />
          <ProjectRequirementsSection />
          <UnionPowersSection />
          <PenaltiesSection penaltiesData={penaltiesData} />
          <ConclusionsSection />
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gradient">VOC Requirements: At a Glance</h2>
            <div className="glass rounded-xl p-6">
              <LegalRequirementsTable requirements={requirements} />
            </div>
          </div>
          
          <LegislationReferencesSection legislationReferences={legislationReferences} />
          <ReferencesSection />
          
          <section className="mt-16 mb-8">
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-bold mb-2">Disclaimer</h2>
              <p className="text-sm text-white/70">
                This legal analysis has been prepared based on the applicable legislation and regulations as of {format(new Date(2025, 3, 16), 'MMMM d, yyyy')}. 
                It is comprehensive but not exhaustive, and specific legal advice should be sought for particular situations. 
                This document does not constitute formal legal advice and should not be relied upon as such. 
                Legislation and regulatory requirements may change over time.
              </p>
            </div>
          </section>
          
          <footer className="mt-12 pt-6 border-t border-white/10 text-sm text-white/60 text-center">
            <p>Legal Analysis: VOC Requirements for Portable Light Towers in Victoria</p>
            <p>Reference: MMTP-VOC-42801</p>
            <p>© 2025 - All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LegalReport;
