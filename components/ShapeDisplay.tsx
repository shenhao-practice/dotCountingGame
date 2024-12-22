import React from 'react';

interface ShapeDisplayProps {
  dots: { x: number; y: number }[];
  cells: { x: number; y: number }[];
  width: number;
  height: number;
  cellSize: number;
}

export const ShapeDisplay: React.FC<ShapeDisplayProps> = ({ dots, cells, width, height, cellSize }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      className="bg-transparent"
    >
      {/* Draw the shape cells */}
      {cells.map((cell, index) => (
        <rect
          key={`cell-${index}`}
          x={cell.x}
          y={cell.y}
          width={cellSize}
          height={cellSize}
          rx={8}
          fill="#ef4444"
          className="drop-shadow-md"
        />
      ))}
      
      {/* Draw the dots */}
      {dots.map((dot, index) => (
        <circle
          key={`dot-${index}`}
          cx={dot.x}
          cy={dot.y}
          r={cellSize / 4}
          fill="white"
        />
      ))}
    </svg>
  );
};

