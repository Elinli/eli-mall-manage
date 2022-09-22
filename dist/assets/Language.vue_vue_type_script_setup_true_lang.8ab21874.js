var j = Object.defineProperty,
  G = Object.defineProperties
var J = Object.getOwnPropertyDescriptors
var L = Object.getOwnPropertySymbols
var K = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable
var N = (t, e, o) =>
    e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o),
  C = (t, e) => {
    for (var o in e || (e = {})) K.call(e, o) && N(t, o, e[o])
    if (L) for (var o of L(e)) q.call(e, o) && N(t, o, e[o])
    return t
  },
  E = (t, e) => G(t, J(e))
import {
  x as Q,
  d as $,
  l as b,
  a as _,
  j as p,
  o as v,
  G as I,
  w as B,
  c as k,
  t as R,
  I as O,
  J as S,
  E as A,
  U as W,
  g as X,
  a0 as Y,
  M as Z,
  a1 as x,
  b as ee,
  a2 as te,
  h as H,
  f as oe,
  F as T,
  a3 as ne,
} from './index.c83f165b.js'
import { u as D, d as P, a as d, E as re } from './el-popper.234cc157.js'
import { E as se } from './el-button.a68b4578.js'
import { e as ae, f as le, g as pe, u as ie, h as ce, _ as ue } from './index.841c5669.js'
const f = new Map()
let U
ae &&
  (document.addEventListener('mousedown', (t) => (U = t)),
  document.addEventListener('mouseup', (t) => {
    for (const e of f.values()) for (const { documentHandler: o } of e) o(t, U)
  }))
function F(t, e) {
  let o = []
  return (
    Array.isArray(e.arg) ? (o = e.arg) : le(e.arg) && o.push(e.arg),
    function (r, a) {
      const i = e.instance.popperRef,
        l = r.target,
        s = a == null ? void 0 : a.target,
        c = !e || !e.instance,
        g = !l || !s,
        m = t.contains(l) || t.contains(s),
        h = t === l,
        u =
          (o.length && o.some((y) => (y == null ? void 0 : y.contains(l)))) ||
          (o.length && o.includes(s)),
        w = i && (i.contains(l) || i.contains(s))
      c || g || m || h || u || w || e.value(r, a)
    }
  )
}
const de = {
    beforeMount(t, e) {
      f.has(t) || f.set(t, []), f.get(t).push({ documentHandler: F(t, e), bindingFn: e.value })
    },
    updated(t, e) {
      f.has(t) || f.set(t, [])
      const o = f.get(t),
        r = o.findIndex((i) => i.bindingFn === e.oldValue),
        a = { documentHandler: F(t, e), bindingFn: e.value }
      r >= 0 ? o.splice(r, 1, a) : o.push(a)
    },
    unmounted(t) {
      f.delete(t)
    },
  },
  fe = Q({
    trigger: D.trigger,
    placement: P.placement,
    disabled: D.disabled,
    visible: d.visible,
    transition: d.transition,
    popperOptions: P.popperOptions,
    tabindex: P.tabindex,
    content: d.content,
    popperStyle: d.popperStyle,
    popperClass: d.popperClass,
    enterable: E(C({}, d.enterable), { default: !0 }),
    effect: E(C({}, d.effect), { default: 'light' }),
    teleported: d.teleported,
    title: String,
    width: { type: [String, Number], default: 150 },
    offset: { type: Number, default: void 0 },
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 },
    showArrow: { type: Boolean, default: !0 },
    persistent: { type: Boolean, default: !0 },
    'onUpdate:visible': { type: Function },
  }),
  ve = {
    'update:visible': (t) => pe(t),
    'before-enter': () => !0,
    'before-leave': () => !0,
    'after-enter': () => !0,
    'after-leave': () => !0,
  },
  ge = { name: 'ElPopover' },
  me = $(
    E(C({}, ge), {
      props: fe,
      emits: ve,
      setup(t, { expose: e, emit: o }) {
        const r = t,
          a = 'onUpdate:visible',
          i = b(() => r[a]),
          l = ie('popover'),
          s = _(),
          c = b(() => {
            var n
            return (n = p(s)) == null ? void 0 : n.popperRef
          }),
          g = b(() => [{ width: ce(r.width) }, r.popperStyle]),
          m = b(() => [l.b(), r.popperClass, { [l.m('plain')]: !!r.content }]),
          h = b(() => r.transition === 'el-fade-in-linear'),
          u = () => {
            var n
            ;(n = s.value) == null || n.hide()
          },
          w = () => {
            o('before-enter')
          },
          y = () => {
            o('before-leave')
          },
          M = () => {
            o('after-enter')
          },
          z = () => {
            o('update:visible', !1), o('after-leave')
          }
        return (
          e({ popperRef: c, hide: u }),
          (n, ke) => (
            v(),
            I(
              p(re),
              W({ ref_key: 'tooltipRef', ref: s }, n.$attrs, {
                trigger: n.trigger,
                placement: n.placement,
                disabled: n.disabled,
                visible: n.visible,
                transition: n.transition,
                'popper-options': n.popperOptions,
                tabindex: n.tabindex,
                content: n.content,
                offset: n.offset,
                'show-after': n.showAfter,
                'hide-after': n.hideAfter,
                'auto-close': n.autoClose,
                'show-arrow': n.showArrow,
                'aria-label': n.title,
                effect: n.effect,
                enterable: n.enterable,
                'popper-class': p(m),
                'popper-style': p(g),
                teleported: n.teleported,
                persistent: n.persistent,
                'gpu-acceleration': p(h),
                'onUpdate:visible': p(i),
                onBeforeShow: w,
                onBeforeHide: y,
                onShow: M,
                onHide: z,
              }),
              {
                content: B(() => [
                  n.title
                    ? (v(),
                      k('div', { key: 0, class: O(p(l).e('title')), role: 'title' }, R(n.title), 3))
                    : S('v-if', !0),
                  A(n.$slots, 'default', {}, () => [X(R(n.content), 1)]),
                ]),
                default: B(() => [
                  n.$slots.reference ? A(n.$slots, 'reference', { key: 0 }) : S('v-if', !0),
                ]),
                _: 3,
              },
              16,
              [
                'trigger',
                'placement',
                'disabled',
                'visible',
                'transition',
                'popper-options',
                'tabindex',
                'content',
                'offset',
                'show-after',
                'hide-after',
                'auto-close',
                'show-arrow',
                'aria-label',
                'effect',
                'enterable',
                'popper-class',
                'popper-style',
                'teleported',
                'persistent',
                'gpu-acceleration',
                'onUpdate:visible',
              ],
            )
          )
        )
      },
    }),
  )
var he = ue(me, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue',
  ],
])
const V = (t, e) => {
  const o = e.arg || e.value,
    r = o == null ? void 0 : o.popperRef
  r && (r.triggerRef = t)
}
var be = {
  mounted(t, e) {
    V(t, e)
  },
  updated(t, e) {
    V(t, e)
  },
}
const we = 'popover',
  ye = Y(be, we),
  Ce = Z(he, { directive: ye })
const Ee = { class: 'language-box' },
  _e = ['onClick'],
  Se = $({
    __name: 'Language',
    setup(t) {
      const e = _(),
        o = _(),
        r = () => {
          var s, c
          ;(c = (s = p(o).popperRef) == null ? void 0 : s.delayHide) == null || c.call(s)
        },
        a = x(),
        i = _([
          { locale: 'en', label: 'English' },
          { locale: 'zh-CN', label: '\u7B80\u4F53\u4E2D\u6587' },
        ])
      function l(s) {
        const { locale: c } = s
        a.setLocale(c), location.reload()
      }
      return (s, c) => {
        const g = ee('eli-svg-icon'),
          m = se,
          h = Ce
        return (
          v(),
          k(
            T,
            null,
            [
              te(
                (v(),
                I(
                  m,
                  { class: 'language icon-button', ref_key: 'buttonRef', ref: e, text: '' },
                  {
                    default: B(() => [H(g, { name: 'language', width: '20px', height: '20px' })]),
                    _: 1,
                  },
                )),
                [[p(de), r]],
              ),
              H(
                h,
                {
                  ref_key: 'popoverRef',
                  ref: o,
                  'virtual-ref': e.value,
                  trigger: 'hover',
                  'virtual-triggering': '',
                },
                {
                  default: B(() => [
                    oe('ul', Ee, [
                      (v(!0),
                      k(
                        T,
                        null,
                        ne(
                          i.value,
                          (u) => (
                            v(),
                            k(
                              'li',
                              {
                                class: O([
                                  'language-item',
                                  p(a).getLocale.toLowerCase() === u.locale ? 'is-active' : '',
                                ]),
                                onClick: (w) => l(u),
                                key: u.locale,
                              },
                              R(u.label),
                              11,
                              _e,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['virtual-ref'],
              ),
            ],
            64,
          )
        )
      }
    },
  })
export { de as C, Se as _ }
