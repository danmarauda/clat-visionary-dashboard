
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ResearchSectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  status?: string;
}

const ResearchSectionHeader: React.FC<ResearchSectionHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  status
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="p-2 rounded-lg bg-white/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-white/70 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {status && (
        <span className="text-xs font-medium px-2.5 py-1 rounded-full
          bg-primary/10 text-primary border border-primary/20
          group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
          {status}
        </span>
      )}
    </div>
  );
};

export default ResearchSectionHeader;
