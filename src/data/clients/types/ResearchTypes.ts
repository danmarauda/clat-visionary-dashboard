
export interface ClientSection {
  id: string;
  title: string;
  subtitle?: string;
  gradientColors: string[];
  description: string;
  icon?: React.ElementType;
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
