
import React from 'react';
import { CompanyProfile } from '@/data/types/ResearchProfile';
import SectionTitle from '@/components/atoms/SectionTitle';
import ProfileField from '@/components/molecules/ProfileField';

interface CompanyProfileSectionProps {
  data: CompanyProfile;
}

const CompanyProfileSection: React.FC<CompanyProfileSectionProps> = ({ data }) => {
  return (
    <section className="mb-8">
      <SectionTitle number={1} title="Company Profile" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileField label="Company Name" value={data.clientName} />
        <ProfileField label="Founded" value={data.foundingDate} />
        <ProfileField label="Industry" value={data.industry} />
        <ProfileField label="Employee Count" value={data.employeeCount} />
        <ProfileField label="Business Model" value={data.businessModel} />
        <ProfileField label="Mission Statement" value={data.missionStatement} />
      </div>
    </section>
  );
};

export default CompanyProfileSection;
