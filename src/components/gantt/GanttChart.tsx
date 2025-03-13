
import React, { useState, useRef } from 'react';
import { GanttControls } from './GanttControls';
import { MonthHeaders } from './MonthHeaders';
import { PhaseRow } from './PhaseRow';
import { GanttMarker } from './GanttMarker';
import { getColorClass } from './GanttUtils';
import { useGanttData } from '@/hooks/useGanttData';

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

  // Use our custom hook to get all the calculated data
  const {
    earliestDate,
    latestDate,
    chartWidth,
    months,
    getBarStyles
  } = useGanttData(phases, zoomLevel);
  
  // Update scroll position when resizing
  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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

  // Generate phase markers
  const generatePhaseMarkers = () => {
    const markers = [];
    
    for (const phase of phases) {
      // Create start marker
      const startStyle = getBarStyles(phase.start, phase.start);
      markers.push(
        <GanttMarker
          key={`start-${phase.id}`}
          date={phase.start}
          label={`Start: ${phase.title}`}
          position={startStyle.left}
          type="diamond"
          color={`text-${phase.color}-500`}
        />
      );
      
      // Create end marker
      const endStyle = getBarStyles(phase.end, phase.end);
      markers.push(
        <GanttMarker
          key={`end-${phase.id}`}
          date={phase.end}
          label={`End: ${phase.title}`}
          position={endStyle.left}
          type="flag"
          color={`text-${phase.color}-500`}
        />
      );
    }
    
    return markers;
  };
  
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
        className="border rounded-md overflow-x-auto w-full"
        style={{ width: '100%', height: 'auto' }}
      >
        <div className="relative" style={{ minWidth: `${chartWidth}px`, width: '100%' }}>
          {/* Month headers */}
          <MonthHeaders months={months} />
          
          {/* Phase markers */}
          <div className="relative">
            {generatePhaseMarkers()}
          </div>
          
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
