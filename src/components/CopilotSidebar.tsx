
import React, { useState } from 'react';
import { Mic, Send, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'assistant'; content: string}[]>([
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick suggestions
  const suggestions = [
    "What is Design OS?",
    "How does Design OS work?",
    "Show me Design OS features",
    "How does Design OS connect with other modules?"
  ];

  // If not open, don't render to save performance
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-screen w-[320px] bg-background border-l border-border shadow-xl flex flex-col z-30">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-module-design/20">
            <Brain className="h-5 w-5 text-module-design" />
          </div>
          <h2 className="font-semibold text-lg">éclatOS Copilot</h2>
        </div>
        <button
          onClick={onClose}
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent/10 transition-colors"
          aria-label="Close sidebar"
        >
          <span className="text-sm">Close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={cn(
              "flex items-start gap-3 max-w-[85%] animate-fadeInUp",
              msg.type === 'user' ? 'ml-auto' : ''
            )}
          >
            {msg.type === 'assistant' && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-card flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-module-design" />
              </div>
            )}
            <div
              className={cn(
                "rounded-xl p-3 text-sm",
                msg.type === 'user' 
                  ? 'bg-module-design text-white' 
                  : 'bg-card text-card-foreground'
              )}
            >
              {msg.content}
            </div>
            {msg.type === 'user' && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-module-design/20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-module-design" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      {messages.length < 3 && (
        <div className="p-4 space-y-2">
          <p className="text-xs text-muted-foreground">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
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
                }}
                className="py-1.5 px-3 rounded-full bg-card hover:bg-card/80 text-xs flex items-center gap-1.5 transition-colors"
              >
                {suggestion}
                <ArrowRight className="h-3 w-3" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            className="w-full p-3 pr-14 rounded-xl bg-card border border-border resize-none focus:outline-none focus:ring-1 focus:ring-module-design"
            rows={2}
          />
          <div className="absolute right-3 bottom-3 flex items-center space-x-2">
            <button
              onClick={toggleVoiceAssistant}
              className={cn(
                "h-8 w-8 flex items-center justify-center rounded-full transition-colors",
                isListening
                  ? "bg-module-design text-white animate-pulse"
                  : "bg-card hover:bg-card/80 text-muted-foreground"
              )}
              aria-label={isListening ? "Stop voice input" : "Start voice input"}
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-module-design text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopilotSidebar;
