exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev + curr
    })
  },

  remove: function(arr, item) {
    return arr.filter(function(arrItem) {
      return arrItem !== item
    })
  },

  removeWithoutCopy: function(arr, item) {
    var length = arr.length
    var i = 0

    while (i <= length) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        length--
      } else {
        i++
      }
    }

    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(arrItem) {
      if (arrItem === item) {
        count++
      }
    })

    return count
  },

  duplicates: function(arr) {
    var hash = {}
    var dupes = []

    for (var i=0; i < arr.length; i++) {
      if(hash[arr[i]]) {
        if (dupes.indexOf(arr[i]) === -1) {
            dupes.push(arr[i])
        }
      } else {
        hash[arr[i]] = true
      }
    }

    return dupes
  },

  square: function(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i] * arr[i])
    }
    return result
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = []

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i)
      }
    }

    return occurrences
  }
};
