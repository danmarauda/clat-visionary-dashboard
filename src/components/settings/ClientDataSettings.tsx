import React from 'react';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';

const ClientDataSettings: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Client Data Management</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Manage your client research profiles and data
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50">
          <Info className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">Client Data Location</p>
            <p className="text-sm text-muted-foreground">
              Client research data is stored in <code className="px-1.5 py-0.5 rounded bg-muted">src/data/clients/</code>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              To add or edit client data, modify the files in that directory. Future versions will include a visual editor here.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Current Client Profile</h4>
          <div className="p-4 rounded-lg border border-border bg-card/50">
            <p className="text-sm">
              <span className="font-medium">Active Profile:</span>{' '}
              <span className="text-muted-foreground">Template Client (eclatOS)</span>
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Location:</span>{' '}
              <code className="text-xs px-1.5 py-0.5 rounded bg-muted">src/data/clients/eclatOS.ts</code>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClientDataSettings;
