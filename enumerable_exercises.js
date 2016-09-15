// Array.prototype.myEach = function(func) {
//   const result = [];
//
//   for (let i = 0; i < this.length; i++) {
//     result.push(func(this[i]));
//   }
//
//   return result;
// };
//
// Array.prototype.myMap = function(func) {
//   return this.myEach(func);
// };



Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function(func) {
  const result = [];

  const mapper = function(el) {
    result.push(func(el));
  };

  this.myEach(mapper);

  return result;
};

Array.prototype.myInject = function(func, acc) {
  const injector = function(el) {
    acc = func(acc, el);  
  };

  if (acc === undefined) {
    acc = this[0];
    this.slice(1).myEach(injector);
  } else {
    this.myEach(injector);
  }
  return acc;
};
