
import React from 'react';
import { format } from 'date-fns';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TaskRow } from './TaskRow';

interface Task {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

interface Phase {
  id: string;
  title: string;
  start: Date;
  end: Date;
  tasks: Task[];
  color: string;
}

interface PhaseRowProps {
  phase: Phase;
  getBarStyles: (start: Date, end: Date) => { left: string; width: string };
  getColorClass: (color: string) => string;
}

export const PhaseRow: React.FC<PhaseRowProps> = ({
  phase,
  getBarStyles,
  getColorClass
}) => {
  return (
    <div className="relative">
      {/* Phase header */}
      <div className="flex border-b bg-muted/30">
        {/* Phase label */}
        <div className="sticky left-0 w-64 p-2 z-10 bg-background/95 h-10 flex items-center border-r">
          <h3 className="font-medium text-sm truncate">{phase.title}</h3>
        </div>
        
        {/* Phase bar */}
        <div className="flex-1 h-10 relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className={`absolute h-6 rounded-md border ${getColorClass(phase.color)} opacity-70 top-2`}
                  style={getBarStyles(phase.start, phase.end)}
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-xs">
                  <p className="font-medium">{phase.title}</p>
                  <p>Start: {format(phase.start, 'MMM d, yyyy')}</p>
                  <p>End: {format(phase.end, 'MMM d, yyyy')}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Tasks */}
      <div className="flex flex-col">
        {phase.tasks.map((task) => (
          <TaskRow 
            key={task.id}
            task={task}
            getBarStyles={getBarStyles}
            getColorClass={getColorClass}
            phaseColor={phase.color}
          />
        ))}
      </div>
    </div>
  );
};
