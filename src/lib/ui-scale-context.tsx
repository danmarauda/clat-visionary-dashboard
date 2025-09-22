"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UIScaleContextType {
  scale: number;
  setScale: (scale: number) => void;
}

const UIScaleContext = createContext<UIScaleContextType | undefined>(undefined);

export const useUIScale = () => {
  const context = useContext(UIScaleContext);
  if (!context) {
    throw new Error('useUIScale must be used within a UIScaleProvider');
  }
  return context;
};

interface UIScaleProviderProps {
  children: React.ReactNode;
  defaultScale?: number;
}

export const UIScaleProvider: React.FC<UIScaleProviderProps> = ({
  children,
  defaultScale = 0.875
}) => {
  const [scale, setScaleState] = useState<number>(defaultScale);

  // Load scale from localStorage on mount
  useEffect(() => {
    const savedScale = localStorage.getItem('ui-scale');
    if (savedScale) {
      const parsedScale = parseFloat(savedScale);
      if (parsedScale >= 0.5 && parsedScale <= 1.5) {
        setScaleState(parsedScale);
      }
    }
  }, []);

  // Save scale to localStorage and update CSS custom property
  const setScale = (newScale: number) => {
    setScaleState(newScale);
    localStorage.setItem('ui-scale', newScale.toString());

    // Update CSS custom property
    document.documentElement.style.setProperty('--ui-scale', newScale.toString());
  };

  return (
    <UIScaleContext.Provider value={{ scale, setScale }}>
      {children}
    </UIScaleContext.Provider>
  );
};
