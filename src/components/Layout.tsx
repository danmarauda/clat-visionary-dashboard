
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
    const hasVisited = localStorage.getItem('eclat_has_visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('eclat_has_visited', 'true');
    }
  }, []);

  const toggleCopilot = () => {
    setIsCopilotOpen(!isCopilotOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <Navbar 
        sidebarCollapsed={isCollapsed} 
        isCopilotOpen={isCopilotOpen}
      />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        isCollapsed ? "ml-[70px]" : "ml-[280px]"
      )}>
        <div className="flex flex-1">
          <main className="flex-1 pt-20 pb-12">
            <div className="w-full px-6 mx-auto max-w-[1920px]">
              <Outlet />
            </div>
          </main>
          
          {isCopilotOpen && (
            <CopilotSidebar 
              isOpen={isCopilotOpen}
              onClose={toggleCopilot}
              isListening={isListening}
              toggleVoiceAssistant={toggleVoiceAssistant}
            />
          )}
        </div>

        <VoiceAssistantBar 
          isListening={isListening} 
          toggleVoiceAssistant={toggleVoiceAssistant}
          openCopilot={toggleCopilot}
          isCopilotOpen={isCopilotOpen}
        />
      </div>

      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
    </div>
  );
};

export default Layout;
