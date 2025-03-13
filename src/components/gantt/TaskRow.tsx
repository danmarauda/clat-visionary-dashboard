
import React from 'react';
import { format } from 'date-fns';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Task {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

interface TaskRowProps {
  task: Task;
  getBarStyles: (start: Date, end: Date) => { left: string; width: string };
  getColorClass: (color: string) => string;
  phaseColor: string;
}

export const TaskRow: React.FC<TaskRowProps> = ({
  task,
  getBarStyles,
  getColorClass,
  phaseColor
}) => {
  return (
    <div className="flex border-b">
      {/* Task label */}
      <div className="sticky left-0 w-64 p-2 z-10 bg-background/95 h-10 flex items-center pl-8 border-r">
        <span className="text-xs truncate">{task.title}</span>
      </div>
      
      {/* Task bar */}
      <div className="flex-1 h-10 relative">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className={`absolute h-6 rounded-sm border ${getColorClass(phaseColor)} top-2`}
                style={getBarStyles(task.start, task.end)}
              >
                <div className="text-xs text-white truncate px-2 py-0.5">
                  {task.title}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-xs">
                <p className="font-medium">{task.title}</p>
                <p>Start: {format(task.start, 'MMM d, yyyy')}</p>
                <p>End: {format(task.end, 'MMM d, yyyy')}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
