"use client";

import React, { useState, useEffect } from 'react';
import { Settings2, Minus, Plus } from 'lucide-react';
import { Button } from './button';
import { Slider } from './slider';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface UIScaleControlProps {
  onScaleChange: (scale: number) => void;
  currentScale: number;
}

export const UIScaleControl: React.FC<UIScaleControlProps> = ({ onScaleChange, currentScale }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScaleChange = (value: number[]) => {
    const newScale = value[0] / 100;
    onScaleChange(newScale);
  };

  const scalePercentage = Math.round(currentScale * 100);

  const presets = [
    { label: 'Compact', value: 0.75 },
    { label: 'Normal', value: 0.875 },
    { label: 'Large', value: 1.0 },
  ];

  const applyPreset = (scale: number) => {
    onScaleChange(scale);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="UI Scale Control"
        >
          <Settings2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">UI Scale</h4>
            <span className="text-xs text-muted-foreground">{scalePercentage}%</span>
          </div>

          <div className="space-y-3">
            <Slider
              value={[scalePercentage]}
              onValueChange={handleScaleChange}
              max={150}
              min={50}
              step={5}
              className="w-full"
            />

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>50%</span>
              <div className="flex gap-1">
                {presets.map((preset) => (
                  <Button
                    key={preset.label}
                    variant={Math.abs(currentScale - preset.value) < 0.01 ? "default" : "outline"}
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => applyPreset(preset.value)}
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
              <span>150%</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t">
            <Button
              variant="outline"
              size="sm"
              className="h-7"
              onClick={() => handleScaleChange([Math.max(50, scalePercentage - 5)])}
              disabled={scalePercentage <= 50}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7"
              onClick={() => handleScaleChange([Math.min(150, scalePercentage + 5)])}
              disabled={scalePercentage >= 150}
            >
              <Plus className="h-3 w-3" />
            </Button>
            <span className="text-xs text-muted-foreground ml-auto">
              Fine tune with +/- buttons
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
