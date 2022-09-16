var p = (n, t, e) =>
  new Promise((s, o) => {
    var l = (r) => {
        try {
          u(e.next(r))
        } catch (i) {
          o(i)
        }
      },
      a = (r) => {
        try {
          u(e.throw(r))
        } catch (i) {
          o(i)
        }
      },
      u = (r) => (r.done ? s(r.value) : Promise.resolve(r.value).then(l, a))
    u((e = e.apply(n, t)).next())
  })
import {
  L as T,
  M as P,
  S as N,
  n as Q,
  a2 as R,
  i as m,
  a as h,
  h as B,
  d as L,
  o as M,
  C as q,
  w as z,
  f as U,
  g as W,
} from './index.071bd7da.js'
import { E as V } from './el-button.9d389084.js'
var O
const f = typeof window != 'undefined',
  j = (n) => typeof n == 'string',
  w = () => {}
f &&
  ((O = window == null ? void 0 : window.navigator) == null ? void 0 : O.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent)
function A(n) {
  return typeof n == 'function' ? n() : m(n)
}
function D(n) {
  return n
}
function y(n) {
  return T() ? (P(n), !0) : !1
}
function G(n, t = !0) {
  N() ? Q(n) : t ? n() : R(n)
}
function C(n) {
  var t
  const e = A(n)
  return (t = e == null ? void 0 : e.$el) != null ? t : e
}
const H = f ? window : void 0,
  K = f ? window.document : void 0
f && window.navigator
f && window.location
function X(...n) {
  let t, e, s, o
  if ((j(n[0]) ? (([e, s, o] = n), (t = H)) : ([t, e, s, o] = n), !t)) return w
  let l = w
  const a = B(
      () => C(t),
      (r) => {
        l(),
          r &&
            (r.addEventListener(e, s, o),
            (l = () => {
              r.removeEventListener(e, s, o), (l = w)
            }))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      a(), l()
    }
  return y(u), u
}
function $(n, t = !1) {
  const e = h(),
    s = () => (e.value = Boolean(n()))
  return s(), G(s, t), e
}
const v =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  _ = '__vueuse_ssr_handlers__'
v[_] = v[_] || {}
v[_]
const b = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ],
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
  ],
]
function J(n, t = {}) {
  const { document: e = K, autoExit: s = !1 } = t,
    o = n || (e == null ? void 0 : e.querySelector('html')),
    l = h(!1)
  let a = b[0]
  const u = $(() => {
      if (e) {
        for (const c of b) if (c[1] in e) return (a = c), !0
      } else return !1
      return !1
    }),
    [r, i, E, , k] = a
  function d() {
    return p(this, null, function* () {
      !u.value || (e != null && e[E] && (yield e[i]()), (l.value = !1))
    })
  }
  function g() {
    return p(this, null, function* () {
      if (!u.value) return
      yield d()
      const c = C(o)
      c && (yield c[r](), (l.value = !0))
    })
  }
  function x() {
    return p(this, null, function* () {
      l.value ? yield d() : yield g()
    })
  }
  return (
    e &&
      X(
        e,
        k,
        () => {
          l.value = !!(e != null && e[E])
        },
        !1,
      ),
    s && y(d),
    { isSupported: u, isFullscreen: l, enter: g, exit: d, toggle: x }
  )
}
var F
;(function (n) {
  ;(n.UP = 'UP'), (n.RIGHT = 'RIGHT'), (n.DOWN = 'DOWN'), (n.LEFT = 'LEFT'), (n.NONE = 'NONE')
})(F || (F = {}))
var Y = Object.defineProperty,
  I = Object.getOwnPropertySymbols,
  Z = Object.prototype.hasOwnProperty,
  ee = Object.prototype.propertyIsEnumerable,
  S = (n, t, e) =>
    t in n ? Y(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e),
  ne = (n, t) => {
    for (var e in t || (t = {})) Z.call(t, e) && S(n, e, t[e])
    if (I) for (var e of I(t)) ee.call(t, e) && S(n, e, t[e])
    return n
  }
const te = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
}
ne({ linear: D }, te)
const oe = L({
  __name: 'Fullscreen',
  setup(n) {
    const { toggle: t, isFullscreen: e } = J()
    return (s, o) => {
      const l = W('eli-svg-icon'),
        a = V
      return (
        M(),
        q(
          a,
          { onClick: m(t), class: 'fullscreen icon-button', text: '' },
          {
            default: z(() => [
              U(
                l,
                { name: m(e) ? 'off-screen' : 'full-screen', width: '20px', height: '20px' },
                null,
                8,
                ['name'],
              ),
            ]),
            _: 1,
          },
          8,
          ['onClick'],
        )
      )
    }
  },
})
export { oe as _ }
