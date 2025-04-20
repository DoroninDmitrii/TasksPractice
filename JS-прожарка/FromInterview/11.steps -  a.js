// const statistics = [
//   [{ userId: 1, steps: 1000 }, { userId: 2, steps: 1500 }],
//   [{ userId: 2, steps: 1000 }]
// ]

const statistics = [
  [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
  [{ userId: 2, steps: 8000 }, { userId: 1, steps: 3500 }]
]

// champions = { userIds: [2], steps: 2500 }

const steps = (statistics) => {
  const sumDays = statistics.length;

  const hashMap = {};

  for (let i = 0; i < statistics.length; i++) {
    const current = statistics[i];

    for (let k = 0; k < current.length; k++) {
      const { userId, steps } = current[k];

      if (!hashMap[userId]) {
        hashMap[userId] = { steps: 0, days: 0 };
      }
      hashMap[userId].steps += steps;
      hashMap[userId].days += 1;
    }
  }

  let maxSteps = 0;
  const champions = [];

  for (let userId in hashMap) {
    if (hashMap[userId].days === sumDays) {
      if (hashMap[userId].steps > maxSteps) {
        maxSteps = hashMap[userId].steps;
        champions.length = 0;
        champions.push(Number(userId));
      } else if (hashMap[userId].steps === maxSteps) {
        champions.push(Number(userId));
      }
    }
  }

  if (champions.length > 0) {
    return {
      userId: champions,
      steps: maxSteps
    }
  }
};

console.log(steps(statistics));

