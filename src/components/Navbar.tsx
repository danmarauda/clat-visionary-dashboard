
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Bell, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
  sidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isListening, toggleVoiceAssistant, sidebarCollapsed }) => {
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
          onClick={toggleVoiceAssistant}
          className={cn(
            "relative flex items-center justify-center rounded-full p-2 transition-all",
            isListening 
              ? "bg-primary/20 text-primary animate-pulse" 
              : "hover:bg-accent/10 text-foreground"
          )}
          aria-label={isListening ? "Stop listening" : "Start voice assistant"}
        >
          <Mic className="h-5 w-5" />
          
          {isListening && (
            <span className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-primary bg-background/80 px-2 py-1 rounded-md">
              Listening...
            </span>
          )}
        </button>

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
