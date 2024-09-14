const findOddNum = (nums) => {
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      console.log(i)
    }
  }
}


findOddNum([1, 2, 4, 8]); // 0
findOddNum([2, 4, 6, 8, 10, 3]); // 5
