var M = Object.defineProperty,
  j = Object.defineProperties
var q = Object.getOwnPropertyDescriptors
var R = Object.getOwnPropertySymbols
var G = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable
var S = (e, t, o) =>
    t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  C = (e, t) => {
    for (var o in t || (t = {})) G.call(t, o) && S(e, o, t[o])
    if (R) for (var o of R(t)) J.call(t, o) && S(e, o, t[o])
    return e
  },
  E = (e, t) => j(e, q(t))
import {
  d as $,
  h as b,
  a as k,
  k as p,
  o as v,
  v as O,
  w as B,
  c as _,
  t as P,
  y as z,
  z as N,
  s as A,
  K as Q,
  e as W,
  a6 as X,
  S as Y,
  f as H,
  F as T,
  b as Z,
  a7 as x,
  g as ee,
} from './index.a980d1e6.js'
import { o as D, h as L, p as d, g as te } from './el-popper.0067401d.js'
import { E as oe } from './el-button.093e0ba3.js'
import {
  m as se,
  C as re,
  a as ne,
  y as ae,
  c as le,
  n as pe,
  _ as ie,
  F as ce,
  w as ue,
} from './index.d7808d24.js'
const f = new Map()
let F
se &&
  (document.addEventListener('mousedown', (e) => (F = e)),
  document.addEventListener('mouseup', (e) => {
    for (const t of f.values()) for (const { documentHandler: o } of t) o(e, F)
  }))
function U(e, t) {
  let o = []
  return (
    Array.isArray(t.arg) ? (o = t.arg) : re(t.arg) && o.push(t.arg),
    function (r, a) {
      const i = t.instance.popperRef,
        l = r.target,
        n = a == null ? void 0 : a.target,
        c = !t || !t.instance,
        g = !l || !n,
        h = e.contains(l) || e.contains(n),
        m = e === l,
        u =
          (o.length && o.some((y) => (y == null ? void 0 : y.contains(l)))) ||
          (o.length && o.includes(n)),
        w = i && (i.contains(l) || i.contains(n))
      c || g || h || m || u || w || t.value(r, a)
    }
  )
}
const de = {
    beforeMount(e, t) {
      f.has(e) || f.set(e, []), f.get(e).push({ documentHandler: U(e, t), bindingFn: t.value })
    },
    updated(e, t) {
      f.has(e) || f.set(e, [])
      const o = f.get(e),
        r = o.findIndex((i) => i.bindingFn === t.oldValue),
        a = { documentHandler: U(e, t), bindingFn: t.value }
      r >= 0 ? o.splice(r, 1, a) : o.push(a)
    },
    unmounted(e) {
      f.delete(e)
    },
  },
  fe = ne({
    trigger: D.trigger,
    placement: L.placement,
    disabled: D.disabled,
    visible: d.visible,
    transition: d.transition,
    popperOptions: L.popperOptions,
    tabindex: L.tabindex,
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
    'update:visible': (e) => ae(e),
    'before-enter': () => !0,
    'before-leave': () => !0,
    'after-enter': () => !0,
    'after-leave': () => !0,
  },
  ge = { name: 'ElPopover' },
  he = $(
    E(C({}, ge), {
      props: fe,
      emits: ve,
      setup(e, { expose: t, emit: o }) {
        const r = e,
          a = 'onUpdate:visible',
          i = b(() => r[a]),
          l = le('popover'),
          n = k(),
          c = b(() => {
            var s
            return (s = p(n)) == null ? void 0 : s.popperRef
          }),
          g = b(() => [{ width: pe(r.width) }, r.popperStyle]),
          h = b(() => [l.b(), r.popperClass, { [l.m('plain')]: !!r.content }]),
          m = b(() => r.transition === 'el-fade-in-linear'),
          u = () => {
            var s
            ;(s = n.value) == null || s.hide()
          },
          w = () => {
            o('before-enter')
          },
          y = () => {
            o('before-leave')
          },
          I = () => {
            o('after-enter')
          },
          K = () => {
            o('update:visible', !1), o('after-leave')
          }
        return (
          t({ popperRef: c, hide: u }),
          (s, Be) => (
            v(),
            O(
              p(te),
              Q({ ref_key: 'tooltipRef', ref: n }, s.$attrs, {
                trigger: s.trigger,
                placement: s.placement,
                disabled: s.disabled,
                visible: s.visible,
                transition: s.transition,
                'popper-options': s.popperOptions,
                tabindex: s.tabindex,
                content: s.content,
                offset: s.offset,
                'show-after': s.showAfter,
                'hide-after': s.hideAfter,
                'auto-close': s.autoClose,
                'show-arrow': s.showArrow,
                'aria-label': s.title,
                effect: s.effect,
                enterable: s.enterable,
                'popper-class': p(h),
                'popper-style': p(g),
                teleported: s.teleported,
                persistent: s.persistent,
                'gpu-acceleration': p(m),
                'onUpdate:visible': p(i),
                onBeforeShow: w,
                onBeforeHide: y,
                onShow: I,
                onHide: K,
              }),
              {
                content: B(() => [
                  s.title
                    ? (v(),
                      _('div', { key: 0, class: z(p(l).e('title')), role: 'title' }, P(s.title), 3))
                    : N('v-if', !0),
                  A(s.$slots, 'default', {}, () => [W(P(s.content), 1)]),
                ]),
                default: B(() => [
                  s.$slots.reference ? A(s.$slots, 'reference', { key: 0 }) : N('v-if', !0),
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
var me = ie(he, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue',
  ],
])
const V = (e, t) => {
  const o = t.arg || t.value,
    r = o == null ? void 0 : o.popperRef
  r && (r.triggerRef = e)
}
var be = {
  mounted(e, t) {
    V(e, t)
  },
  updated(e, t) {
    V(e, t)
  },
}
const we = 'popover',
  ye = ce(be, we),
  Ce = ue(me, { directive: ye })
const Ee = X('locale', {
    state: () => ({ locale: 'zh-CN' }),
    getters: {
      getLocale({ locale: e }) {
        return e
      },
    },
    actions: {
      setLocale(e) {
        this.locale = e
      },
    },
    persist: {
      enabled: !0,
      strategies: [{ key: 'locale', storage: localStorage, paths: ['locale'] }],
    },
  }),
  ke = { class: 'language-box' },
  _e = ['onClick'],
  Ae = $({
    __name: 'Language',
    setup(e) {
      const t = k(),
        o = k(),
        r = () => {
          var n, c
          ;(c = (n = p(o).popperRef) == null ? void 0 : n.delayHide) == null || c.call(n)
        },
        a = Ee(),
        i = k([
          { locale: 'es', label: 'English' },
          { locale: 'zh-cn', label: '\u7B80\u4F53\u4E2D\u6587' },
        ])
      function l(n) {
        const { locale: c } = n
        a.setLocale(c)
      }
      return (n, c) => {
        const g = ee('eli-svg-icon'),
          h = oe,
          m = Ce
        return (
          v(),
          _(
            T,
            null,
            [
              Y(
                (v(),
                O(
                  h,
                  { class: 'language icon-button', ref_key: 'buttonRef', ref: t, text: '' },
                  {
                    default: B(() => [H(g, { name: 'language', width: '20px', height: '20px' })]),
                    _: 1,
                  },
                )),
                [[p(de), r]],
              ),
              H(
                m,
                {
                  ref_key: 'popoverRef',
                  ref: o,
                  'virtual-ref': t.value,
                  trigger: 'hover',
                  'virtual-triggering': '',
                },
                {
                  default: B(() => [
                    Z('ul', ke, [
                      (v(!0),
                      _(
                        T,
                        null,
                        x(
                          i.value,
                          (u) => (
                            v(),
                            _(
                              'li',
                              {
                                class: z([
                                  'language-item',
                                  p(a).getLocale.toLowerCase() === u.locale ? 'is-active' : '',
                                ]),
                                onClick: (w) => l(u),
                                key: u.locale,
                              },
                              P(u.label),
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
export { de as C, Ae as _ }