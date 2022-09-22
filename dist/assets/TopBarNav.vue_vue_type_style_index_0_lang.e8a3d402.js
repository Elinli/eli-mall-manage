import {
  o as X,
  c as Y,
  f as P,
  d as Et,
  Y as Ct,
  a as st,
  p as Bt,
  l as _t,
  i as Dt,
  h as q,
  F as xt,
  a3 as Mt,
  j as Z,
  I as nt,
  u as Xt,
  ay as Yt,
  g as At,
  t as Ot,
  ag as Lt,
} from './index.c83f165b.js'
const Rt = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  Wt = P(
    'path',
    {
      fill: 'currentColor',
      d: 'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
    },
    null,
    -1,
  ),
  Ft = [Wt]
function Nt(o, t) {
  return X(), Y('svg', Rt, Ft)
}
const zt = { name: 'ep-arrow-right-bold', render: Nt },
  It = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  Ht = P(
    'path',
    {
      fill: 'currentColor',
      d: 'M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
    },
    null,
    -1,
  ),
  Kt = [Ht]
function $t(o, t) {
  return X(), Y('svg', It, Kt)
}
const Vt = { name: 'ep-close', render: $t },
  Ut = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  jt = P(
    'path',
    {
      fill: 'currentColor',
      d: 'M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z',
    },
    null,
    -1,
  ),
  qt = [jt]
function Zt(o, t) {
  return X(), Y('svg', Ut, qt)
}
const Gt = { name: 'ep-arrow-left-bold', render: Zt }
/*!
 * better-scroll / core
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var tt = function (
  o,
  t,
) {
  return (
    (tt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, r) {
          e.__proto__ = r
        }) ||
      function (e, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
      }),
    tt(o, t)
  )
}
function K(o, t) {
  tt(o, t)
  function e() {
    this.constructor = o
  }
  o.prototype = t === null ? Object.create(t) : ((e.prototype = t.prototype), new e())
}
var L = function () {
  return (
    (L =
      Object.assign ||
      function (t) {
        for (var e, r = 1, i = arguments.length; r < i; r++) {
          e = arguments[r]
          for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
        }
        return t
      }),
    L.apply(this, arguments)
  )
}
function yt() {
  for (var o = 0, t = 0, e = arguments.length; t < e; t++) o += arguments[t].length
  for (var r = Array(o), i = 0, t = 0; t < e; t++)
    for (var s = arguments[t], n = 0, a = s.length; n < a; n++, i++) r[i] = s[n]
  return r
}
var Jt = [
  { sourceKey: 'scroller.scrollBehaviorX.currentPos', key: 'x' },
  { sourceKey: 'scroller.scrollBehaviorY.currentPos', key: 'y' },
  { sourceKey: 'scroller.scrollBehaviorX.hasScroll', key: 'hasHorizontalScroll' },
  { sourceKey: 'scroller.scrollBehaviorY.hasScroll', key: 'hasVerticalScroll' },
  { sourceKey: 'scroller.scrollBehaviorX.contentSize', key: 'scrollerWidth' },
  { sourceKey: 'scroller.scrollBehaviorY.contentSize', key: 'scrollerHeight' },
  { sourceKey: 'scroller.scrollBehaviorX.maxScrollPos', key: 'maxScrollX' },
  { sourceKey: 'scroller.scrollBehaviorY.maxScrollPos', key: 'maxScrollY' },
  { sourceKey: 'scroller.scrollBehaviorX.minScrollPos', key: 'minScrollX' },
  { sourceKey: 'scroller.scrollBehaviorY.minScrollPos', key: 'minScrollY' },
  { sourceKey: 'scroller.scrollBehaviorX.movingDirection', key: 'movingDirectionX' },
  { sourceKey: 'scroller.scrollBehaviorY.movingDirection', key: 'movingDirectionY' },
  { sourceKey: 'scroller.scrollBehaviorX.direction', key: 'directionX' },
  { sourceKey: 'scroller.scrollBehaviorY.direction', key: 'directionY' },
  { sourceKey: 'scroller.actions.enabled', key: 'enabled' },
  { sourceKey: 'scroller.animater.pending', key: 'pending' },
  { sourceKey: 'scroller.animater.stop', key: 'stop' },
  { sourceKey: 'scroller.scrollTo', key: 'scrollTo' },
  { sourceKey: 'scroller.scrollBy', key: 'scrollBy' },
  { sourceKey: 'scroller.scrollToElement', key: 'scrollToElement' },
  { sourceKey: 'scroller.resetPosition', key: 'resetPosition' },
]
function I(o) {
  console.error('[BScroll warn]: ' + o)
}
var b = typeof window != 'undefined',
  O = b && navigator.userAgent.toLowerCase(),
  Qt = !!(O && /wechatdevtools/.test(O)),
  te = O && O.indexOf('android') > 0,
  ee = (function () {
    if (typeof O == 'string') {
      var o = /os (\d\d?_\d(_\d)?)/,
        t = o.exec(O)
      if (!t) return !1
      var e = t[1].split('_').map(function (r) {
        return parseInt(r, 10)
      })
      return e[0] === 13 && e[1] >= 4
    }
    return !1
  })(),
  gt = !1
if (b) {
  var oe = 'test-passive'
  try {
    var at = {}
    Object.defineProperty(at, 'passive', {
      get: function () {
        gt = !0
      },
    }),
      window.addEventListener(oe, function () {}, at)
  } catch (o) {}
}
function D() {
  return window.performance && window.performance.now && window.performance.timing
    ? window.performance.now() + window.performance.timing.navigationStart
    : +new Date()
}
var et = function (o, t) {
  for (var e in t) o[e] = t[e]
  return o
}
function ot(o) {
  return o == null
}
function ht(o, t, e) {
  return o < t ? t : o > e ? e : o
}
var it = b && document.createElement('div').style,
  A = (function () {
    if (!b) return !1
    for (
      var o = [
          { key: 'standard', value: 'transform' },
          { key: 'webkit', value: 'webkitTransform' },
          { key: 'Moz', value: 'MozTransform' },
          { key: 'O', value: 'OTransform' },
          { key: 'ms', value: 'msTransform' },
        ],
        t = 0,
        e = o;
      t < e.length;
      t++
    ) {
      var r = e[t]
      if (it[r.value] !== void 0) return r.key
    }
    return !1
  })()
function w(o) {
  return A === !1
    ? o
    : A === 'standard'
    ? o === 'transitionEnd'
      ? 'transitionend'
      : o
    : A + o.charAt(0).toUpperCase() + o.substr(1)
}
function kt(o) {
  return typeof o == 'string' ? document.querySelector(o) : o
}
function re(o, t, e, r) {
  var i = gt ? { passive: !1, capture: !!r } : !!r
  o.addEventListener(t, e, i)
}
function ie(o, t, e, r) {
  o.removeEventListener(t, e, { capture: !!r })
}
function lt(o) {
  for (var t = 0, e = 0; o; ) (t -= o.offsetLeft), (e -= o.offsetTop), (o = o.offsetParent)
  return { left: t, top: e }
}
A && A !== 'standard' && '' + A.toLowerCase()
var se = w('transform'),
  Tt = w('transition'),
  ne = b && w('perspective') in it,
  ct = b && ('ontouchstart' in window || Qt),
  ae = b && Tt in it,
  _ = {
    transform: se,
    transition: Tt,
    transitionTimingFunction: w('transitionTimingFunction'),
    transitionDuration: w('transitionDuration'),
    transitionDelay: w('transitionDelay'),
    transformOrigin: w('transformOrigin'),
    transitionEnd: w('transitionEnd'),
    transitionProperty: w('transitionProperty'),
  },
  G = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    touchcancel: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2,
  }
function ut(o) {
  if (o instanceof window.SVGElement) {
    var t = o.getBoundingClientRect()
    return { top: t.top, left: t.left, width: t.width, height: t.height }
  } else
    return { top: o.offsetTop, left: o.offsetLeft, width: o.offsetWidth, height: o.offsetHeight }
}
function R(o, t) {
  for (var e in t) if (t[e].test(o[e])) return !0
  return !1
}
var he = R
function le(o, t) {
  var e = document.createEvent('Event')
  e.initEvent(t, !0, !0), (e.pageX = o.pageX), (e.pageY = o.pageY), o.target.dispatchEvent(e)
}
function bt(o, t) {
  t === void 0 && (t = 'click')
  var e
  o.type === 'mouseup'
    ? (e = o)
    : (o.type === 'touchend' || o.type === 'touchcancel') && (e = o.changedTouches[0])
  var r = {}
  e &&
    ((r.screenX = e.screenX || 0),
    (r.screenY = e.screenY || 0),
    (r.clientX = e.clientX || 0),
    (r.clientY = e.clientY || 0))
  var i,
    s = !0,
    n = !0,
    a = o.ctrlKey,
    l = o.shiftKey,
    h = o.altKey,
    u = o.metaKey,
    c = { ctrlKey: a, shiftKey: l, altKey: h, metaKey: u }
  if (typeof MouseEvent != 'undefined')
    try {
      i = new MouseEvent(t, et(L({ bubbles: s, cancelable: n }, c), r))
    } catch (v) {
      p()
    }
  else p()
  function p() {
    ;(i = document.createEvent('Event')), i.initEvent(t, s, n), et(i, r)
  }
  ;(i.forwardedTouchEvent = !0), (i._constructed = !0), o.target.dispatchEvent(i)
}
function ce(o) {
  bt(o, 'dblclick')
}
var B = {
    swipe: {
      style: 'cubic-bezier(0.23, 1, 0.32, 1)',
      fn: function (o) {
        return 1 + --o * o * o * o * o
      },
    },
    swipeBounce: {
      style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fn: function (o) {
        return o * (2 - o)
      },
    },
    bounce: {
      style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      fn: function (o) {
        return 1 - --o * o * o * o
      },
    },
  },
  ue = 1e3 / 60,
  E = b && window
function St() {}
var Pt = (function () {
    return b
      ? E.requestAnimationFrame ||
          E.webkitRequestAnimationFrame ||
          E.mozRequestAnimationFrame ||
          E.oRequestAnimationFrame ||
          function (o) {
            return window.setTimeout(o, o.interval || ue)
          }
      : St
  })(),
  x = (function () {
    return b
      ? E.cancelAnimationFrame ||
          E.webkitCancelAnimationFrame ||
          E.mozCancelAnimationFrame ||
          E.oCancelAnimationFrame ||
          function (o) {
            window.clearTimeout(o)
          }
      : St
  })(),
  pt = function (o) {},
  J = { enumerable: !0, configurable: !0, get: pt, set: pt },
  pe = function (o, t) {
    for (var e = t.split('.'), r = 0; r < e.length - 1; r++)
      if (((o = o[e[r]]), typeof o != 'object' || !o)) return
    var i = e.pop()
    return typeof o[i] == 'function'
      ? function () {
          return o[i].apply(o, arguments)
        }
      : o[i]
  },
  fe = function (o, t, e) {
    for (var r = t.split('.'), i, s = 0; s < r.length - 1; s++)
      (i = r[s]), o[i] || (o[i] = {}), (o = o[i])
    o[r.pop()] = e
  }
function ve(o, t, e) {
  ;(J.get = function () {
    return pe(this, t)
  }),
    (J.set = function (i) {
      fe(this, t, i)
    }),
    Object.defineProperty(o, e, J)
}
var C = (function () {
    function o(t) {
      ;(this.events = {}), (this.eventTypes = {}), this.registerType(t)
    }
    return (
      (o.prototype.on = function (t, e, r) {
        return (
          r === void 0 && (r = this),
          this.hasType(t),
          this.events[t] || (this.events[t] = []),
          this.events[t].push([e, r]),
          this
        )
      }),
      (o.prototype.once = function (t, e, r) {
        var i = this
        r === void 0 && (r = this), this.hasType(t)
        var s = function () {
          for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a]
          i.off(t, s)
          var l = e.apply(r, n)
          if (l === !0) return l
        }
        return (s.fn = e), this.on(t, s), this
      }),
      (o.prototype.off = function (t, e) {
        if (!t && !e) return (this.events = {}), this
        if (t) {
          if ((this.hasType(t), !e)) return (this.events[t] = []), this
          var r = this.events[t]
          if (!r) return this
          for (var i = r.length; i--; )
            (r[i][0] === e || (r[i][0] && r[i][0].fn === e)) && r.splice(i, 1)
          return this
        }
      }),
      (o.prototype.trigger = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
        this.hasType(t)
        var i = this.events[t]
        if (!!i)
          for (var s = i.length, n = yt(i), a, l = 0; l < s; l++) {
            var h = n[l],
              u = h[0],
              c = h[1]
            if (u && ((a = u.apply(c, e)), a === !0)) return a
          }
      }),
      (o.prototype.registerType = function (t) {
        var e = this
        t.forEach(function (r) {
          e.eventTypes[r] = r
        })
      }),
      (o.prototype.destroy = function () {
        ;(this.events = {}), (this.eventTypes = {})
      }),
      (o.prototype.hasType = function (t) {
        var e = this.eventTypes,
          r = e[t] === t
        r ||
          I(
            'EventEmitter has used unknown event type: "' +
              t +
              '", should be oneof [' +
              ('' +
                Object.keys(e).map(function (i) {
                  return JSON.stringify(i)
                })) +
              ']',
          )
      }),
      o
    )
  })(),
  H = (function () {
    function o(t, e) {
      ;(this.wrapper = t), (this.events = e), this.addDOMEvents()
    }
    return (
      (o.prototype.destroy = function () {
        this.removeDOMEvents(), (this.events = [])
      }),
      (o.prototype.addDOMEvents = function () {
        this.handleDOMEvents(re)
      }),
      (o.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(ie)
      }),
      (o.prototype.handleDOMEvents = function (t) {
        var e = this,
          r = this.wrapper
        this.events.forEach(function (i) {
          t(r, i.name, e, !!i.capture)
        })
      }),
      (o.prototype.handleEvent = function (t) {
        var e = t.type
        this.events.some(function (r) {
          return r.name === e ? (r.handler(t), !0) : !1
        })
      }),
      o
    )
  })(),
  de = (function () {
    function o() {}
    return o
  })(),
  me = (function (o) {
    K(t, o)
    function t() {
      var e = o.call(this) || this
      return (
        (e.startX = 0),
        (e.startY = 0),
        (e.scrollX = !1),
        (e.scrollY = !0),
        (e.freeScroll = !1),
        (e.directionLockThreshold = 0),
        (e.eventPassthrough = ''),
        (e.click = !1),
        (e.dblclick = !1),
        (e.tap = ''),
        (e.bounce = { top: !0, bottom: !0, left: !0, right: !0 }),
        (e.bounceTime = 800),
        (e.momentum = !0),
        (e.momentumLimitTime = 300),
        (e.momentumLimitDistance = 15),
        (e.swipeTime = 2500),
        (e.swipeBounceTime = 500),
        (e.deceleration = 0.0015),
        (e.flickLimitTime = 200),
        (e.flickLimitDistance = 100),
        (e.resizePolling = 60),
        (e.probeType = 0),
        (e.stopPropagation = !1),
        (e.preventDefault = !0),
        (e.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/ }),
        (e.tagException = { tagName: /^TEXTAREA$/ }),
        (e.HWCompositing = !0),
        (e.useTransition = !0),
        (e.bindToWrapper = !1),
        (e.bindToTarget = !1),
        (e.disableMouse = ct),
        (e.disableTouch = !ct),
        (e.autoBlur = !0),
        (e.autoEndDistance = 5),
        (e.outOfBoundaryDampingFactor = 1 / 3),
        (e.specifiedIndexAsContent = 0),
        (e.quadrant = 1),
        e
      )
    }
    return (
      (t.prototype.merge = function (e) {
        if (!e) return this
        for (var r in e) {
          if (r === 'bounce') {
            this.bounce = this.resolveBounce(e[r])
            continue
          }
          this[r] = e[r]
        }
        return this
      }),
      (t.prototype.process = function () {
        return (
          (this.translateZ = this.HWCompositing && ne ? ' translateZ(1px)' : ''),
          (this.useTransition = this.useTransition && ae),
          (this.preventDefault = !this.eventPassthrough && this.preventDefault),
          (this.scrollX = this.eventPassthrough === 'horizontal' ? !1 : this.scrollX),
          (this.scrollY = this.eventPassthrough === 'vertical' ? !1 : this.scrollY),
          (this.freeScroll = this.freeScroll && !this.eventPassthrough),
          (this.scrollX = this.freeScroll ? !0 : this.scrollX),
          (this.scrollY = this.freeScroll ? !0 : this.scrollY),
          (this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold),
          this
        )
      }),
      (t.prototype.resolveBounce = function (e) {
        var r = { top: !0, right: !0, bottom: !0, left: !0 },
          i = { top: !1, right: !1, bottom: !1, left: !1 },
          s
        return typeof e == 'object' ? (s = et(r, e)) : (s = e ? r : i), s
      }),
      t
    )
  })(de),
  ye = (function () {
    function o(t, e) {
      ;(this.wrapper = t),
        (this.options = e),
        (this.hooks = new C(['beforeStart', 'start', 'move', 'end', 'click'])),
        this.handleDOMEvents()
    }
    return (
      (o.prototype.handleDOMEvents = function () {
        var t = this.options,
          e = t.bindToWrapper,
          r = t.disableMouse,
          i = t.disableTouch,
          s = t.click,
          n = this.wrapper,
          a = e ? n : window,
          l = [],
          h = [],
          u = !i,
          c = !r
        s && l.push({ name: 'click', handler: this.click.bind(this), capture: !0 }),
          u &&
            (l.push({ name: 'touchstart', handler: this.start.bind(this) }),
            h.push(
              { name: 'touchmove', handler: this.move.bind(this) },
              { name: 'touchend', handler: this.end.bind(this) },
              { name: 'touchcancel', handler: this.end.bind(this) },
            )),
          c &&
            (l.push({ name: 'mousedown', handler: this.start.bind(this) }),
            h.push(
              { name: 'mousemove', handler: this.move.bind(this) },
              { name: 'mouseup', handler: this.end.bind(this) },
            )),
          (this.wrapperEventRegister = new H(n, l)),
          (this.targetEventRegister = new H(a, h))
      }),
      (o.prototype.beforeHandler = function (t, e) {
        var r = this.options,
          i = r.preventDefault,
          s = r.stopPropagation,
          n = r.preventDefaultException,
          a = {
            start: function () {
              return i && !R(t.target, n)
            },
            end: function () {
              return i && !R(t.target, n)
            },
            move: function () {
              return i
            },
          }
        a[e]() && t.preventDefault(), s && t.stopPropagation()
      }),
      (o.prototype.setInitiated = function (t) {
        t === void 0 && (t = 0), (this.initiated = t)
      }),
      (o.prototype.start = function (t) {
        var e = G[t.type]
        if (!(this.initiated && this.initiated !== e)) {
          if ((this.setInitiated(e), he(t.target, this.options.tagException))) {
            this.setInitiated()
            return
          }
          if (
            !(e === 2 && t.button !== 0) &&
            !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)
          ) {
            this.beforeHandler(t, 'start')
            var r = t.touches ? t.touches[0] : t
            ;(this.pointX = r.pageX),
              (this.pointY = r.pageY),
              this.hooks.trigger(this.hooks.eventTypes.start, t)
          }
        }
      }),
      (o.prototype.move = function (t) {
        if (G[t.type] === this.initiated) {
          this.beforeHandler(t, 'move')
          var e = t.touches ? t.touches[0] : t,
            r = e.pageX - this.pointX,
            i = e.pageY - this.pointY
          if (
            ((this.pointX = e.pageX),
            (this.pointY = e.pageY),
            !this.hooks.trigger(this.hooks.eventTypes.move, { deltaX: r, deltaY: i, e: t }))
          ) {
            var s =
                document.documentElement.scrollLeft ||
                window.pageXOffset ||
                document.body.scrollLeft,
              n =
                document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
              a = this.pointX - s,
              l = this.pointY - n,
              h = this.options.autoEndDistance
            ;(a > document.documentElement.clientWidth - h ||
              l > document.documentElement.clientHeight - h ||
              a < h ||
              l < h) &&
              this.end(t)
          }
        }
      }),
      (o.prototype.end = function (t) {
        G[t.type] === this.initiated &&
          (this.setInitiated(),
          this.beforeHandler(t, 'end'),
          this.hooks.trigger(this.hooks.eventTypes.end, t))
      }),
      (o.prototype.click = function (t) {
        this.hooks.trigger(this.hooks.eventTypes.click, t)
      }),
      (o.prototype.setContent = function (t) {
        t !== this.wrapper && ((this.wrapper = t), this.rebindDOMEvents())
      }),
      (o.prototype.rebindDOMEvents = function () {
        this.wrapperEventRegister.destroy(),
          this.targetEventRegister.destroy(),
          this.handleDOMEvents()
      }),
      (o.prototype.destroy = function () {
        this.wrapperEventRegister.destroy(),
          this.targetEventRegister.destroy(),
          this.hooks.destroy()
      }),
      o
    )
  })(),
  Q = { x: ['translateX', 'px'], y: ['translateY', 'px'] },
  ge = (function () {
    function o(t) {
      this.setContent(t), (this.hooks = new C(['beforeTranslate', 'translate']))
    }
    return (
      (o.prototype.getComputedPosition = function () {
        var t = window.getComputedStyle(this.content, null),
          e = t[_.transform].split(')')[0].split(', '),
          r = +(e[12] || e[4]) || 0,
          i = +(e[13] || e[5]) || 0
        return { x: r, y: i }
      }),
      (o.prototype.translate = function (t) {
        var e = []
        Object.keys(t).forEach(function (r) {
          if (!!Q[r]) {
            var i = Q[r][0]
            if (i) {
              var s = Q[r][1],
                n = t[r]
              e.push(i + '(' + n + s + ')')
            }
          }
        }),
          this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, e, t),
          (this.style[_.transform] = e.join(' ')),
          this.hooks.trigger(this.hooks.eventTypes.translate, t)
      }),
      (o.prototype.setContent = function (t) {
        this.content !== t && ((this.content = t), (this.style = t.style))
      }),
      (o.prototype.destroy = function () {
        this.hooks.destroy()
      }),
      o
    )
  })(),
  wt = (function () {
    function o(t, e, r) {
      ;(this.translater = e),
        (this.options = r),
        (this.timer = 0),
        (this.hooks = new C([
          'move',
          'end',
          'beforeForceStop',
          'forceStop',
          'callStop',
          'time',
          'timeFunction',
        ])),
        this.setContent(t)
    }
    return (
      (o.prototype.translate = function (t) {
        this.translater.translate(t)
      }),
      (o.prototype.setPending = function (t) {
        this.pending = t
      }),
      (o.prototype.setForceStopped = function (t) {
        this.forceStopped = t
      }),
      (o.prototype.setCallStop = function (t) {
        this.callStopWhenPending = t
      }),
      (o.prototype.setContent = function (t) {
        this.content !== t && ((this.content = t), (this.style = t.style), this.stop())
      }),
      (o.prototype.clearTimer = function () {
        this.timer && (x(this.timer), (this.timer = 0))
      }),
      (o.prototype.destroy = function () {
        this.hooks.destroy(), x(this.timer)
      }),
      o
    )
  })(),
  ke = function (o, t, e, r) {
    var i = function (h, u) {
        var c = h - u,
          p = c > 0 ? -1 : c < 0 ? 1 : 0
        return p
      },
      s = i(t.x, o.x),
      n = i(t.y, o.y),
      a = e.x - r.x,
      l = e.y - r.y
    return s * a <= 0 && n * l <= 0
  },
  Te = (function (o) {
    K(t, o)
    function t() {
      return (o !== null && o.apply(this, arguments)) || this
    }
    return (
      (t.prototype.startProbe = function (e, r) {
        var i = this,
          s = e,
          n = function () {
            var a = i.translater.getComputedPosition()
            ke(e, r, a, s) && i.hooks.trigger(i.hooks.eventTypes.move, a),
              i.pending ||
                (i.callStopWhenPending
                  ? (i.callStopWhenPending = !1)
                  : i.hooks.trigger(i.hooks.eventTypes.end, a)),
              (s = a),
              i.pending && (i.timer = Pt(n))
          }
        this.callStopWhenPending && this.setCallStop(!1), x(this.timer), n()
      }),
      (t.prototype.transitionTime = function (e) {
        e === void 0 && (e = 0),
          (this.style[_.transitionDuration] = e + 'ms'),
          this.hooks.trigger(this.hooks.eventTypes.time, e)
      }),
      (t.prototype.transitionTimingFunction = function (e) {
        ;(this.style[_.transitionTimingFunction] = e),
          this.hooks.trigger(this.hooks.eventTypes.timeFunction, e)
      }),
      (t.prototype.transitionProperty = function () {
        this.style[_.transitionProperty] = _.transform
      }),
      (t.prototype.move = function (e, r, i, s) {
        this.setPending(i > 0),
          this.transitionTimingFunction(s),
          this.transitionProperty(),
          this.transitionTime(i),
          this.translate(r)
        var n = this.options.probeType === 3
        i && n && this.startProbe(e, r),
          i ||
            ((this._reflow = this.content.offsetHeight),
            n && this.hooks.trigger(this.hooks.eventTypes.move, r),
            this.hooks.trigger(this.hooks.eventTypes.end, r))
      }),
      (t.prototype.doStop = function () {
        var e = this.pending
        if ((this.setForceStopped(!1), this.setCallStop(!1), e)) {
          this.setPending(!1), x(this.timer)
          var r = this.translater.getComputedPosition(),
            i = r.x,
            s = r.y
          this.transitionTime(),
            this.translate({ x: i, y: s }),
            this.setForceStopped(!0),
            this.setCallStop(!0),
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: i, y: s })
        }
        return e
      }),
      (t.prototype.stop = function () {
        var e = this.doStop()
        e && this.hooks.trigger(this.hooks.eventTypes.callStop)
      }),
      t
    )
  })(wt),
  be = (function (o) {
    K(t, o)
    function t() {
      return (o !== null && o.apply(this, arguments)) || this
    }
    return (
      (t.prototype.move = function (e, r, i, s) {
        if (!i) {
          this.translate(r),
            this.options.probeType === 3 && this.hooks.trigger(this.hooks.eventTypes.move, r),
            this.hooks.trigger(this.hooks.eventTypes.end, r)
          return
        }
        this.animate(e, r, i, s)
      }),
      (t.prototype.animate = function (e, r, i, s) {
        var n = this,
          a = D(),
          l = a + i,
          h = this.options.probeType === 3,
          u = function () {
            var c = D()
            if (c >= l) {
              n.translate(r),
                h && n.hooks.trigger(n.hooks.eventTypes.move, r),
                n.hooks.trigger(n.hooks.eventTypes.end, r)
              return
            }
            c = (c - a) / i
            var p = s(c),
              v = {}
            Object.keys(r).forEach(function (f) {
              var k = e[f],
                d = r[f]
              v[f] = (d - k) * p + k
            }),
              n.translate(v),
              h && n.hooks.trigger(n.hooks.eventTypes.move, v),
              n.pending && (n.timer = Pt(u)),
              n.pending ||
                (n.callStopWhenPending
                  ? (n.callStopWhenPending = !1)
                  : n.hooks.trigger(n.hooks.eventTypes.end, r))
          }
        this.setPending(!0), this.callStopWhenPending && this.setCallStop(!1), x(this.timer), u()
      }),
      (t.prototype.doStop = function () {
        var e = this.pending
        if ((this.setForceStopped(!1), this.setCallStop(!1), e)) {
          this.setPending(!1), x(this.timer)
          var r = this.translater.getComputedPosition()
          this.setForceStopped(!0),
            this.setCallStop(!0),
            this.hooks.trigger(this.hooks.eventTypes.forceStop, r)
        }
        return e
      }),
      (t.prototype.stop = function () {
        var e = this.doStop()
        e && this.hooks.trigger(this.hooks.eventTypes.callStop)
      }),
      t
    )
  })(wt)
function Se(o, t, e) {
  var r = e.useTransition,
    i = {}
  return (
    Object.defineProperty(i, 'probeType', {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return e.probeType
      },
    }),
    r ? new Te(o, t, i) : new be(o, t, i)
  )
}
var ft = (function () {
    function o(t, e, r) {
      ;(this.wrapper = t),
        (this.options = r),
        (this.hooks = new C([
          'beforeComputeBoundary',
          'computeBoundary',
          'momentum',
          'end',
          'ignoreHasScroll',
        ])),
        this.refresh(e)
    }
    return (
      (o.prototype.start = function () {
        ;(this.dist = 0), this.setMovingDirection(0), this.setDirection(0)
      }),
      (o.prototype.move = function (t) {
        return (
          (t = this.hasScroll ? t : 0),
          this.setMovingDirection(t),
          this.performDampingAlgorithm(t, this.options.outOfBoundaryDampingFactor)
        )
      }),
      (o.prototype.setMovingDirection = function (t) {
        this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0
      }),
      (o.prototype.setDirection = function (t) {
        this.direction = t > 0 ? -1 : t < 0 ? 1 : 0
      }),
      (o.prototype.performDampingAlgorithm = function (t, e) {
        var r = this.currentPos + t
        return (
          (r > this.minScrollPos || r < this.maxScrollPos) &&
            ((r > this.minScrollPos && this.options.bounces[0]) ||
            (r < this.maxScrollPos && this.options.bounces[1])
              ? (r = this.currentPos + t * e)
              : (r = r > this.minScrollPos ? this.minScrollPos : this.maxScrollPos)),
          r
        )
      }),
      (o.prototype.end = function (t) {
        var e = { duration: 0 },
          r = Math.abs(this.currentPos - this.startPos)
        if (
          this.options.momentum &&
          t < this.options.momentumLimitTime &&
          r > this.options.momentumLimitDistance
        ) {
          var i =
            (this.direction === -1 && this.options.bounces[0]) ||
            (this.direction === 1 && this.options.bounces[1])
              ? this.wrapperSize
              : 0
          e = this.hasScroll
            ? this.momentum(
                this.currentPos,
                this.startPos,
                t,
                this.maxScrollPos,
                this.minScrollPos,
                i,
                this.options,
              )
            : { destination: this.currentPos, duration: 0 }
        } else this.hooks.trigger(this.hooks.eventTypes.end, e)
        return e
      }),
      (o.prototype.momentum = function (t, e, r, i, s, n, a) {
        a === void 0 && (a = this.options)
        var l = t - e,
          h = Math.abs(l) / r,
          u = a.deceleration,
          c = a.swipeBounceTime,
          p = a.swipeTime,
          v = Math.min(p, (h * 2) / u),
          f = { destination: t + ((h * h) / u) * (l < 0 ? -1 : 1), duration: v, rate: 15 }
        return (
          this.hooks.trigger(this.hooks.eventTypes.momentum, f, l),
          f.destination < i
            ? ((f.destination = n ? Math.max(i - n / 4, i - (n / f.rate) * h) : i),
              (f.duration = c))
            : f.destination > s &&
              ((f.destination = n ? Math.min(s + n / 4, s + (n / f.rate) * h) : s),
              (f.duration = c)),
          (f.destination = Math.round(f.destination)),
          f
        )
      }),
      (o.prototype.updateDirection = function () {
        var t = this.currentPos - this.absStartPos
        this.setDirection(t)
      }),
      (o.prototype.refresh = function (t) {
        var e = this.options.rect,
          r = e.size,
          i = e.position,
          s = window.getComputedStyle(this.wrapper, null).position === 'static',
          n = ut(this.wrapper)
        ;(this.wrapperSize = this.wrapper[r === 'width' ? 'clientWidth' : 'clientHeight']),
          this.setContent(t)
        var a = ut(this.content)
        ;(this.contentSize = a[r]),
          (this.relativeOffset = a[i]),
          s && (this.relativeOffset -= n[i]),
          this.computeBoundary(),
          this.setDirection(0)
      }),
      (o.prototype.setContent = function (t) {
        t !== this.content && ((this.content = t), this.resetState())
      }),
      (o.prototype.resetState = function () {
        ;(this.currentPos = 0),
          (this.startPos = 0),
          (this.dist = 0),
          this.setDirection(0),
          this.setMovingDirection(0),
          this.resetStartPos()
      }),
      (o.prototype.computeBoundary = function () {
        this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary)
        var t = { minScrollPos: 0, maxScrollPos: this.wrapperSize - this.contentSize }
        t.maxScrollPos < 0 &&
          ((t.maxScrollPos -= this.relativeOffset),
          this.options.specifiedIndexAsContent === 0 && (t.minScrollPos = -this.relativeOffset)),
          this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t),
          (this.minScrollPos = t.minScrollPos),
          (this.maxScrollPos = t.maxScrollPos),
          (this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos),
          !this.hasScroll &&
            this.minScrollPos < this.maxScrollPos &&
            ((this.maxScrollPos = this.minScrollPos), (this.contentSize = this.wrapperSize))
      }),
      (o.prototype.updatePosition = function (t) {
        this.currentPos = t
      }),
      (o.prototype.getCurrentPos = function () {
        return this.currentPos
      }),
      (o.prototype.checkInBoundary = function () {
        var t = this.adjustPosition(this.currentPos),
          e = t === this.getCurrentPos()
        return { position: t, inBoundary: e }
      }),
      (o.prototype.adjustPosition = function (t) {
        return (
          !this.hasScroll && !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)
            ? (t = this.minScrollPos)
            : t > this.minScrollPos
            ? (t = this.minScrollPos)
            : t < this.maxScrollPos && (t = this.maxScrollPos),
          t
        )
      }),
      (o.prototype.updateStartPos = function () {
        this.startPos = this.currentPos
      }),
      (o.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos
      }),
      (o.prototype.resetStartPos = function () {
        this.updateStartPos(), this.updateAbsStartPos()
      }),
      (o.prototype.getAbsDist = function (t) {
        return (this.dist += t), Math.abs(this.dist)
      }),
      (o.prototype.destroy = function () {
        this.hooks.destroy()
      }),
      o
    )
  })(),
  W,
  F,
  N,
  z,
  vt =
    ((W = {}),
    (W.yes = function (o) {
      return !0
    }),
    (W.no = function (o) {
      return o.preventDefault(), !1
    }),
    W),
  Pe =
    ((F = {}),
    (F.horizontal = ((N = {}), (N.yes = 'horizontal'), (N.no = 'vertical'), N)),
    (F.vertical = ((z = {}), (z.yes = 'vertical'), (z.no = 'horizontal'), z)),
    F),
  we = (function () {
    function o(t, e, r) {
      ;(this.directionLockThreshold = t),
        (this.freeScroll = e),
        (this.eventPassthrough = r),
        this.reset()
    }
    return (
      (o.prototype.reset = function () {
        this.directionLocked = ''
      }),
      (o.prototype.checkMovingDirection = function (t, e, r) {
        return this.computeDirectionLock(t, e), this.handleEventPassthrough(r)
      }),
      (o.prototype.adjustDelta = function (t, e) {
        return (
          this.directionLocked === 'horizontal'
            ? (e = 0)
            : this.directionLocked === 'vertical' && (t = 0),
          { deltaX: t, deltaY: e }
        )
      }),
      (o.prototype.computeDirectionLock = function (t, e) {
        this.directionLocked === '' &&
          !this.freeScroll &&
          (t > e + this.directionLockThreshold
            ? (this.directionLocked = 'horizontal')
            : e >= t + this.directionLockThreshold
            ? (this.directionLocked = 'vertical')
            : (this.directionLocked = 'none'))
      }),
      (o.prototype.handleEventPassthrough = function (t) {
        var e = Pe[this.directionLocked]
        if (e) {
          if (this.eventPassthrough === e.yes) return vt.yes(t)
          if (this.eventPassthrough === e.no) return vt.no(t)
        }
        return !1
      }),
      o
    )
  })(),
  Ee = function (o, t, e) {
    return e === 2 ? [t, -o] : e === 3 ? [-o, -t] : e === 4 ? [-t, o] : [o, t]
  },
  Ce = (function () {
    function o(t, e, r, i, s) {
      ;(this.hooks = new C([
        'start',
        'beforeMove',
        'scrollStart',
        'scroll',
        'beforeEnd',
        'end',
        'scrollEnd',
        'contentNotMoved',
        'detectMovingDirection',
        'coordinateTransformation',
      ])),
        (this.scrollBehaviorX = t),
        (this.scrollBehaviorY = e),
        (this.actionsHandler = r),
        (this.animater = i),
        (this.options = s),
        (this.directionLockAction = new we(
          s.directionLockThreshold,
          s.freeScroll,
          s.eventPassthrough,
        )),
        (this.enabled = !0),
        this.bindActionsHandler()
    }
    return (
      (o.prototype.bindActionsHandler = function () {
        var t = this
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
          return t.enabled ? t.handleStart(e) : !0
        }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (e) {
            var r = e.deltaX,
              i = e.deltaY,
              s = e.e
            if (!t.enabled) return !0
            var n = Ee(r, i, t.options.quadrant),
              a = n[0],
              l = n[1],
              h = { deltaX: a, deltaY: l }
            return (
              t.hooks.trigger(t.hooks.eventTypes.coordinateTransformation, h),
              t.handleMove(h.deltaX, h.deltaY, s)
            )
          }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            return t.enabled ? t.handleEnd(e) : !0
          }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            t.enabled && !e._constructed && t.handleClick(e)
          })
      }),
      (o.prototype.handleStart = function (t) {
        var e = D()
        ;(this.fingerMoved = !1),
          (this.contentMoved = !1),
          (this.startTime = e),
          this.directionLockAction.reset(),
          this.scrollBehaviorX.start(),
          this.scrollBehaviorY.start(),
          this.animater.doStop(),
          this.scrollBehaviorX.resetStartPos(),
          this.scrollBehaviorY.resetStartPos(),
          this.hooks.trigger(this.hooks.eventTypes.start, t)
      }),
      (o.prototype.handleMove = function (t, e, r) {
        if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, r)) {
          var i = this.scrollBehaviorX.getAbsDist(t),
            s = this.scrollBehaviorY.getAbsDist(e),
            n = D()
          if (this.checkMomentum(i, s, n)) return !0
          if (this.directionLockAction.checkMovingDirection(i, s, r))
            return this.actionsHandler.setInitiated(), !0
          var a = this.directionLockAction.adjustDelta(t, e),
            l = this.scrollBehaviorX.getCurrentPos(),
            h = this.scrollBehaviorX.move(a.deltaX),
            u = this.scrollBehaviorY.getCurrentPos(),
            c = this.scrollBehaviorY.move(a.deltaY)
          if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
            this.fingerMoved || (this.fingerMoved = !0)
            var p = h !== l || c !== u
            !this.contentMoved && !p && this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
              !this.contentMoved &&
                p &&
                ((this.contentMoved = !0), this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
              this.contentMoved &&
                p &&
                (this.animater.translate({ x: h, y: c }), this.dispatchScroll(n))
          }
        }
      }),
      (o.prototype.dispatchScroll = function (t) {
        t - this.startTime > this.options.momentumLimitTime &&
          ((this.startTime = t),
          this.scrollBehaviorX.updateStartPos(),
          this.scrollBehaviorY.updateStartPos(),
          this.options.probeType === 1 &&
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())),
          this.options.probeType > 1 &&
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())
      }),
      (o.prototype.checkMomentum = function (t, e, r) {
        return (
          r - this.endTime > this.options.momentumLimitTime &&
          e < this.options.momentumLimitDistance &&
          t < this.options.momentumLimitDistance
        )
      }),
      (o.prototype.handleEnd = function (t) {
        if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
          var e = this.getCurrentPos()
          if (
            (this.scrollBehaviorX.updateDirection(),
            this.scrollBehaviorY.updateDirection(),
            this.hooks.trigger(this.hooks.eventTypes.end, t, e))
          )
            return !0
          ;(e = this.ensureIntegerPos(e)), this.animater.translate(e), (this.endTime = D())
          var r = this.endTime - this.startTime
          this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, r)
        }
      }),
      (o.prototype.ensureIntegerPos = function (t) {
        this.ensuringInteger = !0
        var e = t.x,
          r = t.y,
          i = this.scrollBehaviorX,
          s = i.minScrollPos,
          n = i.maxScrollPos,
          a = this.scrollBehaviorY,
          l = a.minScrollPos,
          h = a.maxScrollPos
        return (
          (e = e > 0 ? Math.ceil(e) : Math.floor(e)),
          (r = r > 0 ? Math.ceil(r) : Math.floor(r)),
          (e = ht(e, n, s)),
          (r = ht(r, h, l)),
          { x: e, y: r }
        )
      }),
      (o.prototype.handleClick = function (t) {
        R(t.target, this.options.preventDefaultException) ||
          (t.preventDefault(), t.stopPropagation())
      }),
      (o.prototype.getCurrentPos = function () {
        return { x: this.scrollBehaviorX.getCurrentPos(), y: this.scrollBehaviorY.getCurrentPos() }
      }),
      (o.prototype.refresh = function () {
        this.endTime = 0
      }),
      (o.prototype.destroy = function () {
        this.hooks.destroy()
      }),
      o
    )
  })()
function Be(o) {
  var t = [
    'click',
    'bindToWrapper',
    'disableMouse',
    'disableTouch',
    'preventDefault',
    'stopPropagation',
    'tagException',
    'preventDefaultException',
    'autoEndDistance',
  ].reduce(function (e, r) {
    return (e[r] = o[r]), e
  }, {})
  return t
}
function dt(o, t, e, r) {
  var i = [
    'momentum',
    'momentumLimitTime',
    'momentumLimitDistance',
    'deceleration',
    'swipeBounceTime',
    'swipeTime',
    'outOfBoundaryDampingFactor',
    'specifiedIndexAsContent',
  ].reduce(function (s, n) {
    return (s[n] = o[n]), s
  }, {})
  return (i.scrollable = !!o[t]), (i.bounces = e), (i.rect = r), i
}
function rt(o, t, e) {
  e.forEach(function (r) {
    var i, s
    typeof r == 'string' ? (i = s = r) : ((i = r.source), (s = r.target)),
      o.on(i, function () {
        for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a]
        return t.trigger.apply(t, yt([s], n))
      })
  })
}
function _e(o, t) {
  for (var e = Object.keys(o), r = 0, i = e; r < i.length; r++) {
    var s = i[r]
    if (o[s] !== t[s]) return !1
  }
  return !0
}
var mt = 1,
  De = (function () {
    function o(t, e, r) {
      ;(this.wrapper = t),
        (this.content = e),
        (this.resizeTimeout = 0),
        (this.hooks = new C([
          'beforeStart',
          'beforeMove',
          'beforeScrollStart',
          'scrollStart',
          'scroll',
          'beforeEnd',
          'scrollEnd',
          'resize',
          'touchEnd',
          'end',
          'flick',
          'scrollCancel',
          'momentum',
          'scrollTo',
          'minDistanceScroll',
          'scrollToElement',
          'beforeRefresh',
        ])),
        (this.options = r)
      var i = this.options.bounce,
        s = i.left,
        n = i.right,
        a = i.top,
        l = i.bottom
      ;(this.scrollBehaviorX = new ft(
        t,
        e,
        dt(r, 'scrollX', [s, n], { size: 'width', position: 'left' }),
      )),
        (this.scrollBehaviorY = new ft(
          t,
          e,
          dt(r, 'scrollY', [a, l], { size: 'height', position: 'top' }),
        )),
        (this.translater = new ge(this.content)),
        (this.animater = Se(this.content, this.translater, this.options)),
        (this.actionsHandler = new ye(
          this.options.bindToTarget ? this.content : t,
          Be(this.options),
        )),
        (this.actions = new Ce(
          this.scrollBehaviorX,
          this.scrollBehaviorY,
          this.actionsHandler,
          this.animater,
          this.options,
        ))
      var h = this.resize.bind(this)
      ;(this.resizeRegister = new H(window, [
        { name: 'orientationchange', handler: h },
        { name: 'resize', handler: h },
      ])),
        this.registerTransitionEnd(),
        this.init()
    }
    return (
      (o.prototype.init = function () {
        var t = this
        this.bindTranslater(),
          this.bindAnimater(),
          this.bindActions(),
          this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            t.togglePointerEvents(!0)
          })
      }),
      (o.prototype.registerTransitionEnd = function () {
        this.transitionEndRegister = new H(this.content, [
          { name: _.transitionEnd, handler: this.transitionEnd.bind(this) },
        ])
      }),
      (o.prototype.bindTranslater = function () {
        var t = this,
          e = this.translater.hooks
        e.on(e.eventTypes.beforeTranslate, function (r) {
          t.options.translateZ && r.push(t.options.translateZ)
        }),
          e.on(e.eventTypes.translate, function (r) {
            var i = t.getCurrentPos()
            if ((t.updatePositions(r), t.actions.ensuringInteger === !0)) {
              t.actions.ensuringInteger = !1
              return
            }
            ;(r.x !== i.x || r.y !== i.y) && t.togglePointerEvents(!1)
          })
      }),
      (o.prototype.bindAnimater = function () {
        var t = this
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (e) {
          t.resetPosition(t.options.bounceTime) ||
            (t.animater.setPending(!1), t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e))
        }),
          rt(this.animater.hooks, this.hooks, [
            { source: this.animater.hooks.eventTypes.move, target: this.hooks.eventTypes.scroll },
            {
              source: this.animater.hooks.eventTypes.forceStop,
              target: this.hooks.eventTypes.scrollEnd,
            },
          ])
      }),
      (o.prototype.bindActions = function () {
        var t = this,
          e = this.actions
        rt(e.hooks, this.hooks, [
          { source: e.hooks.eventTypes.start, target: this.hooks.eventTypes.beforeStart },
          { source: e.hooks.eventTypes.start, target: this.hooks.eventTypes.beforeScrollStart },
          { source: e.hooks.eventTypes.beforeMove, target: this.hooks.eventTypes.beforeMove },
          { source: e.hooks.eventTypes.scrollStart, target: this.hooks.eventTypes.scrollStart },
          { source: e.hooks.eventTypes.scroll, target: this.hooks.eventTypes.scroll },
          { source: e.hooks.eventTypes.beforeEnd, target: this.hooks.eventTypes.beforeEnd },
        ]),
          e.hooks.on(e.hooks.eventTypes.end, function (r, i) {
            if (
              (t.hooks.trigger(t.hooks.eventTypes.touchEnd, i),
              t.hooks.trigger(t.hooks.eventTypes.end, i) ||
                (!e.fingerMoved &&
                  (t.hooks.trigger(t.hooks.eventTypes.scrollCancel), t.checkClick(r))))
            )
              return !0
            if (t.resetPosition(t.options.bounceTime, B.bounce))
              return t.animater.setForceStopped(!1), !0
          }),
          e.hooks.on(e.hooks.eventTypes.scrollEnd, function (r, i) {
            var s = Math.abs(r.x - t.scrollBehaviorX.startPos),
              n = Math.abs(r.y - t.scrollBehaviorY.startPos)
            if (t.checkFlick(i, s, n)) {
              t.animater.setForceStopped(!1), t.hooks.trigger(t.hooks.eventTypes.flick)
              return
            }
            if (t.momentum(r, i)) {
              t.animater.setForceStopped(!1)
              return
            }
            e.contentMoved && t.hooks.trigger(t.hooks.eventTypes.scrollEnd, r),
              t.animater.forceStopped && t.animater.setForceStopped(!1)
          })
      }),
      (o.prototype.checkFlick = function (t, e, r) {
        var i = 1
        if (
          this.hooks.events.flick.length > 1 &&
          t < this.options.flickLimitTime &&
          e < this.options.flickLimitDistance &&
          r < this.options.flickLimitDistance &&
          (r > i || e > i)
        )
          return !0
      }),
      (o.prototype.momentum = function (t, e) {
        var r = { time: 0, easing: B.swiper, newX: t.x, newY: t.y },
          i = this.scrollBehaviorX.end(e),
          s = this.scrollBehaviorY.end(e)
        if (
          ((r.newX = ot(i.destination) ? r.newX : i.destination),
          (r.newY = ot(s.destination) ? r.newY : s.destination),
          (r.time = Math.max(i.duration, s.duration)),
          this.hooks.trigger(this.hooks.eventTypes.momentum, r, this),
          r.newX !== t.x || r.newY !== t.y)
        )
          return (
            (r.newX > this.scrollBehaviorX.minScrollPos ||
              r.newX < this.scrollBehaviorX.maxScrollPos ||
              r.newY > this.scrollBehaviorY.minScrollPos ||
              r.newY < this.scrollBehaviorY.maxScrollPos) &&
              (r.easing = B.swipeBounce),
            this.scrollTo(r.newX, r.newY, r.time, r.easing),
            !0
          )
      }),
      (o.prototype.checkClick = function (t) {
        var e = { preventClick: this.animater.forceStopped }
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
          return this.animater.setForceStopped(!1), !0
        if (!e.preventClick) {
          var r = this.options.dblclick,
            i = !1
          if (r && this.lastClickTime) {
            var s = r.delay,
              n = s === void 0 ? 300 : s
            D() - this.lastClickTime < n && ((i = !0), ce(t))
          }
          return (
            this.options.tap && le(t, this.options.tap),
            this.options.click && !R(t.target, this.options.preventDefaultException) && bt(t),
            (this.lastClickTime = i ? null : D()),
            !0
          )
        }
        return !1
      }),
      (o.prototype.resize = function () {
        var t = this
        !this.actions.enabled ||
          (te && (this.wrapper.scrollTop = 0),
          clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = window.setTimeout(function () {
            t.hooks.trigger(t.hooks.eventTypes.resize)
          }, this.options.resizePolling)))
      }),
      (o.prototype.transitionEnd = function (t) {
        if (!(t.target !== this.content || !this.animater.pending)) {
          var e = this.animater
          e.transitionTime(),
            this.resetPosition(this.options.bounceTime, B.bounce) ||
              (this.animater.setPending(!1),
              this.options.probeType !== 3 &&
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos()))
        }
      }),
      (o.prototype.togglePointerEvents = function (t) {
        t === void 0 && (t = !0)
        for (
          var e = this.content.children.length ? this.content.children : [this.content],
            r = t ? 'auto' : 'none',
            i = 0;
          i < e.length;
          i++
        ) {
          var s = e[i]
          s.isBScrollContainer || (s.style.pointerEvents = r)
        }
      }),
      (o.prototype.refresh = function (t) {
        var e = this.setContent(t)
        this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
          this.scrollBehaviorX.refresh(t),
          this.scrollBehaviorY.refresh(t),
          e &&
            (this.translater.setContent(t),
            this.animater.setContent(t),
            this.transitionEndRegister.destroy(),
            this.registerTransitionEnd(),
            this.options.bindToTarget && this.actionsHandler.setContent(t)),
          this.actions.refresh(),
          (this.wrapperOffset = lt(this.wrapper))
      }),
      (o.prototype.setContent = function (t) {
        var e = t !== this.content
        return e && (this.content = t), e
      }),
      (o.prototype.scrollBy = function (t, e, r, i) {
        r === void 0 && (r = 0)
        var s = this.getCurrentPos(),
          n = s.x,
          a = s.y
        ;(i = i || B.bounce), (t += n), (e += a), this.scrollTo(t, e, r, i)
      }),
      (o.prototype.scrollTo = function (t, e, r, i, s) {
        r === void 0 && (r = 0),
          i === void 0 && (i = B.bounce),
          s === void 0 && (s = { start: {}, end: {} })
        var n = this.options.useTransition ? i.style : i.fn,
          a = this.getCurrentPos(),
          l = L({ x: a.x, y: a.y }, s.start),
          h = L({ x: t, y: e }, s.end)
        if ((this.hooks.trigger(this.hooks.eventTypes.scrollTo, h), !_e(l, h))) {
          var u = Math.abs(h.x - l.x),
            c = Math.abs(h.y - l.y)
          u < mt &&
            c < mt &&
            ((r = 0), this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
            this.animater.move(l, h, r, n)
        }
      }),
      (o.prototype.scrollToElement = function (t, e, r, i, s) {
        var n = kt(t),
          a = lt(n),
          l = function (u, c, p) {
            return typeof u == 'number' ? u : u ? Math.round(c / 2 - p / 2) : 0
          }
        ;(r = l(r, n.offsetWidth, this.wrapper.offsetWidth)),
          (i = l(i, n.offsetHeight, this.wrapper.offsetHeight))
        var h = function (u, c, p, v) {
          return (u -= c), (u = v.adjustPosition(u - p)), u
        }
        ;(a.left = h(a.left, this.wrapperOffset.left, r, this.scrollBehaviorX)),
          (a.top = h(a.top, this.wrapperOffset.top, i, this.scrollBehaviorY)),
          !this.hooks.trigger(this.hooks.eventTypes.scrollToElement, n, a) &&
            this.scrollTo(a.left, a.top, e, s)
      }),
      (o.prototype.resetPosition = function (t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = B.bounce)
        var r = this.scrollBehaviorX.checkInBoundary(),
          i = r.position,
          s = r.inBoundary,
          n = this.scrollBehaviorY.checkInBoundary(),
          a = n.position,
          l = n.inBoundary
        return s && l ? !1 : (ee && this.reflow(), this.scrollTo(i, a, t, e), !0)
      }),
      (o.prototype.reflow = function () {
        this._reflow = this.content.offsetHeight
      }),
      (o.prototype.updatePositions = function (t) {
        this.scrollBehaviorX.updatePosition(t.x), this.scrollBehaviorY.updatePosition(t.y)
      }),
      (o.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos()
      }),
      (o.prototype.enable = function () {
        this.actions.enabled = !0
      }),
      (o.prototype.disable = function () {
        x(this.animater.timer), (this.actions.enabled = !1)
      }),
      (o.prototype.destroy = function () {
        var t = this,
          e = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY',
          ]
        e.forEach(function (r) {
          return t[r].destroy()
        })
      }),
      o
    )
  })(),
  $ = (function (o) {
    K(t, o)
    function t(e, r) {
      var i =
          o.call(this, [
            'refresh',
            'contentChanged',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy',
          ]) || this,
        s = kt(e)
      return s
        ? ((i.plugins = {}),
          (i.options = new me().merge(r).process()),
          i.setContent(s).valid &&
            ((i.hooks = new C([
              'refresh',
              'enable',
              'disable',
              'destroy',
              'beforeInitialScrollTo',
              'contentChanged',
            ])),
            i.init(s)),
          i)
        : (I('Can not resolve the wrapper DOM.'), i)
    }
    return (
      (t.use = function (e) {
        var r = e.pluginName,
          i = t.plugins.some(function (s) {
            return e === s.ctor
          })
        return i
          ? t
          : ot(r)
          ? (I("Plugin Class must specify plugin's name in static property by 'pluginName' field."),
            t)
          : ((t.pluginsMap[r] = !0),
            t.plugins.push({ name: r, applyOrder: e.applyOrder, ctor: e }),
            t)
      }),
      (t.prototype.setContent = function (e) {
        var r = !1,
          i = !0,
          s = e.children[this.options.specifiedIndexAsContent]
        return (
          s
            ? ((r = this.content !== s), r && (this.content = s))
            : (I('The wrapper need at least one child element to be content element to scroll.'),
              (i = !1)),
          { valid: i, contentChanged: r }
        )
      }),
      (t.prototype.init = function (e) {
        var r = this
        ;(this.wrapper = e),
          (e.isBScrollContainer = !0),
          (this.scroller = new De(e, this.content, this.options)),
          this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
            r.refresh()
          }),
          this.eventBubbling(),
          this.handleAutoBlur(),
          this.enable(),
          this.proxy(Jt),
          this.applyPlugins(),
          this.refreshWithoutReset(this.content)
        var i = this.options,
          s = i.startX,
          n = i.startY,
          a = { x: s, y: n }
        this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, a) ||
          this.scroller.scrollTo(a.x, a.y)
      }),
      (t.prototype.applyPlugins = function () {
        var e = this,
          r = this.options
        t.plugins
          .sort(function (i, s) {
            var n,
              a = ((n = {}), (n.pre = -1), (n.post = 1), n),
              l = i.applyOrder ? a[i.applyOrder] : 0,
              h = s.applyOrder ? a[s.applyOrder] : 0
            return l - h
          })
          .forEach(function (i) {
            var s = i.ctor
            r[i.name] && typeof s == 'function' && (e.plugins[i.name] = new s(e))
          })
      }),
      (t.prototype.handleAutoBlur = function () {
        this.options.autoBlur &&
          this.on(this.eventTypes.beforeScrollStart, function () {
            var e = document.activeElement
            e && (e.tagName === 'INPUT' || e.tagName === 'TEXTAREA') && e.blur()
          })
      }),
      (t.prototype.eventBubbling = function () {
        rt(this.scroller.hooks, this, [
          this.eventTypes.beforeScrollStart,
          this.eventTypes.scrollStart,
          this.eventTypes.scroll,
          this.eventTypes.scrollEnd,
          this.eventTypes.scrollCancel,
          this.eventTypes.touchEnd,
          this.eventTypes.flick,
        ])
      }),
      (t.prototype.refreshWithoutReset = function (e) {
        this.scroller.refresh(e),
          this.hooks.trigger(this.hooks.eventTypes.refresh, e),
          this.trigger(this.eventTypes.refresh, e)
      }),
      (t.prototype.proxy = function (e) {
        var r = this
        e.forEach(function (i) {
          var s = i.key,
            n = i.sourceKey
          ve(r, n, s)
        })
      }),
      (t.prototype.refresh = function () {
        var e = this.setContent(this.wrapper),
          r = e.contentChanged,
          i = e.valid
        if (i) {
          var s = this.content
          this.refreshWithoutReset(s),
            r &&
              (this.hooks.trigger(this.hooks.eventTypes.contentChanged, s),
              this.trigger(this.eventTypes.contentChanged, s)),
            this.scroller.resetPosition()
        }
      }),
      (t.prototype.enable = function () {
        this.scroller.enable(),
          this.hooks.trigger(this.hooks.eventTypes.enable),
          this.trigger(this.eventTypes.enable)
      }),
      (t.prototype.disable = function () {
        this.scroller.disable(),
          this.hooks.trigger(this.hooks.eventTypes.disable),
          this.trigger(this.eventTypes.disable)
      }),
      (t.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy),
          this.trigger(this.eventTypes.destroy),
          this.scroller.destroy()
      }),
      (t.prototype.eventRegister = function (e) {
        this.registerType(e)
      }),
      (t.plugins = []),
      (t.pluginsMap = {}),
      t
    )
  })(C)
function V(o, t) {
  var e = new $(o, t)
  return e
}
V.use = $.use
V.plugins = $.plugins
V.pluginsMap = $.pluginsMap
var xe = V
const Me = { class: 'topbar-nav' },
  Xe = { class: 'scroll-content' },
  Ye = ['onClick'],
  Ae = ['onClick'],
  Le = Et({
    __name: 'TopBarNav',
    setup(o) {
      const t = Xt(),
        e = Ct(),
        r = Yt(),
        i = st(null)
      let s = st()
      const n = /\((.+?)\)/g
      Bt(() => {
        s.value = new xe(i.value, { scrollX: !0, probeType: 3, bounce: !1, useTransition: !1 })
        const c = u.value.find((v) => v.path === r.path),
          p = u.value.findIndex((v) => v.path === r.path)
        l(c, p)
      })
      function a(c, p) {
        if (u.value.length === 1) return
        const v = u.value.filter((f, k) => f.path !== c.path && k === p - 1)
        setTimeout(() => {
          e.setNavbar(c, 'delete'), c.path === r.path && t.push({ path: v[0].path })
        }, 0)
      }
      function l(c, p) {
        const v = document.getElementsByClassName('scroll-item'),
          f = i.value.firstChild,
          d = window.getComputedStyle(f).getPropertyValue('transform').match(n)
        if (d) {
          const g = d[0].split(','),
            m = Number(g[g.length - 4])
          if (p === 0 && m !== 0) s.value.scrollTo(0, 0, 300, void 0, {})
          else {
            const T = Array.from(v)
                .slice(0, p)
                .reduce((U, j) => U + j.offsetWidth, 0),
              M = Array.from(v)
                .slice(0, p + 1)
                .reduce((U, j) => U + j.offsetWidth, 0)
            Math.abs(m) > T
              ? s.value.scrollTo(0 - T + 30, 0, 100, void 0, {})
              : Math.abs(m) + i.value.clientWidth < M &&
                s.value.scrollTo(i.value.clientWidth - M - 30, 0, 100, void 0, {})
          }
        } else {
          const m = Array.from(v)
            .slice(0, p + 1)
            .reduce((y, T) => y + T.offsetWidth, 0)
          i.value.clientWidth < m &&
            s.value.scrollTo(i.value.clientWidth - m - 30, 0, 100, void 0, {})
        }
        t.push({ path: c.path })
      }
      function h(c) {
        const p = i.value.firstChild,
          f = window.getComputedStyle(p).getPropertyValue('transform').match(n),
          k = document.getElementsByClassName('scroll-item'),
          d = Array.from(k).reduce((m, y) => m + y.offsetWidth, 0)
        let g = 0
        if (f) {
          const m = f[0].split(','),
            y = Number(m[m.length - 4])
          if (c === 'pre') {
            if (y === 0) return
            console.log('pre', y)
            const T = y + i.value.clientWidth - 30
            g = T >= 0 ? 0 : T
          } else {
            if (Math.abs(y + (d - i.value.clientWidth)) < 10) return
            if (Math.abs(y) > d - i.value.clientWidth) return
            g = y - i.value.clientWidth + 100
          }
        } else {
          if (c === 'pre') return
          g = 0 - i.value.clientWidth + 30
        }
        s.value.scrollTo(g, 0, 300, void 0, {})
      }
      const u = _t(() => e.getNavbar)
      return (
        Dt(
          () => r.path,
          () => {
            s.value.refresh()
            const c = i.value.firstChild,
              v = window.getComputedStyle(c).getPropertyValue('transform').match(n)
            let f = 0
            if (v) {
              const S = v[0].split(',')
              f = Number(S[S.length - 4])
            }
            const k = document.getElementsByClassName('scroll-item'),
              d = u.value.findIndex((S) => S.path === r.path),
              g = Array.from(k).slice(0, d),
              m = Array.from(k).slice(0, d + 1),
              y = Array.from(g).reduce((S, M) => S + M.offsetWidth, 0),
              T = Array.from(m).reduce((S, M) => S + M.offsetWidth, 0)
            if (!(f !== 0 && Math.abs(f) < y && T < i.value.clientWidth)) {
              {
                if (T < i.value.clientWidth && f === 0) return
                if (T > i.value.clientWidth) {
                  s.value.scrollTo(0 - T + i.value.clientWidth - 30, 0, 300, void 0, {})
                  return
                }
              }
              s.value.scrollTo(0 - y + 30, 0, 300, void 0, {})
            }
          },
        ),
        (c, p) => {
          const v = Gt,
            f = Vt,
            k = zt
          return (
            X(),
            Y('div', Me, [
              P('div', { class: 'icon left', onClick: p[0] || (p[0] = (d) => h('pre')) }, [q(v)]),
              P(
                'div',
                {
                  class: nt(['scroll-wrapper', Z(e).getIsCollapse ? 'width-max' : 'width-min']),
                  ref_key: 'scrollRef',
                  ref: i,
                },
                [
                  P('div', Xe, [
                    (X(!0),
                    Y(
                      xt,
                      null,
                      Mt(
                        Z(u),
                        (d, g) => (
                          X(),
                          Y(
                            'div',
                            { class: 'scroll-item', key: d.path, onClick: (m) => l(d, g) },
                            [
                              P(
                                'div',
                                {
                                  class: nt({
                                    'item-box': !0,
                                    'is-active': d.path === Z(t).currentRoute.value.path,
                                  }),
                                },
                                [
                                  At(Ot(d.meta.title) + ' ', 1),
                                  P(
                                    'div',
                                    { class: 'icon close', onClick: Lt((m) => a(d, g), ['stop']) },
                                    [q(f)],
                                    8,
                                    Ae,
                                  ),
                                ],
                                2,
                              ),
                            ],
                            8,
                            Ye,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ],
                2,
              ),
              P('div', { class: 'icon right', onClick: p[1] || (p[1] = (d) => h('next')) }, [q(k)]),
            ])
          )
        }
      )
    },
  })
export { Le as _ }
