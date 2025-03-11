
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  sidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarCollapsed }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={cn(
        "fixed top-0 right-0 z-40 flex items-center justify-between h-16 transition-all duration-300 px-4",
        sidebarCollapsed ? "left-[70px]" : "left-[280px]"
      )}
    >
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="User profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
