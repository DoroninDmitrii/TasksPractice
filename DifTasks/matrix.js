let num = 10

function star(num) {
  const answer = [];
  for (let i = 0; i < num; i += 1) {
    let stars = (i + 1) * 2 - 1;
    if (stars > num) stars = 2 * num - stars;
    const empty = (num - stars) / 2;
    const string = ' '.repeat(empty) + '*'.repeat(stars) + ' '.repeat(empty);
    console.log(string);
  }
}

console.log(star(num))
