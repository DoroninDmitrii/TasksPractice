const teams = {
  backend: [5],
  frontend: [3, 6, 7, 10],
  qa: [3, 9, 11, 18],
  desing: [20],
};


function createTeam(engineers) {
  let team = {};
  let minDiff = Infinity;

  for (let b of engineers.backend) {
    for (let f of engineers.frontend) {
      for (let q of engineers.qa) {
        for (let d of engineers.desing) {
          const levels = [b, f, q, d];

          const maxLevel = Math.max(...levels);
          const minLevel = Math.min(...levels);

          const diff = maxLevel - minLevel;

          if (diff < minDiff) {
            minDiff = diff;

            team = {
              backend: b,
              frontend: f,
              qa: q,
              desing: d,
            }
          }
        }
      }
    }
  }
  return team;
}

console.log(createTeam(teams));
