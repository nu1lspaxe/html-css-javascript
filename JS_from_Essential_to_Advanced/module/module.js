const os = require('os');

console.log('platform:', os.platform());

const math = require('./math');
console.log("original number is %d, after math.double is %d", 5, math.double(5));