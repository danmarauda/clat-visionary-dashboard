import React from 'react';
import { useClientConfig } from '@/contexts/ClientConfigContext';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FileText, Briefcase, Building, Lightbulb } from 'lucide-react';

const moduleIcons = {
  research: FileText,
  aliasHQModules: Briefcase,
  businessModules: Building,
  concepts: Lightbulb
};

const ModuleToggle: React.FC = () => {
  const { config, updateConfig } = useClientConfig();
  const { toast } = useToast();
  const [modules, setModules] = React.useState(config.modules);

  const handleToggle = (moduleKey: keyof typeof config.modules) => {
    setModules({
      ...modules,
      [moduleKey]: {
        ...modules[moduleKey],
        enabled: !modules[moduleKey].enabled
      }
    });
  };

  const handleLabelChange = (moduleKey: keyof typeof config.modules, label: string) => {
    setModules({
      ...modules,
      [moduleKey]: {
        ...modules[moduleKey],
        label
      }
    });
  };

  const handleSave = () => {
    updateConfig({
      ...config,
      modules
    });
    toast({
      title: 'Modules updated',
      description: 'Your module configuration has been saved successfully.'
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Module Configuration</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Enable or disable modules and customize their labels
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(modules).map(([key, module]) => {
            const Icon = moduleIcons[key as keyof typeof moduleIcons];
            return (
              <div key={key} className="p-4 rounded-lg border border-border bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Label className="text-base font-medium">{module.label}</Label>
                      <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  </div>
                  <Switch
                    checked={module.enabled}
                    onCheckedChange={() => handleToggle(key as keyof typeof config.modules)}
                  />
                </div>
                {module.enabled && (
                  <div className="mt-3">
                    <Label htmlFor={`label-${key}`} className="text-sm">Custom Label</Label>
                    <Input
                      id={`label-${key}`}
                      value={module.label}
                      onChange={(e) => handleLabelChange(key as keyof typeof config.modules, e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </Card>
  );
};

export default ModuleToggle;
