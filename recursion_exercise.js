// function range(start, end) {
//   if (start > end) {
//     return [];
//   } else if (start === end) {
//     return [start];
//   } else {
//     return [start].concat(range((start + 1), end));
//   }
// }
//
// Array.prototype.sumIterative = function() {
//   let result = 0;
//
//   for (let i = 0; i < this.length; i++) {
//     result += this[i];
//   }
//
//   return result;
// };
//
// Array.prototype.sumRecursive = function() {
//   if (this.length === 0) {
//     return 0;
//   } else {
//     return this[0] + this.slice(1).sumRecursive();
//   }
// };
//
// function exponent1(b, n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return b * exponent1(b, n - 1);
//   }
// }
//
// function exponent2(b, n) {
//   if (n === 0) {
//     return 1;
//   } else if (n === 1) {
//     return b;
//   } else if (n % 2 === 0) {
//     let sqrt = exponent2(b, n / 2);
//     return sqrt * sqrt;
//   } else {
//     let sqrt = exponent2(b, (n - 1) / 2);
//     return b * sqrt * sqrt;
//   }
// }
//
// function fibIterative(n) {
//   const result = [0, 1];
//
//   if (n === 1) {
//     return [0];
//   } else if (n === 2) {
//     return result;
//   } else {
//     while (result.length < n) {
//       result.push(result[(result.length - 1)] + result[(result.length - 2)]);
//     }
//     return result;
//   }
// }
//
// function fibRecursive(n) {
//   if (n === 1) {
//     return [0];
//   } else if (n === 2) {
//     return [0, 1];
//   } else {
//     let prevFibs = fibRecursive(n - 1);
//     prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
//     return prevFibs;
//     }
// }
//
// function binarySearch(array, target) {
//   if (array.length === 0) {
//     return null;
//   }
//   let probeIndex = Math.floor(array.length / 2);
//   if (array[probeIndex] === target) {
//     return probeIndex;
//   } else if (array[probeIndex] > target) {
//     return binarySearch(array.slice(0, probeIndex), target);
//   } else {
//     let right = binarySearch(array.slice(probeIndex + 1), target);
//     if (right === null) {
//       return null;
//     } else {
//       return right + probeIndex + 1;
//     }
//   }
// }
//
// function makeChangeAmerican(amt, coinsArray) {
//   let result = [];
//   if (amt === 0) {
//     return [];
//   } else {
//     while (amt >= coinsArray[0]) {
//       amt -= coinsArray[0];
//       result.push(coinsArray[0]);
//     }
//     return result.concat(makeChangeAmerican(amt, coinsArray.slice(1)));
//   }
// }
//
// function makeChangeIntelligently(amt, coinsArray) {
//   let result;
//   // debugger
//   if (amt === 0) {
//     return [];
//   } else {
//     for (let i = 0; i < coinsArray.length; i++) {
//       let temp = [];
//       // debugger
//       if (coinsArray[i] > amt) {
//         continue;
//       }
//       temp.push(coinsArray[i]);
//       temp = temp.concat(makeChangeIntelligently(amt - coinsArray[i], coinsArray));
//       if (result === undefined || temp.length < result.length) {
//         result = temp;
//     }
//   }}
//   return result;
// }

Array.prototype.merge = function(other_array) {
  const result = [];
  while ((this.length > 0) && (other_array.length > 0)) {
    if (this[0] < other_array[0]) {
      result.push(this.shift());
    } else {
      result.push(other_array.shift());
    }
  }
  return result.concat(this).concat(other_array);
};

Array.prototype.mergeSort = function() {
  debugger
  if (this.length === 1) {
    return this;
  }
  const middle = Math.floor(this.length / 2);
  const left = this.slice(0, middle);
  const right = this.slice(middle);
  return left.mergeSort().merge(right.mergeSort());
};

console.log([5,2,9,1,10,8].mergeSort());
