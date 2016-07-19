exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(str1) {
      return str + ', ' + str1
    }
  },

  makeClosures: function(arr, fn) {
    var ret = []

    let func = function(val) {
      return function() {
        return fn(val)
      }
    }

    for(var i = 0; i < arr.length; i++) {
      ret.push(func(arr[i]))
    }

    return ret
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function() {
    var args = arguments
    var sum = 0
    for (var i =0; i < args.length; i++) {
      sum += args[i]
    }

    return sum
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments)
    args.shift()

    return fn.apply(null, args)
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments)
    args.shift()
    return function() {
      var partialArgs = args.concat(Array.prototype.slice.call(arguments))
      return fn.apply(null, partialArgs)
    }
  },

  curryIt: function(fn) {
    function curried(argsPassed, argsNeeded) {
      return function(currArg) {
        argsPassed.push(currArg)

        if (argsPassed.length === argsNeeded) {
          return fn.apply(null, argsPassed)
        } else {
          return curried(argsPassed, argsNeeded)
        }
      }
    }

    return curried([], fn.length)
  }
};
