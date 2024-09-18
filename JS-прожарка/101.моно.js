const isMono = (arr) => {
  let increased = false;
  let decreased = false;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < arr[i + 1]) {
      increased = true;
    } else if (arr[i] > arr[i + 1]) {
      decreased = true;
    }

    if (increased && decreased) {
      return false;
    }
  }
  return true;
}


console.log(isMono([1, 2, 3])); // true
console.log(isMono([6, 3, 2, 1])); // true
console.log(isMono([1, 2, 5, 5, 5, 8, 9])); // true
console.log(isMono([1, 2, 5, 5, 5, 2, 1])); // false
