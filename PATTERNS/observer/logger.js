import { Observers } from "./observer.js";


function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function logger2(data) {
  console.log(`${Date.now()} ${data}`);
}

const observer = new Observers();

const sub = observer.subscribe(logger);
const sub2 = observer.subscribe(logger2);

const notify = observer.notify('Check it!!!')

const unsub = observer.unsubscribe(logger);

console.log(observer);

observer.notify('New Check')

observer.next(1);
observer.next((prev) => prev + 12);

