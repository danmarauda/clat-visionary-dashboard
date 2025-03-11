
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CopilotSuggestionsProps {
  messages: Array<{ type: string; content: string }>;
  onSuggestionClick: (suggestion: string) => void;
}

const CopilotSuggestions: React.FC<CopilotSuggestionsProps> = ({ 
  messages, 
  onSuggestionClick 
}) => {
  // Quick suggestions
  const suggestions = [
    "What is Design OS?",
    "How does Design OS work?",
    "Show me Design OS features",
    "How does Design OS connect with other modules?"
  ];

  if (messages.length >= 3) {
    return null;
  }

  return (
    <div className="p-4 space-y-2">
      <p className="text-xs text-muted-foreground">Try asking:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="py-1.5 px-3 rounded-full bg-card hover:bg-card/80 text-xs flex items-center gap-1.5 transition-colors"
          >
            {suggestion}
            <ArrowRight className="h-3 w-3" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CopilotSuggestions;
