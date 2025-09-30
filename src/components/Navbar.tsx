
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UIScaleControl } from './ui/ui-scale-control';
import { useUIScale } from '@/lib/ui-scale-context';

interface NavbarProps {
  sidebarCollapsed: boolean;
  isCopilotOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarCollapsed, isCopilotOpen = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scale, setScale } = useUIScale();
  
  // Determine which module badge to show based on current route
  const getModuleBadge = () => {
    if (location.pathname === '/workspace-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Workspace Management
        </span>
      );
    } else if (location.pathname === '/analytics-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Analytics
        </span>
      );
    } else if (location.pathname === '/building-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Building Management
        </span>
      );
    } else if (location.pathname === '/community-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Community
        </span>
      );
    } else if (location.pathname === '/design-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Design
        </span>
      );
    } else if (location.pathname === '/event-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Event Management
        </span>
      );
    } else if (location.pathname === '/hospitality-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Hospitality
        </span>
      );
    } else if (location.pathname === '/marketing-os') {
      return (
        <span className="text-sm font-light px-4 py-2 rounded-full border border-white/10 bg-white/5">
          Marketing
        </span>
      );
    }
    return null;
  };
  
  return (
    <div 
      className={cn(
        "fixed top-0 z-40 flex items-center justify-between h-16 transition-all duration-300 px-3 sm:px-4 glass",
        "left-0 md:left-[70px] lg:left-[280px]",
        sidebarCollapsed ? "md:left-[70px]" : "md:left-[280px]",
        isCopilotOpen ? "right-0 lg:right-[320px]" : "right-0"
      )}
    >
      <div className="flex-1 flex justify-center">
        {getModuleBadge()}
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="hidden sm:block">
          <UIScaleControl
            onScaleChange={setScale}
            currentScale={scale}
          />
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Settings"
        >
          <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="User profile"
        >
          <User className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
