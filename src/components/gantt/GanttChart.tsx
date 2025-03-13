
import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { GanttControls } from './GanttControls';
import { MonthHeaders } from './MonthHeaders';
import { PhaseRow } from './PhaseRow';
import { getColorClass } from './GanttUtils';

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
      <GanttControls 
        earliestDate={earliestDate}
        latestDate={latestDate}
        zoomLevel={zoomLevel}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleScroll={handleScroll}
      />
      
      <div 
        ref={containerRef}
        id="gantt-container"
        className="border rounded-md overflow-x-auto overflow-y-auto w-full"
        style={{ height: 'auto', maxHeight: '80vh' }}
      >
        <div className="relative" style={{ minWidth: `${chartWidth}px`, width: '100%' }}>
          {/* Month headers */}
          <MonthHeaders months={months} />
          
          {/* Gantt chart content */}
          <div className="relative">
            {phases.map((phase) => (
              <PhaseRow 
                key={phase.id}
                phase={phase}
                getBarStyles={getBarStyles}
                getColorClass={getColorClass}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
