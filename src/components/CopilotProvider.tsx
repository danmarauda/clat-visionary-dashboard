
import React, { useState } from 'react';
import { CopilotSidebar } from "@copilotkit/react-ui";

interface CopilotProviderProps {
  children: React.ReactNode;
}

const CopilotProvider: React.FC<CopilotProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <CopilotSidebar
      open={isOpen}
      onOpenChange={setIsOpen}
      instructions="You are the éclatOS assistant. Help users understand the various OS modules, navigate the platform, and provide information about luxury experiences and enterprise operations."
      labels={{
        title: "éclatOS Copilot",
        initial: "How can I assist you with your luxury enterprise needs today?",
      }}
    >
      {children}
    </CopilotSidebar>
  );
};

export default CopilotProvider;
