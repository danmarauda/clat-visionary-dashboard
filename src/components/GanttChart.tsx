
import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  CalendarRange
} from "lucide-react";

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

interface GanttChartProps {
  phases: Phase[];
}

export const GanttChart: React.FC<GanttChartProps> = ({ phases }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find the earliest start date and latest end date from all phases and tasks
  const earliestDate = new Date(Math.min(
    ...phases.map(phase => phase.start.getTime())
  ));
  
  const latestDate = new Date(Math.max(
    ...phases.map(phase => phase.end.getTime())
  ));
  
  // Calculate the total project duration in days
  const projectDurationInDays = Math.ceil((latestDate.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Calculate the width of the chart based on zoom level
  const chartWidth = projectDurationInDays * 15 * zoomLevel;

  // Calculate total number of tasks across all phases
  const totalTasks = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  // Number of phases
  const totalPhases = phases.length;
  
  // Calculate heights for phase headers and task rows
  const phaseHeaderHeight = 40; // Height for each phase header
  const taskRowHeight = Math.floor((1800 - (totalPhases * phaseHeaderHeight)) / totalTasks); // Dynamically calculate height for each task row
  
  // Update scroll position when resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate months to display as headers
  const getMonths = () => {
    const months: {month: string, year: number, position: number}[] = [];
    let currentDate = new Date(earliestDate);
    
    while (currentDate <= latestDate) {
      const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const daysSinceStart = Math.floor((monthStart.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
      const position = (daysSinceStart / projectDurationInDays) * 100;
      
      months.push({
        month: format(currentDate, 'MMM'),
        year: currentDate.getFullYear(),
        position
      });
      
      // Move to the next month
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    return months;
  };
  
  // Get position and width for a task or phase bar
  const getBarStyles = (start: Date, end: Date) => {
    const startDays = Math.floor((start.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
    const endDays = Math.ceil((end.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
    const duration = endDays - startDays;
    
    const left = (startDays / projectDurationInDays) * 100;
    const width = (duration / projectDurationInDays) * 100;
    
    return { left: `${left}%`, width: `${width}%` };
  };
  
  // Get color class based on phase color
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'bg-blue-500 border-blue-600',
      'purple': 'bg-purple-500 border-purple-600',
      'green': 'bg-green-500 border-green-600',
      'orange': 'bg-orange-500 border-orange-600',
      'red': 'bg-red-500 border-red-600',
      'indigo': 'bg-indigo-500 border-indigo-600',
    };
    
    return colorMap[color] || 'bg-gray-500 border-gray-600';
  };
  
  // Handle zoom in/out
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };
  
  // Handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -200 : 200;
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  
  const months = getMonths();
  
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => handleScroll('left')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleScroll('right')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center">
          <CalendarRange className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm mr-4">
            {format(earliestDate, 'MMM yyyy')} - {format(latestDate, 'MMM yyyy')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm mx-2">{Math.round(zoomLevel * 100)}%</span>
          <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoomLevel >= 3}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        id="gantt-container"
        className="border rounded-md overflow-x-auto w-full h-[1800px]"
      >
        <div className="relative" style={{ minWidth: `${chartWidth}px`, width: '100%', height: '100%' }}>
          {/* Month headers */}
          <div className="h-8 bg-muted/50 border-b flex relative sticky top-0 z-10">
            {months.map((month, index) => (
              <div 
                key={`${month.month}-${month.year}-${index}`}
                className="absolute top-0 text-xs flex flex-col items-center border-l border-border/30 h-full pt-1"
                style={{ left: `${month.position}%` }}
              >
                <span className="font-medium">{month.month}</span>
                <span className="text-muted-foreground">{month.year}</span>
              </div>
            ))}
          </div>
          
          {/* Gantt chart content */}
          <div className="relative" style={{ height: 'calc(100% - 32px)' }}>
            {phases.map((phase, phaseIndex) => (
              <div 
                key={phase.id}
                className="relative"
                style={{ 
                  height: `${(phase.tasks.length * taskRowHeight) + phaseHeaderHeight}px`,
                }}
              >
                {/* Phase header */}
                <div className="flex border-b bg-muted/30" style={{ height: `${phaseHeaderHeight}px` }}>
                  {/* Phase label */}
                  <div className="sticky left-0 w-64 p-2 z-10 bg-background/95 flex items-center border-r" style={{ height: `${phaseHeaderHeight}px` }}>
                    <h3 className="font-medium text-sm truncate">{phase.title}</h3>
                  </div>
                  
                  {/* Phase bar */}
                  <div className="flex-1 relative" style={{ height: `${phaseHeaderHeight}px` }}>
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
                <div className="flex flex-col" style={{ height: `${phase.tasks.length * taskRowHeight}px` }}>
                  {phase.tasks.map((task, taskIndex) => (
                    <div 
                      key={task.id} 
                      className="flex border-b"
                      style={{ height: `${taskRowHeight}px` }}
                    >
                      {/* Task label */}
                      <div className="sticky left-0 w-64 p-2 z-10 bg-background/95 flex items-center pl-8 border-r" style={{ height: `${taskRowHeight}px` }}>
                        <span className="text-xs truncate">{task.title}</span>
                      </div>
                      
                      {/* Task bar */}
                      <div className="flex-1 relative" style={{ height: `${taskRowHeight}px` }}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div 
                                className={`absolute h-6 rounded-sm border ${getColorClass(phase.color)}`}
                                style={{
                                  ...getBarStyles(task.start, task.end),
                                  top: `${(taskRowHeight - 24) / 2}px` // Center the bar vertically
                                }}
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
