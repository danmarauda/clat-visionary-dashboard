
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import EditableSection from '@/components/research/EditableSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { LeaderProfile } from '@/models/ClientResearch';
import { X } from 'lucide-react';

const LeadershipProfileEditor: React.FC<{
  values: LeaderProfile[];
  onChange: (values: LeaderProfile[]) => void;
}> = ({ values, onChange }) => {
  const addLeader = () => {
    onChange([...values, {
      name: '',
      position: '',
      background: '',
      expertise: '',
      technologyStance: '',
      linkedinUrl: ''
    }]);
  };

  const updateLeader = (index: number, field: keyof LeaderProfile, value: string) => {
    const newLeaders = [...values];
    newLeaders[index] = { ...newLeaders[index], [field]: value };
    onChange(newLeaders);
  };

  const removeLeader = (index: number) => {
    const newLeaders = [...values];
    newLeaders.splice(index, 1);
    onChange(newLeaders);
  };

  return (
    <div className="space-y-6">
      {values.map((leader, index) => (
        <div key={index} className="p-4 border border-border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Leadership Profile {index + 1}</h4>
            <Button variant="ghost" size="icon" onClick={() => removeLeader(index)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input 
                value={leader.name} 
                onChange={e => updateLeader(index, 'name', e.target.value)}
                placeholder="Leader's full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Position</label>
              <Input 
                value={leader.position} 
                onChange={e => updateLeader(index, 'position', e.target.value)}
                placeholder="Current position/title"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Background</label>
            <Textarea 
              value={leader.background} 
              onChange={e => updateLeader(index, 'background', e.target.value)}
              placeholder="Professional background and experience"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Expertise</label>
            <Textarea 
              value={leader.expertise} 
              onChange={e => updateLeader(index, 'expertise', e.target.value)}
              placeholder="Areas of expertise and specialization"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Technology Stance</label>
            <Textarea 
              value={leader.technologyStance} 
              onChange={e => updateLeader(index, 'technologyStance', e.target.value)}
              placeholder="Views on technology adoption and innovation"
            />
          </div>

          <div>
            <label className="text-sm font-medium">LinkedIn URL</label>
            <Input 
              value={leader.linkedinUrl} 
              onChange={e => updateLeader(index, 'linkedinUrl', e.target.value)}
              placeholder="LinkedIn profile URL"
            />
          </div>
        </div>
      ))}
      
      <Button variant="outline" onClick={addLeader}>
        Add Leadership Profile
      </Button>
    </div>
  );
};

const LeadershipAnalysis: React.FC = () => {
  const [leaders, setLeaders] = useState<LeaderProfile[]>([]);

  const handleSaveLeaders = (values: LeaderProfile[]) => {
    setLeaders(values);
  };

  const renderLeadershipContent = () => {
    if (leaders.length === 0) {
      return (
        <div className="text-muted-foreground italic">
          No leadership profiles have been added. Click the edit button to add leadership profiles.
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {leaders.map((leader, index) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <h4 className="text-lg font-medium mb-4">{leader.name}</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium">Position:</label>
                <p className="text-muted-foreground">{leader.position}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Background:</label>
                <p className="text-muted-foreground">{leader.background}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Expertise:</label>
                <p className="text-muted-foreground">{leader.expertise}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Technology Stance:</label>
                <p className="text-muted-foreground">{leader.technologyStance}</p>
              </div>
              {leader.linkedinUrl && (
                <div>
                  <label className="text-sm font-medium">LinkedIn:</label>
                  <p>
                    <a 
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Profile
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Leadership Analysis</h1>
      </div>

      <EditableSection
        title="Leadership Profiles"
        content={renderLeadershipContent()}
        onSave={handleSaveLeaders}
        editComponent={<LeadershipProfileEditor values={leaders} onChange={() => {}} />}
        editValues={leaders}
      />

      <div className="flex justify-between mt-12">
        <a 
          href="/research/company-profile" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline"
        >
          Back to Company Profile
        </a>
        <a 
          href="/research/business-operations" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline"
        >
          Next: Business Operations
        </a>
      </div>
    </div>
  );
};

export default LeadershipAnalysis;
