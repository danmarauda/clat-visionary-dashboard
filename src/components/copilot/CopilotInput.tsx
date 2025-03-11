
import React from 'react';
import { Mic, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopilotInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  isListening: boolean;
  toggleVoiceAssistant: () => void;
}

const CopilotInput: React.FC<CopilotInputProps> = ({
  message,
  setMessage,
  handleSendMessage,
  isListening,
  toggleVoiceAssistant
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
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
  );
};

export default CopilotInput;
