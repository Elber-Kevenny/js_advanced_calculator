'use strict';

/**
 * // @return {object}
 */
function makeCalculator() {
  // write code here

  const calculator = {
    result: 0,

    add: function (n) {
      this.result += n;

      return this;
    },

    subtract: function (n) {
      this.result -= n;

      return this;
    },

    divide: function (n) {
      if (n !== 0) {
        this.result /= n;
      }

      return this;
    },

    multiply: function (n) {
      this.result *= n;

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, n) {
      callback.call(this, n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
