let arr = [1, 3, 5, 7]

const cumulativeSum = () => {
  let result = [arr[0]]

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + result[i - 1])
  }
  return result
}
