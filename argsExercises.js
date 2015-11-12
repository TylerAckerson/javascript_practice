var sum = function() {
  console.log(arguments);
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  args.forEach(function (i) {
    sum += i;
  });
  return sum;
};

Function.prototype.myBind = function() {
  var args = Array.prototype.slice.call(arguments);
  var ctx = args[0];

  var origFunc = this;
  var f = function() {
    var args2 = Array.prototype.slice.call(arguments);
    origFunc.apply(ctx, args.slice(1).concat(args2));
  };

  return f;
};

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach(function(i){
        sum += i;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};
//
// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  var args = [];
  var origFunc = this;

  var _curry = function(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return origFunc.apply(numArgs, args);
    } else {
      return _curry;
    }
  };
  return _curry;
};

var sum = function(num1, num2) {
  return num1 + num2;
};

console.log(sum.curry(2)(4)(6));

// console.log(sum(5)(30)(20)(1));
