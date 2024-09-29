
function abs(x, y) {
  if (x < y) {
    return y - x;
  } else {
    return x - y;
  }
}

function satisfaction(goods, buyerNeeds) {
  let totalDissatisfaction = 0;

  for (let i = 0; i < buyerNeeds.length; i++) {
    const buyer = buyerNeeds[i];
    let minDiff = Infinity;

    for (let k = 0; k < goods.length; k++) {
      const good = goods[k];

      const diff = abs(good, buyer);

      if (diff === 0) {
        minDiff = 0;
        break;
      } else if (diff < minDiff) {
        minDiff = diff;
      }
    }
    totalDissatisfaction += minDiff;
  }
  return totalDissatisfaction;
}

console.log(satisfaction([5], [3, 5, 10, 105]))
