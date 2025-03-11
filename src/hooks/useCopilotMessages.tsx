
import { useState } from 'react';

export interface CopilotMessage {
  type: 'user' | 'assistant';
  content: string;
}

export function useCopilotMessages() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      type: 'assistant',
      content: 'Hello! I\'m your éclatOS Copilot. I can help you navigate the platform, answer questions, or explain features. Try asking me something!'
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: message }]);
    
    // Simulate response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "I can help you navigate through any of the OS modules. What would you like to explore?",
        "The Design OS helps with brand consistency and design implementation across your spaces.",
        "You're currently in the Design OS module, which handles visual identity and design standards.",
        "Feel free to ask me about any of the Éclat OS modules or features!",
        "I can explain how the different OS modules integrate with each other."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'assistant', content: randomResponse }]);
    }, 1000);
    
    setMessage('');
  };

  return {
    message,
    setMessage,
    messages,
    setMessages,
    handleSendMessage
  };
}
