import React, { useRef } from 'react';
import { useClientConfig } from '@/contexts/ClientConfigContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { exportClientConfig, importClientConfig, resetClientConfig } from '@/config/clientConfig';
import { Download, Upload, RotateCcw } from 'lucide-react';

const ConfigExporter: React.FC = () => {
  const { config, updateConfig, resetConfig } = useClientConfig();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const configJson = exportClientConfig(config);
    const blob = new Blob([configJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.branding.companyName.toLowerCase().replace(/\s+/g, '-')}-config.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: 'Configuration exported',
      description: 'Your portal configuration has been downloaded.'
    });
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const imported = importClientConfig(content);
        updateConfig(imported);
        toast({
          title: 'Configuration imported',
          description: 'Your portal configuration has been loaded successfully.'
        });
      } catch (error) {
        toast({
          title: 'Import failed',
          description: error instanceof Error ? error.message : 'Invalid configuration file',
          variant: 'destructive'
        });
      }
    };
    reader.readAsText(file);
    
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to default configuration? This cannot be undone.')) {
      resetConfig();
      toast({
        title: 'Configuration reset',
        description: 'Portal configuration has been reset to defaults.'
      });
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Export & Import</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Download or upload your portal configuration for backup or deployment
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border bg-card/50">
            <h4 className="text-sm font-semibold mb-2">Export Configuration</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Download your current portal configuration as a JSON file. This includes branding, modules, and navigation settings.
            </p>
            <Button onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              Export Configuration
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card/50">
            <h4 className="text-sm font-semibold mb-2">Import Configuration</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Upload a configuration file to restore or duplicate a portal setup. This will replace your current configuration.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="gap-2"
            >
              <Upload className="h-4 w-4" />
              Import Configuration
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/5">
            <h4 className="text-sm font-semibold mb-2">Reset to Defaults</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reset all settings to the default ALIAS HQ template. This action cannot be undone.
            </p>
            <Button 
              onClick={handleReset}
              variant="destructive"
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Configuration
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConfigExporter;
