var Jo = Object.defineProperty,
  ea = Object.defineProperties
var ta = Object.getOwnPropertyDescriptors
var sl = Object.getOwnPropertySymbols
var na = Object.prototype.hasOwnProperty,
  la = Object.prototype.propertyIsEnumerable
var rl = (e, t, n) =>
    t in e ? Jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  se = (e, t) => {
    for (var n in t || (t = {})) na.call(t, n) && rl(e, n, t[n])
    if (sl) for (var n of sl(t)) la.call(t, n) && rl(e, n, t[n])
    return e
  },
  Ce = (e, t) => ea(e, ta(t))
var ot = (e, t, n) =>
  new Promise((l, o) => {
    var s = (a) => {
        try {
          u(n.next(a))
        } catch (i) {
          o(i)
        }
      },
      r = (a) => {
        try {
          u(n.throw(a))
        } catch (i) {
          o(i)
        }
      },
      u = (a) => (a.done ? l(a.value) : Promise.resolve(a.value).then(s, r))
    u((n = n.apply(e, t)).next())
  })
import {
  i as oa,
  f as An,
  g as pn,
  h as At,
  j as aa,
  k as jt,
  l as vn,
  m as sa,
  n as rn,
  p as ra,
  L as qn,
  M as un,
  q as Yl,
  v as Ft,
  S as il,
  w as ia,
  x as ua,
  y as Xl,
  A as $,
  B as ca,
  C as ge,
  b as P,
  D as Qe,
  E as Gn,
  F as vt,
  G as Xe,
  d as ne,
  H as da,
  I as hn,
  J as Mt,
  K as fa,
  N as _t,
  O as re,
  P as ve,
  Q as Ze,
  R as Un,
  T as Ql,
  U as ze,
  V as Tt,
  o as A,
  c as F,
  W as U,
  X as Te,
  Y as I,
  a as f,
  Z as ce,
  _ as Z,
  $ as Q,
  a0 as G,
  a1 as pt,
  a2 as Ht,
  a3 as X,
  a4 as Ue,
  a5 as pa,
  t as ue,
  a6 as ke,
  a7 as qt,
  a8 as gt,
  a9 as Se,
  aa as Zl,
  ab as Jl,
  ac as ul,
  ad as va,
  ae as cn,
  af as Gt,
  ag as at,
  ah as mt,
  ai as Xt,
  aj as Ke,
  ak as mn,
  al as ha,
  r as bt,
  am as gn,
  an as _,
  ao as kt,
  ap as $e,
  aq as He,
  ar as Yn,
  as as Wt,
  at as wn,
  au as Xn,
  av as xt,
  aw as De,
  ax as ma,
  ay as ga,
  az as Ut,
  aA as eo,
  aB as to,
  aC as ba,
  aD as ya,
  aE as cl,
  aF as Ca,
  aG as no,
  u as Sa,
} from './index.b73a18cc.js'
import {
  m as bn,
  U as Ie,
  d as Nt,
  t as dn,
  u as st,
  s as wa,
  C as lo,
  E as Qn,
} from './UserInfo.vue_vue_type_style_index_0_lang.0ddf00fa.js'
import {
  i as Ea,
  u as Qt,
  E as Ye,
  a as yn,
  b as $a,
  c as ka,
  d as Ma,
  y as Ta,
  e as dl,
} from './el-popper.8958ebc4.js'
import { _ as xa } from './Header.vue_vue_type_style_index_0_lang.0ed9e4c3.js'
import { _ as Pa } from './TopBarNav.vue_vue_type_style_index_0_lang.027887c3.js'
import { u as Aa } from './useI18n.b50b777a.js'
import {
  i as Yt,
  u as Y,
  v as Oa,
  h as La,
  E as Re,
  c as oo,
  _ as he,
  a as Pt,
  b as fl,
  d as pl,
  e as Ot,
  r as Lt,
  f as Vt,
  g as ao,
  j as Cn,
  k as vl,
  m as Na,
  l as Ia,
  n as so,
  o as Ra,
  p as hl,
  q as za,
  s as ml,
  t as Fa,
} from './index.b96c5203.js'
import { u as Ba, a as Zn, T as Wa } from './el-button.42d22c5b.js'
import { C as ro } from './Language.vue_vue_type_script_setup_true_lang.d81041c3.js'
import { i as gl, V as _a } from './icon.66172442.js'
import { _ as Ha } from './_plugin-vue_export-helper.cdc0426e.js'
import './Search.vue_vue_type_script_setup_true_lang.15402080.js'
import './Fullscreen.vue_vue_type_script_setup_true_lang.841ea935.js'
var Va = /\s/
function Da(e) {
  for (var t = e.length; t-- && Va.test(e.charAt(t)); );
  return t
}
var Ka = /^\s+/
function ja(e) {
  return e && e.slice(0, Da(e) + 1).replace(Ka, '')
}
var bl = 0 / 0,
  qa = /^[-+]0x[0-9a-f]+$/i,
  Ga = /^0b[01]+$/i,
  Ua = /^0o[0-7]+$/i,
  Ya = parseInt
function yl(e) {
  if (typeof e == 'number') return e
  if (oa(e)) return bl
  if (An(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = An(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = ja(e)
  var n = Ga.test(e)
  return n || Ua.test(e) ? Ya(e.slice(2), n ? 2 : 8) : qa.test(e) ? bl : +e
}
var Xa = pn(At, 'WeakMap')
const On = Xa
var Qa = 9007199254740991
function io(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Qa
}
function Za(e) {
  return e != null && io(e.length) && !aa(e)
}
var Ja = Object.prototype
function es(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || Ja
  return e === n
}
function ts(e, t) {
  for (var n = -1, l = Array(e); ++n < e; ) l[n] = t(n)
  return l
}
var ns = '[object Arguments]'
function Cl(e) {
  return jt(e) && vn(e) == ns
}
var uo = Object.prototype,
  ls = uo.hasOwnProperty,
  os = uo.propertyIsEnumerable,
  as = Cl(
    (function () {
      return arguments
    })(),
  )
    ? Cl
    : function (e) {
        return jt(e) && ls.call(e, 'callee') && !os.call(e, 'callee')
      }
const ss = as
function rs() {
  return !1
}
var co = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Sl = co && typeof module == 'object' && module && !module.nodeType && module,
  is = Sl && Sl.exports === co,
  wl = is ? At.Buffer : void 0,
  us = wl ? wl.isBuffer : void 0,
  cs = us || rs
const Ln = cs
var ds = '[object Arguments]',
  fs = '[object Array]',
  ps = '[object Boolean]',
  vs = '[object Date]',
  hs = '[object Error]',
  ms = '[object Function]',
  gs = '[object Map]',
  bs = '[object Number]',
  ys = '[object Object]',
  Cs = '[object RegExp]',
  Ss = '[object Set]',
  ws = '[object String]',
  Es = '[object WeakMap]',
  $s = '[object ArrayBuffer]',
  ks = '[object DataView]',
  Ms = '[object Float32Array]',
  Ts = '[object Float64Array]',
  xs = '[object Int8Array]',
  Ps = '[object Int16Array]',
  As = '[object Int32Array]',
  Os = '[object Uint8Array]',
  Ls = '[object Uint8ClampedArray]',
  Ns = '[object Uint16Array]',
  Is = '[object Uint32Array]',
  me = {}
me[Ms] = me[Ts] = me[xs] = me[Ps] = me[As] = me[Os] = me[Ls] = me[Ns] = me[Is] = !0
me[ds] =
  me[fs] =
  me[$s] =
  me[ps] =
  me[ks] =
  me[vs] =
  me[hs] =
  me[ms] =
  me[gs] =
  me[bs] =
  me[ys] =
  me[Cs] =
  me[Ss] =
  me[ws] =
  me[Es] =
    !1
function Rs(e) {
  return jt(e) && io(e.length) && !!me[vn(e)]
}
function zs(e) {
  return function (t) {
    return e(t)
  }
}
var fo = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Dt = fo && typeof module == 'object' && module && !module.nodeType && module,
  Fs = Dt && Dt.exports === fo,
  En = Fs && sa.process,
  Bs = (function () {
    try {
      var e = Dt && Dt.require && Dt.require('util').types
      return e || (En && En.binding && En.binding('util'))
    } catch (t) {}
  })()
const El = Bs
var $l = El && El.isTypedArray,
  Ws = $l ? zs($l) : Rs
const po = Ws
var _s = Object.prototype,
  Hs = _s.hasOwnProperty
function Vs(e, t) {
  var n = rn(e),
    l = !n && ss(e),
    o = !n && !l && Ln(e),
    s = !n && !l && !o && po(e),
    r = n || l || o || s,
    u = r ? ts(e.length, String) : [],
    a = u.length
  for (var i in e)
    (t || Hs.call(e, i)) &&
      !(
        r &&
        (i == 'length' ||
          (o && (i == 'offset' || i == 'parent')) ||
          (s && (i == 'buffer' || i == 'byteLength' || i == 'byteOffset')) ||
          ra(i, a))
      ) &&
      u.push(i)
  return u
}
function Ds(e, t) {
  return function (n) {
    return e(t(n))
  }
}
var Ks = Ds(Object.keys, Object)
const js = Ks
var qs = Object.prototype,
  Gs = qs.hasOwnProperty
function Us(e) {
  if (!es(e)) return js(e)
  var t = []
  for (var n in Object(e)) Gs.call(e, n) && n != 'constructor' && t.push(n)
  return t
}
function Ys(e) {
  return Za(e) ? Vs(e) : Us(e)
}
function Xs(e, t) {
  for (var n = -1, l = t.length, o = e.length; ++n < l; ) e[o + n] = t[n]
  return e
}
function Qs() {
  ;(this.__data__ = new qn()), (this.size = 0)
}
function Zs(e) {
  var t = this.__data__,
    n = t.delete(e)
  return (this.size = t.size), n
}
function Js(e) {
  return this.__data__.get(e)
}
function er(e) {
  return this.__data__.has(e)
}
var tr = 200
function nr(e, t) {
  var n = this.__data__
  if (n instanceof qn) {
    var l = n.__data__
    if (!un || l.length < tr - 1) return l.push([e, t]), (this.size = ++n.size), this
    n = this.__data__ = new Yl(l)
  }
  return n.set(e, t), (this.size = n.size), this
}
function ht(e) {
  var t = (this.__data__ = new qn(e))
  this.size = t.size
}
ht.prototype.clear = Qs
ht.prototype.delete = Zs
ht.prototype.get = Js
ht.prototype.has = er
ht.prototype.set = nr
function lr(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, o = 0, s = []; ++n < l; ) {
    var r = e[n]
    t(r, n, e) && (s[o++] = r)
  }
  return s
}
function or() {
  return []
}
var ar = Object.prototype,
  sr = ar.propertyIsEnumerable,
  kl = Object.getOwnPropertySymbols,
  rr = kl
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            lr(kl(e), function (t) {
              return sr.call(e, t)
            }))
      }
    : or
const ir = rr
function ur(e, t, n) {
  var l = t(e)
  return rn(e) ? l : Xs(l, n(e))
}
function Ml(e) {
  return ur(e, Ys, ir)
}
var cr = pn(At, 'DataView')
const Nn = cr
var dr = pn(At, 'Promise')
const In = dr
var fr = pn(At, 'Set')
const Rn = fr
var Tl = '[object Map]',
  pr = '[object Object]',
  xl = '[object Promise]',
  Pl = '[object Set]',
  Al = '[object WeakMap]',
  Ol = '[object DataView]',
  vr = Ft(Nn),
  hr = Ft(un),
  mr = Ft(In),
  gr = Ft(Rn),
  br = Ft(On),
  wt = vn
;((Nn && wt(new Nn(new ArrayBuffer(1))) != Ol) ||
  (un && wt(new un()) != Tl) ||
  (In && wt(In.resolve()) != xl) ||
  (Rn && wt(new Rn()) != Pl) ||
  (On && wt(new On()) != Al)) &&
  (wt = function (e) {
    var t = vn(e),
      n = t == pr ? e.constructor : void 0,
      l = n ? Ft(n) : ''
    if (l)
      switch (l) {
        case vr:
          return Ol
        case hr:
          return Tl
        case mr:
          return xl
        case gr:
          return Pl
        case br:
          return Al
      }
    return t
  })
const Ll = wt
var yr = At.Uint8Array
const Nl = yr
var Cr = '__lodash_hash_undefined__'
function Sr(e) {
  return this.__data__.set(e, Cr), this
}
function wr(e) {
  return this.__data__.has(e)
}
function fn(e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.__data__ = new Yl(); ++t < n; ) this.add(e[t])
}
fn.prototype.add = fn.prototype.push = Sr
fn.prototype.has = wr
function Er(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length; ++n < l; ) if (t(e[n], n, e)) return !0
  return !1
}
function $r(e, t) {
  return e.has(t)
}
var kr = 1,
  Mr = 2
function vo(e, t, n, l, o, s) {
  var r = n & kr,
    u = e.length,
    a = t.length
  if (u != a && !(r && a > u)) return !1
  var i = s.get(e),
    c = s.get(t)
  if (i && c) return i == t && c == e
  var p = -1,
    v = !0,
    b = n & Mr ? new fn() : void 0
  for (s.set(e, t), s.set(t, e); ++p < u; ) {
    var d = e[p],
      m = t[p]
    if (l) var w = r ? l(m, d, p, t, e, s) : l(d, m, p, e, t, s)
    if (w !== void 0) {
      if (w) continue
      v = !1
      break
    }
    if (b) {
      if (
        !Er(t, function (E, g) {
          if (!$r(b, g) && (d === E || o(d, E, n, l, s))) return b.push(g)
        })
      ) {
        v = !1
        break
      }
    } else if (!(d === m || o(d, m, n, l, s))) {
      v = !1
      break
    }
  }
  return s.delete(e), s.delete(t), v
}
function Tr(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l, o) {
      n[++t] = [o, l]
    }),
    n
  )
}
function xr(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l) {
      n[++t] = l
    }),
    n
  )
}
var Pr = 1,
  Ar = 2,
  Or = '[object Boolean]',
  Lr = '[object Date]',
  Nr = '[object Error]',
  Ir = '[object Map]',
  Rr = '[object Number]',
  zr = '[object RegExp]',
  Fr = '[object Set]',
  Br = '[object String]',
  Wr = '[object Symbol]',
  _r = '[object ArrayBuffer]',
  Hr = '[object DataView]',
  Il = il ? il.prototype : void 0,
  $n = Il ? Il.valueOf : void 0
function Vr(e, t, n, l, o, s, r) {
  switch (n) {
    case Hr:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
      ;(e = e.buffer), (t = t.buffer)
    case _r:
      return !(e.byteLength != t.byteLength || !s(new Nl(e), new Nl(t)))
    case Or:
    case Lr:
    case Rr:
      return ia(+e, +t)
    case Nr:
      return e.name == t.name && e.message == t.message
    case zr:
    case Br:
      return e == t + ''
    case Ir:
      var u = Tr
    case Fr:
      var a = l & Pr
      if ((u || (u = xr), e.size != t.size && !a)) return !1
      var i = r.get(e)
      if (i) return i == t
      ;(l |= Ar), r.set(e, t)
      var c = vo(u(e), u(t), l, o, s, r)
      return r.delete(e), c
    case Wr:
      if ($n) return $n.call(e) == $n.call(t)
  }
  return !1
}
var Dr = 1,
  Kr = Object.prototype,
  jr = Kr.hasOwnProperty
function qr(e, t, n, l, o, s) {
  var r = n & Dr,
    u = Ml(e),
    a = u.length,
    i = Ml(t),
    c = i.length
  if (a != c && !r) return !1
  for (var p = a; p--; ) {
    var v = u[p]
    if (!(r ? v in t : jr.call(t, v))) return !1
  }
  var b = s.get(e),
    d = s.get(t)
  if (b && d) return b == t && d == e
  var m = !0
  s.set(e, t), s.set(t, e)
  for (var w = r; ++p < a; ) {
    v = u[p]
    var E = e[v],
      g = t[v]
    if (l) var h = r ? l(g, E, v, t, e, s) : l(E, g, v, e, t, s)
    if (!(h === void 0 ? E === g || o(E, g, n, l, s) : h)) {
      m = !1
      break
    }
    w || (w = v == 'constructor')
  }
  if (m && !w) {
    var C = e.constructor,
      O = t.constructor
    C != O &&
      'constructor' in e &&
      'constructor' in t &&
      !(typeof C == 'function' && C instanceof C && typeof O == 'function' && O instanceof O) &&
      (m = !1)
  }
  return s.delete(e), s.delete(t), m
}
var Gr = 1,
  Rl = '[object Arguments]',
  zl = '[object Array]',
  Zt = '[object Object]',
  Ur = Object.prototype,
  Fl = Ur.hasOwnProperty
function Yr(e, t, n, l, o, s) {
  var r = rn(e),
    u = rn(t),
    a = r ? zl : Ll(e),
    i = u ? zl : Ll(t)
  ;(a = a == Rl ? Zt : a), (i = i == Rl ? Zt : i)
  var c = a == Zt,
    p = i == Zt,
    v = a == i
  if (v && Ln(e)) {
    if (!Ln(t)) return !1
    ;(r = !0), (c = !1)
  }
  if (v && !c)
    return s || (s = new ht()), r || po(e) ? vo(e, t, n, l, o, s) : Vr(e, t, a, n, l, o, s)
  if (!(n & Gr)) {
    var b = c && Fl.call(e, '__wrapped__'),
      d = p && Fl.call(t, '__wrapped__')
    if (b || d) {
      var m = b ? e.value() : e,
        w = d ? t.value() : t
      return s || (s = new ht()), o(m, w, n, l, s)
    }
  }
  return v ? (s || (s = new ht()), qr(e, t, n, l, o, s)) : !1
}
function ho(e, t, n, l, o) {
  return e === t
    ? !0
    : e == null || t == null || (!jt(e) && !jt(t))
    ? e !== e && t !== t
    : Yr(e, t, n, l, ho, o)
}
var Xr = function () {
  return At.Date.now()
}
const kn = Xr
var Qr = 'Expected a function',
  Zr = Math.max,
  Jr = Math.min
function It(e, t, n) {
  var l,
    o,
    s,
    r,
    u,
    a,
    i = 0,
    c = !1,
    p = !1,
    v = !0
  if (typeof e != 'function') throw new TypeError(Qr)
  ;(t = yl(t) || 0),
    An(n) &&
      ((c = !!n.leading),
      (p = 'maxWait' in n),
      (s = p ? Zr(yl(n.maxWait) || 0, t) : s),
      (v = 'trailing' in n ? !!n.trailing : v))
  function b(T) {
    var S = l,
      x = o
    return (l = o = void 0), (i = T), (r = e.apply(x, S)), r
  }
  function d(T) {
    return (i = T), (u = setTimeout(E, t)), c ? b(T) : r
  }
  function m(T) {
    var S = T - a,
      x = T - i,
      L = t - S
    return p ? Jr(L, s - x) : L
  }
  function w(T) {
    var S = T - a,
      x = T - i
    return a === void 0 || S >= t || S < 0 || (p && x >= s)
  }
  function E() {
    var T = kn()
    if (w(T)) return g(T)
    u = setTimeout(E, m(T))
  }
  function g(T) {
    return (u = void 0), v && l ? b(T) : ((l = o = void 0), r)
  }
  function h() {
    u !== void 0 && clearTimeout(u), (i = 0), (l = a = o = u = void 0)
  }
  function C() {
    return u === void 0 ? r : g(kn())
  }
  function O() {
    var T = kn(),
      S = w(T)
    if (((l = arguments), (o = this), (a = T), S)) {
      if (u === void 0) return d(a)
      if (p) return clearTimeout(u), (u = setTimeout(E, t)), b(a)
    }
    return u === void 0 && (u = setTimeout(E, t)), r
  }
  return (O.cancel = h), (O.flush = C), O
}
function zn(e, t) {
  return ho(e, t)
}
const en = function (e, t, ...n) {
    let l
    t.includes('mouse') || t.includes('click')
      ? (l = 'MouseEvents')
      : t.includes('key')
      ? (l = 'KeyboardEvent')
      : (l = 'HTMLEvents')
    const o = document.createEvent(l)
    return o.initEvent(t, ...n), e.dispatchEvent(o), e
  },
  ei = (e = '') => e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  ti = (e) => ua[e || 'default'],
  ni = (e) => ['', ...Xl].includes(e),
  mo = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),
  li = ['class', 'style'],
  oi = /^on[A-Z]/,
  ai = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      l = $(() => ((n == null ? void 0 : n.value) || []).concat(li)),
      o = ge()
    return o
      ? $(() => {
          var s
          return ca(
            Object.entries((s = o.proxy) == null ? void 0 : s.$attrs).filter(
              ([r]) => !l.value.includes(r) && !(t && oi.test(r)),
            ),
          )
        })
      : $(() => ({}))
  },
  go = Symbol('elPaginationKey'),
  si = (e) => ({
    focus: () => {
      var t, n
      ;(n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t)
    },
  })
function ri(e) {
  const t = P()
  function n() {
    if (e.value == null) return
    const { selectionStart: o, selectionEnd: s, value: r } = e.value
    if (o == null || s == null) return
    const u = r.slice(0, Math.max(0, o)),
      a = r.slice(Math.max(0, s))
    t.value = { selectionStart: o, selectionEnd: s, value: r, beforeTxt: u, afterTxt: a }
  }
  function l() {
    if (e.value == null || t.value == null) return
    const { value: o } = e.value,
      { beforeTxt: s, afterTxt: r, selectionStart: u } = t.value
    if (s == null || r == null || u == null) return
    let a = o.length
    if (o.endsWith(r)) a = o.length - r.length
    else if (o.startsWith(s)) a = s.length
    else {
      const i = s[u - 1],
        c = o.indexOf(i, u - 1)
      c !== -1 && (a = c + 1)
    }
    e.value.setSelectionRange(a, a)
  }
  return [n, l]
}
let Ge
const ii = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  ui = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
  ]
function ci(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    l =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    o =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'))
  return {
    contextStyle: ui.map((r) => `${r}:${t.getPropertyValue(r)}`).join(';'),
    paddingSize: l,
    borderSize: o,
    boxSizing: n,
  }
}
function Bl(e, t = 1, n) {
  var l
  Ge || ((Ge = document.createElement('textarea')), document.body.appendChild(Ge))
  const { paddingSize: o, borderSize: s, boxSizing: r, contextStyle: u } = ci(e)
  Ge.setAttribute('style', `${u};${ii}`), (Ge.value = e.value || e.placeholder || '')
  let a = Ge.scrollHeight
  const i = {}
  r === 'border-box' ? (a = a + s) : r === 'content-box' && (a = a - o), (Ge.value = '')
  const c = Ge.scrollHeight - o
  if (Yt(t)) {
    let p = c * t
    r === 'border-box' && (p = p + o + s), (a = Math.max(p, a)), (i.minHeight = `${p}px`)
  }
  if (Yt(n)) {
    let p = c * n
    r === 'border-box' && (p = p + o + s), (a = Math.min(p, a))
  }
  return (i.height = `${a}px`), (l = Ge.parentNode) == null || l.removeChild(Ge), (Ge = void 0), i
}
const di = Qe({
    id: { type: String, default: void 0 },
    size: Gn,
    disabled: Boolean,
    modelValue: { type: vt([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: { type: String, values: ['none', 'both', 'horizontal', 'vertical'] },
    autosize: { type: vt([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String, default: '' },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: gl, default: '' },
    prefixIcon: { type: gl, default: '' },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: vt([Object, Array, String]), default: () => bn({}) },
  }),
  fi = {
    [Ie]: (e) => Xe(e),
    input: (e) => Xe(e),
    change: (e) => Xe(e),
    focus: (e) => e instanceof FocusEvent,
    blur: (e) => e instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (e) => e instanceof MouseEvent,
    mouseenter: (e) => e instanceof MouseEvent,
    keydown: (e) => e instanceof Event,
    compositionstart: (e) => e instanceof CompositionEvent,
    compositionupdate: (e) => e instanceof CompositionEvent,
    compositionend: (e) => e instanceof CompositionEvent,
  },
  pi = ['role'],
  vi = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
  ],
  hi = ['id', 'tabindex', 'disabled', 'readonly', 'autocomplete', 'aria-label', 'placeholder'],
  mi = { name: 'ElInput', inheritAttrs: !1 },
  gi = ne(
    Ce(se({}, mi), {
      props: di,
      emits: fi,
      setup(e, { expose: t, emit: n }) {
        const l = e,
          o = { suffix: 'append', prefix: 'prepend' },
          s = ge(),
          r = da(),
          u = hn(),
          a = $(() => {
            const N = {}
            return (
              l.containerRole === 'combobox' &&
                ((N['aria-haspopup'] = r['aria-haspopup']),
                (N['aria-owns'] = r['aria-owns']),
                (N['aria-expanded'] = r['aria-expanded'])),
              N
            )
          }),
          i = ai({ excludeKeys: $(() => Object.keys(a.value)) }),
          { form: c, formItem: p } = Ba(),
          { inputId: v } = Zn(l, { formItemContext: p }),
          b = Mt(),
          d = fa(),
          m = Y('input'),
          w = Y('textarea'),
          E = _t(),
          g = _t(),
          h = P(!1),
          C = P(!1),
          O = P(!1),
          T = P(!1),
          S = P(),
          x = _t(l.inputStyle),
          L = $(() => E.value || g.value),
          V = $(() => {
            var N
            return (N = c == null ? void 0 : c.statusIcon) != null ? N : !1
          }),
          W = $(() => (p == null ? void 0 : p.validateState) || ''),
          D = $(() => W.value && _a[W.value]),
          J = $(() => (T.value ? Oa : La)),
          ee = $(() => [r.style, l.inputStyle]),
          fe = $(() => [l.inputStyle, x.value, { resize: l.resize }]),
          le = $(() => (Ea(l.modelValue) ? '' : String(l.modelValue))),
          be = $(
            () => l.clearable && !d.value && !l.readonly && !!le.value && (h.value || C.value),
          ),
          R = $(
            () =>
              l.showPassword && !d.value && !l.readonly && !!le.value && (!!le.value || h.value),
          ),
          M = $(
            () =>
              l.showWordLimit &&
              !!i.value.maxlength &&
              (l.type === 'text' || l.type === 'textarea') &&
              !d.value &&
              !l.readonly &&
              !l.showPassword,
          ),
          B = $(() => Array.from(le.value).length),
          j = $(() => !!M.value && B.value > Number(i.value.maxlength)),
          ie = $(
            () =>
              !!u.suffix ||
              !!l.suffixIcon ||
              be.value ||
              l.showPassword ||
              M.value ||
              (!!W.value && V.value),
          ),
          [oe, pe] = ri(E)
        Qt(g, (N) => {
          if (!M.value || l.resize !== 'both') return
          const te = N[0],
            { width: _e } = te.contentRect
          S.value = { right: `calc(100% - ${_e + 15 + 6}px)` }
        })
        const ae = () => {
            const { type: N, autosize: te } = l
            if (!(!Pt || N !== 'textarea'))
              if (te) {
                const _e = qt(te) ? te.minRows : void 0,
                  Pe = qt(te) ? te.maxRows : void 0
                x.value = se({}, Bl(g.value, _e, Pe))
              } else x.value = { minHeight: Bl(g.value).minHeight }
          },
          ye = () => {
            const N = L.value
            !N || N.value === le.value || (N.value = le.value)
          },
          we = (N) => {
            const { el: te } = s.vnode
            if (!te) return
            const Pe = Array.from(te.querySelectorAll(`.${m.e(N)}`)).find(
              (q) => q.parentNode === te,
            )
            if (!Pe) return
            const H = o[N]
            u[H]
              ? (Pe.style.transform = `translateX(${N === 'suffix' ? '-' : ''}${
                  te.querySelector(`.${m.be('group', H)}`).offsetWidth
                }px)`)
              : Pe.removeAttribute('style')
          },
          Ee = () => {
            we('prefix'), we('suffix')
          },
          Ae = (N) =>
            ot(this, null, function* () {
              oe()
              let { value: te } = N.target
              l.formatter && ((te = l.parser ? l.parser(te) : te), (te = l.formatter(te))),
                !O.value && te !== le.value && (n(Ie, te), n('input', te), yield ve(), ye(), pe())
            }),
          Ve = (N) => {
            n('change', N.target.value)
          },
          rt = (N) => {
            n('compositionstart', N), (O.value = !0)
          },
          We = (N) => {
            var te
            n('compositionupdate', N)
            const _e = (te = N.target) == null ? void 0 : te.value,
              Pe = _e[_e.length - 1] || ''
            O.value = !mo(Pe)
          },
          tt = (N) => {
            n('compositionend', N), O.value && ((O.value = !1), Ae(N))
          },
          yt = () => {
            ;(T.value = !T.value), it()
          },
          it = () =>
            ot(this, null, function* () {
              var N
              yield ve(), (N = L.value) == null || N.focus()
            }),
          nt = () => {
            var N
            return (N = L.value) == null ? void 0 : N.blur()
          },
          Je = (N) => {
            ;(h.value = !0), n('focus', N)
          },
          lt = (N) => {
            var te
            ;(h.value = !1),
              n('blur', N),
              l.validateEvent &&
                ((te = p == null ? void 0 : p.validate) == null ||
                  te.call(p, 'blur').catch((_e) => Nt()))
          },
          Ct = (N) => {
            ;(C.value = !1), n('mouseleave', N)
          },
          ut = (N) => {
            ;(C.value = !0), n('mouseenter', N)
          },
          ct = (N) => {
            n('keydown', N)
          },
          St = () => {
            var N
            ;(N = L.value) == null || N.select()
          },
          dt = () => {
            n(Ie, ''), n('change', ''), n('clear'), n('input', '')
          }
        return (
          re(
            () => l.modelValue,
            () => {
              var N
              ve(() => ae()),
                l.validateEvent &&
                  ((N = p == null ? void 0 : p.validate) == null ||
                    N.call(p, 'change').catch((te) => Nt()))
            },
          ),
          re(le, () => ye()),
          re(
            () => l.type,
            () =>
              ot(this, null, function* () {
                yield ve(), ye(), ae(), Ee()
              }),
          ),
          Ze(() =>
            ot(this, null, function* () {
              !l.formatter && l.parser, ye(), Ee(), yield ve(), ae()
            }),
          ),
          Un(() =>
            ot(this, null, function* () {
              yield ve(), Ee()
            }),
          ),
          t({
            input: E,
            textarea: g,
            ref: L,
            textareaStyle: fe,
            autosize: Ql(l, 'autosize'),
            focus: it,
            blur: nt,
            select: St,
            clear: dt,
            resizeTextarea: ae,
          }),
          (N, te) =>
            ze(
              (A(),
              F(
                'div',
                Ht(f(a), {
                  class: [
                    N.type === 'textarea' ? f(w).b() : f(m).b(),
                    f(m).m(f(b)),
                    f(m).is('disabled', f(d)),
                    f(m).is('exceed', f(j)),
                    {
                      [f(m).b('group')]: N.$slots.prepend || N.$slots.append,
                      [f(m).bm('group', 'append')]: N.$slots.append,
                      [f(m).bm('group', 'prepend')]: N.$slots.prepend,
                      [f(m).m('prefix')]: N.$slots.prefix || N.prefixIcon,
                      [f(m).m('suffix')]:
                        N.$slots.suffix || N.suffixIcon || N.clearable || N.showPassword,
                      [f(m).bm('suffix', 'password-clear')]: f(be) && f(R),
                    },
                    N.$attrs.class,
                  ],
                  style: f(ee),
                  role: N.containerRole,
                  onMouseenter: ut,
                  onMouseleave: Ct,
                }),
                [
                  U(' input '),
                  N.type !== 'textarea'
                    ? (A(),
                      F(
                        Te,
                        { key: 0 },
                        [
                          U(' prepend slot '),
                          N.$slots.prepend
                            ? (A(),
                              F(
                                'div',
                                { key: 0, class: I(f(m).be('group', 'prepend')) },
                                [ce(N.$slots, 'prepend')],
                                2,
                              ))
                            : U('v-if', !0),
                          Z(
                            'div',
                            { class: I([f(m).e('wrapper'), f(m).is('focus', h.value)]) },
                            [
                              U(' prefix slot '),
                              N.$slots.prefix || N.prefixIcon
                                ? (A(),
                                  F(
                                    'span',
                                    { key: 0, class: I(f(m).e('prefix')) },
                                    [
                                      Z(
                                        'span',
                                        { class: I(f(m).e('prefix-inner')) },
                                        [
                                          ce(N.$slots, 'prefix'),
                                          N.prefixIcon
                                            ? (A(),
                                              Q(
                                                f(Re),
                                                { key: 0, class: I(f(m).e('icon')) },
                                                {
                                                  default: G(() => [(A(), Q(pt(N.prefixIcon)))]),
                                                  _: 1,
                                                },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                        ],
                                        2,
                                      ),
                                    ],
                                    2,
                                  ))
                                : U('v-if', !0),
                              Z(
                                'input',
                                Ht(
                                  { id: f(v), ref_key: 'input', ref: E, class: f(m).e('inner') },
                                  f(i),
                                  {
                                    type: N.showPassword ? (T.value ? 'text' : 'password') : N.type,
                                    disabled: f(d),
                                    formatter: N.formatter,
                                    parser: N.parser,
                                    readonly: N.readonly,
                                    autocomplete: N.autocomplete,
                                    tabindex: N.tabindex,
                                    'aria-label': N.label,
                                    placeholder: N.placeholder,
                                    style: N.inputStyle,
                                    onCompositionstart: rt,
                                    onCompositionupdate: We,
                                    onCompositionend: tt,
                                    onInput: Ae,
                                    onFocus: Je,
                                    onBlur: lt,
                                    onChange: Ve,
                                    onKeydown: ct,
                                  },
                                ),
                                null,
                                16,
                                vi,
                              ),
                              U(' suffix slot '),
                              f(ie)
                                ? (A(),
                                  F(
                                    'span',
                                    { key: 1, class: I(f(m).e('suffix')) },
                                    [
                                      Z(
                                        'span',
                                        { class: I(f(m).e('suffix-inner')) },
                                        [
                                          !f(be) || !f(R) || !f(M)
                                            ? (A(),
                                              F(
                                                Te,
                                                { key: 0 },
                                                [
                                                  ce(N.$slots, 'suffix'),
                                                  N.suffixIcon
                                                    ? (A(),
                                                      Q(
                                                        f(Re),
                                                        { key: 0, class: I(f(m).e('icon')) },
                                                        {
                                                          default: G(() => [
                                                            (A(), Q(pt(N.suffixIcon))),
                                                          ]),
                                                          _: 1,
                                                        },
                                                        8,
                                                        ['class'],
                                                      ))
                                                    : U('v-if', !0),
                                                ],
                                                64,
                                              ))
                                            : U('v-if', !0),
                                          f(be)
                                            ? (A(),
                                              Q(
                                                f(Re),
                                                {
                                                  key: 1,
                                                  class: I([f(m).e('icon'), f(m).e('clear')]),
                                                  onMousedown: Ue(f(pa), ['prevent']),
                                                  onClick: dt,
                                                },
                                                { default: G(() => [X(f(oo))]), _: 1 },
                                                8,
                                                ['class', 'onMousedown'],
                                              ))
                                            : U('v-if', !0),
                                          f(R)
                                            ? (A(),
                                              Q(
                                                f(Re),
                                                {
                                                  key: 2,
                                                  class: I([f(m).e('icon'), f(m).e('password')]),
                                                  onClick: yt,
                                                },
                                                { default: G(() => [(A(), Q(pt(f(J))))]), _: 1 },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                          f(M)
                                            ? (A(),
                                              F(
                                                'span',
                                                { key: 3, class: I(f(m).e('count')) },
                                                [
                                                  Z(
                                                    'span',
                                                    { class: I(f(m).e('count-inner')) },
                                                    ue(f(B)) + ' / ' + ue(f(i).maxlength),
                                                    3,
                                                  ),
                                                ],
                                                2,
                                              ))
                                            : U('v-if', !0),
                                          f(W) && f(D) && f(V)
                                            ? (A(),
                                              Q(
                                                f(Re),
                                                {
                                                  key: 4,
                                                  class: I([
                                                    f(m).e('icon'),
                                                    f(m).e('validateIcon'),
                                                    f(m).is('loading', f(W) === 'validating'),
                                                  ]),
                                                },
                                                { default: G(() => [(A(), Q(pt(f(D))))]), _: 1 },
                                                8,
                                                ['class'],
                                              ))
                                            : U('v-if', !0),
                                        ],
                                        2,
                                      ),
                                    ],
                                    2,
                                  ))
                                : U('v-if', !0),
                            ],
                            2,
                          ),
                          U(' append slot '),
                          N.$slots.append
                            ? (A(),
                              F(
                                'div',
                                { key: 1, class: I(f(m).be('group', 'append')) },
                                [ce(N.$slots, 'append')],
                                2,
                              ))
                            : U('v-if', !0),
                        ],
                        64,
                      ))
                    : (A(),
                      F(
                        Te,
                        { key: 1 },
                        [
                          U(' textarea '),
                          Z(
                            'textarea',
                            Ht(
                              { id: f(v), ref_key: 'textarea', ref: g, class: f(w).e('inner') },
                              f(i),
                              {
                                tabindex: N.tabindex,
                                disabled: f(d),
                                readonly: N.readonly,
                                autocomplete: N.autocomplete,
                                style: f(fe),
                                'aria-label': N.label,
                                placeholder: N.placeholder,
                                onCompositionstart: rt,
                                onCompositionupdate: We,
                                onCompositionend: tt,
                                onInput: Ae,
                                onFocus: Je,
                                onBlur: lt,
                                onChange: Ve,
                                onKeydown: ct,
                              },
                            ),
                            null,
                            16,
                            hi,
                          ),
                          f(M)
                            ? (A(),
                              F(
                                'span',
                                { key: 0, style: ke(S.value), class: I(f(m).e('count')) },
                                ue(f(B)) + ' / ' + ue(f(i).maxlength),
                                7,
                              ))
                            : U('v-if', !0),
                        ],
                        64,
                      )),
                ],
                16,
                pi,
              )),
              [[Tt, N.type !== 'hidden']],
            )
        )
      },
    }),
  )
var bi = he(gi, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue'],
])
const bo = gt(bi)
var Wl = !1,
  Et,
  Fn,
  Bn,
  tn,
  nn,
  yo,
  ln,
  Wn,
  _n,
  Hn,
  Co,
  Vn,
  Dn,
  So,
  wo
function Be() {
  if (!Wl) {
    Wl = !0
    var e = navigator.userAgent,
      t =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          e,
        ),
      n = /(Mac OS X)|(Windows)|(Linux)/.exec(e)
    if (
      ((Vn = /\b(iPhone|iP[ao]d)/.exec(e)),
      (Dn = /\b(iP[ao]d)/.exec(e)),
      (Hn = /Android/i.exec(e)),
      (So = /FBAN\/\w+;/i.exec(e)),
      (wo = /Mobile/i.exec(e)),
      (Co = !!/Win64/.exec(e)),
      t)
    ) {
      ;(Et = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
        Et && document && document.documentMode && (Et = document.documentMode)
      var l = /(?:Trident\/(\d+.\d+))/.exec(e)
      ;(yo = l ? parseFloat(l[1]) + 4 : Et),
        (Fn = t[2] ? parseFloat(t[2]) : NaN),
        (Bn = t[3] ? parseFloat(t[3]) : NaN),
        (tn = t[4] ? parseFloat(t[4]) : NaN),
        tn
          ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)), (nn = t && t[1] ? parseFloat(t[1]) : NaN))
          : (nn = NaN)
    } else Et = Fn = Bn = nn = tn = NaN
    if (n) {
      if (n[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e)
        ln = o ? parseFloat(o[1].replace('_', '.')) : !0
      } else ln = !1
      ;(Wn = !!n[2]), (_n = !!n[3])
    } else ln = Wn = _n = !1
  }
}
var Kn = {
    ie: function () {
      return Be() || Et
    },
    ieCompatibilityMode: function () {
      return Be() || yo > Et
    },
    ie64: function () {
      return Kn.ie() && Co
    },
    firefox: function () {
      return Be() || Fn
    },
    opera: function () {
      return Be() || Bn
    },
    webkit: function () {
      return Be() || tn
    },
    safari: function () {
      return Kn.webkit()
    },
    chrome: function () {
      return Be() || nn
    },
    windows: function () {
      return Be() || Wn
    },
    osx: function () {
      return Be() || ln
    },
    linux: function () {
      return Be() || _n
    },
    iphone: function () {
      return Be() || Vn
    },
    mobile: function () {
      return Be() || Vn || Dn || Hn || wo
    },
    nativeApp: function () {
      return Be() || So
    },
    android: function () {
      return Be() || Hn
    },
    ipad: function () {
      return Be() || Dn
    },
  },
  yi = Kn,
  Jt = !!(typeof window < 'u' && window.document && window.document.createElement),
  Ci = {
    canUseDOM: Jt,
    canUseWorkers: typeof Worker < 'u',
    canUseEventListeners: Jt && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Jt && !!window.screen,
    isInWorker: !Jt,
  },
  Eo = Ci,
  $o
Eo.canUseDOM &&
  ($o =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature('', '') !== !0)
function Si(e, t) {
  if (!Eo.canUseDOM || (t && !('addEventListener' in document))) return !1
  var n = 'on' + e,
    l = n in document
  if (!l) {
    var o = document.createElement('div')
    o.setAttribute(n, 'return;'), (l = typeof o[n] == 'function')
  }
  return (
    !l && $o && e === 'wheel' && (l = document.implementation.hasFeature('Events.wheel', '3.0')), l
  )
}
var wi = Si,
  _l = 10,
  Hl = 40,
  Vl = 800
function ko(e) {
  var t = 0,
    n = 0,
    l = 0,
    o = 0
  return (
    'detail' in e && (n = e.detail),
    'wheelDelta' in e && (n = -e.wheelDelta / 120),
    'wheelDeltaY' in e && (n = -e.wheelDeltaY / 120),
    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
    (l = t * _l),
    (o = n * _l),
    'deltaY' in e && (o = e.deltaY),
    'deltaX' in e && (l = e.deltaX),
    (l || o) && e.deltaMode && (e.deltaMode == 1 ? ((l *= Hl), (o *= Hl)) : ((l *= Vl), (o *= Vl))),
    l && !t && (t = l < 1 ? -1 : 1),
    o && !n && (n = o < 1 ? -1 : 1),
    { spinX: t, spinY: n, pixelX: l, pixelY: o }
  )
}
ko.getEventType = function () {
  return yi.firefox() ? 'DOMMouseScroll' : wi('wheel') ? 'wheel' : 'mousewheel'
}
var Ei = ko
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const $i = function (e, t) {
    if (e && e.addEventListener) {
      const n = function (l) {
        const o = Ei(l)
        t && Reflect.apply(t, this, [l, o])
      }
      e.addEventListener('wheel', n, { passive: !0 })
    }
  },
  ki = {
    beforeMount(e, t) {
      $i(e, t.value)
    },
  },
  Mi = {
    modelValue: { type: Array, default: () => [] },
    disabled: Boolean,
    min: { type: Number, default: void 0 },
    max: { type: Number, default: void 0 },
    size: Gn,
    id: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    fill: { type: String, default: void 0 },
    textColor: { type: String, default: void 0 },
    tag: { type: String, default: 'div' },
    validateEvent: { type: Boolean, default: !0 },
  },
  Mo = {
    modelValue: { type: [Number, String, Boolean], default: () => {} },
    label: { type: [String, Boolean, Number, Object] },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    controls: { type: String, default: void 0 },
    border: Boolean,
    size: Gn,
    tabindex: [String, Number],
    validateEvent: { type: Boolean, default: !0 },
  },
  Bt = () => {
    const e = Se(Zl, {}),
      t = Se(Jl, {}),
      n = Se('CheckboxGroup', {}),
      l = $(() => n && (n == null ? void 0 : n.name) === 'ElCheckboxGroup'),
      o = $(() => t.size)
    return { isGroup: l, checkboxGroup: n, elForm: e, elFormItemSize: o, elFormItem: t }
  },
  Ti = (e, { elFormItem: t }) => {
    const { inputId: n, isLabeledByFormItem: l } = Zn(e, { formItemContext: t })
    return { isLabeledByFormItem: l, groupId: n }
  },
  xi = (e) => {
    const t = P(!1),
      { emit: n } = ge(),
      { isGroup: l, checkboxGroup: o, elFormItem: s } = Bt(),
      r = P(!1)
    return {
      model: $({
        get() {
          var a, i
          return l.value
            ? (a = o.modelValue) == null
              ? void 0
              : a.value
            : (i = e.modelValue) != null
            ? i
            : t.value
        },
        set(a) {
          var i
          l.value && Array.isArray(a)
            ? ((r.value = o.max !== void 0 && a.length > o.max.value),
              r.value === !1 && ((i = o == null ? void 0 : o.changeEvent) == null || i.call(o, a)))
            : (n(Ie, a), (t.value = a))
        },
      }),
      isGroup: l,
      isLimitExceeded: r,
      elFormItem: s,
    }
  },
  Pi = (e, t, { model: n }) => {
    const { isGroup: l, checkboxGroup: o } = Bt(),
      s = P(!1),
      r = Mt(o == null ? void 0 : o.checkboxGroupSize, { prop: !0 }),
      u = $(() => {
        const c = n.value
        return va(c) === '[object Boolean]'
          ? c
          : Array.isArray(c)
          ? c.includes(e.label)
          : c != null
          ? c === e.trueLabel
          : !!c
      }),
      a = Mt(
        $(() => {
          var c
          return l.value
            ? (c = o == null ? void 0 : o.checkboxGroupSize) == null
              ? void 0
              : c.value
            : void 0
        }),
      ),
      i = $(() => !!(t.default || e.label))
    return { isChecked: u, focus: s, size: r, checkboxSize: a, hasOwnLabel: i }
  },
  Ai = (e, { model: t, isChecked: n }) => {
    const { elForm: l, isGroup: o, checkboxGroup: s } = Bt(),
      r = $(() => {
        var a, i
        const c = (a = s.max) == null ? void 0 : a.value,
          p = (i = s.min) == null ? void 0 : i.value
        return (!!(c || p) && t.value.length >= c && !n.value) || (t.value.length <= p && n.value)
      })
    return {
      isDisabled: $(() => {
        var a, i
        const c = e.disabled || (l == null ? void 0 : l.disabled)
        return (i = o.value ? ((a = s.disabled) == null ? void 0 : a.value) || c || r.value : c) !=
          null
          ? i
          : !1
      }),
      isLimitDisabled: r,
    }
  },
  Oi = (e, { model: t }) => {
    function n() {
      Array.isArray(t.value) && !t.value.includes(e.label)
        ? t.value.push(e.label)
        : (t.value = e.trueLabel || !0)
    }
    e.checked && n()
  },
  Li = (
    e,
    { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: o, isLabeledByFormItem: s },
  ) => {
    const { elFormItem: r, checkboxGroup: u } = Bt(),
      { emit: a } = ge()
    function i(d) {
      var m, w
      return d === e.trueLabel || d === !0
        ? (m = e.trueLabel) != null
          ? m
          : !0
        : (w = e.falseLabel) != null
        ? w
        : !1
    }
    function c(d, m) {
      a('change', i(d), m)
    }
    function p(d) {
      if (n.value) return
      const m = d.target
      a('change', i(m.checked), d)
    }
    function v(d) {
      return ot(this, null, function* () {
        n.value ||
          (!l.value &&
            !o.value &&
            s.value &&
            ((t.value = i([!1, e.falseLabel].includes(t.value))), yield ve(), c(t.value, d)))
      })
    }
    const b = $(() => {
      var d
      return ((d = u.validateEvent) == null ? void 0 : d.value) || e.validateEvent
    })
    return (
      re(
        () => e.modelValue,
        () => {
          var d
          b.value &&
            ((d = r == null ? void 0 : r.validate) == null ||
              d.call(r, 'change').catch((m) => Nt()))
        },
      ),
      { handleChange: p, onClickRoot: v }
    )
  },
  To = { [Ie]: (e) => Xe(e) || Yt(e) || fl(e), change: (e) => Xe(e) || Yt(e) || fl(e) },
  Ni = { [Ie]: (e) => ul(e), change: (e) => ul(e) },
  xo = (e, t) => {
    const { model: n, isGroup: l, isLimitExceeded: o, elFormItem: s } = xi(e),
      { focus: r, size: u, isChecked: a, checkboxSize: i, hasOwnLabel: c } = Pi(e, t, { model: n }),
      { isDisabled: p } = Ai(e, { model: n, isChecked: a }),
      { inputId: v, isLabeledByFormItem: b } = Zn(e, {
        formItemContext: s,
        disableIdGeneration: c,
        disableIdManagement: l,
      }),
      { handleChange: d, onClickRoot: m } = Li(e, {
        model: n,
        isLimitExceeded: o,
        hasOwnLabel: c,
        isDisabled: p,
        isLabeledByFormItem: b,
      })
    return (
      Oi(e, { model: n }),
      {
        elFormItem: s,
        inputId: v,
        isLabeledByFormItem: b,
        isChecked: a,
        isDisabled: p,
        isGroup: l,
        checkboxSize: i,
        hasOwnLabel: c,
        model: n,
        handleChange: d,
        onClickRoot: m,
        focus: r,
        size: u,
      }
    )
  },
  Ii = ['tabindex', 'role', 'aria-checked'],
  Ri = ['id', 'aria-hidden', 'name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  zi = ['id', 'aria-hidden', 'disabled', 'value', 'name', 'tabindex'],
  Fi = { name: 'ElCheckbox' },
  Bi = ne(
    Ce(se({}, Fi), {
      props: Mo,
      emits: To,
      setup(e) {
        const t = e,
          n = hn(),
          {
            inputId: l,
            isLabeledByFormItem: o,
            isChecked: s,
            isDisabled: r,
            checkboxSize: u,
            hasOwnLabel: a,
            model: i,
            handleChange: c,
            onClickRoot: p,
            focus: v,
          } = xo(t, n),
          b = Y('checkbox')
        return (d, m) => (
          A(),
          Q(
            pt(!f(a) && f(o) ? 'span' : 'label'),
            {
              class: I([
                f(b).b(),
                f(b).m(f(u)),
                f(b).is('disabled', f(r)),
                f(b).is('bordered', d.border),
                f(b).is('checked', f(s)),
              ]),
              'aria-controls': d.indeterminate ? d.controls : null,
              onClick: f(p),
            },
            {
              default: G(() => [
                Z(
                  'span',
                  {
                    class: I([
                      f(b).e('input'),
                      f(b).is('disabled', f(r)),
                      f(b).is('checked', f(s)),
                      f(b).is('indeterminate', d.indeterminate),
                      f(b).is('focus', f(v)),
                    ]),
                    tabindex: d.indeterminate ? 0 : void 0,
                    role: d.indeterminate ? 'checkbox' : void 0,
                    'aria-checked': d.indeterminate ? 'mixed' : void 0,
                  },
                  [
                    d.trueLabel || d.falseLabel
                      ? ze(
                          (A(),
                          F(
                            'input',
                            {
                              key: 0,
                              id: f(l),
                              'onUpdate:modelValue':
                                m[0] || (m[0] = (w) => (Gt(i) ? (i.value = w) : null)),
                              class: I(f(b).e('original')),
                              type: 'checkbox',
                              'aria-hidden': d.indeterminate ? 'true' : 'false',
                              name: d.name,
                              tabindex: d.tabindex,
                              disabled: f(r),
                              'true-value': d.trueLabel,
                              'false-value': d.falseLabel,
                              onChange: m[1] || (m[1] = (...w) => f(c) && f(c)(...w)),
                              onFocus: m[2] || (m[2] = (w) => (v.value = !0)),
                              onBlur: m[3] || (m[3] = (w) => (v.value = !1)),
                            },
                            null,
                            42,
                            Ri,
                          )),
                          [[cn, f(i)]],
                        )
                      : ze(
                          (A(),
                          F(
                            'input',
                            {
                              key: 1,
                              id: f(l),
                              'onUpdate:modelValue':
                                m[4] || (m[4] = (w) => (Gt(i) ? (i.value = w) : null)),
                              class: I(f(b).e('original')),
                              type: 'checkbox',
                              'aria-hidden': d.indeterminate ? 'true' : 'false',
                              disabled: f(r),
                              value: d.label,
                              name: d.name,
                              tabindex: d.tabindex,
                              onChange: m[5] || (m[5] = (...w) => f(c) && f(c)(...w)),
                              onFocus: m[6] || (m[6] = (w) => (v.value = !0)),
                              onBlur: m[7] || (m[7] = (w) => (v.value = !1)),
                            },
                            null,
                            42,
                            zi,
                          )),
                          [[cn, f(i)]],
                        ),
                    Z('span', { class: I(f(b).e('inner')) }, null, 2),
                  ],
                  10,
                  Ii,
                ),
                f(a)
                  ? (A(),
                    F(
                      'span',
                      { key: 0, class: I(f(b).e('label')) },
                      [
                        ce(d.$slots, 'default'),
                        d.$slots.default
                          ? U('v-if', !0)
                          : (A(), F(Te, { key: 0 }, [at(ue(d.label), 1)], 64)),
                      ],
                      2,
                    ))
                  : U('v-if', !0),
              ]),
              _: 3,
            },
            8,
            ['class', 'aria-controls', 'onClick'],
          )
        )
      },
    }),
  )
var Wi = he(Bi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue',
  ],
])
const _i = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  Hi = ['name', 'tabindex', 'disabled', 'value'],
  Vi = { name: 'ElCheckboxButton' },
  Di = ne(
    Ce(se({}, Vi), {
      props: Mo,
      emits: To,
      setup(e) {
        const t = e,
          n = hn(),
          { focus: l, isChecked: o, isDisabled: s, size: r, model: u, handleChange: a } = xo(t, n),
          { checkboxGroup: i } = Bt(),
          c = Y('checkbox'),
          p = $(() => {
            var v, b, d, m
            const w =
              (b = (v = i == null ? void 0 : i.fill) == null ? void 0 : v.value) != null ? b : ''
            return {
              backgroundColor: w,
              borderColor: w,
              color:
                (m = (d = i == null ? void 0 : i.textColor) == null ? void 0 : d.value) != null
                  ? m
                  : '',
              boxShadow: w ? `-1px 0 0 0 ${w}` : void 0,
            }
          })
        return (v, b) => (
          A(),
          F(
            'label',
            {
              class: I([
                f(c).b('button'),
                f(c).bm('button', f(r)),
                f(c).is('disabled', f(s)),
                f(c).is('checked', f(o)),
                f(c).is('focus', f(l)),
              ]),
            },
            [
              v.trueLabel || v.falseLabel
                ? ze(
                    (A(),
                    F(
                      'input',
                      {
                        key: 0,
                        'onUpdate:modelValue':
                          b[0] || (b[0] = (d) => (Gt(u) ? (u.value = d) : null)),
                        class: I(f(c).be('button', 'original')),
                        type: 'checkbox',
                        name: v.name,
                        tabindex: v.tabindex,
                        disabled: f(s),
                        'true-value': v.trueLabel,
                        'false-value': v.falseLabel,
                        onChange: b[1] || (b[1] = (...d) => f(a) && f(a)(...d)),
                        onFocus: b[2] || (b[2] = (d) => (l.value = !0)),
                        onBlur: b[3] || (b[3] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      _i,
                    )),
                    [[cn, f(u)]],
                  )
                : ze(
                    (A(),
                    F(
                      'input',
                      {
                        key: 1,
                        'onUpdate:modelValue':
                          b[4] || (b[4] = (d) => (Gt(u) ? (u.value = d) : null)),
                        class: I(f(c).be('button', 'original')),
                        type: 'checkbox',
                        name: v.name,
                        tabindex: v.tabindex,
                        disabled: f(s),
                        value: v.label,
                        onChange: b[5] || (b[5] = (...d) => f(a) && f(a)(...d)),
                        onFocus: b[6] || (b[6] = (d) => (l.value = !0)),
                        onBlur: b[7] || (b[7] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      Hi,
                    )),
                    [[cn, f(u)]],
                  ),
              v.$slots.default || v.label
                ? (A(),
                  F(
                    'span',
                    {
                      key: 2,
                      class: I(f(c).be('button', 'inner')),
                      style: ke(f(o) ? f(p) : void 0),
                    },
                    [ce(v.$slots, 'default', {}, () => [at(ue(v.label), 1)])],
                    6,
                  ))
                : U('v-if', !0),
            ],
            2,
          )
        )
      },
    }),
  )
var Po = he(Di, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue',
  ],
])
const Ki = { name: 'ElCheckboxGroup' },
  ji = ne(
    Ce(se({}, Ki), {
      props: Mi,
      emits: Ni,
      setup(e, { emit: t }) {
        const n = e,
          { elFormItem: l } = Bt(),
          { groupId: o, isLabeledByFormItem: s } = Ti(n, { elFormItem: l }),
          r = Mt(),
          u = Y('checkbox'),
          a = (c) => {
            t(Ie, c),
              ve(() => {
                t('change', c)
              })
          },
          i = $({
            get() {
              return n.modelValue
            },
            set(c) {
              a(c)
            },
          })
        return (
          mt(
            'CheckboxGroup',
            Ce(se({ name: 'ElCheckboxGroup' }, Xt(n)), {
              modelValue: i,
              checkboxGroupSize: r,
              changeEvent: a,
            }),
          ),
          re(
            () => n.modelValue,
            () => {
              var c
              n.validateEvent &&
                ((c = l.validate) == null || c.call(l, 'change').catch((p) => Nt()))
            },
          ),
          (c, p) => (
            A(),
            Q(
              pt(c.tag),
              {
                id: f(o),
                class: I(f(u).b('group')),
                role: 'group',
                'aria-label': f(s) ? void 0 : c.label || 'checkbox-group',
                'aria-labelledby': f(s) ? f(l).labelId : void 0,
              },
              { default: G(() => [ce(c.$slots, 'default')]), _: 3 },
              8,
              ['id', 'class', 'aria-label', 'aria-labelledby'],
            )
          )
        )
      },
    }),
  )
var Ao = he(ji, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue',
  ],
])
const Rt = gt(Wi, { CheckboxButton: Po, CheckboxGroup: Ao })
Ke(Po)
Ke(Ao)
const Oo = Qe({
    closable: Boolean,
    type: { type: String, values: ['success', 'info', 'warning', 'danger', ''], default: '' },
    hit: Boolean,
    disableTransitions: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: Xl, default: '' },
    effect: { type: String, values: ['dark', 'light', 'plain'], default: 'light' },
    round: Boolean,
  }),
  qi = { close: (e) => e instanceof MouseEvent, click: (e) => e instanceof MouseEvent },
  Gi = { name: 'ElTag' },
  Ui = ne(
    Ce(se({}, Gi), {
      props: Oo,
      emits: qi,
      setup(e, { emit: t }) {
        const n = e,
          l = Mt(),
          o = Y('tag'),
          s = $(() => {
            const { type: a, hit: i, effect: c, closable: p, round: v } = n
            return [
              o.b(),
              o.is('closable', p),
              o.m(a),
              o.m(l.value),
              o.m(c),
              o.is('hit', i),
              o.is('round', v),
            ]
          }),
          r = (a) => {
            t('close', a)
          },
          u = (a) => {
            t('click', a)
          }
        return (a, i) =>
          a.disableTransitions
            ? (A(),
              F(
                'span',
                { key: 0, class: I(f(s)), style: ke({ backgroundColor: a.color }), onClick: u },
                [
                  Z('span', { class: I(f(o).e('content')) }, [ce(a.$slots, 'default')], 2),
                  a.closable
                    ? (A(),
                      Q(
                        f(Re),
                        { key: 0, class: I(f(o).e('close')), onClick: Ue(r, ['stop']) },
                        { default: G(() => [X(f(pl))]), _: 1 },
                        8,
                        ['class', 'onClick'],
                      ))
                    : U('v-if', !0),
                ],
                6,
              ))
            : (A(),
              Q(
                mn,
                { key: 1, name: `${f(o).namespace.value}-zoom-in-center`, appear: '' },
                {
                  default: G(() => [
                    Z(
                      'span',
                      { class: I(f(s)), style: ke({ backgroundColor: a.color }), onClick: u },
                      [
                        Z('span', { class: I(f(o).e('content')) }, [ce(a.$slots, 'default')], 2),
                        a.closable
                          ? (A(),
                            Q(
                              f(Re),
                              { key: 0, class: I(f(o).e('close')), onClick: Ue(r, ['stop']) },
                              { default: G(() => [X(f(pl))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : U('v-if', !0),
                      ],
                      6,
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['name'],
              ))
      },
    }),
  )
var Yi = he(Ui, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue'],
])
const Xi = gt(Yi),
  Qi = { name: 'ElCollapseTransition' },
  Zi = ne(
    Ce(se({}, Qi), {
      setup(e) {
        const t = Y('collapse-transition'),
          n = {
            beforeEnter(l) {
              l.dataset || (l.dataset = {}),
                (l.dataset.oldPaddingTop = l.style.paddingTop),
                (l.dataset.oldPaddingBottom = l.style.paddingBottom),
                (l.style.maxHeight = 0),
                (l.style.paddingTop = 0),
                (l.style.paddingBottom = 0)
            },
            enter(l) {
              ;(l.dataset.oldOverflow = l.style.overflow),
                l.scrollHeight !== 0
                  ? ((l.style.maxHeight = `${l.scrollHeight}px`),
                    (l.style.paddingTop = l.dataset.oldPaddingTop),
                    (l.style.paddingBottom = l.dataset.oldPaddingBottom))
                  : ((l.style.maxHeight = 0),
                    (l.style.paddingTop = l.dataset.oldPaddingTop),
                    (l.style.paddingBottom = l.dataset.oldPaddingBottom)),
                (l.style.overflow = 'hidden')
            },
            afterEnter(l) {
              ;(l.style.maxHeight = ''), (l.style.overflow = l.dataset.oldOverflow)
            },
            beforeLeave(l) {
              l.dataset || (l.dataset = {}),
                (l.dataset.oldPaddingTop = l.style.paddingTop),
                (l.dataset.oldPaddingBottom = l.style.paddingBottom),
                (l.dataset.oldOverflow = l.style.overflow),
                (l.style.maxHeight = `${l.scrollHeight}px`),
                (l.style.overflow = 'hidden')
            },
            leave(l) {
              l.scrollHeight !== 0 &&
                ((l.style.maxHeight = 0), (l.style.paddingTop = 0), (l.style.paddingBottom = 0))
            },
            afterLeave(l) {
              ;(l.style.maxHeight = ''),
                (l.style.overflow = l.dataset.oldOverflow),
                (l.style.paddingTop = l.dataset.oldPaddingTop),
                (l.style.paddingBottom = l.dataset.oldPaddingBottom)
            },
          }
        return (l, o) => (
          A(),
          Q(
            mn,
            Ht({ name: f(t).b() }, ha(n)),
            { default: G(() => [ce(l.$slots, 'default')]), _: 3 },
            16,
            ['name'],
          )
        )
      },
    }),
  )
var on = he(Zi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue',
  ],
])
on.install = (e) => {
  e.component(on.name, on)
}
const Ji = on,
  eu = { name: 'ElContainer' },
  tu = ne(
    Ce(se({}, eu), {
      props: { direction: { type: String } },
      setup(e) {
        const t = e,
          n = hn(),
          l = Y('container'),
          o = $(() =>
            t.direction === 'vertical'
              ? !0
              : t.direction === 'horizontal'
              ? !1
              : n && n.default
              ? n.default().some((r) => {
                  const u = r.type.name
                  return u === 'ElHeader' || u === 'ElFooter'
                })
              : !1,
          )
        return (s, r) => (
          A(),
          F(
            'section',
            { class: I([f(l).b(), f(l).is('vertical', f(o))]) },
            [ce(s.$slots, 'default')],
            2,
          )
        )
      },
    }),
  )
var nu = he(tu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue',
  ],
])
const lu = { name: 'ElAside' },
  ou = ne(
    Ce(se({}, lu), {
      props: { width: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('aside'),
          l = $(() => (t.width ? n.cssVarBlock({ width: t.width }) : {}))
        return (o, s) => (
          A(), F('aside', { class: I(f(n).b()), style: ke(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var Lo = he(ou, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue',
  ],
])
const au = { name: 'ElFooter' },
  su = ne(
    Ce(se({}, au), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('footer'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (o, s) => (
          A(), F('footer', { class: I(f(n).b()), style: ke(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var No = he(su, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue',
  ],
])
const ru = { name: 'ElHeader' },
  iu = ne(
    Ce(se({}, ru), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('header'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (o, s) => (
          A(), F('header', { class: I(f(n).b()), style: ke(f(l)) }, [ce(o.$slots, 'default')], 6)
        )
      },
    }),
  )
var Io = he(iu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue',
  ],
])
const uu = { name: 'ElMain' },
  cu = ne(
    Ce(se({}, uu), {
      setup(e) {
        const t = Y('main')
        return (n, l) => (A(), F('main', { class: I(f(t).b()) }, [ce(n.$slots, 'default')], 2))
      },
    }),
  )
var Ro = he(cu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue',
  ],
])
const du = gt(nu, { Aside: Lo, Footer: No, Header: Io, Main: Ro }),
  fu = Ke(Lo),
  pu = Ke(No),
  vu = Ke(Io),
  hu = Ke(Ro)
class mu {
  constructor(t, n) {
    ;(this.parent = t), (this.domNode = n), (this.subIndex = 0), (this.subIndex = 0), this.init()
  }
  init() {
    ;(this.subMenuItems = this.domNode.querySelectorAll('li')), this.addListeners()
  }
  gotoSubIndex(t) {
    t === this.subMenuItems.length ? (t = 0) : t < 0 && (t = this.subMenuItems.length - 1),
      this.subMenuItems[t].focus(),
      (this.subIndex = t)
  }
  addListeners() {
    const t = this.parent.domNode
    Array.prototype.forEach.call(this.subMenuItems, (n) => {
      n.addEventListener('keydown', (l) => {
        let o = !1
        switch (l.code) {
          case Ye.down: {
            this.gotoSubIndex(this.subIndex + 1), (o = !0)
            break
          }
          case Ye.up: {
            this.gotoSubIndex(this.subIndex - 1), (o = !0)
            break
          }
          case Ye.tab: {
            en(t, 'mouseleave')
            break
          }
          case Ye.enter:
          case Ye.space: {
            ;(o = !0), l.currentTarget.click()
            break
          }
        }
        return o && (l.preventDefault(), l.stopPropagation()), !1
      })
    })
  }
}
class gu {
  constructor(t, n) {
    ;(this.domNode = t), (this.submenu = null), (this.submenu = null), this.init(n)
  }
  init(t) {
    this.domNode.setAttribute('tabindex', '0')
    const n = this.domNode.querySelector(`.${t}-menu`)
    n && (this.submenu = new mu(this, n)), this.addListeners()
  }
  addListeners() {
    this.domNode.addEventListener('keydown', (t) => {
      let n = !1
      switch (t.code) {
        case Ye.down: {
          en(t.currentTarget, 'mouseenter'), this.submenu && this.submenu.gotoSubIndex(0), (n = !0)
          break
        }
        case Ye.up: {
          en(t.currentTarget, 'mouseenter'),
            this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
            (n = !0)
          break
        }
        case Ye.tab: {
          en(t.currentTarget, 'mouseleave')
          break
        }
        case Ye.enter:
        case Ye.space: {
          ;(n = !0), t.currentTarget.click()
          break
        }
      }
      n && t.preventDefault()
    })
  }
}
class bu {
  constructor(t, n) {
    ;(this.domNode = t), this.init(n)
  }
  init(t) {
    const n = this.domNode.childNodes
    Array.from(n).forEach((l) => {
      l.nodeType === 1 && new gu(l, t)
    })
  }
}
const yu = ne({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = Y('menu')
    return {
      listeners: {
        onBeforeEnter: (n) => (n.style.opacity = '0.2'),
        onEnter(n, l) {
          Ot(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '1'), l()
        },
        onAfterEnter(n) {
          Lt(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '')
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}),
            Vt(n, e.m('collapse'))
              ? (Lt(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                Ot(n, e.m('collapse')))
              : (Ot(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                Lt(n, e.m('collapse'))),
            (n.style.width = `${n.scrollWidth}px`),
            (n.style.overflow = 'hidden')
        },
        onLeave(n) {
          Ot(n, 'horizontal-collapse-transition'), (n.style.width = `${n.dataset.scrollWidth}px`)
        },
      },
    }
  },
})
function Cu(e, t, n, l, o, s) {
  return (
    A(),
    Q(
      mn,
      Ht({ mode: 'out-in' }, e.listeners),
      { default: G(() => [ce(e.$slots, 'default')]), _: 3 },
      16,
    )
  )
}
var Su = he(yu, [
  ['render', Cu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue',
  ],
])
function zo(e, t) {
  const n = $(() => {
    let o = e.parent
    const s = [t.value]
    for (; o.type.name !== 'ElMenu'; ) o.props.index && s.unshift(o.props.index), (o = o.parent)
    return s
  })
  return {
    parentMenu: $(() => {
      let o = e.parent
      for (; o && !['ElMenu', 'ElSubMenu'].includes(o.type.name); ) o = o.parent
      return o
    }),
    indexPath: n,
  }
}
function wu(e) {
  return $(() => {
    const n = e.backgroundColor
    return n ? new Wa(n).shade(20).toString() : ''
  })
}
const Fo = (e, t) => {
    const n = Y('menu')
    return $(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': wu(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${t}`,
      }),
    )
  },
  Eu = Qe({
    index: { type: String, required: !0 },
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: { type: Boolean, default: void 0 },
    popperOffset: { type: Number, default: 6 },
  }),
  Mn = 'ElSubMenu'
var Jn = ne({
  name: Mn,
  props: Eu,
  setup(e, { slots: t, expose: n }) {
    const l = ge(),
      { indexPath: o, parentMenu: s } = zo(
        l,
        $(() => e.index),
      ),
      r = Y('menu'),
      u = Y('sub-menu'),
      a = Se('rootMenu')
    a || dn(Mn, 'can not inject root menu')
    const i = Se(`subMenu:${s.value.uid}`)
    i || dn(Mn, 'can not inject sub menu')
    const c = P({}),
      p = P({})
    let v
    const b = P(!1),
      d = P(),
      m = P(null),
      w = $(() => (W.value === 'horizontal' && g.value ? 'bottom-start' : 'right-start')),
      E = $(() =>
        (W.value === 'horizontal' && g.value) || (W.value === 'vertical' && !a.props.collapse)
          ? ao
          : Cn,
      ),
      g = $(() => i.level === 0),
      h = $(() => (e.popperAppendToBody === void 0 ? g.value : Boolean(e.popperAppendToBody))),
      C = $(() =>
        a.props.collapse ? `${r.namespace.value}-zoom-in-left` : `${r.namespace.value}-zoom-in-top`,
      ),
      O = $(() =>
        W.value === 'horizontal' && g.value
          ? ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start']
          : ['right-start', 'left-start', 'bottom-start', 'bottom-end', 'top-start', 'top-end'],
      ),
      T = $(() => a.openedMenus.includes(e.index)),
      S = $(() => {
        let M = !1
        return (
          Object.values(c.value).forEach((B) => {
            B.active && (M = !0)
          }),
          Object.values(p.value).forEach((B) => {
            B.active && (M = !0)
          }),
          M
        )
      }),
      x = $(() => a.props.backgroundColor || ''),
      L = $(() => a.props.activeTextColor || ''),
      V = $(() => a.props.textColor || ''),
      W = $(() => a.props.mode),
      D = bt({ index: e.index, indexPath: o, active: S }),
      J = $(() =>
        W.value !== 'horizontal'
          ? { color: V.value }
          : {
              borderBottomColor: S.value ? (a.props.activeTextColor ? L.value : '') : 'transparent',
              color: S.value ? L.value : V.value,
            },
      ),
      ee = () => {
        var M, B, j
        return (j =
          (B = (M = m.value) == null ? void 0 : M.popperRef) == null
            ? void 0
            : B.popperInstanceRef) == null
          ? void 0
          : j.destroy()
      },
      fe = (M) => {
        M || ee()
      },
      le = () => {
        ;(a.props.menuTrigger === 'hover' && a.props.mode === 'horizontal') ||
          (a.props.collapse && a.props.mode === 'vertical') ||
          e.disabled ||
          a.handleSubMenuClick({ index: e.index, indexPath: o.value, active: S.value })
      },
      be = (M, B = e.showTimeout) => {
        var j
        M.type !== 'focus' &&
          ((a.props.menuTrigger === 'click' && a.props.mode === 'horizontal') ||
            (!a.props.collapse && a.props.mode === 'vertical') ||
            e.disabled ||
            ((i.mouseInChild.value = !0),
            v == null || v(),
            ({ stop: v } = vl(() => {
              a.openMenu(e.index, o.value)
            }, B)),
            h.value &&
              ((j = s.value.vnode.el) == null || j.dispatchEvent(new MouseEvent('mouseenter')))))
      },
      R = (M = !1) => {
        var B, j
        ;(a.props.menuTrigger === 'click' && a.props.mode === 'horizontal') ||
          (!a.props.collapse && a.props.mode === 'vertical') ||
          (v == null || v(),
          (i.mouseInChild.value = !1),
          ({ stop: v } = vl(() => !b.value && a.closeMenu(e.index, o.value), e.hideTimeout)),
          h.value &&
            M &&
            ((B = l.parent) == null ? void 0 : B.type.name) === 'ElSubMenu' &&
            ((j = i.handleMouseleave) == null || j.call(i, !0)))
      }
    re(
      () => a.props.collapse,
      (M) => fe(Boolean(M)),
    )
    {
      const M = (j) => {
          p.value[j.index] = j
        },
        B = (j) => {
          delete p.value[j.index]
        }
      mt(`subMenu:${l.uid}`, {
        addSubMenu: M,
        removeSubMenu: B,
        handleMouseleave: R,
        mouseInChild: b,
        level: i.level + 1,
      })
    }
    return (
      n({ opened: T }),
      Ze(() => {
        a.addSubMenu(D), i.addSubMenu(D)
      }),
      gn(() => {
        i.removeSubMenu(D), a.removeSubMenu(D)
      }),
      () => {
        var M
        const B = [
            (M = t.title) == null ? void 0 : M.call(t),
            _(Re, { class: u.e('icon-arrow') }, { default: () => _(E.value) }),
          ],
          j = Fo(a.props, i.level + 1),
          ie = a.isMenuPopup
            ? _(
                yn,
                {
                  ref: m,
                  visible: T.value,
                  effect: 'light',
                  pure: !0,
                  offset: e.popperOffset,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: e.popperClass,
                  placement: w.value,
                  teleported: h.value,
                  fallbackPlacements: O.value,
                  transition: C.value,
                  gpuAcceleration: !1,
                },
                {
                  content: () => {
                    var oe
                    return _(
                      'div',
                      {
                        class: [r.m(W.value), r.m('popup-container'), e.popperClass],
                        onMouseenter: (pe) => be(pe, 100),
                        onMouseleave: () => R(!0),
                        onFocus: (pe) => be(pe, 100),
                      },
                      [
                        _(
                          'ul',
                          { class: [r.b(), r.m('popup'), r.m(`popup-${w.value}`)], style: j.value },
                          [(oe = t.default) == null ? void 0 : oe.call(t)],
                        ),
                      ],
                    )
                  },
                  default: () =>
                    _(
                      'div',
                      {
                        class: u.e('title'),
                        style: [J.value, { backgroundColor: x.value }],
                        onClick: le,
                      },
                      B,
                    ),
                },
              )
            : _(Te, {}, [
                _(
                  'div',
                  {
                    class: u.e('title'),
                    style: [J.value, { backgroundColor: x.value }],
                    ref: d,
                    onClick: le,
                  },
                  B,
                ),
                _(
                  Ji,
                  {},
                  {
                    default: () => {
                      var oe
                      return ze(
                        _('ul', { role: 'menu', class: [r.b(), r.m('inline')], style: j.value }, [
                          (oe = t.default) == null ? void 0 : oe.call(t),
                        ]),
                        [[Tt, T.value]],
                      )
                    },
                  },
                ),
              ])
        return _(
          'li',
          {
            class: [
              u.b(),
              u.is('active', S.value),
              u.is('opened', T.value),
              u.is('disabled', e.disabled),
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: T.value,
            onMouseenter: be,
            onMouseleave: () => R(!0),
            onFocus: be,
          },
          [ie],
        )
      }
    )
  },
})
const $u = Qe({
    mode: { type: String, values: ['horizontal', 'vertical'], default: 'vertical' },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: vt(Array), default: () => bn([]) },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
  }),
  Tn = (e) => Array.isArray(e) && e.every((t) => Xe(t)),
  ku = {
    close: (e, t) => Xe(e) && Tn(t),
    open: (e, t) => Xe(e) && Tn(t),
    select: (e, t, n, l) => Xe(e) && Tn(t) && qt(n) && (l === void 0 || l instanceof Promise),
  }
var Mu = ne({
  name: 'ElMenu',
  props: $u,
  emits: ku,
  setup(e, { emit: t, slots: n, expose: l }) {
    const o = ge(),
      s = o.appContext.config.globalProperties.$router,
      r = P(),
      u = Y('menu'),
      a = Y('sub-menu'),
      i = P(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      c = P(e.defaultActive),
      p = P({}),
      v = P({}),
      b = $(() => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)),
      d = () => {
        const S = c.value && p.value[c.value]
        if (!S || e.mode === 'horizontal' || e.collapse) return
        S.indexPath.forEach((L) => {
          const V = v.value[L]
          V && m(L, V.indexPath)
        })
      },
      m = (S, x) => {
        i.value.includes(S) ||
          (e.uniqueOpened && (i.value = i.value.filter((L) => x.includes(L))),
          i.value.push(S),
          t('open', S, x))
      },
      w = (S, x) => {
        const L = i.value.indexOf(S)
        L !== -1 && i.value.splice(L, 1), t('close', S, x)
      },
      E = ({ index: S, indexPath: x }) => {
        i.value.includes(S) ? w(S, x) : m(S, x)
      },
      g = (S) => {
        ;(e.mode === 'horizontal' || e.collapse) && (i.value = [])
        const { index: x, indexPath: L } = S
        if (!(x === void 0 || L === void 0))
          if (e.router && s) {
            const V = S.route || x,
              W = s.push(V).then((D) => (D || (c.value = x), D))
            t('select', x, L, { index: x, indexPath: L, route: V }, W)
          } else (c.value = x), t('select', x, L, { index: x, indexPath: L })
      },
      h = (S) => {
        const x = p.value,
          L = x[S] || (c.value && x[c.value]) || x[e.defaultActive]
        L ? ((c.value = L.index), d()) : (c.value = S)
      },
      C = () => {
        ve(() => o.proxy.$forceUpdate())
      }
    re(
      () => e.defaultActive,
      (S) => {
        p.value[S] || (c.value = ''), h(S)
      },
    ),
      re(
        () => e.collapse,
        (S) => {
          S && (i.value = [])
        },
      )
    let O
    kt(() => {
      e.mode === 'horizontal' && e.ellipsis ? (O = Qt(r, C).stop) : O == null || O()
    })
    {
      const S = (W) => {
          v.value[W.index] = W
        },
        x = (W) => {
          delete v.value[W.index]
        }
      mt(
        'rootMenu',
        bt({
          props: e,
          openedMenus: i,
          items: p,
          subMenus: v,
          activeIndex: c,
          isMenuPopup: b,
          addMenuItem: (W) => {
            p.value[W.index] = W
          },
          removeMenuItem: (W) => {
            delete p.value[W.index]
          },
          addSubMenu: S,
          removeSubMenu: x,
          openMenu: m,
          closeMenu: w,
          handleMenuItemClick: g,
          handleSubMenuClick: E,
        }),
      ),
        mt(`subMenu:${o.uid}`, { addSubMenu: S, removeSubMenu: x, mouseInChild: P(!1), level: 0 })
    }
    Ze(() => {
      d(), e.mode === 'horizontal' && new bu(o.vnode.el, u.namespace.value)
    }),
      l({
        open: (x) => {
          const { indexPath: L } = v.value[x]
          L.forEach((V) => m(V, L))
        },
        close: w,
        handleResize: C,
      })
    const T = (S) => {
      const x = Array.isArray(S) ? S : [S],
        L = []
      return (
        x.forEach((V) => {
          Array.isArray(V.children) ? L.push(...T(V.children)) : L.push(V)
        }),
        L
      )
    }
    return () => {
      var S, x, L, V
      let W = (x = (S = n.default) == null ? void 0 : S.call(n)) != null ? x : []
      const D = []
      if (e.mode === 'horizontal' && r.value) {
        const fe = Array.from(
            (V = (L = r.value) == null ? void 0 : L.childNodes) != null ? V : [],
          ).filter((ae) => ae.nodeName !== '#text' || ae.nodeValue),
          le = T(W),
          be = 64,
          R = Number.parseInt(getComputedStyle(r.value).paddingLeft, 10),
          M = Number.parseInt(getComputedStyle(r.value).paddingRight, 10),
          B = r.value.clientWidth - R - M
        let j = 0,
          ie = 0
        fe.forEach((ae, ye) => {
          ;(j += ae.offsetWidth || 0), j <= B - be && (ie = ye + 1)
        })
        const oe = le.slice(0, ie),
          pe = le.slice(ie)
        ;(pe == null ? void 0 : pe.length) &&
          e.ellipsis &&
          ((W = oe),
          D.push(
            _(
              Jn,
              { index: 'sub-menu-more', class: a.e('hide-arrow') },
              {
                title: () => _(Re, { class: a.e('icon-more') }, { default: () => _(Na) }),
                default: () => pe,
              },
            ),
          ))
      }
      const J = Fo(e, 0),
        ee = _(
          'ul',
          {
            key: String(e.collapse),
            role: 'menubar',
            ref: r,
            style: J.value,
            class: { [u.b()]: !0, [u.m(e.mode)]: !0, [u.m('collapse')]: e.collapse },
          },
          [...W, ...D],
        )
      return e.collapseTransition && e.mode === 'vertical' ? _(Su, () => ee) : ee
    }
  },
})
const Tu = Qe({
    index: { type: vt([String, null]), default: null },
    route: { type: vt([String, Object]) },
    disabled: Boolean,
  }),
  xu = { click: (e) => Xe(e.index) && Array.isArray(e.indexPath) },
  xn = 'ElMenuItem',
  Pu = ne({
    name: xn,
    components: { ElTooltip: yn },
    props: Tu,
    emits: xu,
    setup(e, { emit: t }) {
      const n = ge(),
        l = Se('rootMenu'),
        o = Y('menu'),
        s = Y('menu-item')
      l || dn(xn, 'can not inject root menu')
      const { parentMenu: r, indexPath: u } = zo(n, Ql(e, 'index')),
        a = Se(`subMenu:${r.value.uid}`)
      a || dn(xn, 'can not inject sub menu')
      const i = $(() => e.index === l.activeIndex),
        c = bt({ index: e.index, indexPath: u, active: i }),
        p = () => {
          e.disabled ||
            (l.handleMenuItemClick({ index: e.index, indexPath: u.value, route: e.route }),
            t('click', c))
        }
      return (
        Ze(() => {
          a.addSubMenu(c), l.addMenuItem(c)
        }),
        gn(() => {
          a.removeSubMenu(c), l.removeMenuItem(c)
        }),
        {
          Effect: $a,
          parentMenu: r,
          rootMenu: l,
          active: i,
          nsMenu: o,
          nsMenuItem: s,
          handleClick: p,
        }
      )
    },
  })
function Au(e, t, n, l, o, s) {
  const r = $e('el-tooltip')
  return (
    A(),
    F(
      'li',
      {
        class: I([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled),
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u)),
      },
      [
        e.parentMenu.type.name === 'ElMenu' && e.rootMenu.props.collapse && e.$slots.title
          ? (A(),
            Q(
              r,
              {
                key: 0,
                effect: e.Effect.DARK,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: '',
              },
              {
                content: G(() => [ce(e.$slots, 'title')]),
                default: G(() => [
                  Z(
                    'div',
                    { class: I(e.nsMenu.be('tooltip', 'trigger')) },
                    [ce(e.$slots, 'default')],
                    2,
                  ),
                ]),
                _: 3,
              },
              8,
              ['effect'],
            ))
          : (A(), F(Te, { key: 1 }, [ce(e.$slots, 'default'), ce(e.$slots, 'title')], 64)),
      ],
      2,
    )
  )
}
var Bo = he(Pu, [
  ['render', Au],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue',
  ],
])
const Ou = { title: String },
  Lu = 'ElMenuItemGroup',
  Nu = ne({
    name: Lu,
    props: Ou,
    setup() {
      return { ns: Y('menu-item-group') }
    },
  })
function Iu(e, t, n, l, o, s) {
  return (
    A(),
    F(
      'li',
      { class: I(e.ns.b()) },
      [
        Z(
          'div',
          { class: I(e.ns.e('title')) },
          [
            e.$slots.title
              ? ce(e.$slots, 'title', { key: 1 })
              : (A(), F(Te, { key: 0 }, [at(ue(e.title), 1)], 64)),
          ],
          2,
        ),
        Z('ul', null, [ce(e.$slots, 'default')]),
      ],
      2,
    )
  )
}
var Wo = he(Nu, [
  ['render', Iu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue',
  ],
])
const Ru = gt(Mu, { MenuItem: Bo, MenuItemGroup: Wo, SubMenu: Jn }),
  zu = Ke(Bo)
Ke(Wo)
const Fu = Ke(Jn),
  Bu = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
  }),
  Wu = { click: (e) => e instanceof MouseEvent },
  _u = ['disabled', 'aria-disabled'],
  Hu = { key: 0 },
  Vu = { name: 'ElPaginationPrev' },
  Du = ne(
    Ce(se({}, Vu), {
      props: Bu,
      emits: Wu,
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage <= 1)
        return (l, o) => (
          A(),
          F(
            'button',
            {
              type: 'button',
              class: 'btn-prev',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: o[0] || (o[0] = (s) => l.$emit('click', s)),
            },
            [
              l.prevText
                ? (A(), F('span', Hu, ue(l.prevText), 1))
                : (A(), Q(f(Re), { key: 1 }, { default: G(() => [X(f(Ia))]), _: 1 })),
            ],
            8,
            _u,
          )
        )
      },
    }),
  )
var Ku = he(Du, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue',
  ],
])
const ju = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
  }),
  qu = ['disabled', 'aria-disabled'],
  Gu = { key: 0 },
  Uu = { name: 'ElPaginationNext' },
  Yu = ne(
    Ce(se({}, Uu), {
      props: ju,
      emits: ['click'],
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0)
        return (l, o) => (
          A(),
          F(
            'button',
            {
              type: 'button',
              class: 'btn-next',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: o[0] || (o[0] = (s) => l.$emit('click', s)),
            },
            [
              l.nextText
                ? (A(), F('span', Gu, ue(l.nextText), 1))
                : (A(), Q(f(Re), { key: 1 }, { default: G(() => [X(f(Cn))]), _: 1 })),
            ],
            8,
            qu,
          )
        )
      },
    }),
  )
var Xu = he(Yu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue',
  ],
])
const _o = 'ElSelectGroup',
  Sn = 'ElSelect'
function Qu(e, t) {
  const n = Se(Sn),
    l = Se(_o, { disabled: !1 }),
    o = $(() => Object.prototype.toString.call(e.value).toLowerCase() === '[object object]'),
    s = $(() =>
      n.props.multiple ? p(n.props.modelValue, e.value) : v(e.value, n.props.modelValue),
    ),
    r = $(() => {
      if (n.props.multiple) {
        const m = n.props.modelValue || []
        return !s.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0
      } else return !1
    }),
    u = $(() => e.label || (o.value ? '' : e.value)),
    a = $(() => e.value || e.label || ''),
    i = $(() => e.disabled || t.groupDisabled || r.value),
    c = ge(),
    p = (m = [], w) => {
      if (o.value) {
        const E = n.props.valueKey
        return m && m.some((g) => He(g, E) === He(w, E))
      } else return m && m.includes(w)
    },
    v = (m, w) => {
      if (o.value) {
        const { valueKey: E } = n.props
        return He(m, E) === He(w, E)
      } else return m === w
    },
    b = () => {
      !e.disabled && !l.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy))
    }
  re(
    () => u.value,
    () => {
      !e.created && !n.props.remote && n.setSelected()
    },
  ),
    re(
      () => e.value,
      (m, w) => {
        const { remote: E, valueKey: g } = n.props
        if (!e.created && !E) {
          if (g && typeof m == 'object' && typeof w == 'object' && m[g] === w[g]) return
          n.setSelected()
        }
      },
    ),
    re(
      () => l.disabled,
      () => {
        t.groupDisabled = l.disabled
      },
      { immediate: !0 },
    )
  const { queryChange: d } = Yn(n)
  return (
    re(d, (m) => {
      const { query: w } = f(m),
        E = new RegExp(ei(w), 'i')
      ;(t.visible = E.test(u.value) || e.created), t.visible || n.filteredOptionsCount--
    }),
    { select: n, currentLabel: u, currentValue: a, itemSelected: s, isDisabled: i, hoverItem: b }
  )
}
const Zu = ne({
  name: 'ElOption',
  componentName: 'ElOption',
  props: {
    value: { required: !0, type: [String, Number, Boolean, Object] },
    label: [String, Number],
    created: Boolean,
    disabled: { type: Boolean, default: !1 },
  },
  setup(e) {
    const t = Y('select'),
      n = bt({ index: -1, groupDisabled: !1, visible: !0, hitState: !1, hover: !1 }),
      { currentLabel: l, itemSelected: o, isDisabled: s, select: r, hoverItem: u } = Qu(e, n),
      { visible: a, hover: i } = Xt(n),
      c = ge().proxy,
      p = c.value
    r.onOptionCreate(c),
      gn(() => {
        const { selected: b } = r,
          m = (r.props.multiple ? b : [b]).some((w) => w.value === c.value)
        ve(() => {
          r.cachedOptions.get(p) === c && !m && r.cachedOptions.delete(p)
        }),
          r.onOptionDestroy(p, c)
      })
    function v() {
      e.disabled !== !0 && n.groupDisabled !== !0 && r.handleOptionSelect(c, !0)
    }
    return {
      ns: t,
      currentLabel: l,
      itemSelected: o,
      isDisabled: s,
      select: r,
      hoverItem: u,
      visible: a,
      hover: i,
      selectOptionClick: v,
      states: n,
    }
  },
})
function Ju(e, t, n, l, o, s) {
  return ze(
    (A(),
    F(
      'li',
      {
        class: I([
          e.ns.be('dropdown', 'item'),
          e.ns.is('disabled', e.isDisabled),
          { selected: e.itemSelected, hover: e.hover },
        ]),
        onMouseenter: t[0] || (t[0] = (...r) => e.hoverItem && e.hoverItem(...r)),
        onClick:
          t[1] || (t[1] = Ue((...r) => e.selectOptionClick && e.selectOptionClick(...r), ['stop'])),
      },
      [ce(e.$slots, 'default', {}, () => [Z('span', null, ue(e.currentLabel), 1)])],
      34,
    )),
    [[Tt, e.visible]],
  )
}
var el = he(Zu, [
  ['render', Ju],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue',
  ],
])
const ec = ne({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = Se(Sn),
      t = Y('select'),
      n = $(() => e.props.popperClass),
      l = $(() => e.props.multiple),
      o = $(() => e.props.fitInputWidth),
      s = P('')
    function r() {
      var u
      s.value = `${(u = e.selectWrapper) == null ? void 0 : u.offsetWidth}px`
    }
    return (
      Ze(() => {
        r(), Qt(e.selectWrapper, r)
      }),
      { ns: t, minWidth: s, popperClass: n, isMultiple: l, isFitInputWidth: o }
    )
  },
})
function tc(e, t, n, l, o, s) {
  return (
    A(),
    F(
      'div',
      {
        class: I([e.ns.b('dropdown'), e.ns.is('multiple', e.isMultiple), e.popperClass]),
        style: ke({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth }),
      },
      [ce(e.$slots, 'default')],
      6,
    )
  )
}
var nc = he(ec, [
  ['render', tc],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue',
  ],
])
function lc(e) {
  const { t } = st()
  return bt({
    options: new Map(),
    cachedOptions: new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
  })
}
const oc = (e, t, n) => {
    const { t: l } = st(),
      o = Y('select'),
      s = P(null),
      r = P(null),
      u = P(null),
      a = P(null),
      i = P(null),
      c = P(null),
      p = P(-1),
      v = _t({ query: '' }),
      b = _t(''),
      d = Se(Zl, {}),
      m = Se(Jl, {}),
      w = $(() => !e.filterable || e.multiple || !t.visible),
      E = $(() => e.disabled || d.disabled),
      g = $(() => {
        const y = e.multiple
          ? Array.isArray(e.modelValue) && e.modelValue.length > 0
          : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== ''
        return e.clearable && !E.value && t.inputHovering && y
      }),
      h = $(() => (e.remote && e.filterable ? '' : e.suffixIcon)),
      C = $(() => o.is('reverse', h.value && t.visible)),
      O = $(() => (e.remote ? 300 : 0)),
      T = $(() =>
        e.loading
          ? e.loadingText || l('el.select.loading')
          : e.remote && t.query === '' && t.options.size === 0
          ? !1
          : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0
          ? e.noMatchText || l('el.select.noMatch')
          : t.options.size === 0
          ? e.noDataText || l('el.select.noData')
          : null,
      ),
      S = $(() => Array.from(t.options.values())),
      x = $(() => Array.from(t.cachedOptions.values())),
      L = $(() => {
        const y = S.value.filter((k) => !k.created).some((k) => k.currentLabel === t.query)
        return e.filterable && e.allowCreate && t.query !== '' && !y
      }),
      V = Mt(),
      W = $(() => (['small'].includes(V.value) ? 'small' : 'default')),
      D = $({
        get() {
          return t.visible && T.value !== !1
        },
        set(y) {
          t.visible = y
        },
      })
    re([() => E.value, () => V.value, () => d.size], () => {
      ve(() => {
        J()
      })
    }),
      re(
        () => e.placeholder,
        (y) => {
          t.cachedPlaceHolder = t.currentPlaceholder = y
        },
      ),
      re(
        () => e.modelValue,
        (y, k) => {
          var z
          e.multiple &&
            (J(),
            (y && y.length > 0) || (r.value && t.query !== '')
              ? (t.currentPlaceholder = '')
              : (t.currentPlaceholder = t.cachedPlaceHolder),
            e.filterable && !e.reserveKeyword && ((t.query = ''), ee(t.query))),
            be(),
            e.filterable && !e.multiple && (t.inputLength = 20),
            !zn(y, k) &&
              e.validateEvent &&
              ((z = m.validate) == null || z.call(m, 'change').catch((K) => Nt()))
        },
        { flush: 'post', deep: !0 },
      ),
      re(
        () => t.visible,
        (y) => {
          var k, z, K
          y
            ? ((z = (k = u.value) == null ? void 0 : k.updatePopper) == null || z.call(k),
              e.filterable &&
                ((t.filteredOptionsCount = t.optionsCount),
                (t.query = e.remote ? '' : t.selectedLabel),
                e.multiple
                  ? (K = r.value) == null || K.focus()
                  : t.selectedLabel &&
                    ((t.currentPlaceholder = `${t.selectedLabel}`), (t.selectedLabel = '')),
                ee(t.query),
                !e.multiple && !e.remote && ((v.value.query = ''), Wt(v), Wt(b))))
            : (r.value && r.value.blur(),
              (t.query = ''),
              (t.previousQuery = null),
              (t.selectedLabel = ''),
              (t.inputLength = 20),
              (t.menuVisibleOnFocus = !1),
              M(),
              ve(() => {
                r.value &&
                  r.value.value === '' &&
                  t.selected.length === 0 &&
                  (t.currentPlaceholder = t.cachedPlaceHolder)
              }),
              e.multiple ||
                (t.selected &&
                  (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel
                    ? (t.selectedLabel = t.createdLabel)
                    : (t.selectedLabel = t.selected.currentLabel),
                  e.filterable && (t.query = t.selectedLabel)),
                e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))),
            n.emit('visible-change', y)
        },
      ),
      re(
        () => t.options.entries(),
        () => {
          var y, k, z
          if (!Pt) return
          ;(k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y),
            e.multiple && J()
          const K = ((z = i.value) == null ? void 0 : z.querySelectorAll('input')) || []
          Array.from(K).includes(document.activeElement) || be(),
            e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le()
        },
        { flush: 'post' },
      ),
      re(
        () => t.hoverIndex,
        (y) => {
          typeof y == 'number' && y > -1 && (p.value = S.value[y] || {}),
            S.value.forEach((k) => {
              k.hover = p.value === k
            })
        },
      )
    const J = () => {
        ;(e.collapseTags && !e.filterable) ||
          ve(() => {
            var y, k
            if (!s.value) return
            const z = s.value.$el.querySelector('input'),
              K = a.value,
              de = ti(V.value || d.size)
            ;(z.style.height = `${
              (t.selected.length === 0
                ? de
                : Math.max(K ? K.clientHeight + (K.clientHeight > de ? 6 : 0) : 0, de)) - 2
            }px`),
              (t.tagInMultiLine = Number.parseFloat(z.style.height) >= de),
              t.visible &&
                T.value !== !1 &&
                ((k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y))
          })
      },
      ee = (y) => {
        if (!(t.previousQuery === y || t.isOnComposition)) {
          if (
            t.previousQuery === null &&
            (typeof e.filterMethod == 'function' || typeof e.remoteMethod == 'function')
          ) {
            t.previousQuery = y
            return
          }
          ;(t.previousQuery = y),
            ve(() => {
              var k, z
              t.visible &&
                ((z = (k = u.value) == null ? void 0 : k.updatePopper) == null || z.call(k))
            }),
            (t.hoverIndex = -1),
            e.multiple &&
              e.filterable &&
              ve(() => {
                const k = r.value.value.length * 15 + 20
                ;(t.inputLength = e.collapseTags ? Math.min(50, k) : k), fe(), J()
              }),
            e.remote && typeof e.remoteMethod == 'function'
              ? ((t.hoverIndex = -1), e.remoteMethod(y))
              : typeof e.filterMethod == 'function'
              ? (e.filterMethod(y), Wt(b))
              : ((t.filteredOptionsCount = t.optionsCount), (v.value.query = y), Wt(v), Wt(b)),
            e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && le()
        }
      },
      fe = () => {
        t.currentPlaceholder !== '' &&
          (t.currentPlaceholder = r.value.value ? '' : t.cachedPlaceHolder)
      },
      le = () => {
        const y = S.value.filter((K) => K.visible && !K.disabled && !K.states.groupDisabled),
          k = y.find((K) => K.created),
          z = y[0]
        t.hoverIndex = Ve(S.value, k || z)
      },
      be = () => {
        var y
        if (e.multiple) t.selectedLabel = ''
        else {
          const z = R(e.modelValue)
          ;(y = z.props) != null && y.created
            ? ((t.createdLabel = z.props.value), (t.createdSelected = !0))
            : (t.createdSelected = !1),
            (t.selectedLabel = z.currentLabel),
            (t.selected = z),
            e.filterable && (t.query = t.selectedLabel)
          return
        }
        const k = []
        Array.isArray(e.modelValue) &&
          e.modelValue.forEach((z) => {
            k.push(R(z))
          }),
          (t.selected = k),
          ve(() => {
            J()
          })
      },
      R = (y) => {
        let k
        const z = wn(y).toLowerCase() === 'object',
          K = wn(y).toLowerCase() === 'null',
          de = wn(y).toLowerCase() === 'undefined'
        for (let je = t.cachedOptions.size - 1; je >= 0; je--) {
          const Fe = x.value[je]
          if (z ? He(Fe.value, e.valueKey) === He(y, e.valueKey) : Fe.value === y) {
            k = { value: y, currentLabel: Fe.currentLabel, isDisabled: Fe.isDisabled }
            break
          }
        }
        if (k) return k
        const Oe = z ? y.label : !K && !de ? y : '',
          Me = { value: y, currentLabel: Oe }
        return e.multiple && (Me.hitState = !1), Me
      },
      M = () => {
        setTimeout(() => {
          const y = e.valueKey
          e.multiple
            ? t.selected.length > 0
              ? (t.hoverIndex = Math.min.apply(
                  null,
                  t.selected.map((k) => S.value.findIndex((z) => He(z, y) === He(k, y))),
                ))
              : (t.hoverIndex = -1)
            : (t.hoverIndex = S.value.findIndex((k) => Pe(k) === Pe(t.selected)))
        }, 300)
      },
      B = () => {
        var y, k
        j(),
          (k = (y = u.value) == null ? void 0 : y.updatePopper) == null || k.call(y),
          e.multiple && !e.filterable && J()
      },
      j = () => {
        var y
        t.inputWidth = (y = s.value) == null ? void 0 : y.$el.getBoundingClientRect().width
      },
      ie = () => {
        e.filterable && t.query !== t.selectedLabel && ((t.query = t.selectedLabel), ee(t.query))
      },
      oe = It(() => {
        ie()
      }, O.value),
      pe = It((y) => {
        ee(y.target.value)
      }, O.value),
      ae = (y) => {
        zn(e.modelValue, y) || n.emit(lo, y)
      },
      ye = (y) => {
        if (y.target.value.length <= 0 && !nt()) {
          const k = e.modelValue.slice()
          k.pop(), n.emit(Ie, k), ae(k)
        }
        y.target.value.length === 1 &&
          e.modelValue.length === 0 &&
          (t.currentPlaceholder = t.cachedPlaceHolder)
      },
      we = (y, k) => {
        const z = t.selected.indexOf(k)
        if (z > -1 && !E.value) {
          const K = e.modelValue.slice()
          K.splice(z, 1), n.emit(Ie, K), ae(K), n.emit('remove-tag', k.value)
        }
        y.stopPropagation()
      },
      Ee = (y) => {
        y.stopPropagation()
        const k = e.multiple ? [] : ''
        if (typeof k != 'string') for (const z of t.selected) z.isDisabled && k.push(z.value)
        n.emit(Ie, k), ae(k), (t.visible = !1), n.emit('clear')
      },
      Ae = (y, k) => {
        var z
        if (e.multiple) {
          const K = (e.modelValue || []).slice(),
            de = Ve(K, y.value)
          de > -1
            ? K.splice(de, 1)
            : (e.multipleLimit <= 0 || K.length < e.multipleLimit) && K.push(y.value),
            n.emit(Ie, K),
            ae(K),
            y.created && ((t.query = ''), ee(''), (t.inputLength = 20)),
            e.filterable && ((z = r.value) == null || z.focus())
        } else n.emit(Ie, y.value), ae(y.value), (t.visible = !1)
        ;(t.isSilentBlur = k),
          rt(),
          !t.visible &&
            ve(() => {
              We(y)
            })
      },
      Ve = (y = [], k) => {
        if (!qt(k)) return y.indexOf(k)
        const z = e.valueKey
        let K = -1
        return y.some((de, Oe) => (He(de, z) === He(k, z) ? ((K = Oe), !0) : !1)), K
      },
      rt = () => {
        t.softFocus = !0
        const y = r.value || s.value
        y && (y == null || y.focus())
      },
      We = (y) => {
        var k, z, K, de, Oe
        const Me = Array.isArray(y) ? y[0] : y
        let je = null
        if (Me != null && Me.value) {
          const Fe = S.value.filter((Le) => Le.value === Me.value)
          Fe.length > 0 && (je = Fe[0].$el)
        }
        if (u.value && je) {
          const Fe =
            (de =
              (K =
                (z = (k = u.value) == null ? void 0 : k.popperRef) == null
                  ? void 0
                  : z.contentRef) == null
                ? void 0
                : K.querySelector) == null
              ? void 0
              : de.call(K, `.${o.be('dropdown', 'wrap')}`)
          Fe && wa(Fe, je)
        }
        ;(Oe = c.value) == null || Oe.handleScroll()
      },
      tt = (y) => {
        t.optionsCount++,
          t.filteredOptionsCount++,
          t.options.set(y.value, y),
          t.cachedOptions.set(y.value, y)
      },
      yt = (y, k) => {
        t.options.get(y) === k && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(y))
      },
      it = (y) => {
        y.code !== Ye.backspace && nt(!1), (t.inputLength = r.value.value.length * 15 + 20), J()
      },
      nt = (y) => {
        if (!Array.isArray(t.selected)) return
        const k = t.selected[t.selected.length - 1]
        if (!!k)
          return y === !0 || y === !1
            ? ((k.hitState = y), y)
            : ((k.hitState = !k.hitState), k.hitState)
      },
      Je = (y) => {
        const k = y.target.value
        if (y.type === 'compositionend') (t.isOnComposition = !1), ve(() => ee(k))
        else {
          const z = k[k.length - 1] || ''
          t.isOnComposition = !mo(z)
        }
      },
      lt = () => {
        ve(() => We(t.selected))
      },
      Ct = (y) => {
        t.softFocus
          ? (t.softFocus = !1)
          : ((e.automaticDropdown || e.filterable) &&
              (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), (t.visible = !0)),
            n.emit('focus', y))
      },
      ut = () => {
        var y
        ;(t.visible = !1), (y = s.value) == null || y.blur()
      },
      ct = (y) => {
        ve(() => {
          t.isSilentBlur ? (t.isSilentBlur = !1) : n.emit('blur', y)
        }),
          (t.softFocus = !1)
      },
      St = (y) => {
        Ee(y)
      },
      dt = () => {
        t.visible = !1
      },
      N = (y) => {
        t.visible && (y.preventDefault(), y.stopPropagation(), (t.visible = !1))
      },
      te = () => {
        var y
        E.value ||
          (t.menuVisibleOnFocus ? (t.menuVisibleOnFocus = !1) : (t.visible = !t.visible),
          t.visible && ((y = r.value || s.value) == null || y.focus()))
      },
      _e = () => {
        t.visible ? S.value[t.hoverIndex] && Ae(S.value[t.hoverIndex], void 0) : te()
      },
      Pe = (y) => (qt(y.value) ? He(y.value, e.valueKey) : y.value),
      H = $(() => S.value.filter((y) => y.visible).every((y) => y.disabled)),
      q = (y) => {
        if (!t.visible) {
          t.visible = !0
          return
        }
        if (
          !(t.options.size === 0 || t.filteredOptionsCount === 0) &&
          !t.isOnComposition &&
          !H.value
        ) {
          y === 'next'
            ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0))
            : y === 'prev' &&
              (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1))
          const k = S.value[t.hoverIndex]
          ;(k.disabled === !0 || k.states.groupDisabled === !0 || !k.visible) && q(y),
            ve(() => We(p.value))
        }
      }
    return {
      optionsArray: S,
      selectSize: V,
      handleResize: B,
      debouncedOnInputChange: oe,
      debouncedQueryChange: pe,
      deletePrevTag: ye,
      deleteTag: we,
      deleteSelected: Ee,
      handleOptionSelect: Ae,
      scrollToOption: We,
      readonly: w,
      resetInputHeight: J,
      showClose: g,
      iconComponent: h,
      iconReverse: C,
      showNewOption: L,
      collapseTagSize: W,
      setSelected: be,
      managePlaceholder: fe,
      selectDisabled: E,
      emptyText: T,
      toggleLastOptionHitState: nt,
      resetInputState: it,
      handleComposition: Je,
      onOptionCreate: tt,
      onOptionDestroy: yt,
      handleMenuEnter: lt,
      handleFocus: Ct,
      blur: ut,
      handleBlur: ct,
      handleClearClick: St,
      handleClose: dt,
      handleKeydownEscape: N,
      toggleMenu: te,
      selectOption: _e,
      getValueKey: Pe,
      navigateOptions: q,
      dropMenuVisible: D,
      queryChange: v,
      groupQueryChange: b,
      reference: s,
      input: r,
      tooltipRef: u,
      tags: a,
      selectWrapper: i,
      scrollbar: c,
    }
  },
  Dl = 'ElSelect',
  ac = ne({
    name: Dl,
    componentName: Dl,
    components: {
      ElInput: bo,
      ElSelectMenu: nc,
      ElOption: el,
      ElTag: Xi,
      ElScrollbar: Qn,
      ElTooltip: yn,
      ElIcon: Re,
    },
    directives: { ClickOutside: ro },
    props: {
      name: String,
      id: String,
      modelValue: { type: [Array, String, Number, Boolean, Object], default: void 0 },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: ni },
      effect: { type: String, default: 'light' },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: { type: String, default: '' },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: { type: Number, default: 0 },
      placeholder: { type: String },
      defaultFirstOption: Boolean,
      reserveKeyword: { type: Boolean, default: !0 },
      valueKey: { type: String, default: 'value' },
      collapseTags: Boolean,
      collapseTagsTooltip: { type: Boolean, default: !1 },
      teleported: ka.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: [String, Object], default: oo },
      fitInputWidth: { type: Boolean, default: !1 },
      suffixIcon: { type: [String, Object], default: so },
      tagType: Ce(se({}, Oo.type), { default: 'info' }),
      validateEvent: { type: Boolean, default: !0 },
    },
    emits: [Ie, lo, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, t) {
      const n = Y('select'),
        l = Y('input'),
        { t: o } = st(),
        s = lc(e),
        {
          optionsArray: r,
          selectSize: u,
          readonly: a,
          handleResize: i,
          collapseTagSize: c,
          debouncedOnInputChange: p,
          debouncedQueryChange: v,
          deletePrevTag: b,
          deleteTag: d,
          deleteSelected: m,
          handleOptionSelect: w,
          scrollToOption: E,
          setSelected: g,
          resetInputHeight: h,
          managePlaceholder: C,
          showClose: O,
          selectDisabled: T,
          iconComponent: S,
          iconReverse: x,
          showNewOption: L,
          emptyText: V,
          toggleLastOptionHitState: W,
          resetInputState: D,
          handleComposition: J,
          onOptionCreate: ee,
          onOptionDestroy: fe,
          handleMenuEnter: le,
          handleFocus: be,
          blur: R,
          handleBlur: M,
          handleClearClick: B,
          handleClose: j,
          handleKeydownEscape: ie,
          toggleMenu: oe,
          selectOption: pe,
          getValueKey: ae,
          navigateOptions: ye,
          dropMenuVisible: we,
          reference: Ee,
          input: Ae,
          tooltipRef: Ve,
          tags: rt,
          selectWrapper: We,
          scrollbar: tt,
          queryChange: yt,
          groupQueryChange: it,
        } = oc(e, s, t),
        { focus: nt } = si(Ee),
        {
          inputWidth: Je,
          selected: lt,
          inputLength: Ct,
          filteredOptionsCount: ut,
          visible: ct,
          softFocus: St,
          selectedLabel: dt,
          hoverIndex: N,
          query: te,
          inputHovering: _e,
          currentPlaceholder: Pe,
          menuVisibleOnFocus: H,
          isOnComposition: q,
          isSilentBlur: y,
          options: k,
          cachedOptions: z,
          optionsCount: K,
          prefixWidth: de,
          tagInMultiLine: Oe,
        } = Xt(s),
        Me = $(() => {
          const Le = [n.b()],
            qe = f(u)
          return qe && Le.push(n.m(qe)), e.disabled && Le.push(n.m('disabled')), Le
        }),
        je = $(() => ({ maxWidth: `${f(Je) - 32}px`, width: '100%' }))
      mt(
        Sn,
        bt({
          props: e,
          options: k,
          optionsArray: r,
          cachedOptions: z,
          optionsCount: K,
          filteredOptionsCount: ut,
          hoverIndex: N,
          handleOptionSelect: w,
          onOptionCreate: ee,
          onOptionDestroy: fe,
          selectWrapper: We,
          selected: lt,
          setSelected: g,
          queryChange: yt,
          groupQueryChange: it,
        }),
      ),
        Ze(() => {
          ;(s.cachedPlaceHolder = Pe.value = e.placeholder || o('el.select.placeholder')),
            e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Pe.value = ''),
            Qt(We, i),
            e.remote && e.multiple && h(),
            ve(() => {
              const Le = Ee.value && Ee.value.$el
              if (!!Le && ((Je.value = Le.getBoundingClientRect().width), t.slots.prefix)) {
                const qe = Le.querySelector(`.${l.e('prefix')}`)
                de.value = Math.max(qe.getBoundingClientRect().width + 5, 30)
              }
            }),
            g()
        }),
        e.multiple && !Array.isArray(e.modelValue) && t.emit(Ie, []),
        !e.multiple && Array.isArray(e.modelValue) && t.emit(Ie, '')
      const Fe = $(() => {
        var Le, qe
        return (qe = (Le = Ve.value) == null ? void 0 : Le.popperRef) == null
          ? void 0
          : qe.contentRef
      })
      return {
        tagInMultiLine: Oe,
        prefixWidth: de,
        selectSize: u,
        readonly: a,
        handleResize: i,
        collapseTagSize: c,
        debouncedOnInputChange: p,
        debouncedQueryChange: v,
        deletePrevTag: b,
        deleteTag: d,
        deleteSelected: m,
        handleOptionSelect: w,
        scrollToOption: E,
        inputWidth: Je,
        selected: lt,
        inputLength: Ct,
        filteredOptionsCount: ut,
        visible: ct,
        softFocus: St,
        selectedLabel: dt,
        hoverIndex: N,
        query: te,
        inputHovering: _e,
        currentPlaceholder: Pe,
        menuVisibleOnFocus: H,
        isOnComposition: q,
        isSilentBlur: y,
        options: k,
        resetInputHeight: h,
        managePlaceholder: C,
        showClose: O,
        selectDisabled: T,
        iconComponent: S,
        iconReverse: x,
        showNewOption: L,
        emptyText: V,
        toggleLastOptionHitState: W,
        resetInputState: D,
        handleComposition: J,
        handleMenuEnter: le,
        handleFocus: be,
        blur: R,
        handleBlur: M,
        handleClearClick: B,
        handleClose: j,
        handleKeydownEscape: ie,
        toggleMenu: oe,
        selectOption: pe,
        getValueKey: ae,
        navigateOptions: ye,
        dropMenuVisible: we,
        focus: nt,
        reference: Ee,
        input: Ae,
        tooltipRef: Ve,
        popperPaneRef: Fe,
        tags: rt,
        selectWrapper: We,
        scrollbar: tt,
        wrapperKls: Me,
        selectTagsStyle: je,
        nsSelect: n,
      }
    },
  }),
  sc = { class: 'select-trigger' },
  rc = ['disabled', 'autocomplete'],
  ic = {
    style: {
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  }
function uc(e, t, n, l, o, s) {
  const r = $e('el-tag'),
    u = $e('el-tooltip'),
    a = $e('el-icon'),
    i = $e('el-input'),
    c = $e('el-option'),
    p = $e('el-scrollbar'),
    v = $e('el-select-menu'),
    b = Xn('click-outside')
  return ze(
    (A(),
    F(
      'div',
      {
        ref: 'selectWrapper',
        class: I(e.wrapperKls),
        onClick: t[22] || (t[22] = Ue((...d) => e.toggleMenu && e.toggleMenu(...d), ['stop'])),
      },
      [
        X(
          u,
          {
            ref: 'tooltipRef',
            visible: e.dropMenuVisible,
            placement: 'bottom-start',
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'fallback-placements': ['bottom-start', 'top-start', 'right', 'left'],
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter,
          },
          {
            default: G(() => [
              Z('div', sc, [
                e.multiple
                  ? (A(),
                    F(
                      'div',
                      {
                        key: 0,
                        ref: 'tags',
                        class: I(e.nsSelect.e('tags')),
                        style: ke(e.selectTagsStyle),
                      },
                      [
                        e.collapseTags && e.selected.length
                          ? (A(),
                            F(
                              'span',
                              {
                                key: 0,
                                class: I([
                                  e.nsSelect.b('tags-wrapper'),
                                  { 'has-prefix': e.prefixWidth && e.selected.length },
                                ]),
                              },
                              [
                                X(
                                  r,
                                  {
                                    closable: !e.selectDisabled && !e.selected[0].isDisabled,
                                    size: e.collapseTagSize,
                                    hit: e.selected[0].hitState,
                                    type: e.tagType,
                                    'disable-transitions': '',
                                    onClose: t[0] || (t[0] = (d) => e.deleteTag(d, e.selected[0])),
                                  },
                                  {
                                    default: G(() => [
                                      Z(
                                        'span',
                                        {
                                          class: I(e.nsSelect.e('tags-text')),
                                          style: ke({ maxWidth: e.inputWidth - 123 + 'px' }),
                                        },
                                        ue(e.selected[0].currentLabel),
                                        7,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['closable', 'size', 'hit', 'type'],
                                ),
                                e.selected.length > 1
                                  ? (A(),
                                    Q(
                                      r,
                                      {
                                        key: 0,
                                        closable: !1,
                                        size: e.collapseTagSize,
                                        type: e.tagType,
                                        'disable-transitions': '',
                                      },
                                      {
                                        default: G(() => [
                                          e.collapseTagsTooltip
                                            ? (A(),
                                              Q(
                                                u,
                                                {
                                                  key: 0,
                                                  disabled: e.dropMenuVisible,
                                                  'fallback-placements': [
                                                    'bottom',
                                                    'top',
                                                    'right',
                                                    'left',
                                                  ],
                                                  effect: e.effect,
                                                  placement: 'bottom',
                                                  teleported: e.teleported,
                                                },
                                                {
                                                  default: G(() => [
                                                    Z(
                                                      'span',
                                                      { class: I(e.nsSelect.e('tags-text')) },
                                                      '+ ' + ue(e.selected.length - 1),
                                                      3,
                                                    ),
                                                  ]),
                                                  content: G(() => [
                                                    Z(
                                                      'div',
                                                      { class: I(e.nsSelect.e('collapse-tags')) },
                                                      [
                                                        (A(!0),
                                                        F(
                                                          Te,
                                                          null,
                                                          xt(
                                                            e.selected.slice(1),
                                                            (d, m) => (
                                                              A(),
                                                              F(
                                                                'div',
                                                                {
                                                                  key: m,
                                                                  class: I(
                                                                    e.nsSelect.e('collapse-tag'),
                                                                  ),
                                                                },
                                                                [
                                                                  (A(),
                                                                  Q(
                                                                    r,
                                                                    {
                                                                      key: e.getValueKey(d),
                                                                      class: 'in-tooltip',
                                                                      closable:
                                                                        !e.selectDisabled &&
                                                                        !d.isDisabled,
                                                                      size: e.collapseTagSize,
                                                                      hit: d.hitState,
                                                                      type: e.tagType,
                                                                      'disable-transitions': '',
                                                                      style: { margin: '2px' },
                                                                      onClose: (w) =>
                                                                        e.deleteTag(w, d),
                                                                    },
                                                                    {
                                                                      default: G(() => [
                                                                        Z(
                                                                          'span',
                                                                          {
                                                                            class: I(
                                                                              e.nsSelect.e(
                                                                                'tags-text',
                                                                              ),
                                                                            ),
                                                                            style: ke({
                                                                              maxWidth:
                                                                                e.inputWidth -
                                                                                75 +
                                                                                'px',
                                                                            }),
                                                                          },
                                                                          ue(d.currentLabel),
                                                                          7,
                                                                        ),
                                                                      ]),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    [
                                                                      'closable',
                                                                      'size',
                                                                      'hit',
                                                                      'type',
                                                                      'onClose',
                                                                    ],
                                                                  )),
                                                                ],
                                                                2,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ],
                                                      2,
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ['disabled', 'effect', 'teleported'],
                                              ))
                                            : (A(),
                                              F(
                                                'span',
                                                { key: 1, class: I(e.nsSelect.e('tags-text')) },
                                                '+ ' + ue(e.selected.length - 1),
                                                3,
                                              )),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['size', 'type'],
                                    ))
                                  : U('v-if', !0),
                              ],
                              2,
                            ))
                          : U('v-if', !0),
                        U(' <div> '),
                        e.collapseTags
                          ? U('v-if', !0)
                          : (A(),
                            Q(
                              mn,
                              { key: 1, onAfterLeave: e.resetInputHeight },
                              {
                                default: G(() => [
                                  Z(
                                    'span',
                                    {
                                      class: I([
                                        e.nsSelect.b('tags-wrapper'),
                                        { 'has-prefix': e.prefixWidth && e.selected.length },
                                      ]),
                                    },
                                    [
                                      (A(!0),
                                      F(
                                        Te,
                                        null,
                                        xt(
                                          e.selected,
                                          (d) => (
                                            A(),
                                            Q(
                                              r,
                                              {
                                                key: e.getValueKey(d),
                                                closable: !e.selectDisabled && !d.isDisabled,
                                                size: e.collapseTagSize,
                                                hit: d.hitState,
                                                type: e.tagType,
                                                'disable-transitions': '',
                                                onClose: (m) => e.deleteTag(m, d),
                                              },
                                              {
                                                default: G(() => [
                                                  Z(
                                                    'span',
                                                    {
                                                      class: I(e.nsSelect.e('tags-text')),
                                                      style: ke({
                                                        maxWidth: e.inputWidth - 75 + 'px',
                                                      }),
                                                    },
                                                    ue(d.currentLabel),
                                                    7,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['closable', 'size', 'hit', 'type', 'onClose'],
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    2,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['onAfterLeave'],
                            )),
                        U(' </div> '),
                        e.filterable
                          ? ze(
                              (A(),
                              F(
                                'input',
                                {
                                  key: 2,
                                  ref: 'input',
                                  'onUpdate:modelValue': t[1] || (t[1] = (d) => (e.query = d)),
                                  type: 'text',
                                  class: I([e.nsSelect.e('input'), e.nsSelect.is(e.selectSize)]),
                                  disabled: e.selectDisabled,
                                  autocomplete: e.autocomplete,
                                  style: ke({
                                    marginLeft:
                                      (e.prefixWidth && !e.selected.length) || e.tagInMultiLine
                                        ? `${e.prefixWidth}px`
                                        : '',
                                    flexGrow: 1,
                                    width: `${e.inputLength / (e.inputWidth - 32)}%`,
                                    maxWidth: `${e.inputWidth - 42}px`,
                                  }),
                                  onFocus:
                                    t[2] || (t[2] = (...d) => e.handleFocus && e.handleFocus(...d)),
                                  onBlur:
                                    t[3] || (t[3] = (...d) => e.handleBlur && e.handleBlur(...d)),
                                  onKeyup:
                                    t[4] ||
                                    (t[4] = (...d) =>
                                      e.managePlaceholder && e.managePlaceholder(...d)),
                                  onKeydown: [
                                    t[5] ||
                                      (t[5] = (...d) =>
                                        e.resetInputState && e.resetInputState(...d)),
                                    t[6] ||
                                      (t[6] = De(
                                        Ue((d) => e.navigateOptions('next'), ['prevent']),
                                        ['down'],
                                      )),
                                    t[7] ||
                                      (t[7] = De(
                                        Ue((d) => e.navigateOptions('prev'), ['prevent']),
                                        ['up'],
                                      )),
                                    t[8] ||
                                      (t[8] = De(
                                        (...d) =>
                                          e.handleKeydownEscape && e.handleKeydownEscape(...d),
                                        ['esc'],
                                      )),
                                    t[9] ||
                                      (t[9] = De(
                                        Ue(
                                          (...d) => e.selectOption && e.selectOption(...d),
                                          ['stop', 'prevent'],
                                        ),
                                        ['enter'],
                                      )),
                                    t[10] ||
                                      (t[10] = De(
                                        (...d) => e.deletePrevTag && e.deletePrevTag(...d),
                                        ['delete'],
                                      )),
                                    t[11] || (t[11] = De((d) => (e.visible = !1), ['tab'])),
                                  ],
                                  onCompositionstart:
                                    t[12] ||
                                    (t[12] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onCompositionupdate:
                                    t[13] ||
                                    (t[13] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onCompositionend:
                                    t[14] ||
                                    (t[14] = (...d) =>
                                      e.handleComposition && e.handleComposition(...d)),
                                  onInput:
                                    t[15] ||
                                    (t[15] = (...d) =>
                                      e.debouncedQueryChange && e.debouncedQueryChange(...d)),
                                },
                                null,
                                46,
                                rc,
                              )),
                              [[ma, e.query]],
                            )
                          : U('v-if', !0),
                      ],
                      6,
                    ))
                  : U('v-if', !0),
                X(
                  i,
                  {
                    id: e.id,
                    ref: 'reference',
                    modelValue: e.selectedLabel,
                    'onUpdate:modelValue': t[16] || (t[16] = (d) => (e.selectedLabel = d)),
                    type: 'text',
                    placeholder: e.currentPlaceholder,
                    name: e.name,
                    autocomplete: e.autocomplete,
                    size: e.selectSize,
                    disabled: e.selectDisabled,
                    readonly: e.readonly,
                    'validate-event': !1,
                    class: I([e.nsSelect.is('focus', e.visible)]),
                    tabindex: e.multiple && e.filterable ? -1 : void 0,
                    onFocus: e.handleFocus,
                    onBlur: e.handleBlur,
                    onInput: e.debouncedOnInputChange,
                    onPaste: e.debouncedOnInputChange,
                    onCompositionstart: e.handleComposition,
                    onCompositionupdate: e.handleComposition,
                    onCompositionend: e.handleComposition,
                    onKeydown: [
                      t[17] ||
                        (t[17] = De(
                          Ue((d) => e.navigateOptions('next'), ['stop', 'prevent']),
                          ['down'],
                        )),
                      t[18] ||
                        (t[18] = De(
                          Ue((d) => e.navigateOptions('prev'), ['stop', 'prevent']),
                          ['up'],
                        )),
                      De(Ue(e.selectOption, ['stop', 'prevent']), ['enter']),
                      De(e.handleKeydownEscape, ['esc']),
                      t[19] || (t[19] = De((d) => (e.visible = !1), ['tab'])),
                    ],
                    onMouseenter: t[20] || (t[20] = (d) => (e.inputHovering = !0)),
                    onMouseleave: t[21] || (t[21] = (d) => (e.inputHovering = !1)),
                  },
                  ga(
                    {
                      suffix: G(() => [
                        e.iconComponent && !e.showClose
                          ? (A(),
                            Q(
                              a,
                              {
                                key: 0,
                                class: I([
                                  e.nsSelect.e('caret'),
                                  e.nsSelect.e('icon'),
                                  e.iconReverse,
                                ]),
                              },
                              { default: G(() => [(A(), Q(pt(e.iconComponent)))]), _: 1 },
                              8,
                              ['class'],
                            ))
                          : U('v-if', !0),
                        e.showClose && e.clearIcon
                          ? (A(),
                            Q(
                              a,
                              {
                                key: 1,
                                class: I([e.nsSelect.e('caret'), e.nsSelect.e('icon')]),
                                onClick: e.handleClearClick,
                              },
                              { default: G(() => [(A(), Q(pt(e.clearIcon)))]), _: 1 },
                              8,
                              ['class', 'onClick'],
                            ))
                          : U('v-if', !0),
                      ]),
                      _: 2,
                    },
                    [
                      e.$slots.prefix
                        ? { name: 'prefix', fn: G(() => [Z('div', ic, [ce(e.$slots, 'prefix')])]) }
                        : void 0,
                    ],
                  ),
                  1032,
                  [
                    'id',
                    'modelValue',
                    'placeholder',
                    'name',
                    'autocomplete',
                    'size',
                    'disabled',
                    'readonly',
                    'class',
                    'tabindex',
                    'onFocus',
                    'onBlur',
                    'onInput',
                    'onPaste',
                    'onCompositionstart',
                    'onCompositionupdate',
                    'onCompositionend',
                    'onKeydown',
                  ],
                ),
              ]),
            ]),
            content: G(() => [
              X(v, null, {
                default: G(() => [
                  ze(
                    X(
                      p,
                      {
                        ref: 'scrollbar',
                        tag: 'ul',
                        'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                        'view-class': e.nsSelect.be('dropdown', 'list'),
                        class: I([
                          e.nsSelect.is(
                            'empty',
                            !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0,
                          ),
                        ]),
                      },
                      {
                        default: G(() => [
                          e.showNewOption
                            ? (A(),
                              Q(c, { key: 0, value: e.query, created: !0 }, null, 8, ['value']))
                            : U('v-if', !0),
                          ce(e.$slots, 'default'),
                        ]),
                        _: 3,
                      },
                      8,
                      ['wrap-class', 'view-class', 'class'],
                    ),
                    [[Tt, e.options.size > 0 && !e.loading]],
                  ),
                  e.emptyText &&
                  (!e.allowCreate || e.loading || (e.allowCreate && e.options.size === 0))
                    ? (A(),
                      F(
                        Te,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? ce(e.$slots, 'empty', { key: 0 })
                            : (A(),
                              F(
                                'p',
                                { key: 1, class: I(e.nsSelect.be('dropdown', 'empty')) },
                                ue(e.emptyText),
                                3,
                              )),
                        ],
                        64,
                      ))
                    : U('v-if', !0),
                ]),
                _: 3,
              }),
            ]),
            _: 3,
          },
          8,
          ['visible', 'teleported', 'popper-class', 'effect', 'transition', 'persistent', 'onShow'],
        ),
      ],
      2,
    )),
    [[b, e.handleClose, e.popperPaneRef]],
  )
}
var cc = he(ac, [
  ['render', uc],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue',
  ],
])
const dc = ne({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: { type: Boolean, default: !1 } },
  setup(e) {
    const t = Y('select'),
      n = P(!0),
      l = ge(),
      o = P([])
    mt(_o, bt(se({}, Xt(e))))
    const s = Se(Sn)
    Ze(() => {
      o.value = r(l.subTree)
    })
    const r = (a) => {
        const i = []
        return (
          Array.isArray(a.children) &&
            a.children.forEach((c) => {
              var p
              c.type && c.type.name === 'ElOption' && c.component && c.component.proxy
                ? i.push(c.component.proxy)
                : (p = c.children) != null && p.length && i.push(...r(c))
            }),
          i
        )
      },
      { groupQueryChange: u } = Yn(s)
    return (
      re(u, () => {
        n.value = o.value.some((a) => a.visible === !0)
      }),
      { visible: n, ns: t }
    )
  },
})
function fc(e, t, n, l, o, s) {
  return ze(
    (A(),
    F(
      'ul',
      { class: I(e.ns.be('group', 'wrap')) },
      [
        Z('li', { class: I(e.ns.be('group', 'title')) }, ue(e.label), 3),
        Z('li', null, [Z('ul', { class: I(e.ns.b('group')) }, [ce(e.$slots, 'default')], 2)]),
      ],
      2,
    )),
    [[Tt, e.visible]],
  )
}
var Ho = he(dc, [
  ['render', fc],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue',
  ],
])
const pc = gt(cc, { Option: el, OptionGroup: Ho }),
  vc = Ke(el)
Ke(Ho)
const tl = () => Se(go, {}),
  hc = Qe({
    pageSize: { type: Number, required: !0 },
    pageSizes: { type: vt(Array), default: () => bn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String },
    disabled: Boolean,
    size: { type: String, default: 'default' },
  }),
  mc = { name: 'ElPaginationSizes' },
  gc = ne(
    Ce(se({}, mc), {
      props: hc,
      emits: ['page-size-change'],
      setup(e, { emit: t }) {
        const n = e,
          { t: l } = st(),
          o = Y('pagination'),
          s = tl(),
          r = P(n.pageSize)
        re(
          () => n.pageSizes,
          (i, c) => {
            if (!zn(i, c) && Array.isArray(i)) {
              const p = i.includes(n.pageSize) ? n.pageSize : n.pageSizes[0]
              t('page-size-change', p)
            }
          },
        ),
          re(
            () => n.pageSize,
            (i) => {
              r.value = i
            },
          )
        const u = $(() => n.pageSizes)
        function a(i) {
          var c
          i !== r.value && ((r.value = i), (c = s.handleSizeChange) == null || c.call(s, Number(i)))
        }
        return (i, c) => (
          A(),
          F(
            'span',
            { class: I(f(o).e('sizes')) },
            [
              X(
                f(pc),
                {
                  'model-value': r.value,
                  disabled: i.disabled,
                  'popper-class': i.popperClass,
                  size: i.size,
                  onChange: a,
                },
                {
                  default: G(() => [
                    (A(!0),
                    F(
                      Te,
                      null,
                      xt(
                        f(u),
                        (p) => (
                          A(),
                          Q(
                            f(vc),
                            { key: p, value: p, label: p + f(l)('el.pagination.pagesize') },
                            null,
                            8,
                            ['value', 'label'],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['model-value', 'disabled', 'popper-class', 'size'],
              ),
            ],
            2,
          )
        )
      },
    }),
  )
var bc = he(gc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue',
  ],
])
const yc = ['disabled'],
  Cc = { name: 'ElPaginationJumper' },
  Sc = ne(
    Ce(se({}, Cc), {
      setup(e) {
        const { t } = st(),
          n = Y('pagination'),
          { pageCount: l, disabled: o, currentPage: s, changeEvent: r } = tl(),
          u = P(),
          a = $(() => {
            var p
            return (p = u.value) != null ? p : s == null ? void 0 : s.value
          })
        function i(p) {
          u.value = +p
        }
        function c(p) {
          ;(p = Math.trunc(+p)), r == null || r(+p), (u.value = void 0)
        }
        return (p, v) => (
          A(),
          F(
            'span',
            { class: I(f(n).e('jump')), disabled: f(o) },
            [
              at(ue(f(t)('el.pagination.goto')) + ' ', 1),
              X(
                f(bo),
                {
                  size: 'small',
                  class: I([f(n).e('editor'), f(n).is('in-pagination')]),
                  min: 1,
                  max: f(l),
                  disabled: f(o),
                  'model-value': f(a),
                  type: 'number',
                  'onUpdate:modelValue': i,
                  onChange: c,
                },
                null,
                8,
                ['class', 'max', 'disabled', 'model-value'],
              ),
              at(' ' + ue(f(t)('el.pagination.pageClassifier')), 1),
            ],
            10,
            yc,
          )
        )
      },
    }),
  )
var wc = he(Sc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue',
  ],
])
const Ec = Qe({ total: { type: Number, default: 1e3 } }),
  $c = ['disabled'],
  kc = { name: 'ElPaginationTotal' },
  Mc = ne(
    Ce(se({}, kc), {
      props: Ec,
      setup(e) {
        const { t } = st(),
          n = Y('pagination'),
          { disabled: l } = tl()
        return (o, s) => (
          A(),
          F(
            'span',
            { class: I(f(n).e('total')), disabled: f(l) },
            ue(f(t)('el.pagination.total', { total: o.total })),
            11,
            $c,
          )
        )
      },
    }),
  )
var Tc = he(Mc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue',
  ],
])
const xc = Qe({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean,
  }),
  Pc = ['onKeyup'],
  Ac = ['aria-current', 'tabindex'],
  Oc = ['tabindex'],
  Lc = ['aria-current', 'tabindex'],
  Nc = ['tabindex'],
  Ic = ['aria-current', 'tabindex'],
  Rc = { name: 'ElPaginationPager' },
  zc = ne(
    Ce(se({}, Rc), {
      props: xc,
      emits: ['change'],
      setup(e, { emit: t }) {
        const n = e,
          l = Y('pager'),
          o = Y('icon'),
          s = P(!1),
          r = P(!1),
          u = P(!1),
          a = P(!1),
          i = P(!1),
          c = P(!1),
          p = $(() => {
            const E = n.pagerCount,
              g = (E - 1) / 2,
              h = Number(n.currentPage),
              C = Number(n.pageCount)
            let O = !1,
              T = !1
            C > E && (h > E - g && (O = !0), h < C - g && (T = !0))
            const S = []
            if (O && !T) {
              const x = C - (E - 2)
              for (let L = x; L < C; L++) S.push(L)
            } else if (!O && T) for (let x = 2; x < E; x++) S.push(x)
            else if (O && T) {
              const x = Math.floor(E / 2) - 1
              for (let L = h - x; L <= h + x; L++) S.push(L)
            } else for (let x = 2; x < C; x++) S.push(x)
            return S
          }),
          v = $(() => (n.disabled ? -1 : 0))
        kt(() => {
          const E = (n.pagerCount - 1) / 2
          ;(s.value = !1),
            (r.value = !1),
            n.pageCount > n.pagerCount &&
              (n.currentPage > n.pagerCount - E && (s.value = !0),
              n.currentPage < n.pageCount - E && (r.value = !0))
        })
        function b(E = !1) {
          n.disabled || (E ? (u.value = !0) : (a.value = !0))
        }
        function d(E = !1) {
          E ? (i.value = !0) : (c.value = !0)
        }
        function m(E) {
          const g = E.target
          if (g.tagName.toLowerCase() === 'li' && Array.from(g.classList).includes('number')) {
            const h = Number(g.textContent)
            h !== n.currentPage && t('change', h)
          } else
            g.tagName.toLowerCase() === 'li' && Array.from(g.classList).includes('more') && w(E)
        }
        function w(E) {
          const g = E.target
          if (g.tagName.toLowerCase() === 'ul' || n.disabled) return
          let h = Number(g.textContent)
          const C = n.pageCount,
            O = n.currentPage,
            T = n.pagerCount - 2
          g.className.includes('more') &&
            (g.className.includes('quickprev')
              ? (h = O - T)
              : g.className.includes('quicknext') && (h = O + T)),
            Number.isNaN(+h) || (h < 1 && (h = 1), h > C && (h = C)),
            h !== O && t('change', h)
        }
        return (E, g) => (
          A(),
          F(
            'ul',
            { class: I(f(l).b()), onClick: w, onKeyup: De(m, ['enter']) },
            [
              E.pageCount > 0
                ? (A(),
                  F(
                    'li',
                    {
                      key: 0,
                      class: I([
                        [f(l).is('active', E.currentPage === 1), f(l).is('disabled', E.disabled)],
                        'number',
                      ]),
                      'aria-current': E.currentPage === 1,
                      tabindex: f(v),
                    },
                    ' 1 ',
                    10,
                    Ac,
                  ))
                : U('v-if', !0),
              s.value
                ? (A(),
                  F(
                    'li',
                    {
                      key: 1,
                      class: I([
                        'more',
                        'btn-quickprev',
                        f(o).b(),
                        f(l).is('disabled', E.disabled),
                      ]),
                      tabindex: f(v),
                      onMouseenter: g[0] || (g[0] = (h) => b(!0)),
                      onMouseleave: g[1] || (g[1] = (h) => (u.value = !1)),
                      onFocus: g[2] || (g[2] = (h) => d(!0)),
                      onBlur: g[3] || (g[3] = (h) => (i.value = !1)),
                    },
                    [
                      u.value || i.value
                        ? (A(), Q(f(Ra), { key: 0 }))
                        : (A(), Q(f(hl), { key: 1 })),
                    ],
                    42,
                    Oc,
                  ))
                : U('v-if', !0),
              (A(!0),
              F(
                Te,
                null,
                xt(
                  f(p),
                  (h) => (
                    A(),
                    F(
                      'li',
                      {
                        key: h,
                        class: I([
                          [f(l).is('active', E.currentPage === h), f(l).is('disabled', E.disabled)],
                          'number',
                        ]),
                        'aria-current': E.currentPage === h,
                        tabindex: f(v),
                      },
                      ue(h),
                      11,
                      Lc,
                    )
                  ),
                ),
                128,
              )),
              r.value
                ? (A(),
                  F(
                    'li',
                    {
                      key: 2,
                      class: I([
                        'more',
                        'btn-quicknext',
                        f(o).b(),
                        f(l).is('disabled', E.disabled),
                      ]),
                      tabindex: f(v),
                      onMouseenter: g[4] || (g[4] = (h) => b()),
                      onMouseleave: g[5] || (g[5] = (h) => (a.value = !1)),
                      onFocus: g[6] || (g[6] = (h) => d()),
                      onBlur: g[7] || (g[7] = (h) => (c.value = !1)),
                    },
                    [
                      a.value || c.value
                        ? (A(), Q(f(za), { key: 0 }))
                        : (A(), Q(f(hl), { key: 1 })),
                    ],
                    42,
                    Nc,
                  ))
                : U('v-if', !0),
              E.pageCount > 1
                ? (A(),
                  F(
                    'li',
                    {
                      key: 3,
                      class: I([
                        [
                          f(l).is('active', E.currentPage === E.pageCount),
                          f(l).is('disabled', E.disabled),
                        ],
                        'number',
                      ]),
                      'aria-current': E.currentPage === E.pageCount,
                      tabindex: f(v),
                    },
                    ue(E.pageCount),
                    11,
                    Ic,
                  ))
                : U('v-if', !0),
            ],
            42,
            Pc,
          )
        )
      },
    }),
  )
var Fc = he(zc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue',
  ],
])
const Ne = (e) => typeof e != 'number',
  Bc = Qe({
    total: Number,
    pageSize: Number,
    defaultPageSize: Number,
    currentPage: Number,
    defaultCurrentPage: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator: (e) =>
        typeof e == 'number' && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
      default: 7,
    },
    layout: {
      type: String,
      default: ['prev', 'pager', 'next', 'jumper', '->', 'total'].join(', '),
    },
    pageSizes: { type: vt(Array), default: () => bn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String, default: '' },
    prevText: { type: String, default: '' },
    nextText: { type: String, default: '' },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
  }),
  Wc = {
    'update:current-page': (e) => typeof e == 'number',
    'update:page-size': (e) => typeof e == 'number',
    'size-change': (e) => typeof e == 'number',
    'current-change': (e) => typeof e == 'number',
    'prev-click': (e) => typeof e == 'number',
    'next-click': (e) => typeof e == 'number',
  },
  Kl = 'ElPagination'
var _c = ne({
  name: Kl,
  props: Bc,
  emits: Wc,
  setup(e, { emit: t, slots: n }) {
    const { t: l } = st(),
      o = Y('pagination'),
      s = ge().vnode.props || {},
      r = 'onUpdate:currentPage' in s || 'onUpdate:current-page' in s || 'onCurrentChange' in s,
      u = 'onUpdate:pageSize' in s || 'onUpdate:page-size' in s || 'onSizeChange' in s,
      a = $(() => {
        if ((Ne(e.total) && Ne(e.pageCount)) || (!Ne(e.currentPage) && !r)) return !1
        if (e.layout.includes('sizes')) {
          if (Ne(e.pageCount)) {
            if (!Ne(e.total) && !Ne(e.pageSize) && !u) return !1
          } else if (!u) return !1
        }
        return !0
      }),
      i = P(Ne(e.defaultPageSize) ? 10 : e.defaultPageSize),
      c = P(Ne(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
      p = $({
        get() {
          return Ne(e.pageSize) ? i.value : e.pageSize
        },
        set(h) {
          Ne(e.pageSize) && (i.value = h), u && (t('update:page-size', h), t('size-change', h))
        },
      }),
      v = $(() => {
        let h = 0
        return (
          Ne(e.pageCount)
            ? Ne(e.total) || (h = Math.max(1, Math.ceil(e.total / p.value)))
            : (h = e.pageCount),
          h
        )
      }),
      b = $({
        get() {
          return Ne(e.currentPage) ? c.value : e.currentPage
        },
        set(h) {
          let C = h
          h < 1 ? (C = 1) : h > v.value && (C = v.value),
            Ne(e.currentPage) && (c.value = C),
            r && (t('update:current-page', C), t('current-change', C))
        },
      })
    re(v, (h) => {
      b.value > h && (b.value = h)
    })
    function d(h) {
      b.value = h
    }
    function m(h) {
      p.value = h
      const C = v.value
      b.value > C && (b.value = C)
    }
    function w() {
      e.disabled || ((b.value -= 1), t('prev-click', b.value))
    }
    function E() {
      e.disabled || ((b.value += 1), t('next-click', b.value))
    }
    function g(h, C) {
      h && (h.props || (h.props = {}), (h.props.class = [h.props.class, C].join(' ')))
    }
    return (
      mt(go, {
        pageCount: v,
        disabled: $(() => e.disabled),
        currentPage: b,
        changeEvent: d,
        handleSizeChange: m,
      }),
      () => {
        var h, C
        if (!a.value) return Nt(Kl, l('el.pagination.deprecationWarning')), null
        if (!e.layout || (e.hideOnSinglePage && v.value <= 1)) return null
        const O = [],
          T = [],
          S = _('div', { class: o.e('rightwrapper') }, T),
          x = {
            prev: _(Ku, {
              disabled: e.disabled,
              currentPage: b.value,
              prevText: e.prevText,
              onClick: w,
            }),
            jumper: _(wc),
            pager: _(Fc, {
              currentPage: b.value,
              pageCount: v.value,
              pagerCount: e.pagerCount,
              onChange: d,
              disabled: e.disabled,
            }),
            next: _(Xu, {
              disabled: e.disabled,
              currentPage: b.value,
              pageCount: v.value,
              nextText: e.nextText,
              onClick: E,
            }),
            sizes: _(bc, {
              pageSize: p.value,
              pageSizes: e.pageSizes,
              popperClass: e.popperClass,
              disabled: e.disabled,
              size: e.small ? 'small' : 'default',
            }),
            slot:
              (C = (h = n == null ? void 0 : n.default) == null ? void 0 : h.call(n)) != null
                ? C
                : null,
            total: _(Tc, { total: Ne(e.total) ? 0 : e.total }),
          },
          L = e.layout.split(',').map((W) => W.trim())
        let V = !1
        return (
          L.forEach((W) => {
            if (W === '->') {
              V = !0
              return
            }
            V ? T.push(x[W]) : O.push(x[W])
          }),
          g(O[0], o.is('first')),
          g(O[O.length - 1], o.is('last')),
          V &&
            T.length > 0 &&
            (g(T[0], o.is('first')), g(T[T.length - 1], o.is('last')), O.push(S)),
          _(
            'div',
            {
              role: 'pagination',
              'aria-label': 'pagination',
              class: [o.b(), o.is('background', e.background), { [o.m('small')]: e.small }],
            },
            O,
          )
        )
      }
    )
  },
})
const Hc = gt(_c)
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var Vc = /["'&<>]/,
  Dc = Kc
function Kc(e) {
  var t = '' + e,
    n = Vc.exec(t)
  if (!n) return t
  var l,
    o = '',
    s = 0,
    r = 0
  for (s = n.index; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
      case 34:
        l = '&quot;'
        break
      case 38:
        l = '&amp;'
        break
      case 39:
        l = '&#39;'
        break
      case 60:
        l = '&lt;'
        break
      case 62:
        l = '&gt;'
        break
      default:
        continue
    }
    r !== s && (o += t.substring(r, s)), (r = s + 1), (o += l)
  }
  return r !== s ? o + t.substring(r, s) : o
}
const Pn = function (e) {
    var t
    return (t = e.target) == null ? void 0 : t.closest('td')
  },
  jl = function (e) {
    return e !== null && typeof e == 'object'
  },
  jc = function (e, t, n, l, o) {
    if (!t && !l && (!o || (Array.isArray(o) && !o.length))) return e
    typeof n == 'string' ? (n = n === 'descending' ? -1 : 1) : (n = n && n < 0 ? -1 : 1)
    const s = l
        ? null
        : function (u, a) {
            return o
              ? (Array.isArray(o) || (o = [o]),
                o.map((i) => (typeof i == 'string' ? He(u, i) : i(u, a, e))))
              : (t !== '$key' && jl(u) && '$value' in u && (u = u.$value), [jl(u) ? He(u, t) : u])
          },
      r = function (u, a) {
        if (l) return l(u.value, a.value)
        for (let i = 0, c = u.key.length; i < c; i++) {
          if (u.key[i] < a.key[i]) return -1
          if (u.key[i] > a.key[i]) return 1
        }
        return 0
      }
    return e
      .map((u, a) => ({ value: u, index: a, key: s ? s(u, a) : null }))
      .sort((u, a) => {
        let i = r(u, a)
        return i || (i = u.index - a.index), i * +n
      })
      .map((u) => u.value)
  },
  Vo = function (e, t) {
    let n = null
    return (
      e.columns.forEach((l) => {
        l.id === t && (n = l)
      }),
      n
    )
  },
  qc = function (e, t) {
    let n = null
    for (let l = 0; l < e.columns.length; l++) {
      const o = e.columns[l]
      if (o.columnKey === t) {
        n = o
        break
      }
    }
    return n
  },
  ql = function (e, t, n) {
    const l = (t.className || '').match(new RegExp(`${n}-table_[^\\s]+`, 'gm'))
    return l ? Vo(e, l[0]) : null
  },
  xe = (e, t) => {
    if (!e) throw new Error('Row is required when get row identity')
    if (typeof t == 'string') {
      if (!t.includes('.')) return `${e[t]}`
      const n = t.split('.')
      let l = e
      for (const o of n) l = l[o]
      return `${l}`
    } else if (typeof t == 'function') return t.call(null, e)
  },
  $t = function (e, t) {
    const n = {}
    return (
      (e || []).forEach((l, o) => {
        n[xe(l, t)] = { row: l, index: o }
      }),
      n
    )
  }
function Gc(e, t) {
  const n = {}
  let l
  for (l in e) n[l] = e[l]
  for (l in t)
    if (Ut(t, l)) {
      const o = t[l]
      typeof o != 'undefined' && (n[l] = o)
    }
  return n
}
function nl(e) {
  return (
    e === '' || (e !== void 0 && ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))), e
  )
}
function Do(e) {
  return e === '' || (e !== void 0 && ((e = nl(e)), Number.isNaN(e) && (e = 80))), e
}
function Uc(e) {
  return typeof e == 'number'
    ? e
    : typeof e == 'string'
    ? /^\d+(?:px)?$/.test(e)
      ? Number.parseInt(e, 10)
      : e
    : null
}
function Yc(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...l) =>
            t(n(...l)),
      )
}
function an(e, t, n) {
  let l = !1
  const o = e.indexOf(t),
    s = o !== -1,
    r = () => {
      e.push(t), (l = !0)
    },
    u = () => {
      e.splice(o, 1), (l = !0)
    }
  return typeof n == 'boolean' ? (n && !s ? r() : !n && s && u()) : s ? u() : r(), l
}
function Xc(e, t, n = 'children', l = 'hasChildren') {
  const o = (r) => !(Array.isArray(r) && r.length)
  function s(r, u, a) {
    t(r, u, a),
      u.forEach((i) => {
        if (i[l]) {
          t(i, null, a + 1)
          return
        }
        const c = i[n]
        o(c) || s(i, c, a + 1)
      })
  }
  e.forEach((r) => {
    if (r[l]) {
      t(r, null, 0)
      return
    }
    const u = r[n]
    o(u) || s(r, u, 0)
  })
}
let ft
function Qc(e, t, n, l, o) {
  const { nextZIndex: s } = Ma(),
    r = e == null ? void 0 : e.dataset.prefix,
    u = e == null ? void 0 : e.querySelector(`.${r}-scrollbar__wrap`)
  function a() {
    const d = o === 'light',
      m = document.createElement('div')
    return (
      (m.className = `${r}-popper ${d ? 'is-light' : 'is-dark'}`),
      (n = Dc(n)),
      (m.innerHTML = n),
      (m.style.zIndex = String(s())),
      e == null || e.appendChild(m),
      m
    )
  }
  function i() {
    const d = document.createElement('div')
    return (d.className = `${r}-popper__arrow`), d
  }
  function c() {
    p && p.update()
  }
  ft = () => {
    try {
      p && p.destroy(),
        v && (e == null || e.removeChild(v)),
        t.removeEventListener('mouseenter', c),
        t.removeEventListener('mouseleave', ft),
        u == null || u.removeEventListener('scroll', ft),
        (ft = void 0)
    } catch (d) {}
  }
  let p = null
  const v = a(),
    b = i()
  return (
    v.appendChild(b),
    (p = Ta(
      t,
      v,
      se(
        {
          strategy: 'absolute',
          modifiers: [
            { name: 'offset', options: { offset: [0, 8] } },
            { name: 'arrow', options: { element: b, padding: 10 } },
          ],
        },
        l,
      ),
    )),
    t.addEventListener('mouseenter', c),
    t.addEventListener('mouseleave', ft),
    u == null || u.addEventListener('scroll', ft),
    p
  )
}
const Ko = (e, t, n, l) => {
    let o = 0,
      s = e
    if (l) {
      if (l[e].colSpan > 1) return {}
      for (let a = 0; a < e; a++) o += l[a].colSpan
      s = o + l[e].colSpan - 1
    } else o = e
    let r
    const u = n.states.columns
    switch (t) {
      case 'left':
        s < n.states.fixedLeafColumnsLength.value && (r = 'left')
        break
      case 'right':
        o >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
        break
      default:
        s < n.states.fixedLeafColumnsLength.value
          ? (r = 'left')
          : o >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
    }
    return r ? { direction: r, start: o, after: s } : {}
  },
  ll = (e, t, n, l, o) => {
    const s = [],
      { direction: r, start: u } = Ko(t, n, l, o)
    if (r) {
      const a = r === 'left'
      s.push(`${e}-fixed-column--${r}`),
        a && u === l.states.fixedLeafColumnsLength.value - 1
          ? s.push('is-last-column')
          : !a &&
            u === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value &&
            s.push('is-first-column')
    }
    return s
  }
function Gl(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth)
}
const ol = (e, t, n, l) => {
    const { direction: o, start: s = 0 } = Ko(e, t, n, l)
    if (!o) return
    const r = {},
      u = o === 'left',
      a = n.states.columns.value
    return (
      u
        ? (r.left = a.slice(0, e).reduce(Gl, 0))
        : (r.right = a
            .slice(s + 1)
            .reverse()
            .reduce(Gl, 0)),
      r
    )
  },
  zt = (e, t) => {
    !e || Number.isNaN(e[t]) || (e[t] = `${e[t]}px`)
  }
function Zc(e) {
  const t = ge(),
    n = P(!1),
    l = P([])
  return {
    updateExpandRows: () => {
      const a = e.data.value || [],
        i = e.rowKey.value
      if (n.value) l.value = a.slice()
      else if (i) {
        const c = $t(l.value, i)
        l.value = a.reduce((p, v) => {
          const b = xe(v, i)
          return c[b] && p.push(v), p
        }, [])
      } else l.value = []
    },
    toggleRowExpansion: (a, i) => {
      an(l.value, a, i) && t.emit('expand-change', a, l.value.slice())
    },
    setExpandRowKeys: (a) => {
      t.store.assertRowKey()
      const i = e.data.value || [],
        c = e.rowKey.value,
        p = $t(i, c)
      l.value = a.reduce((v, b) => {
        const d = p[b]
        return d && v.push(d.row), v
      }, [])
    },
    isRowExpanded: (a) => {
      const i = e.rowKey.value
      return i ? !!$t(l.value, i)[xe(a, i)] : l.value.includes(a)
    },
    states: { expandRows: l, defaultExpandAll: n },
  }
}
function Jc(e) {
  const t = ge(),
    n = P(null),
    l = P(null),
    o = (i) => {
      t.store.assertRowKey(), (n.value = i), r(i)
    },
    s = () => {
      n.value = null
    },
    r = (i) => {
      const { data: c, rowKey: p } = e
      let v = null
      p.value && (v = (f(c) || []).find((b) => xe(b, p.value) === i)),
        (l.value = v),
        t.emit('current-change', l.value, null)
    }
  return {
    setCurrentRowKey: o,
    restoreCurrentRowKey: s,
    setCurrentRowByKey: r,
    updateCurrentRow: (i) => {
      const c = l.value
      if (i && i !== c) {
        ;(l.value = i), t.emit('current-change', l.value, c)
        return
      }
      !i && c && ((l.value = null), t.emit('current-change', null, c))
    },
    updateCurrentRowData: () => {
      const i = e.rowKey.value,
        c = e.data.value || [],
        p = l.value
      if (!c.includes(p) && p) {
        if (i) {
          const v = xe(p, i)
          r(v)
        } else l.value = null
        l.value === null && t.emit('current-change', null, p)
      } else n.value && (r(n.value), s())
    },
    states: { _currentRowKey: n, currentRow: l },
  }
}
function ed(e) {
  const t = P([]),
    n = P({}),
    l = P(16),
    o = P(!1),
    s = P({}),
    r = P('hasChildren'),
    u = P('children'),
    a = ge(),
    i = $(() => {
      if (!e.rowKey.value) return {}
      const E = e.data.value || []
      return p(E)
    }),
    c = $(() => {
      const E = e.rowKey.value,
        g = Object.keys(s.value),
        h = {}
      return (
        g.length &&
          g.forEach((C) => {
            if (s.value[C].length) {
              const O = { children: [] }
              s.value[C].forEach((T) => {
                const S = xe(T, E)
                O.children.push(S), T[r.value] && !h[S] && (h[S] = { children: [] })
              }),
                (h[C] = O)
            }
          }),
        h
      )
    }),
    p = (E) => {
      const g = e.rowKey.value,
        h = {}
      return (
        Xc(
          E,
          (C, O, T) => {
            const S = xe(C, g)
            Array.isArray(O)
              ? (h[S] = { children: O.map((x) => xe(x, g)), level: T })
              : o.value && (h[S] = { children: [], lazy: !0, level: T })
          },
          u.value,
          r.value,
        ),
        h
      )
    },
    v = (
      E = !1,
      g = ((h) => ((h = a.store) == null ? void 0 : h.states.defaultExpandAll.value))(),
    ) => {
      var h
      const C = i.value,
        O = c.value,
        T = Object.keys(C),
        S = {}
      if (T.length) {
        const x = f(n),
          L = [],
          V = (D, J) => {
            if (E)
              return t.value ? g || t.value.includes(J) : !!(g || (D == null ? void 0 : D.expanded))
            {
              const ee = g || (t.value && t.value.includes(J))
              return !!((D == null ? void 0 : D.expanded) || ee)
            }
          }
        T.forEach((D) => {
          const J = x[D],
            ee = se({}, C[D])
          if (((ee.expanded = V(J, D)), ee.lazy)) {
            const { loaded: fe = !1, loading: le = !1 } = J || {}
            ;(ee.loaded = !!fe), (ee.loading = !!le), L.push(D)
          }
          S[D] = ee
        })
        const W = Object.keys(O)
        o.value &&
          W.length &&
          L.length &&
          W.forEach((D) => {
            const J = x[D],
              ee = O[D].children
            if (L.includes(D)) {
              if (S[D].children.length !== 0)
                throw new Error('[ElTable]children must be an empty array.')
              S[D].children = ee
            } else {
              const { loaded: fe = !1, loading: le = !1 } = J || {}
              S[D] = {
                lazy: !0,
                loaded: !!fe,
                loading: !!le,
                expanded: V(J, D),
                children: ee,
                level: '',
              }
            }
          })
      }
      ;(n.value = S), (h = a.store) == null || h.updateTableScrollY()
    }
  re(
    () => t.value,
    () => {
      v(!0)
    },
  ),
    re(
      () => i.value,
      () => {
        v()
      },
    ),
    re(
      () => c.value,
      () => {
        v()
      },
    )
  const b = (E) => {
      ;(t.value = E), v()
    },
    d = (E, g) => {
      a.store.assertRowKey()
      const h = e.rowKey.value,
        C = xe(E, h),
        O = C && n.value[C]
      if (C && O && 'expanded' in O) {
        const T = O.expanded
        ;(g = typeof g == 'undefined' ? !O.expanded : g),
          (n.value[C].expanded = g),
          T !== g && a.emit('expand-change', E, g),
          a.store.updateTableScrollY()
      }
    },
    m = (E) => {
      a.store.assertRowKey()
      const g = e.rowKey.value,
        h = xe(E, g),
        C = n.value[h]
      o.value && C && 'loaded' in C && !C.loaded ? w(E, h, C) : d(E, void 0)
    },
    w = (E, g, h) => {
      const { load: C } = a.props
      C &&
        !n.value[g].loaded &&
        ((n.value[g].loading = !0),
        C(E, h, (O) => {
          if (!Array.isArray(O)) throw new TypeError('[ElTable] data must be an array')
          ;(n.value[g].loading = !1),
            (n.value[g].loaded = !0),
            (n.value[g].expanded = !0),
            O.length && (s.value[g] = O),
            a.emit('expand-change', E, !0)
        }))
    }
  return {
    loadData: w,
    loadOrToggle: m,
    toggleTreeExpansion: d,
    updateTreeExpandKeys: b,
    updateTreeData: v,
    normalize: p,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: l,
      lazy: o,
      lazyTreeNodeMap: s,
      lazyColumnIdentifier: r,
      childrenColumnName: u,
    },
  }
}
const td = (e, t) => {
    const n = t.sortingColumn
    return !n || typeof n.sortable == 'string'
      ? e
      : jc(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy)
  },
  sn = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        n.children ? t.push.apply(t, sn(n.children)) : t.push(n)
      }),
      t
    )
  }
function nd() {
  var e
  const t = ge(),
    { size: n } = Xt((e = t.proxy) == null ? void 0 : e.$props),
    l = P(null),
    o = P([]),
    s = P([]),
    r = P(!1),
    u = P([]),
    a = P([]),
    i = P([]),
    c = P([]),
    p = P([]),
    v = P([]),
    b = P([]),
    d = P([]),
    m = P(0),
    w = P(0),
    E = P(0),
    g = P(!1),
    h = P([]),
    C = P(!1),
    O = P(!1),
    T = P(null),
    S = P({}),
    x = P(null),
    L = P(null),
    V = P(null),
    W = P(null),
    D = P(null)
  re(o, () => t.state && fe(!1), { deep: !0 })
  const J = () => {
      if (!l.value) throw new Error('[ElTable] prop row-key is required')
    },
    ee = () => {
      ;(c.value = u.value.filter((z) => z.fixed === !0 || z.fixed === 'left')),
        (p.value = u.value.filter((z) => z.fixed === 'right')),
        c.value.length > 0 &&
          u.value[0] &&
          u.value[0].type === 'selection' &&
          !u.value[0].fixed &&
          ((u.value[0].fixed = !0), c.value.unshift(u.value[0]))
      const H = u.value.filter((z) => !z.fixed)
      a.value = [].concat(c.value).concat(H).concat(p.value)
      const q = sn(H),
        y = sn(c.value),
        k = sn(p.value)
      ;(m.value = q.length),
        (w.value = y.length),
        (E.value = k.length),
        (i.value = [].concat(y).concat(q).concat(k)),
        (r.value = c.value.length > 0 || p.value.length > 0)
    },
    fe = (H, q = !1) => {
      H && ee(), q ? t.state.doLayout() : t.state.debouncedUpdateLayout()
    },
    le = (H) => h.value.includes(H),
    be = () => {
      ;(g.value = !1), h.value.length && ((h.value = []), t.emit('selection-change', []))
    },
    R = () => {
      let H
      if (l.value) {
        H = []
        const q = $t(h.value, l.value),
          y = $t(o.value, l.value)
        for (const k in q) Ut(q, k) && !y[k] && H.push(q[k].row)
      } else H = h.value.filter((q) => !o.value.includes(q))
      if (H.length) {
        const q = h.value.filter((y) => !H.includes(y))
        ;(h.value = q), t.emit('selection-change', q.slice())
      }
    },
    M = () => (h.value || []).slice(),
    B = (H, q = void 0, y = !0) => {
      if (an(h.value, H, q)) {
        const z = (h.value || []).slice()
        y && t.emit('select', z, H), t.emit('selection-change', z)
      }
    },
    j = () => {
      var H, q
      const y = O.value ? !g.value : !(g.value || h.value.length)
      g.value = y
      let k = !1,
        z = 0
      const K =
        (q = (H = t == null ? void 0 : t.store) == null ? void 0 : H.states) == null
          ? void 0
          : q.rowKey.value
      o.value.forEach((de, Oe) => {
        const Me = Oe + z
        T.value
          ? T.value.call(null, de, Me) && an(h.value, de, y) && (k = !0)
          : an(h.value, de, y) && (k = !0),
          (z += pe(xe(de, K)))
      }),
        k && t.emit('selection-change', h.value ? h.value.slice() : []),
        t.emit('select-all', h.value)
    },
    ie = () => {
      const H = $t(h.value, l.value)
      o.value.forEach((q) => {
        const y = xe(q, l.value),
          k = H[y]
        k && (h.value[k.index] = q)
      })
    },
    oe = () => {
      var H, q, y
      if (((H = o.value) == null ? void 0 : H.length) === 0) {
        g.value = !1
        return
      }
      let k
      l.value && (k = $t(h.value, l.value))
      const z = function (Me) {
        return k ? !!k[xe(Me, l.value)] : h.value.includes(Me)
      }
      let K = !0,
        de = 0,
        Oe = 0
      for (let Me = 0, je = (o.value || []).length; Me < je; Me++) {
        const Fe =
            (y = (q = t == null ? void 0 : t.store) == null ? void 0 : q.states) == null
              ? void 0
              : y.rowKey.value,
          Le = Me + Oe,
          qe = o.value[Me],
          Zo = T.value && T.value.call(null, qe, Le)
        if (z(qe)) de++
        else if (!T.value || Zo) {
          K = !1
          break
        }
        Oe += pe(xe(qe, Fe))
      }
      de === 0 && (K = !1), (g.value = K)
    },
    pe = (H) => {
      var q
      if (!t || !t.store) return 0
      const { treeData: y } = t.store.states
      let k = 0
      const z = (q = y.value[H]) == null ? void 0 : q.children
      return (
        z &&
          ((k += z.length),
          z.forEach((K) => {
            k += pe(K)
          })),
        k
      )
    },
    ae = (H, q) => {
      Array.isArray(H) || (H = [H])
      const y = {}
      return (
        H.forEach((k) => {
          ;(S.value[k.id] = q), (y[k.columnKey || k.id] = q)
        }),
        y
      )
    },
    ye = (H, q, y) => {
      L.value && L.value !== H && (L.value.order = null),
        (L.value = H),
        (V.value = q),
        (W.value = y)
    },
    we = () => {
      let H = f(s)
      Object.keys(S.value).forEach((q) => {
        const y = S.value[q]
        if (!y || y.length === 0) return
        const k = Vo({ columns: i.value }, q)
        k &&
          k.filterMethod &&
          (H = H.filter((z) => y.some((K) => k.filterMethod.call(null, K, z, k))))
      }),
        (x.value = H)
    },
    Ee = () => {
      o.value = td(x.value, { sortingColumn: L.value, sortProp: V.value, sortOrder: W.value })
    },
    Ae = (H = void 0) => {
      ;(H && H.filter) || we(), Ee()
    },
    Ve = (H) => {
      const { tableHeaderRef: q } = t.refs
      if (!q) return
      const y = Object.assign({}, q.filterPanels),
        k = Object.keys(y)
      if (!!k.length)
        if ((typeof H == 'string' && (H = [H]), Array.isArray(H))) {
          const z = H.map((K) => qc({ columns: i.value }, K))
          k.forEach((K) => {
            const de = z.find((Oe) => Oe.id === K)
            de && (de.filteredValue = [])
          }),
            t.store.commit('filterChange', { column: z, values: [], silent: !0, multi: !0 })
        } else
          k.forEach((z) => {
            const K = i.value.find((de) => de.id === z)
            K && (K.filteredValue = [])
          }),
            (S.value = {}),
            t.store.commit('filterChange', { column: {}, values: [], silent: !0 })
    },
    rt = () => {
      !L.value || (ye(null, null, null), t.store.commit('changeSortCondition', { silent: !0 }))
    },
    {
      setExpandRowKeys: We,
      toggleRowExpansion: tt,
      updateExpandRows: yt,
      states: it,
      isRowExpanded: nt,
    } = Zc({ data: o, rowKey: l }),
    {
      updateTreeExpandKeys: Je,
      toggleTreeExpansion: lt,
      updateTreeData: Ct,
      loadOrToggle: ut,
      states: ct,
    } = ed({ data: o, rowKey: l }),
    {
      updateCurrentRowData: St,
      updateCurrentRow: dt,
      setCurrentRowKey: N,
      states: te,
    } = Jc({ data: o, rowKey: l })
  return {
    assertRowKey: J,
    updateColumns: ee,
    scheduleLayout: fe,
    isSelected: le,
    clearSelection: be,
    cleanSelection: R,
    getSelectionRows: M,
    toggleRowSelection: B,
    _toggleAllSelection: j,
    toggleAllSelection: null,
    updateSelectionByRowKey: ie,
    updateAllSelected: oe,
    updateFilters: ae,
    updateCurrentRow: dt,
    updateSort: ye,
    execFilter: we,
    execSort: Ee,
    execQuery: Ae,
    clearFilter: Ve,
    clearSort: rt,
    toggleRowExpansion: tt,
    setExpandRowKeysAdapter: (H) => {
      We(H), Je(H)
    },
    setCurrentRowKey: N,
    toggleRowExpansionAdapter: (H, q) => {
      i.value.some(({ type: k }) => k === 'expand') ? tt(H, q) : lt(H, q)
    },
    isRowExpanded: nt,
    updateExpandRows: yt,
    updateCurrentRowData: St,
    loadOrToggle: ut,
    updateTreeData: Ct,
    states: se(
      se(
        se(
          {
            tableSize: n,
            rowKey: l,
            data: o,
            _data: s,
            isComplex: r,
            _columns: u,
            originColumns: a,
            columns: i,
            fixedColumns: c,
            rightFixedColumns: p,
            leafColumns: v,
            fixedLeafColumns: b,
            rightFixedLeafColumns: d,
            leafColumnsLength: m,
            fixedLeafColumnsLength: w,
            rightFixedLeafColumnsLength: E,
            isAllSelected: g,
            selection: h,
            reserveSelection: C,
            selectOnIndeterminate: O,
            selectable: T,
            filters: S,
            filteredData: x,
            sortingColumn: L,
            sortProp: V,
            sortOrder: W,
            hoverRow: D,
          },
          it,
        ),
        ct,
      ),
      te,
    ),
  }
}
function jn(e, t) {
  return e.map((n) => {
    var l
    return n.id === t.id
      ? t
      : ((l = n.children) != null && l.length && (n.children = jn(n.children, t)), n)
  })
}
function jo(e) {
  e.forEach((t) => {
    var n, l
    ;(t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t)),
      (l = t.children) != null && l.length && jo(t.children)
  }),
    e.sort((t, n) => t.no - n.no)
}
function ld() {
  const e = ge(),
    t = nd(),
    n = Y('table'),
    l = {
      setData(r, u) {
        const a = f(r._data) !== u
        ;(r.data.value = u),
          (r._data.value = u),
          e.store.execQuery(),
          e.store.updateCurrentRowData(),
          e.store.updateExpandRows(),
          e.store.updateTreeData(e.store.states.defaultExpandAll.value),
          f(r.reserveSelection)
            ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
            : a
            ? e.store.clearSelection()
            : e.store.cleanSelection(),
          e.store.updateAllSelected(),
          e.$ready && e.store.scheduleLayout()
      },
      insertColumn(r, u, a) {
        const i = f(r._columns)
        let c = []
        a
          ? (a && !a.children && (a.children = []), a.children.push(u), (c = jn(i, a)))
          : (i.push(u), (c = i)),
          jo(c),
          (r._columns.value = c),
          u.type === 'selection' &&
            ((r.selectable.value = u.selectable), (r.reserveSelection.value = u.reserveSelection)),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      removeColumn(r, u, a) {
        const i = f(r._columns) || []
        if (a)
          a.children.splice(
            a.children.findIndex((c) => c.id === u.id),
            1,
          ),
            a.children.length === 0 && delete a.children,
            (r._columns.value = jn(i, a))
        else {
          const c = i.indexOf(u)
          c > -1 && (i.splice(c, 1), (r._columns.value = i))
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      sort(r, u) {
        const { prop: a, order: i, init: c } = u
        if (a) {
          const p = f(r.columns).find((v) => v.property === a)
          p &&
            ((p.order = i),
            e.store.updateSort(p, a, i),
            e.store.commit('changeSortCondition', { init: c }))
        }
      },
      changeSortCondition(r, u) {
        const { sortingColumn: a, sortProp: i, sortOrder: c } = r
        f(c) === null && ((r.sortingColumn.value = null), (r.sortProp.value = null))
        const p = { filter: !0 }
        e.store.execQuery(p),
          (!u || !(u.silent || u.init)) &&
            e.emit('sort-change', { column: f(a), prop: f(i), order: f(c) }),
          e.store.updateTableScrollY()
      },
      filterChange(r, u) {
        const { column: a, values: i, silent: c } = u,
          p = e.store.updateFilters(a, i)
        e.store.execQuery(), c || e.emit('filter-change', p), e.store.updateTableScrollY()
      },
      toggleAllSelection() {
        e.store.toggleAllSelection()
      },
      rowSelectedChanged(r, u) {
        e.store.toggleRowSelection(u), e.store.updateAllSelected()
      },
      setHoverRow(r, u) {
        r.hoverRow.value = u
      },
      setCurrentRow(r, u) {
        e.store.updateCurrentRow(u)
      },
    },
    o = function (r, ...u) {
      const a = e.store.mutations
      if (a[r]) a[r].apply(e, [e.store.states].concat(u))
      else throw new Error(`Action not found: ${r}`)
    },
    s = function () {
      ve(() => e.layout.updateScrollY.apply(e.layout))
    }
  return Ce(se({ ns: n }, t), { mutations: l, commit: o, updateTableScrollY: s })
}
const Kt = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  data: 'data',
  ['treeProps.hasChildren']: { key: 'lazyColumnIdentifier', default: 'hasChildren' },
  ['treeProps.children']: { key: 'childrenColumnName', default: 'children' },
}
function od(e, t) {
  if (!e) throw new Error('Table is required.')
  const n = ld()
  return (
    (n.toggleAllSelection = It(n._toggleAllSelection, 10)),
    Object.keys(Kt).forEach((l) => {
      qo(Go(t, l), l, n)
    }),
    ad(n, t),
    n
  )
}
function ad(e, t) {
  Object.keys(Kt).forEach((n) => {
    re(
      () => Go(t, n),
      (l) => {
        qo(l, n, e)
      },
    )
  })
}
function qo(e, t, n) {
  let l = e,
    o = Kt[t]
  typeof Kt[t] == 'object' && ((o = o.key), (l = l || Kt[t].default)), (n.states[o].value = l)
}
function Go(e, t) {
  if (t.includes('.')) {
    const n = t.split('.')
    let l = e
    return (
      n.forEach((o) => {
        l = l[o]
      }),
      l
    )
  } else return e[t]
}
class sd {
  constructor(t) {
    ;(this.observers = []),
      (this.table = null),
      (this.store = null),
      (this.columns = []),
      (this.fit = !0),
      (this.showHeader = !0),
      (this.height = P(null)),
      (this.scrollX = P(!1)),
      (this.scrollY = P(!1)),
      (this.bodyWidth = P(null)),
      (this.fixedWidth = P(null)),
      (this.rightFixedWidth = P(null)),
      (this.gutterWidth = 0)
    for (const n in t) Ut(t, n) && (Gt(this[n]) ? (this[n].value = t[n]) : (this[n] = t[n]))
    if (!this.table) throw new Error('Table is required for Table Layout')
    if (!this.store) throw new Error('Store is required for Table Layout')
  }
  updateScrollY() {
    if (this.height.value === null) return !1
    const n = this.table.refs.scrollBarRef
    if (this.table.vnode.el && n) {
      let l = !0
      const o = this.scrollY.value
      return (l = n.wrap$.scrollHeight > n.wrap$.clientHeight), (this.scrollY.value = l), o !== l
    }
    return !1
  }
  setHeight(t, n = 'height') {
    if (!Pt) return
    const l = this.table.vnode.el
    if (((t = Uc(t)), (this.height.value = Number(t)), !l && (t || t === 0)))
      return ve(() => this.setHeight(t, n))
    typeof t == 'number'
      ? ((l.style[n] = `${t}px`), this.updateElsHeight())
      : typeof t == 'string' && ((l.style[n] = t), this.updateElsHeight())
  }
  setMaxHeight(t) {
    this.setHeight(t, 'max-height')
  }
  getFlattenColumns() {
    const t = []
    return (
      this.table.store.states.columns.value.forEach((l) => {
        l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l)
      }),
      t
    )
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers('scrollable')
  }
  headerDisplayNone(t) {
    if (!t) return !0
    let n = t
    for (; n.tagName !== 'DIV'; ) {
      if (getComputedStyle(n).display === 'none') return !0
      n = n.parentElement
    }
    return !1
  }
  updateColumnsWidth() {
    if (!Pt) return
    const t = this.fit,
      n = this.table.vnode.el.clientWidth
    let l = 0
    const o = this.getFlattenColumns(),
      s = o.filter((a) => typeof a.width != 'number')
    if (
      (o.forEach((a) => {
        typeof a.width == 'number' && a.realWidth && (a.realWidth = null)
      }),
      s.length > 0 && t)
    ) {
      if (
        (o.forEach((a) => {
          l += Number(a.width || a.minWidth || 80)
        }),
        l <= n)
      ) {
        this.scrollX.value = !1
        const a = n - l
        if (s.length === 1) s[0].realWidth = Number(s[0].minWidth || 80) + a
        else {
          const i = s.reduce((v, b) => v + Number(b.minWidth || 80), 0),
            c = a / i
          let p = 0
          s.forEach((v, b) => {
            if (b === 0) return
            const d = Math.floor(Number(v.minWidth || 80) * c)
            ;(p += d), (v.realWidth = Number(v.minWidth || 80) + d)
          }),
            (s[0].realWidth = Number(s[0].minWidth || 80) + a - p)
        }
      } else
        (this.scrollX.value = !0),
          s.forEach((a) => {
            a.realWidth = Number(a.minWidth)
          })
      ;(this.bodyWidth.value = Math.max(l, n)),
        (this.table.state.resizeState.value.width = this.bodyWidth.value)
    } else
      o.forEach((a) => {
        !a.width && !a.minWidth
          ? (a.realWidth = 80)
          : (a.realWidth = Number(a.width || a.minWidth)),
          (l += a.realWidth)
      }),
        (this.scrollX.value = l > n),
        (this.bodyWidth.value = l)
    const r = this.store.states.fixedColumns.value
    if (r.length > 0) {
      let a = 0
      r.forEach((i) => {
        a += Number(i.realWidth || i.width)
      }),
        (this.fixedWidth.value = a)
    }
    const u = this.store.states.rightFixedColumns.value
    if (u.length > 0) {
      let a = 0
      u.forEach((i) => {
        a += Number(i.realWidth || i.width)
      }),
        (this.rightFixedWidth.value = a)
    }
    this.notifyObservers('columns')
  }
  addObserver(t) {
    this.observers.push(t)
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t)
    n !== -1 && this.observers.splice(n, 1)
  }
  notifyObservers(t) {
    this.observers.forEach((l) => {
      var o, s
      switch (t) {
        case 'columns':
          ;(o = l.state) == null || o.onColumnsChange(this)
          break
        case 'scrollable':
          ;(s = l.state) == null || s.onScrollableChange(this)
          break
        default:
          throw new Error(`Table Layout don't have event ${t}.`)
      }
    })
  }
}
const { CheckboxGroup: rd } = Rt,
  id = ne({
    name: 'ElTableFilterPanel',
    components: {
      ElCheckbox: Rt,
      ElCheckboxGroup: rd,
      ElScrollbar: Qn,
      ElTooltip: yn,
      ElIcon: Re,
      ArrowDown: ao,
      ArrowUp: so,
    },
    directives: { ClickOutside: ro },
    props: {
      placement: { type: String, default: 'bottom-start' },
      store: { type: Object },
      column: { type: Object },
      upDataColumn: { type: Function },
    },
    setup(e) {
      const t = ge(),
        { t: n } = st(),
        l = Y('table-filter'),
        o = t == null ? void 0 : t.parent
      o.filterPanels.value[e.column.id] || (o.filterPanels.value[e.column.id] = t)
      const s = P(!1),
        r = P(null),
        u = $(() => e.column && e.column.filters),
        a = $({
          get: () => {
            var C
            return (((C = e.column) == null ? void 0 : C.filteredValue) || [])[0]
          },
          set: (C) => {
            i.value &&
              (typeof C != 'undefined' && C !== null
                ? i.value.splice(0, 1, C)
                : i.value.splice(0, 1))
          },
        }),
        i = $({
          get() {
            return e.column ? e.column.filteredValue || [] : []
          },
          set(C) {
            e.column && e.upDataColumn('filteredValue', C)
          },
        }),
        c = $(() => (e.column ? e.column.filterMultiple : !0)),
        p = (C) => C.value === a.value,
        v = () => {
          s.value = !1
        },
        b = (C) => {
          C.stopPropagation(), (s.value = !s.value)
        },
        d = () => {
          s.value = !1
        },
        m = () => {
          g(i.value), v()
        },
        w = () => {
          ;(i.value = []), g(i.value), v()
        },
        E = (C) => {
          ;(a.value = C), g(typeof C != 'undefined' && C !== null ? i.value : []), v()
        },
        g = (C) => {
          e.store.commit('filterChange', { column: e.column, values: C }),
            e.store.updateAllSelected()
        }
      re(
        s,
        (C) => {
          e.column && e.upDataColumn('filterOpened', C)
        },
        { immediate: !0 },
      )
      const h = $(() => {
        var C, O
        return (O = (C = r.value) == null ? void 0 : C.popperRef) == null ? void 0 : O.contentRef
      })
      return {
        tooltipVisible: s,
        multiple: c,
        filteredValue: i,
        filterValue: a,
        filters: u,
        handleConfirm: m,
        handleReset: w,
        handleSelect: E,
        isActive: p,
        t: n,
        ns: l,
        showFilterPanel: b,
        hideFilterPanel: d,
        popperPaneRef: h,
        tooltip: r,
      }
    },
  }),
  ud = { key: 0 },
  cd = ['disabled'],
  dd = ['label', 'onClick']
function fd(e, t, n, l, o, s) {
  const r = $e('el-checkbox'),
    u = $e('el-checkbox-group'),
    a = $e('el-scrollbar'),
    i = $e('arrow-up'),
    c = $e('arrow-down'),
    p = $e('el-icon'),
    v = $e('el-tooltip'),
    b = Xn('click-outside')
  return (
    A(),
    Q(
      v,
      {
        ref: 'tooltip',
        visible: e.tooltipVisible,
        offset: 0,
        placement: e.placement,
        'show-arrow': !1,
        'stop-popper-mouse-event': !1,
        teleported: '',
        effect: 'light',
        pure: '',
        'popper-class': e.ns.b(),
        persistent: '',
      },
      {
        content: G(() => [
          e.multiple
            ? (A(),
              F('div', ud, [
                Z(
                  'div',
                  { class: I(e.ns.e('content')) },
                  [
                    X(
                      a,
                      { 'wrap-class': e.ns.e('wrap') },
                      {
                        default: G(() => [
                          X(
                            u,
                            {
                              modelValue: e.filteredValue,
                              'onUpdate:modelValue': t[0] || (t[0] = (d) => (e.filteredValue = d)),
                              class: I(e.ns.e('checkbox-group')),
                            },
                            {
                              default: G(() => [
                                (A(!0),
                                F(
                                  Te,
                                  null,
                                  xt(
                                    e.filters,
                                    (d) => (
                                      A(),
                                      Q(
                                        r,
                                        { key: d.value, label: d.value },
                                        { default: G(() => [at(ue(d.text), 1)]), _: 2 },
                                        1032,
                                        ['label'],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'class'],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['wrap-class'],
                    ),
                  ],
                  2,
                ),
                Z(
                  'div',
                  { class: I(e.ns.e('bottom')) },
                  [
                    Z(
                      'button',
                      {
                        class: I({ [e.ns.is('disabled')]: e.filteredValue.length === 0 }),
                        disabled: e.filteredValue.length === 0,
                        type: 'button',
                        onClick:
                          t[1] || (t[1] = (...d) => e.handleConfirm && e.handleConfirm(...d)),
                      },
                      ue(e.t('el.table.confirmFilter')),
                      11,
                      cd,
                    ),
                    Z(
                      'button',
                      {
                        type: 'button',
                        onClick: t[2] || (t[2] = (...d) => e.handleReset && e.handleReset(...d)),
                      },
                      ue(e.t('el.table.resetFilter')),
                      1,
                    ),
                  ],
                  2,
                ),
              ]))
            : (A(),
              F(
                'ul',
                { key: 1, class: I(e.ns.e('list')) },
                [
                  Z(
                    'li',
                    {
                      class: I([
                        e.ns.e('list-item'),
                        { [e.ns.is('active')]: e.filterValue === void 0 || e.filterValue === null },
                      ]),
                      onClick: t[3] || (t[3] = (d) => e.handleSelect(null)),
                    },
                    ue(e.t('el.table.clearFilter')),
                    3,
                  ),
                  (A(!0),
                  F(
                    Te,
                    null,
                    xt(
                      e.filters,
                      (d) => (
                        A(),
                        F(
                          'li',
                          {
                            key: d.value,
                            class: I([e.ns.e('list-item'), e.ns.is('active', e.isActive(d))]),
                            label: d.value,
                            onClick: (m) => e.handleSelect(d.value),
                          },
                          ue(d.text),
                          11,
                          dd,
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                2,
              )),
        ]),
        default: G(() => [
          ze(
            (A(),
            F(
              'span',
              {
                class: I([
                  `${e.ns.namespace.value}-table__column-filter-trigger`,
                  `${e.ns.namespace.value}-none-outline`,
                ]),
                onClick: t[4] || (t[4] = (...d) => e.showFilterPanel && e.showFilterPanel(...d)),
              },
              [
                X(p, null, {
                  default: G(() => [
                    e.column.filterOpened ? (A(), Q(i, { key: 0 })) : (A(), Q(c, { key: 1 })),
                  ]),
                  _: 1,
                }),
              ],
              2,
            )),
            [[b, e.hideFilterPanel, e.popperPaneRef]],
          ),
        ]),
        _: 1,
      },
      8,
      ['visible', 'placement', 'popper-class'],
    )
  )
}
var pd = he(id, [
  ['render', fd],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue',
  ],
])
function Uo(e) {
  const t = ge()
  eo(() => {
    n.value.addObserver(t)
  }),
    Ze(() => {
      l(n.value), o(n.value)
    }),
    Un(() => {
      l(n.value), o(n.value)
    }),
    to(() => {
      n.value.removeObserver(t)
    })
  const n = $(() => {
      const s = e.layout
      if (!s) throw new Error('Can not find table layout.')
      return s
    }),
    l = (s) => {
      var r
      const u = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll('colgroup > col')) || []
      if (!u.length) return
      const a = s.getFlattenColumns(),
        i = {}
      a.forEach((c) => {
        i[c.id] = c
      })
      for (let c = 0, p = u.length; c < p; c++) {
        const v = u[c],
          b = v.getAttribute('name'),
          d = i[b]
        d && v.setAttribute('width', d.realWidth || d.width)
      }
    },
    o = (s) => {
      var r, u
      const a =
        ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll('colgroup > col[name=gutter]')) ||
        []
      for (let c = 0, p = a.length; c < p; c++)
        a[c].setAttribute('width', s.scrollY.value ? s.gutterWidth : '0')
      const i = ((u = e.vnode.el) == null ? void 0 : u.querySelectorAll('th.gutter')) || []
      for (let c = 0, p = i.length; c < p; c++) {
        const v = i[c]
        ;(v.style.width = s.scrollY.value ? `${s.gutterWidth}px` : '0'),
          (v.style.display = s.scrollY.value ? '' : 'none')
      }
    }
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: o }
}
const et = Symbol('ElTable')
function vd(e, t) {
  const n = ge(),
    l = Se(et),
    o = (m) => {
      m.stopPropagation()
    },
    s = (m, w) => {
      !w.filters && w.sortable ? d(m, w, !1) : w.filterable && !w.sortable && o(m),
        l == null || l.emit('header-click', w, m)
    },
    r = (m, w) => {
      l == null || l.emit('header-contextmenu', w, m)
    },
    u = P(null),
    a = P(!1),
    i = P({}),
    c = (m, w) => {
      if (!!Pt && !(w.children && w.children.length > 0) && u.value && e.border) {
        a.value = !0
        const E = l
        t('set-drag-visible', !0)
        const h = (E == null ? void 0 : E.vnode.el).getBoundingClientRect().left,
          C = n.vnode.el.querySelector(`th.${w.id}`),
          O = C.getBoundingClientRect(),
          T = O.left - h + 30
        Ot(C, 'noclick'),
          (i.value = {
            startMouseLeft: m.clientX,
            startLeft: O.right - h,
            startColumnLeft: O.left - h,
            tableLeft: h,
          })
        const S = E == null ? void 0 : E.refs.resizeProxy
        ;(S.style.left = `${i.value.startLeft}px`),
          (document.onselectstart = function () {
            return !1
          }),
          (document.ondragstart = function () {
            return !1
          })
        const x = (V) => {
            const W = V.clientX - i.value.startMouseLeft,
              D = i.value.startLeft + W
            S.style.left = `${Math.max(T, D)}px`
          },
          L = () => {
            if (a.value) {
              const { startColumnLeft: V, startLeft: W } = i.value,
                J = Number.parseInt(S.style.left, 10) - V
              ;(w.width = w.realWidth = J),
                E == null || E.emit('header-dragend', w.width, W - V, w, m),
                requestAnimationFrame(() => {
                  e.store.scheduleLayout(!1, !0)
                }),
                (document.body.style.cursor = ''),
                (a.value = !1),
                (u.value = null),
                (i.value = {}),
                t('set-drag-visible', !1)
            }
            document.removeEventListener('mousemove', x),
              document.removeEventListener('mouseup', L),
              (document.onselectstart = null),
              (document.ondragstart = null),
              setTimeout(() => {
                Lt(C, 'noclick')
              }, 0)
          }
        document.addEventListener('mousemove', x), document.addEventListener('mouseup', L)
      }
    },
    p = (m, w) => {
      var E
      if (w.children && w.children.length > 0) return
      const g = (E = m.target) == null ? void 0 : E.closest('th')
      if (!(!w || !w.resizable) && !a.value && e.border) {
        const h = g.getBoundingClientRect(),
          C = document.body.style
        h.width > 12 && h.right - m.pageX < 8
          ? ((C.cursor = 'col-resize'),
            Vt(g, 'is-sortable') && (g.style.cursor = 'col-resize'),
            (u.value = w))
          : a.value ||
            ((C.cursor = ''),
            Vt(g, 'is-sortable') && (g.style.cursor = 'pointer'),
            (u.value = null))
      }
    },
    v = () => {
      !Pt || (document.body.style.cursor = '')
    },
    b = ({ order: m, sortOrders: w }) => {
      if (m === '') return w[0]
      const E = w.indexOf(m || null)
      return w[E > w.length - 2 ? 0 : E + 1]
    },
    d = (m, w, E) => {
      var g
      m.stopPropagation()
      const h = w.order === E ? null : E || b(w),
        C = (g = m.target) == null ? void 0 : g.closest('th')
      if (C && Vt(C, 'noclick')) {
        Lt(C, 'noclick')
        return
      }
      if (!w.sortable) return
      const O = e.store.states
      let T = O.sortProp.value,
        S
      const x = O.sortingColumn.value
      ;(x !== w || (x === w && x.order === null)) &&
        (x && (x.order = null), (O.sortingColumn.value = w), (T = w.property)),
        h ? (S = w.order = h) : (S = w.order = null),
        (O.sortProp.value = T),
        (O.sortOrder.value = S),
        l == null || l.store.commit('changeSortCondition')
    }
  return {
    handleHeaderClick: s,
    handleHeaderContextMenu: r,
    handleMouseDown: c,
    handleMouseMove: p,
    handleMouseOut: v,
    handleSortClick: d,
    handleFilterClick: o,
  }
}
function hd(e) {
  const t = Se(et),
    n = Y('table')
  return {
    getHeaderRowStyle: (u) => {
      const a = t == null ? void 0 : t.props.headerRowStyle
      return typeof a == 'function' ? a.call(null, { rowIndex: u }) : a
    },
    getHeaderRowClass: (u) => {
      const a = [],
        i = t == null ? void 0 : t.props.headerRowClassName
      return (
        typeof i == 'string'
          ? a.push(i)
          : typeof i == 'function' && a.push(i.call(null, { rowIndex: u })),
        a.join(' ')
      )
    },
    getHeaderCellStyle: (u, a, i, c) => {
      var p
      let v = (p = t == null ? void 0 : t.props.headerCellStyle) != null ? p : {}
      typeof v == 'function' &&
        (v = v.call(null, { rowIndex: u, columnIndex: a, row: i, column: c }))
      const b = c.isSubColumn ? null : ol(a, c.fixed, e.store, i)
      return zt(b, 'left'), zt(b, 'right'), Object.assign({}, v, b)
    },
    getHeaderCellClass: (u, a, i, c) => {
      const p = c.isSubColumn ? [] : ll(n.b(), a, c.fixed, e.store, i),
        v = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...p]
      c.children || v.push('is-leaf'), c.sortable && v.push('is-sortable')
      const b = t == null ? void 0 : t.props.headerCellClassName
      return (
        typeof b == 'string'
          ? v.push(b)
          : typeof b == 'function' &&
            v.push(b.call(null, { rowIndex: u, columnIndex: a, row: i, column: c })),
        v.push(n.e('cell')),
        v.filter((d) => Boolean(d)).join(' ')
      )
    },
  }
}
const Yo = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        n.children ? (t.push(n), t.push.apply(t, Yo(n.children))) : t.push(n)
      }),
      t
    )
  },
  md = (e) => {
    let t = 1
    const n = (s, r) => {
      if ((r && ((s.level = r.level + 1), t < s.level && (t = s.level)), s.children)) {
        let u = 0
        s.children.forEach((a) => {
          n(a, s), (u += a.colSpan)
        }),
          (s.colSpan = u)
      } else s.colSpan = 1
    }
    e.forEach((s) => {
      ;(s.level = 1), n(s, void 0)
    })
    const l = []
    for (let s = 0; s < t; s++) l.push([])
    return (
      Yo(e).forEach((s) => {
        s.children
          ? ((s.rowSpan = 1), s.children.forEach((r) => (r.isSubColumn = !0)))
          : (s.rowSpan = t - s.level + 1),
          l[s.level - 1].push(s)
      }),
      l
    )
  }
function gd(e) {
  const t = Se(et),
    n = $(() => md(e.store.states.originColumns.value))
  return {
    isGroup: $(() => {
      const s = n.value.length > 1
      return s && t && (t.state.isGroup.value = !0), s
    }),
    toggleAllSelection: (s) => {
      s.stopPropagation(), t == null || t.store.commit('toggleAllSelection')
    },
    columnRows: n,
  }
}
var bd = ne({
  name: 'ElTableHeader',
  components: { ElCheckbox: Rt },
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e, { emit: t }) {
    const n = ge(),
      l = Se(et),
      o = Y('table'),
      s = P({}),
      { onColumnsChange: r, onScrollableChange: u } = Uo(l)
    Ze(() =>
      ot(this, null, function* () {
        yield ve(), yield ve()
        const { prop: T, order: S } = e.defaultSort
        l == null || l.store.commit('sort', { prop: T, order: S, init: !0 })
      }),
    )
    const {
        handleHeaderClick: a,
        handleHeaderContextMenu: i,
        handleMouseDown: c,
        handleMouseMove: p,
        handleMouseOut: v,
        handleSortClick: b,
        handleFilterClick: d,
      } = vd(e, t),
      {
        getHeaderRowStyle: m,
        getHeaderRowClass: w,
        getHeaderCellStyle: E,
        getHeaderCellClass: g,
      } = hd(e),
      { isGroup: h, toggleAllSelection: C, columnRows: O } = gd(e)
    return (
      (n.state = { onColumnsChange: r, onScrollableChange: u }),
      (n.filterPanels = s),
      {
        ns: o,
        filterPanels: s,
        onColumnsChange: r,
        onScrollableChange: u,
        columnRows: O,
        getHeaderRowClass: w,
        getHeaderRowStyle: m,
        getHeaderCellClass: g,
        getHeaderCellStyle: E,
        handleHeaderClick: a,
        handleHeaderContextMenu: i,
        handleMouseDown: c,
        handleMouseMove: p,
        handleMouseOut: v,
        handleSortClick: b,
        handleFilterClick: d,
        isGroup: h,
        toggleAllSelection: C,
      }
    )
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: l,
      getHeaderCellClass: o,
      getHeaderRowClass: s,
      getHeaderRowStyle: r,
      handleHeaderClick: u,
      handleHeaderContextMenu: a,
      handleMouseDown: i,
      handleMouseMove: c,
      handleSortClick: p,
      handleMouseOut: v,
      store: b,
      $parent: d,
    } = this
    let m = 1
    return _(
      'thead',
      { class: { [e.is('group')]: t } },
      n.map((w, E) =>
        _(
          'tr',
          { class: s(E), key: E, style: r(E) },
          w.map(
            (g, h) => (
              g.rowSpan > m && (m = g.rowSpan),
              _(
                'th',
                {
                  class: o(E, h, w, g),
                  colspan: g.colSpan,
                  key: `${g.id}-thead`,
                  rowspan: g.rowSpan,
                  style: l(E, h, w, g),
                  onClick: (C) => u(C, g),
                  onContextmenu: (C) => a(C, g),
                  onMousedown: (C) => i(C, g),
                  onMousemove: (C) => c(C, g),
                  onMouseout: v,
                },
                [
                  _(
                    'div',
                    {
                      class: [
                        'cell',
                        g.filteredValue && g.filteredValue.length > 0 ? 'highlight' : '',
                        g.labelClassName,
                      ],
                    },
                    [
                      g.renderHeader
                        ? g.renderHeader({ column: g, $index: h, store: b, _self: d })
                        : g.label,
                      g.sortable &&
                        _('span', { onClick: (C) => p(C, g), class: 'caret-wrapper' }, [
                          _('i', {
                            onClick: (C) => p(C, g, 'ascending'),
                            class: 'sort-caret ascending',
                          }),
                          _('i', {
                            onClick: (C) => p(C, g, 'descending'),
                            class: 'sort-caret descending',
                          }),
                        ]),
                      g.filterable &&
                        _(pd, {
                          store: b,
                          placement: g.filterPlacement || 'bottom-start',
                          column: g,
                          upDataColumn: (C, O) => {
                            g[C] = O
                          },
                        }),
                    ],
                  ),
                ],
              )
            ),
          ),
        ),
      ),
    )
  },
})
function yd(e) {
  const t = Se(et),
    n = P(''),
    l = P(_('div')),
    o = (v, b, d) => {
      var m
      const w = t,
        E = Pn(v)
      let g
      const h = (m = w == null ? void 0 : w.vnode.el) == null ? void 0 : m.dataset.prefix
      E &&
        ((g = ql({ columns: e.store.states.columns.value }, E, h)),
        g && (w == null || w.emit(`cell-${d}`, b, g, E, v))),
        w == null || w.emit(`row-${d}`, b, g, v)
    },
    s = (v, b) => {
      o(v, b, 'dblclick')
    },
    r = (v, b) => {
      e.store.commit('setCurrentRow', b), o(v, b, 'click')
    },
    u = (v, b) => {
      o(v, b, 'contextmenu')
    },
    a = It((v) => {
      e.store.commit('setHoverRow', v)
    }, 30),
    i = It(() => {
      e.store.commit('setHoverRow', null)
    }, 30)
  return {
    handleDoubleClick: s,
    handleClick: r,
    handleContextMenu: u,
    handleMouseEnter: a,
    handleMouseLeave: i,
    handleCellMouseEnter: (v, b) => {
      var d
      const m = t,
        w = Pn(v),
        E = (d = m == null ? void 0 : m.vnode.el) == null ? void 0 : d.dataset.prefix
      if (w) {
        const T = ql({ columns: e.store.states.columns.value }, w, E),
          S = (m.hoverState = { cell: w, column: T, row: b })
        m == null || m.emit('cell-mouse-enter', S.row, S.column, S.cell, v)
      }
      const g = v.target.querySelector('.cell')
      if (!(Vt(g, `${E}-tooltip`) && g.childNodes.length)) return
      const h = document.createRange()
      h.setStart(g, 0), h.setEnd(g, g.childNodes.length)
      const C = h.getBoundingClientRect().width,
        O =
          (Number.parseInt(ml(g, 'paddingLeft'), 10) || 0) +
          (Number.parseInt(ml(g, 'paddingRight'), 10) || 0)
      ;(C + O > g.offsetWidth || g.scrollWidth > g.offsetWidth) &&
        Qc(
          t == null ? void 0 : t.refs.tableWrapper,
          w,
          w.innerText || w.textContent,
          { placement: 'top', strategy: 'fixed' },
          b.tooltipEffect,
        )
    },
    handleCellMouseLeave: (v) => {
      if (!Pn(v)) return
      const d = t == null ? void 0 : t.hoverState
      t == null ||
        t.emit(
          'cell-mouse-leave',
          d == null ? void 0 : d.row,
          d == null ? void 0 : d.column,
          d == null ? void 0 : d.cell,
          v,
        )
    },
    tooltipContent: n,
    tooltipTrigger: l,
  }
}
function Cd(e) {
  const t = Se(et),
    n = Y('table')
  return {
    getRowStyle: (i, c) => {
      const p = t == null ? void 0 : t.props.rowStyle
      return typeof p == 'function' ? p.call(null, { row: i, rowIndex: c }) : p || null
    },
    getRowClass: (i, c) => {
      const p = [n.e('row')]
      ;(t == null ? void 0 : t.props.highlightCurrentRow) &&
        i === e.store.states.currentRow.value &&
        p.push('current-row'),
        e.stripe && c % 2 === 1 && p.push(n.em('row', 'striped'))
      const v = t == null ? void 0 : t.props.rowClassName
      return (
        typeof v == 'string'
          ? p.push(v)
          : typeof v == 'function' && p.push(v.call(null, { row: i, rowIndex: c })),
        p
      )
    },
    getCellStyle: (i, c, p, v) => {
      const b = t == null ? void 0 : t.props.cellStyle
      let d = b != null ? b : {}
      typeof b == 'function' &&
        (d = b.call(null, { rowIndex: i, columnIndex: c, row: p, column: v }))
      const m = v.isSubColumn ? null : ol(c, e == null ? void 0 : e.fixed, e.store)
      return zt(m, 'left'), zt(m, 'right'), Object.assign({}, d, m)
    },
    getCellClass: (i, c, p, v) => {
      const b = v.isSubColumn ? [] : ll(n.b(), c, e == null ? void 0 : e.fixed, e.store),
        d = [v.id, v.align, v.className, ...b],
        m = t == null ? void 0 : t.props.cellClassName
      return (
        typeof m == 'string'
          ? d.push(m)
          : typeof m == 'function' &&
            d.push(m.call(null, { rowIndex: i, columnIndex: c, row: p, column: v })),
        d.push(n.e('cell')),
        d.filter((w) => Boolean(w)).join(' ')
      )
    },
    getSpan: (i, c, p, v) => {
      let b = 1,
        d = 1
      const m = t == null ? void 0 : t.props.spanMethod
      if (typeof m == 'function') {
        const w = m({ row: i, column: c, rowIndex: p, columnIndex: v })
        Array.isArray(w)
          ? ((b = w[0]), (d = w[1]))
          : typeof w == 'object' && ((b = w.rowspan), (d = w.colspan))
      }
      return { rowspan: b, colspan: d }
    },
    getColspanRealWidth: (i, c, p) => {
      if (c < 1) return i[p].realWidth
      const v = i.map(({ realWidth: b, width: d }) => b || d).slice(p, p + c)
      return Number(v.reduce((b, d) => Number(b) + Number(d), -1))
    },
  }
}
function Sd(e) {
  const t = Se(et),
    n = Y('table'),
    {
      handleDoubleClick: l,
      handleClick: o,
      handleContextMenu: s,
      handleMouseEnter: r,
      handleMouseLeave: u,
      handleCellMouseEnter: a,
      handleCellMouseLeave: i,
      tooltipContent: c,
      tooltipTrigger: p,
    } = yd(e),
    {
      getRowStyle: v,
      getRowClass: b,
      getCellStyle: d,
      getCellClass: m,
      getSpan: w,
      getColspanRealWidth: E,
    } = Cd(e),
    g = $(() => e.store.states.columns.value.findIndex(({ type: S }) => S === 'default')),
    h = (S, x) => {
      const L = t.props.rowKey
      return L ? xe(S, L) : x
    },
    C = (S, x, L, V = !1) => {
      const { tooltipEffect: W, store: D } = e,
        { indent: J, columns: ee } = D.states,
        fe = b(S, x)
      let le = !0
      return (
        L && (fe.push(n.em('row', `level-${L.level}`)), (le = L.display)),
        _(
          'tr',
          {
            style: [le ? null : { display: 'none' }, v(S, x)],
            class: fe,
            key: h(S, x),
            onDblclick: (R) => l(R, S),
            onClick: (R) => o(R, S),
            onContextmenu: (R) => s(R, S),
            onMouseenter: () => r(x),
            onMouseleave: u,
          },
          ee.value.map((R, M) => {
            const { rowspan: B, colspan: j } = w(S, R, x, M)
            if (!B || !j) return null
            const ie = se({}, R)
            ie.realWidth = E(ee.value, j, M)
            const oe = {
              store: e.store,
              _self: e.context || t,
              column: ie,
              row: S,
              $index: x,
              cellIndex: M,
              expanded: V,
            }
            M === g.value &&
              L &&
              ((oe.treeNode = { indent: L.level * J.value, level: L.level }),
              typeof L.expanded == 'boolean' &&
                ((oe.treeNode.expanded = L.expanded),
                'loading' in L && (oe.treeNode.loading = L.loading),
                'noLazyChildren' in L && (oe.treeNode.noLazyChildren = L.noLazyChildren)))
            const pe = `${x},${M}`,
              ae = ie.columnKey || ie.rawColumnKey || '',
              ye = O(M, R, oe)
            return _(
              'td',
              {
                style: d(x, M, S, R),
                class: m(x, M, S, R),
                key: `${ae}${pe}`,
                rowspan: B,
                colspan: j,
                onMouseenter: (we) => a(we, Ce(se({}, S), { tooltipEffect: W })),
                onMouseleave: i,
              },
              [ye],
            )
          }),
        )
      )
    },
    O = (S, x, L) => x.renderCell(L)
  return {
    wrappedRowRender: (S, x) => {
      const L = e.store,
        { isRowExpanded: V, assertRowKey: W } = L,
        { treeData: D, lazyTreeNodeMap: J, childrenColumnName: ee, rowKey: fe } = L.states,
        le = L.states.columns.value
      if (le.some(({ type: R }) => R === 'expand')) {
        const R = V(S),
          M = C(S, x, void 0, R),
          B = t.renderExpanded
        return R
          ? B
            ? [
                [
                  M,
                  _('tr', { key: `expanded-row__${M.key}` }, [
                    _(
                      'td',
                      { colspan: le.length, class: 'el-table__cell el-table__expanded-cell' },
                      [B({ row: S, $index: x, store: L, expanded: R })],
                    ),
                  ]),
                ],
              ]
            : (console.error('[Element Error]renderExpanded is required.'), M)
          : [[M]]
      } else if (Object.keys(D.value).length) {
        W()
        const R = xe(S, fe.value)
        let M = D.value[R],
          B = null
        M &&
          ((B = { expanded: M.expanded, level: M.level, display: !0 }),
          typeof M.lazy == 'boolean' &&
            (typeof M.loaded == 'boolean' &&
              M.loaded &&
              (B.noLazyChildren = !(M.children && M.children.length)),
            (B.loading = M.loading)))
        const j = [C(S, x, B)]
        if (M) {
          let ie = 0
          const oe = (ae, ye) => {
            !(ae && ae.length && ye) ||
              ae.forEach((we) => {
                const Ee = {
                    display: ye.display && ye.expanded,
                    level: ye.level + 1,
                    expanded: !1,
                    noLazyChildren: !1,
                    loading: !1,
                  },
                  Ae = xe(we, fe.value)
                if (Ae == null) throw new Error('For nested data item, row-key is required.')
                if (
                  ((M = se({}, D.value[Ae])),
                  M &&
                    ((Ee.expanded = M.expanded),
                    (M.level = M.level || Ee.level),
                    (M.display = !!(M.expanded && Ee.display)),
                    typeof M.lazy == 'boolean' &&
                      (typeof M.loaded == 'boolean' &&
                        M.loaded &&
                        (Ee.noLazyChildren = !(M.children && M.children.length)),
                      (Ee.loading = M.loading))),
                  ie++,
                  j.push(C(we, x + ie, Ee)),
                  M)
                ) {
                  const Ve = J.value[Ae] || we[ee.value]
                  oe(Ve, M)
                }
              })
          }
          M.display = !0
          const pe = J.value[R] || S[ee.value]
          oe(pe, M)
        }
        return j
      } else return C(S, x, void 0)
    },
    tooltipContent: c,
    tooltipTrigger: p,
  }
}
const wd = {
  store: { required: !0, type: Object },
  stripe: Boolean,
  tooltipEffect: String,
  context: { default: () => ({}), type: Object },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: { type: String, default: '' },
  highlight: Boolean,
}
var Ed = ne({
  name: 'ElTableBody',
  props: wd,
  setup(e) {
    const t = ge(),
      n = Se(et),
      l = Y('table'),
      { wrappedRowRender: o, tooltipContent: s, tooltipTrigger: r } = Sd(e),
      { onColumnsChange: u, onScrollableChange: a } = Uo(n)
    return (
      re(e.store.states.hoverRow, (i, c) => {
        if (!e.store.states.isComplex.value || !Pt) return
        let p = window.requestAnimationFrame
        p || (p = (v) => window.setTimeout(v, 16)),
          p(() => {
            var v
            const b =
                (v = t == null ? void 0 : t.vnode.el) == null
                  ? void 0
                  : v.querySelectorAll(`.${l.e('row')}`),
              d = b[c],
              m = b[i]
            d && Lt(d, 'hover-row'), m && Ot(m, 'hover-row')
          })
      }),
      to(() => {
        var i
        ;(i = ft) == null || i()
      }),
      Un(() => {
        var i
        ;(i = ft) == null || i()
      }),
      {
        ns: l,
        onColumnsChange: u,
        onScrollableChange: a,
        wrappedRowRender: o,
        tooltipContent: s,
        tooltipTrigger: r,
      }
    )
  },
  render() {
    const { wrappedRowRender: e, store: t } = this,
      n = t.states.data.value || []
    return _('tbody', {}, [n.reduce((l, o) => l.concat(e(o, l.length)), [])])
  },
})
function al(e) {
  const t = e.tableLayout === 'auto'
  let n = e.columns || []
  t && n.every((o) => o.width === void 0) && (n = [])
  const l = (o) => {
    const s = { key: `${e.tableLayout}_${o.id}`, style: {}, name: void 0 }
    return t ? (s.style = { width: `${o.width}px` }) : (s.name = o.id), s
  }
  return _(
    'colgroup',
    {},
    n.map((o) => _('col', l(o))),
  )
}
al.props = ['columns', 'tableLayout']
function $d() {
  const e = Se(et),
    t = e == null ? void 0 : e.store,
    n = $(() => t.states.fixedLeafColumnsLength.value),
    l = $(() => t.states.rightFixedColumns.value.length),
    o = $(() => t.states.columns.value.length),
    s = $(() => t.states.fixedColumns.value.length),
    r = $(() => t.states.rightFixedColumns.value.length)
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: l,
    columnsCount: o,
    leftFixedCount: s,
    rightFixedCount: r,
    columns: t.states.columns,
  }
}
function kd(e) {
  const { columns: t } = $d(),
    n = Y('table')
  return {
    getCellClasses: (s, r) => {
      const u = s[r],
        a = [n.e('cell'), u.id, u.align, u.labelClassName, ...ll(n.b(), r, u.fixed, e.store)]
      return u.className && a.push(u.className), u.children || a.push(n.is('leaf')), a
    },
    getCellStyles: (s, r) => {
      const u = ol(r, s.fixed, e.store)
      return zt(u, 'left'), zt(u, 'right'), u
    },
    columns: t,
  }
}
var Md = ne({
  name: 'ElTableFooter',
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: l } = kd(e)
    return { ns: Y('table'), getCellClasses: t, getCellStyles: n, columns: l }
  },
  render() {
    const {
        columns: e,
        getCellStyles: t,
        getCellClasses: n,
        summaryMethod: l,
        sumText: o,
        ns: s,
      } = this,
      r = this.store.states.data.value
    let u = []
    return (
      l
        ? (u = l({ columns: e, data: r }))
        : e.forEach((a, i) => {
            if (i === 0) {
              u[i] = o
              return
            }
            const c = r.map((d) => Number(d[a.property])),
              p = []
            let v = !0
            c.forEach((d) => {
              if (!Number.isNaN(+d)) {
                v = !1
                const m = `${d}`.split('.')[1]
                p.push(m ? m.length : 0)
              }
            })
            const b = Math.max.apply(null, p)
            v
              ? (u[i] = '')
              : (u[i] = c.reduce((d, m) => {
                  const w = Number(m)
                  return Number.isNaN(+w) ? d : Number.parseFloat((d + m).toFixed(Math.min(b, 20)))
                }, 0))
          }),
      _('table', { class: s.e('footer'), cellspacing: '0', cellpadding: '0', border: '0' }, [
        al({ columns: e }),
        _('tbody', [
          _('tr', {}, [
            ...e.map((a, i) =>
              _(
                'td',
                { key: i, colspan: a.colSpan, rowspan: a.rowSpan, class: n(e, i), style: t(a, i) },
                [_('div', { class: ['cell', a.labelClassName] }, [u[i]])],
              ),
            ),
          ]),
        ]),
      ])
    )
  },
})
function Td(e) {
  return {
    setCurrentRow: (c) => {
      e.commit('setCurrentRow', c)
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (c, p) => {
      e.toggleRowSelection(c, p, !1), e.updateAllSelected()
    },
    clearSelection: () => {
      e.clearSelection()
    },
    clearFilter: (c) => {
      e.clearFilter(c)
    },
    toggleAllSelection: () => {
      e.commit('toggleAllSelection')
    },
    toggleRowExpansion: (c, p) => {
      e.toggleRowExpansionAdapter(c, p)
    },
    clearSort: () => {
      e.clearSort()
    },
    sort: (c, p) => {
      e.commit('sort', { prop: c, order: p })
    },
  }
}
function xd(e, t, n, l) {
  const o = P(!1),
    s = P(null),
    r = P(!1),
    u = (R) => {
      r.value = R
    },
    a = P({ width: null, height: null, headerHeight: null }),
    i = P(!1),
    c = { display: 'inline-block', verticalAlign: 'middle' },
    p = P(),
    v = P(0),
    b = P(0),
    d = P(0),
    m = P(0)
  kt(() => {
    t.setHeight(e.height)
  }),
    kt(() => {
      t.setMaxHeight(e.maxHeight)
    }),
    re(
      () => [e.currentRowKey, n.states.rowKey],
      ([R, M]) => {
        !f(M) || n.setCurrentRowKey(`${R}`)
      },
      { immediate: !0 },
    ),
    re(
      () => e.data,
      (R) => {
        l.store.commit('setData', R)
      },
      { immediate: !0, deep: !0 },
    ),
    kt(() => {
      e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys)
    })
  const w = () => {
      l.store.commit('setHoverRow', null), l.hoverState && (l.hoverState = null)
    },
    E = (R, M) => {
      const { pixelX: B, pixelY: j } = M
      Math.abs(B) >= Math.abs(j) && (l.refs.bodyWrapper.scrollLeft += M.pixelX / 5)
    },
    g = $(
      () =>
        e.height ||
        e.maxHeight ||
        n.states.fixedColumns.value.length > 0 ||
        n.states.rightFixedColumns.value.length > 0,
    ),
    h = $(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : '' })),
    C = () => {
      g.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(x)
    }
  Ze(() =>
    ot(this, null, function* () {
      yield ve(), n.updateColumns(), L(), requestAnimationFrame(C)
      const R = l.vnode.el,
        M = l.refs.headerWrapper
      e.flexible && R && R.parentElement && (R.parentElement.style.minWidth = '0'),
        (a.value = {
          width: (p.value = R.offsetWidth),
          height: R.offsetHeight,
          headerHeight: e.showHeader && M ? M.offsetHeight : null,
        }),
        n.states.columns.value.forEach((B) => {
          B.filteredValue &&
            B.filteredValue.length &&
            l.store.commit('filterChange', { column: B, values: B.filteredValue, silent: !0 })
        }),
        (l.$ready = !0)
    }),
  )
  const O = (R, M) => {
      if (!R) return
      const B = Array.from(R.classList).filter((j) => !j.startsWith('is-scrolling-'))
      B.push(t.scrollX.value ? M : 'is-scrolling-none'), (R.className = B.join(' '))
    },
    T = (R) => {
      const { tableWrapper: M } = l.refs
      O(M, R)
    },
    S = (R) => {
      const { tableWrapper: M } = l.refs
      return !!(M && M.classList.contains(R))
    },
    x = function () {
      if (!l.refs.scrollBarRef) return
      if (!t.scrollX.value) {
        const ae = 'is-scrolling-none'
        S(ae) || T(ae)
        return
      }
      const R = l.refs.scrollBarRef.wrap$
      if (!R) return
      const { scrollLeft: M, offsetWidth: B, scrollWidth: j } = R,
        { headerWrapper: ie, footerWrapper: oe } = l.refs
      ie && (ie.scrollLeft = M), oe && (oe.scrollLeft = M)
      const pe = j - B - 1
      M >= pe ? T('is-scrolling-right') : T(M === 0 ? 'is-scrolling-left' : 'is-scrolling-middle')
    },
    L = () => {
      !l.refs.scrollBarRef ||
        (l.refs.scrollBarRef.wrap$ && dl(l.refs.scrollBarRef.wrap$, 'scroll', x, { passive: !0 }),
        e.fit ? Qt(l.vnode.el, V) : dl(window, 'resize', V))
    },
    V = () => {
      var R, M
      if (!l.$ready) return
      let B = !1
      const j = l.vnode.el,
        { width: ie, height: oe, headerHeight: pe } = a.value,
        ae = (p.value = j.offsetWidth)
      ie !== ae && (B = !0)
      const ye = j.offsetHeight
      ;(e.height || g.value) && oe !== ye && (B = !0)
      const we = l.refs.headerWrapper
      e.showHeader && (we == null ? void 0 : we.offsetHeight) !== pe && (B = !0),
        (v.value = ((R = l.refs.tableWrapper) == null ? void 0 : R.scrollHeight) || 0),
        (d.value = (we == null ? void 0 : we.scrollHeight) || 0),
        (m.value = ((M = l.refs.footerWrapper) == null ? void 0 : M.scrollHeight) || 0),
        (b.value = v.value - d.value - m.value),
        B &&
          ((a.value = {
            width: ae,
            height: ye,
            headerHeight: (e.showHeader && (we == null ? void 0 : we.offsetHeight)) || 0,
          }),
          C())
    },
    W = Mt(),
    D = $(() => {
      const { bodyWidth: R, scrollY: M, gutterWidth: B } = t
      return R.value ? `${R.value - (M.value ? B : 0)}px` : ''
    }),
    J = $(() => (e.maxHeight ? 'fixed' : e.tableLayout)),
    ee = $(() => {
      if (e.data && e.data.length) return null
      let R = '100%'
      b.value && (R = `${b.value}px`)
      const M = p.value
      return { width: M ? `${M}px` : '', height: R }
    }),
    fe = $(() =>
      e.height
        ? { height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px` }
        : e.maxHeight
        ? { maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px` }
        : {},
    ),
    le = $(() => {
      var R, M
      if (e.height) return { height: '100%' }
      if (e.maxHeight) {
        if (Number.isNaN(Number(e.maxHeight)))
          return { maxHeight: `calc(${e.maxHeight} - ${d.value + m.value}px)` }
        {
          const B = ((R = l.refs.headerWrapper) == null ? void 0 : R.scrollHeight) || 0,
            j = ((M = l.refs.footerWrapper) == null ? void 0 : M.scrollHeight) || 0,
            ie = e.maxHeight
          if (v.value >= Number(ie)) return { maxHeight: `${v.value - B - j}px` }
        }
      }
      return {}
    })
  return {
    isHidden: o,
    renderExpanded: s,
    setDragVisible: u,
    isGroup: i,
    handleMouseLeave: w,
    handleHeaderFooterMousewheel: E,
    tableSize: W,
    emptyBlockStyle: ee,
    handleFixedMousewheel: (R, M) => {
      const B = l.refs.bodyWrapper
      if (Math.abs(M.spinY) > 0) {
        const j = B.scrollTop
        M.pixelY < 0 && j !== 0 && R.preventDefault(),
          M.pixelY > 0 && B.scrollHeight - B.clientHeight > j && R.preventDefault(),
          (B.scrollTop += Math.ceil(M.pixelY / 5))
      } else B.scrollLeft += Math.ceil(M.pixelX / 5)
    },
    resizeProxyVisible: r,
    bodyWidth: D,
    resizeState: a,
    doLayout: C,
    tableBodyStyles: h,
    tableLayout: J,
    scrollbarViewStyle: c,
    tableInnerStyle: fe,
    scrollbarStyle: le,
  }
}
var Pd = {
  data: { type: Array, default: () => [] },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: { type: Boolean, default: !0 },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: { type: Boolean, default: !0 },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: { type: Boolean, default: !0 },
  indent: { type: Number, default: 16 },
  treeProps: {
    type: Object,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' }),
  },
  lazy: Boolean,
  load: Function,
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' },
  tableLayout: { type: String, default: 'fixed' },
  scrollbarAlwaysOn: { type: Boolean, default: !1 },
  flexible: Boolean,
}
const Ad = () => {
  const e = P(),
    t = (s, r) => {
      const u = e.value
      u && u.scrollTo(s, r)
    },
    n = (s, r) => {
      const u = e.value
      u && Yt(r) && ['Top', 'Left'].includes(s) && u[`setScroll${s}`](r)
    }
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (s) => n('Top', s),
    setScrollLeft: (s) => n('Left', s),
  }
}
let Od = 1
const Ld = ne({
    name: 'ElTable',
    directives: { Mousewheel: ki },
    components: { TableHeader: bd, TableBody: Ed, TableFooter: Md, ElScrollbar: Qn, hColgroup: al },
    props: Pd,
    emits: [
      'select',
      'select-all',
      'selection-change',
      'cell-mouse-enter',
      'cell-mouse-leave',
      'cell-contextmenu',
      'cell-click',
      'cell-dblclick',
      'row-click',
      'row-contextmenu',
      'row-dblclick',
      'header-click',
      'header-contextmenu',
      'sort-change',
      'filter-change',
      'current-change',
      'header-dragend',
      'expand-change',
    ],
    setup(e) {
      const { t } = st(),
        n = Y('table'),
        l = ge()
      mt(et, l)
      const o = od(l, e)
      l.store = o
      const s = new sd({ store: l.store, table: l, fit: e.fit, showHeader: e.showHeader })
      l.layout = s
      const r = $(() => (o.states.data.value || []).length === 0),
        {
          setCurrentRow: u,
          getSelectionRows: a,
          toggleRowSelection: i,
          clearSelection: c,
          clearFilter: p,
          toggleAllSelection: v,
          toggleRowExpansion: b,
          clearSort: d,
          sort: m,
        } = Td(o),
        {
          isHidden: w,
          renderExpanded: E,
          setDragVisible: g,
          isGroup: h,
          handleMouseLeave: C,
          handleHeaderFooterMousewheel: O,
          tableSize: T,
          emptyBlockStyle: S,
          handleFixedMousewheel: x,
          resizeProxyVisible: L,
          bodyWidth: V,
          resizeState: W,
          doLayout: D,
          tableBodyStyles: J,
          tableLayout: ee,
          scrollbarViewStyle: fe,
          tableInnerStyle: le,
          scrollbarStyle: be,
        } = xd(e, s, o, l),
        { scrollBarRef: R, scrollTo: M, setScrollLeft: B, setScrollTop: j } = Ad(),
        ie = It(D, 50),
        oe = `el-table_${Od++}`
      ;(l.tableId = oe),
        (l.state = { isGroup: h, resizeState: W, doLayout: D, debouncedUpdateLayout: ie })
      const pe = $(() => e.sumText || t('el.table.sumText')),
        ae = $(() => e.emptyText || t('el.table.emptyText'))
      return {
        ns: n,
        layout: s,
        store: o,
        handleHeaderFooterMousewheel: O,
        handleMouseLeave: C,
        tableId: oe,
        tableSize: T,
        isHidden: w,
        isEmpty: r,
        renderExpanded: E,
        resizeProxyVisible: L,
        resizeState: W,
        isGroup: h,
        bodyWidth: V,
        tableBodyStyles: J,
        emptyBlockStyle: S,
        debouncedUpdateLayout: ie,
        handleFixedMousewheel: x,
        setCurrentRow: u,
        getSelectionRows: a,
        toggleRowSelection: i,
        clearSelection: c,
        clearFilter: p,
        toggleAllSelection: v,
        toggleRowExpansion: b,
        clearSort: d,
        doLayout: D,
        sort: m,
        t,
        setDragVisible: g,
        context: l,
        computedSumText: pe,
        computedEmptyText: ae,
        tableLayout: ee,
        scrollbarViewStyle: fe,
        tableInnerStyle: le,
        scrollbarStyle: be,
        scrollBarRef: R,
        scrollTo: M,
        setScrollLeft: B,
        setScrollTop: j,
      }
    },
  }),
  Nd = ['data-prefix'],
  Id = { ref: 'hiddenColumns', class: 'hidden-columns' }
function Rd(e, t, n, l, o, s) {
  const r = $e('hColgroup'),
    u = $e('table-header'),
    a = $e('table-body'),
    i = $e('el-scrollbar'),
    c = $e('table-footer'),
    p = Xn('mousewheel')
  return (
    A(),
    F(
      'div',
      {
        ref: 'tableWrapper',
        class: I([
          {
            [e.ns.m('fit')]: e.fit,
            [e.ns.m('striped')]: e.stripe,
            [e.ns.m('border')]: e.border || e.isGroup,
            [e.ns.m('hidden')]: e.isHidden,
            [e.ns.m('group')]: e.isGroup,
            [e.ns.m('fluid-height')]: e.maxHeight,
            [e.ns.m('scrollable-x')]: e.layout.scrollX.value,
            [e.ns.m('scrollable-y')]: e.layout.scrollY.value,
            [e.ns.m('enable-row-hover')]: !e.store.states.isComplex.value,
            [e.ns.m('enable-row-transition')]:
              (e.store.states.data.value || []).length !== 0 &&
              (e.store.states.data.value || []).length < 100,
            'has-footer': e.showSummary,
          },
          e.ns.m(e.tableSize),
          e.className,
          e.ns.b(),
          e.ns.m(`layout-${e.tableLayout}`),
        ]),
        style: ke(e.style),
        'data-prefix': e.ns.namespace.value,
        onMouseleave: t[0] || (t[0] = (v) => e.handleMouseLeave()),
      },
      [
        Z(
          'div',
          { class: I(e.ns.e('inner-wrapper')), style: ke(e.tableInnerStyle) },
          [
            Z('div', Id, [ce(e.$slots, 'default')], 512),
            e.showHeader && e.tableLayout === 'fixed'
              ? ze(
                  (A(),
                  F(
                    'div',
                    { key: 0, ref: 'headerWrapper', class: I(e.ns.e('header-wrapper')) },
                    [
                      Z(
                        'table',
                        {
                          ref: 'tableHeader',
                          class: I(e.ns.e('header')),
                          style: ke(e.tableBodyStyles),
                          border: '0',
                          cellpadding: '0',
                          cellspacing: '0',
                        },
                        [
                          X(
                            r,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          X(
                            u,
                            {
                              ref: 'tableHeaderRef',
                              border: e.border,
                              'default-sort': e.defaultSort,
                              store: e.store,
                              onSetDragVisible: e.setDragVisible,
                            },
                            null,
                            8,
                            ['border', 'default-sort', 'store', 'onSetDragVisible'],
                          ),
                        ],
                        6,
                      ),
                    ],
                    2,
                  )),
                  [[p, e.handleHeaderFooterMousewheel]],
                )
              : U('v-if', !0),
            Z(
              'div',
              { ref: 'bodyWrapper', class: I(e.ns.e('body-wrapper')) },
              [
                X(
                  i,
                  {
                    ref: 'scrollBarRef',
                    'view-style': e.scrollbarViewStyle,
                    'wrap-style': e.scrollbarStyle,
                    always: e.scrollbarAlwaysOn,
                  },
                  {
                    default: G(() => [
                      Z(
                        'table',
                        {
                          ref: 'tableBody',
                          class: I(e.ns.e('body')),
                          cellspacing: '0',
                          cellpadding: '0',
                          border: '0',
                          style: ke({ width: e.bodyWidth, tableLayout: e.tableLayout }),
                        },
                        [
                          X(
                            r,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          e.showHeader && e.tableLayout === 'auto'
                            ? (A(),
                              Q(
                                u,
                                {
                                  key: 0,
                                  ref: 'tableHeaderRef',
                                  border: e.border,
                                  'default-sort': e.defaultSort,
                                  store: e.store,
                                  onSetDragVisible: e.setDragVisible,
                                },
                                null,
                                8,
                                ['border', 'default-sort', 'store', 'onSetDragVisible'],
                              ))
                            : U('v-if', !0),
                          X(
                            a,
                            {
                              context: e.context,
                              highlight: e.highlightCurrentRow,
                              'row-class-name': e.rowClassName,
                              'tooltip-effect': e.tooltipEffect,
                              'row-style': e.rowStyle,
                              store: e.store,
                              stripe: e.stripe,
                            },
                            null,
                            8,
                            [
                              'context',
                              'highlight',
                              'row-class-name',
                              'tooltip-effect',
                              'row-style',
                              'store',
                              'stripe',
                            ],
                          ),
                        ],
                        6,
                      ),
                      e.isEmpty
                        ? (A(),
                          F(
                            'div',
                            {
                              key: 0,
                              ref: 'emptyBlock',
                              style: ke(e.emptyBlockStyle),
                              class: I(e.ns.e('empty-block')),
                            },
                            [
                              Z(
                                'span',
                                { class: I(e.ns.e('empty-text')) },
                                [ce(e.$slots, 'empty', {}, () => [at(ue(e.computedEmptyText), 1)])],
                                2,
                              ),
                            ],
                            6,
                          ))
                        : U('v-if', !0),
                      e.$slots.append
                        ? (A(),
                          F(
                            'div',
                            { key: 1, ref: 'appendWrapper', class: I(e.ns.e('append-wrapper')) },
                            [ce(e.$slots, 'append')],
                            2,
                          ))
                        : U('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['view-style', 'wrap-style', 'always'],
                ),
              ],
              2,
            ),
            e.showSummary
              ? ze(
                  (A(),
                  F(
                    'div',
                    { key: 1, ref: 'footerWrapper', class: I(e.ns.e('footer-wrapper')) },
                    [
                      X(
                        c,
                        {
                          border: e.border,
                          'default-sort': e.defaultSort,
                          store: e.store,
                          style: ke(e.tableBodyStyles),
                          'sum-text': e.computedSumText,
                          'summary-method': e.summaryMethod,
                        },
                        null,
                        8,
                        ['border', 'default-sort', 'store', 'style', 'sum-text', 'summary-method'],
                      ),
                    ],
                    2,
                  )),
                  [
                    [Tt, !e.isEmpty],
                    [p, e.handleHeaderFooterMousewheel],
                  ],
                )
              : U('v-if', !0),
            e.border || e.isGroup
              ? (A(), F('div', { key: 2, class: I(e.ns.e('border-left-patch')) }, null, 2))
              : U('v-if', !0),
          ],
          6,
        ),
        ze(Z('div', { ref: 'resizeProxy', class: I(e.ns.e('column-resize-proxy')) }, null, 2), [
          [Tt, e.resizeProxyVisible],
        ]),
      ],
      46,
      Nd,
    )
  )
}
var zd = he(Ld, [
  ['render', Rd],
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue'],
])
const Fd = { selection: 'table-column--selection', expand: 'table__expand-column' },
  Bd = {
    default: { order: '' },
    selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    index: { width: 48, minWidth: 48, realWidth: 48, order: '' },
  },
  Wd = (e) => Fd[e] || '',
  _d = {
    selection: {
      renderHeader({ store: e }) {
        function t() {
          return e.states.data.value && e.states.data.value.length === 0
        }
        return _(Rt, {
          disabled: t(),
          size: e.states.tableSize.value,
          indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
          'onUpdate:modelValue': e.toggleAllSelection,
          modelValue: e.states.isAllSelected.value,
        })
      },
      renderCell({ row: e, column: t, store: n, $index: l }) {
        return _(Rt, {
          disabled: t.selectable ? !t.selectable.call(null, e, l) : !1,
          size: n.states.tableSize.value,
          onChange: () => {
            n.commit('rowSelectedChanged', e)
          },
          onClick: (o) => o.stopPropagation(),
          modelValue: n.isSelected(e),
        })
      },
      sortable: !1,
      resizable: !1,
    },
    index: {
      renderHeader({ column: e }) {
        return e.label || '#'
      },
      renderCell({ column: e, $index: t }) {
        let n = t + 1
        const l = e.index
        return (
          typeof l == 'number' ? (n = t + l) : typeof l == 'function' && (n = l(t)),
          _('div', {}, [n])
        )
      },
      sortable: !1,
    },
    expand: {
      renderHeader({ column: e }) {
        return e.label || ''
      },
      renderCell({ row: e, store: t, expanded: n }) {
        const { ns: l } = t,
          o = [l.e('expand-icon')]
        return (
          n && o.push(l.em('expand-icon', 'expanded')),
          _(
            'div',
            {
              class: o,
              onClick: function (r) {
                r.stopPropagation(), t.toggleRowExpansion(e)
              },
            },
            { default: () => [_(Re, null, { default: () => [_(Cn)] })] },
          )
        )
      },
      sortable: !1,
      resizable: !1,
    },
  }
function Hd({ row: e, column: t, $index: n }) {
  var l
  const o = t.property,
    s = o && ba(e, o).value
  return t && t.formatter
    ? t.formatter(e, t, s, n)
    : ((l = s == null ? void 0 : s.toString) == null ? void 0 : l.call(s)) || ''
}
function Vd({ row: e, treeNode: t, store: n }, l = !1) {
  const { ns: o } = n
  if (!t) return l ? [_('span', { class: o.e('placeholder') })] : null
  const s = [],
    r = function (u) {
      u.stopPropagation(), n.loadOrToggle(e)
    }
  if (
    (t.indent &&
      s.push(_('span', { class: o.e('indent'), style: { 'padding-left': `${t.indent}px` } })),
    typeof t.expanded == 'boolean' && !t.noLazyChildren)
  ) {
    const u = [o.e('expand-icon'), t.expanded ? o.em('expand-icon', 'expanded') : '']
    let a = Cn
    t.loading && (a = Fa),
      s.push(
        _(
          'div',
          { class: u, onClick: r },
          {
            default: () => [
              _(Re, { class: { [o.is('loading')]: t.loading } }, { default: () => [_(a)] }),
            ],
          },
        ),
      )
  } else s.push(_('span', { class: o.e('placeholder') }))
  return s
}
function Ul(e, t) {
  return e.reduce((n, l) => ((n[l] = l), n), t)
}
function Dd(e, t) {
  const n = ge()
  return {
    registerComplexWatchers: () => {
      const s = ['fixed'],
        r = { realWidth: 'width', realMinWidth: 'minWidth' },
        u = Ul(s, r)
      Object.keys(u).forEach((a) => {
        const i = r[a]
        Ut(t, i) &&
          re(
            () => t[i],
            (c) => {
              let p = c
              i === 'width' && a === 'realWidth' && (p = nl(c)),
                i === 'minWidth' && a === 'realMinWidth' && (p = Do(c)),
                (n.columnConfig.value[i] = p),
                (n.columnConfig.value[a] = p)
              const v = i === 'fixed'
              e.value.store.scheduleLayout(v)
            },
          )
      })
    },
    registerNormalWatchers: () => {
      const s = [
          'label',
          'filters',
          'filterMultiple',
          'sortable',
          'index',
          'formatter',
          'className',
          'labelClassName',
          'showOverflowTooltip',
        ],
        r = { property: 'prop', align: 'realAlign', headerAlign: 'realHeaderAlign' },
        u = Ul(s, r)
      Object.keys(u).forEach((a) => {
        const i = r[a]
        Ut(t, i) &&
          re(
            () => t[i],
            (c) => {
              n.columnConfig.value[a] = c
            },
          )
      })
    },
  }
}
function Kd(e, t, n) {
  const l = ge(),
    o = P(''),
    s = P(!1),
    r = P(),
    u = P(),
    a = Y('table')
  kt(() => {
    ;(r.value = e.align ? `is-${e.align}` : null), r.value
  }),
    kt(() => {
      ;(u.value = e.headerAlign ? `is-${e.headerAlign}` : r.value), u.value
    })
  const i = $(() => {
      let h = l.vnode.vParent || l.parent
      for (; h && !h.tableId && !h.columnId; ) h = h.vnode.vParent || h.parent
      return h
    }),
    c = $(() => {
      const { store: h } = l.parent
      if (!h) return !1
      const { treeData: C } = h.states,
        O = C.value
      return O && Object.keys(O).length > 0
    }),
    p = P(nl(e.width)),
    v = P(Do(e.minWidth)),
    b = (h) => (
      p.value && (h.width = p.value),
      v.value && (h.minWidth = v.value),
      h.minWidth || (h.minWidth = 80),
      (h.realWidth = Number(h.width === void 0 ? h.minWidth : h.width)),
      h
    ),
    d = (h) => {
      const C = h.type,
        O = _d[C] || {}
      Object.keys(O).forEach((S) => {
        const x = O[S]
        S !== 'className' && x !== void 0 && (h[S] = x)
      })
      const T = Wd(C)
      if (T) {
        const S = `${f(a.namespace)}-${T}`
        h.className = h.className ? `${h.className} ${S}` : S
      }
      return h
    },
    m = (h) => {
      Array.isArray(h) ? h.forEach((O) => C(O)) : C(h)
      function C(O) {
        var T
        ;((T = O == null ? void 0 : O.type) == null ? void 0 : T.name) === 'ElTableColumn' &&
          (O.vParent = l)
      }
    }
  return {
    columnId: o,
    realAlign: r,
    isSubColumn: s,
    realHeaderAlign: u,
    columnOrTableParent: i,
    setColumnWidth: b,
    setColumnForcedProps: d,
    setColumnRenders: (h) => {
      e.renderHeader ||
        (h.type !== 'selection' &&
          (h.renderHeader = (T) => {
            l.columnConfig.value.label
            const S = t.header
            return S ? S(T) : h.label
          }))
      let C = h.renderCell
      const O = c.value
      return (
        h.type === 'expand'
          ? ((h.renderCell = (T) => _('div', { class: 'cell' }, [C(T)])),
            (n.value.renderExpanded = (T) => (t.default ? t.default(T) : t.default)))
          : ((C = C || Hd),
            (h.renderCell = (T) => {
              let S = null
              if (t.default) {
                const W = t.default(T)
                S = W.some((D) => D.type !== ya) ? W : C(T)
              } else S = C(T)
              const x = O && T.cellIndex === 0,
                L = Vd(T, x),
                V = { class: 'cell', style: {} }
              return (
                h.showOverflowTooltip &&
                  ((V.class = `${V.class} ${f(a.namespace)}-tooltip`),
                  (V.style = { width: `${(T.column.realWidth || Number(T.column.width)) - 1}px` })),
                m(S),
                _('div', V, [L, S])
              )
            })),
        h
      )
    },
    getPropsData: (...h) =>
      h.reduce(
        (C, O) => (
          Array.isArray(O) &&
            O.forEach((T) => {
              C[T] = e[T]
            }),
          C
        ),
        {},
      ),
    getColumnElIndex: (h, C) => Array.prototype.indexOf.call(h, C),
  }
}
var jd = {
  type: { type: String, default: 'default' },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  renderHeader: Function,
  sortable: { type: [Boolean, String], default: !1 },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: { type: Boolean, default: !0 },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: { type: Boolean, default: !0 },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ['ascending', 'descending', null],
    validator: (e) => e.every((t) => ['ascending', 'descending', null].includes(t)),
  },
}
let qd = 1
var Xo = ne({
  name: 'ElTableColumn',
  components: { ElCheckbox: Rt },
  props: jd,
  setup(e, { slots: t }) {
    const n = ge(),
      l = P({}),
      o = $(() => {
        let g = n.parent
        for (; g && !g.tableId; ) g = g.parent
        return g
      }),
      { registerNormalWatchers: s, registerComplexWatchers: r } = Dd(o, e),
      {
        columnId: u,
        isSubColumn: a,
        realHeaderAlign: i,
        columnOrTableParent: c,
        setColumnWidth: p,
        setColumnForcedProps: v,
        setColumnRenders: b,
        getPropsData: d,
        getColumnElIndex: m,
        realAlign: w,
      } = Kd(e, t, o),
      E = c.value
    ;(u.value = `${E.tableId || E.columnId}_column_${qd++}`),
      eo(() => {
        a.value = o.value !== E
        const g = e.type || 'default',
          h = e.sortable === '' ? !0 : e.sortable,
          C = Ce(se({}, Bd[g]), {
            id: u.value,
            type: g,
            property: e.prop || e.property,
            align: w,
            headerAlign: i,
            showOverflowTooltip: e.showOverflowTooltip || e.showTooltipWhenOverflow,
            filterable: e.filters || e.filterMethod,
            filteredValue: [],
            filterPlacement: '',
            isColumnGroup: !1,
            isSubColumn: !1,
            filterOpened: !1,
            sortable: h,
            index: e.index,
            rawColumnKey: n.vnode.key,
          })
        let L = d(
          [
            'columnKey',
            'label',
            'className',
            'labelClassName',
            'type',
            'renderHeader',
            'formatter',
            'fixed',
            'resizable',
          ],
          ['sortMethod', 'sortBy', 'sortOrders'],
          ['selectable', 'reserveSelection'],
          [
            'filterMethod',
            'filters',
            'filterMultiple',
            'filterOpened',
            'filteredValue',
            'filterPlacement',
          ],
        )
        ;(L = Gc(C, L)), (L = Yc(b, p, v)(L)), (l.value = L), s(), r()
      }),
      Ze(() => {
        var g
        const h = c.value,
          C = a.value
            ? h.vnode.el.children
            : (g = h.refs.hiddenColumns) == null
            ? void 0
            : g.children,
          O = () => m(C || [], n.vnode.el)
        ;(l.value.getColumnIndex = O),
          O() > -1 &&
            o.value.store.commit('insertColumn', l.value, a.value ? h.columnConfig.value : null)
      }),
      gn(() => {
        o.value.store.commit('removeColumn', l.value, a.value ? E.columnConfig.value : null)
      }),
      (n.columnId = u.value),
      (n.columnConfig = l)
  },
  render() {
    var e, t, n
    try {
      const l =
          (t = (e = this.$slots).default) == null
            ? void 0
            : t.call(e, { row: {}, column: {}, $index: -1 }),
        o = []
      if (Array.isArray(l))
        for (const r of l)
          ((n = r.type) == null ? void 0 : n.name) === 'ElTableColumn' || r.shapeFlag & 2
            ? o.push(r)
            : r.type === Te &&
              Array.isArray(r.children) &&
              r.children.forEach((u) => {
                ;(u == null ? void 0 : u.patchFlag) !== 1024 &&
                  !Xe(u == null ? void 0 : u.children) &&
                  o.push(u)
              })
      return _('div', o)
    } catch (l) {
      return _('div', [])
    }
  },
})
const Gd = gt(zd, { TableColumn: Xo })
Ke(Xo)
const Ud = ne({
    name: 'Render',
    props: { menuData: { type: Array, default: () => [] } },
    setup(e, t) {
      const { t: n } = Aa(),
        l = Yn(e).menuData,
        o = (a) => {
          const i = {
              title: () =>
                X(Te, null, [
                  X(cl, { name: a.icon || '', style: { marginRight: '10px' } }, null),
                  X('span', null, [n(a.meta.title) || '']),
                ]),
            },
            c = a.children
          return X(Fu, { index: a.path }, se({ default: () => [r(c)] }, i))
        },
        s = (a) =>
          X(
            zu,
            { index: a.path },
            {
              default: () => [
                X(cl, { name: a.icon || '', style: { marginRight: '10px' } }, null),
                X('span', null, [n(a.meta.title) || '']),
              ],
            },
          ),
        r = (a) => (a == null ? void 0 : a.map((i) => (i.hiddenChildren ? s(i) : o(i)))),
        u = r(l)
      return () => X(Te, null, [u])
    },
  }),
  Yd = () => Xd(Ca),
  Xd = (e) => {
    const t = (n) =>
      n == null
        ? void 0
        : n.filter((o) => {
            var s
            return o.meta.type === 'M'
              ? ((o == null ? void 0 : o.children) && (o == null ? void 0 : o.children.length)
                  ? o.children.filter((u) => u.meta.type === 'M').length === 1 &&
                    o.redirect === ((s = o.children[0]) == null ? void 0 : s.path)
                    ? (o.hiddenChildren = !0)
                    : (o.children = t(o.children))
                  : (o.hiddenChildren = !0),
                !0)
              : !1
          })
    return Qo(e, ''), t(e)
  }
function Qo(e, t = '') {
  var n, l
  for (let o = 0; o < e.length; o++) {
    const s = e[o]
    s.path.startsWith('/') || (s.path = `${t}/${s.path}`),
      (n = s == null ? void 0 : s.children) != null &&
        n.length &&
        Qo(s.children, (l = s.meta) != null && l.hidePathForChildren ? t : s.path)
  }
}
const Qd = ne({
  __name: 'index',
  setup(e) {
    let t = P([])
    t.value = Yd()
    const n = no(),
      l = $(() => n.getIsCollapse),
      o = Sa(),
      s = $(() => {
        console.log(o.currentRoute.value)
        const u = o.currentRoute.value.matched
        return u[0].children.length <= 1
          ? u[0].path
          : o.currentRoute.value.meta.currentActiveMenu
          ? o.currentRoute.value.meta.currentActiveMenu
          : o.currentRoute.value.path
      }),
      r = (u, a) => {
        console.log(u, a)
      }
    return (u, a) => {
      const i = Ru
      return (
        A(),
        Q(
          i,
          {
            'default-active': f(s),
            class: 'el-menu-vertical-demo',
            collapse: f(l),
            router: !0,
            onSelect: r,
          },
          { default: G(() => [X(f(Ud), { menuData: f(t) }, null, 8, ['menuData'])]), _: 1 },
          8,
          ['default-active', 'collapse'],
        )
      )
    }
  },
})
const Zd = { class: 'common-layout' },
  Jd = { key: 0, class: 'page-topnav' },
  ef = { class: 'page-content' },
  tf = at(
    ' Copyright \xA9 2013-2022 Eli eli.xin.com All Rights Reserved. \u5907\u6848\u53F7\uFF1A\u5DDDICP\u590715874534\u53F7-1 ',
  ),
  nf = ne({
    __name: 'index',
    setup(e) {
      const t = no()
      console.log(t)
      const n = P(1),
        l = bt([])
      return (o, s) => {
        const r = vu,
          u = fu,
          a = Gd,
          i = Hc,
          c = $e('router-view'),
          p = hu,
          v = pu,
          b = du
        return (
          A(),
          F('div', Zd, [
            X(
              b,
              { class: 'container-style' },
              {
                default: G(() => [
                  X(r, null, { default: G(() => [X(xa)]), _: 1 }),
                  X(b, null, {
                    default: G(() => [
                      X(
                        u,
                        {
                          width: f(t).getIsCollapse ? '64px' : '200px',
                          class: I({
                            'animation-open': !f(t).getIsCollapse,
                            'animation-close': f(t).getIsCollapse,
                          }),
                        },
                        { default: G(() => [X(Qd)]), _: 1 },
                        8,
                        ['width', 'class'],
                      ),
                      X(b, null, {
                        default: G(() => [
                          X(p, null, {
                            default: G(() => [
                              (A(), F('div', Jd, [X(Pa)])),
                              Z('div', ef, [
                                (A(),
                                F(
                                  Te,
                                  null,
                                  xt(2, (d) => Z('h1', { key: d }, ue(d), 1)),
                                  64,
                                )),
                                at(' Main' + ue(n.value) + ue(l) + ' ', 1),
                                X(a, { 'mb-1': '', data: [] }),
                                X(i, { total: 100 }),
                                X(c),
                              ]),
                            ]),
                            _: 1,
                          }),
                          X(v, null, { default: G(() => [tf]), _: 1 }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
            ),
          ])
        )
      }
    },
  })
const bf = Ha(nf, [['__scopeId', 'data-v-ddf675c7']])
export { bf as default }
