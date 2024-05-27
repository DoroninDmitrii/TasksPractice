const s = 'ab#c';
const t = 'ad#c';

const backspaceString = function (string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    const current = string[i];

    if (current === '#') {
      result.pop();
    } else {
      result.push(current);
    }
  }
  return result.join('');
};

const backspaceCompare = (s, t) => {
  return backspaceString(s) === backspaceString(t);
}
