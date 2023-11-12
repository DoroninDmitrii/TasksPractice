let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];


const same = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {
    let correct = arr2.indexOf(arr1[i] ** 2)
    if (correct === -1) {
      return false
    }
    arr2.splice(correct, i);
  }
  return true
}

// console.log(same(arr1, arr2));

const sameRef = (arr1, arr2) => {

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1
  }

  for (let key of counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same(arr1, arr2));
