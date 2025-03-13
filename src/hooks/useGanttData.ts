
import { useMemo } from 'react';
import { format } from 'date-fns';

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

interface Month {
  month: string;
  year: number;
  position: number;
}

interface GanttDataResult {
  earliestDate: Date;
  latestDate: Date;
  projectDurationInDays: number;
  chartWidth: number;
  months: Month[];
  getBarStyles: (start: Date, end: Date) => { left: string; width: string };
}

export const useGanttData = (phases: Phase[], zoomLevel: number): GanttDataResult => {
  return useMemo(() => {
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

    // Calculate months to display as headers
    const months: Month[] = [];
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
    
    // Get position and width for a task or phase bar
    const getBarStyles = (start: Date, end: Date) => {
      const startDays = Math.floor((start.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
      const endDays = Math.ceil((end.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
      const duration = endDays - startDays;
      
      const left = (startDays / projectDurationInDays) * 100;
      const width = (duration / projectDurationInDays) * 100;
      
      return { left: `${left}%`, width: `${width}%` };
    };

    return {
      earliestDate,
      latestDate,
      projectDurationInDays,
      chartWidth,
      months,
      getBarStyles
    };
  }, [phases, zoomLevel]);
};
