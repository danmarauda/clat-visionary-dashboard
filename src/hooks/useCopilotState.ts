
import { useState, useEffect } from 'react';

export const useCopilotState = () => {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  useEffect(() => {
    const handleToggleCopilot = () => {
      setIsCopilotOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-copilot', handleToggleCopilot);
    return () => {
      window.removeEventListener('toggle-copilot', handleToggleCopilot);
    };
  }, []);

  return {
    isCopilotOpen
  };
};
