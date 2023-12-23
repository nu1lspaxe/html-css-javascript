const P1 = new Promise((resolve, reject) => {
    // setTimeout() => 本身是 async(異步) 執行的函數
    setTimeout(() => resolve('P1'), 100);
})

const P2 = new Promise((resolve, reject) => {
    setTimeout(function() { resolve('P2'); }, 1000);
})

const P3 = Promise.resolve('P3');

const P4 = new Promise((_, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), 500);
})

function PromiseRace(...args) {
    Promise.race(...args)
        .then((value) => console.log(value))
        .catch((err) => console.log(err));
}

console.log('Promise.race');
PromiseRace([P1, P2]);


// if any Promise be rejected, then 'all' Promise will into .catch()
console.log('Promise.all - with rejected');
Promise.all([P3, P1, P2, P4])
    .then((value) => console.log(value))
    .catch((err) => console.log(err));

console.log('Promise.all');
Promise.all([P3, P1, P2])
    .then((value) => console.log(value))
    .catch((err) => console.log(err));