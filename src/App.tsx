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
import DeliveryTimeline from "./pages/DeliveryTimeline";
import GanttChart from "./pages/GanttChart";
import ParlorPorticoPage from "./pages/ParlorPortico";
import Dashboard from "./pages/Dashboard";
import Concept1 from "./pages/Concept1";
import Concept2 from "./pages/Concept2";
import Concept3 from "./pages/Concept3";
import Concept4 from "./pages/Concept4";
import CopilotProvider from "./components/CopilotProvider";

// Client Research Section
import ClientResearch from "./pages/research/ClientResearch";
import CompanyProfile from "./pages/research/CompanyProfile";
import LeadershipAnalysis from "./pages/research/LeadershipAnalysis";
import TechnologyEcosystem from "./pages/research/TechnologyEcosystem";
import BusinessOperations from "./pages/research/BusinessOperations";
import AutomationOpportunities from "./pages/research/AutomationOpportunities";
import ImplementationRoadmap from "./pages/research/ImplementationRoadmap";
import LegalReport from "./pages/research/LegalReport";

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
      <CopilotProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/* Set LegalReport as the default route */}
              <Route path="/" element={<LegalReport />} />
              
              {/* Client Research Section */}
              <Route path="/research" element={<ClientResearch />} />
              <Route path="/research/legal-report" element={<LegalReport />} />
              <Route path="/research/company-profile" element={<CompanyProfile />} />
              <Route path="/research/leadership" element={<LeadershipAnalysis />} />
              <Route path="/research/technology" element={<TechnologyEcosystem />} />
              <Route path="/research/operations" element={<BusinessOperations />} />
              <Route path="/research/automation" element={<AutomationOpportunities />} />
              <Route path="/research/implementation" element={<ImplementationRoadmap />} />
              
              {/* Proposal Section */}
              <Route path="/executive-summary" element={<ExecutiveSummary />} />
              <Route path="/current-landscape" element={<CurrentLandscape />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
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
              <Route path="/timeline" element={<DeliveryTimeline />} />
              <Route path="/gantt-chart" element={<GanttChart />} />
              <Route path="/team" element={<PlaceholderPage title="Team" />} />
              
              {/* Business Units */}
              <Route path="/business-units" element={<PlaceholderPage title="Business Units" />} />
              <Route path="/bureau" element={<PlaceholderPage title="Bureau" />} />
              <Route path="/parlor-portico" element={<ParlorPorticoPage />} />
              <Route path="/galerie" element={<PlaceholderPage title="Galerie" />} />
              <Route path="/forme" element={<PlaceholderPage title="Forme" />} />
              <Route path="/notel" element={<PlaceholderPage title="Noted" />} />
              
              {/* Concepts */}
              <Route path="/concept-1" element={<Concept1 />} />
              <Route path="/concept-2" element={<Concept2 />} />
              <Route path="/concept-3" element={<Concept3 />} />
              <Route path="/concept-4" element={<Concept4 />} />
              
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
      </CopilotProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
