
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StarBorder } from '@/components/ui/star-border';

interface CitationPopoverProps {
  children: React.ReactNode;
  citation: string;
  legislation?: string;
  link?: string;
}

const CitationPopover: React.FC<CitationPopoverProps> = ({
  children,
  citation,
  legislation,
  link
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <StarBorder 
          as="span" 
          className="cursor-pointer px-0 py-0"
          color="hsl(var(--primary))"
          speed="8s"
        >
          <div className="flex items-center gap-1 py-1 px-3 text-sm">
            <FileText className="h-3.5 w-3.5" />
            <span>{children}</span>
          </div>
        </StarBorder>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-background/95 backdrop-blur border-white/20">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2 text-primary">
            <FileText className="h-4 w-4" />
            <span className="font-medium">Citation</span>
          </div>
          <p className="text-sm text-white/90">{citation}</p>
          {legislation && (
            <p className="text-sm text-white/70">
              <span className="font-medium">Legislation:</span> {legislation}
            </p>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary/80 hover:text-primary flex items-center space-x-1 mt-2"
            >
              <ExternalLink className="h-3 w-3" />
              <span>View Source</span>
            </a>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CitationPopover;
