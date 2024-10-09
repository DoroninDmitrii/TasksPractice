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
