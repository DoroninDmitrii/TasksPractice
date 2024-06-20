const obj = {
  a: {
    b: {
      c: 'd',
    },
  },
};

// get(obj, 'a.b'); // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'

const getWay = (obj, srt) => {
  let letters = srt.split('.');

  let result = obj;

  for (let i = 0; i < letters.length; i++) {
    const current = letters[i];

    if (result[current] === 'undefined') {
      return null;
    } else {
      result = result[current];
    }
  }
  return result;
};

console.log(getWay(obj, 'a.b'));
