
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Allow time for exit animation
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={handleClose}
    >
      <div 
        className={cn(
          "neo-blur max-w-lg w-full mx-4 rounded-2xl p-6 shadow-2xl transition-all duration-500 transform",
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gradient">Welcome to Éclat OS</h2>
          <button 
            onClick={handleClose}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Close welcome modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Éclat OS is a luxury workspace management platform designed to elevate your experience with elegant design and powerful features.
          </p>
          
          <div className="rounded-xl bg-primary/10 p-4 border border-primary/20">
            <h3 className="text-lg font-medium mb-2 text-primary">Voice Navigation</h3>
            <p className="text-sm text-muted-foreground">
              Use the voice assistant in the navbar to navigate with commands like "Go to Dashboard" or "Open Gallery".
            </p>
          </div>
          
          <div className="rounded-xl bg-card p-4 border border-border/50">
            <h3 className="text-lg font-medium mb-2">Key Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                <span>Interactive Dashboard Suite with real-time analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                <span>AI-powered workspace optimization and insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                <span>Comprehensive building management system</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-primary/90 hover:bg-primary transition-colors text-white font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
