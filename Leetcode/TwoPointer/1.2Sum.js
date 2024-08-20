const arr = [3,2,4];
const target = 6;

const sumOfTwo = (arr, target) => {
  const map = {};
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    map[current] = i;
  }
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    console.log(map)
    const value = target - current;

    if (map[value] && map[value] !== i) {
      return [i, map[value]];
    }
  }
}

console.log(sumOfTwo(arr, target))
