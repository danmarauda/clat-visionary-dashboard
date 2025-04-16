
import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import EditableSection from '@/components/research/EditableSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BusinessProcess } from '@/models/ClientResearch';
import { X } from 'lucide-react';

const BusinessProcessEditor: React.FC<{
  values: BusinessProcess[];
  onChange: (values: BusinessProcess[]) => void;
}> = ({ values, onChange }) => {
  const addProcess = () => {
    onChange([...values, {
      name: '',
      description: '',
      painPoints: [''],
      efficiencyMetrics: {
        cycleTime: '',
        errorRate: '',
        resourceUtilization: ''
      }
    }]);
  };

  const updateProcess = (index: number, field: keyof BusinessProcess, value: string | string[]) => {
    const newProcesses = [...values];
    newProcesses[index] = { ...newProcesses[index], [field]: value };
    onChange(newProcesses);
  };

  const updateEfficiencyMetric = (processIndex: number, metric: keyof BusinessProcess['efficiencyMetrics'], value: string) => {
    const newProcesses = [...values];
    newProcesses[processIndex] = {
      ...newProcesses[processIndex],
      efficiencyMetrics: {
        ...newProcesses[processIndex].efficiencyMetrics,
        [metric]: value
      }
    };
    onChange(newProcesses);
  };

  const updatePainPoint = (processIndex: number, painPointIndex: number, value: string) => {
    const newProcesses = [...values];
    const newPainPoints = [...newProcesses[processIndex].painPoints];
    newPainPoints[painPointIndex] = value;
    newProcesses[processIndex] = {
      ...newProcesses[processIndex],
      painPoints: newPainPoints
    };
    onChange(newProcesses);
  };

  const addPainPoint = (processIndex: number) => {
    const newProcesses = [...values];
    newProcesses[processIndex].painPoints.push('');
    onChange(newProcesses);
  };

  const removePainPoint = (processIndex: number, painPointIndex: number) => {
    const newProcesses = [...values];
    newProcesses[processIndex].painPoints.splice(painPointIndex, 1);
    onChange(newProcesses);
  };

  const removeProcess = (index: number) => {
    const newProcesses = [...values];
    newProcesses.splice(index, 1);
    onChange(newProcesses);
  };

  return (
    <div className="space-y-6">
      {values.map((process, processIndex) => (
        <div key={processIndex} className="p-4 border border-border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Business Process {processIndex + 1}</h4>
            <Button variant="ghost" size="icon" onClick={() => removeProcess(processIndex)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="text-sm font-medium">Process Name</label>
            <Input 
              value={process.name} 
              onChange={e => updateProcess(processIndex, 'name', e.target.value)}
              placeholder="Name of the business process"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <Textarea 
              value={process.description} 
              onChange={e => updateProcess(processIndex, 'description', e.target.value)}
              placeholder="Detailed description of the process"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Pain Points</label>
            {process.painPoints.map((painPoint, painPointIndex) => (
              <div key={painPointIndex} className="flex gap-2 mt-2">
                <Input 
                  value={painPoint}
                  onChange={e => updatePainPoint(processIndex, painPointIndex, e.target.value)}
                  placeholder={`Pain point ${painPointIndex + 1}`}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removePainPoint(processIndex, painPointIndex)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => addPainPoint(processIndex)} 
              className="mt-2"
            >
              Add Pain Point
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Cycle Time</label>
              <Input 
                value={process.efficiencyMetrics.cycleTime}
                onChange={e => updateEfficiencyMetric(processIndex, 'cycleTime', e.target.value)}
                placeholder="Average process duration"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Error Rate</label>
              <Input 
                value={process.efficiencyMetrics.errorRate}
                onChange={e => updateEfficiencyMetric(processIndex, 'errorRate', e.target.value)}
                placeholder="Process error frequency"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Resource Utilization</label>
              <Input 
                value={process.efficiencyMetrics.resourceUtilization}
                onChange={e => updateEfficiencyMetric(processIndex, 'resourceUtilization', e.target.value)}
                placeholder="Resource usage efficiency"
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button variant="outline" onClick={addProcess}>
        Add Business Process
      </Button>
    </div>
  );
};

const BusinessOperations: React.FC = () => {
  const [processes, setProcesses] = useState<BusinessProcess[]>([]);

  const handleSaveProcesses = (values: BusinessProcess[]) => {
    setProcesses(values);
  };

  const renderProcessesContent = () => {
    if (processes.length === 0) {
      return (
        <div className="text-muted-foreground italic">
          No business processes have been added. Click the edit button to add processes.
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {processes.map((process, index) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <h4 className="text-lg font-medium mb-4">{process.name}</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium">Description:</label>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Pain Points:</label>
                <ul className="list-disc ml-5 mt-2 text-muted-foreground">
                  {process.painPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <label className="text-sm font-medium">Efficiency Metrics:</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div>
                    <label className="text-sm">Cycle Time:</label>
                    <p className="text-muted-foreground">{process.efficiencyMetrics.cycleTime}</p>
                  </div>
                  <div>
                    <label className="text-sm">Error Rate:</label>
                    <p className="text-muted-foreground">{process.efficiencyMetrics.errorRate}</p>
                  </div>
                  <div>
                    <label className="text-sm">Resource Utilization:</label>
                    <p className="text-muted-foreground">{process.efficiencyMetrics.resourceUtilization}</p>
                  </div>
                </div>
              </div>
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
          <BarChart3 className="h-5 w-5 text-primary" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Business Operations</h1>
      </div>

      <EditableSection
        title="Business Processes"
        content={renderProcessesContent()}
        onSave={handleSaveProcesses}
        editComponent={<BusinessProcessEditor values={processes} onChange={() => {}} />}
        editValues={processes}
      />

      <div className="flex justify-between mt-12">
        <a 
          href="/research/leadership-analysis" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline"
        >
          Back to Leadership Analysis
        </a>
        <a 
          href="/research/technology-ecosystem" 
          className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-medium hover:underline"
        >
          Next: Technology Ecosystem
        </a>
      </div>
    </div>
  );
};

export default BusinessOperations;
