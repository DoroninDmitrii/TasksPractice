let arr = [1,2,3,4,5,6,7,8,10];

function missNumber(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1
    }
  }
}

console.log(missNumber(arr))

const containsDuplicate = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};
