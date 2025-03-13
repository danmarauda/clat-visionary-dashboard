
import React, { useState } from 'react';
import { CopilotSidebar } from "@copilotkit/react-ui";

interface CopilotProviderProps {
  children: React.ReactNode;
}

const CopilotProvider: React.FC<CopilotProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Listen for custom events to toggle the copilot
  React.useEffect(() => {
    const handleToggleCopilot = () => {
      setSidebarOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-copilot', handleToggleCopilot);
    return () => {
      window.removeEventListener('toggle-copilot', handleToggleCopilot);
    };
  }, []);
  
  return (
    <CopilotSidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
      instructions="You are the éclatOS assistant. Help users understand the various OS modules, navigate the platform, and provide information about luxury experiences and enterprise operations."
      labels={{
        title: "éclatOS Copilot",
        initial: "How can I assist you with your luxury enterprise needs today?"
      }}
    >
      {children}
    </CopilotSidebar>
  );
};

export default CopilotProvider;
