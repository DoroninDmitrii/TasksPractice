// Есть строка с маркерами в виде стрелок:

const str = "jsts<<grill";

// "jsgrill"

const applyRemove = (str) => {
  const srtArr = str.split('');
  let result = [];

  for (let i = 0; i < srtArr.length; i++) {
    if (srtArr[i] !== '<') {
      result.push(srtArr[i]);
    } else {
      result.pop()
    }
  }
  return result.join('');
}

console.log(applyRemove('jsts<<grill')); // 'jsgrill'
console.log(applyRemove('<js')); // 'js'
console.log(applyRemove('<')); // ''
