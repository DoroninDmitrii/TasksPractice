// Дан массив ['A100', 'A3', 'Z100', 'Z2']
// Нужно отсортировать его значения по возрастанию, с учетом как букв, так и цифр.
// В итоге должно получиться ['A3', 'A100', 'Z2', 'Z100']

const arr = ['A100', 'A3', 'Z100', 'Z2'];

const splitArgs = (str) => {
  const letter = str.match(/[A-Za-z]+/)[0];
  const num = str.match(/\d+/)[0];
  return [letter, num];
}


const sortMaster = (arr) => {
  return arr.sort((a, b) => {
    const [letterA, numA] = splitArgs(a);
    const [letterB, numB] = splitArgs(b);

    if (letterA > letterB) return 1;
    if (letterA < letterB) return -1;

    return numA - numB;
  })
}

console.log(sortMaster(arr))
