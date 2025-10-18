
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import VoiceAssistantBar from './VoiceAssistantBar';
import CopilotSidebar from './CopilotSidebar';
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
    <div className="min-h-screen max-h-screen bg-background text-foreground flex overflow-hidden w-screen">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300 min-h-screen max-h-screen overflow-hidden",
        isCollapsed ? "md:ml-[70px]" : "md:ml-[280px]",
        isCopilotOpen ? "mr-0 lg:mr-[320px]" : "mr-0"
      )}>
        <Navbar 
          sidebarCollapsed={isCollapsed}
          isCopilotOpen={isCopilotOpen}
        />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 pb-28 md:pb-24">
          <div className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-12">
            <Outlet />
          </div>
        </main>

        <VoiceAssistantBar 
          isListening={isListening}
          toggleVoiceAssistant={toggleVoiceAssistant}
          openCopilot={() => setIsCopilotOpen(!isCopilotOpen)}
        />
      </div>

      <CopilotSidebar
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        isListening={isListening}
        toggleVoiceAssistant={toggleVoiceAssistant}
      />

      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
    </div>
  );
};

export default Layout;
