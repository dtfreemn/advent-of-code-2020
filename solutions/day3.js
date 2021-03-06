let matrix = require('../inputs/day3');

function countTrees([rightMoves, downMoves]) {
  const TREE = '#';
  const matrixLength = matrix.length;
  const singleDimensionLength = matrix[0].length;

  let treeCount = 0;
  let currPos = [0, 0];
  
  while (currPos[0] < matrixLength - downMoves) {
    let madeRightMoves = 0;
    
    while (madeRightMoves < rightMoves) {
      if (currPos[1] + 1 < singleDimensionLength) {
        currPos[1] += 1 
      } else {
        currPos[1] = 0;
      }
  
      madeRightMoves += 1;
    }
  
    currPos[0] += downMoves;
  
    if (matrix[currPos[0]][currPos[1]] === TREE) {
      treeCount += 1;
    }
  }

  return treeCount;
};

// Part1:
console.log(countTrees([3, 1]));

// Part2:
console.log([[1,1],[3,1],[5,1],[7,1],[1,2]].reduce((acc, val) => acc * countTrees(val), 1));