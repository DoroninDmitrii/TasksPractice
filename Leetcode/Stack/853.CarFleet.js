const target = 10; 
const position = [1,4]; 
const speed = [3,2];

const carFleet = (target, position, speed) => {
  let pair = position.map((p, i) => [p, speed[i]]);
  pair.sort((a, b) => b[0] - a[0]);
  let stack = [];

  for (let [p, s] of pair) {
      stack.push((target - p) / s);
      if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
        stack.pop();
      }
  }
  return stack.length;
}

console.log(carFleet(target, position, speed));