const logger = {
  mode: 'Dev',
  check() {
      console.log(`This is ${this.mode} mode`);
  }
};

logger.check();

const loggerCheck = logger.check.bind(logger);

loggerCheck();

function execute(fn) {
  return fn();
}

execute(logger.check.bind(logger));
