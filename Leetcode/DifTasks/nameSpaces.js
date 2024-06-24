// На вход строка "a.b.c.d.e", на выходе объект {a:{b:{c:{d:{e:{}}}}}}

let str = "a.b.c.d.e";

const nameSpaces = (str) => {
  const strNew = str.split('.');
  
  let obj = {};
  let current = obj;
  
  for (let i = 0; i < strNew.length; i++) {
    
    current[strNew[i]] = {};
    current = current[strNew[i]];
  }
  return obj;
}


console.log(nameSpaces(str));
