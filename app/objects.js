exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    var array = []
    Object.keys(obj).forEach(function (key){
      array.push(key + ': ' + obj[key])
    })
    return array
  }
};
