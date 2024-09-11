const sortByYear = (operations) => {
  const hashMap = {};

  for (let i = 0; i < operations.length; i++) {
    const currSplit = operations[i].date.split('-')[0];

    if (!hashMap[currSplit]) {
      hashMap[currSplit] = [];
    }

    hashMap[currSplit].push(operations[i].date.split('-').slice(1).join('-'));
  }
  return hashMap;
};

console.log(
  sortByYear([
    { date: "2023-07-10", amount: "100" },
    { date: "2023-06-25", amount: "200" },
    { date: "2023-05-30", amount: "400" },
    { date: "2024-01-31", amount: "800" },
    { date: "2024-01-20", amount: "900" }
  ])
);

/*
  {
    '2023': [ '07-10', '06-25', '05-30' ],
    '2024': [ '01-31', '01-20' ]
  }
*/
