
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <Navbar sidebarCollapsed={isCollapsed} />
      
      <main 
        className={cn(
          "min-h-screen transition-all duration-300 pt-20 pb-12 px-6 md:px-8",
          isCollapsed ? "ml-[70px]" : "ml-[280px]"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      <VoiceAssistantBar 
        isListening={isListening} 
        toggleVoiceAssistant={toggleVoiceAssistant}
        openCopilot={() => setIsCopilotOpen(true)}
      />

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
