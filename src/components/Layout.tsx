
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import VoiceAssistantBar from './VoiceAssistantBar';
import WelcomeModal from './WelcomeModal';
import { cn } from '@/lib/utils';
import useVoiceAssistant from '@/hooks/useVoiceAssistant';

const Layout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const { isListening, toggleVoiceAssistant, processVoiceCommand } = useVoiceAssistant();

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('alias_has_visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('alias_has_visited', 'true');
    }
    
    // Listen for custom events to detect copilot state
    const handleToggleCopilot = () => {
      setIsCopilotOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-copilot', handleToggleCopilot);
    return () => {
      window.removeEventListener('toggle-copilot', handleToggleCopilot);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        "ml-0 md:ml-[70px] lg:ml-[280px]",
        isCollapsed ? "md:ml-[70px]" : "md:ml-[280px]",
        isCopilotOpen ? "mr-0 lg:mr-[280px]" : "mr-0"
      )}>
        <Navbar 
          sidebarCollapsed={isCollapsed}
          isCopilotOpen={isCopilotOpen}
        />
        
        <div className="flex flex-1 overflow-x-hidden">
          <main className="flex-1 pt-16 pb-20 md:pb-8 w-full">
            <div className="w-full max-w-[1920px] px-3 sm:px-4 md:px-6 mx-auto overflow-x-hidden">
              <Outlet />
            </div>
          </main>
        </div>

        <VoiceAssistantBar 
          isListening={false}
          toggleVoiceAssistant={() => {}}
          openCopilot={() => {
            // Dispatch the toggle event to show/hide the copilot
            const event = new CustomEvent('toggle-copilot');
            window.dispatchEvent(event);
          }}
        />
      </div>

      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
    </div>
  );
};

export default Layout;
