var Wn = Object.defineProperty,
  Un = Object.defineProperties
var zn = Object.getOwnPropertyDescriptors
var Mt = Object.getOwnPropertySymbols
var Vn = Object.prototype.hasOwnProperty,
  qn = Object.prototype.propertyIsEnumerable
var Ft = (e, t, n) =>
    t in e ? Wn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  k = (e, t) => {
    for (var n in t || (t = {})) Vn.call(t, n) && Ft(e, n, t[n])
    if (Mt) for (var n of Mt(t)) qn.call(t, n) && Ft(e, n, t[n])
    return e
  },
  j = (e, t) => Un(e, zn(t))
var xt = (e, t, n) =>
  new Promise((o, r) => {
    var a = (i) => {
        try {
          l(n.next(i))
        } catch (u) {
          r(u)
        }
      },
      s = (i) => {
        try {
          l(n.throw(i))
        } catch (u) {
          r(u)
        }
      },
      l = (i) => (i.done ? o(i.value) : Promise.resolve(i.value).then(a, s))
    l((n = n.apply(e, t)).next())
  })
import {
  O as x,
  a as w,
  b as I,
  aV as pn,
  F as N,
  A as $,
  aH as Ue,
  Q as Le,
  C as Yn,
  am as be,
  aA as Jn,
  D as V,
  ah as pe,
  aI as Gn,
  d as ae,
  Z as Q,
  a9 as fe,
  o as G,
  c as Ye,
  Y as ct,
  a5 as rt,
  U as fn,
  aW as Zn,
  a7 as Xn,
  X as Qn,
  aX as eo,
  aD as to,
  a3 as Fe,
  $ as Pe,
  a0 as ue,
  a2 as dn,
  W as Se,
  P as Dt,
  G as no,
  ab as jt,
  ai as oo,
  a6 as ro,
  a8 as vn,
  ap as Ce,
  V as ao,
  ak as so,
  aM as io,
  ac as lo,
  T as at,
  aN as uo,
  aY as co,
  t as po,
} from './index.b73a18cc.js'
import {
  z as pt,
  a as ce,
  A as fo,
  B as tt,
  b as st,
  _ as te,
  u as Ze,
  y as Je,
  C as Ht,
} from './index.b96c5203.js'
import { b as vo } from './el-button.42d22c5b.js'
import { i as mo } from './icon.66172442.js'
function ft(e) {
  return e == null
}
const oe =
    (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
    (r) => {
      const a = e == null ? void 0 : e(r)
      if (n === !1 || !a) return t == null ? void 0 : t(r)
    },
  Ua = (e) => (t) => t.pointerType === 'mouse' ? e(t) : void 0
function le(e) {
  var t
  const n = w(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const dt = ce ? window : void 0
function ze(...e) {
  let t, n, o, r
  if ((fo(e[0]) ? (([n, o, r] = e), (t = dt)) : ([t, n, o, r] = e), !t)) return tt
  let a = tt
  const s = x(
      () => le(t),
      (i) => {
        a(),
          i &&
            (i.addEventListener(n, o, r),
            (a = () => {
              i.removeEventListener(n, o, r), (a = tt)
            }))
      },
      { immediate: !0, flush: 'post' },
    ),
    l = () => {
      s(), a()
    }
  return pt(l), l
}
function go(e, t, n = {}) {
  const { window: o = dt, ignore: r, capture: a = !0, detectIframe: s = !1 } = n
  if (!o) return
  const l = I(!0)
  let i
  const u = (v) => {
      o.clearTimeout(i)
      const c = le(e),
        f = v.composedPath()
      !c ||
        c === v.target ||
        f.includes(c) ||
        !l.value ||
        (r &&
          r.length > 0 &&
          r.some((d) => {
            const h = le(d)
            return h && (v.target === h || f.includes(h))
          })) ||
        t(v)
    },
    p = [
      ze(o, 'click', u, { passive: !0, capture: a }),
      ze(
        o,
        'pointerdown',
        (v) => {
          const c = le(e)
          l.value = !!c && !v.composedPath().includes(c)
        },
        { passive: !0 },
      ),
      ze(
        o,
        'pointerup',
        (v) => {
          if (v.button === 0) {
            const c = v.composedPath()
            ;(v.composedPath = () => c), (i = o.setTimeout(() => u(v), 50))
          }
        },
        { passive: !0 },
      ),
      s &&
        ze(o, 'blur', (v) => {
          var c
          const f = le(e)
          ;((c = document.activeElement) == null ? void 0 : c.tagName) === 'IFRAME' &&
            !(f != null && f.contains(document.activeElement)) &&
            t(v)
        }),
    ].filter(Boolean)
  return () => p.forEach((v) => v())
}
const it =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  lt = '__vueuse_ssr_handlers__'
it[lt] = it[lt] || {}
it[lt]
var Kt = Object.getOwnPropertySymbols,
  ho = Object.prototype.hasOwnProperty,
  bo = Object.prototype.propertyIsEnumerable,
  yo = (e, t) => {
    var n = {}
    for (var o in e) ho.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o])
    if (e != null && Kt) for (var o of Kt(e)) t.indexOf(o) < 0 && bo.call(e, o) && (n[o] = e[o])
    return n
  }
function za(e, t, n = {}) {
  const o = n,
    { window: r = dt } = o,
    a = yo(o, ['window'])
  let s
  const l = r && 'ResizeObserver' in r,
    i = () => {
      s && (s.disconnect(), (s = void 0))
    },
    u = x(
      () => le(e),
      (m) => {
        i(), l && r && m && ((s = new ResizeObserver(t)), s.observe(m, a))
      },
      { immediate: !0, flush: 'post' },
    ),
    p = () => {
      i(), u()
    }
  return pt(p), { isSupported: l, stop: p }
}
var Wt
;(function (e) {
  ;(e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE')
})(Wt || (Wt = {}))
const Z = {
    tab: 'Tab',
    enter: 'Enter',
    space: 'Space',
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    esc: 'Escape',
    delete: 'Delete',
    backspace: 'Backspace',
    numpadEnter: 'NumpadEnter',
    pageUp: 'PageUp',
    pageDown: 'PageDown',
    home: 'Home',
    end: 'End',
  },
  wo = () => Math.floor(Math.random() * 1e4),
  vt = Symbol('popper'),
  mn = Symbol('popperContent'),
  Eo = pn({ type: N(Boolean), default: null }),
  Oo = pn({ type: N(Function) }),
  To = (e) => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      o = [t],
      r = { [e]: Eo, [n]: Oo }
    return {
      useModelToggle: ({
        indicator: s,
        toggleReason: l,
        shouldHideWhenRouteChanges: i,
        shouldProceed: u,
        onShow: p,
        onHide: m,
      }) => {
        const v = Yn(),
          { emit: c } = v,
          f = v.props,
          d = $(() => Ue(f[n])),
          h = $(() => f[e] === null),
          g = (y) => {
            s.value !== !0 && ((s.value = !0), l && (l.value = y), Ue(p) && p(y))
          },
          b = (y) => {
            s.value !== !1 && ((s.value = !1), l && (l.value = y), Ue(m) && m(y))
          },
          T = (y) => {
            if (f.disabled === !0 || (Ue(u) && !u())) return
            const S = d.value && ce
            S && c(t, !0), (h.value || !S) && g(y)
          },
          E = (y) => {
            if (f.disabled === !0 || !ce) return
            const S = d.value && ce
            S && c(t, !1), (h.value || !S) && b(y)
          },
          P = (y) => {
            !st(y) || (f.disabled && y ? d.value && c(t, !1) : s.value !== y && (y ? g() : b()))
          },
          C = () => {
            s.value ? E() : T()
          }
        return (
          x(() => f[e], P),
          i &&
            v.appContext.config.globalProperties.$route !== void 0 &&
            x(
              () => k({}, v.proxy.$route),
              () => {
                i.value && s.value && E()
              },
            ),
          Le(() => {
            P(f[e])
          }),
          { hide: E, show: T, toggle: C, hasUpdateHandler: d }
        )
      },
      useModelToggleProps: r,
      useModelToggleEmits: o,
    }
  }
function Co() {
  let e
  const t = (o, r) => {
      n(), (e = window.setTimeout(o, r))
    },
    n = () => window.clearTimeout(e)
  return pt(() => n()), { registerTimeout: t, cancelTimeout: n }
}
let Te = []
const Ut = (e) => {
    const t = e
    t.key === Z.esc && Te.forEach((n) => n(t))
  },
  So = (e) => {
    Le(() => {
      Te.length === 0 && document.addEventListener('keydown', Ut), ce && Te.push(e)
    }),
      be(() => {
        ;(Te = Te.filter((t) => t !== e)),
          Te.length === 0 && ce && document.removeEventListener('keydown', Ut)
      })
  }
let zt
const gn = `el-popper-container-${wo()}`,
  hn = `#${gn}`,
  Po = () => {
    const e = document.createElement('div')
    return (e.id = gn), document.body.appendChild(e), e
  },
  Ao = () => {
    Jn(() => {
      !ce || ((!zt || !document.body.querySelector(hn)) && (zt = Po()))
    })
  },
  _o = V({ showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 } }),
  Io = ({ showAfter: e, hideAfter: t, open: n, close: o }) => {
    const { registerTimeout: r } = Co()
    return {
      onOpen: (l) => {
        r(() => {
          n(l)
        }, w(e))
      },
      onClose: (l) => {
        r(() => {
          o(l)
        }, w(t))
      },
    }
  },
  bn = Symbol('elForwardRef'),
  Ro = (e) => {
    pe(bn, {
      setForwardRef: (n) => {
        e.value = n
      },
    })
  },
  ko = (e) => ({
    mounted(t) {
      e(t)
    },
    updated(t) {
      e(t)
    },
    unmounted() {
      e(null)
    },
  }),
  Vt = I(0),
  Lo = () => {
    const e = Gn('zIndex', 2e3),
      t = $(() => e.value + Vt.value)
    return { initialZIndex: e, currentZIndex: t, nextZIndex: () => (Vt.value++, t.value) }
  },
  Va = { LIGHT: 'light', DARK: 'dark' },
  yn = V({ role: { type: String, default: 'tooltip' } }),
  No = { name: 'ElPopperRoot', inheritAttrs: !1 },
  Bo = ae(
    j(k({}, No), {
      props: yn,
      setup(e, { expose: t }) {
        const n = e,
          o = I(),
          r = I(),
          a = I(),
          s = I(),
          l = $(() => n.role),
          i = { triggerRef: o, popperInstanceRef: r, contentRef: a, referenceRef: s, role: l }
        return t(i), pe(vt, i), (u, p) => Q(u.$slots, 'default')
      },
    }),
  )
var $o = te(Bo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue',
  ],
])
const wn = V({ arrowOffset: { type: Number, default: 5 } }),
  Mo = { name: 'ElPopperArrow', inheritAttrs: !1 },
  Fo = ae(
    j(k({}, Mo), {
      props: wn,
      setup(e, { expose: t }) {
        const n = e,
          o = Ze('popper'),
          { arrowOffset: r, arrowRef: a } = fe(mn, void 0)
        return (
          x(
            () => n.arrowOffset,
            (s) => {
              r.value = s
            },
          ),
          be(() => {
            a.value = void 0
          }),
          t({ arrowRef: a }),
          (s, l) => (
            G(),
            Ye(
              'span',
              { ref_key: 'arrowRef', ref: a, class: ct(w(o).e('arrow')), 'data-popper-arrow': '' },
              null,
              2,
            )
          )
        )
      },
    }),
  )
var xo = te(Fo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue',
  ],
])
const Do = 'ElOnlyChild',
  jo = ae({
    name: Do,
    setup(e, { slots: t, attrs: n }) {
      var o
      const r = fe(bn),
        a = ko((o = r == null ? void 0 : r.setForwardRef) != null ? o : rt)
      return () => {
        var s
        const l = (s = t.default) == null ? void 0 : s.call(t, n)
        if (!l || l.length > 1) return null
        const i = En(l)
        return i ? fn(Zn(i, n), [[a]]) : null
      }
    },
  })
function En(e) {
  if (!e) return null
  const t = e
  for (const n of t) {
    if (Xn(n))
      switch (n.type) {
        case to:
          continue
        case eo:
        case 'svg':
          return qt(n)
        case Qn:
          return En(n.children)
        default:
          return n
      }
    return qt(n)
  }
  return null
}
function qt(e) {
  return Fe('span', { class: 'el-only-child__content' }, [e])
}
const On = V({
    virtualRef: { type: N(Object) },
    virtualTriggering: Boolean,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean,
  }),
  Ho = { name: 'ElPopperTrigger', inheritAttrs: !1 },
  Ko = ae(
    j(k({}, Ho), {
      props: On,
      setup(e, { expose: t }) {
        const n = e,
          { role: o, triggerRef: r } = fe(vt, void 0)
        Ro(r)
        const a = $(() => (l.value ? n.id : void 0)),
          s = $(() => {
            if (o && o.value === 'tooltip') return n.open && n.id ? n.id : void 0
          }),
          l = $(() => {
            if (o && o.value !== 'tooltip') return o.value
          }),
          i = $(() => (l.value ? `${n.open}` : void 0))
        let u
        return (
          Le(() => {
            x(
              () => n.virtualRef,
              (p) => {
                p && (r.value = le(p))
              },
              { immediate: !0 },
            ),
              x(
                () => r.value,
                (p, m) => {
                  u == null || u(),
                    (u = void 0),
                    Je(p) &&
                      ([
                        'onMouseenter',
                        'onMouseleave',
                        'onClick',
                        'onKeydown',
                        'onFocus',
                        'onBlur',
                        'onContextmenu',
                      ].forEach((v) => {
                        var c
                        const f = n[v]
                        f &&
                          (p.addEventListener(v.slice(2).toLowerCase(), f),
                          (c = m == null ? void 0 : m.removeEventListener) == null ||
                            c.call(m, v.slice(2).toLowerCase(), f))
                      }),
                      (u = x(
                        [a, s, l, i],
                        (v) => {
                          ;[
                            'aria-controls',
                            'aria-describedby',
                            'aria-haspopup',
                            'aria-expanded',
                          ].forEach((c, f) => {
                            ft(v[f]) ? p.removeAttribute(c) : p.setAttribute(c, v[f])
                          })
                        },
                        { immediate: !0 },
                      ))),
                    Je(m) &&
                      [
                        'aria-controls',
                        'aria-describedby',
                        'aria-haspopup',
                        'aria-expanded',
                      ].forEach((v) => m.removeAttribute(v))
                },
                { immediate: !0 },
              )
          }),
          be(() => {
            u == null || u(), (u = void 0)
          }),
          t({ triggerRef: r }),
          (p, m) =>
            p.virtualTriggering
              ? Se('v-if', !0)
              : (G(),
                Pe(
                  w(jo),
                  dn({ key: 0 }, p.$attrs, {
                    'aria-controls': w(a),
                    'aria-describedby': w(s),
                    'aria-expanded': w(i),
                    'aria-haspopup': w(l),
                  }),
                  { default: ue(() => [Q(p.$slots, 'default')]), _: 3 },
                  16,
                  ['aria-controls', 'aria-describedby', 'aria-expanded', 'aria-haspopup'],
                ))
        )
      },
    }),
  )
var Wo = te(Ko, [
    [
      '__file',
      '/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue',
    ],
  ]),
  H = 'top',
  U = 'bottom',
  z = 'right',
  K = 'left',
  mt = 'auto',
  je = [H, U, z, K],
  Ae = 'start',
  xe = 'end',
  Uo = 'clippingParents',
  Tn = 'viewport',
  Be = 'popper',
  zo = 'reference',
  Yt = je.reduce(function (e, t) {
    return e.concat([t + '-' + Ae, t + '-' + xe])
  }, []),
  gt = [].concat(je, [mt]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Ae, t + '-' + xe])
  }, []),
  Vo = 'beforeRead',
  qo = 'read',
  Yo = 'afterRead',
  Jo = 'beforeMain',
  Go = 'main',
  Zo = 'afterMain',
  Xo = 'beforeWrite',
  Qo = 'write',
  er = 'afterWrite',
  tr = [Vo, qo, Yo, Jo, Go, Zo, Xo, Qo, er]
function ee(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function Y(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function _e(e) {
  var t = Y(e).Element
  return e instanceof t || e instanceof Element
}
function W(e) {
  var t = Y(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function ht(e) {
  if (typeof ShadowRoot == 'undefined') return !1
  var t = Y(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function nr(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (n) {
    var o = t.styles[n] || {},
      r = t.attributes[n] || {},
      a = t.elements[n]
    !W(a) ||
      !ee(a) ||
      (Object.assign(a.style, o),
      Object.keys(r).forEach(function (s) {
        var l = r[s]
        l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? '' : l)
      }))
  })
}
function or(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var r = t.elements[o],
          a = t.attributes[o] || {},
          s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
          l = s.reduce(function (i, u) {
            return (i[u] = ''), i
          }, {})
        !W(r) ||
          !ee(r) ||
          (Object.assign(r.style, l),
          Object.keys(a).forEach(function (i) {
            r.removeAttribute(i)
          }))
      })
    }
  )
}
var Cn = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: nr,
  effect: or,
  requires: ['computeStyles'],
}
function X(e) {
  return e.split('-')[0]
}
var he = Math.max,
  Ge = Math.min,
  Ie = Math.round
function Re(e, t) {
  t === void 0 && (t = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    r = 1
  if (W(e) && t) {
    var a = e.offsetHeight,
      s = e.offsetWidth
    s > 0 && (o = Ie(n.width) / s || 1), a > 0 && (r = Ie(n.height) / a || 1)
  }
  return {
    width: n.width / o,
    height: n.height / r,
    top: n.top / r,
    right: n.right / o,
    bottom: n.bottom / r,
    left: n.left / o,
    x: n.left / o,
    y: n.top / r,
  }
}
function bt(e) {
  var t = Re(e),
    n = e.offsetWidth,
    o = e.offsetHeight
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
  )
}
function Sn(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && ht(n)) {
    var o = t
    do {
      if (o && e.isSameNode(o)) return !0
      o = o.parentNode || o.host
    } while (o)
  }
  return !1
}
function re(e) {
  return Y(e).getComputedStyle(e)
}
function rr(e) {
  return ['table', 'td', 'th'].indexOf(ee(e)) >= 0
}
function de(e) {
  return ((_e(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Xe(e) {
  return ee(e) === 'html' ? e : e.assignedSlot || e.parentNode || (ht(e) ? e.host : null) || de(e)
}
function Jt(e) {
  return !W(e) || re(e).position === 'fixed' ? null : e.offsetParent
}
function ar(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    n = navigator.userAgent.indexOf('Trident') !== -1
  if (n && W(e)) {
    var o = re(e)
    if (o.position === 'fixed') return null
  }
  var r = Xe(e)
  for (ht(r) && (r = r.host); W(r) && ['html', 'body'].indexOf(ee(r)) < 0; ) {
    var a = re(r)
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function He(e) {
  for (var t = Y(e), n = Jt(e); n && rr(n) && re(n).position === 'static'; ) n = Jt(n)
  return n && (ee(n) === 'html' || (ee(n) === 'body' && re(n).position === 'static'))
    ? t
    : n || ar(e) || t
}
function yt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function $e(e, t, n) {
  return he(e, Ge(t, n))
}
function sr(e, t, n) {
  var o = $e(e, t, n)
  return o > n ? n : o
}
function Pn() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function An(e) {
  return Object.assign({}, Pn(), e)
}
function _n(e, t) {
  return t.reduce(function (n, o) {
    return (n[o] = e), n
  }, {})
}
var ir = function (e, t) {
  return (
    (e = typeof e == 'function' ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    An(typeof e != 'number' ? e : _n(e, je))
  )
}
function lr(e) {
  var t,
    n = e.state,
    o = e.name,
    r = e.options,
    a = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    l = X(n.placement),
    i = yt(l),
    u = [K, z].indexOf(l) >= 0,
    p = u ? 'height' : 'width'
  if (!(!a || !s)) {
    var m = ir(r.padding, n),
      v = bt(a),
      c = i === 'y' ? H : K,
      f = i === 'y' ? U : z,
      d = n.rects.reference[p] + n.rects.reference[i] - s[i] - n.rects.popper[p],
      h = s[i] - n.rects.reference[i],
      g = He(a),
      b = g ? (i === 'y' ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      T = d / 2 - h / 2,
      E = m[c],
      P = b - v[p] - m[f],
      C = b / 2 - v[p] / 2 + T,
      y = $e(E, C, P),
      S = i
    n.modifiersData[o] = ((t = {}), (t[S] = y), (t.centerOffset = y - C), t)
  }
}
function ur(e) {
  var t = e.state,
    n = e.options,
    o = n.element,
    r = o === void 0 ? '[data-popper-arrow]' : o
  r != null &&
    ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
      !Sn(t.elements.popper, r) ||
      (t.elements.arrow = r))
}
var cr = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: lr,
  effect: ur,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function ke(e) {
  return e.split('-')[1]
}
var pr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function fr(e) {
  var t = e.x,
    n = e.y,
    o = window,
    r = o.devicePixelRatio || 1
  return { x: Ie(t * r) / r || 0, y: Ie(n * r) / r || 0 }
}
function Gt(e) {
  var t,
    n = e.popper,
    o = e.popperRect,
    r = e.placement,
    a = e.variation,
    s = e.offsets,
    l = e.position,
    i = e.gpuAcceleration,
    u = e.adaptive,
    p = e.roundOffsets,
    m = e.isFixed,
    v = s.x,
    c = v === void 0 ? 0 : v,
    f = s.y,
    d = f === void 0 ? 0 : f,
    h = typeof p == 'function' ? p({ x: c, y: d }) : { x: c, y: d }
  ;(c = h.x), (d = h.y)
  var g = s.hasOwnProperty('x'),
    b = s.hasOwnProperty('y'),
    T = K,
    E = H,
    P = window
  if (u) {
    var C = He(n),
      y = 'clientHeight',
      S = 'clientWidth'
    if (
      (C === Y(n) &&
        ((C = de(n)),
        re(C).position !== 'static' &&
          l === 'absolute' &&
          ((y = 'scrollHeight'), (S = 'scrollWidth'))),
      (C = C),
      r === H || ((r === K || r === z) && a === xe))
    ) {
      E = U
      var L = m && C === P && P.visualViewport ? P.visualViewport.height : C[y]
      ;(d -= L - o.height), (d *= i ? 1 : -1)
    }
    if (r === K || ((r === H || r === U) && a === xe)) {
      T = z
      var M = m && C === P && P.visualViewport ? P.visualViewport.width : C[S]
      ;(c -= M - o.width), (c *= i ? 1 : -1)
    }
  }
  var B = Object.assign({ position: l }, u && pr),
    D = p === !0 ? fr({ x: c, y: d }) : { x: c, y: d }
  if (((c = D.x), (d = D.y), i)) {
    var F
    return Object.assign(
      {},
      B,
      ((F = {}),
      (F[E] = b ? '0' : ''),
      (F[T] = g ? '0' : ''),
      (F.transform =
        (P.devicePixelRatio || 1) <= 1
          ? 'translate(' + c + 'px, ' + d + 'px)'
          : 'translate3d(' + c + 'px, ' + d + 'px, 0)'),
      F),
    )
  }
  return Object.assign(
    {},
    B,
    ((t = {}), (t[E] = b ? d + 'px' : ''), (t[T] = g ? c + 'px' : ''), (t.transform = ''), t),
  )
}
function dr(e) {
  var t = e.state,
    n = e.options,
    o = n.gpuAcceleration,
    r = o === void 0 ? !0 : o,
    a = n.adaptive,
    s = a === void 0 ? !0 : a,
    l = n.roundOffsets,
    i = l === void 0 ? !0 : l,
    u = {
      placement: X(t.placement),
      variation: ke(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Gt(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: i,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Gt(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: i,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
var In = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: dr, data: {} },
  Ve = { passive: !0 }
function vr(e) {
  var t = e.state,
    n = e.instance,
    o = e.options,
    r = o.scroll,
    a = r === void 0 ? !0 : r,
    s = o.resize,
    l = s === void 0 ? !0 : s,
    i = Y(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    a &&
      u.forEach(function (p) {
        p.addEventListener('scroll', n.update, Ve)
      }),
    l && i.addEventListener('resize', n.update, Ve),
    function () {
      a &&
        u.forEach(function (p) {
          p.removeEventListener('scroll', n.update, Ve)
        }),
        l && i.removeEventListener('resize', n.update, Ve)
    }
  )
}
var Rn = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: vr,
    data: {},
  },
  mr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function qe(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return mr[t]
  })
}
var gr = { start: 'end', end: 'start' }
function Zt(e) {
  return e.replace(/start|end/g, function (t) {
    return gr[t]
  })
}
function wt(e) {
  var t = Y(e),
    n = t.pageXOffset,
    o = t.pageYOffset
  return { scrollLeft: n, scrollTop: o }
}
function Et(e) {
  return Re(de(e)).left + wt(e).scrollLeft
}
function hr(e) {
  var t = Y(e),
    n = de(e),
    o = t.visualViewport,
    r = n.clientWidth,
    a = n.clientHeight,
    s = 0,
    l = 0
  return (
    o &&
      ((r = o.width),
      (a = o.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((s = o.offsetLeft), (l = o.offsetTop))),
    { width: r, height: a, x: s + Et(e), y: l }
  )
}
function br(e) {
  var t,
    n = de(e),
    o = wt(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = he(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    s = he(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    l = -o.scrollLeft + Et(e),
    i = -o.scrollTop
  return (
    re(r || n).direction === 'rtl' && (l += he(n.clientWidth, r ? r.clientWidth : 0) - a),
    { width: a, height: s, x: l, y: i }
  )
}
function Ot(e) {
  var t = re(e),
    n = t.overflow,
    o = t.overflowX,
    r = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + r + o)
}
function kn(e) {
  return ['html', 'body', '#document'].indexOf(ee(e)) >= 0
    ? e.ownerDocument.body
    : W(e) && Ot(e)
    ? e
    : kn(Xe(e))
}
function Me(e, t) {
  var n
  t === void 0 && (t = [])
  var o = kn(e),
    r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = Y(o),
    s = r ? [a].concat(a.visualViewport || [], Ot(o) ? o : []) : o,
    l = t.concat(s)
  return r ? l : l.concat(Me(Xe(s)))
}
function ut(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function yr(e) {
  var t = Re(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function Xt(e, t) {
  return t === Tn ? ut(hr(e)) : _e(t) ? yr(t) : ut(br(de(e)))
}
function wr(e) {
  var t = Me(Xe(e)),
    n = ['absolute', 'fixed'].indexOf(re(e).position) >= 0,
    o = n && W(e) ? He(e) : e
  return _e(o)
    ? t.filter(function (r) {
        return _e(r) && Sn(r, o) && ee(r) !== 'body'
      })
    : []
}
function Er(e, t, n) {
  var o = t === 'clippingParents' ? wr(e) : [].concat(t),
    r = [].concat(o, [n]),
    a = r[0],
    s = r.reduce(function (l, i) {
      var u = Xt(e, i)
      return (
        (l.top = he(u.top, l.top)),
        (l.right = Ge(u.right, l.right)),
        (l.bottom = Ge(u.bottom, l.bottom)),
        (l.left = he(u.left, l.left)),
        l
      )
    }, Xt(e, a))
  return (
    (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s
  )
}
function Ln(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    r = o ? X(o) : null,
    a = o ? ke(o) : null,
    s = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    i
  switch (r) {
    case H:
      i = { x: s, y: t.y - n.height }
      break
    case U:
      i = { x: s, y: t.y + t.height }
      break
    case z:
      i = { x: t.x + t.width, y: l }
      break
    case K:
      i = { x: t.x - n.width, y: l }
      break
    default:
      i = { x: t.x, y: t.y }
  }
  var u = r ? yt(r) : null
  if (u != null) {
    var p = u === 'y' ? 'height' : 'width'
    switch (a) {
      case Ae:
        i[u] = i[u] - (t[p] / 2 - n[p] / 2)
        break
      case xe:
        i[u] = i[u] + (t[p] / 2 - n[p] / 2)
        break
    }
  }
  return i
}
function De(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = o === void 0 ? e.placement : o,
    a = n.boundary,
    s = a === void 0 ? Uo : a,
    l = n.rootBoundary,
    i = l === void 0 ? Tn : l,
    u = n.elementContext,
    p = u === void 0 ? Be : u,
    m = n.altBoundary,
    v = m === void 0 ? !1 : m,
    c = n.padding,
    f = c === void 0 ? 0 : c,
    d = An(typeof f != 'number' ? f : _n(f, je)),
    h = p === Be ? zo : Be,
    g = e.rects.popper,
    b = e.elements[v ? h : p],
    T = Er(_e(b) ? b : b.contextElement || de(e.elements.popper), s, i),
    E = Re(e.elements.reference),
    P = Ln({ reference: E, element: g, strategy: 'absolute', placement: r }),
    C = ut(Object.assign({}, g, P)),
    y = p === Be ? C : E,
    S = {
      top: T.top - y.top + d.top,
      bottom: y.bottom - T.bottom + d.bottom,
      left: T.left - y.left + d.left,
      right: y.right - T.right + d.right,
    },
    L = e.modifiersData.offset
  if (p === Be && L) {
    var M = L[r]
    Object.keys(S).forEach(function (B) {
      var D = [z, U].indexOf(B) >= 0 ? 1 : -1,
        F = [H, U].indexOf(B) >= 0 ? 'y' : 'x'
      S[B] += M[F] * D
    })
  }
  return S
}
function Or(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = n.boundary,
    a = n.rootBoundary,
    s = n.padding,
    l = n.flipVariations,
    i = n.allowedAutoPlacements,
    u = i === void 0 ? gt : i,
    p = ke(o),
    m = p
      ? l
        ? Yt
        : Yt.filter(function (f) {
            return ke(f) === p
          })
      : je,
    v = m.filter(function (f) {
      return u.indexOf(f) >= 0
    })
  v.length === 0 && (v = m)
  var c = v.reduce(function (f, d) {
    return (f[d] = De(e, { placement: d, boundary: r, rootBoundary: a, padding: s })[X(d)]), f
  }, {})
  return Object.keys(c).sort(function (f, d) {
    return c[f] - c[d]
  })
}
function Tr(e) {
  if (X(e) === mt) return []
  var t = qe(e)
  return [Zt(e), t, Zt(t)]
}
function Cr(e) {
  var t = e.state,
    n = e.options,
    o = e.name
  if (!t.modifiersData[o]._skip) {
    for (
      var r = n.mainAxis,
        a = r === void 0 ? !0 : r,
        s = n.altAxis,
        l = s === void 0 ? !0 : s,
        i = n.fallbackPlacements,
        u = n.padding,
        p = n.boundary,
        m = n.rootBoundary,
        v = n.altBoundary,
        c = n.flipVariations,
        f = c === void 0 ? !0 : c,
        d = n.allowedAutoPlacements,
        h = t.options.placement,
        g = X(h),
        b = g === h,
        T = i || (b || !f ? [qe(h)] : Tr(h)),
        E = [h].concat(T).reduce(function (me, ne) {
          return me.concat(
            X(ne) === mt
              ? Or(t, {
                  placement: ne,
                  boundary: p,
                  rootBoundary: m,
                  padding: u,
                  flipVariations: f,
                  allowedAutoPlacements: d,
                })
              : ne,
          )
        }, []),
        P = t.rects.reference,
        C = t.rects.popper,
        y = new Map(),
        S = !0,
        L = E[0],
        M = 0;
      M < E.length;
      M++
    ) {
      var B = E[M],
        D = X(B),
        F = ke(B) === Ae,
        O = [H, U].indexOf(D) >= 0,
        A = O ? 'width' : 'height',
        _ = De(t, { placement: B, boundary: p, rootBoundary: m, altBoundary: v, padding: u }),
        R = O ? (F ? z : K) : F ? U : H
      P[A] > C[A] && (R = qe(R))
      var J = qe(R),
        q = []
      if (
        (a && q.push(_[D] <= 0),
        l && q.push(_[R] <= 0, _[J] <= 0),
        q.every(function (me) {
          return me
        }))
      ) {
        ;(L = B), (S = !1)
        break
      }
      y.set(B, q)
    }
    if (S)
      for (
        var ye = f ? 3 : 1,
          we = function (me) {
            var ne = E.find(function (Ke) {
              var Ne = y.get(Ke)
              if (Ne)
                return Ne.slice(0, me).every(function (Ee) {
                  return Ee
                })
            })
            if (ne) return (L = ne), 'break'
          },
          se = ye;
        se > 0;
        se--
      ) {
        var ve = we(se)
        if (ve === 'break') break
      }
    t.placement !== L && ((t.modifiersData[o]._skip = !0), (t.placement = L), (t.reset = !0))
  }
}
var Sr = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Cr,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
}
function Qt(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  )
}
function en(e) {
  return [H, z, U, K].some(function (t) {
    return e[t] >= 0
  })
}
function Pr(e) {
  var t = e.state,
    n = e.name,
    o = t.rects.reference,
    r = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    s = De(t, { elementContext: 'reference' }),
    l = De(t, { altBoundary: !0 }),
    i = Qt(s, o),
    u = Qt(l, r, a),
    p = en(i),
    m = en(u)
  ;(t.modifiersData[n] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': m,
    }))
}
var Ar = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Pr }
function _r(e, t, n) {
  var o = X(e),
    r = [K, H].indexOf(o) >= 0 ? -1 : 1,
    a = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    s = a[0],
    l = a[1]
  return (s = s || 0), (l = (l || 0) * r), [K, z].indexOf(o) >= 0 ? { x: l, y: s } : { x: s, y: l }
}
function Ir(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.offset,
    a = r === void 0 ? [0, 0] : r,
    s = gt.reduce(function (p, m) {
      return (p[m] = _r(m, t.rects, a)), p
    }, {}),
    l = s[t.placement],
    i = l.x,
    u = l.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += i), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[o] = s)
}
var Rr = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Ir }
function kr(e) {
  var t = e.state,
    n = e.name
  t.modifiersData[n] = Ln({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
var Nn = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: kr, data: {} }
function Lr(e) {
  return e === 'x' ? 'y' : 'x'
}
function Nr(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.mainAxis,
    a = r === void 0 ? !0 : r,
    s = n.altAxis,
    l = s === void 0 ? !1 : s,
    i = n.boundary,
    u = n.rootBoundary,
    p = n.altBoundary,
    m = n.padding,
    v = n.tether,
    c = v === void 0 ? !0 : v,
    f = n.tetherOffset,
    d = f === void 0 ? 0 : f,
    h = De(t, { boundary: i, rootBoundary: u, padding: m, altBoundary: p }),
    g = X(t.placement),
    b = ke(t.placement),
    T = !b,
    E = yt(g),
    P = Lr(E),
    C = t.modifiersData.popperOffsets,
    y = t.rects.reference,
    S = t.rects.popper,
    L = typeof d == 'function' ? d(Object.assign({}, t.rects, { placement: t.placement })) : d,
    M =
      typeof L == 'number'
        ? { mainAxis: L, altAxis: L }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    D = { x: 0, y: 0 }
  if (C) {
    if (a) {
      var F,
        O = E === 'y' ? H : K,
        A = E === 'y' ? U : z,
        _ = E === 'y' ? 'height' : 'width',
        R = C[E],
        J = R + h[O],
        q = R - h[A],
        ye = c ? -S[_] / 2 : 0,
        we = b === Ae ? y[_] : S[_],
        se = b === Ae ? -S[_] : -y[_],
        ve = t.elements.arrow,
        me = c && ve ? bt(ve) : { width: 0, height: 0 },
        ne = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Pn(),
        Ke = ne[O],
        Ne = ne[A],
        Ee = $e(0, y[_], me[_]),
        Mn = T ? y[_] / 2 - ye - Ee - Ke - M.mainAxis : we - Ee - Ke - M.mainAxis,
        Fn = T ? -y[_] / 2 + ye + Ee + Ne + M.mainAxis : se + Ee + Ne + M.mainAxis,
        Qe = t.elements.arrow && He(t.elements.arrow),
        xn = Qe ? (E === 'y' ? Qe.clientTop || 0 : Qe.clientLeft || 0) : 0,
        At = (F = B == null ? void 0 : B[E]) != null ? F : 0,
        Dn = R + Mn - At - xn,
        jn = R + Fn - At,
        _t = $e(c ? Ge(J, Dn) : J, R, c ? he(q, jn) : q)
      ;(C[E] = _t), (D[E] = _t - R)
    }
    if (l) {
      var It,
        Hn = E === 'x' ? H : K,
        Kn = E === 'x' ? U : z,
        ge = C[P],
        We = P === 'y' ? 'height' : 'width',
        Rt = ge + h[Hn],
        kt = ge - h[Kn],
        et = [H, K].indexOf(g) !== -1,
        Lt = (It = B == null ? void 0 : B[P]) != null ? It : 0,
        Nt = et ? Rt : ge - y[We] - S[We] - Lt + M.altAxis,
        Bt = et ? ge + y[We] + S[We] - Lt - M.altAxis : kt,
        $t = c && et ? sr(Nt, ge, Bt) : $e(c ? Nt : Rt, ge, c ? Bt : kt)
      ;(C[P] = $t), (D[P] = $t - ge)
    }
    t.modifiersData[o] = D
  }
}
var Br = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Nr,
  requiresIfExists: ['offset'],
}
function $r(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function Mr(e) {
  return e === Y(e) || !W(e) ? wt(e) : $r(e)
}
function Fr(e) {
  var t = e.getBoundingClientRect(),
    n = Ie(t.width) / e.offsetWidth || 1,
    o = Ie(t.height) / e.offsetHeight || 1
  return n !== 1 || o !== 1
}
function xr(e, t, n) {
  n === void 0 && (n = !1)
  var o = W(t),
    r = W(t) && Fr(t),
    a = de(t),
    s = Re(e, r),
    l = { scrollLeft: 0, scrollTop: 0 },
    i = { x: 0, y: 0 }
  return (
    (o || (!o && !n)) &&
      ((ee(t) !== 'body' || Ot(a)) && (l = Mr(t)),
      W(t) ? ((i = Re(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop)) : a && (i.x = Et(a))),
    {
      x: s.left + l.scrollLeft - i.x,
      y: s.top + l.scrollTop - i.y,
      width: s.width,
      height: s.height,
    }
  )
}
function Dr(e) {
  var t = new Map(),
    n = new Set(),
    o = []
  e.forEach(function (a) {
    t.set(a.name, a)
  })
  function r(a) {
    n.add(a.name)
    var s = [].concat(a.requires || [], a.requiresIfExists || [])
    s.forEach(function (l) {
      if (!n.has(l)) {
        var i = t.get(l)
        i && r(i)
      }
    }),
      o.push(a)
  }
  return (
    e.forEach(function (a) {
      n.has(a.name) || r(a)
    }),
    o
  )
}
function jr(e) {
  var t = Dr(e)
  return tr.reduce(function (n, o) {
    return n.concat(
      t.filter(function (r) {
        return r.phase === o
      }),
    )
  }, [])
}
function Hr(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(t = void 0), n(e())
          })
        })),
      t
    )
  }
}
function Kr(e) {
  var t = e.reduce(function (n, o) {
    var r = n[o.name]
    return (
      (n[o.name] = r
        ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data),
          })
        : o),
      n
    )
  }, {})
  return Object.keys(t).map(function (n) {
    return t[n]
  })
}
var tn = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function nn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == 'function')
  })
}
function Tt(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    r = t.defaultOptions,
    a = r === void 0 ? tn : r
  return function (s, l, i) {
    i === void 0 && (i = a)
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, tn, a),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      p = [],
      m = !1,
      v = {
        state: u,
        setOptions: function (d) {
          var h = typeof d == 'function' ? d(u.options) : d
          f(),
            (u.options = Object.assign({}, a, u.options, h)),
            (u.scrollParents = {
              reference: _e(s) ? Me(s) : s.contextElement ? Me(s.contextElement) : [],
              popper: Me(l),
            })
          var g = jr(Kr([].concat(o, u.options.modifiers)))
          return (
            (u.orderedModifiers = g.filter(function (b) {
              return b.enabled
            })),
            c(),
            v.update()
          )
        },
        forceUpdate: function () {
          if (!m) {
            var d = u.elements,
              h = d.reference,
              g = d.popper
            if (nn(h, g)) {
              ;(u.rects = {
                reference: xr(h, He(g), u.options.strategy === 'fixed'),
                popper: bt(g),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (S) {
                  return (u.modifiersData[S.name] = Object.assign({}, S.data))
                })
              for (var b = 0; b < u.orderedModifiers.length; b++) {
                if (u.reset === !0) {
                  ;(u.reset = !1), (b = -1)
                  continue
                }
                var T = u.orderedModifiers[b],
                  E = T.fn,
                  P = T.options,
                  C = P === void 0 ? {} : P,
                  y = T.name
                typeof E == 'function' &&
                  (u = E({ state: u, options: C, name: y, instance: v }) || u)
              }
            }
          }
        },
        update: Hr(function () {
          return new Promise(function (d) {
            v.forceUpdate(), d(u)
          })
        }),
        destroy: function () {
          f(), (m = !0)
        },
      }
    if (!nn(s, l)) return v
    v.setOptions(i).then(function (d) {
      !m && i.onFirstUpdate && i.onFirstUpdate(d)
    })
    function c() {
      u.orderedModifiers.forEach(function (d) {
        var h = d.name,
          g = d.options,
          b = g === void 0 ? {} : g,
          T = d.effect
        if (typeof T == 'function') {
          var E = T({ state: u, name: h, instance: v, options: b }),
            P = function () {}
          p.push(E || P)
        }
      })
    }
    function f() {
      p.forEach(function (d) {
        return d()
      }),
        (p = [])
    }
    return v
  }
}
Tt()
var Wr = [Rn, Nn, In, Cn]
Tt({ defaultModifiers: Wr })
var Ur = [Rn, Nn, In, Cn, Rr, Sr, Br, cr, Ar],
  zr = Tt({ defaultModifiers: Ur })
const Bn = (e) => {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const r = o.tagName === 'INPUT' && o.type === 'hidden'
          return o.disabled || o.hidden || r
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0 || o === document.activeElement
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
        },
      })
    for (; n.nextNode(); ) t.push(n.currentNode)
    return t
  },
  on = (e, t) => {
    for (const n of e) if (!Vr(n, t)) return n
  },
  Vr = (e, t) => {
    if (getComputedStyle(e).visibility === 'hidden') return !0
    for (; e; ) {
      if (t && e === t) return !1
      if (getComputedStyle(e).display === 'none') return !0
      e = e.parentElement
    }
    return !1
  },
  qr = (e) => {
    const t = Bn(e),
      n = on(t, e),
      o = on(t.reverse(), e)
    return [n, o]
  },
  Yr = (e) => e instanceof HTMLInputElement && 'select' in e,
  ie = (e, t) => {
    if (e && e.focus) {
      const n = document.activeElement
      e.focus({ preventScroll: !0 }), e !== n && Yr(e) && t && e.select()
    }
  }
function rn(e, t) {
  const n = [...e],
    o = e.indexOf(t)
  return o !== -1 && n.splice(o, 1), n
}
const Jr = () => {
    let e = []
    return {
      push: (o) => {
        const r = e[0]
        r && o !== r && r.pause(), (e = rn(e, o)), e.unshift(o)
      },
      remove: (o) => {
        var r, a
        ;(e = rn(e, o)), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r)
      },
    }
  },
  Gr = (e, t = !1) => {
    const n = document.activeElement
    for (const o of e) if ((ie(o, t), document.activeElement !== n)) return
  },
  an = Jr(),
  nt = 'focus-trap.focus-after-trapped',
  ot = 'focus-trap.focus-after-released',
  sn = { cancelable: !0, bubbles: !1 },
  ln = 'focusAfterTrapped',
  un = 'focusAfterReleased',
  Zr = Symbol('elFocusTrap'),
  Xr = ae({
    name: 'ElFocusTrap',
    inheritAttrs: !1,
    props: {
      loop: Boolean,
      trapped: Boolean,
      focusTrapEl: Object,
      focusStartEl: { type: [Object, String], default: 'first' },
    },
    emits: [ln, un, 'focusin', 'focusout', 'focusout-prevented', 'release-requested'],
    setup(e, { emit: t }) {
      const n = I()
      let o, r
      So((c) => {
        e.trapped && !a.paused && t('release-requested', c)
      })
      const a = {
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          },
        },
        s = (c) => {
          if ((!e.loop && !e.trapped) || a.paused) return
          const { key: f, altKey: d, ctrlKey: h, metaKey: g, currentTarget: b, shiftKey: T } = c,
            { loop: E } = e,
            P = f === Z.tab && !d && !h && !g,
            C = document.activeElement
          if (P && C) {
            const y = b,
              [S, L] = qr(y)
            S && L
              ? !T && C === L
                ? (c.preventDefault(), E && ie(S, !0), t('focusout-prevented'))
                : T &&
                  [S, y].includes(C) &&
                  (c.preventDefault(), E && ie(L, !0), t('focusout-prevented'))
              : C === y && (c.preventDefault(), t('focusout-prevented'))
          }
        }
      pe(Zr, { focusTrapRef: n, onKeydown: s }),
        x(
          () => e.focusTrapEl,
          (c) => {
            c && (n.value = c)
          },
          { immediate: !0 },
        ),
        x([n], ([c], [f]) => {
          c &&
            (c.addEventListener('keydown', s),
            c.addEventListener('focusin', u),
            c.addEventListener('focusout', p)),
            f &&
              (f.removeEventListener('keydown', s),
              f.removeEventListener('focusin', u),
              f.removeEventListener('focusout', p))
        })
      const l = (c) => {
          t(ln, c)
        },
        i = (c) => t(un, c),
        u = (c) => {
          const f = w(n)
          if (!f) return
          const d = c.target,
            h = d && f.contains(d)
          h && t('focusin', c), !a.paused && e.trapped && (h ? (r = d) : ie(r, !0))
        },
        p = (c) => {
          const f = w(n)
          if (!(a.paused || !f))
            if (e.trapped) {
              const d = c.relatedTarget
              !ft(d) &&
                !f.contains(d) &&
                setTimeout(() => {
                  !a.paused && e.trapped && ie(r, !0)
                }, 0)
            } else {
              const d = c.target
              ;(d && f.contains(d)) || t('focusout', c)
            }
        }
      function m() {
        return xt(this, null, function* () {
          yield Dt()
          const c = w(n)
          if (c) {
            an.push(a)
            const f = document.activeElement
            if (((o = f), !c.contains(f))) {
              const h = new Event(nt, sn)
              c.addEventListener(nt, l),
                c.dispatchEvent(h),
                h.defaultPrevented ||
                  Dt(() => {
                    let g = e.focusStartEl
                    no(g) || (ie(g), document.activeElement !== g && (g = 'first')),
                      g === 'first' && Gr(Bn(c), !0),
                      (document.activeElement === f || g === 'container') && ie(c)
                  })
            }
          }
        })
      }
      function v() {
        const c = w(n)
        if (c) {
          c.removeEventListener(nt, l)
          const f = new Event(ot, sn)
          c.addEventListener(ot, i),
            c.dispatchEvent(f),
            f.defaultPrevented || ie(o != null ? o : document.body, !0),
            c.removeEventListener(ot, l),
            an.remove(a)
        }
      }
      return (
        Le(() => {
          e.trapped && m(),
            x(
              () => e.trapped,
              (c) => {
                c ? m() : v()
              },
            )
        }),
        be(() => {
          e.trapped && v()
        }),
        { onKeydown: s }
      )
    },
  })
function Qr(e, t, n, o, r, a) {
  return Q(e.$slots, 'default', { handleKeydown: e.onKeydown })
}
var ea = te(Xr, [
  ['render', Qr],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue',
  ],
])
const ta = ['fixed', 'absolute'],
  na = V({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: N(Array), default: () => [] },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: gt, default: 'bottom' },
    popperOptions: { type: N(Object), default: () => ({}) },
    strategy: { type: String, values: ta, default: 'absolute' },
  }),
  $n = V(
    j(k({}, na), {
      id: String,
      style: { type: N([String, Array, Object]) },
      className: { type: N([String, Array, Object]) },
      effect: { type: String, default: 'dark' },
      visible: Boolean,
      enterable: { type: Boolean, default: !0 },
      pure: Boolean,
      focusOnShow: { type: Boolean, default: !1 },
      trapping: { type: Boolean, default: !1 },
      popperClass: { type: N([String, Array, Object]) },
      popperStyle: { type: N([String, Array, Object]) },
      referenceEl: { type: N(Object) },
      triggerTargetEl: { type: N(Object) },
      stopPopperMouseEvent: { type: Boolean, default: !0 },
      ariaLabel: { type: String, default: void 0 },
      virtualTriggering: Boolean,
      zIndex: Number,
    }),
  ),
  oa = ['mouseenter', 'mouseleave', 'focus', 'blur', 'close'],
  cn = (e, t) => {
    const { placement: n, strategy: o, popperOptions: r } = e,
      a = j(k({ placement: n, strategy: o }, r), { modifiers: aa(e) })
    return sa(a, t), ia(a, r == null ? void 0 : r.modifiers), a
  },
  ra = (e) => {
    if (!!ce) return le(e)
  }
function aa(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e
  return [
    { name: 'offset', options: { offset: [0, t != null ? t : 12] } },
    { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
    { name: 'flip', options: { padding: 5, fallbackPlacements: o != null ? o : [] } },
    { name: 'computeStyles', options: { gpuAcceleration: n, adaptive: n } },
  ]
}
function sa(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({ name: 'arrow', options: { element: t, padding: n != null ? n : 5 } })
}
function ia(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t != null ? t : [])])
}
const la = { name: 'ElPopperContent' },
  ua = ae(
    j(k({}, la), {
      props: $n,
      emits: oa,
      setup(e, { expose: t, emit: n }) {
        const o = e,
          { popperInstanceRef: r, contentRef: a, triggerRef: s, role: l } = fe(vt, void 0),
          i = fe(jt, void 0),
          { nextZIndex: u } = Lo(),
          p = Ze('popper'),
          m = I(),
          v = I('first'),
          c = I(),
          f = I()
        pe(mn, { arrowRef: c, arrowOffset: f }),
          i &&
            (i.addInputId || i.removeInputId) &&
            pe(jt, j(k({}, i), { addInputId: rt, removeInputId: rt }))
        const d = I(o.zIndex || u()),
          h = I(!1)
        let g
        const b = $(() => ra(o.referenceEl) || w(s)),
          T = $(() => [{ zIndex: w(d) }, o.popperStyle]),
          E = $(() => [p.b(), p.is('pure', o.pure), p.is(o.effect), o.popperClass]),
          P = $(() => (l && l.value === 'dialog' ? 'false' : void 0)),
          C = ({ referenceEl: O, popperContentEl: A, arrowEl: _ }) => {
            const R = cn(o, { arrowEl: _, arrowOffset: w(f) })
            return zr(O, A, R)
          },
          y = (O = !0) => {
            var A
            ;(A = w(r)) == null || A.update(), O && (d.value = o.zIndex || u())
          },
          S = () => {
            var O, A
            const _ = { name: 'eventListeners', enabled: o.visible }
            ;(A = (O = w(r)) == null ? void 0 : O.setOptions) == null ||
              A.call(O, (R) => j(k({}, R), { modifiers: [...(R.modifiers || []), _] })),
              y(!1),
              o.visible && o.focusOnShow ? (h.value = !0) : o.visible === !1 && (h.value = !1)
          },
          L = () => {
            n('focus')
          },
          M = () => {
            ;(v.value = 'first'), n('blur')
          },
          B = (O) => {
            var A
            o.visible &&
              !h.value &&
              (O.target && (v.value = O.target),
              (h.value = !0),
              O.relatedTarget && ((A = O.relatedTarget) == null || A.focus()))
          },
          D = () => {
            o.trapping || (h.value = !1)
          },
          F = () => {
            ;(h.value = !1), n('close')
          }
        return (
          Le(() => {
            let O
            x(
              b,
              (A) => {
                var _
                O == null || O()
                const R = w(r)
                if (((_ = R == null ? void 0 : R.destroy) == null || _.call(R), A)) {
                  const J = w(m)
                  ;(a.value = J),
                    (r.value = C({ referenceEl: A, popperContentEl: J, arrowEl: w(c) })),
                    (O = x(
                      () => A.getBoundingClientRect(),
                      () => y(),
                      { immediate: !0 },
                    ))
                } else r.value = void 0
              },
              { immediate: !0 },
            ),
              x(
                () => o.triggerTargetEl,
                (A, _) => {
                  g == null || g(), (g = void 0)
                  const R = w(A || m.value),
                    J = w(_ || m.value)
                  if (Je(R)) {
                    const { ariaLabel: q, id: ye } = oo(o)
                    g = x(
                      [l, q, P, ye],
                      (we) => {
                        ;['role', 'aria-label', 'aria-modal', 'id'].forEach((se, ve) => {
                          ft(we[ve]) ? R.removeAttribute(se) : R.setAttribute(se, we[ve])
                        })
                      },
                      { immediate: !0 },
                    )
                  }
                  Je(J) &&
                    ['role', 'aria-label', 'aria-modal', 'id'].forEach((q) => {
                      J.removeAttribute(q)
                    })
                },
                { immediate: !0 },
              ),
              x(() => o.visible, S, { immediate: !0 }),
              x(
                () => cn(o, { arrowEl: w(c), arrowOffset: w(f) }),
                (A) => {
                  var _
                  return (_ = r.value) == null ? void 0 : _.setOptions(A)
                },
              )
          }),
          be(() => {
            g == null || g(), (g = void 0)
          }),
          t({ popperContentRef: m, popperInstanceRef: r, updatePopper: y, contentStyle: T }),
          (O, A) => (
            G(),
            Ye(
              'div',
              {
                ref_key: 'popperContentRef',
                ref: m,
                style: ro(w(T)),
                class: ct(w(E)),
                tabindex: '-1',
                onMouseenter: A[0] || (A[0] = (_) => O.$emit('mouseenter', _)),
                onMouseleave: A[1] || (A[1] = (_) => O.$emit('mouseleave', _)),
              },
              [
                Fe(
                  w(ea),
                  {
                    trapped: h.value,
                    'trap-on-focus-in': !0,
                    'focus-trap-el': m.value,
                    'focus-start-el': v.value,
                    onFocusAfterTrapped: L,
                    onFocusAfterReleased: M,
                    onFocusin: B,
                    onFocusoutPrevented: D,
                    onReleaseRequested: F,
                  },
                  { default: ue(() => [Q(O.$slots, 'default')]), _: 3 },
                  8,
                  ['trapped', 'focus-trap-el', 'focus-start-el'],
                ),
              ],
              38,
            )
          )
        )
      },
    }),
  )
var ca = te(ua, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue',
  ],
])
const pa = vn($o),
  fa = Ze('tooltip'),
  Ct = V(
    j(k(k({}, _o), $n), {
      appendTo: { type: N([String, Object]), default: hn },
      content: { type: String, default: '' },
      rawContent: { type: Boolean, default: !1 },
      persistent: Boolean,
      ariaLabel: String,
      visible: { type: N(Boolean), default: null },
      transition: { type: String, default: `${fa.namespace.value}-fade-in-linear` },
      teleported: { type: Boolean, default: !0 },
      disabled: { type: Boolean },
    }),
  ),
  St = V(
    j(k({}, On), {
      disabled: Boolean,
      trigger: { type: N([String, Array]), default: 'hover' },
      triggerKeys: { type: N(Array), default: () => [Z.enter, Z.space] },
    }),
  ),
  da = V({
    openDelay: { type: Number },
    visibleArrow: { type: Boolean, default: void 0 },
    hideAfter: { type: Number, default: 200 },
    showArrow: { type: Boolean, default: !0 },
  }),
  Pt = Symbol('elTooltip'),
  va = ae({
    name: 'ElTooltipContent',
    components: { ElPopperContent: ca },
    inheritAttrs: !1,
    props: Ct,
    setup(e) {
      const t = I(null),
        n = I(!1),
        o = I(!1),
        r = I(!1),
        a = I(!1),
        {
          controlled: s,
          id: l,
          open: i,
          trigger: u,
          onClose: p,
          onOpen: m,
          onShow: v,
          onHide: c,
          onBeforeShow: f,
          onBeforeHide: d,
        } = fe(Pt, void 0),
        h = $(() => e.persistent)
      be(() => {
        a.value = !0
      })
      const g = $(() => (w(h) ? !0 : w(i))),
        b = $(() => (e.disabled ? !1 : w(i))),
        T = $(() => {
          var O
          return (O = e.style) != null ? O : {}
        }),
        E = $(() => !w(i)),
        P = () => {
          c()
        },
        C = () => {
          if (w(s)) return !0
        },
        y = oe(C, () => {
          e.enterable && w(u) === 'hover' && m()
        }),
        S = oe(C, () => {
          w(u) === 'hover' && p()
        }),
        L = () => {
          var O, A
          ;(A = (O = t.value) == null ? void 0 : O.updatePopper) == null || A.call(O),
            f == null || f()
        },
        M = () => {
          d == null || d()
        },
        B = () => {
          v(),
            (F = go(
              $(() => {
                var O
                return (O = t.value) == null ? void 0 : O.popperContentRef
              }),
              () => {
                if (w(s)) return
                w(u) !== 'hover' && p()
              },
            ))
        },
        D = () => {
          e.virtualTriggering || p()
        }
      let F
      return (
        x(
          () => w(i),
          (O) => {
            O || F == null || F()
          },
          { flush: 'post' },
        ),
        {
          ariaHidden: E,
          entering: o,
          leaving: r,
          id: l,
          intermediateOpen: n,
          contentStyle: T,
          contentRef: t,
          destroyed: a,
          shouldRender: g,
          shouldShow: b,
          onClose: p,
          open: i,
          onAfterShow: B,
          onBeforeEnter: L,
          onBeforeLeave: M,
          onContentEnter: y,
          onContentLeave: S,
          onTransitionLeave: P,
          onBlur: D,
        }
      )
    },
  })
function ma(e, t, n, o, r, a) {
  const s = Ce('el-popper-content')
  return (
    G(),
    Pe(
      io,
      { disabled: !e.teleported, to: e.appendTo },
      [
        Fe(
          so,
          {
            name: e.transition,
            onAfterLeave: e.onTransitionLeave,
            onBeforeEnter: e.onBeforeEnter,
            onAfterEnter: e.onAfterShow,
            onBeforeLeave: e.onBeforeLeave,
          },
          {
            default: ue(() => [
              e.shouldRender
                ? fn(
                    (G(),
                    Pe(
                      s,
                      dn({ key: 0, id: e.id, ref: 'contentRef' }, e.$attrs, {
                        'aria-label': e.ariaLabel,
                        'aria-hidden': e.ariaHidden,
                        'boundaries-padding': e.boundariesPadding,
                        'fallback-placements': e.fallbackPlacements,
                        'gpu-acceleration': e.gpuAcceleration,
                        offset: e.offset,
                        placement: e.placement,
                        'popper-options': e.popperOptions,
                        strategy: e.strategy,
                        effect: e.effect,
                        enterable: e.enterable,
                        pure: e.pure,
                        'popper-class': e.popperClass,
                        'popper-style': [e.popperStyle, e.contentStyle],
                        'reference-el': e.referenceEl,
                        'trigger-target-el': e.triggerTargetEl,
                        visible: e.shouldShow,
                        'z-index': e.zIndex,
                        onMouseenter: e.onContentEnter,
                        onMouseleave: e.onContentLeave,
                        onBlur: e.onBlur,
                        onClose: e.onClose,
                      }),
                      {
                        default: ue(() => [
                          Se(' Workaround bug #6378 '),
                          e.destroyed ? Se('v-if', !0) : Q(e.$slots, 'default', { key: 0 }),
                        ]),
                        _: 3,
                      },
                      16,
                      [
                        'id',
                        'aria-label',
                        'aria-hidden',
                        'boundaries-padding',
                        'fallback-placements',
                        'gpu-acceleration',
                        'offset',
                        'placement',
                        'popper-options',
                        'strategy',
                        'effect',
                        'enterable',
                        'pure',
                        'popper-class',
                        'popper-style',
                        'reference-el',
                        'trigger-target-el',
                        'visible',
                        'z-index',
                        'onMouseenter',
                        'onMouseleave',
                        'onBlur',
                        'onClose',
                      ],
                    )),
                    [[ao, e.shouldShow]],
                  )
                : Se('v-if', !0),
            ]),
            _: 3,
          },
          8,
          ['name', 'onAfterLeave', 'onBeforeEnter', 'onAfterEnter', 'onBeforeLeave'],
        ),
      ],
      8,
      ['disabled', 'to'],
    )
  )
}
var ga = te(va, [
  ['render', ma],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue',
  ],
])
const ha = (e, t) => (lo(e) ? e.includes(t) : e === t),
  Oe = (e, t, n) => (o) => {
    ha(w(e), t) && n(o)
  },
  ba = ae({
    name: 'ElTooltipTrigger',
    components: { ElPopperTrigger: Wo },
    props: St,
    setup(e) {
      const t = Ze('tooltip'),
        { controlled: n, id: o, open: r, onOpen: a, onClose: s, onToggle: l } = fe(Pt, void 0),
        i = I(null),
        u = () => {
          if (w(n) || e.disabled) return !0
        },
        p = at(e, 'trigger'),
        m = oe(u, Oe(p, 'hover', a)),
        v = oe(u, Oe(p, 'hover', s)),
        c = oe(
          u,
          Oe(p, 'click', (b) => {
            b.button === 0 && l(b)
          }),
        ),
        f = oe(u, Oe(p, 'focus', a)),
        d = oe(u, Oe(p, 'focus', s)),
        h = oe(
          u,
          Oe(p, 'contextmenu', (b) => {
            b.preventDefault(), l(b)
          }),
        ),
        g = oe(u, (b) => {
          const { code: T } = b
          e.triggerKeys.includes(T) && (b.preventDefault(), l(b))
        })
      return {
        onBlur: d,
        onContextMenu: h,
        onFocus: f,
        onMouseenter: m,
        onMouseleave: v,
        onClick: c,
        onKeydown: g,
        open: r,
        id: o,
        triggerRef: i,
        ns: t,
      }
    },
  })
function ya(e, t, n, o, r, a) {
  const s = Ce('el-popper-trigger')
  return (
    G(),
    Pe(
      s,
      {
        id: e.id,
        'virtual-ref': e.virtualRef,
        open: e.open,
        'virtual-triggering': e.virtualTriggering,
        class: ct(e.ns.e('trigger')),
        onBlur: e.onBlur,
        onClick: e.onClick,
        onContextmenu: e.onContextMenu,
        onFocus: e.onFocus,
        onMouseenter: e.onMouseenter,
        onMouseleave: e.onMouseleave,
        onKeydown: e.onKeydown,
      },
      { default: ue(() => [Q(e.$slots, 'default')]), _: 3 },
      8,
      [
        'id',
        'virtual-ref',
        'open',
        'virtual-triggering',
        'class',
        'onBlur',
        'onClick',
        'onContextmenu',
        'onFocus',
        'onMouseenter',
        'onMouseleave',
        'onKeydown',
      ],
    )
  )
}
var wa = te(ba, [
  ['render', ya],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue',
  ],
])
const { useModelToggleProps: Ea, useModelToggle: Oa, useModelToggleEmits: Ta } = To('visible'),
  Ca = ae({
    name: 'ElTooltip',
    components: { ElPopper: pa, ElPopperArrow: xo, ElTooltipContent: ga, ElTooltipTrigger: wa },
    props: k(k(k(k(k(k({}, yn), Ea), Ct), St), wn), da),
    emits: [...Ta, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
    setup(e, { emit: t }) {
      Ao()
      const n = $(() => (Ht(e.openDelay), e.openDelay || e.showAfter)),
        o = $(() => (Ht(e.visibleArrow), st(e.visibleArrow) ? e.visibleArrow : e.showArrow)),
        r = vo(),
        a = I(null),
        s = I(null),
        l = () => {
          var g
          const b = w(a)
          b && ((g = b.popperInstanceRef) == null || g.update())
        },
        i = I(!1),
        u = I(void 0),
        { show: p, hide: m, hasUpdateHandler: v } = Oa({ indicator: i, toggleReason: u }),
        { onOpen: c, onClose: f } = Io({
          showAfter: n,
          hideAfter: at(e, 'hideAfter'),
          open: p,
          close: m,
        }),
        d = $(() => st(e.visible) && !v.value)
      pe(Pt, {
        controlled: d,
        id: r,
        open: uo(i),
        trigger: at(e, 'trigger'),
        onOpen: (g) => {
          c(g)
        },
        onClose: (g) => {
          f(g)
        },
        onToggle: (g) => {
          w(i) ? f(g) : c(g)
        },
        onShow: () => {
          t('show', u.value)
        },
        onHide: () => {
          t('hide', u.value)
        },
        onBeforeShow: () => {
          t('before-show', u.value)
        },
        onBeforeHide: () => {
          t('before-hide', u.value)
        },
        updatePopper: l,
      }),
        x(
          () => e.disabled,
          (g) => {
            g && i.value && (i.value = !1)
          },
        )
      const h = () => {
        var g, b
        const T =
          (b = (g = s.value) == null ? void 0 : g.contentRef) == null ? void 0 : b.popperContentRef
        return T && T.contains(document.activeElement)
      }
      return (
        co(() => i.value && m()),
        {
          compatShowAfter: n,
          compatShowArrow: o,
          popperRef: a,
          contentRef: s,
          open: i,
          hide: m,
          isFocusInsideContent: h,
          updatePopper: l,
          onOpen: c,
          onClose: f,
        }
      )
    },
  }),
  Sa = ['innerHTML'],
  Pa = { key: 1 }
function Aa(e, t, n, o, r, a) {
  const s = Ce('el-tooltip-trigger'),
    l = Ce('el-popper-arrow'),
    i = Ce('el-tooltip-content'),
    u = Ce('el-popper')
  return (
    G(),
    Pe(
      u,
      { ref: 'popperRef', role: e.role },
      {
        default: ue(() => [
          Fe(
            s,
            {
              disabled: e.disabled,
              trigger: e.trigger,
              'trigger-keys': e.triggerKeys,
              'virtual-ref': e.virtualRef,
              'virtual-triggering': e.virtualTriggering,
            },
            {
              default: ue(() => [
                e.$slots.default ? Q(e.$slots, 'default', { key: 0 }) : Se('v-if', !0),
              ]),
              _: 3,
            },
            8,
            ['disabled', 'trigger', 'trigger-keys', 'virtual-ref', 'virtual-triggering'],
          ),
          Fe(
            i,
            {
              ref: 'contentRef',
              'aria-label': e.ariaLabel,
              'boundaries-padding': e.boundariesPadding,
              content: e.content,
              disabled: e.disabled,
              effect: e.effect,
              enterable: e.enterable,
              'fallback-placements': e.fallbackPlacements,
              'hide-after': e.hideAfter,
              'gpu-acceleration': e.gpuAcceleration,
              offset: e.offset,
              persistent: e.persistent,
              'popper-class': e.popperClass,
              'popper-style': e.popperStyle,
              placement: e.placement,
              'popper-options': e.popperOptions,
              pure: e.pure,
              'raw-content': e.rawContent,
              'reference-el': e.referenceEl,
              'trigger-target-el': e.triggerTargetEl,
              'show-after': e.compatShowAfter,
              strategy: e.strategy,
              teleported: e.teleported,
              transition: e.transition,
              'virtual-triggering': e.virtualTriggering,
              'z-index': e.zIndex,
              'append-to': e.appendTo,
            },
            {
              default: ue(() => [
                Q(e.$slots, 'content', {}, () => [
                  e.rawContent
                    ? (G(), Ye('span', { key: 0, innerHTML: e.content }, null, 8, Sa))
                    : (G(), Ye('span', Pa, po(e.content), 1)),
                ]),
                e.compatShowArrow
                  ? (G(),
                    Pe(l, { key: 0, 'arrow-offset': e.arrowOffset }, null, 8, ['arrow-offset']))
                  : Se('v-if', !0),
              ]),
              _: 3,
            },
            8,
            [
              'aria-label',
              'boundaries-padding',
              'content',
              'disabled',
              'effect',
              'enterable',
              'fallback-placements',
              'hide-after',
              'gpu-acceleration',
              'offset',
              'persistent',
              'popper-class',
              'popper-style',
              'placement',
              'popper-options',
              'pure',
              'raw-content',
              'reference-el',
              'trigger-target-el',
              'show-after',
              'strategy',
              'teleported',
              'transition',
              'virtual-triggering',
              'z-index',
              'append-to',
            ],
          ),
        ]),
        _: 3,
      },
      8,
      ['role'],
    )
  )
}
var _a = te(Ca, [
  ['render', Aa],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue',
  ],
])
const qa = vn(_a),
  Ia = { inheritAttrs: !1 }
function Ra(e, t, n, o, r, a) {
  return Q(e.$slots, 'default')
}
var ka = te(Ia, [
  ['render', Ra],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue',
  ],
])
const La = { name: 'ElCollectionItem', inheritAttrs: !1 }
function Na(e, t, n, o, r, a) {
  return Q(e.$slots, 'default')
}
var Ba = te(La, [
  ['render', Na],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue',
  ],
])
const $a = 'data-el-collection-item',
  Ma = (e) => {
    const t = `El${e}Collection`,
      n = `${t}Item`,
      o = Symbol(t),
      r = Symbol(n),
      a = j(k({}, ka), {
        name: t,
        setup() {
          const l = I(null),
            i = new Map()
          pe(o, {
            itemMap: i,
            getItems: () => {
              const p = w(l)
              if (!p) return []
              const m = Array.from(p.querySelectorAll(`[${$a}]`))
              return [...i.values()].sort((c, f) => m.indexOf(c.ref) - m.indexOf(f.ref))
            },
            collectionRef: l,
          })
        },
      }),
      s = j(k({}, Ba), {
        name: n,
        setup(l, { attrs: i }) {
          const u = I(null),
            p = fe(o, void 0)
          pe(r, { collectionItemRef: u }),
            Le(() => {
              const m = w(u)
              m && p.itemMap.set(m, k({ ref: m }, i))
            }),
            be(() => {
              const m = w(u)
              p.itemMap.delete(m)
            })
        },
      })
    return {
      COLLECTION_INJECTION_KEY: o,
      COLLECTION_ITEM_INJECTION_KEY: r,
      ElCollection: a,
      ElCollectionItem: s,
    }
  },
  Ya = V({
    trigger: St.trigger,
    effect: j(k({}, Ct.effect), { default: 'light' }),
    type: { type: N(String) },
    placement: { type: N(String), default: 'bottom' },
    popperOptions: { type: N(Object), default: () => ({}) },
    id: String,
    size: { type: String, default: '' },
    splitButton: Boolean,
    hideOnClick: { type: Boolean, default: !0 },
    loop: { type: Boolean, default: !0 },
    showTimeout: { type: Number, default: 150 },
    hideTimeout: { type: Number, default: 150 },
    tabindex: { type: N([Number, String]), default: 0 },
    maxHeight: { type: N([Number, String]), default: '' },
    popperClass: { type: String, default: '' },
    disabled: { type: Boolean, default: !1 },
    role: { type: String, default: 'menu' },
    buttonProps: { type: N(Object) },
  }),
  Ja = V({
    command: { type: [Object, String, Number], default: () => ({}) },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: { type: mo },
  }),
  Ga = V({ onKeydown: { type: N(Function) } }),
  Fa = [Z.down, Z.pageDown, Z.home],
  xa = [Z.up, Z.pageUp, Z.end],
  Za = [...Fa, ...xa],
  {
    ElCollection: Xa,
    ElCollectionItem: Qa,
    COLLECTION_INJECTION_KEY: es,
    COLLECTION_ITEM_INJECTION_KEY: ts,
  } = Ma('Dropdown')
export {
  ts as C,
  Z as E,
  Zr as F,
  xa as L,
  jo as O,
  qa as a,
  Va as b,
  Ct as c,
  Lo as d,
  ze as e,
  ea as f,
  Ma as g,
  oe as h,
  ft as i,
  Xa as j,
  Ya as k,
  Ja as l,
  $a as m,
  Qa as n,
  Ga as o,
  es as p,
  Za as q,
  St as r,
  za as u,
  Ua as w,
  zr as y,
}
