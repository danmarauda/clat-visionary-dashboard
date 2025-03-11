
import React from 'react';
import CopilotHeader from './copilot/CopilotHeader';
import CopilotMessages from './copilot/CopilotMessages';
import CopilotSuggestions from './copilot/CopilotSuggestions';
import CopilotInput from './copilot/CopilotInput';
import { useCopilotMessages } from '@/hooks/useCopilotMessages';

interface CopilotSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isListening: boolean;
  toggleVoiceAssistant: () => void;
}

const CopilotSidebar: React.FC<CopilotSidebarProps> = ({ 
  isOpen, 
  onClose, 
  isListening,
  toggleVoiceAssistant
}) => {
  const {
    message,
    setMessage,
    messages,
    setMessages,
    handleSendMessage
  } = useCopilotMessages();

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    setMessages(prev => [...prev, { type: 'user', content: suggestion }]);
    
    // Simulate response
    setTimeout(() => {
      let response = "";
      if (suggestion.includes("What is")) {
        response = "Design OS is our comprehensive design system that ensures brand consistency across all your physical and digital spaces. It provides tools for managing visual identity, signage systems, and space design standards.";
      } else if (suggestion.includes("How does Design OS work")) {
        response = "Design OS works by centralizing all your design assets, guidelines, and implementation tools. It connects with digital signage, space planning tools, and provides templates for consistent application of your brand.";
      } else if (suggestion.includes("features")) {
        response = "Design OS features include: digital asset management, signage control, space visualization tools, brand guideline repository, and design implementation tracking.";
      } else {
        response = "Design OS connects with Building OS for physical implementation, Marketing OS for brand alignment, and Event OS for temporary design elements and experiences.";
      }
      
      setMessages(prev => [...prev, { type: 'assistant', content: response }]);
    }, 1000);
    
    setMessage('');
  };

  // If not open, return null to not render anything
  if (!isOpen) return null;

  return (
    <div className="h-screen w-[320px] bg-background border-l border-border shadow-md flex flex-col z-20">
      <CopilotHeader onClose={onClose} />
      <CopilotMessages messages={messages} />
      <CopilotSuggestions 
        messages={messages} 
        onSuggestionClick={handleSuggestionClick} 
      />
      <CopilotInput 
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        isListening={isListening}
        toggleVoiceAssistant={toggleVoiceAssistant}
      />
    </div>
  );
};

export default CopilotSidebar;
