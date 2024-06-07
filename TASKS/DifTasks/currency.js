const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

function currency (input) {
  let resArr = [];
  
  input.forEach(item => {
    let [curr, type, amount] = item
    
    if (!resArr[curr]) {
      resArr[curr] = [0,0]
    }
    resArr[curr][type === 'buy' ? 1 : 0] += amount
  })
  return resArr
}


console.log(currency(input))

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

function currency (input) {
  let result = input.reduce((acc, curr) => {
    acc[curr[0]] = acc[curr[0]] || [0, 0];
    acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2]
    return acc
  }, {})
  return result
}


console.log(currency(input))

function currency(input) {
  let result = {};

  for (let i = 0; i < input.length; i++) {
    let current = input[i][0]
    if (!result[current]) {
      result[current] = [0, 0];
    }
    input[i][1] === 'buy' ? result[current][0] += input[i][2] : result[current][1] += input[i][2]
  }
  return result;
}

console.log(currency(input));
