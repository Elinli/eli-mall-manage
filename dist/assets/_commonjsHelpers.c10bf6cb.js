var f =
  typeof globalThis != 'undefined'
    ? globalThis
    : typeof window != 'undefined'
    ? window
    : typeof global != 'undefined'
    ? global
    : typeof self != 'undefined'
    ? self
    : {}
function u(t) {
  var o = t.default
  if (typeof o == 'function') {
    var e = function () {
      return o.apply(this, arguments)
    }
    e.prototype = o.prototype
  } else e = {}
  return (
    Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.keys(t).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(t, n)
      Object.defineProperty(
        e,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return t[n]
              },
            },
      )
    }),
    e
  )
}
export { f as c, u as g }