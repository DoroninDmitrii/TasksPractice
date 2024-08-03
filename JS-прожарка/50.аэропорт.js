const fetchFlights = (from) => {
  const map = {
    A: ['B', 'D'],
    B: ['C', 'N', 'Z'],
    D: ['E', 'F'],
    F: ['S']
  }

  return map[from];
}

const findPath = (from, to, fetchFlights) => {
  let queue = [[from]];

  let visited = new Set();

  while (queue.length > 0) {
    let path = queue.shift();
    
    let node = path[path.length - 1];
    
    if (!visited.has(node)) {
      visited.add(node);
      
      let neighbors = fetchFlights(node) || [];

      for (let neighbor of neighbors) {
        let newPath = [...path, neighbor];

        if (neighbor === to) {
          return newPath;
        }
        queue.push(newPath);
      }
    }
  }
  return 'No routes';
}

console.log(findPath('A', 'N', fetchFlights)); // ['A', 'B', 'N']  
// console.log(findPath('A', 'S', fetchFlights)); // ['A', 'D', 'F', 'S']
// console.log(findPath('B', 'S', fetchFlights)); // 'Нет маршрута'
