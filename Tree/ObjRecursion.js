let obj = {
  a: {
    l: { u: 8 },
    b: 1,
  },

  c: {
    d: 2,
    e: { f: 7 }
  },

  j: 4,
}

// recursion deep

// function log(obj) {
//   let result = 0
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       result += obj[key]
//     } else if (typeof obj[key] === 'object') {
//       result   += log(obj[key])
//     }
//   }
//   return result
// }

// console.log(log(obj))

// function log(obj) {
//   for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) {
//       continue
//     }
//     const value = obj[key]

//     if (typeof value === 'number') {
//       console.log(value)
//     } else {
//       log(value)
//     }
//   }
// }

// console.log(log(obj))

// wide 

function log(obj) {
  const queue = [obj]

  while (true) {

    const obj = queue.shift()

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }
      const value = obj[key]

      if (typeof value === 'number') {
        console.log(value)
      } else {
        queue.push(value)
      }
    }
    if (queue.length === 0) {
      return
    }
  }
}

console.log(log(obj))

function sumObj(obj) {
  const stack = [obj];
  let result = 0;

  while (stack.length > 0) {
    const node = stack.pop();

    for (let key in node) {
      if (typeof node[key] === 'number') {
        result += node[key];
      } else if (typeof node[key] === 'object') {
        stack.push(node[key])
      }
    }
  }
    return result;
}

console.log(sumObj(obj));
