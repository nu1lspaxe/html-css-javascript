/**
 * 
 * @param {Number} n 
 * @returns {Number}
 */
function square(n) {
    return n * n;
}

/**
 * @type {function(Number, Number): Number }
 */
function sum(n1, n2) {
    return n1 + n2;
}

function pow(base, power) {
    return Math.pow(base, power);
}

/**
 * 
 * @param {Number} n 
 * @returns {Number}
 */
function double(n) {
    return n*2;
}

export default {square, sum, pow, double};