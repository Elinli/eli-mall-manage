var K = Object.defineProperty,
  W = Object.defineProperties
var X = Object.getOwnPropertyDescriptors
var L = Object.getOwnPropertySymbols
var Y = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable
var N = (t, e, o) =>
    e in t ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o),
  C = (t, e) => {
    for (var o in e || (e = {})) Y.call(e, o) && N(t, o, e[o])
    if (L) for (var o of L(e)) Z.call(e, o) && N(t, o, e[o])
    return t
  },
  E = (t, e) => W(t, X(e))
import {
  D as j,
  d as F,
  A as h,
  b as _,
  a as p,
  o as v,
  $ as O,
  a0 as B,
  c as k,
  t as R,
  Y as I,
  W as S,
  Z as A,
  ag as q,
  a2 as G,
  b0 as J,
  a8 as Q,
  b1 as x,
  U as ee,
  a3 as D,
  _ as te,
  X as H,
  av as oe,
  ap as ne,
} from './index.b73a18cc.js'
import { r as T, k as P, c as d, a as re } from './el-popper.8958ebc4.js'
import { E as ae } from './el-button.42d22c5b.js'
import { a as se, y as le, b as pe, u as ie, w as ce, _ as ue } from './index.b96c5203.js'
const f = new Map()
let U
se &&
  (document.addEventListener('mousedown', (t) => (U = t)),
  document.addEventListener('mouseup', (t) => {
    for (const e of f.values()) for (const { documentHandler: o } of e) o(t, U)
  }))
function V(t, e) {
  let o = []
  return (
    Array.isArray(e.arg) ? (o = e.arg) : le(e.arg) && o.push(e.arg),
    function (r, s) {
      const i = e.instance.popperRef,
        l = r.target,
        a = s == null ? void 0 : s.target,
        c = !e || !e.instance,
        g = !l || !a,
        m = t.contains(l) || t.contains(a),
        b = t === l,
        u =
          (o.length && o.some((y) => (y == null ? void 0 : y.contains(l)))) ||
          (o.length && o.includes(a)),
        w = i && (i.contains(l) || i.contains(a))
      c || g || m || b || u || w || e.value(r, s)
    }
  )
}
const de = {
    beforeMount(t, e) {
      f.has(t) || f.set(t, []), f.get(t).push({ documentHandler: V(t, e), bindingFn: e.value })
    },
    updated(t, e) {
      f.has(t) || f.set(t, [])
      const o = f.get(t),
        r = o.findIndex((i) => i.bindingFn === e.oldValue),
        s = { documentHandler: V(t, e), bindingFn: e.value }
      r >= 0 ? o.splice(r, 1, s) : o.push(s)
    },
    unmounted(t) {
      f.delete(t)
    },
  },
  fe = j({
    trigger: T.trigger,
    placement: P.placement,
    disabled: T.disabled,
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
  me = F(
    E(C({}, ge), {
      props: fe,
      emits: ve,
      setup(t, { expose: e, emit: o }) {
        const r = t,
          s = 'onUpdate:visible',
          i = h(() => r[s]),
          l = ie('popover'),
          a = _(),
          c = h(() => {
            var n
            return (n = p(a)) == null ? void 0 : n.popperRef
          }),
          g = h(() => [{ width: ce(r.width) }, r.popperStyle]),
          m = h(() => [l.b(), r.popperClass, { [l.m('plain')]: !!r.content }]),
          b = h(() => r.transition === 'el-fade-in-linear'),
          u = () => {
            var n
            ;(n = a.value) == null || n.hide()
          },
          w = () => {
            o('before-enter')
          },
          y = () => {
            o('before-leave')
          },
          z = () => {
            o('after-enter')
          },
          M = () => {
            o('update:visible', !1), o('after-leave')
          }
        return (
          e({ popperRef: c, hide: u }),
          (n, ke) => (
            v(),
            O(
              p(re),
              G({ ref_key: 'tooltipRef', ref: a }, n.$attrs, {
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
                'gpu-acceleration': p(b),
                'onUpdate:visible': p(i),
                onBeforeShow: w,
                onBeforeHide: y,
                onShow: z,
                onHide: M,
              }),
              {
                content: B(() => [
                  n.title
                    ? (v(),
                      k('div', { key: 0, class: I(p(l).e('title')), role: 'title' }, R(n.title), 3))
                    : S('v-if', !0),
                  A(n.$slots, 'default', {}, () => [q(R(n.content), 1)]),
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
var be = ue(me, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue',
  ],
])
const $ = (t, e) => {
  const o = e.arg || e.value,
    r = o == null ? void 0 : o.popperRef
  r && (r.triggerRef = t)
}
var he = {
  mounted(t, e) {
    $(t, e)
  },
  updated(t, e) {
    $(t, e)
  },
}
const we = 'popover',
  ye = J(he, we),
  Ce = Q(be, { directive: ye })
const Ee = { class: 'language-box' },
  _e = ['onClick'],
  Se = F({
    __name: 'Language',
    setup(t) {
      const e = _(),
        o = _(),
        r = () => {
          var a, c
          ;(c = (a = p(o).popperRef) == null ? void 0 : a.delayHide) == null || c.call(a)
        },
        s = x(),
        i = _([
          { locale: 'en', label: 'English' },
          { locale: 'zh-CN', label: '\u7B80\u4F53\u4E2D\u6587' },
        ])
      function l(a) {
        const { locale: c } = a
        s.setLocale(c), location.reload()
      }
      return (a, c) => {
        const g = ne('eli-svg-icon'),
          m = ae,
          b = Ce
        return (
          v(),
          k(
            H,
            null,
            [
              ee(
                (v(),
                O(
                  m,
                  { class: 'language icon-button', ref_key: 'buttonRef', ref: e, text: '' },
                  {
                    default: B(() => [D(g, { name: 'language', width: '20px', height: '20px' })]),
                    _: 1,
                  },
                )),
                [[p(de), r]],
              ),
              D(
                b,
                {
                  ref_key: 'popoverRef',
                  ref: o,
                  'virtual-ref': e.value,
                  trigger: 'hover',
                  'virtual-triggering': '',
                },
                {
                  default: B(() => [
                    te('ul', Ee, [
                      (v(!0),
                      k(
                        H,
                        null,
                        oe(
                          i.value,
                          (u) => (
                            v(),
                            k(
                              'li',
                              {
                                class: I([
                                  'language-item',
                                  p(s).getLocale.toLowerCase() === u.locale.toLowerCase()
                                    ? 'is-active'
                                    : '',
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
