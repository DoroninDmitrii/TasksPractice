// const groupAnagrams = (strs) => {

//   const map = {};

//   for (let i = 0; i < strs.length; i++) {
//     const current = strs[i].split('').sort().join('');

//     if (!map[current]) {
//       map[current] = [];
//     }

//     map[current].push(strs[i]);
//   }
//   return Object.values(map);
// };

const groupAnagrams = (strs) => {

  const map = {};

  strs.forEach((word) => {
    const srt = word.split('').sort().join('');

    if (map.hasOwnProperty(srt)) {
      map[srt] = typeof map[srt] === 'string' ? [map[srt], word] : [...map[srt], word];
    } else {
      map[srt] = word;
    }
  })
  return Object.values(map);
};

console.log(
  groupAnagrams([
    "кластер",
    "кнопка",
    "домен",
    "демон",
    "стрелка",
    "демо",
    "сталкер"
  ])
);
// [
//   ['кластер', 'стрелка', 'сталкер'],
//   'кнопка',
//   ['домен', 'демон'],
//   'демо'
// ]
