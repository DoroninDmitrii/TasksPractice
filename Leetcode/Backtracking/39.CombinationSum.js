const candidates = [2,3,6,7]; 
const target = 7;

const combinationSum = function(candidates, target) {
    let combinations = [];
    candidates.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {
      for (let i = start; i < candidates.length && candidates[i] <= remaining; i++) {
        if (candidates[i] === remaining) {
          combinations.push([...tempList, candidates[i]]);
        } else {
          backtrack([...tempList, candidates[i]], remaining - candidates[i], i);
        }
      }
    }
    backtrack([], target, 0);

    return combinations;
};

console.log(combinationSum(candidates, target));
