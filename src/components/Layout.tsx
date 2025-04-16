
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import VoiceAssistantBar from './VoiceAssistantBar';
import WelcomeModal from './WelcomeModal';
import { cn } from '@/lib/utils';
import useVoiceAssistant from '@/hooks/useVoiceAssistant';
import { useWelcomeModal } from '@/hooks/useWelcomeModal';
import { useCopilotState } from '@/hooks/useCopilotState';

const Layout: React.FC = () => {
  const { showWelcome, closeWelcomeModal } = useWelcomeModal();
  const { isCopilotOpen } = useCopilotState();
  const { isListening, toggleVoiceAssistant, processVoiceCommand } = useVoiceAssistant();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        isCopilotOpen ? "mr-[320px]" : "mr-0"
      )}>
        <Navbar 
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
            const event = new CustomEvent('toggle-copilot');
            window.dispatchEvent(event);
          }}
        />
      </div>

      {showWelcome && <WelcomeModal onClose={closeWelcomeModal} />}
    </div>
  );
};

export default Layout;
