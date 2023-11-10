let num = '112242333556666665555555555555888888887777777999999999';

const lackyNumber = (num) => {
  num = [...num]
  let res = {};
  
  for (let i = 0; i < num.length; i++) {
        if (res[num[i]]) {
          res[num[i]] = res[num[i]] + 1
        } else {
          res[num[i]] = 1
        }
      }
      let result = 0;
      for (let key in res) {
        if (res[key] == key) {
          result = Math.max(res[key], key)
        }
      }
  return result
}

console.log(lackyNumber(num))
