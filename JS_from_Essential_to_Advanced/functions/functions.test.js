// const os = require('os');
// console.log('platform:', os.platform());

import math from './math';
// console.log("original number is %d, after math.double is %d", 5, math.double(5));

test(("[sum] 19999 + 20000"), () => {
    expect(math.sum(19999, 20000)).toBe(39999);
})