const arr = ['A100', 'A3', 'Z100', 'Z2'];

function splitAlphaNum(str) {
  let alpha = str.match(/[A-Za-z]+/)[0];
  let num = str.match(/\d+/)[0];
  return [alpha, parseInt(num)]
}

const customSort = (arr) => {
  return arr.sort((a, b) => {
    let [alphaA, numsA] = splitAlphaNum(a);
    let [alphaB, numsB] = splitAlphaNum(b);

    if (alphaA < alphaB) return -1;

    if (alphaA > alphaB) return 1;

    return numsA - numsB;
  })
}

console.log(customSort(arr));
