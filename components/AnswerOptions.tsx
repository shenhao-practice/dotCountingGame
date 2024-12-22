import React from 'react';
import { Button } from '@/components/ui/button';

interface AnswerOptionsProps {
  options: number[];
  onSelect: (answer: number) => void;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({ options, onSelect }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      {options.map((option) => (
        <Button key={option} onClick={() => onSelect(option)}>
          {option}
        </Button>
      ))}
    </div>
  );
};

