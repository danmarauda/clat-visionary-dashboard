
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Briefcase, Clock, DollarSign, 
  Users, MessageSquare, Building, Store, Activity, 
  Coffee, BarChart, Pen, Calendar, Wrench, 
  BookOpen, HelpCircle, Settings, ChevronRight, ChevronLeft,
  NotebookText, Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import UserProfileButton from './UserProfileButton';
import EclatLogo from './EclatLogo';

const navCategories = [
  {
    category: "PROPOSAL",
    items: [
      { id: 'dashboard', name: 'Dashboard', path: '/', icon: LayoutDashboard },
      { id: 'executive-summary', name: 'Executive Summary', path: '/executive-summary', icon: FileText },
      { id: 'current-landscape', name: 'Current Landscape', path: '/current-landscape', icon: Activity },
      { id: 'project-scope', name: 'Project Scope', path: '/project-scope', icon: Briefcase },
      { id: 'timeline', name: 'Timeline', path: '/timeline', icon: Clock },
      { id: 'budget', name: 'Budget', path: '/budget', icon: DollarSign },
    ]
  },
  {
    category: "ÉCLAT OS MODULES",
    items: [
      { id: 'building-os', name: 'buildingOS', path: '/building-os', icon: Building },
      { id: 'hospitality-os', name: 'hospitalityOS', path: '/hospitality-os', icon: Coffee },
      { id: 'analytics-os', name: 'analyticsOS', path: '/analytics-os', icon: BarChart },
      { id: 'workspace-os', name: 'workspaceOS', path: '/workspace-os', icon: Briefcase },
      { id: 'community-os', name: 'communityOS', path: '/community-os', icon: Users },
      { id: 'design-os', name: 'designOS', path: '/design-os', icon: Pen },
      { id: 'event-os', name: 'eventOS', path: '/event-os', icon: Calendar },
      { id: 'marketing-os', name: 'marketingOS', path: '/marketing-os', icon: BarChart },
    ]
  },
  {
    category: "BUSINESS UNITS",
    items: [
      { id: 'business-units', name: 'Business Units', path: '/business-units', icon: Briefcase },
      { id: 'bureau', name: 'Bureau', path: '/bureau', icon: BookOpen },
      { id: 'parlor-portico', name: 'Parlor & Portico', path: '/parlor-portico', icon: Building },
      { id: 'galerie', name: 'Galerie', path: '/galerie', icon: Store },
      { id: 'forme', name: 'Forme', path: '/forme', icon: Activity },
      { id: 'noted', name: 'Noted', path: '/notel', icon: NotebookText },
      { id: 'team', name: 'Team', path: '/team', icon: Users },
    ]
  },
  {
    category: "CONCEPTS",
    items: [
      { id: 'concept-1', name: 'Concept 1', path: '/concept-1', icon: Lightbulb },
      { id: 'concept-2', name: 'Concept 2', path: '/concept-2', icon: Lightbulb },
    ]
  },
  {
    category: "SUPPORT",
    items: [
      { id: 'support', name: 'Support', path: '/support', icon: HelpCircle },
      { id: 'settings', name: 'Settings', path: '/settings', icon: Settings },
    ]
  }
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
        "fixed left-0 top-0 z-30 h-screen bg-background border-r border-border/40 shadow-xl transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[70px]" : "w-[280px]",
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex h-16 items-center justify-between px-4">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <EclatLogo size="small" variant="light" />
                <span className="text-lg font-semibold text-foreground animate-fadeIn">éclatOS</span>
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

          <div className="scrollbar-none flex-1 overflow-y-auto py-4">
            {navCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6">
                {!isCollapsed && (
                  <div className="px-4 mb-2">
                    <p className="text-xs font-medium text-muted-foreground tracking-wider">
                      {category.category}
                    </p>
                  </div>
                )}
                <nav className="flex flex-col gap-1 px-3">
                  {category.items.map((item) => {
                    const isActive = currentPath === item.path || 
                                    (item.path === '/' && currentPath === '/');
                    return (
                      <button
                        key={item.id}
                        onClick={() => navigate(item.path)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
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
            ))}
          </div>
        </div>

        {!isCollapsed && (
          <div className="p-4 mx-2 mb-4">
            <UserProfileButton userName="Jesse Hayes" userRole="Founder/Director" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
