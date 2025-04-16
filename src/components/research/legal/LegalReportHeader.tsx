
import React from 'react';
import { format } from 'date-fns';

const LegalReportHeader = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 glass rounded-xl p-6">
      <div>
        <img 
          src="https://bigbuild.vic.gov.au/__data/assets/image/0005/485114/varieties/hero_banner_project_logo.png" 
          alt="Melbourne Metro Tunnel Logo" 
          className="header-logo mb-4 md:mb-0 max-h-12"
        />
      </div>
      <div className="text-right">
        <p className="text-white/70 text-sm">Document Date: {format(new Date(2025, 3, 16), 'MMMM d, yyyy')}</p>
        <p className="text-white/70 text-sm">Reference: MMTP-VOC-42801</p>
      </div>
    </header>
  );
};

export default LegalReportHeader;
