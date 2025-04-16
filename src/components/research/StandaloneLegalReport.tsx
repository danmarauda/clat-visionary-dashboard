
import React from 'react';
import { FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import html2pdf from 'html2pdf.js';
import LegalRequirementsTable from './LegalRequirementsTable';
import { Link } from 'react-router-dom';

// Reusing the data from the main legal report
const requirements = [
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

const StandaloneLegalReport = () => {
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
    <div className="min-h-screen bg-black text-white">
      <div id="legal-report" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-end mb-6">
          <Link 
            to="/research/legal-report"
            className="text-primary hover:text-primary/80 underline mr-4"
          >
            Back to Full View
          </Link>
          <Button
            onClick={handleExportPDF}
          >
            <FileText className="mr-2 h-4 w-4" />
            Export to PDF
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 mb-16">
          <h1 className="text-4xl font-light leading-tight tracking-wide">Victorian Construction Legislation Report</h1>
          <h2 className="text-4xl font-light leading-tight tracking-wide text-primary">Melbourne Metro Tunnel Project</h2>
          <h3 className="text-2xl font-light mt-4">RE: VOC Requirements for Portable Light Towers in Victoria</h3>
          <p className="text-muted-foreground mt-2">
            {format(new Date(2025, 3, 16), 'EEEE, MMMM do yyyy')}
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-6 border-2 border-red-500/20 rounded-lg bg-gradient-to-br from-red-500/20 via-red-400/20 to-red-300/20">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-red-400">Key Finding</h2>
            </div>
            <p className="text-white/90 font-semibold text-lg mb-4">
              There is <span className="text-red-400 font-bold">NO specific legal requirement</span> under Victorian law for operators of portable light towers to hold VOC certification.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20">
            <h2 className="text-xl font-semibold mb-4">Legal Requirements</h2>
            <LegalRequirementsTable requirements={requirements} />
          </div>

          <div className="p-6 rounded-lg border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/20 via-red-400/20 to-pink-300/20">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Penalties for Unlawful Industrial Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {penaltiesData.map((penalty, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-orange-400">{penalty.title}</h3>
                  <p className="text-3xl font-bold text-orange-400">{penalty.amount}</p>
                  <p className="text-white/70">{penalty.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20">
            <h2 className="text-xl font-semibold mb-4">Legislative References</h2>
            {legislationReferences.map((legislation, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="font-semibold text-primary mb-3">{legislation.title}</h3>
                <div className="space-y-2">
                  {legislation.sections.map((section, sIndex) => (
                    <div key={sIndex} className="flex items-start gap-2">
                      <div>
                        <span className="text-white/90 font-medium">{section.reference}</span>
                        <span className="text-white/70"> - {section.description} </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandaloneLegalReport;
