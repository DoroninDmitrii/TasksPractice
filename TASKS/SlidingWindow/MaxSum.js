const arr = [100, 200, 300, 400];
const k = 2;

function maxSum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  
  let windowSum = maxSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSum(arr, k));

// sliding
function maxSum(arr, k) {
  let max = 0;
  let sum = 0;
  
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSum(arr, k))
