
// Нужно перемешать его значения в случайном порядке.
// Выглядеть может так [4, 7, 1, 3, 2, 5, 6] 

const arr = [1, 2, 3, 4, 5, 6, 7];

const mixer = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(mixer(arr));
console.log(mixer(arr));
console.log(mixer(arr));

