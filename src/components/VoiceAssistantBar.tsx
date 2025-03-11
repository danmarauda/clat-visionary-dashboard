
import React from 'react';
import { Mic, MicOff, MessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface VoiceAssistantBarProps {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
  openCopilot: () => void;
  isCopilotOpen: boolean;
}

const VoiceAssistantBar: React.FC<VoiceAssistantBarProps> = ({
  isListening,
  toggleVoiceAssistant,
  openCopilot,
  isCopilotOpen
}) => {
  return (
    <div className="fixed bottom-0 right-0 p-4 flex items-center gap-2 z-50">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "rounded-full bg-accent/80 hover:bg-accent border-white/20 backdrop-blur shadow-lg transition-all",
          isCopilotOpen && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        onClick={openCopilot}
      >
        {isCopilotOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "rounded-full bg-accent/80 hover:bg-accent border-white/20 backdrop-blur shadow-lg transition-all",
          isListening && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        onClick={toggleVoiceAssistant}
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default VoiceAssistantBar;
