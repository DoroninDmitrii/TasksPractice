// На вход строка "a.b.c.d.e", на выходе объект {a:{b:{c:{d:{e:{}}}}}}

const str = "a.b.c.d.e";

const spaceOfName = (str) => {
  const transferToArr = str.split('.');

  let obj = {};
  let result = obj;

  for (let i = 0; i < transferToArr.length; i++) {
    const current = transferToArr[i];

    result[current] = {}; // a: {}
    
    // Move to the next nested level
    result = result[current] 
  }
  return obj;
}

console.log(spaceOfName(str));
