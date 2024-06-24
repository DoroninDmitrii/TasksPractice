// На вход строка "a.b.c.d.e", на выходе объект {a:{b:{c:{d:{e:{}}}}}}

const str = "a.b.c.d.e";

// const strToObj = (str) => {
//   let strSplit = str.split('.').reverse();

//   let result = strSplit.reduceRight((acc, key) => {
//     let res = {[key]: acc};
//     return res;
//   }, {})

//   return result
// };

// console.log(strToObj(str));

const strToObj = str => {
  const strSplit = str.split('.');
  let result = {};
  let current = result;

  for (let i = 0; i < strSplit.length; i++) {
    let cur = strSplit[i];
    current[cur] = {};
    current = current[cur];
  }
  return result;
};

console.log(strToObj(str));
