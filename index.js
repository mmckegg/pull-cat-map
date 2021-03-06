module.exports = catMap

function catMap (fn) {
  var stream = null
  return function (read) {
    return function (abort, cb) {
      if (abort) {
        stream && stream(abort, cb) || cb(abort)
      } else {
        more()
      }

      function more () {
        if (stream) {
          readStream()
        } else {
          read(null, function (end, data) {
            if (end) return cb(end)
            var mapped = fn(data)
            if (typeof mapped === 'function') {
              stream = mapped
              readStream()
            } else {
              cb(null, mapped)
            }
          })
        }
      }

      function readStream () {
        stream(null, function (endOrErr, data) {
          if (endOrErr === true) {
            stream = null
            more()
          } else if (endOrErr) {
            cb(endOrErr)
          } else {
            cb(null, data)
          }
        })
      }
    }
  }
}
