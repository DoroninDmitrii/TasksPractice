// const str = 'what-a-nice-day-today';
const str2 = 'What-a-Nice-Day-Today';
//WhatANniceDayToday

const transformSrt = (str2) => {
  
  let arrStr = str2.split('-');
  let result = [];

  for (let i = 0; i < arrStr.length; i++) {

    if (arrStr[i].length === 0) {
      continue;
    }

    let firstLetter = arrStr[i][0].toUpperCase();
    let lastPart = arrStr[i].slice(1);
    
    result.push(firstLetter + lastPart);  
  }
  return result.join('');
}

console.log(transformSrt(str2));

