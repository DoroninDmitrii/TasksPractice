const obj = {
  a: {
    b: {
      c: 21
    }
  }
}

function result(obj, str) {
  let arr = str.split('.')
  
  let memo = obj;
  
  for (let i = 0; i < arr.length; i++) {
    memo = memo[arr[i]]
  }
  return memo
}


console.log(result(obj, 'a.b.c'))


