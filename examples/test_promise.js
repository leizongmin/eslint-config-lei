'use strict';

function sleep(ms) {
  return new Promise((r, x) => {
    if (isNaN(ms)) return x(new Error(`invalid param: is not a number`));
    if (!(ms > 0)) return x(new Error(`invalid param: must greater than 0`));
    setTimeout(r, ms);
  });
}

console.log('hello');
sleep(500).then(() => {
  console.log('world');
});

function sleep2(ms) {
  return new Promise((resolve, reject) => {
    if (isNaN(ms)) return reject(new Error(`invalid param: is not a number`));
    if (!(ms > 0)) return reject(new Error(`invalid param: must greater than 0`));
    setTimeout(resolve, ms);
  });
}

console.log('hello2');
sleep2(500).then(() => {
  console.log('world2');
}).catch(err => {
  console.log(err);
});
