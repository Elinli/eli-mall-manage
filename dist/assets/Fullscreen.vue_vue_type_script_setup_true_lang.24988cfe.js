var p = (e, t, n) =>
  new Promise((s, r) => {
    var l = (o) => {
        try {
          u(n.next(o))
        } catch (i) {
          r(i)
        }
      },
      c = (o) => {
        try {
          u(n.throw(o))
        } catch (i) {
          r(i)
        }
      },
      u = (o) => (o.done ? s(o.value) : Promise.resolve(o.value).then(l, c))
    u((n = n.apply(e, t)).next())
  })
import {
  O as T,
  P as N,
  W as R,
  p as O,
  $ as q,
  j as m,
  a as k,
  i as z,
  d as L,
  b as M,
  o as W,
  G as B,
  w as I,
  h as P,
} from './index.c83f165b.js'
import { E as U } from './el-button.a68b4578.js'
var _
const f = typeof window != 'undefined',
  G = (e) => typeof e == 'string',
  w = () => {}
f &&
  ((_ = window == null ? void 0 : window.navigator) == null ? void 0 : _.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent)
function A(e) {
  return typeof e == 'function' ? e() : m(e)
}
function S(e) {
  return T() ? (N(e), !0) : !1
}
function D(e, t = !0) {
  R() ? O(e) : t ? e() : q(e)
}
function y(e) {
  var t
  const n = A(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const H = f ? window : void 0,
  V = f ? window.document : void 0
f && window.navigator
f && window.location
function $(...e) {
  let t, n, s, r
  if ((G(e[0]) ? (([n, s, r] = e), (t = H)) : ([t, n, s, r] = e), !t)) return w
  let l = w
  const c = z(
      () => y(t),
      (o) => {
        l(),
          o &&
            (o.addEventListener(n, s, r),
            (l = () => {
              o.removeEventListener(n, s, r), (l = w)
            }))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), l()
    }
  return S(u), u
}
function j(e, t = !1) {
  const n = k(),
    s = () => (n.value = Boolean(e()))
  return s(), D(s, t), n
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
  E = '__vueuse_ssr_handlers__'
v[E] = v[E] || {}
v[E]
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
function K(e, t = {}) {
  const { document: n = V, autoExit: s = !1 } = t,
    r = e || (n == null ? void 0 : n.querySelector('html')),
    l = k(!1)
  let c = b[0]
  const u = j(() => {
      if (n) {
        for (const a of b) if (a[1] in n) return (c = a), !0
      } else return !1
      return !1
    }),
    [o, i, g, , C] = c
  function d() {
    return p(this, null, function* () {
      !u.value || (n != null && n[g] && (yield n[i]()), (l.value = !1))
    })
  }
  function F() {
    return p(this, null, function* () {
      if (!u.value) return
      yield d()
      const a = y(r)
      a && (yield a[o](), (l.value = !0))
    })
  }
  function x() {
    return p(this, null, function* () {
      l.value ? yield d() : yield F()
    })
  }
  return (
    n &&
      $(
        n,
        C,
        () => {
          l.value = !!(n != null && n[g])
        },
        !1,
      ),
    s && S(d),
    { isSupported: u, isFullscreen: l, enter: F, exit: d, toggle: x }
  )
}
var h
;(function (e) {
  ;(e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE')
})(h || (h = {}))
const Y = L({
  __name: 'Fullscreen',
  setup(e) {
    const { toggle: t, isFullscreen: n } = K()
    return (s, r) => {
      const l = M('eli-svg-icon'),
        c = U
      return (
        W(),
        B(
          c,
          { onClick: m(t), class: 'fullscreen icon-button', text: '' },
          {
            default: I(() => [
              P(
                l,
                { name: m(n) ? 'off-screen' : 'full-screen', width: '20px', height: '20px' },
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
export { Y as _ }
