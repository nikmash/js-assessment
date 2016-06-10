exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function (resolve, reject){
      setTimeout(function() {
        resolve(value)
      }, 1)
    })
  },

  manipulateRemoteData: function(url) {
    return new Promise(function (resolve, reject){
      $.get(url).then(function (result){
        var array = result.people.map(function (person){
          return person.name
        })
        resolve(array.sort())
      })
    })
  }
};
