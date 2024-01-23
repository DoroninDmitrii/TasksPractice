// Дан массив банкнот определенных номиналов
// [1, 2, 5, 10, 20, 50],
// их количество не ограничено.
// Кожаный мешок хочет 91 рубль.
// Нужно выдать ему эти деньги используя минимальное количество купюр.

const arr = [1, 2, 5, 10, 20, 50];

const bankomat = (arr, money) => {
  let result = [];
  let pointer = arr.length - 1;

  while (money > 0) {
    if (money >= arr[pointer]) {
      result.push(arr[pointer]);
      money -= arr[pointer];
    } else {
      pointer--
    }
  }
  return result;
};

console.log(bankomat(arr, 91));
