class ATM {
  _total = 0;
  _accept = [];

  vault = {
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0,
    100: 0,
    50: 0
  }

  constructor() {
    this._accept = Object.keys(this.vault);
  }

  deposit(bills) {
    if (bills.length === 0) {
      throw new Error('Положите деньги в купюроприемник');
    }

    const unrecognizedBills = [];
    for (let i = 0; i < bills.length; i++) {
      this.vault.hasOwnProperty(bills[i]) ? this.vault[bills[i]] += 1 : unrecognizedBills.push(bills[i]);
    }

    const amount = bills.reduce((acc, el) => {
      return acc += el;
    }, 0)

    this._total = amount;

      amount && console.log(`Внесено ${amount}`);

      unrecognizedBills.length > 0 && console.log(`Заберите нераспознанные купюры ${unrecognizedBills}`)
  }

  whithdrow(amount) {
    
  }

  // возвращает массив купюр который доступен на прием/выдачу
  get accept() {
    const accept = this._accept;
    console.log(accept);
    return accept;
  }

  // возвращает сколько всего денег во внутреннем хранилище
  get total() {
    const total = this._total;
    console.log(total);
    return total;
  }

  // возвращает касету с деньгами в виде объекта при инкассации
  get collect() {
    console.log(this.vault);
    return this.vault;
  }
}

const atm = new ATM();
atm.accept; // [ 50, 100, 500, 1000, 2000, 5000 ]
// atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно средств
// atm.deposit([]); // Error: Положите деньги в купюроприемник
atm.deposit([5000, 1000, 5000, 500, 100, 50, 50]); // Внесено 11700
atm.deposit([500, 10, 5]); // Внесено 500, Заберите нераспознанные купюры [10, 5]
// atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно купюр
// atm.whithdrow(2100); // [1000, 500, 500, 100]
// atm.whithdrow(0); // Error: Укажите корректную сумму
console.log(atm.whithdrow())
atm.total; //10100
atm.collect; // { '50': 2, '100': 0, '500': 0, '1000': 0, '2000': 0, '5000': 2 }
