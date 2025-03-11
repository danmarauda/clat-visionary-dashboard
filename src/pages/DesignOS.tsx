
import React from 'react';
import { 
  Paintbrush, 
  Ruler, 
  Box, 
  Clock, 
  FileText, 
  Layers
} from 'lucide-react';
import OSModuleLayout from '../components/OSModuleLayout';

const DesignOSPage: React.FC = () => {
  return (
    <OSModuleLayout
      moduleName="designOS"
      moduleColor="design"
      tagline="Comprehensive design and construction management platform for creating and evolving Éclat's physical spaces."
      description="Streamlines the entire lifecycle of physical space creation and evolution, ensuring Éclat's distinctive aesthetic and functional excellence across all properties."
      imageUrl="/placeholder.svg"
      keyComponents={[
        "3D Visualization: Immersive 3D modeling and visualization tools for space planning, design reviews, and virtual walkthroughs.",
        "Design Library: Centralized repository of Éclat design standards, materials, fixtures, and furnishings for brand consistency.",
        "Project Management: Comprehensive tools for timeline tracking, resource allocation, and milestone management for construction projects.",
        "Documentation: Digital management of architectural plans, permits, contracts, and compliance documentation.",
        "Vendor Management: Streamlined coordination with architects, designers, contractors, and suppliers with performance tracking.",
        "Space Evolution: Tools for planning and executing space renovations, updates, and reconfigurations with minimal disruption."
      ]}
      businessImpact={[
        {
          title: "Project Efficiency",
          description: "Reduction in project timelines through streamlined processes and better coordination."
        },
        {
          title: "Cost Control",
          description: "Reduction in construction and renovation costs through better planning and resource management."
        },
        {
          title: "Brand Consistency",
          description: "Ensures consistent design language and quality standards across all Éclat properties."
        },
        {
          title: "Risk Mitigation",
          description: "Reduced compliance issues and construction delays through comprehensive documentation and oversight."
        },
        {
          title: "Space Optimization",
          description: "Data-driven design decisions that maximize functionality, aesthetics, and member satisfaction."
        },
        {
          title: "Expansion Readiness",
          description: "Scalable design system that facilitates rapid expansion to new locations while maintaining quality."
        }
      ]}
      integrationPoints={[
        {
          icon: Box,
          module: "building",
          description: "Incorporates building system requirements and infrastructure planning"
        },
        {
          icon: Layers,
          module: "workspace",
          description: "Aligns space design with functional requirements and member needs"
        },
        {
          icon: Clock,
          module: "hospitality",
          description: "Coordinates F&B space design with operational requirements"
        },
        {
          icon: Ruler,
          module: "event",
          description: "Ensures event spaces are designed for versatility and optimal functionality"
        },
        {
          icon: FileText,
          module: "analytics",
          description: "Leverages usage data to inform design decisions and space optimization"
        }
      ]}
      designApproach={[
        "Streamlines the entire lifecycle of physical space creation and evolution.",
        "Ensures Éclat's distinctive aesthetic and functional excellence across all properties.",
        "Reduction in project timelines through streamlined processes and better coordination.",
        "Reduction in construction and renovation costs through better planning.",
        "Ensures consistent design language and quality standards across all Éclat properties.",
        "Data-driven design decisions that maximize functionality, aesthetics, and member satisfaction."
      ]}
      personas={[
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        },
        {
          name: "Name",
          role: "Role",
          description: "User Persona Description"
        }
      ]}
      prevModule={{ name: "Community OS", path: "/community-os" }}
      nextModule={{ name: "Event OS", path: "/event-os" }}
    />
  );
};

export default DesignOSPage;
