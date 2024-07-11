// Дан массив чисел, он же грядка
// где 0 пустые места, а 1 занятые.
const arr = [1, 0, 0, 0, 1, 0, 0];

const isFlowerbedAtCapacity = (flowerbed, flowersToPlant) => {

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      flowersToPlant = flowersToPlant - 1;
    }
  };
  return flowersToPlant === 0 ? true : false;
}

console.log(isFlowerbedAtCapacity(arr, 2));


