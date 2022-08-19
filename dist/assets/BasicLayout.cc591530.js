var A = Object.defineProperty,
  M = Object.defineProperties
var z = Object.getOwnPropertyDescriptors
var C = Object.getOwnPropertySymbols
var I = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable
var b = (s, e, t) =>
    e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t),
  i = (s, e) => {
    for (var t in e || (e = {})) I.call(e, t) && b(s, t, e[t])
    if (C) for (var t of C(e)) j.call(e, t) && b(s, t, e[t])
    return s
  },
  _ = (s, e) => M(s, z(e))
import {
  h as m,
  d as u,
  i as q,
  j as f,
  k as y,
  o as p,
  c as d,
  l as h,
  n as g,
  m as o,
  p as S,
  q as D,
  s as w,
  r as L,
  a as T,
  g as r,
  w as c,
  f as $,
  t as x,
} from './index.777de502.js'
const G = { name: 'ElContainer' },
  J = u(
    _(i({}, G), {
      props: { direction: { type: String } },
      setup(s) {
        const e = s,
          t = q(),
          n = f('container'),
          a = y(() =>
            e.direction === 'vertical'
              ? !0
              : e.direction === 'horizontal'
              ? !1
              : t && t.default
              ? t.default().some((v) => {
                  const k = v.type.name
                  return k === 'ElHeader' || k === 'ElFooter'
                })
              : !1,
          )
        return (l, v) => (
          p(),
          d(
            'section',
            { class: g([o(n).b(), o(n).is('vertical', o(a))]) },
            [h(l.$slots, 'default')],
            2,
          )
        )
      },
    }),
  )
var K = m(J, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue',
  ],
])
const O = { name: 'ElAside' },
  P = u(
    _(i({}, O), {
      props: { width: { type: String, default: null } },
      setup(s) {
        const e = s,
          t = f('aside'),
          n = y(() => (e.width ? t.cssVarBlock({ width: e.width }) : {}))
        return (a, l) => (
          p(), d('aside', { class: g(o(t).b()), style: S(o(n)) }, [h(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var B = m(P, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue',
  ],
])
const Q = { name: 'ElFooter' },
  R = u(
    _(i({}, Q), {
      props: { height: { type: String, default: null } },
      setup(s) {
        const e = s,
          t = f('footer'),
          n = y(() => (e.height ? t.cssVarBlock({ height: e.height }) : {}))
        return (a, l) => (
          p(), d('footer', { class: g(o(t).b()), style: S(o(n)) }, [h(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var F = m(R, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue',
  ],
])
const U = { name: 'ElHeader' },
  W = u(
    _(i({}, U), {
      props: { height: { type: String, default: null } },
      setup(s) {
        const e = s,
          t = f('header'),
          n = y(() => (e.height ? t.cssVarBlock({ height: e.height }) : {}))
        return (a, l) => (
          p(), d('header', { class: g(o(t).b()), style: S(o(n)) }, [h(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var H = m(W, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue',
  ],
])
const X = { name: 'ElMain' },
  Y = u(
    _(i({}, X), {
      setup(s) {
        const e = f('main')
        return (t, n) => (p(), d('main', { class: g(o(e).b()) }, [h(t.$slots, 'default')], 2))
      },
    }),
  )
var N = m(Y, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue',
  ],
])
const Z = D(K, { Aside: B, Footer: F, Header: H, Main: N }),
  ee = w(B),
  te = w(F),
  se = w(H),
  ne = w(N)
const oe = { class: 'common-layout' },
  ae = $('Header'),
  le = $('Aside'),
  re = $('Footer'),
  _e = u({
    __name: 'BasicLayout',
    setup(s) {
      const e = L([]),
        t = T(1)
      return (n, a) => {
        const l = se,
          v = ee,
          k = ne,
          V = te,
          E = Z
        return (
          p(),
          d('div', oe, [
            r(E, null, {
              default: c(() => [
                r(l, null, { default: c(() => [ae]), _: 1 }),
                r(E, null, {
                  default: c(() => [
                    r(v, { width: '200px' }, { default: c(() => [le]), _: 1 }),
                    r(E, null, {
                      default: c(() => [
                        r(k, null, { default: c(() => [$('Main' + x(e) + x(t.value), 1)]), _: 1 }),
                        r(V, null, { default: c(() => [re]), _: 1 }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { _e as default }
