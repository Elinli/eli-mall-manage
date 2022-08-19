var j = Object.defineProperty,
  T = Object.defineProperties
var V = Object.getOwnPropertyDescriptors
var y = Object.getOwnPropertySymbols
var A = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable
var k = (r, e, t) =>
    e in r ? j(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
  d = (r, e) => {
    for (var t in e || (e = {})) A.call(e, t) && k(r, t, e[t])
    if (y) for (var t of y(e)) D.call(e, t) && k(r, t, e[t])
    return r
  },
  i = (r, e) => T(r, V(e))
import {
  d as g,
  a as v,
  B as K,
  m as q,
  o as c,
  c as m,
  s as I,
  y as u,
  k as s,
  j as z,
  L,
  b as x,
  v as B,
  w as n,
  x as M,
  t as O,
  i as R,
  f as l,
  e as _,
} from './index.a980d1e6.js'
import { _ as F } from './_plugin-vue_export-helper.cdc0426e.js'
import { a as C, c as $, _ as w, e as G, E as H, w as J, d as Q } from './index.d7808d24.js'
import { i as U } from './icon.ce3baaf7.js'
const E = Symbol('breadcrumbKey'),
  W = C({ separator: { type: String, default: '/' }, separatorIcon: { type: U, default: '' } }),
  X = { name: 'ElBreadcrumb' },
  Y = g(
    i(d({}, X), {
      props: W,
      setup(r) {
        const e = r,
          t = $('breadcrumb'),
          o = v()
        return (
          K(E, e),
          q(() => {
            const a = o.value.querySelectorAll(`.${t.e('item')}`)
            a.length && a[a.length - 1].setAttribute('aria-current', 'page')
          }),
          (a, b) => (
            c(),
            m(
              'div',
              {
                ref_key: 'breadcrumb',
                ref: o,
                class: u(s(t).b()),
                'aria-label': 'Breadcrumb',
                role: 'navigation',
              },
              [I(a.$slots, 'default')],
              2,
            )
          )
        )
      },
    }),
  )
var Z = w(Y, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue',
  ],
])
const ee = C({
    to: { type: G([String, Object]), default: '' },
    replace: { type: Boolean, default: !1 },
  }),
  te = { name: 'ElBreadcrumbItem' },
  re = g(
    i(d({}, te), {
      props: ee,
      setup(r) {
        const e = r,
          t = R(),
          o = z(E, void 0),
          a = $('breadcrumb'),
          { separator: b, separatorIcon: f } = L(o),
          p = t.appContext.config.globalProperties.$router,
          S = v(),
          N = () => {
            !e.to || !p || (e.replace ? p.replace(e.to) : p.push(e.to))
          }
        return (h, de) => (
          c(),
          m(
            'span',
            { class: u(s(a).e('item')) },
            [
              x(
                'span',
                {
                  ref_key: 'link',
                  ref: S,
                  class: u([s(a).e('inner'), s(a).is('link', !!h.to)]),
                  role: 'link',
                  onClick: N,
                },
                [I(h.$slots, 'default')],
                2,
              ),
              s(f)
                ? (c(),
                  B(
                    s(H),
                    { key: 0, class: u(s(a).e('separator')) },
                    { default: n(() => [(c(), B(M(s(f))))]), _: 1 },
                    8,
                    ['class'],
                  ))
                : (c(),
                  m(
                    'span',
                    { key: 1, class: u(s(a).e('separator')), role: 'presentation' },
                    O(s(b)),
                    3,
                  )),
            ],
            2,
          )
        )
      },
    }),
  )
var P = w(re, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue',
  ],
])
const ae = J(Z, { BreadcrumbItem: P }),
  se = Q(P)
const oe = {},
  ne = { class: 'bread-crumbs' },
  ce = _('homepage'),
  le = x('a', { href: '/' }, 'promotion management', -1),
  ue = _('promotion list'),
  me = _('promotion detail')
function pe(r, e) {
  const t = se,
    o = ae
  return (
    c(),
    m('div', ne, [
      l(
        o,
        { separator: '/' },
        {
          default: n(() => [
            l(t, { to: { path: '/' } }, { default: n(() => [ce]), _: 1 }),
            l(t, null, { default: n(() => [le]), _: 1 }),
            l(t, null, { default: n(() => [ue]), _: 1 }),
            l(t, null, { default: n(() => [me]), _: 1 }),
          ]),
          _: 1,
        },
      ),
    ])
  )
}
const ye = F(oe, [['render', pe]])
export { ye as default }