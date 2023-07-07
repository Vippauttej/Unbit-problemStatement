function findTargetCombinations(nums, target) {
  const complements = {};
  const combinations = [];

  for (let num of nums) {
    const complement = target - num;
    if (complements[complement]) {
      combinations.push([num, complement]);
    }
    if (complements[num]) {
      combinations.push([num, num]);
    }
    complements[num] = true;
  }

  return combinations;
}


const nums = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
const targetCombinations = findTargetCombinations(nums, target);
console.log(targetCombinations);

const mergedArray = nums.sort((a, b) => a - b);

console.log(mergedArray);
function findDoubleTargetCombinations(nums, target) {
  const doubledTarget = target * 2;
  const complements = {};
  const combinations = [];

  for (let num of nums) {
    const complement = doubledTarget - num;
    if (complements[complement]) {
      combinations.push([num, complement]);
    }
    complements[num] = true;
  }

  return combinations;
}



const doubleTargetCombinations = findDoubleTargetCombinations(nums, target);
console.log(doubleTargetCombinations);
