Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        let firstEl = this[i];
        this[i] = this[i + 1];
        this[i + 1] = firstEl;
        sorted = false;
      }
    }
  }
  return this;
};


String.prototype.substrings = function() {
  let result = [];

  for (let i = 0; i < (this.length); i++) {
    for (let j = (i + 1); j <= this.length; j++) {
      let substring = this.slice(i, j);
      if (result.indexOf(substring) === -1) {
        result.push(substring);
      }
    }
  }
  return result;
};
