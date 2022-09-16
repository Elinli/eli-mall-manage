var j = Object.defineProperty,
  q = Object.defineProperties
var G = Object.getOwnPropertyDescriptors
var L = Object.getOwnPropertySymbols
var J = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable
var S = (t, e, o) =>
    e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o),
  C = (t, e) => {
    for (var o in e || (e = {})) J.call(e, o) && S(t, o, e[o])
    if (L) for (var o of L(e)) K.call(e, o) && S(t, o, e[o])
    return t
  },
  E = (t, e) => q(t, G(e))
import {
  s as Q,
  d as $,
  k as b,
  a as k,
  i as p,
  o as v,
  C as O,
  w as B,
  c as _,
  t as R,
  E as I,
  G as N,
  B as A,
  e as W,
  Q as X,
  aj as Y,
  J as Z,
  ak as x,
  $ as ee,
  f as H,
  b as te,
  F as T,
  ai as oe,
  g as ne,
} from './index.77b5ea65.js'
import { o as D, h as P, p as f, g as se } from './el-popper.a4e3e252.js'
import { E as re } from './el-button.12607d6d.js'
import { e as ae, q as le, m as pe, u as ie, f as ce, _ as ue } from './index.6a963975.js'
const d = new Map()
let F
ae &&
  (document.addEventListener('mousedown', (t) => (F = t)),
  document.addEventListener('mouseup', (t) => {
    for (const e of d.values()) for (const { documentHandler: o } of e) o(t, F)
  }))
function U(t, e) {
  let o = []
  return (
    Array.isArray(e.arg) ? (o = e.arg) : le(e.arg) && o.push(e.arg),
    function (s, a) {
      const i = e.instance.popperRef,
        l = s.target,
        r = a == null ? void 0 : a.target,
        c = !e || !e.instance,
        g = !l || !r,
        m = t.contains(l) || t.contains(r),
        h = t === l,
        u =
          (o.length && o.some((y) => (y == null ? void 0 : y.contains(l)))) ||
          (o.length && o.includes(r)),
        w = i && (i.contains(l) || i.contains(r))
      c || g || m || h || u || w || e.value(s, a)
    }
  )
}
const fe = {
    beforeMount(t, e) {
      d.has(t) || d.set(t, []), d.get(t).push({ documentHandler: U(t, e), bindingFn: e.value })
    },
    updated(t, e) {
      d.has(t) || d.set(t, [])
      const o = d.get(t),
        s = o.findIndex((i) => i.bindingFn === e.oldValue),
        a = { documentHandler: U(t, e), bindingFn: e.value }
      s >= 0 ? o.splice(s, 1, a) : o.push(a)
    },
    unmounted(t) {
      d.delete(t)
    },
  },
  de = Q({
    trigger: D.trigger,
    placement: P.placement,
    disabled: D.disabled,
    visible: f.visible,
    transition: f.transition,
    popperOptions: P.popperOptions,
    tabindex: P.tabindex,
    content: f.content,
    popperStyle: f.popperStyle,
    popperClass: f.popperClass,
    enterable: E(C({}, f.enterable), { default: !0 }),
    effect: E(C({}, f.effect), { default: 'light' }),
    teleported: f.teleported,
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
      props: de,
      emits: ve,
      setup(t, { expose: e, emit: o }) {
        const s = t,
          a = 'onUpdate:visible',
          i = b(() => s[a]),
          l = ie('popover'),
          r = k(),
          c = b(() => {
            var n
            return (n = p(r)) == null ? void 0 : n.popperRef
          }),
          g = b(() => [{ width: ce(s.width) }, s.popperStyle]),
          m = b(() => [l.b(), s.popperClass, { [l.m('plain')]: !!s.content }]),
          h = b(() => s.transition === 'el-fade-in-linear'),
          u = () => {
            var n
            ;(n = r.value) == null || n.hide()
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
          (n, _e) => (
            v(),
            O(
              p(se),
              X({ ref_key: 'tooltipRef', ref: r }, n.$attrs, {
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
                onShow: z,
                onHide: M,
              }),
              {
                content: B(() => [
                  n.title
                    ? (v(),
                      _('div', { key: 0, class: I(p(l).e('title')), role: 'title' }, R(n.title), 3))
                    : N('v-if', !0),
                  A(n.$slots, 'default', {}, () => [W(R(n.content), 1)]),
                ]),
                default: B(() => [
                  n.$slots.reference ? A(n.$slots, 'reference', { key: 0 }) : N('v-if', !0),
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
    s = o == null ? void 0 : o.popperRef
  s && (s.triggerRef = t)
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
  ke = ['onClick'],
  Ne = $({
    __name: 'Language',
    setup(t) {
      const e = k(),
        o = k(),
        s = () => {
          var r, c
          ;(c = (r = p(o).popperRef) == null ? void 0 : r.delayHide) == null || c.call(r)
        },
        a = x(),
        i = k([
          { locale: 'es', label: 'English' },
          { locale: 'zh-cn', label: '\u7B80\u4F53\u4E2D\u6587' },
        ])
      function l(r) {
        const { locale: c } = r
        a.setLocale(c)
      }
      return (r, c) => {
        const g = ne('eli-svg-icon'),
          m = re,
          h = Ce
        return (
          v(),
          _(
            T,
            null,
            [
              ee(
                (v(),
                O(
                  m,
                  { class: 'language icon-button', ref_key: 'buttonRef', ref: e, text: '' },
                  {
                    default: B(() => [H(g, { name: 'language', width: '20px', height: '20px' })]),
                    _: 1,
                  },
                )),
                [[p(fe), s]],
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
                    te('ul', Ee, [
                      (v(!0),
                      _(
                        T,
                        null,
                        oe(
                          i.value,
                          (u) => (
                            v(),
                            _(
                              'li',
                              {
                                class: I([
                                  'language-item',
                                  p(a).getLocale.toLowerCase() === u.locale ? 'is-active' : '',
                                ]),
                                onClick: (w) => l(u),
                                key: u.locale,
                              },
                              R(u.label),
                              11,
                              ke,
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
export { fe as C, Ne as _ }
