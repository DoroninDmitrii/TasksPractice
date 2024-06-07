const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const topKFrequent = (nums, k) => {
  const frequencyMap = new Map();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const freqArray = Array.from(frequencyMap);

  freqArray.sort((a, b) => b[1] - a[1]);

  let topKElements = [];

  for (let i = 0; i < k; i++) {
    topKElements.push(freqArray[i][0]);
  }
  return topKElements;
};

console.log(topKFrequent(nums, k));
