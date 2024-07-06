const srt = "крокодил";

const subSrt = "кроко"; // true 
// const subSrt = "кдил"; // true 
// const subSrt = "ид"; // false


const fizzisearch = (srt, subSrt) => {

  let pointer = 0;
  const result = [];

  for (let i = 0; i <= srt.length; i++) {
    if (srt[i] === subSrt[pointer]) {
      result.push(srt[i]);
      pointer++;
    }
  }
  return result.join('') === subSrt ? true : false;
}

console.log(fizzisearch(srt, subSrt));


