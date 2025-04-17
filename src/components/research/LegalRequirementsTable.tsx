
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { CheckCircle2, XCircle, HelpCircle, ExternalLink } from 'lucide-react';

export interface Requirement {
  item: string;
  mandated: boolean | 'maybe';
  citation: string;
  legislation?: string;
  link?: string;
}

interface LegalRequirementsTableProps {
  requirements: Requirement[];
}

const LegalRequirementsTable: React.FC<LegalRequirementsTableProps> = ({ requirements }) => {
  const getStatusColor = (mandated: boolean | 'maybe') => {
    if (mandated === 'maybe') return "hsl(var(--warning))";
    return mandated ? "rgb(34 197 94)" : "rgb(239 68 68)";
  };

  const getStatusIcon = (mandated: boolean | 'maybe') => {
    if (mandated === 'maybe') return <HelpCircle className="h-5 w-5 text-yellow-500" />;
    return mandated ? 
      <CheckCircle2 className="h-5 w-5 text-green-500" /> : 
      <XCircle className="h-5 w-5 text-red-500" />;
  };

  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow>
            <TableHead className="text-white font-semibold">Requirement</TableHead>
            <TableHead className="text-white font-semibold">Mandated by Law?</TableHead>
            <TableHead className="text-white font-semibold">Citation</TableHead>
            <TableHead className="text-white font-semibold">Authority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requirements.map((req, index) => (
            <TableRow 
              key={index}
              className="hover:bg-white/5 transition-colors"
            >
              <TableCell className="font-medium text-white">{req.item}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getStatusIcon(req.mandated)}
                  <span className={`text-sm ${
                    req.mandated === true ? 'text-green-500' :
                    req.mandated === false ? 'text-red-500' :
                    'text-yellow-500'
                  }`}>
                    {typeof req.mandated === 'boolean' 
                      ? (req.mandated ? 'Yes' : 'No') 
                      : 'Maybe'}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                {req.link ? (
                  <a 
                    href={req.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B5CF6] font-semibold tracking-wide hover:text-[#9D70F9] flex items-center gap-1 group"
                  >
                    {req.citation}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="text-[#8B5CF6] font-semibold tracking-wide">
                    {req.citation}
                  </span>
                )}
              </TableCell>
              <TableCell className="text-white/70">
                {req.legislation || 'Not specified'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LegalRequirementsTable;
