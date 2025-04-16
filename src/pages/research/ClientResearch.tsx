
import React from 'react';
import { eclatOSProfile } from '@/data/clients/eclatOS';
import CompanyProfileSection from '@/components/organisms/CompanyProfileSection';

const ClientResearch: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Client Research Profile</h1>
      
      <CompanyProfileSection data={eclatOSProfile.companyProfile} />
      
      {/* Additional sections will be added as we implement their components */}
    </div>
  );
};

export default ClientResearch;
