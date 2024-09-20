const createBadge = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,

    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    set fullName(args) {
      [this.firstName, this.lastName] = args.split(' ');
    }
  }
};


const badge = createBadge("Иван", "Иванов");

console.log(badge.firstName);
// Иван
console.log(badge.lastName);
// Иванов
console.log(badge.fullName);
// Иван Иванов

badge.firstName = 'Константин';

console.log(badge.firstName);
// Константин
console.log(badge.lastName);
// Иванов
console.log(badge.fullName);
// Константин Иванов

badge.lastName = 'Петров';

console.log(badge.firstName);
// Константин
console.log(badge.lastName);
// Петров
console.log(badge.fullName);
// Константин Петров

badge.fullName = 'Илон Маск';

console.log(badge.firstName);
// Илон
console.log(badge.lastName);
// Маск
console.log(badge.fullName);
// Илон Маск

badge.fullName = 'ИлонМаск';
// Error: invalid fullName format
