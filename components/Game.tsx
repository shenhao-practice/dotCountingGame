'use client'

import React, { useState, useEffect } from 'react';
import { ShapeDisplay } from './ShapeDisplay';
import { AnswerOptions } from './AnswerOptions';
import { Configuration } from './Configuration';
import { generateTetrisShape } from '../utils/shapeGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Game: React.FC = () => {
  const [gameState, setGameState] = useState<{
    dots: { x: number; y: number }[];
    cells: { x: number; y: number }[];
    width: number;
    height: number;
    minDots: number;
    maxDots: number;
  }>({ dots: [], cells: [], width: 0, height: 0, minDots: 1, maxDots: 5 });
  const [options, setOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isConfiguring, setIsConfiguring] = useState(true);
  const [isChallenge, setIsChallenge] = useState(false);
  const cellSize = 50;

  const setMinDots = (value: number) => {
    setGameState((prev) => ({
      ...prev,
      minDots: Math.min(value, prev.maxDots)
    }));
  };

  const setMaxDots = (value: number) => {
    setGameState((prev) => ({
      ...prev,
      maxDots: Math.max(value, prev.minDots)
    }));
  };

  const generateNewRound = () => {
    const numDots = isChallenge
      ? Math.floor(Math.random() * (gameState.maxDots - gameState.minDots + 1)) + gameState.minDots
      : gameState.maxDots;
    const shape = generateTetrisShape(cellSize, numDots);
    setGameState(prev => ({ ...prev, ...shape }));

    const correctAnswer = numDots;
    
    // Always generate three options with +1/-1 from the correct answer
    let newOptions = [
      correctAnswer - 1,
      correctAnswer,
      correctAnswer + 1
    ];

    // Handle edge cases
    if (correctAnswer === 1) {
      newOptions = [1, 2, 3];
    } else if (correctAnswer === 10) {
      newOptions = [8, 9, 10];
    }
    
    setOptions(shuffleArray(newOptions));
  };

  useEffect(() => {
    if (!isConfiguring) {
      generateNewRound();
    }
  }, [isConfiguring, gameState.minDots, gameState.maxDots, isChallenge]);

  const handleAnswer = (answer: number) => {
    if (answer === gameState.dots.length) {
      setScore(score + 1);
    }
    generateNewRound();
  };

  const handleStart = () => {
    setIsConfiguring(false);
    setScore(0);
  };

  const handleEndGame = () => {
    setIsConfiguring(true);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Dot Counting Game</CardTitle>
      </CardHeader>
      <CardContent>
        {isConfiguring ? (
          <Configuration
            minDots={gameState.minDots}
            maxDots={gameState.maxDots}
            isChallenge={isChallenge}
            onMinDotsChange={setMinDots}
            onMaxDotsChange={setMaxDots}
            onModeChange={setIsChallenge}
            onStart={handleStart}
          />
        ) : (
          <>
            <div className="text-center mb-4 text-2xl font-bold">Score: {score}</div>
            <div className="flex justify-center items-center bg-gray-900 p-8 rounded-lg mb-4">
              <ShapeDisplay
                dots={gameState.dots}
                cells={gameState.cells}
                width={gameState.width}
                height={gameState.height}
                cellSize={cellSize}
              />
            </div>
            <AnswerOptions options={options} onSelect={handleAnswer} />
            <div className="mt-4">
              <Button onClick={handleEndGame} variant="outline" className="w-full">
                End Game
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

