
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import CurrentLandscape from "./pages/CurrentLandscape";
import NotFound from "./pages/NotFound";
import DesignOSPage from "./pages/DesignOS";
import EventOSPage from "./pages/EventOS";
import HospitalityOSPage from "./pages/HospitalityOS";
import BuildingOSPage from "./pages/BuildingOS";
import WorkspaceOSPage from "./pages/WorkspaceOS";
import AnalyticsOSPage from "./pages/AnalyticsOS";
import CommunityOSPage from "./pages/CommunityOS";

const queryClient = new QueryClient();

// Placeholder component for routes we haven't created detailed pages for yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4 text-gradient-primary">{title}</h1>
      <p className="text-muted-foreground">This page is under development.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/current-landscape" element={<CurrentLandscape />} />
            
            {/* OS Modules */}
            <Route path="/analytics-os" element={<AnalyticsOSPage />} />
            <Route path="/building-os" element={<BuildingOSPage />} />
            <Route path="/community-os" element={<CommunityOSPage />} />
            <Route path="/design-os" element={<DesignOSPage />} />
            <Route path="/event-os" element={<EventOSPage />} />
            <Route path="/hospitality-os" element={<HospitalityOSPage />} />
            <Route path="/marketing-os" element={<PlaceholderPage title="Marketing OS" />} />
            <Route path="/workspace-os" element={<WorkspaceOSPage />} />
            
            {/* Project Sections */}
            <Route path="/project-scope" element={<PlaceholderPage title="Project Scope" />} />
            <Route path="/budget" element={<PlaceholderPage title="Budget" />} />
            <Route path="/timeline" element={<PlaceholderPage title="Delivery Timeline" />} />
            <Route path="/team" element={<PlaceholderPage title="Team" />} />
            
            {/* Business Units */}
            <Route path="/business-units" element={<PlaceholderPage title="Business Units" />} />
            <Route path="/bureau" element={<PlaceholderPage title="Bureau" />} />
            <Route path="/parlor-portico" element={<PlaceholderPage title="Parlor & Portico" />} />
            <Route path="/galerie" element={<PlaceholderPage title="Galerie" />} />
            <Route path="/forme" element={<PlaceholderPage title="Forme" />} />
            <Route path="/notel" element={<PlaceholderPage title="Notel" />} />
            
            {/* Support */}
            <Route path="/support" element={<PlaceholderPage title="Support" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            
            {/* Other pages */}
            <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
            <Route path="/gallery" element={<PlaceholderPage title="Project Gallery" />} />
            <Route path="/module-gallery" element={<PlaceholderPage title="Module Gallery" />} />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
