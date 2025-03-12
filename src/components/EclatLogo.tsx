
import React from 'react';
import { cn } from '@/lib/utils';

interface EclatLogoProps {
  size?: "small" | "medium" | "large";
  variant?: "light" | "dark";
  className?: string;
}

const EclatLogo: React.FC<EclatLogoProps> = ({ 
  size = "medium", 
  variant = "light",
  className
}) => {
  const getSize = () => {
    switch (size) {
      case "small": return "w-8 h-8 text-sm";
      case "large": return "w-14 h-14 text-2xl";
      default: return "w-11 h-11 text-lg";
    }
  };
  
  const sizeClasses = getSize();
  const isLight = variant === "light";
  
  return (
    <div 
      className={cn(
        "rounded-xl flex items-center justify-center font-bold",
        isLight ? "bg-transparent border-2 border-primary text-primary" : "bg-primary text-white",
        sizeClasses,
        className
      )}
    >
      E
    </div>
  );
};

export default EclatLogo;
