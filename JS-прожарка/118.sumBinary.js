const sumBinary = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }
  return result;
}


console.log(sumBinary("1010", "1011")); // "10101"
// console.log(sumBinary("1101", "1011")); // "11000"
// console.log(sumBinary("0", "0")); // "0"
// console.log(sumBinary("1", "1")); // "10"
