const arr = [0, 10, 12, 3, 8, 9];
const target = 22;

const sumOfTwo = (arr, target) => {
  const map = {};
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    map[current] = current;
  }
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    
    const value = target - current;
    
    if (map[value]) {
      return [map[value], current];
    }
  }
}

console.log(sumOfTwo(arr, target))
