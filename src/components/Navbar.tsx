
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Home, LayoutDashboard, GalleryHorizontalEnd } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
  sidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isListening, toggleVoiceAssistant, sidebarCollapsed }) => {
  const navigate = useNavigate();
  
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Gallery', path: '/gallery', icon: GalleryHorizontalEnd },
  ];

  return (
    <div 
      className={cn(
        "fixed top-4 z-40 glass rounded-full transition-all duration-300 px-4 py-2 mx-auto left-1/2 transform -translate-x-1/2",
        "border border-white/10 shadow-lg animate-fadeInUp"
      )}
      style={{ 
        width: 'fit-content',
        maxWidth: 'calc(100% - 2rem)'
      }}
    >
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-3">
          {quickLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="flex items-center justify-center rounded-full p-2 hover:bg-primary/20 transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              <span className="sr-only">{link.name}</span>
            </button>
          ))}
        </div>

        <div className="h-6 w-px bg-border/50 mx-1"></div>

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
          {isListening ? (
            <MicOff className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
          
          {isListening && (
            <span className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-primary bg-background/80 px-2 py-1 rounded-md">
              Listening...
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
