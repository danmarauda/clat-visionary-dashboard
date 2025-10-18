
import React from 'react';
import { cn } from '@/lib/utils';

interface AliasLogoProps {
  size?: "small" | "medium" | "large";
  variant?: "light" | "dark";
  className?: string;
  customLogoUrl?: string;
}

const AliasLogo: React.FC<AliasLogoProps> = ({ 
  size = "medium", 
  variant = "light",
  className,
  customLogoUrl
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
  
  // If custom logo URL is provided, render image
  if (customLogoUrl) {
    return (
      <img 
        src={customLogoUrl}
        alt="Logo"
        className={cn(sizeClasses, "object-contain", className)}
      />
    );
  }
  
  // Otherwise render letter logo
  return (
    <div 
      className={cn(
        "rounded-xl flex items-center justify-center font-bold",
        isLight ? "bg-transparent border-2 border-primary text-primary" : "bg-primary text-white",
        sizeClasses,
        className
      )}
    >
      A
    </div>
  );
};

export default AliasLogo;
