
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, BarChart, Building, Book, Cpu, Database, 
  PieChart, Users, Settings, LayoutDashboard, Braces, 
  HelpCircle, Map, Calendar, FileText, MessageSquare, 
  AirVent, Wifi, Shield, Zap, PanelLeft, 
  GalleryHorizontalEnd, Columns, Globe, ChevronRight, ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define navigation items
const navItems = [
  { id: 'home', name: 'Home', path: '/', icon: Home },
  { id: 'executive-summary', name: 'Executive Summary', path: '/executive-summary', icon: FileText },
  { id: 'ai-analytics', name: 'AI & Analytics', path: '/ai-analytics', icon: Cpu },
  { id: 'building-os', name: 'Building OS', path: '/building-os', icon: Building },
  { id: 'dashboard', name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { id: 'user-profiles', name: 'User Profiles', path: '/user-profiles', icon: Users },
  { id: 'data-integrations', name: 'Data Integrations', path: '/data-integrations', icon: Database },
  { id: 'reporting', name: 'Reporting & Metrics', path: '/reporting', icon: BarChart },
  { id: 'sustainability', name: 'Sustainability', path: '/sustainability', icon: AirVent },
  { id: 'connectivity', name: 'Connectivity', path: '/connectivity', icon: Wifi },
  { id: 'security', name: 'Security & Compliance', path: '/security', icon: Shield },
  { id: 'performance', name: 'Performance', path: '/performance', icon: Zap },
  { id: 'spatial-mapping', name: 'Spatial Mapping', path: '/spatial-mapping', icon: Map },
  { id: 'scheduling', name: 'Scheduling', path: '/scheduling', icon: Calendar },
  { id: 'communication', name: 'Communication', path: '/communication', icon: MessageSquare },
  { id: 'developer-tools', name: 'Developer Tools', path: '/developer-tools', icon: Braces },
  { id: 'visualization', name: 'Visualization', path: '/visualization', icon: PieChart },
  { id: 'global-management', name: 'Global Management', path: '/global-management', icon: Globe },
  { id: 'advanced-settings', name: 'Advanced Settings', path: '/advanced-settings', icon: Settings },
  { id: 'gallery', name: 'Project Gallery', path: '/gallery', icon: GalleryHorizontalEnd },
  { id: 'modules', name: 'Modules', path: '/modules', icon: Columns },
  { id: 'documentation', name: 'Documentation', path: '/documentation', icon: Book },
  { id: 'support', name: 'Support', path: '/support', icon: HelpCircle },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentPath = location.pathname;

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-30 h-screen bg-gradient-to-b from-card to-background/95 border-r border-border/40 shadow-xl transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[70px]" : "w-[280px]",
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex h-16 items-center justify-between px-4">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
                <span className="text-lg font-semibold text-foreground animate-fadeIn">Éclat OS</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent/10 transition-colors"
              aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>

          <div className="scrollbar-none flex-1 overflow-y-auto py-4 px-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent/10 hover:text-accent"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
                    {!isCollapsed && <span className="animate-fadeIn">{item.name}</span>}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {!isCollapsed && (
          <div className="glass mx-3 mb-4 rounded-xl p-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                Éclat OS Dashboard Suite
              </p>
              <p className="text-xs text-muted-foreground">
                Version 1.0.0
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
