let count = 0;
let value = { message: 'app initialized', isLogger: false };

function makeScopedLogger(count, value) {
  function logMessage() {
    console.log(count, value);
  }

  count += 1;
  console.log(count, value);

  value.isLogger = true;

  return logMessage;
}

const logMessage = makeScopedLogger(count, value);

value = { message: 'app run' };

logMessage();

console.log(count, value);

// 1 messageapp initialized isLogger false
// 1 messageapp initialized isLogger true
// 0 messageapp run

(function () {
  function modifyItemData(price, platform) {
    price.rub = 5000;
    platform = 'iOS';
    isModified = true;

    function printItemData() {
      console.log(price);        // ? (4.1)
      console.log(platform);     // ? (4.2)
      console.log(isModified);   // ? (4.3)
    }

    return printItemData;
  }

  let price = { rub: 3500 };
  let platform = 'Android';

  let isModified = false;
  const printItemData = modifyItemData(price, platform);

  console.log(price);        // ? (1)
  console.log(platform);     // ? (2)
  console.log(isModified);   // ? (3)

  price = { usd: 100 };
  platform = 'Web';
  isModified = null;

  printItemData(); // ? (4)
})();

// rub5000
// Android
// true
//  rub5000
// iOS
// null 
