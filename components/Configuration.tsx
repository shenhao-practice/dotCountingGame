'use client'

import React from 'react';
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface ConfigurationProps {
  minDots: number;
  maxDots: number;
  isChallenge: boolean;
  onMinDotsChange: (value: number) => void;
  onMaxDotsChange: (value: number) => void;
  onModeChange: (isChallenge: boolean) => void;
  onStart: () => void;
}

export const Configuration: React.FC<ConfigurationProps> = ({
  minDots,
  maxDots,
  isChallenge,
  onMinDotsChange,
  onMaxDotsChange,
  onModeChange,
  onStart
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="dot-range">Number of Dots (1-10)</Label>
        <div className="relative pt-1">
          <Slider
            id="dot-range"
            min={1}
            max={10}
            step={1}
            value={[minDots, maxDots]}
            onValueChange={(value) => {
              onMinDotsChange(value[0]);
              onMaxDotsChange(value[1]);
            }}
            className="[&_[role=slider]:first-child]:bg-gray-400 [&_[role=slider]:last-child]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-black [&_[role=slider]]:rounded-full [&_[role=slider]]:w-4 [&_[role=slider]]:h-4"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Min: {minDots}</span>
            <span className="text-sm text-gray-600">Max: {maxDots}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="game-mode"
          checked={isChallenge}
          onCheckedChange={onModeChange}
        />
        <Label htmlFor="game-mode">{isChallenge ? 'Challenge Mode' : 'Practice Mode'}</Label>
      </div>

      <div className="text-sm text-gray-500">
        {isChallenge 
          ? `Challenge Mode: Shapes will have ${minDots} to ${maxDots} dots.`
          : `Practice Mode: All shapes will have ${maxDots} dots.`
        }
      </div>

      <Button onClick={onStart} className="w-full">Start Game</Button>
    </div>
  );
};

