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
import Analytics from "./pages/Analytics";
import Operations from "./pages/Operations";
import Engagement from "./pages/Engagement";
import Creative from "./pages/Creative";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Collaboration from "./pages/Collaboration";
import Finance from "./pages/Finance";
import Customers from "./pages/Customers";
import People from "./pages/People";
import DeliveryTimeline from "./pages/DeliveryTimeline";
import GanttChart from "./pages/GanttChart";
import ParlorPorticoPage from "./pages/ParlorPortico";
import Dashboard from "./pages/Dashboard";
import Concept1 from "./pages/Concept1";
import Concept2 from "./pages/Concept2";
import Concept3 from "./pages/Concept3";
import Concept4 from "./pages/Concept4";
import CopilotProvider from "./components/CopilotProvider";
import { UIScaleProvider } from "./lib/ui-scale-context";

// Client Research Section
import ClientResearch from "./pages/research/ClientResearch";
import CompanyProfile from "./pages/research/CompanyProfile";
import LeadershipAnalysis from "./pages/research/LeadershipAnalysis";
import TechnologyEcosystem from "./pages/research/TechnologyEcosystem";
import BusinessOperations from "./pages/research/BusinessOperations";
import AutomationOpportunities from "./pages/research/AutomationOpportunities";
import ImplementationRoadmap from "./pages/research/ImplementationRoadmap";
import Settings from "./pages/Settings";

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
      <UIScaleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CopilotProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />

                {/* Client Research Section */}
                <Route path="/research" element={<ClientResearch />} />
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

                {/* Business Modules */}
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/operations" element={<Operations />} />
                <Route path="/engagement" element={<Engagement />} />
                <Route path="/creative" element={<Creative />} />
                <Route path="/events" element={<Events />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/people" element={<People />} />

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
                <Route path="/settings" element={<Settings />} />

                {/* Other pages */}
                <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
                <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
                <Route path="/gallery" element={<PlaceholderPage title="Project Gallery" />} />
                <Route path="/module-gallery" element={<PlaceholderPage title="Module Gallery" />} />
              </Route>

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CopilotProvider>
        </BrowserRouter>
      </UIScaleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
