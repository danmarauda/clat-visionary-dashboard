
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GradientCardProps {
  gradientColors: string[];
  children: React.ReactNode;
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  gradientColors,
  children,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative p-6 rounded-xl overflow-hidden",
        "bg-white/5 backdrop-blur-sm",
        "border border-white/10",
        "hover:border-white/20",
        "transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-20",
          ...gradientColors
        )}
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.08] to-transparent 
        opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default GradientCard;
