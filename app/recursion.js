exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if (dirName) {
        data = findDir(data, dirName)
        console.log(data)
    }

    function findDir(data, dirName) {
      if (data['dir'] === dirName) {
        return data
      } else {
        for (var i = 0; i < data['files'].length; i++) {
          if (typeof data['files'][i] === 'object') {
            findDir(data['files'][i], dirName)
          }
        }
      }
    }

    function findFiles(data) {
      var files = []
      function recurse(data) {
        for (var i = 0; i < data.length; i++) {
          if (typeof data[i] === 'string') {
            files.push(data[i])
          } else {
            recurse(data[i].files)
          }
        }
      }
      recurse(data.files)
      return files
    }

    return findFiles(data)

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
