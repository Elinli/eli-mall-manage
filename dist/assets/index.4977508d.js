var c = Object.defineProperty,
  _ = Object.defineProperties
var m = Object.getOwnPropertyDescriptors
var o = Object.getOwnPropertySymbols
var d = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable
var s = (n, e, a) =>
    e in n ? c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (n[e] = a),
  r = (n, e) => {
    for (var a in e || (e = {})) d.call(e, a) && s(n, a, e[a])
    if (o) for (var a of o(e)) i.call(e, a) && s(n, a, e[a])
    return n
  },
  t = (n, e) => _(n, m(e))
import {
  d as l,
  I as p,
  D as u,
  o as f,
  c as x,
  g as F,
  m as I,
  F as N,
  e as B,
  H as C,
} from './index.777de502.js'
const g = B('div', null, 'menu', -1),
  v = l({
    __name: 'index',
    setup(n) {
      return p(t(r({}, u), { prefix: 'eli' })), (e, a) => (f(), x(N, null, [g, F(I(C))], 64))
    },
  })
export { v as default }
