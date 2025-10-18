import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BrandingSettings from '@/components/settings/BrandingSettings';
import ClientDataSettings from '@/components/settings/ClientDataSettings';
import ModuleToggle from '@/components/settings/ModuleToggle';
import NavigationSettings from '@/components/settings/NavigationSettings';
import ConfigExporter from '@/components/settings/ConfigExporter';
import { Building2, Palette, Settings as SettingsIcon, Navigation, Download } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Portal Settings</h1>
        <p className="text-muted-foreground">
          Configure your client portal branding, modules, and content
        </p>
      </div>

      <Tabs defaultValue="branding" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
          <TabsTrigger value="branding" className="gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Branding</span>
          </TabsTrigger>
          <TabsTrigger value="client-data" className="gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">Client Data</span>
          </TabsTrigger>
          <TabsTrigger value="modules" className="gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Modules</span>
          </TabsTrigger>
          <TabsTrigger value="navigation" className="gap-2">
            <Navigation className="h-4 w-4" />
            <span className="hidden sm:inline">Navigation</span>
          </TabsTrigger>
          <TabsTrigger value="export" className="gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-4">
          <BrandingSettings />
        </TabsContent>

        <TabsContent value="client-data" className="space-y-4">
          <ClientDataSettings />
        </TabsContent>

        <TabsContent value="modules" className="space-y-4">
          <ModuleToggle />
        </TabsContent>

        <TabsContent value="navigation" className="space-y-4">
          <NavigationSettings />
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <ConfigExporter />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
