/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

const concerts = {
  'Москва': new Date('2020-04-01'),
  'Казань': new Date('2023-07-02'),
  'Владивосток': new Date('2020-04-21'),
  'Калининград': new Date('2023-07-15'),
  'Омск': new Date('2020-04-18'),
  'Питер': new Date('2023-07-10'),
}

function dataOfConcert (concerts) {
let arr = Object.entries(concerts)
let sortArr = arr.sort(function(a, b) {
  return a[1] - b[1]
})
let result = [];
for (let i = 0; i < sortArr.length; i++) {
  if (sortArr[i][1] > new Date()) {
    result.push(sortArr[i])
  }
}
return result
}

console.log(dataOfConcert(concerts))
