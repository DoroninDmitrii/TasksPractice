const arr = [1, 1, 2, 7, 7, 2, 3, 3, 4, 5, 5, 6, 6, 4, 8, 8, 9, 9]

const uniqNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    if (arr.indexOf(char) === arr.lastIndexOf(char)) {
      return i  
    }
  }
  return -1
}

console.log(uniqNumber(arr))

function unuqValue(arg) {
  let strArr = arg.split('')
  const map = strArr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1
    return acc
  }, {})
  
  const objRes = Object.entries(map)
  
  for (let i = 0; i < objRes.length; i++) {
    if (objRes[i][1] === 1) {
      return i
    }
  }
}

const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach((el) => {
  total.push(el) 
  })
  return total
}, [])

console.log(colors)
