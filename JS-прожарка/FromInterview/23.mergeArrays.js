const getDecision1 = [
  { id: 1, result: 'approved' },
  { id: 3, result: 'approved' },
  { id: 15, result: 'approved' },
  { id: 20, result: 'approved' },
  { id: 26, result: 'approved' },
  { id: 30, result: 'approved' },
]

const getDecision2 = [
  { id: 2, result: 'approved' },
  { id: 4, result: 'approved' },
  { id: 14, result: 'approved' },
  { id: 16, result: 'approved' },
  { id: 23, result: 'approved' },
  { id: 32, result: 'approved' },
]

const getLastDecison = (decision1, decision2, k) => {
  let pointer1 = 0;
  let pointer2 = 0;

  const result = [];

  while (pointer1 < decision1.length && pointer2 < decision2.length) {
    const decFirst = decision1[pointer1].id;
    const decSecond = decision2[pointer2].id;

    if (decFirst === undefined) {
      result.push(decision2[pointer2]);
      pointer2++;
    }

    if (decSecond === undefined) {
      result.push(decision1[pointer1]);
      pointer1++;
    }

    if (decFirst === decSecond) {
      result.push(decision1[pointer1]);
      result.push(decision2[pointer2]);
      pointer1++;
      pointer2++;
    }

    if (decFirst < decSecond) {
      result.push(decision1[pointer1]);
      pointer1++;
    }

    if (decSecond < decFirst) {
      result.push(decision2[pointer2]);
      pointer2++;
    }
  }

  return result.slice(-5);
}

console.log(getLastDecison(getDecision1, getDecision2, 5));
