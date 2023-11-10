let arr = [1,5,6,0];


const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let arrRes = [];
  
  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    
    if (sumsLookup[targetVal]) {
      arrRes.push([arr[i], targetVal]);
    }
    sumsLookup[arr[i]] = true;
  }
  return arrRes
}
console.log(findSumPairs(arr, 1));
