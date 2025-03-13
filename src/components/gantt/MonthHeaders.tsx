
import React from 'react';
import { format } from 'date-fns';

interface Month {
  month: string;
  year: number;
  position: number;
}

interface MonthHeadersProps {
  months: Month[];
}

export const MonthHeaders: React.FC<MonthHeadersProps> = ({ months }) => {
  return (
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
  );
};
