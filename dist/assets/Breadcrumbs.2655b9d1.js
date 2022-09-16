var j = Object.defineProperty,
  D = Object.defineProperties
var K = Object.getOwnPropertyDescriptors
var y = Object.getOwnPropertySymbols
var T = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable
var B = (r, e, t) =>
    e in r ? j(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
  d = (r, e) => {
    for (var t in e || (e = {})) T.call(e, t) && B(r, t, e[t])
    if (y) for (var t of y(e)) V.call(e, t) && B(r, t, e[t])
    return r
  },
  i = (r, e) => D(r, K(e))
import {
  s as g,
  d as v,
  a as I,
  I as A,
  n as R,
  o as c,
  c as m,
  B as C,
  E as u,
  i as s,
  P as q,
  j as z,
  R as J,
  b as x,
  C as k,
  w as n,
  D as M,
  t as O,
  S as F,
  J as G,
  K as H,
  f as l,
  e as _,
} from './index.77b5ea65.js'
import { _ as L } from './_plugin-vue_export-helper.cdc0426e.js'
import { i as Q } from './icon.4e5e88aa.js'
import { u as E, _ as $, E as U } from './index.6a963975.js'
const P = Symbol('breadcrumbKey'),
  W = g({ separator: { type: String, default: '/' }, separatorIcon: { type: Q, default: '' } }),
  X = { name: 'ElBreadcrumb' },
  Y = v(
    i(d({}, X), {
      props: W,
      setup(r) {
        const e = r,
          t = E('breadcrumb'),
          o = I()
        return (
          A(P, e),
          R(() => {
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
              [C(a.$slots, 'default')],
              2,
            )
          )
        )
      },
    }),
  )
var Z = $(Y, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue',
  ],
])
const ee = g({
    to: { type: q([String, Object]), default: '' },
    replace: { type: Boolean, default: !1 },
  }),
  te = { name: 'ElBreadcrumbItem' },
  re = v(
    i(d({}, te), {
      props: ee,
      setup(r) {
        const e = r,
          t = F(),
          o = z(P, void 0),
          a = E('breadcrumb'),
          { separator: b, separatorIcon: f } = J(o),
          p = t.appContext.config.globalProperties.$router,
          w = I(),
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
                  ref: w,
                  class: u([s(a).e('inner'), s(a).is('link', !!h.to)]),
                  role: 'link',
                  onClick: N,
                },
                [C(h.$slots, 'default')],
                2,
              ),
              s(f)
                ? (c(),
                  k(
                    s(U),
                    { key: 0, class: u(s(a).e('separator')) },
                    { default: n(() => [(c(), k(M(s(f))))]), _: 1 },
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
var S = $(re, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue',
  ],
])
const ae = G(Z, { BreadcrumbItem: S }),
  se = H(S)
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
const ye = L(oe, [['render', pe]])
export { ye as default }
