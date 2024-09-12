/*
  ДЛЯ ИНФОРМАЦИИ
  
  - другие не видят, что ты делаешь в этом Pen'e;  
  - новый код не меняет шаблон для остальных;
  - при перезагрузке страницы все сброситься;
  - форкай, если хочешь сохранить
  
  УДАЧНОГО КОДИНГА 
*/

/**
 * @param {Object} obj
 * @returns {Object}
 */
const deepCopy = (obj) => {
  // реализуй метод deepCopy
}





const original = { a: { b: { c: [1] }}, d: 2};
const copy = deepCopy(original); // { a: { b: { c: [1] } }, d: 2 }
console.log(original === copy); // false
