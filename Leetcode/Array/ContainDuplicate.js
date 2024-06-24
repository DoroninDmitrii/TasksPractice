const arr = [1,1,1,3,3,4,3,2,4,2]

export const containsDuplicate = (arr) => {

  const memory = {}

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    if (memory[current] === undefined) {
      memory[current] = 'put in memory'
    } else {
      return true
    }
  }
  return false
};

