const moneyInBankomat = [1, 2, 5, 10, 20, 50];
const cash = 43;

const bankomat = (moneyInBankomat, cash) => {

  const result = [];
  let money = cash;

  for (let i = moneyInBankomat.length; i >= 0; i--) {
    const current = moneyInBankomat[i];

    while (money >= current) {
      result.push(current)
      money = money - current;
    }
  }
  return result;
}

console.log(bankomat(moneyInBankomat, cash));
