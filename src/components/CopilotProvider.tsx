
import React, { useState } from 'react';
import { CopilotSidebar } from "@copilotkit/react-ui";

interface CopilotProviderProps {
  children: React.ReactNode;
}

const CopilotProvider: React.FC<CopilotProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Listen for custom events to toggle the copilot
  React.useEffect(() => {
    const handleToggleCopilot = () => {
      setIsOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-copilot', handleToggleCopilot);
    return () => {
      window.removeEventListener('toggle-copilot', handleToggleCopilot);
    };
  }, []);
  
  return (
    <CopilotSidebar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      instructions="You are the éclatOS assistant. Help users understand the various OS modules, navigate the platform, and provide information about luxury experiences and enterprise operations."
      title="éclatOS Copilot"
      initialMessage="How can I assist you with your luxury enterprise needs today?"
    >
      {children}
    </CopilotSidebar>
  );
};

export default CopilotProvider;
