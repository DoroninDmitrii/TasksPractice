const height = [0,1,0,2,1,0,1,3,2,1,2,1];

const trap = function(height) {
    let max1 = 0;

    let left = [height.length];

    for (let i = 0; i < height.length; i++) {
      if (max1 < height[i]) {
        max1 = height[i];
      }
      left[i] = max1;
    }
    
    let max2 = 0;

    let right = [height.length];

    for (let i = height.length - 1; i >= 0; i--) {
      if (max2 < height[i]) {
        max2 = height[i];
      }
      right[i] = max2;
    }
     // To store the maximum water that can be stored..
    let trap = 0;

    for (let i = 0; i < height.length; i++) {
      trap += Math.min(left[i], right[i]) - height[i];
    }
    return trap;
};

console.log(trap(height));
