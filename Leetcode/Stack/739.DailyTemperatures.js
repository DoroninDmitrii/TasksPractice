const temperatures = [30,38,30,36,35,40,28];

const dailyTemperatures = (temp) => {
  const answer = new Array(temp.length).fill(0);
  const stack = [];
  
  for (let i = 0; i < temp.length; i++) {
    while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();

      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return answer;
}

console.log(dailyTemperatures(temperatures));