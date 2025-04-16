
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building } from 'lucide-react';
import EditableSection from '@/components/research/EditableSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CompanyInfo } from '@/models/ClientResearch';
import { X } from 'lucide-react';

const CompanyProfileEditor: React.FC<{
  values: CompanyInfo;
  onChange: (values: CompanyInfo) => void;
}> = ({ values, onChange }) => {
  const handleChange = (field: keyof CompanyInfo, value: any) => {
    onChange({ ...values, [field]: value });
  };

  const handleArrayChange = (field: 'subIndustries' | 'revenueStreams' | 'targetMarkets', index: number, value: string) => {
    const newArray = [...values[field]];
    newArray[index] = value;
    onChange({ ...values, [field]: newArray });
  };

  const addArrayItem = (field: 'subIndustries' | 'revenueStreams' | 'targetMarkets') => {
    onChange({ ...values, [field]: [...values[field], ''] });
  };

  const removeArrayItem = (field: 'subIndustries' | 'revenueStreams' | 'targetMarkets', index: number) => {
    const newArray = [...values[field]];
    newArray.splice(index, 1);
    onChange({ ...values, [field]: newArray });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Company Name</label>
          <Input 
            value={values.companyName} 
            onChange={e => handleChange('companyName', e.target.value)}
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Founding Year</label>
          <Input 
            value={values.foundingYear} 
            onChange={e => handleChange('foundingYear', e.target.value)}
            placeholder="e.g., 2010"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Headquarters</label>
          <Input 
            value={values.headquarters} 
            onChange={e => handleChange('headquarters', e.target.value)}
            placeholder="City, State, Country"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Employee Count</label>
          <Input 
            value={values.employeeCount} 
            onChange={e => handleChange('employeeCount', e.target.value)}
            placeholder="e.g., 250"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Industry</label>
          <Input 
            value={values.industry} 
            onChange={e => handleChange('industry', e.target.value)}
            placeholder="Primary industry"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Website URL</label>
          <Input 
            value={values.websiteURL} 
            onChange={e => handleChange('websiteURL', e.target.value)}
            placeholder="https://example.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Sub-Industries</label>
        {values.subIndustries.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <Input 
              value={item} 
              onChange={e => handleArrayChange('subIndustries', index, e.target.value)}
              placeholder={`Sub-industry ${index + 1}`}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => removeArrayItem('subIndustries', index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => addArrayItem('subIndustries')} 
          className="mt-2"
        >
          Add Sub-Industry
        </Button>
      </div>

      <div>
        <label className="text-sm font-medium">Business Model</label>
        <Textarea 
          value={values.businessModel} 
          onChange={e => handleChange('businessModel', e.target.value)}
          placeholder="Describe the company's business model"
          className="min-h-[100px]"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Revenue Streams</label>
        {values.revenueStreams.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <Input 
              value={item} 
              onChange={e => handleArrayChange('revenueStreams', index, e.target.value)}
              placeholder={`Revenue stream ${index + 1}`}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => removeArrayItem('revenueStreams', index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => addArrayItem('revenueStreams')} 
          className="mt-2"
        >
          Add Revenue Stream
        </Button>
      </div>

      <div>
        <label className="text-sm font-medium">Mission Statement</label>
        <Textarea 
          value={values.missionStatement} 
          onChange={e => handleChange('missionStatement', e.target.value)}
          placeholder="Enter company mission statement"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Competitive Advantage</label>
        <Textarea 
          value={values.competitiveAdvantage} 
          onChange={e => handleChange('competitiveAdvantage', e.target.value)}
          placeholder="Describe core competitive advantages"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Target Markets</label>
        {values.targetMarkets.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <Input 
              value={item} 
              onChange={e => handleArrayChange('targetMarkets', index, e.target.value)}
              placeholder={`Target market ${index + 1}`}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => removeArrayItem('targetMarkets', index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => addArrayItem('targetMarkets')} 
          className="mt-2"
        >
          Add Target Market
        </Button>
      </div>
    </div>
  );
};

const CompanyProfile: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: '',
    foundingYear: '',
    headquarters: '',
    employeeCount: '',
    industry: '',
    subIndustries: [''],
    businessModel: '',
    revenueStreams: [''],
    missionStatement: '',
    competitiveAdvantage: '',
    targetMarkets: [''],
    websiteURL: ''
  });

  const handleSaveCompanyInfo = (values: CompanyInfo) => {
    setCompanyInfo(values);
    // In a real app, we would save this to a backend
  };

  const renderCompanyInfoContent = () => {
    if (!companyInfo.companyName) {
      return (
        <div className="text-muted-foreground italic">
          No company information has been entered. Click the edit button to add company details.
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-base font-medium">Company Name</h4>
            <p>{companyInfo.companyName || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="text-base font-medium">Founded</h4>
            <p>{companyInfo.foundingYear || 'Not specified'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-base font-medium">Headquarters</h4>
            <p>{companyInfo.headquarters || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="text-base font-medium">Employees</h4>
            <p>{companyInfo.employeeCount || 'Not specified'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-base font-medium">Industry</h4>
            <p>{companyInfo.industry || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="text-base font-medium">Website</h4>
            <p>{companyInfo.websiteURL ? <a href={companyInfo.websiteURL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{companyInfo.websiteURL}</a> : 'Not specified'}</p>
          </div>
        </div>

        {companyInfo.subIndustries.length > 0 && companyInfo.subIndustries[0] && (
          <div>
            <h4 className="text-base font-medium">Sub-Industries</h4>
            <ul className="list-disc ml-5">
              {companyInfo.subIndustries.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {companyInfo.businessModel && (
          <div>
            <h4 className="text-base font-medium">Business Model</h4>
            <p>{companyInfo.businessModel}</p>
          </div>
        )}

        {companyInfo.revenueStreams.length > 0 && companyInfo.revenueStreams[0] && (
          <div>
            <h4 className="text-base font-medium">Revenue Streams</h4>
            <ul className="list-disc ml-5">
              {companyInfo.revenueStreams.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {companyInfo.missionStatement && (
          <div>
            <h4 className="text-base font-medium">Mission Statement</h4>
            <p>{companyInfo.missionStatement}</p>
          </div>
        )}

        {companyInfo.competitiveAdvantage && (
          <div>
            <h4 className="text-base font-medium">Competitive Advantage</h4>
            <p>{companyInfo.competitiveAdvantage}</p>
          </div>
        )}

        {companyInfo.targetMarkets.length > 0 && companyInfo.targetMarkets[0] && (
          <div>
            <h4 className="text-base font-medium">Target Markets</h4>
            <ul className="list-disc ml-5">
              {companyInfo.targetMarkets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
          <Building className="h-5 w-5 text-blue-500" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Company Profile</h1>
      </div>

      <EditableSection
        title="Company Information"
        content={renderCompanyInfoContent()}
        onSave={handleSaveCompanyInfo}
        editComponent={<CompanyProfileEditor values={companyInfo} onChange={() => {}} />}
        editValues={companyInfo}
      />

      <div className="flex justify-between mt-12">
        <Link 
          to="/research" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Back to Research Overview
        </Link>
        <Link 
          to="/research/leadership-analysis" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline rounded-full p-2 transition-all"
        >
          Next: Leadership Analysis
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CompanyProfile;
