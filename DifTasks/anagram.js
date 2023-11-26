const str1 = 'mama';
const str2 = 'mama';

const Anagram = (str1, srt2) => {

  if (str1.length !== srt2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const current = str1[i];

    lookup[current] ? lookup[current] += 1 : lookup[current] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const current = str2[i];

    if (!lookup[current]) {
      return false;
    } else {
      console.log(lookup[current])
      lookup[current] = lookup[current] - 1;
    }
  }
  return true;
};

console.log(Anagram(str1, str2));
