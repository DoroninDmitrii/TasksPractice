// const str1 = 'foobar'; // false
// const str2 = 'tacocat'; // true
// const str3 = 'amanaplanacanalpanama';

// function isPalindrome(str) {
//   let end = str.length - 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[end]) {
//       return false;
//     }
//     end--
//   }
//   return true;
// }

// console.log(isPalindrome(str2));

// function isPalindrome(str) {

//   if (str.length <= 1) {
//     return true;
//   }

//   if (str[0] === str[str.length - 1]) {
//     return isPalindrome(str.slice(1, str.length - 1));
//   } else {
//     return false;
//   }
// }

const str = "A man, a plan, a canal: Panama";
// const str = "race a car";

const isPalindrome = (str) => {
  let cleanStr = '';

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if ((current >= 'a' && current <= 'z') || (current >= 'A' && current <= 'Z') || (current >= '0' && current <= '9')) {
      cleanStr += current.toLowerCase();
    }
  }

  let right = cleanStr.length - 1;

  for (let left = 0; left < cleanStr.length; left++) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    right--;
  }
  return true;
};

console.log(isPalindrome(str));
