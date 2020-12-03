let nums = require('../inputs/day1');

let obj = nums.reduce((acc, val) => {
  acc[val] = true;
  return acc;
}, {});

let foundPart1 = false;
let foundPart2 = false;

for (let i = 0; i < nums.length; i++) {
  let thisNum = nums[i];

  // Part1:
  if (!foundPart1) {
    let diff = 2020 - thisNum;
    let diffInObj = obj[diff];

    if (diffInObj) {
      console.log(`Part1: ${diff * thisNum}`);
      foundPart1 = true;
    }
  }
  
  // Part2:
  if (!foundPart2) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      
      let nextNum = nums[j];
      let diff = 2020 - (thisNum + nextNum);
      let diffInObj = obj[diff];

      if (diffInObj) {
        foundPart2 = true;
        console.log(`Part2: ${thisNum * nextNum * diff}`);
        break;
      } 
    }
  }

  if (foundPart1 && foundPart2) break;
}