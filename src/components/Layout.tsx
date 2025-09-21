
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
    const hasVisited = localStorage.getItem('eclat_has_visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('eclat_has_visited', 'true');
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
        isCollapsed ? "ml-[70px]" : "ml-[280px]",
        isCopilotOpen ? "mr-[320px]" : "mr-0"
      )}>
        <Navbar 
          sidebarCollapsed={isCollapsed}
          isCopilotOpen={isCopilotOpen}
        />
        
        <div className="flex flex-1">
          <main className="flex-1 pt-20 pb-12">
            <div className="w-full px-6 mx-auto max-w-[1920px]">
              <Outlet />
            </div>
          </main>
        </div>

        <VoiceAssistantBar 
          isListening={isListening} 
          toggleVoiceAssistant={toggleVoiceAssistant}
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
