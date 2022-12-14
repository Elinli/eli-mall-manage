var Wt = Object.defineProperty,
  Vt = Object.defineProperties
var jt = Object.getOwnPropertyDescriptors
var Be = Object.getOwnPropertySymbols
var lt = Object.prototype.hasOwnProperty,
  at = Object.prototype.propertyIsEnumerable
var Ae = Math.pow,
  st = (e, t, o) =>
    t in e ? Wt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  ee = (e, t) => {
    for (var o in t || (t = {})) lt.call(t, o) && st(e, o, t[o])
    if (Be) for (var o of Be(t)) at.call(t, o) && st(e, o, t[o])
    return e
  },
  ie = (e, t) => Vt(e, jt(t))
var rt = (e, t) => {
  var o = {}
  for (var n in e) lt.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
  if (e != null && Be) for (var n of Be(e)) t.indexOf(n) < 0 && at.call(e, n) && (o[n] = e[n])
  return o
}
import {
  aH as qe,
  Q as Ye,
  ao as Jt,
  am as yt,
  aI as bt,
  A as B,
  a,
  af as Ze,
  b as I,
  aq as Xt,
  aJ as qt,
  O as ye,
  aK as Zt,
  a5 as Je,
  D as fe,
  d as J,
  a9 as q,
  T as ge,
  o as R,
  $ as V,
  a0 as L,
  U as Ke,
  V as Ge,
  _ as K,
  Y as H,
  a6 as be,
  ak as Ue,
  c as Z,
  a3 as F,
  X as Me,
  F as de,
  P as Pe,
  ah as $e,
  r as Qt,
  R as xt,
  Z as U,
  a1 as We,
  W as le,
  a7 as eo,
  a8 as Le,
  t as ue,
  aL as to,
  an as oo,
  a4 as wt,
  C as Qe,
  I as no,
  ay as _t,
  aM as so,
  aN as lo,
  ap as X,
  aO as ao,
  aP as ro,
  J as io,
  a2 as De,
  aj as Ct,
  aQ as uo,
  aR as it,
  G as ut,
  aS as $t,
  aT as ct,
  aU as co,
  ai as fo,
  aG as Et,
  ag as St,
  av as po,
} from './index.b73a18cc.js'
import { b as He, c as mo, E as xe } from './el-button.42d22c5b.js'
import {
  e as Oe,
  u as Tt,
  F as kt,
  d as It,
  f as vo,
  g as ho,
  E as te,
  h as ae,
  j as go,
  a as yo,
  O as bo,
  k as wo,
  l as Mt,
  C as _o,
  m as Co,
  n as $o,
  w as dt,
  o as Eo,
  p as So,
  q as To,
  L as ko,
} from './el-popper.8958ebc4.js'
import {
  a as we,
  w as Ee,
  u as re,
  f as ft,
  s as pt,
  e as Io,
  r as Mo,
  _ as oe,
  i as he,
  E as Ne,
  b as Do,
  x as Oo,
  k as Xe,
  g as No,
  y as Lo,
} from './index.b96c5203.js'
import { i as Dt, C as Ro, T as mt, a as Bo } from './icon.66172442.js'
class Ao extends Error {
  constructor(t) {
    super(t), (this.name = 'ElementPlusError')
  }
}
function Ot(e, t) {
  throw new Ao(`[${e}] ${t}`)
}
function el(e, t) {}
let Fe
const Fo = (e) => {
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
function tl(e, t) {
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
const et =
    (...e) =>
    (t) => {
      e.forEach((o) => {
        qe(o) ? o(t) : (o.value = t)
      })
    },
  Nt = 'update:modelValue',
  ol = 'change'
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
const zo = (e) => e,
  Lt = Symbol('dialogInjectionKey'),
  Rt = Symbol('scrollbarContextKey'),
  Po = (e, t, o) => {
    let n = { offsetX: 0, offsetY: 0 }
    const s = (u) => {
        const c = u.clientX,
          h = u.clientY,
          { offsetX: b, offsetY: g } = n,
          f = e.value.getBoundingClientRect(),
          r = f.left,
          _ = f.top,
          E = f.width,
          O = f.height,
          z = document.documentElement.clientWidth,
          A = document.documentElement.clientHeight,
          Y = -r + b,
          y = -_ + g,
          m = z - r - E + b,
          k = A - _ - O + g,
          N = (w) => {
            const $ = Math.min(Math.max(b + w.clientX - c, Y), m),
              Q = Math.min(Math.max(g + w.clientY - h, y), k)
            ;(n = { offsetX: $, offsetY: Q }),
              (e.value.style.transform = `translate(${Ee($)}, ${Ee(Q)})`)
          },
          C = () => {
            document.removeEventListener('mousemove', N), document.removeEventListener('mouseup', C)
          }
        document.addEventListener('mousemove', N), document.addEventListener('mouseup', C)
      },
      d = () => {
        t.value && e.value && t.value.addEventListener('mousedown', s)
      },
      l = () => {
        t.value && e.value && t.value.removeEventListener('mousedown', s)
      }
    Ye(() => {
      Jt(() => {
        o.value ? d() : l()
      })
    }),
      yt(() => {
        l()
      })
  }
var Ho = {
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
const Yo = (e) => (t, o) => Ko(t, o, a(e)),
  Ko = (e, t, o) =>
    Xt(o, e, e).replace(/\{(\w+)\}/g, (n, s) => {
      var d
      return `${(d = t == null ? void 0 : t[s]) != null ? d : `{${s}}`}`
    }),
  Go = (e) => {
    const t = B(() => a(e).name),
      o = Ze(e) ? e : I(e)
    return { lang: t, locale: o, t: Yo(e) }
  },
  Bt = () => {
    const e = bt('locale')
    return Go(B(() => e.value || Ho))
  },
  Uo = (e) => {
    Ze(e) || Ot('[useLockscreen]', 'You need to pass a ref param to this function')
    const t = re('popup'),
      o = qt(() => t.bm('parent', 'hidden'))
    if (!we || ft(document.body, o.value)) return
    let n = 0,
      s = !1,
      d = '0',
      l = 0
    const u = () => {
      Mo(document.body, o.value), s && (document.body.style.paddingRight = d)
    }
    ye(e, (c) => {
      if (!c) {
        u()
        return
      }
      ;(s = !ft(document.body, o.value)),
        s &&
          ((d = document.body.style.paddingRight),
          (l = Number.parseInt(pt(document.body, 'paddingRight'), 10))),
        (n = Fo(t.namespace.value))
      const h = document.documentElement.clientHeight < document.body.scrollHeight,
        b = pt(document.body, 'overflowY')
      n > 0 && (h || b === 'scroll') && s && (document.body.style.paddingRight = `${l + n}px`),
        Io(document.body, o.value)
    }),
      Zt(() => u())
  },
  At = (e) => {
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
  Wo = {
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
  Vo = ({ move: e, size: t, bar: o }) => ({ [o.size]: t, transform: `translate${o.axis}(${e}%)` }),
  jo = fe({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean,
  }),
  Jo = J({
    __name: 'thumb',
    props: jo,
    setup(e) {
      const t = e,
        o = 'Thumb',
        n = q(Rt),
        s = re('scrollbar')
      n || Ot(o, 'can not inject scrollbar context')
      const d = I(),
        l = I(),
        u = I({}),
        c = I(!1)
      let h = !1,
        b = !1,
        g = we ? document.onselectstart : null
      const f = B(() => Wo[t.vertical ? 'vertical' : 'horizontal']),
        r = B(() => Vo({ size: t.size, move: t.move, bar: f.value })),
        _ = B(
          () =>
            Ae(d.value[f.value.offset], 2) /
            n.wrapElement[f.value.scrollSize] /
            t.ratio /
            l.value[f.value.offset],
        ),
        E = (N) => {
          var C
          if ((N.stopPropagation(), N.ctrlKey || [1, 2].includes(N.button))) return
          ;(C = window.getSelection()) == null || C.removeAllRanges(), z(N)
          const w = N.currentTarget
          !w ||
            (u.value[f.value.axis] =
              w[f.value.offset] -
              (N[f.value.client] - w.getBoundingClientRect()[f.value.direction]))
        },
        O = (N) => {
          if (!l.value || !d.value || !n.wrapElement) return
          const C = Math.abs(
              N.target.getBoundingClientRect()[f.value.direction] - N[f.value.client],
            ),
            w = l.value[f.value.offset] / 2,
            $ = ((C - w) * 100 * _.value) / d.value[f.value.offset]
          n.wrapElement[f.value.scroll] = ($ * n.wrapElement[f.value.scrollSize]) / 100
        },
        z = (N) => {
          N.stopImmediatePropagation(),
            (h = !0),
            document.addEventListener('mousemove', A),
            document.addEventListener('mouseup', Y),
            (g = document.onselectstart),
            (document.onselectstart = () => !1)
        },
        A = (N) => {
          if (!d.value || !l.value || h === !1) return
          const C = u.value[f.value.axis]
          if (!C) return
          const w = (d.value.getBoundingClientRect()[f.value.direction] - N[f.value.client]) * -1,
            $ = l.value[f.value.offset] - C,
            Q = ((w - $) * 100 * _.value) / d.value[f.value.offset]
          n.wrapElement[f.value.scroll] = (Q * n.wrapElement[f.value.scrollSize]) / 100
        },
        Y = () => {
          ;(h = !1),
            (u.value[f.value.axis] = 0),
            document.removeEventListener('mousemove', A),
            document.removeEventListener('mouseup', Y),
            k(),
            b && (c.value = !1)
        },
        y = () => {
          ;(b = !1), (c.value = !!t.size)
        },
        m = () => {
          ;(b = !0), (c.value = h)
        }
      yt(() => {
        k(), document.removeEventListener('mouseup', Y)
      })
      const k = () => {
        document.onselectstart !== g && (document.onselectstart = g)
      }
      return (
        Oe(ge(n, 'scrollbarElement'), 'mousemove', y),
        Oe(ge(n, 'scrollbarElement'), 'mouseleave', m),
        (N, C) => (
          R(),
          V(
            Ue,
            { name: a(s).b('fade'), persisted: '' },
            {
              default: L(() => [
                Ke(
                  K(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: d,
                      class: H([a(s).e('bar'), a(s).is(a(f).key)]),
                      onMousedown: O,
                    },
                    [
                      K(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: l,
                          class: H(a(s).e('thumb')),
                          style: be(a(r)),
                          onMousedown: E,
                        },
                        null,
                        38,
                      ),
                    ],
                    34,
                  ),
                  [[Ge, N.always || c.value]],
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
var vt = oe(Jo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue',
  ],
])
const Xo = fe({
    always: { type: Boolean, default: !0 },
    width: String,
    height: String,
    ratioX: { type: Number, default: 1 },
    ratioY: { type: Number, default: 1 },
  }),
  qo = J({
    __name: 'bar',
    props: Xo,
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
              F(vt, { move: n.value, ratio: l.ratioX, size: l.width, always: l.always }, null, 8, [
                'move',
                'ratio',
                'size',
                'always',
              ]),
              F(
                vt,
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
var Zo = oe(qo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue',
  ],
])
const Qo = fe({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: Boolean,
    wrapStyle: { type: de([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 },
  }),
  xo = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(he) },
  en = { name: 'ElScrollbar' },
  tn = J(
    ie(ee({}, en), {
      props: Qo,
      emits: xo,
      setup(e, { expose: t, emit: o }) {
        const n = e,
          s = re('scrollbar')
        let d, l
        const u = I(),
          c = I(),
          h = I(),
          b = I('0'),
          g = I('0'),
          f = I(),
          r = I(1),
          _ = I(1),
          E = B(() => {
            const m = {}
            return (
              n.height && (m.height = Ee(n.height)),
              n.maxHeight && (m.maxHeight = Ee(n.maxHeight)),
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
          eo(m) ? c.value.scrollTo(m) : he(m) && he(k) && c.value.scrollTo(m, k)
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
              N = Ae(m, 2) / c.value.scrollHeight,
              C = Ae(k, 2) / c.value.scrollWidth,
              w = Math.max(N, n.minSize),
              $ = Math.max(C, n.minSize)
            ;(r.value = N / (m - N) / (w / (m - w))),
              (_.value = C / (k - C) / ($ / (k - $))),
              (g.value = w + Ce < m ? `${w}px` : ''),
              (b.value = $ + Ce < k ? `${$}px` : '')
          }
        return (
          ye(
            () => n.noresize,
            (m) => {
              m
                ? (d == null || d(), l == null || l())
                : (({ stop: d } = Tt(h, y)), (l = Oe('resize', y)))
            },
            { immediate: !0 },
          ),
          ye(
            () => [n.maxHeight, n.height],
            () => {
              n.native ||
                Pe(() => {
                  var m
                  y(), c.value && ((m = f.value) == null || m.handleScroll(c.value))
                })
            },
          ),
          $e(Rt, Qt({ scrollbarElement: u, wrapElement: c })),
          Ye(() => {
            n.native ||
              Pe(() => {
                y()
              })
          }),
          xt(() => y()),
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
              { ref_key: 'scrollbar$', ref: u, class: H(a(s).b()) },
              [
                K(
                  'div',
                  {
                    ref_key: 'wrap$',
                    ref: c,
                    class: H([
                      m.wrapClass,
                      a(s).e('wrap'),
                      { [a(s).em('wrap', 'hidden-default')]: !m.native },
                    ]),
                    style: be(a(E)),
                    onScroll: O,
                  },
                  [
                    (R(),
                    V(
                      We(m.tag),
                      {
                        ref_key: 'resize$',
                        ref: h,
                        class: H([a(s).e('view'), m.viewClass]),
                        style: be(m.viewStyle),
                      },
                      { default: L(() => [U(m.$slots, 'default')]), _: 3 },
                      8,
                      ['class', 'style'],
                    )),
                  ],
                  38,
                ),
                m.native
                  ? le('v-if', !0)
                  : (R(),
                    V(
                      Zo,
                      {
                        key: 0,
                        ref_key: 'barRef',
                        ref: f,
                        height: g.value,
                        width: b.value,
                        always: m.always,
                        'ratio-x': _.value,
                        'ratio-y': r.value,
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
var on = oe(tn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue',
  ],
])
const nn = Le(on),
  sn = fe({
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
  ln = ['textContent'],
  an = { name: 'ElBadge' },
  rn = J(
    ie(ee({}, an), {
      props: sn,
      setup(e, { expose: t }) {
        const o = e,
          n = re('badge'),
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
              { class: H(a(n).b()) },
              [
                U(d.$slots, 'default'),
                F(
                  Ue,
                  { name: `${a(n).namespace.value}-zoom-in-center`, persisted: '' },
                  {
                    default: L(() => [
                      Ke(
                        K(
                          'sup',
                          {
                            class: H([
                              a(n).e('content'),
                              a(n).em('content', d.type),
                              a(n).is('fixed', !!d.$slots.default),
                              a(n).is('dot', d.isDot),
                            ]),
                            textContent: ue(a(s)),
                          },
                          null,
                          10,
                          ln,
                        ),
                        [[Ge, !d.hidden && (a(s) || d.isDot)]],
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
var un = oe(rn, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue'],
])
const cn = Le(un)
var Ft = { exports: {} }
;(function (e, t) {
  ;(function (o, n) {
    e.exports = n()
  })(to, function () {
    var o = 1e3,
      n = 6e4,
      s = 36e5,
      d = 'millisecond',
      l = 'second',
      u = 'minute',
      c = 'hour',
      h = 'day',
      b = 'week',
      g = 'month',
      f = 'quarter',
      r = 'year',
      _ = 'date',
      E = 'Invalid Date',
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
        var S = String(T)
        return !S || S.length >= v ? T : '' + Array(v + 1 - S.length).join(i) + T
      },
      y = {
        s: Y,
        z: function (T) {
          var v = -T.utcOffset(),
            i = Math.abs(v),
            S = Math.floor(i / 60),
            p = i % 60
          return (v <= 0 ? '+' : '-') + Y(S, 2, '0') + ':' + Y(p, 2, '0')
        },
        m: function T(v, i) {
          if (v.date() < i.date()) return -T(i, v)
          var S = 12 * (i.year() - v.year()) + (i.month() - v.month()),
            p = v.clone().add(S, g),
            D = i - p < 0,
            M = v.clone().add(S + (D ? -1 : 1), g)
          return +(-(S + (i - p) / (D ? p - M : M - p)) || 0)
        },
        a: function (T) {
          return T < 0 ? Math.ceil(T) || 0 : Math.floor(T)
        },
        p: function (T) {
          return (
            { M: g, y: r, w: b, d: h, D: _, h: c, m: u, s: l, ms: d, Q: f }[T] ||
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
    var N = function (T) {
        return T instanceof Q
      },
      C = function T(v, i, S) {
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
        return !S && p && (m = p), p || (!S && m)
      },
      w = function (T, v) {
        if (N(T)) return T.clone()
        var i = typeof v == 'object' ? v : {}
        return (i.date = T), (i.args = arguments), new Q(i)
      },
      $ = y
    ;($.l = C),
      ($.i = N),
      ($.w = function (T, v) {
        return w(T, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset })
      })
    var Q = (function () {
        function T(i) {
          ;(this.$L = C(i.locale, null, !0)), this.parse(i)
        }
        var v = T.prototype
        return (
          (v.parse = function (i) {
            ;(this.$d = (function (S) {
              var p = S.date,
                D = S.utc
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
            return this.$d.toString() !== E
          }),
          (v.isSame = function (i, S) {
            var p = w(i)
            return this.startOf(S) <= p && p <= this.endOf(S)
          }),
          (v.isAfter = function (i, S) {
            return w(i) < this.startOf(S)
          }),
          (v.isBefore = function (i, S) {
            return this.endOf(S) < w(i)
          }),
          (v.$g = function (i, S, p) {
            return $.u(i) ? this[S] : this.set(p, i)
          }),
          (v.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (v.valueOf = function () {
            return this.$d.getTime()
          }),
          (v.startOf = function (i, S) {
            var p = this,
              D = !!$.u(S) || S,
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
              G = this.$W,
              x = this.$M,
              me = this.$D,
              pe = 'set' + (this.$u ? 'UTC' : '')
            switch (M) {
              case r:
                return D ? P(1, 0) : P(31, 11)
              case g:
                return D ? P(1, x) : P(0, x + 1)
              case b:
                var Te = this.$locale().weekStart || 0,
                  ke = (G < Te ? G + 7 : G) - Te
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
          (v.$set = function (i, S) {
            var p,
              D = $.p(i),
              M = 'set' + (this.$u ? 'UTC' : ''),
              P = ((p = {}),
              (p[h] = M + 'Date'),
              (p[_] = M + 'Date'),
              (p[g] = M + 'Month'),
              (p[r] = M + 'FullYear'),
              (p[c] = M + 'Hours'),
              (p[u] = M + 'Minutes'),
              (p[l] = M + 'Seconds'),
              (p[d] = M + 'Milliseconds'),
              p)[D],
              W = D === h ? this.$D + (S - this.$W) : S
            if (D === g || D === r) {
              var G = this.clone().set(_, 1)
              G.$d[P](W), G.init(), (this.$d = G.set(_, Math.min(this.$D, G.daysInMonth())).$d)
            } else P && this.$d[P](W)
            return this.init(), this
          }),
          (v.set = function (i, S) {
            return this.clone().$set(i, S)
          }),
          (v.get = function (i) {
            return this[$.p(i)]()
          }),
          (v.add = function (i, S) {
            var p,
              D = this
            i = Number(i)
            var M = $.p(S),
              P = function (x) {
                var me = w(D)
                return $.w(me.date(me.date() + Math.round(x * i)), D)
              }
            if (M === g) return this.set(g, this.$M + i)
            if (M === r) return this.set(r, this.$y + i)
            if (M === h) return P(1)
            if (M === b) return P(7)
            var W = ((p = {}), (p[u] = n), (p[c] = s), (p[l] = o), p)[M] || 1,
              G = this.$d.getTime() + i * W
            return $.w(G, this)
          }),
          (v.subtract = function (i, S) {
            return this.add(-1 * i, S)
          }),
          (v.format = function (i) {
            var S = this,
              p = this.$locale()
            if (!this.isValid()) return p.invalidDate || E
            var D = i || 'YYYY-MM-DDTHH:mm:ssZ',
              M = $.z(this),
              P = this.$H,
              W = this.$m,
              G = this.$M,
              x = p.weekdays,
              me = p.months,
              pe = function (ne, ve, je, Re) {
                return (ne && (ne[ve] || ne(S, D))) || je[ve].slice(0, Re)
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
                M: G + 1,
                MM: $.s(G + 1, 2, '0'),
                MMM: pe(p.monthsShort, G, me, 3),
                MMMM: pe(me, G),
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
          (v.diff = function (i, S, p) {
            var D,
              M = $.p(S),
              P = w(i),
              W = (P.utcOffset() - this.utcOffset()) * n,
              G = this - P,
              x = $.m(this, P)
            return (
              (x =
                ((D = {}),
                (D[r] = x / 12),
                (D[g] = x),
                (D[f] = x / 3),
                (D[b] = (G - W) / 6048e5),
                (D[h] = (G - W) / 864e5),
                (D[c] = G / s),
                (D[u] = G / n),
                (D[l] = G / o),
                D)[M] || G),
              p ? x : $.a(x)
            )
          }),
          (v.daysInMonth = function () {
            return this.endOf(g).$D
          }),
          (v.$locale = function () {
            return k[this.$L]
          }),
          (v.locale = function (i, S) {
            if (!i) return this.$L
            var p = this.clone(),
              D = C(i, S, !0)
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
      j = Q.prototype
    return (
      (w.prototype = j),
      [
        ['$ms', d],
        ['$s', l],
        ['$m', u],
        ['$H', c],
        ['$W', h],
        ['$M', g],
        ['$y', r],
        ['$D', _],
      ].forEach(function (T) {
        j[T[1]] = function (v) {
          return this.$g(v, T[0], T[1])
        }
      }),
      (w.extend = function (T, v) {
        return T.$i || (T(v, Q, w), (T.$i = !0)), w
      }),
      (w.locale = C),
      (w.isDayjs = N),
      (w.unix = function (T) {
        return w(1e3 * T)
      }),
      (w.en = k[m]),
      (w.Ls = k),
      (w.p = {}),
      w
    )
  })
})(Ft)
const Ie = Ft.exports,
  dn = fe({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: de([String, Array, Object]) },
    zIndex: { type: de([String, Number]) },
  }),
  fn = { click: (e) => e instanceof MouseEvent }
var pn = J({
  name: 'ElOverlay',
  props: dn,
  emits: fn,
  setup(e, { slots: t, emit: o }) {
    const n = re('overlay'),
      s = (c) => {
        o('click', c)
      },
      { onClick: d, onMousedown: l, onMouseup: u } = At(e.customMaskEvent ? void 0 : s)
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
            [U(t, 'default')],
            ze.STYLE | ze.CLASS | ze.PROPS,
            ['onClick', 'onMouseup', 'onMousedown'],
          )
        : oo(
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
            [U(t, 'default')],
          )
  },
})
const mn = pn,
  zt = fe({
    center: { type: Boolean, default: !1 },
    closeIcon: { type: Dt, default: '' },
    customClass: { type: String, default: '' },
    draggable: { type: Boolean, default: !1 },
    fullscreen: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
  }),
  vn = { close: () => !0 },
  hn = ['aria-label'],
  gn = ['id'],
  yn = { name: 'ElDialogContent' },
  bn = J(
    ie(ee({}, yn), {
      props: zt,
      emits: vn,
      setup(e) {
        const t = e,
          { t: o } = Bt(),
          { Close: n } = Ro,
          { dialogRef: s, headerRef: d, bodyId: l, ns: u, style: c } = q(Lt),
          { focusTrapRef: h } = q(kt),
          b = et(h, s),
          g = B(() => t.draggable)
        return (
          Po(s, d, g),
          (f, r) => (
            R(),
            Z(
              'div',
              {
                ref: a(b),
                class: H([
                  a(u).b(),
                  a(u).is('fullscreen', f.fullscreen),
                  a(u).is('draggable', a(g)),
                  { [a(u).m('center')]: f.center },
                  f.customClass,
                ]),
                style: be(a(c)),
                tabindex: '-1',
                onClick: r[1] || (r[1] = wt(() => {}, ['stop'])),
              },
              [
                K(
                  'header',
                  { ref_key: 'headerRef', ref: d, class: H(a(u).e('header')) },
                  [
                    U(f.$slots, 'header', {}, () => [
                      K('span', { role: 'heading', class: H(a(u).e('title')) }, ue(f.title), 3),
                    ]),
                    f.showClose
                      ? (R(),
                        Z(
                          'button',
                          {
                            key: 0,
                            'aria-label': a(o)('el.dialog.close'),
                            class: H(a(u).e('headerbtn')),
                            type: 'button',
                            onClick: r[0] || (r[0] = (_) => f.$emit('close')),
                          },
                          [
                            F(
                              a(Ne),
                              { class: H(a(u).e('close')) },
                              { default: L(() => [(R(), V(We(f.closeIcon || a(n))))]), _: 1 },
                              8,
                              ['class'],
                            ),
                          ],
                          10,
                          hn,
                        ))
                      : le('v-if', !0),
                  ],
                  2,
                ),
                K('div', { id: a(l), class: H(a(u).e('body')) }, [U(f.$slots, 'default')], 10, gn),
                f.$slots.footer
                  ? (R(),
                    Z('footer', { key: 0, class: H(a(u).e('footer')) }, [U(f.$slots, 'footer')], 2))
                  : le('v-if', !0),
              ],
              6,
            )
          )
        )
      },
    }),
  )
var wn = oe(bn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue',
  ],
])
const _n = fe(
    ie(ee({}, zt), {
      appendToBody: { type: Boolean, default: !1 },
      beforeClose: { type: de(Function) },
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
  Cn = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [Nt]: (e) => Do(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0,
  },
  $n = (e, t) => {
    const n = Qe().emit,
      { nextZIndex: s } = It()
    let d = ''
    const l = He(),
      u = He(),
      c = I(!1),
      h = I(!1),
      b = I(!1),
      g = I(e.zIndex || s())
    let f, r
    const _ = bt('namespace', Oo),
      E = B(() => {
        const j = {},
          T = `--${_.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (j[`${T}-margin-top`] = e.top), e.width && (j[`${T}-width`] = Ee(e.width))),
          j
        )
      })
    function O() {
      n('opened')
    }
    function z() {
      n('closed'), n(Nt, !1), e.destroyOnClose && (b.value = !1)
    }
    function A() {
      n('close')
    }
    function Y() {
      r == null || r(),
        f == null || f(),
        e.openDelay && e.openDelay > 0 ? ({ stop: f } = Xe(() => N(), e.openDelay)) : N()
    }
    function y() {
      f == null || f(),
        r == null || r(),
        e.closeDelay && e.closeDelay > 0 ? ({ stop: r } = Xe(() => C(), e.closeDelay)) : C()
    }
    function m() {
      function j(T) {
        T || ((h.value = !0), (c.value = !1))
      }
      e.beforeClose ? e.beforeClose(j) : y()
    }
    function k() {
      e.closeOnClickModal && m()
    }
    function N() {
      !we || (c.value = !0)
    }
    function C() {
      c.value = !1
    }
    function w() {
      n('openAutoFocus')
    }
    function $() {
      n('closeAutoFocus')
    }
    e.lockScroll && Uo(c)
    function Q() {
      e.closeOnPressEscape && m()
    }
    return (
      ye(
        () => e.modelValue,
        (j) => {
          j
            ? ((h.value = !1),
              Y(),
              (b.value = !0),
              n('open'),
              (g.value = e.zIndex ? g.value++ : s()),
              Pe(() => {
                t.value && (t.value.scrollTop = 0)
              }))
            : c.value && y()
        },
      ),
      ye(
        () => e.fullscreen,
        (j) => {
          !t.value ||
            (j
              ? ((d = t.value.style.transform), (t.value.style.transform = ''))
              : (t.value.style.transform = d))
        },
      ),
      Ye(() => {
        e.modelValue && ((c.value = !0), (b.value = !0), Y())
      }),
      {
        afterEnter: O,
        afterLeave: z,
        beforeLeave: A,
        handleClose: m,
        onModalClick: k,
        close: y,
        doClose: C,
        onOpenAutoFocus: w,
        onCloseAutoFocus: $,
        onCloseRequested: Q,
        titleId: l,
        bodyId: u,
        closed: h,
        style: E,
        rendered: b,
        visible: c,
        zIndex: g,
      }
    )
  },
  En = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Sn = { name: 'ElDialog' },
  Tn = J(
    ie(ee({}, Sn), {
      props: _n,
      emits: Cn,
      setup(e, { expose: t }) {
        const o = e,
          n = no()
        mo(
          {
            scope: 'el-dialog',
            from: 'the title slot',
            replacement: 'the header slot',
            version: '3.0.0',
            ref: 'https://element-plus.org/en-US/component/dialog.html#slots',
          },
          B(() => !!n.title),
        )
        const s = re('dialog'),
          d = I(),
          l = I(),
          u = I(),
          {
            visible: c,
            titleId: h,
            bodyId: b,
            style: g,
            rendered: f,
            zIndex: r,
            afterEnter: _,
            afterLeave: E,
            beforeLeave: O,
            handleClose: z,
            onModalClick: A,
            onOpenAutoFocus: Y,
            onCloseAutoFocus: y,
            onCloseRequested: m,
          } = $n(o, d)
        $e(Lt, { dialogRef: d, headerRef: l, bodyId: b, ns: s, rendered: f, style: g })
        const k = At(A),
          N = B(() => o.draggable && !o.fullscreen)
        return (
          t({ visible: c, dialogContentRef: u }),
          (C, w) => (
            R(),
            V(
              so,
              { to: 'body', disabled: !C.appendToBody },
              [
                F(
                  Ue,
                  {
                    name: 'dialog-fade',
                    onAfterEnter: a(_),
                    onAfterLeave: a(E),
                    onBeforeLeave: a(O),
                    persisted: '',
                  },
                  {
                    default: L(() => [
                      Ke(
                        F(
                          a(mn),
                          {
                            'custom-mask-event': '',
                            mask: C.modal,
                            'overlay-class': C.modalClass,
                            'z-index': a(r),
                          },
                          {
                            default: L(() => [
                              K(
                                'div',
                                {
                                  role: 'dialog',
                                  'aria-modal': 'true',
                                  'aria-label': C.title || void 0,
                                  'aria-labelledby': C.title ? void 0 : a(h),
                                  'aria-describedby': a(b),
                                  class: H(`${a(s).namespace.value}-overlay-dialog`),
                                  onClick:
                                    w[0] || (w[0] = (...$) => a(k).onClick && a(k).onClick(...$)),
                                  onMousedown:
                                    w[1] ||
                                    (w[1] = (...$) => a(k).onMousedown && a(k).onMousedown(...$)),
                                  onMouseup:
                                    w[2] ||
                                    (w[2] = (...$) => a(k).onMouseup && a(k).onMouseup(...$)),
                                },
                                [
                                  F(
                                    a(vo),
                                    {
                                      loop: '',
                                      trapped: a(c),
                                      'focus-start-el': 'container',
                                      onFocusAfterTrapped: a(Y),
                                      onFocusAfterReleased: a(y),
                                      onReleaseRequested: a(m),
                                    },
                                    {
                                      default: L(() => [
                                        a(f)
                                          ? (R(),
                                            V(
                                              wn,
                                              {
                                                key: 0,
                                                ref_key: 'dialogContentRef',
                                                ref: u,
                                                'custom-class': C.customClass,
                                                center: C.center,
                                                'close-icon': C.closeIcon,
                                                draggable: a(N),
                                                fullscreen: C.fullscreen,
                                                'show-close': C.showClose,
                                                title: C.title,
                                                onClose: a(z),
                                              },
                                              _t(
                                                {
                                                  header: L(() => [
                                                    C.$slots.title
                                                      ? U(C.$slots, 'title', { key: 1 })
                                                      : U(C.$slots, 'header', {
                                                          key: 0,
                                                          close: a(z),
                                                          titleId: a(h),
                                                          titleClass: a(s).e('title'),
                                                        }),
                                                  ]),
                                                  default: L(() => [U(C.$slots, 'default')]),
                                                  _: 2,
                                                },
                                                [
                                                  C.$slots.footer
                                                    ? {
                                                        name: 'footer',
                                                        fn: L(() => [U(C.$slots, 'footer')]),
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
                                          : le('v-if', !0),
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
                                En,
                              ),
                            ]),
                            _: 3,
                          },
                          8,
                          ['mask', 'overlay-class', 'z-index'],
                        ),
                        [[Ge, a(c)]],
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
var kn = oe(Tn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue',
  ],
])
const In = Le(kn),
  Mn = fe({
    direction: { type: String, values: ['horizontal', 'vertical'], default: 'horizontal' },
    contentPosition: { type: String, values: ['left', 'center', 'right'], default: 'center' },
    borderStyle: { type: de(String), default: 'solid' },
  }),
  Dn = { name: 'ElDivider' },
  On = J(
    ie(ee({}, Dn), {
      props: Mn,
      setup(e) {
        const t = e,
          o = re('divider'),
          n = B(() => o.cssVar({ 'border-style': t.borderStyle }))
        return (s, d) => (
          R(),
          Z(
            'div',
            { class: H([a(o).b(), a(o).m(s.direction)]), style: be(a(n)), role: 'separator' },
            [
              s.$slots.default && s.direction !== 'vertical'
                ? (R(),
                  Z(
                    'div',
                    { key: 0, class: H([a(o).e('text'), a(o).is(s.contentPosition)]) },
                    [U(s.$slots, 'default')],
                    2,
                  ))
                : le('v-if', !0),
            ],
            6,
          )
        )
      },
    }),
  )
var Nn = oe(On, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue',
  ],
])
const Ln = Le(Nn),
  Rn = fe({
    style: { type: de([String, Array, Object]) },
    currentTabId: { type: de(String) },
    defaultCurrentTabId: String,
    loop: Boolean,
    dir: { type: String, values: ['ltr', 'rtl'], default: 'ltr' },
    orientation: { type: de(String) },
    onBlur: Function,
    onFocus: Function,
    onMousedown: Function,
  }),
  {
    ElCollection: Bn,
    ElCollectionItem: An,
    COLLECTION_INJECTION_KEY: tt,
    COLLECTION_ITEM_INJECTION_KEY: Fn,
  } = ho('RovingFocusGroup'),
  ot = Symbol('elRovingFocusGroup'),
  Pt = Symbol('elRovingFocusGroupItem'),
  zn = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
  },
  Pn = (e, t) => {
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
  Hn = (e, t, o) => {
    const n = Pn(e.key, o)
    if (
      !(t === 'vertical' && [te.left, te.right].includes(n)) &&
      !(t === 'horizontal' && [te.up, te.down].includes(n))
    )
      return zn[n]
  },
  Yn = (e, t) => e.map((o, n) => e[(n + t) % e.length]),
  nt = (e) => {
    const { activeElement: t } = document
    for (const o of e) if (o === t || (o.focus(), t !== document.activeElement)) return
  },
  ht = 'currentTabIdChange',
  gt = 'rovingFocusGroup.entryFocus',
  Kn = { bubbles: !1, cancelable: !0 },
  Gn = J({
    name: 'ElRovingFocusGroupImpl',
    inheritAttrs: !1,
    props: Rn,
    emits: [ht, 'entryFocus'],
    setup(e, { emit: t }) {
      var o
      const n = I((o = e.currentTabId || e.defaultCurrentTabId) != null ? o : null),
        s = I(!1),
        d = I(!1),
        l = I(null),
        { getItems: u } = q(tt, void 0),
        c = B(() => [{ outline: 'none' }, e.style]),
        h = (E) => {
          t(ht, E)
        },
        b = () => {
          s.value = !0
        },
        g = ae(
          (E) => {
            var O
            ;(O = e.onMousedown) == null || O.call(e, E)
          },
          () => {
            d.value = !0
          },
        ),
        f = ae(
          (E) => {
            var O
            ;(O = e.onFocus) == null || O.call(e, E)
          },
          (E) => {
            const O = !a(d),
              { target: z, currentTarget: A } = E
            if (z === A && O && !a(s)) {
              const Y = new Event(gt, Kn)
              if ((A == null || A.dispatchEvent(Y), !Y.defaultPrevented)) {
                const y = u().filter((w) => w.focusable),
                  m = y.find((w) => w.active),
                  k = y.find((w) => w.id === a(n)),
                  C = [m, k, ...y].filter(Boolean).map((w) => w.ref)
                nt(C)
              }
            }
            d.value = !1
          },
        ),
        r = ae(
          (E) => {
            var O
            ;(O = e.onBlur) == null || O.call(e, E)
          },
          () => {
            s.value = !1
          },
        ),
        _ = (...E) => {
          t('entryFocus', ...E)
        }
      $e(ot, {
        currentTabbedId: lo(n),
        loop: ge(e, 'loop'),
        tabIndex: B(() => (a(s) ? -1 : 0)),
        rovingFocusGroupRef: l,
        rovingFocusGroupRootStyle: c,
        orientation: ge(e, 'orientation'),
        dir: ge(e, 'dir'),
        onItemFocus: h,
        onItemShiftTab: b,
        onBlur: r,
        onFocus: f,
        onMousedown: g,
      }),
        ye(
          () => e.currentTabId,
          (E) => {
            n.value = E != null ? E : null
          },
        ),
        Oe(l, gt, _)
    },
  })
function Un(e, t, o, n, s, d) {
  return U(e.$slots, 'default')
}
var Wn = oe(Gn, [
  ['render', Un],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue',
  ],
])
const Vn = J({
  name: 'ElRovingFocusGroup',
  components: { ElFocusGroupCollection: Bn, ElRovingFocusGroupImpl: Wn },
})
function jn(e, t, o, n, s, d) {
  const l = X('el-roving-focus-group-impl'),
    u = X('el-focus-group-collection')
  return (
    R(),
    V(u, null, {
      default: L(() => [
        F(l, ao(ro(e.$attrs)), { default: L(() => [U(e.$slots, 'default')]), _: 3 }, 16),
      ]),
      _: 3,
    })
  )
}
var Jn = oe(Vn, [
  ['render', jn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue',
  ],
])
const Xn = J({
  components: { ElRovingFocusCollectionItem: An },
  props: { focusable: { type: Boolean, default: !0 }, active: { type: Boolean, default: !1 } },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(e, { emit: t }) {
    const { currentTabbedId: o, loop: n, onItemFocus: s, onItemShiftTab: d } = q(ot, void 0),
      { getItems: l } = q(tt, void 0),
      u = He(),
      c = I(null),
      h = ae(
        (r) => {
          t('mousedown', r)
        },
        (r) => {
          e.focusable ? s(a(u)) : r.preventDefault()
        },
      ),
      b = ae(
        (r) => {
          t('focus', r)
        },
        () => {
          s(a(u))
        },
      ),
      g = ae(
        (r) => {
          t('keydown', r)
        },
        (r) => {
          const { key: _, shiftKey: E, target: O, currentTarget: z } = r
          if (_ === te.tab && E) {
            d()
            return
          }
          if (O !== z) return
          const A = Hn(r)
          if (A) {
            r.preventDefault()
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
                y = n.value ? Yn(y, m + 1) : y.slice(m + 1)
                break
              }
            }
            Pe(() => {
              nt(y)
            })
          }
        },
      ),
      f = B(() => o.value === a(u))
    return (
      $e(Pt, {
        rovingFocusGroupItemRef: c,
        tabIndex: B(() => (a(f) ? 0 : -1)),
        handleMousedown: h,
        handleFocus: b,
        handleKeydown: g,
      }),
      { id: u, handleKeydown: g, handleFocus: b, handleMousedown: h }
    )
  },
})
function qn(e, t, o, n, s, d) {
  const l = X('el-roving-focus-collection-item')
  return (
    R(),
    V(
      l,
      { id: e.id, focusable: e.focusable, active: e.active },
      { default: L(() => [U(e.$slots, 'default')]), _: 3 },
      8,
      ['id', 'focusable', 'active'],
    )
  )
}
var Zn = oe(Xn, [
  ['render', qn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue',
  ],
])
const Ve = Symbol('elDropdown'),
  { ButtonGroup: Qn } = xe,
  xn = J({
    name: 'ElDropdown',
    components: {
      ElButton: xe,
      ElButtonGroup: Qn,
      ElScrollbar: nn,
      ElDropdownCollection: go,
      ElTooltip: yo,
      ElRovingFocusGroup: Jn,
      ElOnlyChild: bo,
      ElIcon: Ne,
      ArrowDown: No,
    },
    props: wo,
    emits: ['visible-change', 'click', 'command'],
    setup(e, { emit: t }) {
      const o = Qe(),
        n = re('dropdown'),
        { t: s } = Bt(),
        d = I(),
        l = I(),
        u = I(null),
        c = I(null),
        h = I(null),
        b = I(null),
        g = I(!1),
        f = [te.enter, te.space, te.down],
        r = B(() => ({ maxHeight: Ee(e.maxHeight) })),
        _ = B(() => [n.m(y.value)]),
        E = He().value,
        O = B(() => e.id || E)
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
      const y = io()
      function m(...i) {
        t('command', ...i)
      }
      function k() {}
      function N() {
        const i = a(c)
        i == null || i.focus(), (b.value = null)
      }
      function C(i) {
        b.value = i
      }
      function w(i) {
        g.value || (i.preventDefault(), i.stopImmediatePropagation())
      }
      function $() {
        t('visible-change', !0)
      }
      function Q(i) {
        ;(i == null ? void 0 : i.type) === 'keydown' && c.value.focus()
      }
      function j() {
        t('visible-change', !1)
      }
      return (
        $e(Ve, {
          contentRef: c,
          role: B(() => e.role),
          triggerId: O,
          isUsingKeyboard: g,
          onItemEnter: k,
          onItemLeave: N,
        }),
        $e('elDropdown', {
          instance: o,
          dropdownSize: y,
          handleClick: z,
          commandHandler: m,
          trigger: ge(e, 'trigger'),
          hideOnClick: ge(e, 'hideOnClick'),
        }),
        {
          t: s,
          ns: n,
          scrollbar: h,
          wrapStyle: r,
          dropdownTriggerKls: _,
          dropdownSize: y,
          triggerId: O,
          triggerKeys: f,
          currentTabId: b,
          handleCurrentTabIdChange: C,
          handlerMainButtonClick: (i) => {
            t('click', i)
          },
          handleEntryFocus: w,
          handleClose: A,
          handleOpen: Y,
          handleBeforeShowTooltip: $,
          handleShowTooltip: Q,
          handleBeforeHideTooltip: j,
          onFocusAfterTrapped: (i) => {
            var S, p
            i.preventDefault(),
              (p = (S = c.value) == null ? void 0 : S.focus) == null ||
                p.call(S, { preventScroll: !0 })
          },
          popperRef: u,
          contentRef: c,
          triggeringElementRef: d,
          referenceElementRef: l,
        }
      )
    },
  })
function es(e, t, o, n, s, d) {
  var l
  const u = X('el-dropdown-collection'),
    c = X('el-roving-focus-group'),
    h = X('el-scrollbar'),
    b = X('el-only-child'),
    g = X('el-tooltip'),
    f = X('el-button'),
    r = X('arrow-down'),
    _ = X('el-icon'),
    E = X('el-button-group')
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
          _t(
            {
              content: L(() => [
                F(
                  h,
                  {
                    ref: 'scrollbar',
                    'wrap-style': e.wrapStyle,
                    tag: 'div',
                    'view-class': e.ns.e('list'),
                  },
                  {
                    default: L(() => [
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
                          default: L(() => [
                            F(u, null, { default: L(() => [U(e.$slots, 'dropdown')]), _: 3 }),
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
                    fn: L(() => [
                      F(
                        b,
                        { id: e.triggerId, role: 'button', tabindex: e.tabindex },
                        { default: L(() => [U(e.$slots, 'default')]), _: 3 },
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
              E,
              { key: 0 },
              {
                default: L(() => [
                  F(
                    f,
                    De({ ref: 'referenceElementRef' }, e.buttonProps, {
                      size: e.dropdownSize,
                      type: e.type,
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      onClick: e.handlerMainButtonClick,
                    }),
                    { default: L(() => [U(e.$slots, 'default')]), _: 3 },
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
                      default: L(() => [
                        F(_, { class: H(e.ns.e('icon')) }, { default: L(() => [F(r)]), _: 1 }, 8, [
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
          : le('v-if', !0),
      ],
      2,
    )
  )
}
var ts = oe(xn, [
  ['render', es],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue',
  ],
])
const os = J({
    name: 'DropdownItemImpl',
    components: { ElIcon: Ne },
    props: Mt,
    emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
    setup(e, { emit: t }) {
      const o = re('dropdown'),
        { role: n } = q(Ve, void 0),
        { collectionItemRef: s } = q(_o, void 0),
        { collectionItemRef: d } = q(Fn, void 0),
        {
          rovingFocusGroupItemRef: l,
          tabIndex: u,
          handleFocus: c,
          handleKeydown: h,
          handleMousedown: b,
        } = q(Pt, void 0),
        g = et(s, d, l),
        f = B(() =>
          n.value === 'menu' ? 'menuitem' : n.value === 'navigation' ? 'link' : 'button',
        ),
        r = ae((_) => {
          const { code: E } = _
          if (E === te.enter || E === te.space)
            return _.preventDefault(), _.stopImmediatePropagation(), t('clickimpl', _), !0
        }, h)
      return {
        ns: o,
        itemRef: g,
        dataset: { [Co]: '' },
        role: f,
        tabIndex: u,
        handleFocus: c,
        handleKeydown: r,
        handleMousedown: b,
      }
    },
  }),
  ns = ['aria-disabled', 'tabindex', 'role']
function ss(e, t, o, n, s, d) {
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
          : le('v-if', !0),
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
              ? (R(), V(l, { key: 0 }, { default: L(() => [(R(), V(We(e.icon)))]), _: 1 }))
              : le('v-if', !0),
            U(e.$slots, 'default'),
          ],
          16,
          ns,
        ),
      ],
      64,
    )
  )
}
var ls = oe(os, [
  ['render', ss],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue',
  ],
])
const Ht = () => {
    const e = q('elDropdown', {}),
      t = B(() => (e == null ? void 0 : e.dropdownSize))
    return { elDropdown: e, _elDropdownSize: t }
  },
  as = J({
    name: 'ElDropdownItem',
    components: { ElDropdownCollectionItem: $o, ElRovingFocusItem: Zn, ElDropdownItemImpl: ls },
    inheritAttrs: !1,
    props: Mt,
    emits: ['pointermove', 'pointerleave', 'click'],
    setup(e, { emit: t, attrs: o }) {
      const { elDropdown: n } = Ht(),
        s = Qe(),
        d = I(null),
        l = B(() => {
          var r, _
          return (_ = (r = a(d)) == null ? void 0 : r.textContent) != null ? _ : ''
        }),
        { onItemEnter: u, onItemLeave: c } = q(Ve, void 0),
        h = ae(
          (r) => (t('pointermove', r), r.defaultPrevented),
          dt((r) => {
            var _
            e.disabled
              ? c(r)
              : (u(r), r.defaultPrevented || (_ = r.currentTarget) == null || _.focus())
          }),
        ),
        b = ae(
          (r) => (t('pointerleave', r), r.defaultPrevented),
          dt((r) => {
            c(r)
          }),
        ),
        g = ae(
          (r) => (t('click', r), r.type !== 'keydown' && r.defaultPrevented),
          (r) => {
            var _, E, O
            if (e.disabled) {
              r.stopImmediatePropagation()
              return
            }
            ;(_ = n == null ? void 0 : n.hideOnClick) != null &&
              _.value &&
              ((E = n.handleClick) == null || E.call(n)),
              (O = n.commandHandler) == null || O.call(n, e.command, s, r)
          },
        ),
        f = B(() => ee(ee({}, e), o))
      return {
        handleClick: g,
        handlePointerMove: h,
        handlePointerLeave: b,
        textContent: l,
        propsAndAttrs: f,
      }
    },
  })
function rs(e, t, o, n, s, d) {
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
        default: L(() => [
          F(
            c,
            { focusable: !e.disabled },
            {
              default: L(() => [
                F(
                  u,
                  De(e.propsAndAttrs, {
                    onPointerleave: e.handlePointerLeave,
                    onPointermove: e.handlePointerMove,
                    onClickimpl: e.handleClick,
                  }),
                  { default: L(() => [U(e.$slots, 'default')]), _: 3 },
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
var Yt = oe(as, [
  ['render', rs],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue',
  ],
])
const is = J({
    name: 'ElDropdownMenu',
    props: Eo,
    setup(e) {
      const t = re('dropdown'),
        { _elDropdownSize: o } = Ht(),
        n = o.value,
        { focusTrapRef: s, onKeydown: d } = q(kt, void 0),
        { contentRef: l, role: u, triggerId: c } = q(Ve, void 0),
        { collectionRef: h, getItems: b } = q(So, void 0),
        {
          rovingFocusGroupRef: g,
          rovingFocusGroupRootStyle: f,
          tabIndex: r,
          onBlur: _,
          onFocus: E,
          onMousedown: O,
        } = q(ot, void 0),
        { collectionRef: z } = q(tt, void 0),
        A = B(() => [t.b('menu'), t.bm('menu', n == null ? void 0 : n.value)]),
        Y = et(l, h, s, g, z),
        y = ae(
          (k) => {
            var N
            ;(N = e.onKeydown) == null || N.call(e, k)
          },
          (k) => {
            const { currentTarget: N, code: C, target: w } = k
            if (
              (N.contains(w),
              te.tab === C && k.stopImmediatePropagation(),
              k.preventDefault(),
              w !== a(l) || !To.includes(C))
            )
              return
            const Q = b()
              .filter((j) => !j.disabled)
              .map((j) => j.ref)
            ko.includes(C) && Q.reverse(), nt(Q)
          },
        )
      return {
        size: n,
        rovingFocusGroupRootStyle: f,
        tabIndex: r,
        dropdownKls: A,
        role: u,
        triggerId: c,
        dropdownListWrapperRef: Y,
        handleKeydown: (k) => {
          y(k), d(k)
        },
        onBlur: _,
        onFocus: E,
        onMousedown: O,
      }
    },
  }),
  us = ['role', 'aria-labelledby']
function cs(e, t, o, n, s, d) {
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
      [U(e.$slots, 'default')],
      46,
      us,
    )
  )
}
var Kt = oe(is, [
  ['render', cs],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue',
  ],
])
const ds = Le(ts, { DropdownItem: Yt, DropdownMenu: Kt }),
  fs = Ct(Yt),
  ps = Ct(Kt),
  Gt = ['success', 'info', 'warning', 'error'],
  se = zo({
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
  ms = fe({
    customClass: { type: String, default: se.customClass },
    center: { type: Boolean, default: se.center },
    dangerouslyUseHTMLString: { type: Boolean, default: se.dangerouslyUseHTMLString },
    duration: { type: Number, default: se.duration },
    icon: { type: Dt, default: se.icon },
    id: { type: String, default: se.id },
    message: { type: de([String, Object, Function]), default: se.message },
    onClose: { type: de(Function), required: !1 },
    showClose: { type: Boolean, default: se.showClose },
    type: { type: String, values: Gt, default: se.type },
    offset: { type: Number, default: se.offset },
    zIndex: { type: Number, default: se.zIndex },
    grouping: { type: Boolean, default: se.grouping },
    repeatNum: { type: Number, default: se.repeatNum },
  }),
  vs = { destroy: () => !0 },
  ce = uo([]),
  hs = (e) => {
    const t = ce.findIndex((s) => s.id === e),
      o = ce[t]
    let n
    return t > 0 && (n = ce[t - 1]), { current: o, prev: n }
  },
  gs = (e) => {
    const { prev: t } = hs(e)
    return t ? t.vm.exposeProxy.bottom : 0
  },
  ys = ['id'],
  bs = ['innerHTML'],
  ws = { name: 'ElMessage' },
  _s = J(
    ie(ee({}, ws), {
      props: ms,
      emits: vs,
      setup(e, { expose: t }) {
        const o = e,
          { Close: n } = Bo,
          s = re('message'),
          d = I(),
          l = I(!1),
          u = I(0)
        let c
        const h = B(() => (o.type ? (o.type === 'error' ? 'danger' : o.type) : 'info')),
          b = B(() => {
            const y = o.type
            return { [s.bm('icon', y)]: y && mt[y] }
          }),
          g = B(() => o.icon || mt[o.type] || ''),
          f = B(() => gs(o.id)),
          r = B(() => o.offset + f.value),
          _ = B(() => u.value + r.value),
          E = B(() => ({ top: `${r.value}px`, zIndex: o.zIndex }))
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
          ye(
            () => o.repeatNum,
            () => {
              z(), O()
            },
          ),
          Oe(document, 'keydown', Y),
          Tt(d, () => {
            u.value = d.value.getBoundingClientRect().height
          }),
          t({ visible: l, bottom: _, close: A }),
          (y, m) => (
            R(),
            V(
              Ue,
              {
                name: a(s).b('fade'),
                onBeforeLeave: y.onClose,
                onAfterLeave: m[0] || (m[0] = (k) => y.$emit('destroy')),
                persisted: '',
              },
              {
                default: L(() => [
                  Ke(
                    K(
                      'div',
                      {
                        id: y.id,
                        ref_key: 'messageRef',
                        ref: d,
                        class: H([
                          a(s).b(),
                          { [a(s).m(y.type)]: y.type && !y.icon },
                          a(s).is('center', y.center),
                          a(s).is('closable', y.showClose),
                          y.customClass,
                        ]),
                        style: be(a(E)),
                        role: 'alert',
                        onMouseenter: z,
                        onMouseleave: O,
                      },
                      [
                        y.repeatNum > 1
                          ? (R(),
                            V(
                              a(cn),
                              { key: 0, value: y.repeatNum, type: a(h), class: H(a(s).e('badge')) },
                              null,
                              8,
                              ['value', 'type', 'class'],
                            ))
                          : le('v-if', !0),
                        a(g)
                          ? (R(),
                            V(
                              a(Ne),
                              { key: 1, class: H([a(s).e('icon'), a(b)]) },
                              { default: L(() => [(R(), V(We(a(g))))]), _: 1 },
                              8,
                              ['class'],
                            ))
                          : le('v-if', !0),
                        U(y.$slots, 'default', {}, () => [
                          y.dangerouslyUseHTMLString
                            ? (R(),
                              Z(
                                Me,
                                { key: 1 },
                                [
                                  le(
                                    " Caution here, message could've been compromised, never use user's input as message ",
                                  ),
                                  K(
                                    'p',
                                    { class: H(a(s).e('content')), innerHTML: y.message },
                                    null,
                                    10,
                                    bs,
                                  ),
                                ],
                                2112,
                              ))
                            : (R(),
                              Z('p', { key: 0, class: H(a(s).e('content')) }, ue(y.message), 3)),
                        ]),
                        y.showClose
                          ? (R(),
                            V(
                              a(Ne),
                              { key: 2, class: H(a(s).e('closeBtn')), onClick: wt(A, ['stop']) },
                              { default: L(() => [F(a(n))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : le('v-if', !0),
                      ],
                      46,
                      ys,
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
var Cs = oe(_s, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue',
  ],
])
let $s = 1
const Ut = (e) => {
    const t = !e || ut(e) || $t(e) || qe(e) ? { message: e } : e,
      o = ee(ee({}, se), t)
    if (!o.appendTo) o.appendTo = document.body
    else if (ut(o.appendTo)) {
      let n = document.querySelector(o.appendTo)
      Lo(n) || (n = document.body), (o.appendTo = n)
    }
    return o
  },
  Es = (e) => {
    const t = ce.indexOf(e)
    if (t === -1) return
    ce.splice(t, 1)
    const { handler: o } = e
    o.close()
  },
  Ss = (n, o) => {
    var s = n,
      { appendTo: e } = s,
      t = rt(s, ['appendTo'])
    const { nextZIndex: d } = It(),
      l = `message_${$s++}`,
      u = t.onClose,
      c = document.createElement('div'),
      h = ie(ee({}, t), {
        zIndex: d() + t.zIndex,
        id: l,
        onClose: () => {
          u == null || u(), Es(r)
        },
        onDestroy: () => {
          ct(null, c)
        },
      }),
      b = F(Cs, h, qe(h.message) || $t(h.message) ? { default: h.message } : null)
    ;(b.appContext = o || Se._context), ct(b, c), e.appendChild(c.firstElementChild)
    const g = b.component,
      r = {
        id: l,
        vnode: b,
        vm: g,
        handler: {
          close: () => {
            g.exposeProxy.visible = !1
          },
        },
        props: b.component.props,
      }
    return r
  },
  Se = (e = {}, t) => {
    if (!we) return { close: () => {} }
    if (he(it.max) && ce.length >= it.max) return { close: () => {} }
    const o = Ut(e)
    if (o.grouping && ce.length) {
      const s = ce.find(({ vnode: d }) => {
        var l
        return ((l = d.props) == null ? void 0 : l.message) === o.message
      })
      if (s) return (s.props.repeatNum += 1), (s.props.type = o.type), s.handler
    }
    const n = Ss(o, t)
    return ce.push(n), n.handler
  }
Gt.forEach((e) => {
  Se[e] = (t = {}, o) => {
    const n = Ut(t)
    return Se(ie(ee({}, n), { type: e }), o)
  }
})
function Ts(e) {
  for (const t of ce) (!e || e === t.props.type) && t.handler.close()
}
Se.closeAll = Ts
Se._context = null
const ks = co(Se, '$message')
const Is = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  Ms = K(
    'path',
    {
      fill: 'currentColor',
      d: 'M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z',
    },
    null,
    -1,
  ),
  Ds = [Ms]
function Os(e, t) {
  return R(), Z('svg', Is, Ds)
}
const Ns = { name: 'ep-arrow-down', render: Os }
const Ls = { class: 'my-header' },
  Rs = ['id'],
  Bs = { class: 'lock-content' },
  As = { class: 'left content-item' },
  Fs = { class: 'time' },
  zs = K('div', { class: 'divide' }, ':', -1),
  Ps = { class: 'right content-item' },
  Hs = { class: 'time' },
  Ys = { class: 'second' },
  Ks = { class: 'dialog-footer' },
  Gs = St('close'),
  Us = J({
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
        const r = Ie().get('h'),
          _ = Ie().get('m'),
          E = Ie().get('s')
        ;(d.value = r > 9 ? r : '0' + r),
          (l.value = _ > 9 ? _ : '0' + _),
          (u.value = E > 9 ? E : '0' + E)
      }, 1e3)
      const { title: h } = fo(o),
        b = Et(),
        g = B({
          set: (r) => {
            b.setLockScreen(r)
          },
          get: () => b.getLockScreen,
        })
      function f() {
        t('dialog-callback')
      }
      return (r, _) => {
        const E = xe,
          O = In
        return (
          R(),
          V(
            O,
            {
              modelValue: a(g),
              'onUpdate:modelValue': _[0] || (_[0] = (z) => (Ze(g) ? (g.value = z) : null)),
              width: '800px',
              'destroy-on-close': '',
              center: '',
              'custom-class': 'lock-dialog',
              fullscreen: !0,
            },
            {
              header: L(({ titleId: z, titleClass: A }) => [
                K('div', Ls, [K('h4', { id: z, class: H(A) }, ue(a(h)), 11, Rs)]),
              ]),
              footer: L(() => [
                K('span', Ks, [
                  St(
                    ue(a(Ie)(new Date()).format('YYYY/MM/DD')) +
                      ' \xA0 \xA0\u661F\u671F' +
                      ue(n.value[a(s).get('day')]) +
                      ' ',
                    1,
                  ),
                  F(E, { text: '', onClick: f }, { default: L(() => [Gs]), _: 1 }),
                ]),
              ]),
              default: L(() => [
                K('div', Bs, [
                  K('div', As, [K('span', Fs, ue(d.value), 1)]),
                  zs,
                  K('div', Ps, [K('span', Hs, ue(l.value), 1), K('div', Ys, ue(u.value), 1)]),
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
const Ws = { class: 'el-dropdown-link' },
  Vs = K('span', { class: 'user-name' }, '\u5F20\u4E09\u5C01', -1),
  js = { class: 'label', style: { 'margin-left': '8px' } },
  nl = J({
    __name: 'UserInfo',
    setup(e) {
      const t = Et(),
        o = (d) => {
          ks(`click on item ${d}`), t.setLockScreen(!0)
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
          c = Ln,
          h = Ns,
          b = fs,
          g = ps,
          f = ds
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
                  dropdown: L(() => [
                    F(g, null, {
                      default: L(() => [
                        (R(!0),
                        Z(
                          Me,
                          null,
                          po(
                            n.value,
                            (r) => (
                              R(),
                              V(
                                b,
                                { command: r.command, key: r.command, divided: r.divided },
                                {
                                  default: L(() => [
                                    F(
                                      u,
                                      {
                                        name: r.icon,
                                        width: '18px',
                                        height: '18px',
                                        color: '#e6e6',
                                      },
                                      null,
                                      8,
                                      ['name'],
                                    ),
                                    K('span', js, ue(r.label), 1),
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
                  default: L(() => [
                    K('span', Ws, [
                      F(u, { name: 'user', width: '20px', height: '20px' }),
                      F(c, { direction: 'vertical' }),
                      Vs,
                      F(h),
                    ]),
                  ]),
                  _: 1,
                },
              ),
              F(Us, { onDialogCallback: s }),
            ],
            64,
          )
        )
      }
    },
  })
export { ol as C, nn as E, Nt as U, nl as _, el as d, zo as m, tl as s, Ot as t, Bt as u }
