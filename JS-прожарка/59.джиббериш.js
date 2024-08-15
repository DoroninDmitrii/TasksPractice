const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


const generateGiberishWord = (wordLength) => {
  let srt = [];

  for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    srt.push(alphabet[randomIndex].toLocaleLowerCase());
  }

  return srt.join('').charAt(0).toUpperCase() + srt.join('').slice(1);
}

console.log(generateGiberishWord(10)); // пример вывода: 'Atwnteelyt'
console.log(generateGiberishWord(3)); // пример вывода: 'Wza'
