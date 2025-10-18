import React, { useState } from 'react';
import { useClientConfig } from '@/contexts/ClientConfigContext';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import AliasLogo from '@/components/AliasLogo';

const BrandingSettings: React.FC = () => {
  const { config, updateConfig } = useClientConfig();
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState(config.branding.companyName);
  const [tagline, setTagline] = useState(config.branding.tagline);
  const [logoUrl, setLogoUrl] = useState(config.branding.logoUrl || '');

  const handleSave = () => {
    updateConfig({
      ...config,
      branding: {
        ...config.branding,
        companyName,
        tagline,
        logoUrl: logoUrl || undefined
      }
    });
    toast({
      title: 'Branding updated',
      description: 'Your portal branding has been saved successfully.'
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Portal Branding</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Customize your client portal's appearance and branding
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="ALIAS HQ"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Online Hub for Clients, Customers, and Consultants"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="logoUrl">Custom Logo URL (Optional)</Label>
            <Input
              id="logoUrl"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://example.com/logo.png"
              className="mt-1.5"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Leave empty to use the default letter logo
            </p>
          </div>

          <div className="pt-4">
            <Label>Logo Preview</Label>
            <div className="mt-2 p-4 rounded-lg border border-border bg-card flex items-center gap-4">
              <AliasLogo size="large" customLogoUrl={logoUrl || undefined} />
              <div>
                <p className="font-semibold">{companyName}</p>
                <p className="text-sm text-muted-foreground">{tagline}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </Card>
  );
};

export default BrandingSettings;
