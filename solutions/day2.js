let inputs = require('../inputs/day2');

let part1ValidCount = 0;
let part2ValidCount = 0;

for (let input of inputs) {
  let [minMax, letter, password] = input.split(' ');
  let [min, max] = minMax.split('-');
  min = Number(min);
  max = Number(max);
  letter = letter.replace(':', '');
  
  // Part1:
  let letterCount = 0;
  
  for (let char of password) {
    if (char === letter) {
      letterCount += 1;
    }
  }

  if (letterCount >= min && letterCount <= max) {
    part1ValidCount += 1;
  }

  // Part2:
  let pos1Valid = password[min - 1] === letter;
  let pos2Valid = password[max - 1] === letter;
  let bothValid = pos1Valid && pos2Valid;

  if (!bothValid && (pos1Valid || pos2Valid)) {
    part2ValidCount += 1;
  }
}

console.log(part1ValidCount);
console.log(part2ValidCount);
