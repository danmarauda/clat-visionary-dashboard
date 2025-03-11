
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import AIAnalytics from "./pages/AIAnalytics";
import BuildingOS from "./pages/BuildingOS";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

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
            <Route path="/ai-analytics" element={<AIAnalytics />} />
            <Route path="/building-os" element={<BuildingOS />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Placeholder routes for other sections */}
            <Route path="/user-profiles" element={<PlaceholderPage title="User Profiles" />} />
            <Route path="/data-integrations" element={<PlaceholderPage title="Data Integrations" />} />
            <Route path="/reporting" element={<PlaceholderPage title="Reporting & Metrics" />} />
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
            <Route path="/connectivity" element={<PlaceholderPage title="Connectivity" />} />
            <Route path="/security" element={<PlaceholderPage title="Security & Compliance" />} />
            <Route path="/performance" element={<PlaceholderPage title="Performance" />} />
            <Route path="/spatial-mapping" element={<PlaceholderPage title="Spatial Mapping" />} />
            <Route path="/scheduling" element={<PlaceholderPage title="Scheduling" />} />
            <Route path="/communication" element={<PlaceholderPage title="Communication" />} />
            <Route path="/developer-tools" element={<PlaceholderPage title="Developer Tools" />} />
            <Route path="/visualization" element={<PlaceholderPage title="Visualization" />} />
            <Route path="/global-management" element={<PlaceholderPage title="Global Management" />} />
            <Route path="/advanced-settings" element={<PlaceholderPage title="Advanced Settings" />} />
            <Route path="/modules" element={<PlaceholderPage title="Modules" />} />
            <Route path="/documentation" element={<PlaceholderPage title="Documentation" />} />
            <Route path="/support" element={<PlaceholderPage title="Support" />} />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
