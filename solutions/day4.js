const passports = require('../inputs/day4');

const requiredKeys = {
  'byr:': val => /\d{4}/.test(val) && Number(val) >= 1920 && Number(val) <= 2002,
  'iyr:': val => /\d{4}/.test(val) && Number(val) >= 2010 && Number(val) <= 2020,
  'eyr:': val => /\d{4}/.test(val) && Number(val) >= 2020 && Number(val) <= 2030,
  'hgt:': val => {
    let cms = /\d+cm/.test(val);
    let ins =  /\d+in/.test(val);
    
    if (!(cms || ins)) return false;

    let numOnly = Number(val.replace(/[^\d]/g, ''));

    return cms 
      ? (numOnly >= 150 && numOnly <= 193)
      : ins 
        ? (numOnly >= 59 && numOnly <= 76)
        : false;
  },
  'hcl:': val => /#[0-9a-f]{6}/.test(val) && val.length === 7,
  'ecl:': val => ['amb','blu','brn','gry','grn','hzl','oth'].some(str => val === str),
  'pid:': val => /\d{9}/.test(val) && val.length === 9,
};

const part1IsValid = passport => {
  return Object.keys(requiredKeys).every(key => (new RegExp(key)).test(passport));
};

const part2IsValid = passport => {
  return Object.keys(requiredKeys).every(key => {
    let func = requiredKeys[key];
    let val = (passport.match(new RegExp(`${key}([^\\s]+)`)) || [null, null])[1];

    return val && func(val);
  });
};

let part1ValidCount = 0;
let part2ValidCount = 0;

for (let passport of passports) {
  if (part1IsValid(passport)) {
    part1ValidCount += 1;
    
    if (part2IsValid(passport)) {
      part2ValidCount += 1;
    }
  }
}

console.log(part1ValidCount);
console.log(part2ValidCount);