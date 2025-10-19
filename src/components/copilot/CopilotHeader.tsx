
import React from 'react';
import { Brain } from 'lucide-react';

interface CopilotHeaderProps {
  onClose: () => void;
}

const CopilotHeader: React.FC<CopilotHeaderProps> = ({ onClose }) => {
  return (
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
  );
};

export default CopilotHeader;
