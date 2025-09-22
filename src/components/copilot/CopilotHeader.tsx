
import React from 'react';
import { Brain, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopilotHeaderProps {
  onClose: () => void;
  isListening?: boolean;
  toggleVoiceAssistant?: () => void;
}

const CopilotHeader: React.FC<CopilotHeaderProps> = ({
  onClose,
  isListening = false,
  toggleVoiceAssistant
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-module-design/20">
          <Brain className="h-5 w-5 text-module-design" />
        </div>
        <h2 className="font-semibold text-lg">éclatOS Copilot</h2>
        {isListening && (
          <div className="flex items-center gap-1 text-xs text-module-design">
            <Mic className="h-3 w-3 animate-pulse" />
            <span>Listening...</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        {toggleVoiceAssistant && (
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
        )}
        <button
          onClick={onClose}
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent/10 transition-colors"
          aria-label="Close sidebar"
        >
          <span className="text-sm">Close</span>
        </button>
      </div>
    </div>
  );
};

export default CopilotHeader;
