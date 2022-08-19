var Ut = Object.defineProperty,
  Wt = Object.defineProperties
var Vt = Object.getOwnPropertyDescriptors
var Be = Object.getOwnPropertySymbols
var rt = Object.prototype.hasOwnProperty,
  at = Object.prototype.propertyIsEnumerable
var Ae = Math.pow,
  lt = (e, t, o) =>
    t in e ? Ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  ee = (e, t) => {
    for (var o in t || (t = {})) rt.call(t, o) && lt(e, o, t[o])
    if (Be) for (var o of Be(t)) at.call(t, o) && lt(e, o, t[o])
    return e
  },
  ce = (e, t) => Wt(e, Vt(t))
var it = (e, t) => {
  var o = {}
  for (var n in e) rt.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
  if (e != null && Be) for (var n of Be(e)) t.indexOf(n) < 0 && at.call(e, n) && (o[n] = e[n])
  return o
}
import {
  M as Ze,
  m as Ye,
  O as jt,
  P as gt,
  h as B,
  k as r,
  Q as Qe,
  a as I,
  R as Jt,
  l as ge,
  D as Xt,
  N as Je,
  d as j,
  j as q,
  n as ye,
  o as R,
  v as V,
  w as N,
  S as Ke,
  U as Ge,
  b as K,
  y as H,
  A as be,
  V as Ue,
  c as Z,
  f as F,
  F as Me,
  W as Pe,
  B as $e,
  r as qt,
  X as Zt,
  s as G,
  x as We,
  z as re,
  H as Qt,
  t as de,
  Y as xt,
  Z as yt,
  i as xe,
  q as eo,
  _ as bt,
  $ as to,
  a0 as oo,
  g as X,
  a1 as no,
  a2 as so,
  K as De,
  a3 as lo,
  E as ut,
  a4 as wt,
  a5 as ct,
  a6 as ro,
  L as ao,
  e as _t,
  a7 as io,
} from './index.a980d1e6.js'
import { u as uo, a as He, b as co, E as et, c as fo } from './el-button.093e0ba3.js'
import {
  u as Oe,
  a as Ct,
  F as $t,
  b as St,
  E as po,
  c as mo,
  d as te,
  e as ae,
  f as vo,
  g as ho,
  O as go,
  h as yo,
  i as Et,
  C as bo,
  j as wo,
  k as _o,
  w as dt,
  l as Co,
  m as $o,
  n as So,
  L as Eo,
} from './el-popper.0067401d.js'
import { c as To } from './_commonjsHelpers.c10bf6cb.js'
import {
  m as we,
  n as Se,
  u as Tt,
  o as ko,
  c as ie,
  p as ft,
  q as Io,
  r as Mo,
  t as Do,
  a as ue,
  _ as oe,
  e as le,
  v as he,
  w as Ne,
  x as Oo,
  E as Le,
  y as Lo,
  z as No,
  A as Xe,
  B as Ro,
  d as kt,
  C as Bo,
  D as Ao,
} from './index.d7808d24.js'
import { i as It, C as Fo, T as pt, a as zo } from './icon.ce3baaf7.js'
class Po extends Error {
  constructor(t) {
    super(t), (this.name = 'ElementPlusError')
  }
}
function Mt(e, t) {
  throw new Po(`[${e}] ${t}`)
}
function ll(e, t) {}
let Fe
const Ho = (e) => {
  var t
  if (!we) return 0
  if (Fe !== void 0) return Fe
  const o = document.createElement('div')
  ;(o.className = `${e}-scrollbar__wrap`),
    (o.style.visibility = 'hidden'),
    (o.style.width = '100px'),
    (o.style.position = 'absolute'),
    (o.style.top = '-9999px'),
    document.body.appendChild(o)
  const n = o.offsetWidth
  o.style.overflow = 'scroll'
  const s = document.createElement('div')
  ;(s.style.width = '100%'), o.appendChild(s)
  const d = s.offsetWidth
  return (t = o.parentNode) == null || t.removeChild(o), (Fe = n - d), Fe
}
function rl(e, t) {
  if (!we) return
  if (!t) {
    e.scrollTop = 0
    return
  }
  const o = []
  let n = t.offsetParent
  for (; n !== null && e !== n && e.contains(n); ) o.push(n), (n = n.offsetParent)
  const s = t.offsetTop + o.reduce((c, h) => c + h.offsetTop, 0),
    d = s + t.offsetHeight,
    l = e.scrollTop,
    u = l + e.clientHeight
  s < l ? (e.scrollTop = s) : d > u && (e.scrollTop = d - e.clientHeight)
}
const tt =
    (...e) =>
    (t) => {
      e.forEach((o) => {
        Ze(o) ? o(t) : (o.value = t)
      })
    },
  Dt = 'update:modelValue',
  al = 'change'
var ze = ((e) => (
  (e[(e.TEXT = 1)] = 'TEXT'),
  (e[(e.CLASS = 2)] = 'CLASS'),
  (e[(e.STYLE = 4)] = 'STYLE'),
  (e[(e.PROPS = 8)] = 'PROPS'),
  (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
  (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
  (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
  (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
  (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
  (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
  (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
  (e[(e.HOISTED = -1)] = 'HOISTED'),
  (e[(e.BAIL = -2)] = 'BAIL'),
  e
))(ze || {})
const Yo = (e) => e,
  Ot = Symbol('dialogInjectionKey'),
  Lt = Symbol('scrollbarContextKey'),
  Ko = (e, t, o) => {
    let n = { offsetX: 0, offsetY: 0 }
    const s = (u) => {
        const c = u.clientX,
          h = u.clientY,
          { offsetX: w, offsetY: g } = n,
          f = e.value.getBoundingClientRect(),
          a = f.left,
          _ = f.top,
          S = f.width,
          O = f.height,
          z = document.documentElement.clientWidth,
          A = document.documentElement.clientHeight,
          Y = -a + w,
          y = -_ + g,
          m = z - a - S + w,
          k = A - _ - O + g,
          L = (b) => {
            const $ = Math.min(Math.max(w + b.clientX - c, Y), m),
              Q = Math.min(Math.max(g + b.clientY - h, y), k)
            ;(n = { offsetX: $, offsetY: Q }),
              (e.value.style.transform = `translate(${Se($)}, ${Se(Q)})`)
          },
          C = () => {
            document.removeEventListener('mousemove', L), document.removeEventListener('mouseup', C)
          }
        document.addEventListener('mousemove', L), document.addEventListener('mouseup', C)
      },
      d = () => {
        t.value && e.value && t.value.addEventListener('mousedown', s)
      },
      l = () => {
        t.value && e.value && t.value.removeEventListener('mousedown', s)
      }
    Ye(() => {
      jt(() => {
        o.value ? d() : l()
      })
    }),
      gt(() => {
        l()
      })
  }
var Go = {
  name: 'en',
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear',
      defaultLabel: 'color picker',
      description: 'current color is {color}. press enter to select a new color.',
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      dateTablePrompt: 'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec',
      },
    },
    inputNumber: { decrease: 'decrease number', increase: 'increase number' },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select',
    },
    dropdown: { toggleDropdown: 'Toggle Dropdown' },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select',
      noData: 'No data',
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details',
    },
    dialog: { close: 'Close this dialog' },
    drawer: { close: 'Close this dialog' },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input',
      close: 'Close this dialog',
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value',
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum',
    },
    tree: { emptyText: 'No Data' },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Enter keyword',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} checked',
    },
    image: { error: 'FAILED' },
    pageHeader: { title: 'Back' },
    popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' },
  },
}
const Uo = (e) => (t, o) => Wo(t, o, r(e)),
  Wo = (e, t, o) =>
    ko(o, e, e).replace(/\{(\w+)\}/g, (n, s) => {
      var d
      return `${(d = t == null ? void 0 : t[s]) != null ? d : `{${s}}`}`
    }),
  Vo = (e) => {
    const t = B(() => r(e).name),
      o = Qe(e) ? e : I(e)
    return { lang: t, locale: o, t: Uo(e) }
  },
  Nt = () => {
    const e = Tt('locale')
    return Vo(B(() => e.value || Go))
  },
  jo = (e) => {
    Qe(e) || Mt('[useLockscreen]', 'You need to pass a ref param to this function')
    const t = ie('popup'),
      o = Jt(() => t.bm('parent', 'hidden'))
    if (!we || ft(document.body, o.value)) return
    let n = 0,
      s = !1,
      d = '0'
    const l = () => {
      Do(document.body, o.value), s && (document.body.style.width = d)
    }
    ge(e, (u) => {
      if (!u) {
        l()
        return
      }
      ;(s = !ft(document.body, o.value)),
        s && (d = document.body.style.width),
        (n = Ho(t.namespace.value))
      const c = document.documentElement.clientHeight < document.body.scrollHeight,
        h = Io(document.body, 'overflowY')
      n > 0 && (c || h === 'scroll') && s && (document.body.style.width = `calc(100% - ${n}px)`),
        Mo(document.body, o.value)
    }),
      Xt(() => l())
  },
  Rt = (e) => {
    if (!e) return { onClick: Je, onMousedown: Je, onMouseup: Je }
    let t = !1,
      o = !1
    return {
      onClick: (l) => {
        t && o && e(l), (t = o = !1)
      },
      onMousedown: (l) => {
        t = l.target === l.currentTarget
      },
      onMouseup: (l) => {
        o = l.target === l.currentTarget
      },
    }
  },
  Ce = 4,
  Jo = {
    vertical: {
      offset: 'offsetHeight',
      scroll: 'scrollTop',
      scrollSize: 'scrollHeight',
      size: 'height',
      key: 'vertical',
      axis: 'Y',
      client: 'clientY',
      direction: 'top',
    },
    horizontal: {
      offset: 'offsetWidth',
      scroll: 'scrollLeft',
      scrollSize: 'scrollWidth',
      size: 'width',
      key: 'horizontal',
      axis: 'X',
      client: 'clientX',
      direction: 'left',
    },
  },
  Xo = ({ move: e, size: t, bar: o }) => ({ [o.size]: t, transform: `translate${o.axis}(${e}%)` }),
  qo = ue({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean,
  }),
  Zo = j({
    __name: 'thumb',
    props: qo,
    setup(e) {
      const t = e,
        o = 'Thumb',
        n = q(Lt),
        s = ie('scrollbar')
      n || Mt(o, 'can not inject scrollbar context')
      const d = I(),
        l = I(),
        u = I({}),
        c = I(!1)
      let h = !1,
        w = !1,
        g = we ? document.onselectstart : null
      const f = B(() => Jo[t.vertical ? 'vertical' : 'horizontal']),
        a = B(() => Xo({ size: t.size, move: t.move, bar: f.value })),
        _ = B(
          () =>
            Ae(d.value[f.value.offset], 2) /
            n.wrapElement[f.value.scrollSize] /
            t.ratio /
            l.value[f.value.offset],
        ),
        S = (L) => {
          var C
          if ((L.stopPropagation(), L.ctrlKey || [1, 2].includes(L.button))) return
          ;(C = window.getSelection()) == null || C.removeAllRanges(), z(L)
          const b = L.currentTarget
          !b ||
            (u.value[f.value.axis] =
              b[f.value.offset] -
              (L[f.value.client] - b.getBoundingClientRect()[f.value.direction]))
        },
        O = (L) => {
          if (!l.value || !d.value || !n.wrapElement) return
          const C = Math.abs(
              L.target.getBoundingClientRect()[f.value.direction] - L[f.value.client],
            ),
            b = l.value[f.value.offset] / 2,
            $ = ((C - b) * 100 * _.value) / d.value[f.value.offset]
          n.wrapElement[f.value.scroll] = ($ * n.wrapElement[f.value.scrollSize]) / 100
        },
        z = (L) => {
          L.stopImmediatePropagation(),
            (h = !0),
            document.addEventListener('mousemove', A),
            document.addEventListener('mouseup', Y),
            (g = document.onselectstart),
            (document.onselectstart = () => !1)
        },
        A = (L) => {
          if (!d.value || !l.value || h === !1) return
          const C = u.value[f.value.axis]
          if (!C) return
          const b = (d.value.getBoundingClientRect()[f.value.direction] - L[f.value.client]) * -1,
            $ = l.value[f.value.offset] - C,
            Q = ((b - $) * 100 * _.value) / d.value[f.value.offset]
          n.wrapElement[f.value.scroll] = (Q * n.wrapElement[f.value.scrollSize]) / 100
        },
        Y = () => {
          ;(h = !1),
            (u.value[f.value.axis] = 0),
            document.removeEventListener('mousemove', A),
            document.removeEventListener('mouseup', Y),
            k(),
            w && (c.value = !1)
        },
        y = () => {
          ;(w = !1), (c.value = !!t.size)
        },
        m = () => {
          ;(w = !0), (c.value = h)
        }
      gt(() => {
        k(), document.removeEventListener('mouseup', Y)
      })
      const k = () => {
        document.onselectstart !== g && (document.onselectstart = g)
      }
      return (
        Oe(ye(n, 'scrollbarElement'), 'mousemove', y),
        Oe(ye(n, 'scrollbarElement'), 'mouseleave', m),
        (L, C) => (
          R(),
          V(
            Ue,
            { name: r(s).b('fade'), persisted: '' },
            {
              default: N(() => [
                Ke(
                  K(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: d,
                      class: H([r(s).e('bar'), r(s).is(r(f).key)]),
                      onMousedown: O,
                    },
                    [
                      K(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: l,
                          class: H(r(s).e('thumb')),
                          style: be(r(a)),
                          onMousedown: S,
                        },
                        null,
                        38,
                      ),
                    ],
                    34,
                  ),
                  [[Ge, L.always || c.value]],
                ),
              ]),
              _: 1,
            },
            8,
            ['name'],
          )
        )
      )
    },
  })
var mt = oe(Zo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue',
  ],
])
const Qo = ue({
    always: { type: Boolean, default: !0 },
    width: String,
    height: String,
    ratioX: { type: Number, default: 1 },
    ratioY: { type: Number, default: 1 },
  }),
  xo = j({
    __name: 'bar',
    props: Qo,
    setup(e, { expose: t }) {
      const o = e,
        n = I(0),
        s = I(0)
      return (
        t({
          handleScroll: (l) => {
            if (l) {
              const u = l.offsetHeight - Ce,
                c = l.offsetWidth - Ce
              ;(s.value = ((l.scrollTop * 100) / u) * o.ratioY),
                (n.value = ((l.scrollLeft * 100) / c) * o.ratioX)
            }
          },
        }),
        (l, u) => (
          R(),
          Z(
            Me,
            null,
            [
              F(mt, { move: n.value, ratio: l.ratioX, size: l.width, always: l.always }, null, 8, [
                'move',
                'ratio',
                'size',
                'always',
              ]),
              F(
                mt,
                { move: s.value, ratio: l.ratioY, size: l.height, vertical: '', always: l.always },
                null,
                8,
                ['move', 'ratio', 'size', 'always'],
              ),
            ],
            64,
          )
        )
      )
    },
  })
var en = oe(xo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue',
  ],
])
const tn = ue({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: Boolean,
    wrapStyle: { type: le([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 },
  }),
  on = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(he) },
  nn = { name: 'ElScrollbar' },
  sn = j(
    ce(ee({}, nn), {
      props: tn,
      emits: on,
      setup(e, { expose: t, emit: o }) {
        const n = e,
          s = ie('scrollbar')
        let d, l
        const u = I(),
          c = I(),
          h = I(),
          w = I('0'),
          g = I('0'),
          f = I(),
          a = I(1),
          _ = I(1),
          S = B(() => {
            const m = {}
            return (
              n.height && (m.height = Se(n.height)),
              n.maxHeight && (m.maxHeight = Se(n.maxHeight)),
              [n.wrapStyle, m]
            )
          }),
          O = () => {
            var m
            c.value &&
              ((m = f.value) == null || m.handleScroll(c.value),
              o('scroll', { scrollTop: c.value.scrollTop, scrollLeft: c.value.scrollLeft }))
          }
        function z(m, k) {
          Qt(m) ? c.value.scrollTo(m) : he(m) && he(k) && c.value.scrollTo(m, k)
        }
        const A = (m) => {
            !he(m) || (c.value.scrollTop = m)
          },
          Y = (m) => {
            !he(m) || (c.value.scrollLeft = m)
          },
          y = () => {
            if (!c.value) return
            const m = c.value.offsetHeight - Ce,
              k = c.value.offsetWidth - Ce,
              L = Ae(m, 2) / c.value.scrollHeight,
              C = Ae(k, 2) / c.value.scrollWidth,
              b = Math.max(L, n.minSize),
              $ = Math.max(C, n.minSize)
            ;(a.value = L / (m - L) / (b / (m - b))),
              (_.value = C / (k - C) / ($ / (k - $))),
              (g.value = b + Ce < m ? `${b}px` : ''),
              (w.value = $ + Ce < k ? `${$}px` : '')
          }
        return (
          ge(
            () => n.noresize,
            (m) => {
              m
                ? (d == null || d(), l == null || l())
                : (({ stop: d } = Ct(h, y)), (l = Oe('resize', y)))
            },
            { immediate: !0 },
          ),
          ge(
            () => [n.maxHeight, n.height],
            () => {
              n.native ||
                Pe(() => {
                  var m
                  y(), c.value && ((m = f.value) == null || m.handleScroll(c.value))
                })
            },
          ),
          $e(Lt, qt({ scrollbarElement: u, wrapElement: c })),
          Ye(() => {
            n.native ||
              Pe(() => {
                y()
              })
          }),
          Zt(() => y()),
          t({
            wrap$: c,
            update: y,
            scrollTo: z,
            setScrollTop: A,
            setScrollLeft: Y,
            handleScroll: O,
          }),
          (m, k) => (
            R(),
            Z(
              'div',
              { ref_key: 'scrollbar$', ref: u, class: H(r(s).b()) },
              [
                K(
                  'div',
                  {
                    ref_key: 'wrap$',
                    ref: c,
                    class: H([
                      m.wrapClass,
                      r(s).e('wrap'),
                      { [r(s).em('wrap', 'hidden-default')]: !m.native },
                    ]),
                    style: be(r(S)),
                    onScroll: O,
                  },
                  [
                    (R(),
                    V(
                      We(m.tag),
                      {
                        ref_key: 'resize$',
                        ref: h,
                        class: H([r(s).e('view'), m.viewClass]),
                        style: be(m.viewStyle),
                      },
                      { default: N(() => [G(m.$slots, 'default')]), _: 3 },
                      8,
                      ['class', 'style'],
                    )),
                  ],
                  38,
                ),
                m.native
                  ? re('v-if', !0)
                  : (R(),
                    V(
                      en,
                      {
                        key: 0,
                        ref_key: 'barRef',
                        ref: f,
                        height: g.value,
                        width: w.value,
                        always: m.always,
                        'ratio-x': _.value,
                        'ratio-y': a.value,
                      },
                      null,
                      8,
                      ['height', 'width', 'always', 'ratio-x', 'ratio-y'],
                    )),
              ],
              2,
            )
          )
        )
      },
    }),
  )
var ln = oe(sn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue',
  ],
])
const rn = Ne(ln),
  an = ue({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger',
    },
  }),
  un = ['textContent'],
  cn = { name: 'ElBadge' },
  dn = j(
    ce(ee({}, cn), {
      props: an,
      setup(e, { expose: t }) {
        const o = e,
          n = ie('badge'),
          s = B(() =>
            o.isDot
              ? ''
              : he(o.value) && he(o.max)
              ? o.max < o.value
                ? `${o.max}+`
                : `${o.value}`
              : `${o.value}`,
          )
        return (
          t({ content: s }),
          (d, l) => (
            R(),
            Z(
              'div',
              { class: H(r(n).b()) },
              [
                G(d.$slots, 'default'),
                F(
                  Ue,
                  { name: `${r(n).namespace.value}-zoom-in-center`, persisted: '' },
                  {
                    default: N(() => [
                      Ke(
                        K(
                          'sup',
                          {
                            class: H([
                              r(n).e('content'),
                              r(n).em('content', d.type),
                              r(n).is('fixed', !!d.$slots.default),
                              r(n).is('dot', d.isDot),
                            ]),
                            textContent: de(r(s)),
                          },
                          null,
                          10,
                          un,
                        ),
                        [[Ge, !d.hidden && (r(s) || d.isDot)]],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['name'],
                ),
              ],
              2,
            )
          )
        )
      },
    }),
  )
var fn = oe(dn, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue'],
])
const pn = Ne(fn)
var Bt = { exports: {} }
;(function (e, t) {
  ;(function (o, n) {
    e.exports = n()
  })(To, function () {
    var o = 1e3,
      n = 6e4,
      s = 36e5,
      d = 'millisecond',
      l = 'second',
      u = 'minute',
      c = 'hour',
      h = 'day',
      w = 'week',
      g = 'month',
      f = 'quarter',
      a = 'year',
      _ = 'date',
      S = 'Invalid Date',
      O =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      A = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
      },
      Y = function (T, v, i) {
        var E = String(T)
        return !E || E.length >= v ? T : '' + Array(v + 1 - E.length).join(i) + T
      },
      y = {
        s: Y,
        z: function (T) {
          var v = -T.utcOffset(),
            i = Math.abs(v),
            E = Math.floor(i / 60),
            p = i % 60
          return (v <= 0 ? '+' : '-') + Y(E, 2, '0') + ':' + Y(p, 2, '0')
        },
        m: function T(v, i) {
          if (v.date() < i.date()) return -T(i, v)
          var E = 12 * (i.year() - v.year()) + (i.month() - v.month()),
            p = v.clone().add(E, g),
            D = i - p < 0,
            M = v.clone().add(E + (D ? -1 : 1), g)
          return +(-(E + (i - p) / (D ? p - M : M - p)) || 0)
        },
        a: function (T) {
          return T < 0 ? Math.ceil(T) || 0 : Math.floor(T)
        },
        p: function (T) {
          return (
            { M: g, y: a, w, d: h, D: _, h: c, m: u, s: l, ms: d, Q: f }[T] ||
            String(T || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (T) {
          return T === void 0
        },
      },
      m = 'en',
      k = {}
    k[m] = A
    var L = function (T) {
        return T instanceof Q
      },
      C = function T(v, i, E) {
        var p
        if (!v) return m
        if (typeof v == 'string') {
          var D = v.toLowerCase()
          k[D] && (p = D), i && ((k[D] = i), (p = D))
          var M = v.split('-')
          if (!p && M.length > 1) return T(M[0])
        } else {
          var P = v.name
          ;(k[P] = v), (p = P)
        }
        return !E && p && (m = p), p || (!E && m)
      },
      b = function (T, v) {
        if (L(T)) return T.clone()
        var i = typeof v == 'object' ? v : {}
        return (i.date = T), (i.args = arguments), new Q(i)
      },
      $ = y
    ;($.l = C),
      ($.i = L),
      ($.w = function (T, v) {
        return b(T, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset })
      })
    var Q = (function () {
        function T(i) {
          ;(this.$L = C(i.locale, null, !0)), this.parse(i)
        }
        var v = T.prototype
        return (
          (v.parse = function (i) {
            ;(this.$d = (function (E) {
              var p = E.date,
                D = E.utc
              if (p === null) return new Date(NaN)
              if ($.u(p)) return new Date()
              if (p instanceof Date) return new Date(p)
              if (typeof p == 'string' && !/Z$/i.test(p)) {
                var M = p.match(O)
                if (M) {
                  var P = M[2] - 1 || 0,
                    W = (M[7] || '0').substring(0, 3)
                  return D
                    ? new Date(Date.UTC(M[1], P, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, W))
                    : new Date(M[1], P, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, W)
                }
              }
              return new Date(p)
            })(i)),
              (this.$x = i.x || {}),
              this.init()
          }),
          (v.init = function () {
            var i = this.$d
            ;(this.$y = i.getFullYear()),
              (this.$M = i.getMonth()),
              (this.$D = i.getDate()),
              (this.$W = i.getDay()),
              (this.$H = i.getHours()),
              (this.$m = i.getMinutes()),
              (this.$s = i.getSeconds()),
              (this.$ms = i.getMilliseconds())
          }),
          (v.$utils = function () {
            return $
          }),
          (v.isValid = function () {
            return this.$d.toString() !== S
          }),
          (v.isSame = function (i, E) {
            var p = b(i)
            return this.startOf(E) <= p && p <= this.endOf(E)
          }),
          (v.isAfter = function (i, E) {
            return b(i) < this.startOf(E)
          }),
          (v.isBefore = function (i, E) {
            return this.endOf(E) < b(i)
          }),
          (v.$g = function (i, E, p) {
            return $.u(i) ? this[E] : this.set(p, i)
          }),
          (v.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (v.valueOf = function () {
            return this.$d.getTime()
          }),
          (v.startOf = function (i, E) {
            var p = this,
              D = !!$.u(E) || E,
              M = $.p(i),
              P = function (_e, ne) {
                var ve = $.w(p.$u ? Date.UTC(p.$y, ne, _e) : new Date(p.$y, ne, _e), p)
                return D ? ve : ve.endOf(h)
              },
              W = function (_e, ne) {
                return $.w(
                  p
                    .toDate()
                    [_e].apply(p.toDate('s'), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)),
                  p,
                )
              },
              U = this.$W,
              x = this.$M,
              me = this.$D,
              pe = 'set' + (this.$u ? 'UTC' : '')
            switch (M) {
              case a:
                return D ? P(1, 0) : P(31, 11)
              case g:
                return D ? P(1, x) : P(0, x + 1)
              case w:
                var Te = this.$locale().weekStart || 0,
                  ke = (U < Te ? U + 7 : U) - Te
                return P(D ? me - ke : me + (6 - ke), x)
              case h:
              case _:
                return W(pe + 'Hours', 0)
              case c:
                return W(pe + 'Minutes', 1)
              case u:
                return W(pe + 'Seconds', 2)
              case l:
                return W(pe + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (v.endOf = function (i) {
            return this.startOf(i, !1)
          }),
          (v.$set = function (i, E) {
            var p,
              D = $.p(i),
              M = 'set' + (this.$u ? 'UTC' : ''),
              P = ((p = {}),
              (p[h] = M + 'Date'),
              (p[_] = M + 'Date'),
              (p[g] = M + 'Month'),
              (p[a] = M + 'FullYear'),
              (p[c] = M + 'Hours'),
              (p[u] = M + 'Minutes'),
              (p[l] = M + 'Seconds'),
              (p[d] = M + 'Milliseconds'),
              p)[D],
              W = D === h ? this.$D + (E - this.$W) : E
            if (D === g || D === a) {
              var U = this.clone().set(_, 1)
              U.$d[P](W), U.init(), (this.$d = U.set(_, Math.min(this.$D, U.daysInMonth())).$d)
            } else P && this.$d[P](W)
            return this.init(), this
          }),
          (v.set = function (i, E) {
            return this.clone().$set(i, E)
          }),
          (v.get = function (i) {
            return this[$.p(i)]()
          }),
          (v.add = function (i, E) {
            var p,
              D = this
            i = Number(i)
            var M = $.p(E),
              P = function (x) {
                var me = b(D)
                return $.w(me.date(me.date() + Math.round(x * i)), D)
              }
            if (M === g) return this.set(g, this.$M + i)
            if (M === a) return this.set(a, this.$y + i)
            if (M === h) return P(1)
            if (M === w) return P(7)
            var W = ((p = {}), (p[u] = n), (p[c] = s), (p[l] = o), p)[M] || 1,
              U = this.$d.getTime() + i * W
            return $.w(U, this)
          }),
          (v.subtract = function (i, E) {
            return this.add(-1 * i, E)
          }),
          (v.format = function (i) {
            var E = this,
              p = this.$locale()
            if (!this.isValid()) return p.invalidDate || S
            var D = i || 'YYYY-MM-DDTHH:mm:ssZ',
              M = $.z(this),
              P = this.$H,
              W = this.$m,
              U = this.$M,
              x = p.weekdays,
              me = p.months,
              pe = function (ne, ve, je, Re) {
                return (ne && (ne[ve] || ne(E, D))) || je[ve].slice(0, Re)
              },
              Te = function (ne) {
                return $.s(P % 12 || 12, ne, '0')
              },
              ke =
                p.meridiem ||
                function (ne, ve, je) {
                  var Re = ne < 12 ? 'AM' : 'PM'
                  return je ? Re.toLowerCase() : Re
                },
              _e = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: U + 1,
                MM: $.s(U + 1, 2, '0'),
                MMM: pe(p.monthsShort, U, me, 3),
                MMMM: pe(me, U),
                D: this.$D,
                DD: $.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: pe(p.weekdaysMin, this.$W, x, 2),
                ddd: pe(p.weekdaysShort, this.$W, x, 3),
                dddd: x[this.$W],
                H: String(P),
                HH: $.s(P, 2, '0'),
                h: Te(1),
                hh: Te(2),
                a: ke(P, W, !0),
                A: ke(P, W, !1),
                m: String(W),
                mm: $.s(W, 2, '0'),
                s: String(this.$s),
                ss: $.s(this.$s, 2, '0'),
                SSS: $.s(this.$ms, 3, '0'),
                Z: M,
              }
            return D.replace(z, function (ne, ve) {
              return ve || _e[ne] || M.replace(':', '')
            })
          }),
          (v.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (v.diff = function (i, E, p) {
            var D,
              M = $.p(E),
              P = b(i),
              W = (P.utcOffset() - this.utcOffset()) * n,
              U = this - P,
              x = $.m(this, P)
            return (
              (x =
                ((D = {}),
                (D[a] = x / 12),
                (D[g] = x),
                (D[f] = x / 3),
                (D[w] = (U - W) / 6048e5),
                (D[h] = (U - W) / 864e5),
                (D[c] = U / s),
                (D[u] = U / n),
                (D[l] = U / o),
                D)[M] || U),
              p ? x : $.a(x)
            )
          }),
          (v.daysInMonth = function () {
            return this.endOf(g).$D
          }),
          (v.$locale = function () {
            return k[this.$L]
          }),
          (v.locale = function (i, E) {
            if (!i) return this.$L
            var p = this.clone(),
              D = C(i, E, !0)
            return D && (p.$L = D), p
          }),
          (v.clone = function () {
            return $.w(this.$d, this)
          }),
          (v.toDate = function () {
            return new Date(this.valueOf())
          }),
          (v.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (v.toISOString = function () {
            return this.$d.toISOString()
          }),
          (v.toString = function () {
            return this.$d.toUTCString()
          }),
          T
        )
      })(),
      J = Q.prototype
    return (
      (b.prototype = J),
      [
        ['$ms', d],
        ['$s', l],
        ['$m', u],
        ['$H', c],
        ['$W', h],
        ['$M', g],
        ['$y', a],
        ['$D', _],
      ].forEach(function (T) {
        J[T[1]] = function (v) {
          return this.$g(v, T[0], T[1])
        }
      }),
      (b.extend = function (T, v) {
        return T.$i || (T(v, Q, b), (T.$i = !0)), b
      }),
      (b.locale = C),
      (b.isDayjs = L),
      (b.unix = function (T) {
        return b(1e3 * T)
      }),
      (b.en = k[m]),
      (b.Ls = k),
      (b.p = {}),
      b
    )
  })
})(Bt)
const Ie = Bt.exports,
  qe = {},
  mn = ue({
    a11y: { type: Boolean, default: !0 },
    locale: { type: le(Object) },
    size: uo,
    button: { type: le(Object) },
    experimentalFeatures: { type: le(Object) },
    keyboardNavigation: { type: Boolean, default: !0 },
    message: { type: le(Object) },
    zIndex: Number,
    namespace: { type: String, default: 'el' },
  })
j({
  name: 'ElConfigProvider',
  props: mn,
  setup(e, { slots: t }) {
    ge(
      () => e.message,
      (n) => {
        Object.assign(qe, n != null ? n : {})
      },
      { immediate: !0, deep: !0 },
    )
    const o = Oo(e)
    return () => G(t, 'default', { config: o == null ? void 0 : o.value })
  },
})
const vn = ue({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: le([String, Array, Object]) },
    zIndex: { type: le([String, Number]) },
  }),
  hn = { click: (e) => e instanceof MouseEvent }
var gn = j({
  name: 'ElOverlay',
  props: vn,
  emits: hn,
  setup(e, { slots: t, emit: o }) {
    const n = ie('overlay'),
      s = (c) => {
        o('click', c)
      },
      { onClick: d, onMousedown: l, onMouseup: u } = Rt(e.customMaskEvent ? void 0 : s)
    return () =>
      e.mask
        ? F(
            'div',
            {
              class: [n.b(), e.overlayClass],
              style: { zIndex: e.zIndex },
              onClick: d,
              onMousedown: l,
              onMouseup: u,
            },
            [G(t, 'default')],
            ze.STYLE | ze.CLASS | ze.PROPS,
            ['onClick', 'onMouseup', 'onMousedown'],
          )
        : xt(
            'div',
            {
              class: e.overlayClass,
              style: {
                zIndex: e.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
            [G(t, 'default')],
          )
  },
})
const yn = gn,
  At = ue({
    center: { type: Boolean, default: !1 },
    closeIcon: { type: It, default: '' },
    customClass: { type: String, default: '' },
    draggable: { type: Boolean, default: !1 },
    fullscreen: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
  }),
  bn = { close: () => !0 },
  wn = ['aria-label'],
  _n = ['id'],
  Cn = { name: 'ElDialogContent' },
  $n = j(
    ce(ee({}, Cn), {
      props: At,
      emits: bn,
      setup(e) {
        const t = e,
          { t: o } = Nt(),
          { Close: n } = Fo,
          { dialogRef: s, headerRef: d, bodyId: l, ns: u, style: c } = q(Ot),
          { focusTrapRef: h } = q($t),
          w = tt(h, s),
          g = B(() => t.draggable)
        return (
          Ko(s, d, g),
          (f, a) => (
            R(),
            Z(
              'div',
              {
                ref: r(w),
                class: H([
                  r(u).b(),
                  r(u).is('fullscreen', f.fullscreen),
                  r(u).is('draggable', r(g)),
                  { [r(u).m('center')]: f.center },
                  f.customClass,
                ]),
                style: be(r(c)),
                tabindex: '-1',
                onClick: a[1] || (a[1] = yt(() => {}, ['stop'])),
              },
              [
                K(
                  'header',
                  { ref_key: 'headerRef', ref: d, class: H(r(u).e('header')) },
                  [
                    G(f.$slots, 'header', {}, () => [
                      K('span', { role: 'heading', class: H(r(u).e('title')) }, de(f.title), 3),
                    ]),
                    f.showClose
                      ? (R(),
                        Z(
                          'button',
                          {
                            key: 0,
                            'aria-label': r(o)('el.dialog.close'),
                            class: H(r(u).e('headerbtn')),
                            type: 'button',
                            onClick: a[0] || (a[0] = (_) => f.$emit('close')),
                          },
                          [
                            F(
                              r(Le),
                              { class: H(r(u).e('close')) },
                              { default: N(() => [(R(), V(We(f.closeIcon || r(n))))]), _: 1 },
                              8,
                              ['class'],
                            ),
                          ],
                          10,
                          wn,
                        ))
                      : re('v-if', !0),
                  ],
                  2,
                ),
                K('div', { id: r(l), class: H(r(u).e('body')) }, [G(f.$slots, 'default')], 10, _n),
                f.$slots.footer
                  ? (R(),
                    Z('footer', { key: 0, class: H(r(u).e('footer')) }, [G(f.$slots, 'footer')], 2))
                  : re('v-if', !0),
              ],
              6,
            )
          )
        )
      },
    }),
  )
var Sn = oe($n, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue',
  ],
])
const En = ue(
    ce(ee({}, At), {
      appendToBody: { type: Boolean, default: !1 },
      beforeClose: { type: le(Function) },
      destroyOnClose: { type: Boolean, default: !1 },
      closeOnClickModal: { type: Boolean, default: !0 },
      closeOnPressEscape: { type: Boolean, default: !0 },
      lockScroll: { type: Boolean, default: !0 },
      modal: { type: Boolean, default: !0 },
      openDelay: { type: Number, default: 0 },
      closeDelay: { type: Number, default: 0 },
      top: { type: String },
      modelValue: { type: Boolean, default: !1 },
      modalClass: String,
      width: { type: [String, Number] },
      zIndex: { type: Number },
      trapFocus: { type: Boolean, default: !1 },
    }),
  ),
  Tn = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [Dt]: (e) => Lo(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0,
  },
  kn = (e, t) => {
    const n = xe().emit,
      { nextZIndex: s } = St()
    let d = ''
    const l = He(),
      u = He(),
      c = I(!1),
      h = I(!1),
      w = I(!1),
      g = I(e.zIndex || s())
    let f, a
    const _ = Tt('namespace', No),
      S = B(() => {
        const J = {},
          T = `--${_.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (J[`${T}-margin-top`] = e.top), e.width && (J[`${T}-width`] = Se(e.width))),
          J
        )
      })
    function O() {
      n('opened')
    }
    function z() {
      n('closed'), n(Dt, !1), e.destroyOnClose && (w.value = !1)
    }
    function A() {
      n('close')
    }
    function Y() {
      a == null || a(),
        f == null || f(),
        e.openDelay && e.openDelay > 0 ? ({ stop: f } = Xe(() => L(), e.openDelay)) : L()
    }
    function y() {
      f == null || f(),
        a == null || a(),
        e.closeDelay && e.closeDelay > 0 ? ({ stop: a } = Xe(() => C(), e.closeDelay)) : C()
    }
    function m() {
      function J(T) {
        T || ((h.value = !0), (c.value = !1))
      }
      e.beforeClose ? e.beforeClose(J) : y()
    }
    function k() {
      e.closeOnClickModal && m()
    }
    function L() {
      !we || (c.value = !0)
    }
    function C() {
      c.value = !1
    }
    function b() {
      n('openAutoFocus')
    }
    function $() {
      n('closeAutoFocus')
    }
    e.lockScroll && jo(c)
    function Q() {
      e.closeOnPressEscape && m()
    }
    return (
      ge(
        () => e.modelValue,
        (J) => {
          J
            ? ((h.value = !1),
              Y(),
              (w.value = !0),
              n('open'),
              (g.value = e.zIndex ? g.value++ : s()),
              Pe(() => {
                t.value && (t.value.scrollTop = 0)
              }))
            : c.value && y()
        },
      ),
      ge(
        () => e.fullscreen,
        (J) => {
          !t.value ||
            (J
              ? ((d = t.value.style.transform), (t.value.style.transform = ''))
              : (t.value.style.transform = d))
        },
      ),
      Ye(() => {
        e.modelValue && ((c.value = !0), (w.value = !0), Y())
      }),
      {
        afterEnter: O,
        afterLeave: z,
        beforeLeave: A,
        handleClose: m,
        onModalClick: k,
        close: y,
        doClose: C,
        onOpenAutoFocus: b,
        onCloseAutoFocus: $,
        onCloseRequested: Q,
        titleId: l,
        bodyId: u,
        closed: h,
        style: S,
        rendered: w,
        visible: c,
        zIndex: g,
      }
    )
  },
  In = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Mn = { name: 'ElDialog' },
  Dn = j(
    ce(ee({}, Mn), {
      props: En,
      emits: Tn,
      setup(e, { expose: t }) {
        const o = e,
          n = eo()
        co(
          {
            scope: 'el-dialog',
            from: 'the title slot',
            replacement: 'the header slot',
            version: '3.0.0',
            ref: 'https://element-plus.org/en-US/component/dialog.html#slots',
          },
          B(() => !!n.title),
        )
        const s = ie('dialog'),
          d = I(),
          l = I(),
          u = I(),
          {
            visible: c,
            titleId: h,
            bodyId: w,
            style: g,
            rendered: f,
            zIndex: a,
            afterEnter: _,
            afterLeave: S,
            beforeLeave: O,
            handleClose: z,
            onModalClick: A,
            onOpenAutoFocus: Y,
            onCloseAutoFocus: y,
            onCloseRequested: m,
          } = kn(o, d)
        $e(Ot, { dialogRef: d, headerRef: l, bodyId: w, ns: s, rendered: f, style: g })
        const k = Rt(A),
          L = B(() => o.draggable && !o.fullscreen)
        return (
          t({ visible: c, dialogContentRef: u }),
          (C, b) => (
            R(),
            V(
              to,
              { to: 'body', disabled: !C.appendToBody },
              [
                F(
                  Ue,
                  {
                    name: 'dialog-fade',
                    onAfterEnter: r(_),
                    onAfterLeave: r(S),
                    onBeforeLeave: r(O),
                    persisted: '',
                  },
                  {
                    default: N(() => [
                      Ke(
                        F(
                          r(yn),
                          {
                            'custom-mask-event': '',
                            mask: C.modal,
                            'overlay-class': C.modalClass,
                            'z-index': r(a),
                          },
                          {
                            default: N(() => [
                              K(
                                'div',
                                {
                                  role: 'dialog',
                                  'aria-modal': 'true',
                                  'aria-label': C.title || void 0,
                                  'aria-labelledby': C.title ? void 0 : r(h),
                                  'aria-describedby': r(w),
                                  class: H(`${r(s).namespace.value}-overlay-dialog`),
                                  onClick:
                                    b[0] || (b[0] = (...$) => r(k).onClick && r(k).onClick(...$)),
                                  onMousedown:
                                    b[1] ||
                                    (b[1] = (...$) => r(k).onMousedown && r(k).onMousedown(...$)),
                                  onMouseup:
                                    b[2] ||
                                    (b[2] = (...$) => r(k).onMouseup && r(k).onMouseup(...$)),
                                },
                                [
                                  F(
                                    r(po),
                                    {
                                      loop: '',
                                      trapped: r(c),
                                      'focus-start-el': 'container',
                                      onFocusAfterTrapped: r(Y),
                                      onFocusAfterReleased: r(y),
                                      onReleaseRequested: r(m),
                                    },
                                    {
                                      default: N(() => [
                                        r(f)
                                          ? (R(),
                                            V(
                                              Sn,
                                              {
                                                key: 0,
                                                ref_key: 'dialogContentRef',
                                                ref: u,
                                                'custom-class': C.customClass,
                                                center: C.center,
                                                'close-icon': C.closeIcon,
                                                draggable: r(L),
                                                fullscreen: C.fullscreen,
                                                'show-close': C.showClose,
                                                title: C.title,
                                                onClose: r(z),
                                              },
                                              bt(
                                                {
                                                  header: N(() => [
                                                    C.$slots.title
                                                      ? G(C.$slots, 'title', { key: 1 })
                                                      : G(C.$slots, 'header', {
                                                          key: 0,
                                                          close: r(z),
                                                          titleId: r(h),
                                                          titleClass: r(s).e('title'),
                                                        }),
                                                  ]),
                                                  default: N(() => [G(C.$slots, 'default')]),
                                                  _: 2,
                                                },
                                                [
                                                  C.$slots.footer
                                                    ? {
                                                        name: 'footer',
                                                        fn: N(() => [G(C.$slots, 'footer')]),
                                                      }
                                                    : void 0,
                                                ],
                                              ),
                                              1032,
                                              [
                                                'custom-class',
                                                'center',
                                                'close-icon',
                                                'draggable',
                                                'fullscreen',
                                                'show-close',
                                                'title',
                                                'onClose',
                                              ],
                                            ))
                                          : re('v-if', !0),
                                      ]),
                                      _: 3,
                                    },
                                    8,
                                    [
                                      'trapped',
                                      'onFocusAfterTrapped',
                                      'onFocusAfterReleased',
                                      'onReleaseRequested',
                                    ],
                                  ),
                                ],
                                42,
                                In,
                              ),
                            ]),
                            _: 3,
                          },
                          8,
                          ['mask', 'overlay-class', 'z-index'],
                        ),
                        [[Ge, r(c)]],
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave'],
                ),
              ],
              8,
              ['disabled'],
            )
          )
        )
      },
    }),
  )
var On = oe(Dn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue',
  ],
])
const Ln = Ne(On),
  Nn = ue({
    direction: { type: String, values: ['horizontal', 'vertical'], default: 'horizontal' },
    contentPosition: { type: String, values: ['left', 'center', 'right'], default: 'center' },
    borderStyle: { type: le(String), default: 'solid' },
  }),
  Rn = { name: 'ElDivider' },
  Bn = j(
    ce(ee({}, Rn), {
      props: Nn,
      setup(e) {
        const t = e,
          o = ie('divider'),
          n = B(() => o.cssVar({ 'border-style': t.borderStyle }))
        return (s, d) => (
          R(),
          Z(
            'div',
            { class: H([r(o).b(), r(o).m(s.direction)]), style: be(r(n)), role: 'separator' },
            [
              s.$slots.default && s.direction !== 'vertical'
                ? (R(),
                  Z(
                    'div',
                    { key: 0, class: H([r(o).e('text'), r(o).is(s.contentPosition)]) },
                    [G(s.$slots, 'default')],
                    2,
                  ))
                : re('v-if', !0),
            ],
            6,
          )
        )
      },
    }),
  )
var An = oe(Bn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue',
  ],
])
const Fn = Ne(An),
  zn = ue({
    style: { type: le([String, Array, Object]) },
    currentTabId: { type: le(String) },
    defaultCurrentTabId: String,
    loop: Boolean,
    dir: { type: String, values: ['ltr', 'rtl'], default: 'ltr' },
    orientation: { type: le(String) },
    onBlur: Function,
    onFocus: Function,
    onMousedown: Function,
  }),
  {
    ElCollection: Pn,
    ElCollectionItem: Hn,
    COLLECTION_INJECTION_KEY: ot,
    COLLECTION_ITEM_INJECTION_KEY: Yn,
  } = mo('RovingFocusGroup'),
  nt = Symbol('elRovingFocusGroup'),
  Ft = Symbol('elRovingFocusGroupItem'),
  Kn = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
  },
  Gn = (e, t) => {
    if (t !== 'rtl') return e
    switch (e) {
      case te.right:
        return te.left
      case te.left:
        return te.right
      default:
        return e
    }
  },
  Un = (e, t, o) => {
    const n = Gn(e.key, o)
    if (
      !(t === 'vertical' && [te.left, te.right].includes(n)) &&
      !(t === 'horizontal' && [te.up, te.down].includes(n))
    )
      return Kn[n]
  },
  Wn = (e, t) => e.map((o, n) => e[(n + t) % e.length]),
  st = (e) => {
    const { activeElement: t } = document
    for (const o of e) if (o === t || (o.focus(), t !== document.activeElement)) return
  },
  vt = 'currentTabIdChange',
  ht = 'rovingFocusGroup.entryFocus',
  Vn = { bubbles: !1, cancelable: !0 },
  jn = j({
    name: 'ElRovingFocusGroupImpl',
    inheritAttrs: !1,
    props: zn,
    emits: [vt, 'entryFocus'],
    setup(e, { emit: t }) {
      var o
      const n = I((o = e.currentTabId || e.defaultCurrentTabId) != null ? o : null),
        s = I(!1),
        d = I(!1),
        l = I(null),
        { getItems: u } = q(ot, void 0),
        c = B(() => [{ outline: 'none' }, e.style]),
        h = (S) => {
          t(vt, S)
        },
        w = () => {
          s.value = !0
        },
        g = ae(
          (S) => {
            var O
            ;(O = e.onMousedown) == null || O.call(e, S)
          },
          () => {
            d.value = !0
          },
        ),
        f = ae(
          (S) => {
            var O
            ;(O = e.onFocus) == null || O.call(e, S)
          },
          (S) => {
            const O = !r(d),
              { target: z, currentTarget: A } = S
            if (z === A && O && !r(s)) {
              const Y = new Event(ht, Vn)
              if ((A == null || A.dispatchEvent(Y), !Y.defaultPrevented)) {
                const y = u().filter((b) => b.focusable),
                  m = y.find((b) => b.active),
                  k = y.find((b) => b.id === r(n)),
                  C = [m, k, ...y].filter(Boolean).map((b) => b.ref)
                st(C)
              }
            }
            d.value = !1
          },
        ),
        a = ae(
          (S) => {
            var O
            ;(O = e.onBlur) == null || O.call(e, S)
          },
          () => {
            s.value = !1
          },
        ),
        _ = (...S) => {
          t('entryFocus', ...S)
        }
      $e(nt, {
        currentTabbedId: oo(n),
        loop: ye(e, 'loop'),
        tabIndex: B(() => (r(s) ? -1 : 0)),
        rovingFocusGroupRef: l,
        rovingFocusGroupRootStyle: c,
        orientation: ye(e, 'orientation'),
        dir: ye(e, 'dir'),
        onItemFocus: h,
        onItemShiftTab: w,
        onBlur: a,
        onFocus: f,
        onMousedown: g,
      }),
        ge(
          () => e.currentTabId,
          (S) => {
            n.value = S != null ? S : null
          },
        ),
        Oe(l, ht, _)
    },
  })
function Jn(e, t, o, n, s, d) {
  return G(e.$slots, 'default')
}
var Xn = oe(jn, [
  ['render', Jn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue',
  ],
])
const qn = j({
  name: 'ElRovingFocusGroup',
  components: { ElFocusGroupCollection: Pn, ElRovingFocusGroupImpl: Xn },
})
function Zn(e, t, o, n, s, d) {
  const l = X('el-roving-focus-group-impl'),
    u = X('el-focus-group-collection')
  return (
    R(),
    V(u, null, {
      default: N(() => [
        F(l, no(so(e.$attrs)), { default: N(() => [G(e.$slots, 'default')]), _: 3 }, 16),
      ]),
      _: 3,
    })
  )
}
var Qn = oe(qn, [
  ['render', Zn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue',
  ],
])
const xn = j({
  components: { ElRovingFocusCollectionItem: Hn },
  props: { focusable: { type: Boolean, default: !0 }, active: { type: Boolean, default: !1 } },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(e, { emit: t }) {
    const { currentTabbedId: o, loop: n, onItemFocus: s, onItemShiftTab: d } = q(nt, void 0),
      { getItems: l } = q(ot, void 0),
      u = He(),
      c = I(null),
      h = ae(
        (a) => {
          t('mousedown', a)
        },
        (a) => {
          e.focusable ? s(r(u)) : a.preventDefault()
        },
      ),
      w = ae(
        (a) => {
          t('focus', a)
        },
        () => {
          s(r(u))
        },
      ),
      g = ae(
        (a) => {
          t('keydown', a)
        },
        (a) => {
          const { key: _, shiftKey: S, target: O, currentTarget: z } = a
          if (_ === te.tab && S) {
            d()
            return
          }
          if (O !== z) return
          const A = Un(a)
          if (A) {
            a.preventDefault()
            let y = l()
              .filter((m) => m.focusable)
              .map((m) => m.ref)
            switch (A) {
              case 'last': {
                y.reverse()
                break
              }
              case 'prev':
              case 'next': {
                A === 'prev' && y.reverse()
                const m = y.indexOf(z)
                y = n.value ? Wn(y, m + 1) : y.slice(m + 1)
                break
              }
            }
            Pe(() => {
              st(y)
            })
          }
        },
      ),
      f = B(() => o.value === r(u))
    return (
      $e(Ft, {
        rovingFocusGroupItemRef: c,
        tabIndex: B(() => (r(f) ? 0 : -1)),
        handleMousedown: h,
        handleFocus: w,
        handleKeydown: g,
      }),
      { id: u, handleKeydown: g, handleFocus: w, handleMousedown: h }
    )
  },
})
function es(e, t, o, n, s, d) {
  const l = X('el-roving-focus-collection-item')
  return (
    R(),
    V(
      l,
      { id: e.id, focusable: e.focusable, active: e.active },
      { default: N(() => [G(e.$slots, 'default')]), _: 3 },
      8,
      ['id', 'focusable', 'active'],
    )
  )
}
var ts = oe(xn, [
  ['render', es],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue',
  ],
])
const Ve = Symbol('elDropdown'),
  { ButtonGroup: os } = et,
  ns = j({
    name: 'ElDropdown',
    components: {
      ElButton: et,
      ElButtonGroup: os,
      ElScrollbar: rn,
      ElDropdownCollection: vo,
      ElTooltip: ho,
      ElRovingFocusGroup: Qn,
      ElOnlyChild: go,
      ElIcon: Le,
      ArrowDown: Ro,
    },
    props: yo,
    emits: ['visible-change', 'click', 'command'],
    setup(e, { emit: t }) {
      const o = xe(),
        n = ie('dropdown'),
        { t: s } = Nt(),
        d = I(),
        l = I(),
        u = I(null),
        c = I(null),
        h = I(null),
        w = I(null),
        g = I(!1),
        f = [te.enter, te.space, te.down],
        a = B(() => ({ maxHeight: Se(e.maxHeight) })),
        _ = B(() => [n.m(y.value)]),
        S = He().value,
        O = B(() => e.id || S)
      function z() {
        A()
      }
      function A() {
        var i
        ;(i = u.value) == null || i.onClose()
      }
      function Y() {
        var i
        ;(i = u.value) == null || i.onOpen()
      }
      const y = fo()
      function m(...i) {
        t('command', ...i)
      }
      function k() {}
      function L() {
        const i = r(c)
        i == null || i.focus(), (w.value = null)
      }
      function C(i) {
        w.value = i
      }
      function b(i) {
        g.value || (i.preventDefault(), i.stopImmediatePropagation())
      }
      function $() {
        t('visible-change', !0)
      }
      function Q(i) {
        ;(i == null ? void 0 : i.type) === 'keydown' && c.value.focus()
      }
      function J() {
        t('visible-change', !1)
      }
      return (
        $e(Ve, {
          contentRef: c,
          role: B(() => e.role),
          triggerId: O,
          isUsingKeyboard: g,
          onItemEnter: k,
          onItemLeave: L,
        }),
        $e('elDropdown', {
          instance: o,
          dropdownSize: y,
          handleClick: z,
          commandHandler: m,
          trigger: ye(e, 'trigger'),
          hideOnClick: ye(e, 'hideOnClick'),
        }),
        {
          t: s,
          ns: n,
          scrollbar: h,
          wrapStyle: a,
          dropdownTriggerKls: _,
          dropdownSize: y,
          triggerId: O,
          triggerKeys: f,
          currentTabId: w,
          handleCurrentTabIdChange: C,
          handlerMainButtonClick: (i) => {
            t('click', i)
          },
          handleEntryFocus: b,
          handleClose: A,
          handleOpen: Y,
          handleBeforeShowTooltip: $,
          handleShowTooltip: Q,
          handleBeforeHideTooltip: J,
          onFocusAfterTrapped: (i) => {
            var E, p
            i.preventDefault(),
              (p = (E = c.value) == null ? void 0 : E.focus) == null ||
                p.call(E, { preventScroll: !0 })
          },
          popperRef: u,
          contentRef: c,
          triggeringElementRef: d,
          referenceElementRef: l,
        }
      )
    },
  })
function ss(e, t, o, n, s, d) {
  var l
  const u = X('el-dropdown-collection'),
    c = X('el-roving-focus-group'),
    h = X('el-scrollbar'),
    w = X('el-only-child'),
    g = X('el-tooltip'),
    f = X('el-button'),
    a = X('arrow-down'),
    _ = X('el-icon'),
    S = X('el-button-group')
  return (
    R(),
    Z(
      'div',
      { class: H([e.ns.b(), e.ns.is('disabled', e.disabled)]) },
      [
        F(
          g,
          {
            ref: 'popperRef',
            role: e.role,
            effect: e.effect,
            'fallback-placements': ['bottom', 'top'],
            'popper-options': e.popperOptions,
            'gpu-acceleration': !1,
            'hide-after': e.trigger === 'hover' ? e.hideTimeout : 0,
            'manual-mode': !0,
            placement: e.placement,
            'popper-class': [e.ns.e('popper'), e.popperClass],
            'reference-element': (l = e.referenceElementRef) == null ? void 0 : l.$el,
            trigger: e.trigger,
            'trigger-keys': e.triggerKeys,
            'trigger-target-el': e.contentRef,
            'show-after': e.trigger === 'hover' ? e.showTimeout : 0,
            'stop-popper-mouse-event': !1,
            'virtual-ref': e.triggeringElementRef,
            'virtual-triggering': e.splitButton,
            disabled: e.disabled,
            transition: `${e.ns.namespace.value}-zoom-in-top`,
            teleported: '',
            pure: '',
            persistent: '',
            onBeforeShow: e.handleBeforeShowTooltip,
            onShow: e.handleShowTooltip,
            onBeforeHide: e.handleBeforeHideTooltip,
          },
          bt(
            {
              content: N(() => [
                F(
                  h,
                  {
                    ref: 'scrollbar',
                    'wrap-style': e.wrapStyle,
                    tag: 'div',
                    'view-class': e.ns.e('list'),
                  },
                  {
                    default: N(() => [
                      F(
                        c,
                        {
                          loop: e.loop,
                          'current-tab-id': e.currentTabId,
                          orientation: 'horizontal',
                          onCurrentTabIdChange: e.handleCurrentTabIdChange,
                          onEntryFocus: e.handleEntryFocus,
                        },
                        {
                          default: N(() => [
                            F(u, null, { default: N(() => [G(e.$slots, 'dropdown')]), _: 3 }),
                          ]),
                          _: 3,
                        },
                        8,
                        ['loop', 'current-tab-id', 'onCurrentTabIdChange', 'onEntryFocus'],
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['wrap-style', 'view-class'],
                ),
              ]),
              _: 2,
            },
            [
              e.splitButton
                ? void 0
                : {
                    name: 'default',
                    fn: N(() => [
                      F(
                        w,
                        { id: e.triggerId, role: 'button', tabindex: e.tabindex },
                        { default: N(() => [G(e.$slots, 'default')]), _: 3 },
                        8,
                        ['id', 'tabindex'],
                      ),
                    ]),
                  },
            ],
          ),
          1032,
          [
            'role',
            'effect',
            'popper-options',
            'hide-after',
            'placement',
            'popper-class',
            'reference-element',
            'trigger',
            'trigger-keys',
            'trigger-target-el',
            'show-after',
            'virtual-ref',
            'virtual-triggering',
            'disabled',
            'transition',
            'onBeforeShow',
            'onShow',
            'onBeforeHide',
          ],
        ),
        e.splitButton
          ? (R(),
            V(
              S,
              { key: 0 },
              {
                default: N(() => [
                  F(
                    f,
                    De({ ref: 'referenceElementRef' }, e.buttonProps, {
                      size: e.dropdownSize,
                      type: e.type,
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      onClick: e.handlerMainButtonClick,
                    }),
                    { default: N(() => [G(e.$slots, 'default')]), _: 3 },
                    16,
                    ['size', 'type', 'disabled', 'tabindex', 'onClick'],
                  ),
                  F(
                    f,
                    De({ id: e.triggerId, ref: 'triggeringElementRef' }, e.buttonProps, {
                      role: 'button',
                      size: e.dropdownSize,
                      type: e.type,
                      class: e.ns.e('caret-button'),
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      'aria-label': e.t('el.dropdown.toggleDropdown'),
                    }),
                    {
                      default: N(() => [
                        F(_, { class: H(e.ns.e('icon')) }, { default: N(() => [F(a)]), _: 1 }, 8, [
                          'class',
                        ]),
                      ]),
                      _: 1,
                    },
                    16,
                    ['id', 'size', 'type', 'class', 'disabled', 'tabindex', 'aria-label'],
                  ),
                ]),
                _: 3,
              },
            ))
          : re('v-if', !0),
      ],
      2,
    )
  )
}
var ls = oe(ns, [
  ['render', ss],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue',
  ],
])
const rs = j({
    name: 'DropdownItemImpl',
    components: { ElIcon: Le },
    props: Et,
    emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
    setup(e, { emit: t }) {
      const o = ie('dropdown'),
        { role: n } = q(Ve, void 0),
        { collectionItemRef: s } = q(bo, void 0),
        { collectionItemRef: d } = q(Yn, void 0),
        {
          rovingFocusGroupItemRef: l,
          tabIndex: u,
          handleFocus: c,
          handleKeydown: h,
          handleMousedown: w,
        } = q(Ft, void 0),
        g = tt(s, d, l),
        f = B(() =>
          n.value === 'menu' ? 'menuitem' : n.value === 'navigation' ? 'link' : 'button',
        ),
        a = ae((_) => {
          const { code: S } = _
          if (S === te.enter || S === te.space)
            return _.preventDefault(), _.stopImmediatePropagation(), t('clickimpl', _), !0
        }, h)
      return {
        ns: o,
        itemRef: g,
        dataset: { [wo]: '' },
        role: f,
        tabIndex: u,
        handleFocus: c,
        handleKeydown: a,
        handleMousedown: w,
      }
    },
  }),
  as = ['aria-disabled', 'tabindex', 'role']
function is(e, t, o, n, s, d) {
  const l = X('el-icon')
  return (
    R(),
    Z(
      Me,
      null,
      [
        e.divided
          ? (R(),
            Z(
              'li',
              De(
                { key: 0, role: 'separator', class: e.ns.bem('menu', 'item', 'divided') },
                e.$attrs,
              ),
              null,
              16,
            ))
          : re('v-if', !0),
        K(
          'li',
          De({ ref: e.itemRef }, ee(ee({}, e.dataset), e.$attrs), {
            'aria-disabled': e.disabled,
            class: [e.ns.be('menu', 'item'), e.ns.is('disabled', e.disabled)],
            tabindex: e.tabIndex,
            role: e.role,
            onClick: t[0] || (t[0] = (u) => e.$emit('clickimpl', u)),
            onFocus: t[1] || (t[1] = (...u) => e.handleFocus && e.handleFocus(...u)),
            onKeydown: t[2] || (t[2] = (...u) => e.handleKeydown && e.handleKeydown(...u)),
            onMousedown: t[3] || (t[3] = (...u) => e.handleMousedown && e.handleMousedown(...u)),
            onPointermove: t[4] || (t[4] = (u) => e.$emit('pointermove', u)),
            onPointerleave: t[5] || (t[5] = (u) => e.$emit('pointerleave', u)),
          }),
          [
            e.icon
              ? (R(), V(l, { key: 0 }, { default: N(() => [(R(), V(We(e.icon)))]), _: 1 }))
              : re('v-if', !0),
            G(e.$slots, 'default'),
          ],
          16,
          as,
        ),
      ],
      64,
    )
  )
}
var us = oe(rs, [
  ['render', is],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue',
  ],
])
const zt = () => {
    const e = q('elDropdown', {}),
      t = B(() => (e == null ? void 0 : e.dropdownSize))
    return { elDropdown: e, _elDropdownSize: t }
  },
  cs = j({
    name: 'ElDropdownItem',
    components: { ElDropdownCollectionItem: _o, ElRovingFocusItem: ts, ElDropdownItemImpl: us },
    inheritAttrs: !1,
    props: Et,
    emits: ['pointermove', 'pointerleave', 'click'],
    setup(e, { emit: t, attrs: o }) {
      const { elDropdown: n } = zt(),
        s = xe(),
        d = I(null),
        l = B(() => {
          var a, _
          return (_ = (a = r(d)) == null ? void 0 : a.textContent) != null ? _ : ''
        }),
        { onItemEnter: u, onItemLeave: c } = q(Ve, void 0),
        h = ae(
          (a) => (t('pointermove', a), a.defaultPrevented),
          dt((a) => {
            var _
            e.disabled
              ? c(a)
              : (u(a), a.defaultPrevented || (_ = a.currentTarget) == null || _.focus())
          }),
        ),
        w = ae(
          (a) => (t('pointerleave', a), a.defaultPrevented),
          dt((a) => {
            c(a)
          }),
        ),
        g = ae(
          (a) => (t('click', a), a.type !== 'keydown' && a.defaultPrevented),
          (a) => {
            var _, S, O
            if (e.disabled) {
              a.stopImmediatePropagation()
              return
            }
            ;(_ = n == null ? void 0 : n.hideOnClick) != null &&
              _.value &&
              ((S = n.handleClick) == null || S.call(n)),
              (O = n.commandHandler) == null || O.call(n, e.command, s, a)
          },
        ),
        f = B(() => ee(ee({}, e), o))
      return {
        handleClick: g,
        handlePointerMove: h,
        handlePointerLeave: w,
        textContent: l,
        propsAndAttrs: f,
      }
    },
  })
function ds(e, t, o, n, s, d) {
  var l
  const u = X('el-dropdown-item-impl'),
    c = X('el-roving-focus-item'),
    h = X('el-dropdown-collection-item')
  return (
    R(),
    V(
      h,
      { disabled: e.disabled, 'text-value': (l = e.textValue) != null ? l : e.textContent },
      {
        default: N(() => [
          F(
            c,
            { focusable: !e.disabled },
            {
              default: N(() => [
                F(
                  u,
                  De(e.propsAndAttrs, {
                    onPointerleave: e.handlePointerLeave,
                    onPointermove: e.handlePointerMove,
                    onClickimpl: e.handleClick,
                  }),
                  { default: N(() => [G(e.$slots, 'default')]), _: 3 },
                  16,
                  ['onPointerleave', 'onPointermove', 'onClickimpl'],
                ),
              ]),
              _: 3,
            },
            8,
            ['focusable'],
          ),
        ]),
        _: 3,
      },
      8,
      ['disabled', 'text-value'],
    )
  )
}
var Pt = oe(cs, [
  ['render', ds],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue',
  ],
])
const fs = j({
    name: 'ElDropdownMenu',
    props: Co,
    setup(e) {
      const t = ie('dropdown'),
        { _elDropdownSize: o } = zt(),
        n = o.value,
        { focusTrapRef: s, onKeydown: d } = q($t, void 0),
        { contentRef: l, role: u, triggerId: c } = q(Ve, void 0),
        { collectionRef: h, getItems: w } = q($o, void 0),
        {
          rovingFocusGroupRef: g,
          rovingFocusGroupRootStyle: f,
          tabIndex: a,
          onBlur: _,
          onFocus: S,
          onMousedown: O,
        } = q(nt, void 0),
        { collectionRef: z } = q(ot, void 0),
        A = B(() => [t.b('menu'), t.bm('menu', n == null ? void 0 : n.value)]),
        Y = tt(l, h, s, g, z),
        y = ae(
          (k) => {
            var L
            ;(L = e.onKeydown) == null || L.call(e, k)
          },
          (k) => {
            const { currentTarget: L, code: C, target: b } = k
            if (
              (L.contains(b),
              te.tab === C && k.stopImmediatePropagation(),
              k.preventDefault(),
              b !== r(l) || !So.includes(C))
            )
              return
            const Q = w()
              .filter((J) => !J.disabled)
              .map((J) => J.ref)
            Eo.includes(C) && Q.reverse(), st(Q)
          },
        )
      return {
        size: n,
        rovingFocusGroupRootStyle: f,
        tabIndex: a,
        dropdownKls: A,
        role: u,
        triggerId: c,
        dropdownListWrapperRef: Y,
        handleKeydown: (k) => {
          y(k), d(k)
        },
        onBlur: _,
        onFocus: S,
        onMousedown: O,
      }
    },
  }),
  ps = ['role', 'aria-labelledby']
function ms(e, t, o, n, s, d) {
  return (
    R(),
    Z(
      'ul',
      {
        ref: e.dropdownListWrapperRef,
        class: H(e.dropdownKls),
        style: be(e.rovingFocusGroupRootStyle),
        tabindex: -1,
        role: e.role,
        'aria-labelledby': e.triggerId,
        onBlur: t[0] || (t[0] = (...l) => e.onBlur && e.onBlur(...l)),
        onFocus: t[1] || (t[1] = (...l) => e.onFocus && e.onFocus(...l)),
        onKeydown: t[2] || (t[2] = (...l) => e.handleKeydown && e.handleKeydown(...l)),
        onMousedown: t[3] || (t[3] = (...l) => e.onMousedown && e.onMousedown(...l)),
      },
      [G(e.$slots, 'default')],
      46,
      ps,
    )
  )
}
var Ht = oe(fs, [
  ['render', ms],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue',
  ],
])
const vs = Ne(ls, { DropdownItem: Pt, DropdownMenu: Ht }),
  hs = kt(Pt),
  gs = kt(Ht),
  Yt = ['success', 'info', 'warning', 'error'],
  se = Yo({
    customClass: '',
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: '',
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: we ? document.body : void 0,
  }),
  ys = ue({
    customClass: { type: String, default: se.customClass },
    center: { type: Boolean, default: se.center },
    dangerouslyUseHTMLString: { type: Boolean, default: se.dangerouslyUseHTMLString },
    duration: { type: Number, default: se.duration },
    icon: { type: It, default: se.icon },
    id: { type: String, default: se.id },
    message: { type: le([String, Object, Function]), default: se.message },
    onClose: { type: le(Function), required: !1 },
    showClose: { type: Boolean, default: se.showClose },
    type: { type: String, values: Yt, default: se.type },
    offset: { type: Number, default: se.offset },
    zIndex: { type: Number, default: se.zIndex },
    grouping: { type: Boolean, default: se.grouping },
    repeatNum: { type: Number, default: se.repeatNum },
  }),
  bs = { destroy: () => !0 },
  fe = lo([]),
  ws = (e) => {
    const t = fe.findIndex((s) => s.id === e),
      o = fe[t]
    let n
    return t > 0 && (n = fe[t - 1]), { current: o, prev: n }
  },
  _s = (e) => {
    const { prev: t } = ws(e)
    return t ? t.vm.exposeProxy.bottom : 0
  },
  Cs = ['id'],
  $s = ['innerHTML'],
  Ss = { name: 'ElMessage' },
  Es = j(
    ce(ee({}, Ss), {
      props: ys,
      emits: bs,
      setup(e, { expose: t }) {
        const o = e,
          { Close: n } = zo,
          s = ie('message'),
          d = I(),
          l = I(!1),
          u = I(0)
        let c
        const h = B(() => (o.type ? (o.type === 'error' ? 'danger' : o.type) : 'info')),
          w = B(() => {
            const y = o.type
            return { [s.bm('icon', y)]: y && pt[y] }
          }),
          g = B(() => o.icon || pt[o.type] || ''),
          f = B(() => _s(o.id)),
          a = B(() => o.offset + f.value),
          _ = B(() => u.value + a.value),
          S = B(() => ({ top: `${a.value}px`, zIndex: o.zIndex }))
        function O() {
          o.duration !== 0 &&
            ({ stop: c } = Xe(() => {
              A()
            }, o.duration))
        }
        function z() {
          c == null || c()
        }
        function A() {
          l.value = !1
        }
        function Y({ code: y }) {
          y === te.esc && A()
        }
        return (
          Ye(() => {
            O(), (l.value = !0)
          }),
          ge(
            () => o.repeatNum,
            () => {
              z(), O()
            },
          ),
          Oe(document, 'keydown', Y),
          Ct(d, () => {
            u.value = d.value.getBoundingClientRect().height
          }),
          t({ visible: l, bottom: _, close: A }),
          (y, m) => (
            R(),
            V(
              Ue,
              {
                name: r(s).b('fade'),
                onBeforeLeave: y.onClose,
                onAfterLeave: m[0] || (m[0] = (k) => y.$emit('destroy')),
                persisted: '',
              },
              {
                default: N(() => [
                  Ke(
                    K(
                      'div',
                      {
                        id: y.id,
                        ref_key: 'messageRef',
                        ref: d,
                        class: H([
                          r(s).b(),
                          { [r(s).m(y.type)]: y.type && !y.icon },
                          r(s).is('center', y.center),
                          r(s).is('closable', y.showClose),
                          y.customClass,
                        ]),
                        style: be(r(S)),
                        role: 'alert',
                        onMouseenter: z,
                        onMouseleave: O,
                      },
                      [
                        y.repeatNum > 1
                          ? (R(),
                            V(
                              r(pn),
                              { key: 0, value: y.repeatNum, type: r(h), class: H(r(s).e('badge')) },
                              null,
                              8,
                              ['value', 'type', 'class'],
                            ))
                          : re('v-if', !0),
                        r(g)
                          ? (R(),
                            V(
                              r(Le),
                              { key: 1, class: H([r(s).e('icon'), r(w)]) },
                              { default: N(() => [(R(), V(We(r(g))))]), _: 1 },
                              8,
                              ['class'],
                            ))
                          : re('v-if', !0),
                        G(y.$slots, 'default', {}, () => [
                          y.dangerouslyUseHTMLString
                            ? (R(),
                              Z(
                                Me,
                                { key: 1 },
                                [
                                  re(
                                    " Caution here, message could've been compromised, never use user's input as message ",
                                  ),
                                  K(
                                    'p',
                                    { class: H(r(s).e('content')), innerHTML: y.message },
                                    null,
                                    10,
                                    $s,
                                  ),
                                ],
                                2112,
                              ))
                            : (R(),
                              Z('p', { key: 0, class: H(r(s).e('content')) }, de(y.message), 3)),
                        ]),
                        y.showClose
                          ? (R(),
                            V(
                              r(Le),
                              { key: 2, class: H(r(s).e('closeBtn')), onClick: yt(A, ['stop']) },
                              { default: N(() => [F(r(n))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : re('v-if', !0),
                      ],
                      46,
                      Cs,
                    ),
                    [[Ge, l.value]],
                  ),
                ]),
                _: 3,
              },
              8,
              ['name', 'onBeforeLeave'],
            )
          )
        )
      },
    }),
  )
var Ts = oe(Es, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue',
  ],
])
let ks = 1
const Kt = (e) => {
    const t = !e || ut(e) || wt(e) || Ze(e) ? { message: e } : e,
      o = ee(ee({}, se), t)
    if (!o.appendTo) o.appendTo = document.body
    else if (ut(o.appendTo)) {
      let n = document.querySelector(o.appendTo)
      Bo(n) || (n = document.body), (o.appendTo = n)
    }
    return o
  },
  Is = (e) => {
    const t = fe.indexOf(e)
    if (t === -1) return
    fe.splice(t, 1)
    const { handler: o } = e
    o.close()
  },
  Ms = (n, o) => {
    var s = n,
      { appendTo: e } = s,
      t = it(s, ['appendTo'])
    const { nextZIndex: d } = St(),
      l = `message_${ks++}`,
      u = t.onClose,
      c = document.createElement('div'),
      h = ce(ee({}, t), {
        zIndex: d() + t.zIndex,
        id: l,
        onClose: () => {
          u == null || u(), Is(a)
        },
        onDestroy: () => {
          ct(null, c)
        },
      }),
      w = F(Ts, h, Ze(h.message) || wt(h.message) ? { default: h.message } : null)
    ;(w.appContext = o || Ee._context), ct(w, c), e.appendChild(c.firstElementChild)
    const g = w.component,
      a = {
        id: l,
        vnode: w,
        vm: g,
        handler: {
          close: () => {
            g.exposeProxy.visible = !1
          },
        },
        props: w.component.props,
      }
    return a
  },
  Ee = (e = {}, t) => {
    if (!we) return { close: () => {} }
    if (he(qe.max) && fe.length >= qe.max) return { close: () => {} }
    const o = Kt(e)
    if (o.grouping && fe.length) {
      const s = fe.find(({ vnode: d }) => {
        var l
        return ((l = d.props) == null ? void 0 : l.message) === o.message
      })
      if (s) return (s.props.repeatNum += 1), (s.props.type = o.type), s.handler
    }
    const n = Ms(o, t)
    return fe.push(n), n.handler
  }
Yt.forEach((e) => {
  Ee[e] = (t = {}, o) => {
    const n = Kt(t)
    return Ee(ce(ee({}, n), { type: e }), o)
  }
})
function Ds(e) {
  for (const t of fe) (!e || e === t.props.type) && t.handler.close()
}
Ee.closeAll = Ds
Ee._context = null
const Os = Ao(Ee, '$message'),
  Gt = ro('app', {
    state: () => ({
      theme: 'light',
      loginStatus: !1,
      isCollapse: !0,
      fullscreen: !1,
      lockScreen: !1,
    }),
    getters: {
      getTheme(e) {
        return e.theme + ' theme'
      },
      getIsCollapse: ({ isCollapse: e }) => e,
      getFullscreen: ({ fullscreen: e }) => e,
      getLockScreen: ({ lockScreen: e }) => e,
    },
    actions: {
      modifyTheme(e) {
        this.theme = e
      },
      checkLogin(e) {
        this.loginStatus = e
      },
      setIsCollapse(e) {
        this.isCollapse = e
      },
      setFullscreen(e) {
        this.fullscreen = e
      },
      setLockScreen(e) {
        this.lockScreen = e
      },
    },
    persist: { enabled: !0, strategies: [{ key: 'app', storage: localStorage }] },
  })
const Ls = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  Ns = K(
    'path',
    {
      fill: 'currentColor',
      d: 'M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z',
    },
    null,
    -1,
  ),
  Rs = [Ns]
function Bs(e, t) {
  return R(), Z('svg', Ls, Rs)
}
const As = { name: 'ep-arrow-down', render: Bs }
const Fs = { class: 'my-header' },
  zs = ['id'],
  Ps = { class: 'lock-content' },
  Hs = { class: 'left content-item' },
  Ys = { class: 'time' },
  Ks = K('div', { class: 'divide' }, ':', -1),
  Gs = { class: 'right content-item' },
  Us = { class: 'time' },
  Ws = { class: 'second' },
  Vs = { class: 'dialog-footer' },
  js = _t('close'),
  Js = j({
    __name: 'index',
    props: { title: { type: String, default: () => '' } },
    emits: ['dialog-callback'],
    setup(e, { emit: t }) {
      const o = e,
        n = I({
          1: '\u4E00',
          2: '\u4E8C',
          3: '\u4E09',
          4: '\u56DB',
          5: '\u4E94',
          6: '\u516D',
          0: '\u5929',
        }),
        s = Ie(),
        d = I(),
        l = I(),
        u = I(),
        c = I()
      c.value = setInterval(() => {
        const a = Ie().get('h'),
          _ = Ie().get('m'),
          S = Ie().get('s')
        ;(d.value = a > 9 ? a : '0' + a),
          (l.value = _ > 9 ? _ : '0' + _),
          (u.value = S > 9 ? S : '0' + S)
      }, 1e3)
      const { title: h } = ao(o),
        w = Gt(),
        g = B({
          set: (a) => {
            w.setLockScreen(a)
          },
          get: () => w.getLockScreen,
        })
      function f() {
        t('dialog-callback')
      }
      return (a, _) => {
        const S = et,
          O = Ln
        return (
          R(),
          V(
            O,
            {
              modelValue: r(g),
              'onUpdate:modelValue': _[0] || (_[0] = (z) => (Qe(g) ? (g.value = z) : null)),
              width: '800px',
              'destroy-on-close': '',
              center: '',
              'custom-class': 'lock-dialog',
              fullscreen: !0,
            },
            {
              header: N(({ titleId: z, titleClass: A }) => [
                K('div', Fs, [K('h4', { id: z, class: H(A) }, de(r(h)), 11, zs)]),
              ]),
              footer: N(() => [
                K('span', Vs, [
                  _t(
                    de(r(Ie)(new Date()).format('YYYY/MM/DD')) +
                      ' \xA0 \xA0\u661F\u671F' +
                      de(n.value[r(s).get('day')]) +
                      ' ',
                    1,
                  ),
                  F(S, { text: '', onClick: f }, { default: N(() => [js]), _: 1 }),
                ]),
              ]),
              default: N(() => [
                K('div', Ps, [
                  K('div', Hs, [K('span', Ys, de(d.value), 1)]),
                  Ks,
                  K('div', Gs, [K('span', Us, de(l.value), 1), K('div', Ws, de(u.value), 1)]),
                ]),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          )
        )
      }
    },
  })
const Xs = { class: 'el-dropdown-link' },
  qs = K('span', { class: 'user-name' }, '\u5F20\u4E09\u5C01', -1),
  Zs = { class: 'label', style: { 'margin-left': '8px' } },
  il = j({
    __name: 'UserInfo',
    setup(e) {
      const t = Gt(),
        o = (d) => {
          Os(`click on item ${d}`), t.setLockScreen(!0)
        },
        n = I([
          { command: 'quit', label: '\u9000\u51FA\u7CFB\u7EDF', divided: !1, icon: 'quit' },
          { command: 'lock', label: '\u9501\u5B9A\u5C4F\u5E55', divided: !0, icon: 'lock' },
        ])
      function s() {
        t.setLockScreen(!1)
      }
      return (d, l) => {
        const u = X('eli-svg-icon'),
          c = Fn,
          h = As,
          w = hs,
          g = gs,
          f = vs
        return (
          R(),
          Z(
            Me,
            null,
            [
              F(
                f,
                { onCommand: o, trigger: 'hover' },
                {
                  dropdown: N(() => [
                    F(g, null, {
                      default: N(() => [
                        (R(!0),
                        Z(
                          Me,
                          null,
                          io(
                            n.value,
                            (a) => (
                              R(),
                              V(
                                w,
                                { command: a.command, key: a.command, divided: a.divided },
                                {
                                  default: N(() => [
                                    F(
                                      u,
                                      {
                                        name: a.icon,
                                        width: '18px',
                                        height: '18px',
                                        color: '#e6e6',
                                      },
                                      null,
                                      8,
                                      ['name'],
                                    ),
                                    K('span', Zs, de(a.label), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ['command', 'divided'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  default: N(() => [
                    K('span', Xs, [
                      F(u, { name: 'user', width: '20px', height: '20px' }),
                      F(c, { direction: 'vertical' }),
                      qs,
                      F(h),
                    ]),
                  ]),
                  _: 1,
                },
              ),
              F(Js, { onDialogCallback: s }),
            ],
            64,
          )
        )
      }
    },
  })
export { al as C, rn as E, Dt as U, il as _, Nt as a, ll as d, Yo as m, rl as s, Mt as t, Gt as u }