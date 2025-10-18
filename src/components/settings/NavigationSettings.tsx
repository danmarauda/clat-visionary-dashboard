import React from 'react';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';

const NavigationSettings: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation Management</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Customize your sidebar navigation items
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50">
          <Info className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">Navigation Configuration</p>
            <p className="text-sm text-muted-foreground">
              Navigation items are automatically generated based on enabled modules. Toggle modules in the Modules tab to control which navigation items appear.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Future versions will include a drag-and-drop interface for custom navigation ordering.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Current Navigation Structure</h4>
          <div className="space-y-2">
            <div className="p-3 rounded-lg border border-border bg-card/50">
              <p className="text-sm font-medium">RESEARCH</p>
              <p className="text-xs text-muted-foreground mt-1">7 items</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card/50">
              <p className="text-sm font-medium">ALIAS HQ MODULES</p>
              <p className="text-xs text-muted-foreground mt-1">4 items</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card/50">
              <p className="text-sm font-medium">BUSINESS UNITS</p>
              <p className="text-xs text-muted-foreground mt-1">7 items</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card/50">
              <p className="text-sm font-medium">CONCEPTS</p>
              <p className="text-xs text-muted-foreground mt-1">4 items</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NavigationSettings;
