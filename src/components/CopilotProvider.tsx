
import React, { useState } from 'react';
import CopilotSidebar from './CopilotSidebar';

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
    <>
      {children}
      <CopilotSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isListening={false}
        toggleVoiceAssistant={() => {}}
      />
    </>
  );
};

export default CopilotProvider;
