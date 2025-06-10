 class _Node {
     val: boolean
     isLeaf: boolean
     topLeft: _Node | null
 	topRight: _Node | null
 	bottomLeft: _Node | null
 	bottomRight: _Node | null
 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
         this.val = (val===undefined ? false : val)
         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
         this.topLeft = (topLeft===undefined ? null : topLeft)
         this.topRight = (topRight===undefined ? null : topRight)
         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
   }
 }


 /**
  * Return the root of the Quad-Tree representing grid.
  *
  * @param grid n x n grid
  */
 function construct(grid: number[][]): _Node | null {
     const sameVal = determineSame(grid);
     if (sameVal == 0 || sameVal == 1) {
         return new _Node(Boolean(sameVal), true);
     } else {
         const half = grid.length / 2;
         const topLeft = grid.slice(0, half);
         const topRight = grid.slice(0, half);
         const bottomLeft = grid.slice(half);
         const bottomRight = grid.slice(half);
         for (let i = 0; i < topLeft.length; i++) {
             topLeft[i] = topLeft[i].slice(0, half);
             topRight[i] = topRight[i].slice(half);
             bottomLeft[i] = bottomLeft[i].slice(0, half);
             bottomRight[i] = bottomRight[i].slice(half);
         }
         return new _Node(
             false, // val
             false, // isLeft
             // topLeft
             construct(topLeft),
             // topRight
             construct(topRight),
             // bottomLeft
             construct(bottomLeft),
             // bottomRight
             construct(bottomRight),
         )
     }
};

 /**
  * Returns 0 or 1 if all same, -1 if not same.
  */
 function determineSame(grid: number[][]): number {
     let val = grid[0][0];
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid[i].length; j++) {
             if (grid[i][j] != val) {
                 return -1;
             }
         }
     }
     return val;
 }