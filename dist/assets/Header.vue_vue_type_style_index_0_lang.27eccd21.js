var $ = Object.defineProperty,
  B = Object.defineProperties
var I = Object.getOwnPropertyDescriptors
var l = Object.getOwnPropertySymbols
var m = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable
var p = (t, e, o) =>
    e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o),
  f = (t, e) => {
    for (var o in e || (e = {})) m.call(e, o) && p(t, o, e[o])
    if (l) for (var o of l(e)) d.call(e, o) && p(t, o, e[o])
    return t
  },
  g = (t, e) => B(t, I(e))
var h = (t, e) => {
  var o = {}
  for (var s in t) m.call(t, s) && e.indexOf(s) < 0 && (o[s] = t[s])
  if (t != null && l) for (var s of l(t)) e.indexOf(s) < 0 && d.call(t, s) && (o[s] = t[s])
  return o
}
import {
  X as v,
  d as N,
  Y as V,
  l as b,
  b as w,
  o as A,
  c as F,
  f as _,
  h as a,
  j as r,
  t as x,
  g as H,
} from './index.c83f165b.js'
import { _ as S } from './Search.vue_vue_type_script_setup_true_lang.94604482.js'
import { _ as T } from './Fullscreen.vue_vue_type_script_setup_true_lang.24988cfe.js'
import { _ as j } from './Language.vue_vue_type_script_setup_true_lang.8ab21874.js'
import { _ as D } from './UserInfo.vue_vue_type_style_index_0_lang.07451b98.js'
function C(t, e) {
  return !t || e.startsWith(t) ? e : `${t}.${e}`
}
function E(t) {
  const e = { t: (n) => C(t, n) }
  if (!v) return e
  const i = v.global,
    { t: o } = i,
    s = h(i, ['t']),
    u = (n, ...c) => (n ? (!n.includes('.') && !t ? n : o(C(t, n), ...c)) : '')
  return g(f({}, s), { t: u })
}
const K = { class: 'header-content' },
  M = { class: 'logo' },
  W = H(' \xA0 '),
  X = { class: 'operation-area' },
  O = N({
    __name: 'Header',
    setup(t) {
      const { t: e } = E(),
        o = V(),
        s = b({
          get: () => o.getIsCollapse,
          set: (i) => {
            o.setIsCollapse(i)
          },
        })
      function u() {
        s.value = !s.value
      }
      return (i, n) => {
        const c = w('eli-svg-icon')
        return (
          A(),
          F('div', K, [
            _('div', M, [
              a(c, { name: 'logo', width: '120px', height: '28px' }),
              W,
              a(
                c,
                {
                  onClick: u,
                  name: r(s) ? 'menu-fold' : 'menu-unfold',
                  width: '20px',
                  height: '20px',
                },
                null,
                8,
                ['name'],
              ),
            ]),
            _('div', X, [
              a(r(S)),
              a(r(T)),
              a(r(j)),
              a(r(D)),
              _('span', null, x(r(e)('common.searchText')), 1),
              _('span', null, x(r(e)('routes.system.charts.googleMap')), 1),
            ]),
          ])
        )
      }
    },
  })
export { O as _, E as u }
