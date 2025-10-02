'use strict';

/**
 * // @return {object}
 */
function makeCalculator() {
  // write code here

  const add = (current, n) => {
    return current + n;
  };

  const subtract = (current, n) => {
    return current - n;
  };

  const divide = (current, n) => {
    if (n === 0) {
      return undefined;
    } else {
      return Math.ceil(current) / n;
    }
  };

  const multiply = (current, n) => {
    return current * n;
  };

  const reset = () => {
    math.result = 0;

    return math;
  };

  function operate(callback, n) {
    const next = callback(math.result, n);

    if (callback !== undefined) {
      math.result = next;

      return math;
    }
  }

  const math = {
    add,
    subtract,
    divide,
    multiply,
    reset,
    operate,
    result: 0,
  };

  return math;
}

module.exports = makeCalculator;
