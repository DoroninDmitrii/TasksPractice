// Есть два сета:

// [
//     'Atomic Heart', 
//     'Dota 2', 
//     'Hogwarts Legacy', 
//     'Roblox'
// ] 

// [
//     'Fortnite', 
//     'Roblox', 
//     'Atomic Heart', 
//     'CS:GO'
// ]

// Нужно найти пересечения,
// не выходя серьезно за границы O(n). 


const getCommonGames = (gameSetOne, gameSetTwo) => {
  const mapGameSetOne = new Set(gameSetOne);

  const commonGames = gameSetTwo.filter((game) => mapGameSetOne.has(game));

  return commonGames;
};


console.log(
  getCommonGames(
    ["Atomic Heart", "Dota 2", "Hogwarts Legacy", "Roblox"],
    ["Fortnite", "Roblox", "Atomic Heart", "CS:GO"]
  )
);
// ['Atomic Heart', 'Roblox']

