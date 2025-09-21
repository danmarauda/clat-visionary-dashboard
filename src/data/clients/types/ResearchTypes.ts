
import { LucideIcon } from "lucide-react";

export interface ClientSection {
  id: string;
  title: string;
  subtitle?: string;
  gradientColors: string[];
  description: string;
  icon?: LucideIcon;
  status?: "Core" | "Enhanced" | "New";
  tags?: string[];
  benefits?: string[];
}

export interface ResearchData {
  clientName: string;
  sections: {
    company: ClientSection;
    leadership: ClientSection;
    technology: ClientSection;
    implementation: ClientSection;
  };
}
