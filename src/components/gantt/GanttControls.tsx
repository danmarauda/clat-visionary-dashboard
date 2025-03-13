
import React from 'react';
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  CalendarRange
} from "lucide-react";

interface GanttControlsProps {
  earliestDate: Date;
  latestDate: Date;
  zoomLevel: number;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleScroll: (direction: 'left' | 'right') => void;
}

export const GanttControls: React.FC<GanttControlsProps> = ({
  earliestDate,
  latestDate,
  zoomLevel,
  handleZoomIn,
  handleZoomOut,
  handleScroll
}) => {
  return (
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
  );
};
