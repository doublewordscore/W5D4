Array.prototype.my_uniq = function() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
      if (result.indexOf(this[i]) === -1) {
        result.push(this[i]);
      }
  }

  // this.forEach((el) => {
  //   if (result.indexOf(el) === -1) {
  //     result.push(el);
  //   }
  // });

  return result;
};


Array.prototype.two_sum = function() {
  const result = [];

  for (let i = 0; i < (this.length -1); i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this [j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};


Array.prototype.my_transpose = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result[j].push(this[i][j]);
    }
  }
  return result;
};
