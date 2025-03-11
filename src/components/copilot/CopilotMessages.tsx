
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CopilotMessage } from '@/hooks/useCopilotMessages';

interface CopilotMessagesProps {
  messages: CopilotMessage[];
}

const CopilotMessages: React.FC<CopilotMessagesProps> = ({ messages }) => {
  return (
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
  );
};

export default CopilotMessages;
