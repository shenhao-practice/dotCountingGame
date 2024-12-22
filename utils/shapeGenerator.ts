type Point = { x: number; y: number };
type Shape = { dots: Point[]; width: number; height: number };

const shapes: Record<number, Shape[]> = {
  1: [
    { dots: [{x: 0, y: 0}], width: 1, height: 1 }
  ],
  2: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}], width: 2, height: 1 }, // horizontal
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}], width: 1, height: 2 }  // vertical
  ],
  3: [
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}], width: 2, height: 2 }, // └ shape
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}], width: 2, height: 2 }, // ┌ shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}], width: 2, height: 2 }, // ┘ shape
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}], width: 2, height: 2 }, // ┐ shape
    
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}], width: 1, height: 3 }, // | shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], width: 3, height: 1 }, // --- shape
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}], width: 3, height: 3 }  // / shape    
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}], width: 3, height: 3 }, // \ shape
  ],
  4: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}], width: 2, height: 2 },  // square

    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}], width: 4, height: 1 },  // horizontal line
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}], width: 1, height: 4 },  // vertical line

    { dots: [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}], width: 3, height: 2 },  // T shape
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 1}], width: 2, height: 3 },  // T left
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}], width: 3, height: 2 },  // T upside down
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 1}], width: 2, height: 3 },  // T right
    
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}], width: 2, height: 3 },  // L shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 2, y: 1}], width: 3, height: 2 },  // L rotated right
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}], width: 2, height: 3 },  // L rotated 180
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}], width: 3, height: 2 },  // L rotated left
    
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 2}], width: 2, height: 3 },  // mirrored L
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 0}], width: 3, height: 2 },  // mirrored L rotated right
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 0}], width: 2, height: 3 },  // mirrored L rotated 180
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}], width: 3, height: 2 },  // mirrored L rotated left

    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 1}], width: 3, height: 3 },  //"Main diagonal + (0,1)"
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 2}], width: 3, height: 3 },  //"Main diagonal + (0,2)"
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 0}], width: 3, height: 3 },  //"Main diagonal + (1,0)"
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 2}], width: 3, height: 3 },  //"Main diagonal + (1,2)"
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 0}], width: 3, height: 3 },  //"Main diagonal + (2,0)"
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 1}], width: 3, height: 3 },  //"Main diagonal + (2,1)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 0}], width: 3, height: 3 },  //"Anti-diagonal + (0,0)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 1}], width: 3, height: 3 },  //"Anti-diagonal + (0,1)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 1, y: 0}], width: 3, height: 3 },  //"Anti-diagonal + (1,0)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 1, y: 2}], width: 3, height: 3 },  //"Anti-diagonal + (1,2)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 2, y: 1}], width: 3, height: 3 },  //"Anti-diagonal + (2,1)"
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 2, y: 2}], width: 3, height: 3 }   //"Anti-diagonal + (2,2)"

  ],
  5: [ 
    // L shapes (4 rotations)
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 3}], width: 2, height: 4 },  // L shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 0, y: 1}], width: 4, height: 2 },  // Mirrored L rotated left
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 0, y: 0}], width: 2, height: 4 },  // L rotated 180
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 3, y: 0}], width: 4, height: 2 },  // Mirrored L rotated right

    // Mirrored L shapes (4 rotations)    
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 0, y: 3}], width: 2, height: 4 },  // Mirrored L
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 3, y: 1}], width: 4, height: 2 },  // L rotated right
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 0}], width: 2, height: 4 },  // Mirrored L rotated 180
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}], width: 4, height: 2 },  // L rotated left

    // T shapes (4 rotations)
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 0}, {x: 2, y: 2}], width: 3, height: 3 },  // T shape (right-facing T)
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 0, y: 2}], width: 3, height: 3 },  // T rotated 90° (upside-down T)
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 1}], width: 3, height: 3 },  // T rotated 180° (left-facing T)
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}], width: 3, height: 3 },  // T rotated 270° (normal T)

    // Cross shape (1 rotation - symmetric)
    { dots: [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}], width: 3, height: 3 },  // Cross
    { dots: [{x: 0, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 2, y: 2}], width: 3, height: 3 },  // Cross 
    
    // Base horizontal line with one branching dot
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 1, y: 1}], width: 4, height: 2 },  // Branch from second dot
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 2, y: 1}], width: 4, height: 2 },  // Branch from third dot
    // Branch going up instead of down
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 1, y: 0}], width: 4, height: 2 },  // Branch up from second dot
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 2, y: 0}], width: 4, height: 2 },  // Branch up from third dot
    // Base vertical line with one branching dot right
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 1}], width: 2, height: 4 },  // Branch right from second dot
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 2}], width: 2, height: 4 },  // Branch right from third dot
    // Branch going left instead of right
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 0, y: 1}], width: 2, height: 4 },  // Branch left from second dot
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 0, y: 2}], width: 2, height: 4 },  // Branch left from third dot

    // Zigzag shapes (4 variations)
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}], width: 2, height: 4 },  // 0 degrees - original vertical zigzag
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}], width: 4, height: 2 }, 
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 1, y: 3}], width: 2, height: 4 }, 
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 0}, {x: 3, y: 0}], width: 4, height: 2 }, 

    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}], width: 2, height: 4 },  // Mirror of first vertical zigzag
    { dots: [{x: 3, y: 1}, {x: 2, y: 1}, {x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}], width: 4, height: 2 },  // Mirror of second horizontal zigzag
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 2}, {x: 0, y: 3}], width: 2, height: 4 },  // Mirror of third vertical zigzag
    { dots: [{x: 3, y: 1}, {x: 2, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 0, y: 0}], width: 4, height: 2 },  
    
    // Starting with horizontal 3-dot line base (3 continuous dots in middle)
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 0}, {x: 1, y: 0}], width: 3, height: 2 },  // Two dots above left
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 0}, {x: 2, y: 0}], width: 3, height: 2 },  // Two dots above right
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}], width: 3, height: 3 },  // Two dots below left
    { dots: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}], width: 3, height: 3 },  // Two dots below right
    // Starting with vertical 3-dot line base
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 0}, {x: 0, y: 1}], width: 2, height: 3 },  // Two dots left top
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 1}, {x: 0, y: 2}], width: 2, height: 3 },  // Two dots left bottom
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 0}, {x: 2, y: 1}], width: 3, height: 3 },  // Two dots right top
    { dots: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 2, y: 2}], width: 3, height: 3 },  // Two dots right bottom

    // Diagonal base patterns (3 dots diagonal)
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 1}, {x: 1, y: 2}], width: 3, height: 3 },  // Two dots right side
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 0}, {x: 2, y: 1}], width: 3, height: 3 },  // Two dots left side
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}], width: 3, height: 3 },  // Original right side variation
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 1, y: 2}, {x: 2, y: 1}], width: 3, height: 3 },  // Original left side variation

    // four dots pattern
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 1}, {x: 1, y: 2}], width: 3, height: 3 },  // Right middle and bottom
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 0}, {x: 0, y: 1}], width: 3, height: 3 },  // Upper left side
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 2}], width: 3, height: 3 },  // L in bottom-left reverse
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 1, y: 0}, {x: 2, y: 1}], width: 3, height: 3 },  // L in bottom-right reverse

    // L pattern
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 0}, {x: 1, y: 0}], width: 3, height: 3 },  // L in top-right
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 0, y: 0}], width: 3, height: 3 },  // L in top-left reverse
    { dots: [{x: 2, y: 2}, {x: 1, y: 1}, {x: 0, y: 0}, {x: 0, y: 2}, {x: 1, y: 2}], width: 3, height: 3 },  // L in bottom-left (vertical mirror)
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}], width: 3, height: 3 },  // L in top-right reverse

    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 2, y: 2}, {x: 1, y: 2}], width: 3, height: 3 },  // L in bottom-right (vertical mirror)
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 2}, {x: 0, y: 1}], width: 3, height: 3 },  // L in bottom-left    
    { dots: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 0, y: 0}, {x: 1, y: 0}], width: 3, height: 3 },  // L in top-left (mirrored)
    { dots: [{x: 2, y: 2}, {x: 1, y: 1}, {x: 0, y: 0}, {x: 2, y: 1}, {x: 2, y: 0}], width: 3, height: 3 },  // L in top-right (mirrored)

    // irregular shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 2}, {x: 1, y: 0}], width: 3, height: 3 },  // Cross diagonal variation
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 2, y: 2}], width: 3, height: 3 },  // Vertical flip of pattern 2
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 2}, {x: 2, y: 0}], width: 3, height: 3 },  // Mixed positions
    { dots: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 2, y: 1}, {x: 0, y: 0}], width: 3, height: 3 },  // Mirror of pattern 2
    
    { dots: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 2, y: 2}, {x: 1, y: 0}], width: 3, height: 3 },  // Mirror of pattern 1
    { dots: [{x: 2, y: 2}, {x: 1, y: 1}, {x: 0, y: 0}, {x: 2, y: 1}, {x: 0, y: 2}], width: 3, height: 3 },  // Mirror of vertical flip pattern
    { dots: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 0, y: 0}, {x: 1, y: 2}], width: 3, height: 3 },  // Vertical flip of pattern 1    
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 1}, {x: 2, y: 0}], width: 3, height: 3 },  // Cross diagonal left

    // windmill shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 1, y: 0}, {x: 1, y: 2}], width: 3, height: 3 },  // Parallel to diagonal
    { dots: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 0, y: 1}, {x: 2, y: 1}], width: 3, height: 3 },  // Middle row dots
    { dots: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 0}, {x: 1, y: 2}], width: 3, height: 3 },  // Mirrored parallel to diagonal
    { dots: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 2, y: 1}, {x: 0, y: 1}], width: 3, height: 3 },  // Mirrored middle row dots
    
    // Line shape (2 rotations)
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}], width: 5, height: 1 },  // Horizontal line
    { dots: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}], width: 1, height: 5 }   // Vertical line
  ],
  6: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}], width: 3, height: 2 }, // rectangle
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}], width: 2, height: 3 }  // tall rectangle
  ],
  7: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}], width: 3, height: 3 }, // H shape
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 2, y: 2}], width: 3, height: 3 }  // U shape
  ],
  8: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}], width: 3, height: 3 }, // O shape
    { dots: [{x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}], width: 3, height: 3 }  // Modified square
  ],
  9: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}], width: 3, height: 3 }, // Full square
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 0, y: 2}], width: 4, height: 3 }  // L extra large
  ],
  10: [
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}], width: 4, height: 3 }, // Modified L
    { dots: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 1, y: 3}], width: 3, height: 4 }  // Cross
  ]
};

export function generateTetrisShape(cellSize: number, numDots: number): {
  dots: Point[];
  cells: Point[];
  width: number;
  height: number;
} {
  // Get random shape pattern for the given number of dots
  const patterns = shapes[numDots] || shapes[1];
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  
  // Calculate the actual size
  const width = pattern.width * cellSize;
  const height = pattern.height * cellSize;
  
  // Generate the dots positions (centered in cells)
  const dots = pattern.dots.map(dot => ({
    x: dot.x * cellSize + cellSize / 2,
    y: dot.y * cellSize + cellSize / 2
  }));

  // Generate the cell positions for the shape
  const cells = pattern.dots.map(dot => ({
    x: dot.x * cellSize,
    y: dot.y * cellSize
  }));

  return { dots, cells, width, height };
}

