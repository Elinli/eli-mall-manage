var V = Object.defineProperty,
  j = Object.defineProperties
var T = Object.getOwnPropertyDescriptors
var y = Object.getOwnPropertySymbols
var A = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable
var k = (r, e, t) =>
    e in r ? V(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
  d = (r, e) => {
    for (var t in e || (e = {})) A.call(e, t) && k(r, t, e[t])
    if (y) for (var t of y(e)) D.call(e, t) && k(r, t, e[t])
    return r
  },
  i = (r, e) => j(r, T(e))
import {
  x as B,
  d as v,
  a as I,
  L as K,
  p as M,
  o as c,
  c as m,
  E as x,
  I as u,
  j as s,
  S as q,
  k as z,
  V as G,
  f as C,
  G as g,
  w as n,
  H,
  t as L,
  W as O,
  M as R,
  N as W,
  h as l,
  g as _,
} from './index.c83f165b.js'
import { _ as F } from './_plugin-vue_export-helper.cdc0426e.js'
import { i as J } from './icon.f63980c2.js'
import { u as E, _ as $, E as Q } from './index.841c5669.js'
const S = Symbol('breadcrumbKey'),
  U = B({ separator: { type: String, default: '/' }, separatorIcon: { type: J, default: '' } }),
  X = { name: 'ElBreadcrumb' },
  Y = v(
    i(d({}, X), {
      props: U,
      setup(r) {
        const e = r,
          t = E('breadcrumb'),
          o = I()
        return (
          K(S, e),
          M(() => {
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
              [x(a.$slots, 'default')],
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
const ee = B({
    to: { type: q([String, Object]), default: '' },
    replace: { type: Boolean, default: !1 },
  }),
  te = { name: 'ElBreadcrumbItem' },
  re = v(
    i(d({}, te), {
      props: ee,
      setup(r) {
        const e = r,
          t = O(),
          o = z(S, void 0),
          a = E('breadcrumb'),
          { separator: b, separatorIcon: f } = G(o),
          p = t.appContext.config.globalProperties.$router,
          N = I(),
          P = () => {
            !e.to || !p || (e.replace ? p.replace(e.to) : p.push(e.to))
          }
        return (h, de) => (
          c(),
          m(
            'span',
            { class: u(s(a).e('item')) },
            [
              C(
                'span',
                {
                  ref_key: 'link',
                  ref: N,
                  class: u([s(a).e('inner'), s(a).is('link', !!h.to)]),
                  role: 'link',
                  onClick: P,
                },
                [x(h.$slots, 'default')],
                2,
              ),
              s(f)
                ? (c(),
                  g(
                    s(Q),
                    { key: 0, class: u(s(a).e('separator')) },
                    { default: n(() => [(c(), g(H(s(f))))]), _: 1 },
                    8,
                    ['class'],
                  ))
                : (c(),
                  m(
                    'span',
                    { key: 1, class: u(s(a).e('separator')), role: 'presentation' },
                    L(s(b)),
                    3,
                  )),
            ],
            2,
          )
        )
      },
    }),
  )
var w = $(re, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue',
  ],
])
const ae = R(Z, { BreadcrumbItem: w }),
  se = W(w)
const oe = {},
  ne = { class: 'bread-crumbs' },
  ce = _('homepage'),
  le = C('a', { href: '/' }, 'promotion management', -1),
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
