
import React from 'react';
import { format } from 'date-fns';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Flag, Diamond, Star } from 'lucide-react';

interface MarkerProps {
  date: Date;
  label: string;
  position: string;
  type?: 'flag' | 'diamond' | 'star';
  color?: string;
}

export const GanttMarker: React.FC<MarkerProps> = ({
  date,
  label,
  position,
  type = 'flag',
  color = 'text-primary'
}) => {
  // Determine which icon to use based on type
  const IconComponent = {
    'flag': Flag,
    'diamond': Diamond,
    'star': Star
  }[type];
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="absolute top-0 -mt-0.5 z-20 flex flex-col items-center"
            style={{ left: position }}
          >
            <div className={`${color}`}>
              <IconComponent className="h-5 w-5" />
            </div>
            <div className="h-full border-l border-dashed border-current opacity-30"></div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs">
            <p className="font-medium">{label}</p>
            <p>{format(date, 'MMM d, yyyy')}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
