
import React from 'react';
import { Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceAssistantBarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
}

const VoiceAssistantBar: React.FC<VoiceAssistantBarProps> = ({ 
  isListening, 
  toggleVoiceAssistant 
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-card/80 backdrop-blur-lg border border-border/30 rounded-full py-2 px-4 shadow-lg">
        <button
          onClick={toggleVoiceAssistant}
          className={cn(
            "relative flex items-center justify-center rounded-full p-2 transition-all",
            isListening 
              ? "bg-primary/20 text-primary animate-pulse" 
              : "hover:bg-accent/10 text-foreground"
          )}
          aria-label={isListening ? "Stop listening" : "Start voice assistant"}
        >
          <Mic className="h-5 w-5" />
          
          {isListening && (
            <span className="absolute -top-8 whitespace-nowrap text-xs font-medium text-primary bg-background/80 px-2 py-1 rounded-md">
              Listening...
            </span>
          )}
        </button>
        
        <span className="ml-2 text-sm font-medium">
          {isListening ? "Listening..." : "Voice Assistant"}
        </span>
      </div>
    </div>
  );
};

export default VoiceAssistantBar;
