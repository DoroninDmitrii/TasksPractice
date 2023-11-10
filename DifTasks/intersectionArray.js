const input1 = [4, 9, 5, 3, 3, 10]
const input2 = [9, 4, 9, 8, 4, 3, 10]

function intersection(input1, input2) {
  
  let arrRes = [];
  
  let map = input1.reduce((acc, el) => {
  acc[el] = acc[el] ? acc[el] + 1 : 1
  return acc
  }, {})
  
  for (let k = 0; k < input2.length; k++) {
    let current = input2[k]
    let count = map[current]
    
    if (count && count > 0) {
      arrRes.push(current)
      map[current] =-1
    }
  }
  return arrRes
}

console.log(intersection(input1, input2))

let arr1 = [1,2,2,1]
let arr2 = [2,2]

function intersection(num1, num2) {
  let resArray = [];

  for (let i = 0; i < num1.length; i++) {
    let current = num1[i];

    for (let k = 0; k < num2.length; k++) {

      if (current === num2[k]) {
        resArray.push(current)
        num2.splice(k, 1)
        break
      }
    }
  }
  return resArray  
}

console.log(intersection(arr1, arr2))
