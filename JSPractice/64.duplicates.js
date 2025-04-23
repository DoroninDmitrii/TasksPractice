const arr = [1,5,'b',5,1,undefined, 'a', 'a', 'a', 'b', true, 'true',false, {}, {}];


function deduplicate(arr) {
  const mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (mySet.has(curr)) {
      arr.splice(i, 1);
      i--;
    }
    mySet.add(curr);
  }

  return mySet;
}

console.log(deduplicate(arr));
