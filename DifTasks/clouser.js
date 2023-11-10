// Замыкание - возможноть функции, которая находится внутри другой функции, получать доступ к переменным, которые находятся в области видимости родительской, даже после того, как родительская функция прекратила свое выполнение.


// function external() {
//   let externalVar = 'External fun'
//   function internal() {
//     let internalVar = 'Internal fun'
//     console.log(externalVar)
//     console.log(internalVar)
//   }
//   return internal
// }

// let internalFn = external()
// internalFn()

// Запускаем функцию external создается переменная externalVar и дальше возвращается функция internal. После того как присвоили external переменной мы получаем доступ к внутренней функции. Несмотря на то, что external прекращает свое сущ. в памяти остается доступ до переменной externalVar из intarnal.


// function createAdress(type) {
//  const adress = type.toUpperCase();
//  return function (name) {
//    return `${adress} ${name}`
//  }
// }

// const adressGrazdanin = createAdress('grazdanin')
// console.log(adressGrazdanin('Dima'))


function one(callback) {
  return callback ? callback(1) : 1
}

function two(callback) {
  return callback ? callback(2) : 2
}



function plus(a) {
  return (b) => a + b
}

console.log(one(plus(two())));

