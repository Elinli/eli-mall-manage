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
  new Promise((l, a) => {
    var s = (o) => {
        try {
          u(n.next(o))
        } catch (i) {
          a(i)
        }
      },
      r = (o) => {
        try {
          u(n.throw(o))
        } catch (i) {
          a(i)
        }
      },
      u = (o) => (o.done ? l(o.value) : Promise.resolve(o.value).then(s, r))
    u((n = n.apply(e, t)).next())
  })
import {
  az as oa,
  aA as An,
  aB as pn,
  aC as At,
  aD as aa,
  aE as jt,
  aF as vn,
  aG as sa,
  aH as rn,
  aI as ra,
  aJ as qn,
  aK as un,
  aL as Xl,
  aM as Bt,
  aN as il,
  aO as ia,
  aP as ua,
  aQ as Ql,
  l as $,
  aR as ca,
  W as ge,
  a as P,
  x as Qe,
  y as Gn,
  S as vt,
  Q as Xe,
  d as ne,
  aS as da,
  B as hn,
  D as Mt,
  A as fa,
  aT as _t,
  i as re,
  $ as ve,
  p as Ze,
  ad as Un,
  q as Zl,
  a2 as ze,
  ab as Tt,
  o as A,
  c as B,
  J as U,
  F as Te,
  I,
  j as f,
  E as ce,
  f as Z,
  G as Q,
  w as G,
  H as pt,
  U as Ht,
  h as X,
  ag as Ue,
  aa as pa,
  t as ue,
  K as ke,
  ae as qt,
  M as gt,
  k as Se,
  m as Jl,
  n as eo,
  av as ul,
  aU as va,
  aV as cn,
  a7 as Gt,
  g as at,
  L as mt,
  V as Xt,
  N as Ke,
  ac as mn,
  aW as ha,
  r as bt,
  a6 as gn,
  af as _,
  a5 as kt,
  b as $e,
  a8 as He,
  aX as Yn,
  aY as Wt,
  aZ as wn,
  a_ as Xn,
  a3 as xt,
  a$ as Ve,
  b0 as ma,
  ah as ga,
  b1 as Ut,
  as as to,
  v as no,
  b2 as ba,
  au as ya,
  b3 as cl,
  b4 as dl,
  Y as lo,
  u as Ca,
} from './index.c83f165b.js'
import {
  m as bn,
  U as Ie,
  d as Nt,
  t as dn,
  u as st,
  s as Sa,
  C as oo,
  E as Qn,
} from './UserInfo.vue_vue_type_style_index_0_lang.07451b98.js'
import {
  q as wa,
  c as Qt,
  h as Ye,
  E as yn,
  r as Ea,
  a as $a,
  e as ka,
  y as Ma,
  b as fl,
} from './el-popper.234cc157.js'
import { u as Ta, _ as xa } from './Header.vue_vue_type_style_index_0_lang.27eccd21.js'
import { _ as Pa } from './TopBarNav.vue_vue_type_style_index_0_lang.e8a3d402.js'
import {
  n as Yt,
  u as Y,
  z as Aa,
  A as Oa,
  E as Re,
  d as ao,
  _ as he,
  e as Pt,
  g as pl,
  c as vl,
  m as Ot,
  r as Lt,
  j as Dt,
  q as so,
  B as Cn,
  p as hl,
  C as La,
  D as Na,
  F as ro,
  G as Ia,
  H as ml,
  I as Ra,
  k as gl,
  l as za,
} from './index.841c5669.js'
import { b as Ba, c as Zn, T as Fa } from './el-button.a68b4578.js'
import { C as io } from './Language.vue_vue_type_script_setup_true_lang.8ab21874.js'
import { i as bl, V as Wa } from './icon.f63980c2.js'
import { _ as _a } from './_plugin-vue_export-helper.cdc0426e.js'
import './Search.vue_vue_type_script_setup_true_lang.94604482.js'
import './Fullscreen.vue_vue_type_script_setup_true_lang.24988cfe.js'
var Ha = /\s/
function Da(e) {
  for (var t = e.length; t-- && Ha.test(e.charAt(t)); );
  return t
}
var Va = /^\s+/
function Ka(e) {
  return e && e.slice(0, Da(e) + 1).replace(Va, '')
}
var yl = 0 / 0,
  ja = /^[-+]0x[0-9a-f]+$/i,
  qa = /^0b[01]+$/i,
  Ga = /^0o[0-7]+$/i,
  Ua = parseInt
function Cl(e) {
  if (typeof e == 'number') return e
  if (oa(e)) return yl
  if (An(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = An(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = Ka(e)
  var n = qa.test(e)
  return n || Ga.test(e) ? Ua(e.slice(2), n ? 2 : 8) : ja.test(e) ? yl : +e
}
var Ya = pn(At, 'WeakMap')
const On = Ya
var Xa = 9007199254740991
function uo(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Xa
}
function Qa(e) {
  return e != null && uo(e.length) && !aa(e)
}
var Za = Object.prototype
function Ja(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || Za
  return e === n
}
function es(e, t) {
  for (var n = -1, l = Array(e); ++n < e; ) l[n] = t(n)
  return l
}
var ts = '[object Arguments]'
function Sl(e) {
  return jt(e) && vn(e) == ts
}
var co = Object.prototype,
  ns = co.hasOwnProperty,
  ls = co.propertyIsEnumerable,
  os = Sl(
    (function () {
      return arguments
    })(),
  )
    ? Sl
    : function (e) {
        return jt(e) && ns.call(e, 'callee') && !ls.call(e, 'callee')
      }
const as = os
function ss() {
  return !1
}
var fo = typeof exports == 'object' && exports && !exports.nodeType && exports,
  wl = fo && typeof module == 'object' && module && !module.nodeType && module,
  rs = wl && wl.exports === fo,
  El = rs ? At.Buffer : void 0,
  is = El ? El.isBuffer : void 0,
  us = is || ss
const Ln = us
var cs = '[object Arguments]',
  ds = '[object Array]',
  fs = '[object Boolean]',
  ps = '[object Date]',
  vs = '[object Error]',
  hs = '[object Function]',
  ms = '[object Map]',
  gs = '[object Number]',
  bs = '[object Object]',
  ys = '[object RegExp]',
  Cs = '[object Set]',
  Ss = '[object String]',
  ws = '[object WeakMap]',
  Es = '[object ArrayBuffer]',
  $s = '[object DataView]',
  ks = '[object Float32Array]',
  Ms = '[object Float64Array]',
  Ts = '[object Int8Array]',
  xs = '[object Int16Array]',
  Ps = '[object Int32Array]',
  As = '[object Uint8Array]',
  Os = '[object Uint8ClampedArray]',
  Ls = '[object Uint16Array]',
  Ns = '[object Uint32Array]',
  me = {}
me[ks] = me[Ms] = me[Ts] = me[xs] = me[Ps] = me[As] = me[Os] = me[Ls] = me[Ns] = !0
me[cs] =
  me[ds] =
  me[Es] =
  me[fs] =
  me[$s] =
  me[ps] =
  me[vs] =
  me[hs] =
  me[ms] =
  me[gs] =
  me[bs] =
  me[ys] =
  me[Cs] =
  me[Ss] =
  me[ws] =
    !1
function Is(e) {
  return jt(e) && uo(e.length) && !!me[vn(e)]
}
function Rs(e) {
  return function (t) {
    return e(t)
  }
}
var po = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Vt = po && typeof module == 'object' && module && !module.nodeType && module,
  zs = Vt && Vt.exports === po,
  En = zs && sa.process,
  Bs = (function () {
    try {
      var e = Vt && Vt.require && Vt.require('util').types
      return e || (En && En.binding && En.binding('util'))
    } catch (t) {}
  })()
const $l = Bs
var kl = $l && $l.isTypedArray,
  Fs = kl ? Rs(kl) : Is
const vo = Fs
var Ws = Object.prototype,
  _s = Ws.hasOwnProperty
function Hs(e, t) {
  var n = rn(e),
    l = !n && as(e),
    a = !n && !l && Ln(e),
    s = !n && !l && !a && vo(e),
    r = n || l || a || s,
    u = r ? es(e.length, String) : [],
    o = u.length
  for (var i in e)
    (t || _s.call(e, i)) &&
      !(
        r &&
        (i == 'length' ||
          (a && (i == 'offset' || i == 'parent')) ||
          (s && (i == 'buffer' || i == 'byteLength' || i == 'byteOffset')) ||
          ra(i, o))
      ) &&
      u.push(i)
  return u
}
function Ds(e, t) {
  return function (n) {
    return e(t(n))
  }
}
var Vs = Ds(Object.keys, Object)
const Ks = Vs
var js = Object.prototype,
  qs = js.hasOwnProperty
function Gs(e) {
  if (!Ja(e)) return Ks(e)
  var t = []
  for (var n in Object(e)) qs.call(e, n) && n != 'constructor' && t.push(n)
  return t
}
function Us(e) {
  return Qa(e) ? Hs(e) : Gs(e)
}
function Ys(e, t) {
  for (var n = -1, l = t.length, a = e.length; ++n < l; ) e[a + n] = t[n]
  return e
}
function Xs() {
  ;(this.__data__ = new qn()), (this.size = 0)
}
function Qs(e) {
  var t = this.__data__,
    n = t.delete(e)
  return (this.size = t.size), n
}
function Zs(e) {
  return this.__data__.get(e)
}
function Js(e) {
  return this.__data__.has(e)
}
var er = 200
function tr(e, t) {
  var n = this.__data__
  if (n instanceof qn) {
    var l = n.__data__
    if (!un || l.length < er - 1) return l.push([e, t]), (this.size = ++n.size), this
    n = this.__data__ = new Xl(l)
  }
  return n.set(e, t), (this.size = n.size), this
}
function ht(e) {
  var t = (this.__data__ = new qn(e))
  this.size = t.size
}
ht.prototype.clear = Xs
ht.prototype.delete = Qs
ht.prototype.get = Zs
ht.prototype.has = Js
ht.prototype.set = tr
function nr(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, a = 0, s = []; ++n < l; ) {
    var r = e[n]
    t(r, n, e) && (s[a++] = r)
  }
  return s
}
function lr() {
  return []
}
var or = Object.prototype,
  ar = or.propertyIsEnumerable,
  Ml = Object.getOwnPropertySymbols,
  sr = Ml
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            nr(Ml(e), function (t) {
              return ar.call(e, t)
            }))
      }
    : lr
const rr = sr
function ir(e, t, n) {
  var l = t(e)
  return rn(e) ? l : Ys(l, n(e))
}
function Tl(e) {
  return ir(e, Us, rr)
}
var ur = pn(At, 'DataView')
const Nn = ur
var cr = pn(At, 'Promise')
const In = cr
var dr = pn(At, 'Set')
const Rn = dr
var xl = '[object Map]',
  fr = '[object Object]',
  Pl = '[object Promise]',
  Al = '[object Set]',
  Ol = '[object WeakMap]',
  Ll = '[object DataView]',
  pr = Bt(Nn),
  vr = Bt(un),
  hr = Bt(In),
  mr = Bt(Rn),
  gr = Bt(On),
  wt = vn
;((Nn && wt(new Nn(new ArrayBuffer(1))) != Ll) ||
  (un && wt(new un()) != xl) ||
  (In && wt(In.resolve()) != Pl) ||
  (Rn && wt(new Rn()) != Al) ||
  (On && wt(new On()) != Ol)) &&
  (wt = function (e) {
    var t = vn(e),
      n = t == fr ? e.constructor : void 0,
      l = n ? Bt(n) : ''
    if (l)
      switch (l) {
        case pr:
          return Ll
        case vr:
          return xl
        case hr:
          return Pl
        case mr:
          return Al
        case gr:
          return Ol
      }
    return t
  })
const Nl = wt
var br = At.Uint8Array
const Il = br
var yr = '__lodash_hash_undefined__'
function Cr(e) {
  return this.__data__.set(e, yr), this
}
function Sr(e) {
  return this.__data__.has(e)
}
function fn(e) {
  var t = -1,
    n = e == null ? 0 : e.length
  for (this.__data__ = new Xl(); ++t < n; ) this.add(e[t])
}
fn.prototype.add = fn.prototype.push = Cr
fn.prototype.has = Sr
function wr(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length; ++n < l; ) if (t(e[n], n, e)) return !0
  return !1
}
function Er(e, t) {
  return e.has(t)
}
var $r = 1,
  kr = 2
function ho(e, t, n, l, a, s) {
  var r = n & $r,
    u = e.length,
    o = t.length
  if (u != o && !(r && o > u)) return !1
  var i = s.get(e),
    c = s.get(t)
  if (i && c) return i == t && c == e
  var p = -1,
    v = !0,
    b = n & kr ? new fn() : void 0
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
        !wr(t, function (E, g) {
          if (!Er(b, g) && (d === E || a(d, E, n, l, s))) return b.push(g)
        })
      ) {
        v = !1
        break
      }
    } else if (!(d === m || a(d, m, n, l, s))) {
      v = !1
      break
    }
  }
  return s.delete(e), s.delete(t), v
}
function Mr(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l, a) {
      n[++t] = [a, l]
    }),
    n
  )
}
function Tr(e) {
  var t = -1,
    n = Array(e.size)
  return (
    e.forEach(function (l) {
      n[++t] = l
    }),
    n
  )
}
var xr = 1,
  Pr = 2,
  Ar = '[object Boolean]',
  Or = '[object Date]',
  Lr = '[object Error]',
  Nr = '[object Map]',
  Ir = '[object Number]',
  Rr = '[object RegExp]',
  zr = '[object Set]',
  Br = '[object String]',
  Fr = '[object Symbol]',
  Wr = '[object ArrayBuffer]',
  _r = '[object DataView]',
  Rl = il ? il.prototype : void 0,
  $n = Rl ? Rl.valueOf : void 0
function Hr(e, t, n, l, a, s, r) {
  switch (n) {
    case _r:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
      ;(e = e.buffer), (t = t.buffer)
    case Wr:
      return !(e.byteLength != t.byteLength || !s(new Il(e), new Il(t)))
    case Ar:
    case Or:
    case Ir:
      return ia(+e, +t)
    case Lr:
      return e.name == t.name && e.message == t.message
    case Rr:
    case Br:
      return e == t + ''
    case Nr:
      var u = Mr
    case zr:
      var o = l & xr
      if ((u || (u = Tr), e.size != t.size && !o)) return !1
      var i = r.get(e)
      if (i) return i == t
      ;(l |= Pr), r.set(e, t)
      var c = ho(u(e), u(t), l, a, s, r)
      return r.delete(e), c
    case Fr:
      if ($n) return $n.call(e) == $n.call(t)
  }
  return !1
}
var Dr = 1,
  Vr = Object.prototype,
  Kr = Vr.hasOwnProperty
function jr(e, t, n, l, a, s) {
  var r = n & Dr,
    u = Tl(e),
    o = u.length,
    i = Tl(t),
    c = i.length
  if (o != c && !r) return !1
  for (var p = o; p--; ) {
    var v = u[p]
    if (!(r ? v in t : Kr.call(t, v))) return !1
  }
  var b = s.get(e),
    d = s.get(t)
  if (b && d) return b == t && d == e
  var m = !0
  s.set(e, t), s.set(t, e)
  for (var w = r; ++p < o; ) {
    v = u[p]
    var E = e[v],
      g = t[v]
    if (l) var h = r ? l(g, E, v, t, e, s) : l(E, g, v, e, t, s)
    if (!(h === void 0 ? E === g || a(E, g, n, l, s) : h)) {
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
var qr = 1,
  zl = '[object Arguments]',
  Bl = '[object Array]',
  Zt = '[object Object]',
  Gr = Object.prototype,
  Fl = Gr.hasOwnProperty
function Ur(e, t, n, l, a, s) {
  var r = rn(e),
    u = rn(t),
    o = r ? Bl : Nl(e),
    i = u ? Bl : Nl(t)
  ;(o = o == zl ? Zt : o), (i = i == zl ? Zt : i)
  var c = o == Zt,
    p = i == Zt,
    v = o == i
  if (v && Ln(e)) {
    if (!Ln(t)) return !1
    ;(r = !0), (c = !1)
  }
  if (v && !c)
    return s || (s = new ht()), r || vo(e) ? ho(e, t, n, l, a, s) : Hr(e, t, o, n, l, a, s)
  if (!(n & qr)) {
    var b = c && Fl.call(e, '__wrapped__'),
      d = p && Fl.call(t, '__wrapped__')
    if (b || d) {
      var m = b ? e.value() : e,
        w = d ? t.value() : t
      return s || (s = new ht()), a(m, w, n, l, s)
    }
  }
  return v ? (s || (s = new ht()), jr(e, t, n, l, a, s)) : !1
}
function mo(e, t, n, l, a) {
  return e === t
    ? !0
    : e == null || t == null || (!jt(e) && !jt(t))
    ? e !== e && t !== t
    : Ur(e, t, n, l, mo, a)
}
var Yr = function () {
  return At.Date.now()
}
const kn = Yr
var Xr = 'Expected a function',
  Qr = Math.max,
  Zr = Math.min
function It(e, t, n) {
  var l,
    a,
    s,
    r,
    u,
    o,
    i = 0,
    c = !1,
    p = !1,
    v = !0
  if (typeof e != 'function') throw new TypeError(Xr)
  ;(t = Cl(t) || 0),
    An(n) &&
      ((c = !!n.leading),
      (p = 'maxWait' in n),
      (s = p ? Qr(Cl(n.maxWait) || 0, t) : s),
      (v = 'trailing' in n ? !!n.trailing : v))
  function b(T) {
    var S = l,
      x = a
    return (l = a = void 0), (i = T), (r = e.apply(x, S)), r
  }
  function d(T) {
    return (i = T), (u = setTimeout(E, t)), c ? b(T) : r
  }
  function m(T) {
    var S = T - o,
      x = T - i,
      L = t - S
    return p ? Zr(L, s - x) : L
  }
  function w(T) {
    var S = T - o,
      x = T - i
    return o === void 0 || S >= t || S < 0 || (p && x >= s)
  }
  function E() {
    var T = kn()
    if (w(T)) return g(T)
    u = setTimeout(E, m(T))
  }
  function g(T) {
    return (u = void 0), v && l ? b(T) : ((l = a = void 0), r)
  }
  function h() {
    u !== void 0 && clearTimeout(u), (i = 0), (l = o = a = u = void 0)
  }
  function C() {
    return u === void 0 ? r : g(kn())
  }
  function O() {
    var T = kn(),
      S = w(T)
    if (((l = arguments), (a = this), (o = T), S)) {
      if (u === void 0) return d(o)
      if (p) return clearTimeout(u), (u = setTimeout(E, t)), b(o)
    }
    return u === void 0 && (u = setTimeout(E, t)), r
  }
  return (O.cancel = h), (O.flush = C), O
}
function zn(e, t) {
  return mo(e, t)
}
const en = function (e, t, ...n) {
    let l
    t.includes('mouse') || t.includes('click')
      ? (l = 'MouseEvents')
      : t.includes('key')
      ? (l = 'KeyboardEvent')
      : (l = 'HTMLEvents')
    const a = document.createEvent(l)
    return a.initEvent(t, ...n), e.dispatchEvent(a), e
  },
  Jr = (e = '') => e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  ei = (e) => ua[e || 'default'],
  ti = (e) => ['', ...Ql].includes(e),
  go = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),
  ni = ['class', 'style'],
  li = /^on[A-Z]/,
  oi = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      l = $(() => ((n == null ? void 0 : n.value) || []).concat(ni)),
      a = ge()
    return a
      ? $(() => {
          var s
          return ca(
            Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(
              ([r]) => !l.value.includes(r) && !(t && li.test(r)),
            ),
          )
        })
      : $(() => ({}))
  },
  bo = Symbol('elPaginationKey'),
  ai = (e) => ({
    focus: () => {
      var t, n
      ;(n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t)
    },
  })
function si(e) {
  const t = P()
  function n() {
    if (e.value == null) return
    const { selectionStart: a, selectionEnd: s, value: r } = e.value
    if (a == null || s == null) return
    const u = r.slice(0, Math.max(0, a)),
      o = r.slice(Math.max(0, s))
    t.value = { selectionStart: a, selectionEnd: s, value: r, beforeTxt: u, afterTxt: o }
  }
  function l() {
    if (e.value == null || t.value == null) return
    const { value: a } = e.value,
      { beforeTxt: s, afterTxt: r, selectionStart: u } = t.value
    if (s == null || r == null || u == null) return
    let o = a.length
    if (a.endsWith(r)) o = a.length - r.length
    else if (a.startsWith(s)) o = s.length
    else {
      const i = s[u - 1],
        c = a.indexOf(i, u - 1)
      c !== -1 && (o = c + 1)
    }
    e.value.setSelectionRange(o, o)
  }
  return [n, l]
}
let Ge
const ri = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  ii = [
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
function ui(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    l =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    a =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'))
  return {
    contextStyle: ii.map((r) => `${r}:${t.getPropertyValue(r)}`).join(';'),
    paddingSize: l,
    borderSize: a,
    boxSizing: n,
  }
}
function Wl(e, t = 1, n) {
  var l
  Ge || ((Ge = document.createElement('textarea')), document.body.appendChild(Ge))
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: u } = ui(e)
  Ge.setAttribute('style', `${u};${ri}`), (Ge.value = e.value || e.placeholder || '')
  let o = Ge.scrollHeight
  const i = {}
  r === 'border-box' ? (o = o + s) : r === 'content-box' && (o = o - a), (Ge.value = '')
  const c = Ge.scrollHeight - a
  if (Yt(t)) {
    let p = c * t
    r === 'border-box' && (p = p + a + s), (o = Math.max(p, o)), (i.minHeight = `${p}px`)
  }
  if (Yt(n)) {
    let p = c * n
    r === 'border-box' && (p = p + a + s), (o = Math.min(p, o))
  }
  return (i.height = `${o}px`), (l = Ge.parentNode) == null || l.removeChild(Ge), (Ge = void 0), i
}
const ci = Qe({
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
    suffixIcon: { type: bl, default: '' },
    prefixIcon: { type: bl, default: '' },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: vt([Object, Array, String]), default: () => bn({}) },
  }),
  di = {
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
  fi = ['role'],
  pi = [
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
  vi = ['id', 'tabindex', 'disabled', 'readonly', 'autocomplete', 'aria-label', 'placeholder'],
  hi = { name: 'ElInput', inheritAttrs: !1 },
  mi = ne(
    Ce(se({}, hi), {
      props: ci,
      emits: di,
      setup(e, { expose: t, emit: n }) {
        const l = e,
          a = { suffix: 'append', prefix: 'prepend' },
          s = ge(),
          r = da(),
          u = hn(),
          o = $(() => {
            const N = {}
            return (
              l.containerRole === 'combobox' &&
                ((N['aria-haspopup'] = r['aria-haspopup']),
                (N['aria-owns'] = r['aria-owns']),
                (N['aria-expanded'] = r['aria-expanded'])),
              N
            )
          }),
          i = oi({ excludeKeys: $(() => Object.keys(o.value)) }),
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
          D = $(() => {
            var N
            return (N = c == null ? void 0 : c.statusIcon) != null ? N : !1
          }),
          W = $(() => (p == null ? void 0 : p.validateState) || ''),
          V = $(() => W.value && Wa[W.value]),
          J = $(() => (T.value ? Aa : Oa)),
          ee = $(() => [r.style, l.inputStyle]),
          fe = $(() => [l.inputStyle, x.value, { resize: l.resize }]),
          le = $(() => (wa(l.modelValue) ? '' : String(l.modelValue))),
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
          F = $(() => Array.from(le.value).length),
          j = $(() => !!M.value && F.value > Number(i.value.maxlength)),
          ie = $(
            () =>
              !!u.suffix ||
              !!l.suffixIcon ||
              be.value ||
              l.showPassword ||
              M.value ||
              (!!W.value && D.value),
          ),
          [oe, pe] = si(E)
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
                x.value = se({}, Wl(g.value, _e, Pe))
              } else x.value = { minHeight: Wl(g.value).minHeight }
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
            const H = a[N]
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
          De = (N) => {
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
            O.value = !go(Pe)
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
            autosize: Zl(l, 'autosize'),
            focus: it,
            blur: nt,
            select: St,
            clear: dt,
            resizeTextarea: ae,
          }),
          (N, te) =>
            ze(
              (A(),
              B(
                'div',
                Ht(f(o), {
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
                      B(
                        Te,
                        { key: 0 },
                        [
                          U(' prepend slot '),
                          N.$slots.prepend
                            ? (A(),
                              B(
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
                                  B(
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
                                    onChange: De,
                                    onKeydown: ct,
                                  },
                                ),
                                null,
                                16,
                                pi,
                              ),
                              U(' suffix slot '),
                              f(ie)
                                ? (A(),
                                  B(
                                    'span',
                                    { key: 1, class: I(f(m).e('suffix')) },
                                    [
                                      Z(
                                        'span',
                                        { class: I(f(m).e('suffix-inner')) },
                                        [
                                          !f(be) || !f(R) || !f(M)
                                            ? (A(),
                                              B(
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
                                                { default: G(() => [X(f(ao))]), _: 1 },
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
                                              B(
                                                'span',
                                                { key: 3, class: I(f(m).e('count')) },
                                                [
                                                  Z(
                                                    'span',
                                                    { class: I(f(m).e('count-inner')) },
                                                    ue(f(F)) + ' / ' + ue(f(i).maxlength),
                                                    3,
                                                  ),
                                                ],
                                                2,
                                              ))
                                            : U('v-if', !0),
                                          f(W) && f(V) && f(D)
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
                                                { default: G(() => [(A(), Q(pt(f(V))))]), _: 1 },
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
                              B(
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
                      B(
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
                                onChange: De,
                                onKeydown: ct,
                              },
                            ),
                            null,
                            16,
                            vi,
                          ),
                          f(M)
                            ? (A(),
                              B(
                                'span',
                                { key: 0, style: ke(S.value), class: I(f(m).e('count')) },
                                ue(f(F)) + ' / ' + ue(f(i).maxlength),
                                7,
                              ))
                            : U('v-if', !0),
                        ],
                        64,
                      )),
                ],
                16,
                fi,
              )),
              [[Tt, N.type !== 'hidden']],
            )
        )
      },
    }),
  )
var gi = he(mi, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue'],
])
const yo = gt(gi)
var _l = !1,
  Et,
  Bn,
  Fn,
  tn,
  nn,
  Co,
  ln,
  Wn,
  _n,
  Hn,
  So,
  Dn,
  Vn,
  wo,
  Eo
function Fe() {
  if (!_l) {
    _l = !0
    var e = navigator.userAgent,
      t =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          e,
        ),
      n = /(Mac OS X)|(Windows)|(Linux)/.exec(e)
    if (
      ((Dn = /\b(iPhone|iP[ao]d)/.exec(e)),
      (Vn = /\b(iP[ao]d)/.exec(e)),
      (Hn = /Android/i.exec(e)),
      (wo = /FBAN\/\w+;/i.exec(e)),
      (Eo = /Mobile/i.exec(e)),
      (So = !!/Win64/.exec(e)),
      t)
    ) {
      ;(Et = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
        Et && document && document.documentMode && (Et = document.documentMode)
      var l = /(?:Trident\/(\d+.\d+))/.exec(e)
      ;(Co = l ? parseFloat(l[1]) + 4 : Et),
        (Bn = t[2] ? parseFloat(t[2]) : NaN),
        (Fn = t[3] ? parseFloat(t[3]) : NaN),
        (tn = t[4] ? parseFloat(t[4]) : NaN),
        tn
          ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)), (nn = t && t[1] ? parseFloat(t[1]) : NaN))
          : (nn = NaN)
    } else Et = Bn = Fn = nn = tn = NaN
    if (n) {
      if (n[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e)
        ln = a ? parseFloat(a[1].replace('_', '.')) : !0
      } else ln = !1
      ;(Wn = !!n[2]), (_n = !!n[3])
    } else ln = Wn = _n = !1
  }
}
var Kn = {
    ie: function () {
      return Fe() || Et
    },
    ieCompatibilityMode: function () {
      return Fe() || Co > Et
    },
    ie64: function () {
      return Kn.ie() && So
    },
    firefox: function () {
      return Fe() || Bn
    },
    opera: function () {
      return Fe() || Fn
    },
    webkit: function () {
      return Fe() || tn
    },
    safari: function () {
      return Kn.webkit()
    },
    chrome: function () {
      return Fe() || nn
    },
    windows: function () {
      return Fe() || Wn
    },
    osx: function () {
      return Fe() || ln
    },
    linux: function () {
      return Fe() || _n
    },
    iphone: function () {
      return Fe() || Dn
    },
    mobile: function () {
      return Fe() || Dn || Vn || Hn || Eo
    },
    nativeApp: function () {
      return Fe() || wo
    },
    android: function () {
      return Fe() || Hn
    },
    ipad: function () {
      return Fe() || Vn
    },
  },
  bi = Kn,
  Jt = !!(typeof window < 'u' && window.document && window.document.createElement),
  yi = {
    canUseDOM: Jt,
    canUseWorkers: typeof Worker < 'u',
    canUseEventListeners: Jt && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Jt && !!window.screen,
    isInWorker: !Jt,
  },
  $o = yi,
  ko
$o.canUseDOM &&
  (ko =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature('', '') !== !0)
function Ci(e, t) {
  if (!$o.canUseDOM || (t && !('addEventListener' in document))) return !1
  var n = 'on' + e,
    l = n in document
  if (!l) {
    var a = document.createElement('div')
    a.setAttribute(n, 'return;'), (l = typeof a[n] == 'function')
  }
  return (
    !l && ko && e === 'wheel' && (l = document.implementation.hasFeature('Events.wheel', '3.0')), l
  )
}
var Si = Ci,
  Hl = 10,
  Dl = 40,
  Vl = 800
function Mo(e) {
  var t = 0,
    n = 0,
    l = 0,
    a = 0
  return (
    'detail' in e && (n = e.detail),
    'wheelDelta' in e && (n = -e.wheelDelta / 120),
    'wheelDeltaY' in e && (n = -e.wheelDeltaY / 120),
    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
    (l = t * Hl),
    (a = n * Hl),
    'deltaY' in e && (a = e.deltaY),
    'deltaX' in e && (l = e.deltaX),
    (l || a) && e.deltaMode && (e.deltaMode == 1 ? ((l *= Dl), (a *= Dl)) : ((l *= Vl), (a *= Vl))),
    l && !t && (t = l < 1 ? -1 : 1),
    a && !n && (n = a < 1 ? -1 : 1),
    { spinX: t, spinY: n, pixelX: l, pixelY: a }
  )
}
Mo.getEventType = function () {
  return bi.firefox() ? 'DOMMouseScroll' : Si('wheel') ? 'wheel' : 'mousewheel'
}
var wi = Mo
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
 */ const Ei = function (e, t) {
    if (e && e.addEventListener) {
      const n = function (l) {
        const a = wi(l)
        t && Reflect.apply(t, this, [l, a])
      }
      e.addEventListener('wheel', n, { passive: !0 })
    }
  },
  $i = {
    beforeMount(e, t) {
      Ei(e, t.value)
    },
  },
  ki = {
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
  To = {
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
  Ft = () => {
    const e = Se(Jl, {}),
      t = Se(eo, {}),
      n = Se('CheckboxGroup', {}),
      l = $(() => n && (n == null ? void 0 : n.name) === 'ElCheckboxGroup'),
      a = $(() => t.size)
    return { isGroup: l, checkboxGroup: n, elForm: e, elFormItemSize: a, elFormItem: t }
  },
  Mi = (e, { elFormItem: t }) => {
    const { inputId: n, isLabeledByFormItem: l } = Zn(e, { formItemContext: t })
    return { isLabeledByFormItem: l, groupId: n }
  },
  Ti = (e) => {
    const t = P(!1),
      { emit: n } = ge(),
      { isGroup: l, checkboxGroup: a, elFormItem: s } = Ft(),
      r = P(!1)
    return {
      model: $({
        get() {
          var o, i
          return l.value
            ? (o = a.modelValue) == null
              ? void 0
              : o.value
            : (i = e.modelValue) != null
            ? i
            : t.value
        },
        set(o) {
          var i
          l.value && Array.isArray(o)
            ? ((r.value = a.max !== void 0 && o.length > a.max.value),
              r.value === !1 && ((i = a == null ? void 0 : a.changeEvent) == null || i.call(a, o)))
            : (n(Ie, o), (t.value = o))
        },
      }),
      isGroup: l,
      isLimitExceeded: r,
      elFormItem: s,
    }
  },
  xi = (e, t, { model: n }) => {
    const { isGroup: l, checkboxGroup: a } = Ft(),
      s = P(!1),
      r = Mt(a == null ? void 0 : a.checkboxGroupSize, { prop: !0 }),
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
      o = Mt(
        $(() => {
          var c
          return l.value
            ? (c = a == null ? void 0 : a.checkboxGroupSize) == null
              ? void 0
              : c.value
            : void 0
        }),
      ),
      i = $(() => !!(t.default || e.label))
    return { isChecked: u, focus: s, size: r, checkboxSize: o, hasOwnLabel: i }
  },
  Pi = (e, { model: t, isChecked: n }) => {
    const { elForm: l, isGroup: a, checkboxGroup: s } = Ft(),
      r = $(() => {
        var o, i
        const c = (o = s.max) == null ? void 0 : o.value,
          p = (i = s.min) == null ? void 0 : i.value
        return (!!(c || p) && t.value.length >= c && !n.value) || (t.value.length <= p && n.value)
      })
    return {
      isDisabled: $(() => {
        var o, i
        const c = e.disabled || (l == null ? void 0 : l.disabled)
        return (i = a.value ? ((o = s.disabled) == null ? void 0 : o.value) || c || r.value : c) !=
          null
          ? i
          : !1
      }),
      isLimitDisabled: r,
    }
  },
  Ai = (e, { model: t }) => {
    function n() {
      Array.isArray(t.value) && !t.value.includes(e.label)
        ? t.value.push(e.label)
        : (t.value = e.trueLabel || !0)
    }
    e.checked && n()
  },
  Oi = (
    e,
    { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: a, isLabeledByFormItem: s },
  ) => {
    const { elFormItem: r, checkboxGroup: u } = Ft(),
      { emit: o } = ge()
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
      o('change', i(d), m)
    }
    function p(d) {
      if (n.value) return
      const m = d.target
      o('change', i(m.checked), d)
    }
    function v(d) {
      return ot(this, null, function* () {
        n.value ||
          (!l.value &&
            !a.value &&
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
  xo = { [Ie]: (e) => Xe(e) || Yt(e) || pl(e), change: (e) => Xe(e) || Yt(e) || pl(e) },
  Li = { [Ie]: (e) => ul(e), change: (e) => ul(e) },
  Po = (e, t) => {
    const { model: n, isGroup: l, isLimitExceeded: a, elFormItem: s } = Ti(e),
      { focus: r, size: u, isChecked: o, checkboxSize: i, hasOwnLabel: c } = xi(e, t, { model: n }),
      { isDisabled: p } = Pi(e, { model: n, isChecked: o }),
      { inputId: v, isLabeledByFormItem: b } = Zn(e, {
        formItemContext: s,
        disableIdGeneration: c,
        disableIdManagement: l,
      }),
      { handleChange: d, onClickRoot: m } = Oi(e, {
        model: n,
        isLimitExceeded: a,
        hasOwnLabel: c,
        isDisabled: p,
        isLabeledByFormItem: b,
      })
    return (
      Ai(e, { model: n }),
      {
        elFormItem: s,
        inputId: v,
        isLabeledByFormItem: b,
        isChecked: o,
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
  Ni = ['tabindex', 'role', 'aria-checked'],
  Ii = ['id', 'aria-hidden', 'name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  Ri = ['id', 'aria-hidden', 'disabled', 'value', 'name', 'tabindex'],
  zi = { name: 'ElCheckbox' },
  Bi = ne(
    Ce(se({}, zi), {
      props: To,
      emits: xo,
      setup(e) {
        const t = e,
          n = hn(),
          {
            inputId: l,
            isLabeledByFormItem: a,
            isChecked: s,
            isDisabled: r,
            checkboxSize: u,
            hasOwnLabel: o,
            model: i,
            handleChange: c,
            onClickRoot: p,
            focus: v,
          } = Po(t, n),
          b = Y('checkbox')
        return (d, m) => (
          A(),
          Q(
            pt(!f(o) && f(a) ? 'span' : 'label'),
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
                          B(
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
                            Ii,
                          )),
                          [[cn, f(i)]],
                        )
                      : ze(
                          (A(),
                          B(
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
                            Ri,
                          )),
                          [[cn, f(i)]],
                        ),
                    Z('span', { class: I(f(b).e('inner')) }, null, 2),
                  ],
                  10,
                  Ni,
                ),
                f(o)
                  ? (A(),
                    B(
                      'span',
                      { key: 0, class: I(f(b).e('label')) },
                      [
                        ce(d.$slots, 'default'),
                        d.$slots.default
                          ? U('v-if', !0)
                          : (A(), B(Te, { key: 0 }, [at(ue(d.label), 1)], 64)),
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
var Fi = he(Bi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue',
  ],
])
const Wi = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  _i = ['name', 'tabindex', 'disabled', 'value'],
  Hi = { name: 'ElCheckboxButton' },
  Di = ne(
    Ce(se({}, Hi), {
      props: To,
      emits: xo,
      setup(e) {
        const t = e,
          n = hn(),
          { focus: l, isChecked: a, isDisabled: s, size: r, model: u, handleChange: o } = Po(t, n),
          { checkboxGroup: i } = Ft(),
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
          B(
            'label',
            {
              class: I([
                f(c).b('button'),
                f(c).bm('button', f(r)),
                f(c).is('disabled', f(s)),
                f(c).is('checked', f(a)),
                f(c).is('focus', f(l)),
              ]),
            },
            [
              v.trueLabel || v.falseLabel
                ? ze(
                    (A(),
                    B(
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
                        onChange: b[1] || (b[1] = (...d) => f(o) && f(o)(...d)),
                        onFocus: b[2] || (b[2] = (d) => (l.value = !0)),
                        onBlur: b[3] || (b[3] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      Wi,
                    )),
                    [[cn, f(u)]],
                  )
                : ze(
                    (A(),
                    B(
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
                        onChange: b[5] || (b[5] = (...d) => f(o) && f(o)(...d)),
                        onFocus: b[6] || (b[6] = (d) => (l.value = !0)),
                        onBlur: b[7] || (b[7] = (d) => (l.value = !1)),
                      },
                      null,
                      42,
                      _i,
                    )),
                    [[cn, f(u)]],
                  ),
              v.$slots.default || v.label
                ? (A(),
                  B(
                    'span',
                    {
                      key: 2,
                      class: I(f(c).be('button', 'inner')),
                      style: ke(f(a) ? f(p) : void 0),
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
var Ao = he(Di, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue',
  ],
])
const Vi = { name: 'ElCheckboxGroup' },
  Ki = ne(
    Ce(se({}, Vi), {
      props: ki,
      emits: Li,
      setup(e, { emit: t }) {
        const n = e,
          { elFormItem: l } = Ft(),
          { groupId: a, isLabeledByFormItem: s } = Mi(n, { elFormItem: l }),
          r = Mt(),
          u = Y('checkbox'),
          o = (c) => {
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
              o(c)
            },
          })
        return (
          mt(
            'CheckboxGroup',
            Ce(se({ name: 'ElCheckboxGroup' }, Xt(n)), {
              modelValue: i,
              checkboxGroupSize: r,
              changeEvent: o,
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
                id: f(a),
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
var Oo = he(Ki, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue',
  ],
])
const Rt = gt(Fi, { CheckboxButton: Ao, CheckboxGroup: Oo })
Ke(Ao)
Ke(Oo)
const Lo = Qe({
    closable: Boolean,
    type: { type: String, values: ['success', 'info', 'warning', 'danger', ''], default: '' },
    hit: Boolean,
    disableTransitions: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: Ql, default: '' },
    effect: { type: String, values: ['dark', 'light', 'plain'], default: 'light' },
    round: Boolean,
  }),
  ji = { close: (e) => e instanceof MouseEvent, click: (e) => e instanceof MouseEvent },
  qi = { name: 'ElTag' },
  Gi = ne(
    Ce(se({}, qi), {
      props: Lo,
      emits: ji,
      setup(e, { emit: t }) {
        const n = e,
          l = Mt(),
          a = Y('tag'),
          s = $(() => {
            const { type: o, hit: i, effect: c, closable: p, round: v } = n
            return [
              a.b(),
              a.is('closable', p),
              a.m(o),
              a.m(l.value),
              a.m(c),
              a.is('hit', i),
              a.is('round', v),
            ]
          }),
          r = (o) => {
            t('close', o)
          },
          u = (o) => {
            t('click', o)
          }
        return (o, i) =>
          o.disableTransitions
            ? (A(),
              B(
                'span',
                { key: 0, class: I(f(s)), style: ke({ backgroundColor: o.color }), onClick: u },
                [
                  Z('span', { class: I(f(a).e('content')) }, [ce(o.$slots, 'default')], 2),
                  o.closable
                    ? (A(),
                      Q(
                        f(Re),
                        { key: 0, class: I(f(a).e('close')), onClick: Ue(r, ['stop']) },
                        { default: G(() => [X(f(vl))]), _: 1 },
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
                { key: 1, name: `${f(a).namespace.value}-zoom-in-center`, appear: '' },
                {
                  default: G(() => [
                    Z(
                      'span',
                      { class: I(f(s)), style: ke({ backgroundColor: o.color }), onClick: u },
                      [
                        Z('span', { class: I(f(a).e('content')) }, [ce(o.$slots, 'default')], 2),
                        o.closable
                          ? (A(),
                            Q(
                              f(Re),
                              { key: 0, class: I(f(a).e('close')), onClick: Ue(r, ['stop']) },
                              { default: G(() => [X(f(vl))]), _: 1 },
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
var Ui = he(Gi, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue'],
])
const Yi = gt(Ui),
  Xi = { name: 'ElCollapseTransition' },
  Qi = ne(
    Ce(se({}, Xi), {
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
        return (l, a) => (
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
var on = he(Qi, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue',
  ],
])
on.install = (e) => {
  e.component(on.name, on)
}
const Zi = on,
  Ji = { name: 'ElContainer' },
  eu = ne(
    Ce(se({}, Ji), {
      props: { direction: { type: String } },
      setup(e) {
        const t = e,
          n = hn(),
          l = Y('container'),
          a = $(() =>
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
          B(
            'section',
            { class: I([f(l).b(), f(l).is('vertical', f(a))]) },
            [ce(s.$slots, 'default')],
            2,
          )
        )
      },
    }),
  )
var tu = he(eu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue',
  ],
])
const nu = { name: 'ElAside' },
  lu = ne(
    Ce(se({}, nu), {
      props: { width: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('aside'),
          l = $(() => (t.width ? n.cssVarBlock({ width: t.width }) : {}))
        return (a, s) => (
          A(), B('aside', { class: I(f(n).b()), style: ke(f(l)) }, [ce(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var No = he(lu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue',
  ],
])
const ou = { name: 'ElFooter' },
  au = ne(
    Ce(se({}, ou), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('footer'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (a, s) => (
          A(), B('footer', { class: I(f(n).b()), style: ke(f(l)) }, [ce(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var Io = he(au, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue',
  ],
])
const su = { name: 'ElHeader' },
  ru = ne(
    Ce(se({}, su), {
      props: { height: { type: String, default: null } },
      setup(e) {
        const t = e,
          n = Y('header'),
          l = $(() => (t.height ? n.cssVarBlock({ height: t.height }) : {}))
        return (a, s) => (
          A(), B('header', { class: I(f(n).b()), style: ke(f(l)) }, [ce(a.$slots, 'default')], 6)
        )
      },
    }),
  )
var Ro = he(ru, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue',
  ],
])
const iu = { name: 'ElMain' },
  uu = ne(
    Ce(se({}, iu), {
      setup(e) {
        const t = Y('main')
        return (n, l) => (A(), B('main', { class: I(f(t).b()) }, [ce(n.$slots, 'default')], 2))
      },
    }),
  )
var zo = he(uu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue',
  ],
])
const cu = gt(tu, { Aside: No, Footer: Io, Header: Ro, Main: zo }),
  du = Ke(No),
  fu = Ke(Io),
  pu = Ke(Ro),
  vu = Ke(zo)
class hu {
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
        let a = !1
        switch (l.code) {
          case Ye.down: {
            this.gotoSubIndex(this.subIndex + 1), (a = !0)
            break
          }
          case Ye.up: {
            this.gotoSubIndex(this.subIndex - 1), (a = !0)
            break
          }
          case Ye.tab: {
            en(t, 'mouseleave')
            break
          }
          case Ye.enter:
          case Ye.space: {
            ;(a = !0), l.currentTarget.click()
            break
          }
        }
        return a && (l.preventDefault(), l.stopPropagation()), !1
      })
    })
  }
}
class mu {
  constructor(t, n) {
    ;(this.domNode = t), (this.submenu = null), (this.submenu = null), this.init(n)
  }
  init(t) {
    this.domNode.setAttribute('tabindex', '0')
    const n = this.domNode.querySelector(`.${t}-menu`)
    n && (this.submenu = new hu(this, n)), this.addListeners()
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
class gu {
  constructor(t, n) {
    ;(this.domNode = t), this.init(n)
  }
  init(t) {
    const n = this.domNode.childNodes
    Array.from(n).forEach((l) => {
      l.nodeType === 1 && new mu(l, t)
    })
  }
}
const bu = ne({
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
            Dt(n, e.m('collapse'))
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
function yu(e, t, n, l, a, s) {
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
var Cu = he(bu, [
  ['render', yu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue',
  ],
])
function Bo(e, t) {
  const n = $(() => {
    let a = e.parent
    const s = [t.value]
    for (; a.type.name !== 'ElMenu'; ) a.props.index && s.unshift(a.props.index), (a = a.parent)
    return s
  })
  return {
    parentMenu: $(() => {
      let a = e.parent
      for (; a && !['ElMenu', 'ElSubMenu'].includes(a.type.name); ) a = a.parent
      return a
    }),
    indexPath: n,
  }
}
function Su(e) {
  return $(() => {
    const n = e.backgroundColor
    return n ? new Fa(n).shade(20).toString() : ''
  })
}
const Fo = (e, t) => {
    const n = Y('menu')
    return $(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': Su(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${t}`,
      }),
    )
  },
  wu = Qe({
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
  props: wu,
  setup(e, { slots: t, expose: n }) {
    const l = ge(),
      { indexPath: a, parentMenu: s } = Bo(
        l,
        $(() => e.index),
      ),
      r = Y('menu'),
      u = Y('sub-menu'),
      o = Se('rootMenu')
    o || dn(Mn, 'can not inject root menu')
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
        (W.value === 'horizontal' && g.value) || (W.value === 'vertical' && !o.props.collapse)
          ? so
          : Cn,
      ),
      g = $(() => i.level === 0),
      h = $(() => (e.popperAppendToBody === void 0 ? g.value : Boolean(e.popperAppendToBody))),
      C = $(() =>
        o.props.collapse ? `${r.namespace.value}-zoom-in-left` : `${r.namespace.value}-zoom-in-top`,
      ),
      O = $(() =>
        W.value === 'horizontal' && g.value
          ? ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start']
          : ['right-start', 'left-start', 'bottom-start', 'bottom-end', 'top-start', 'top-end'],
      ),
      T = $(() => o.openedMenus.includes(e.index)),
      S = $(() => {
        let M = !1
        return (
          Object.values(c.value).forEach((F) => {
            F.active && (M = !0)
          }),
          Object.values(p.value).forEach((F) => {
            F.active && (M = !0)
          }),
          M
        )
      }),
      x = $(() => o.props.backgroundColor || ''),
      L = $(() => o.props.activeTextColor || ''),
      D = $(() => o.props.textColor || ''),
      W = $(() => o.props.mode),
      V = bt({ index: e.index, indexPath: a, active: S }),
      J = $(() =>
        W.value !== 'horizontal'
          ? { color: D.value }
          : {
              borderBottomColor: S.value ? (o.props.activeTextColor ? L.value : '') : 'transparent',
              color: S.value ? L.value : D.value,
            },
      ),
      ee = () => {
        var M, F, j
        return (j =
          (F = (M = m.value) == null ? void 0 : M.popperRef) == null
            ? void 0
            : F.popperInstanceRef) == null
          ? void 0
          : j.destroy()
      },
      fe = (M) => {
        M || ee()
      },
      le = () => {
        ;(o.props.menuTrigger === 'hover' && o.props.mode === 'horizontal') ||
          (o.props.collapse && o.props.mode === 'vertical') ||
          e.disabled ||
          o.handleSubMenuClick({ index: e.index, indexPath: a.value, active: S.value })
      },
      be = (M, F = e.showTimeout) => {
        var j
        M.type !== 'focus' &&
          ((o.props.menuTrigger === 'click' && o.props.mode === 'horizontal') ||
            (!o.props.collapse && o.props.mode === 'vertical') ||
            e.disabled ||
            ((i.mouseInChild.value = !0),
            v == null || v(),
            ({ stop: v } = hl(() => {
              o.openMenu(e.index, a.value)
            }, F)),
            h.value &&
              ((j = s.value.vnode.el) == null || j.dispatchEvent(new MouseEvent('mouseenter')))))
      },
      R = (M = !1) => {
        var F, j
        ;(o.props.menuTrigger === 'click' && o.props.mode === 'horizontal') ||
          (!o.props.collapse && o.props.mode === 'vertical') ||
          (v == null || v(),
          (i.mouseInChild.value = !1),
          ({ stop: v } = hl(() => !b.value && o.closeMenu(e.index, a.value), e.hideTimeout)),
          h.value &&
            M &&
            ((F = l.parent) == null ? void 0 : F.type.name) === 'ElSubMenu' &&
            ((j = i.handleMouseleave) == null || j.call(i, !0)))
      }
    re(
      () => o.props.collapse,
      (M) => fe(Boolean(M)),
    )
    {
      const M = (j) => {
          p.value[j.index] = j
        },
        F = (j) => {
          delete p.value[j.index]
        }
      mt(`subMenu:${l.uid}`, {
        addSubMenu: M,
        removeSubMenu: F,
        handleMouseleave: R,
        mouseInChild: b,
        level: i.level + 1,
      })
    }
    return (
      n({ opened: T }),
      Ze(() => {
        o.addSubMenu(V), i.addSubMenu(V)
      }),
      gn(() => {
        i.removeSubMenu(V), o.removeSubMenu(V)
      }),
      () => {
        var M
        const F = [
            (M = t.title) == null ? void 0 : M.call(t),
            _(Re, { class: u.e('icon-arrow') }, { default: () => _(E.value) }),
          ],
          j = Fo(o.props, i.level + 1),
          ie = o.isMenuPopup
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
                      F,
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
                  F,
                ),
                _(
                  Zi,
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
const Eu = Qe({
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
  $u = {
    close: (e, t) => Xe(e) && Tn(t),
    open: (e, t) => Xe(e) && Tn(t),
    select: (e, t, n, l) => Xe(e) && Tn(t) && qt(n) && (l === void 0 || l instanceof Promise),
  }
var ku = ne({
  name: 'ElMenu',
  props: Eu,
  emits: $u,
  setup(e, { emit: t, slots: n, expose: l }) {
    const a = ge(),
      s = a.appContext.config.globalProperties.$router,
      r = P(),
      u = Y('menu'),
      o = Y('sub-menu'),
      i = P(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      c = P(e.defaultActive),
      p = P({}),
      v = P({}),
      b = $(() => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)),
      d = () => {
        const S = c.value && p.value[c.value]
        if (!S || e.mode === 'horizontal' || e.collapse) return
        S.indexPath.forEach((L) => {
          const D = v.value[L]
          D && m(L, D.indexPath)
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
            const D = S.route || x,
              W = s.push(D).then((V) => (V || (c.value = x), V))
            t('select', x, L, { index: x, indexPath: L, route: D }, W)
          } else (c.value = x), t('select', x, L, { index: x, indexPath: L })
      },
      h = (S) => {
        const x = p.value,
          L = x[S] || (c.value && x[c.value]) || x[e.defaultActive]
        L ? ((c.value = L.index), d()) : (c.value = S)
      },
      C = () => {
        ve(() => a.proxy.$forceUpdate())
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
        mt(`subMenu:${a.uid}`, { addSubMenu: S, removeSubMenu: x, mouseInChild: P(!1), level: 0 })
    }
    Ze(() => {
      d(), e.mode === 'horizontal' && new gu(a.vnode.el, u.namespace.value)
    }),
      l({
        open: (x) => {
          const { indexPath: L } = v.value[x]
          L.forEach((D) => m(D, L))
        },
        close: w,
        handleResize: C,
      })
    const T = (S) => {
      const x = Array.isArray(S) ? S : [S],
        L = []
      return (
        x.forEach((D) => {
          Array.isArray(D.children) ? L.push(...T(D.children)) : L.push(D)
        }),
        L
      )
    }
    return () => {
      var S, x, L, D
      let W = (x = (S = n.default) == null ? void 0 : S.call(n)) != null ? x : []
      const V = []
      if (e.mode === 'horizontal' && r.value) {
        const fe = Array.from(
            (D = (L = r.value) == null ? void 0 : L.childNodes) != null ? D : [],
          ).filter((ae) => ae.nodeName !== '#text' || ae.nodeValue),
          le = T(W),
          be = 64,
          R = Number.parseInt(getComputedStyle(r.value).paddingLeft, 10),
          M = Number.parseInt(getComputedStyle(r.value).paddingRight, 10),
          F = r.value.clientWidth - R - M
        let j = 0,
          ie = 0
        fe.forEach((ae, ye) => {
          ;(j += ae.offsetWidth || 0), j <= F - be && (ie = ye + 1)
        })
        const oe = le.slice(0, ie),
          pe = le.slice(ie)
        ;(pe == null ? void 0 : pe.length) &&
          e.ellipsis &&
          ((W = oe),
          V.push(
            _(
              Jn,
              { index: 'sub-menu-more', class: o.e('hide-arrow') },
              {
                title: () => _(Re, { class: o.e('icon-more') }, { default: () => _(La) }),
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
          [...W, ...V],
        )
      return e.collapseTransition && e.mode === 'vertical' ? _(Cu, () => ee) : ee
    }
  },
})
const Mu = Qe({
    index: { type: vt([String, null]), default: null },
    route: { type: vt([String, Object]) },
    disabled: Boolean,
  }),
  Tu = { click: (e) => Xe(e.index) && Array.isArray(e.indexPath) },
  xn = 'ElMenuItem',
  xu = ne({
    name: xn,
    components: { ElTooltip: yn },
    props: Mu,
    emits: Tu,
    setup(e, { emit: t }) {
      const n = ge(),
        l = Se('rootMenu'),
        a = Y('menu'),
        s = Y('menu-item')
      l || dn(xn, 'can not inject root menu')
      const { parentMenu: r, indexPath: u } = Bo(n, Zl(e, 'index')),
        o = Se(`subMenu:${r.value.uid}`)
      o || dn(xn, 'can not inject sub menu')
      const i = $(() => e.index === l.activeIndex),
        c = bt({ index: e.index, indexPath: u, active: i }),
        p = () => {
          e.disabled ||
            (l.handleMenuItemClick({ index: e.index, indexPath: u.value, route: e.route }),
            t('click', c))
        }
      return (
        Ze(() => {
          o.addSubMenu(c), l.addMenuItem(c)
        }),
        gn(() => {
          o.removeSubMenu(c), l.removeMenuItem(c)
        }),
        {
          Effect: Ea,
          parentMenu: r,
          rootMenu: l,
          active: i,
          nsMenu: a,
          nsMenuItem: s,
          handleClick: p,
        }
      )
    },
  })
function Pu(e, t, n, l, a, s) {
  const r = $e('el-tooltip')
  return (
    A(),
    B(
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
          : (A(), B(Te, { key: 1 }, [ce(e.$slots, 'default'), ce(e.$slots, 'title')], 64)),
      ],
      2,
    )
  )
}
var Wo = he(xu, [
  ['render', Pu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue',
  ],
])
const Au = { title: String },
  Ou = 'ElMenuItemGroup',
  Lu = ne({
    name: Ou,
    props: Au,
    setup() {
      return { ns: Y('menu-item-group') }
    },
  })
function Nu(e, t, n, l, a, s) {
  return (
    A(),
    B(
      'li',
      { class: I(e.ns.b()) },
      [
        Z(
          'div',
          { class: I(e.ns.e('title')) },
          [
            e.$slots.title
              ? ce(e.$slots, 'title', { key: 1 })
              : (A(), B(Te, { key: 0 }, [at(ue(e.title), 1)], 64)),
          ],
          2,
        ),
        Z('ul', null, [ce(e.$slots, 'default')]),
      ],
      2,
    )
  )
}
var _o = he(Lu, [
  ['render', Nu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue',
  ],
])
const Iu = gt(ku, { MenuItem: Wo, MenuItemGroup: _o, SubMenu: Jn }),
  Ru = Ke(Wo)
Ke(_o)
const zu = Ke(Jn),
  Bu = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
  }),
  Fu = { click: (e) => e instanceof MouseEvent },
  Wu = ['disabled', 'aria-disabled'],
  _u = { key: 0 },
  Hu = { name: 'ElPaginationPrev' },
  Du = ne(
    Ce(se({}, Hu), {
      props: Bu,
      emits: Fu,
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage <= 1)
        return (l, a) => (
          A(),
          B(
            'button',
            {
              type: 'button',
              class: 'btn-prev',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: a[0] || (a[0] = (s) => l.$emit('click', s)),
            },
            [
              l.prevText
                ? (A(), B('span', _u, ue(l.prevText), 1))
                : (A(), Q(f(Re), { key: 1 }, { default: G(() => [X(f(Na))]), _: 1 })),
            ],
            8,
            Wu,
          )
        )
      },
    }),
  )
var Vu = he(Du, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue',
  ],
])
const Ku = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
  }),
  ju = ['disabled', 'aria-disabled'],
  qu = { key: 0 },
  Gu = { name: 'ElPaginationNext' },
  Uu = ne(
    Ce(se({}, Gu), {
      props: Ku,
      emits: ['click'],
      setup(e) {
        const t = e,
          n = $(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0)
        return (l, a) => (
          A(),
          B(
            'button',
            {
              type: 'button',
              class: 'btn-next',
              disabled: f(n),
              'aria-disabled': f(n),
              onClick: a[0] || (a[0] = (s) => l.$emit('click', s)),
            },
            [
              l.nextText
                ? (A(), B('span', qu, ue(l.nextText), 1))
                : (A(), Q(f(Re), { key: 1 }, { default: G(() => [X(f(Cn))]), _: 1 })),
            ],
            8,
            ju,
          )
        )
      },
    }),
  )
var Yu = he(Uu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue',
  ],
])
const Ho = 'ElSelectGroup',
  Sn = 'ElSelect'
function Xu(e, t) {
  const n = Se(Sn),
    l = Se(Ho, { disabled: !1 }),
    a = $(() => Object.prototype.toString.call(e.value).toLowerCase() === '[object object]'),
    s = $(() =>
      n.props.multiple ? p(n.props.modelValue, e.value) : v(e.value, n.props.modelValue),
    ),
    r = $(() => {
      if (n.props.multiple) {
        const m = n.props.modelValue || []
        return !s.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0
      } else return !1
    }),
    u = $(() => e.label || (a.value ? '' : e.value)),
    o = $(() => e.value || e.label || ''),
    i = $(() => e.disabled || t.groupDisabled || r.value),
    c = ge(),
    p = (m = [], w) => {
      if (a.value) {
        const E = n.props.valueKey
        return m && m.some((g) => He(g, E) === He(w, E))
      } else return m && m.includes(w)
    },
    v = (m, w) => {
      if (a.value) {
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
        E = new RegExp(Jr(w), 'i')
      ;(t.visible = E.test(u.value) || e.created), t.visible || n.filteredOptionsCount--
    }),
    { select: n, currentLabel: u, currentValue: o, itemSelected: s, isDisabled: i, hoverItem: b }
  )
}
const Qu = ne({
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
      { currentLabel: l, itemSelected: a, isDisabled: s, select: r, hoverItem: u } = Xu(e, n),
      { visible: o, hover: i } = Xt(n),
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
      itemSelected: a,
      isDisabled: s,
      select: r,
      hoverItem: u,
      visible: o,
      hover: i,
      selectOptionClick: v,
      states: n,
    }
  },
})
function Zu(e, t, n, l, a, s) {
  return ze(
    (A(),
    B(
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
var el = he(Qu, [
  ['render', Zu],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue',
  ],
])
const Ju = ne({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = Se(Sn),
      t = Y('select'),
      n = $(() => e.props.popperClass),
      l = $(() => e.props.multiple),
      a = $(() => e.props.fitInputWidth),
      s = P('')
    function r() {
      var u
      s.value = `${(u = e.selectWrapper) == null ? void 0 : u.offsetWidth}px`
    }
    return (
      Ze(() => {
        r(), Qt(e.selectWrapper, r)
      }),
      { ns: t, minWidth: s, popperClass: n, isMultiple: l, isFitInputWidth: a }
    )
  },
})
function ec(e, t, n, l, a, s) {
  return (
    A(),
    B(
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
var tc = he(Ju, [
  ['render', ec],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue',
  ],
])
function nc(e) {
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
const lc = (e, t, n) => {
    const { t: l } = st(),
      a = Y('select'),
      s = P(null),
      r = P(null),
      u = P(null),
      o = P(null),
      i = P(null),
      c = P(null),
      p = P(-1),
      v = _t({ query: '' }),
      b = _t(''),
      d = Se(Jl, {}),
      m = Se(eo, {}),
      w = $(() => !e.filterable || e.multiple || !t.visible),
      E = $(() => e.disabled || d.disabled),
      g = $(() => {
        const y = e.multiple
          ? Array.isArray(e.modelValue) && e.modelValue.length > 0
          : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== ''
        return e.clearable && !E.value && t.inputHovering && y
      }),
      h = $(() => (e.remote && e.filterable ? '' : e.suffixIcon)),
      C = $(() => a.is('reverse', h.value && t.visible)),
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
      D = Mt(),
      W = $(() => (['small'].includes(D.value) ? 'small' : 'default')),
      V = $({
        get() {
          return t.visible && T.value !== !1
        },
        set(y) {
          t.visible = y
        },
      })
    re([() => E.value, () => D.value, () => d.size], () => {
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
              K = o.value,
              de = ei(D.value || d.size)
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
        t.hoverIndex = De(S.value, k || z)
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
          const Be = x.value[je]
          if (z ? He(Be.value, e.valueKey) === He(y, e.valueKey) : Be.value === y) {
            k = { value: y, currentLabel: Be.currentLabel, isDisabled: Be.isDisabled }
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
      F = () => {
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
        zn(e.modelValue, y) || n.emit(oo, y)
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
            de = De(K, y.value)
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
      De = (y = [], k) => {
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
          const Be = S.value.filter((Le) => Le.value === Me.value)
          Be.length > 0 && (je = Be[0].$el)
        }
        if (u.value && je) {
          const Be =
            (de =
              (K =
                (z = (k = u.value) == null ? void 0 : k.popperRef) == null
                  ? void 0
                  : z.contentRef) == null
                ? void 0
                : K.querySelector) == null
              ? void 0
              : de.call(K, `.${a.be('dropdown', 'wrap')}`)
          Be && Sa(Be, je)
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
          t.isOnComposition = !go(z)
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
      selectSize: D,
      handleResize: F,
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
      dropMenuVisible: V,
      queryChange: v,
      groupQueryChange: b,
      reference: s,
      input: r,
      tooltipRef: u,
      tags: o,
      selectWrapper: i,
      scrollbar: c,
    }
  },
  Kl = 'ElSelect',
  oc = ne({
    name: Kl,
    componentName: Kl,
    components: {
      ElInput: yo,
      ElSelectMenu: tc,
      ElOption: el,
      ElTag: Yi,
      ElScrollbar: Qn,
      ElTooltip: yn,
      ElIcon: Re,
    },
    directives: { ClickOutside: io },
    props: {
      name: String,
      id: String,
      modelValue: { type: [Array, String, Number, Boolean, Object], default: void 0 },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: ti },
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
      teleported: $a.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: [String, Object], default: ao },
      fitInputWidth: { type: Boolean, default: !1 },
      suffixIcon: { type: [String, Object], default: ro },
      tagType: Ce(se({}, Lo.type), { default: 'info' }),
      validateEvent: { type: Boolean, default: !0 },
    },
    emits: [Ie, oo, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, t) {
      const n = Y('select'),
        l = Y('input'),
        { t: a } = st(),
        s = nc(e),
        {
          optionsArray: r,
          selectSize: u,
          readonly: o,
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
          emptyText: D,
          toggleLastOptionHitState: W,
          resetInputState: V,
          handleComposition: J,
          onOptionCreate: ee,
          onOptionDestroy: fe,
          handleMenuEnter: le,
          handleFocus: be,
          blur: R,
          handleBlur: M,
          handleClearClick: F,
          handleClose: j,
          handleKeydownEscape: ie,
          toggleMenu: oe,
          selectOption: pe,
          getValueKey: ae,
          navigateOptions: ye,
          dropMenuVisible: we,
          reference: Ee,
          input: Ae,
          tooltipRef: De,
          tags: rt,
          selectWrapper: We,
          scrollbar: tt,
          queryChange: yt,
          groupQueryChange: it,
        } = lc(e, s, t),
        { focus: nt } = ai(Ee),
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
          ;(s.cachedPlaceHolder = Pe.value = e.placeholder || a('el.select.placeholder')),
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
      const Be = $(() => {
        var Le, qe
        return (qe = (Le = De.value) == null ? void 0 : Le.popperRef) == null
          ? void 0
          : qe.contentRef
      })
      return {
        tagInMultiLine: Oe,
        prefixWidth: de,
        selectSize: u,
        readonly: o,
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
        emptyText: D,
        toggleLastOptionHitState: W,
        resetInputState: V,
        handleComposition: J,
        handleMenuEnter: le,
        handleFocus: be,
        blur: R,
        handleBlur: M,
        handleClearClick: F,
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
        tooltipRef: De,
        popperPaneRef: Be,
        tags: rt,
        selectWrapper: We,
        scrollbar: tt,
        wrapperKls: Me,
        selectTagsStyle: je,
        nsSelect: n,
      }
    },
  }),
  ac = { class: 'select-trigger' },
  sc = ['disabled', 'autocomplete'],
  rc = {
    style: {
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  }
function ic(e, t, n, l, a, s) {
  const r = $e('el-tag'),
    u = $e('el-tooltip'),
    o = $e('el-icon'),
    i = $e('el-input'),
    c = $e('el-option'),
    p = $e('el-scrollbar'),
    v = $e('el-select-menu'),
    b = Xn('click-outside')
  return ze(
    (A(),
    B(
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
              Z('div', ac, [
                e.multiple
                  ? (A(),
                    B(
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
                            B(
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
                                                        B(
                                                          Te,
                                                          null,
                                                          xt(
                                                            e.selected.slice(1),
                                                            (d, m) => (
                                                              A(),
                                                              B(
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
                                              B(
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
                                      B(
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
                              B(
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
                                      (t[6] = Ve(
                                        Ue((d) => e.navigateOptions('next'), ['prevent']),
                                        ['down'],
                                      )),
                                    t[7] ||
                                      (t[7] = Ve(
                                        Ue((d) => e.navigateOptions('prev'), ['prevent']),
                                        ['up'],
                                      )),
                                    t[8] ||
                                      (t[8] = Ve(
                                        (...d) =>
                                          e.handleKeydownEscape && e.handleKeydownEscape(...d),
                                        ['esc'],
                                      )),
                                    t[9] ||
                                      (t[9] = Ve(
                                        Ue(
                                          (...d) => e.selectOption && e.selectOption(...d),
                                          ['stop', 'prevent'],
                                        ),
                                        ['enter'],
                                      )),
                                    t[10] ||
                                      (t[10] = Ve(
                                        (...d) => e.deletePrevTag && e.deletePrevTag(...d),
                                        ['delete'],
                                      )),
                                    t[11] || (t[11] = Ve((d) => (e.visible = !1), ['tab'])),
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
                                sc,
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
                        (t[17] = Ve(
                          Ue((d) => e.navigateOptions('next'), ['stop', 'prevent']),
                          ['down'],
                        )),
                      t[18] ||
                        (t[18] = Ve(
                          Ue((d) => e.navigateOptions('prev'), ['stop', 'prevent']),
                          ['up'],
                        )),
                      Ve(Ue(e.selectOption, ['stop', 'prevent']), ['enter']),
                      Ve(e.handleKeydownEscape, ['esc']),
                      t[19] || (t[19] = Ve((d) => (e.visible = !1), ['tab'])),
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
                              o,
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
                              o,
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
                        ? { name: 'prefix', fn: G(() => [Z('div', rc, [ce(e.$slots, 'prefix')])]) }
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
                      B(
                        Te,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? ce(e.$slots, 'empty', { key: 0 })
                            : (A(),
                              B(
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
var uc = he(oc, [
  ['render', ic],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue',
  ],
])
const cc = ne({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: { type: Boolean, default: !1 } },
  setup(e) {
    const t = Y('select'),
      n = P(!0),
      l = ge(),
      a = P([])
    mt(Ho, bt(se({}, Xt(e))))
    const s = Se(Sn)
    Ze(() => {
      a.value = r(l.subTree)
    })
    const r = (o) => {
        const i = []
        return (
          Array.isArray(o.children) &&
            o.children.forEach((c) => {
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
        n.value = a.value.some((o) => o.visible === !0)
      }),
      { visible: n, ns: t }
    )
  },
})
function dc(e, t, n, l, a, s) {
  return ze(
    (A(),
    B(
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
var Do = he(cc, [
  ['render', dc],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue',
  ],
])
const fc = gt(uc, { Option: el, OptionGroup: Do }),
  pc = Ke(el)
Ke(Do)
const tl = () => Se(bo, {}),
  vc = Qe({
    pageSize: { type: Number, required: !0 },
    pageSizes: { type: vt(Array), default: () => bn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String },
    disabled: Boolean,
    size: { type: String, default: 'default' },
  }),
  hc = { name: 'ElPaginationSizes' },
  mc = ne(
    Ce(se({}, hc), {
      props: vc,
      emits: ['page-size-change'],
      setup(e, { emit: t }) {
        const n = e,
          { t: l } = st(),
          a = Y('pagination'),
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
        function o(i) {
          var c
          i !== r.value && ((r.value = i), (c = s.handleSizeChange) == null || c.call(s, Number(i)))
        }
        return (i, c) => (
          A(),
          B(
            'span',
            { class: I(f(a).e('sizes')) },
            [
              X(
                f(fc),
                {
                  'model-value': r.value,
                  disabled: i.disabled,
                  'popper-class': i.popperClass,
                  size: i.size,
                  onChange: o,
                },
                {
                  default: G(() => [
                    (A(!0),
                    B(
                      Te,
                      null,
                      xt(
                        f(u),
                        (p) => (
                          A(),
                          Q(
                            f(pc),
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
var gc = he(mc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue',
  ],
])
const bc = ['disabled'],
  yc = { name: 'ElPaginationJumper' },
  Cc = ne(
    Ce(se({}, yc), {
      setup(e) {
        const { t } = st(),
          n = Y('pagination'),
          { pageCount: l, disabled: a, currentPage: s, changeEvent: r } = tl(),
          u = P(),
          o = $(() => {
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
          B(
            'span',
            { class: I(f(n).e('jump')), disabled: f(a) },
            [
              at(ue(f(t)('el.pagination.goto')) + ' ', 1),
              X(
                f(yo),
                {
                  size: 'small',
                  class: I([f(n).e('editor'), f(n).is('in-pagination')]),
                  min: 1,
                  max: f(l),
                  disabled: f(a),
                  'model-value': f(o),
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
            bc,
          )
        )
      },
    }),
  )
var Sc = he(Cc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue',
  ],
])
const wc = Qe({ total: { type: Number, default: 1e3 } }),
  Ec = ['disabled'],
  $c = { name: 'ElPaginationTotal' },
  kc = ne(
    Ce(se({}, $c), {
      props: wc,
      setup(e) {
        const { t } = st(),
          n = Y('pagination'),
          { disabled: l } = tl()
        return (a, s) => (
          A(),
          B(
            'span',
            { class: I(f(n).e('total')), disabled: f(l) },
            ue(f(t)('el.pagination.total', { total: a.total })),
            11,
            Ec,
          )
        )
      },
    }),
  )
var Mc = he(kc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue',
  ],
])
const Tc = Qe({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean,
  }),
  xc = ['onKeyup'],
  Pc = ['aria-current', 'tabindex'],
  Ac = ['tabindex'],
  Oc = ['aria-current', 'tabindex'],
  Lc = ['tabindex'],
  Nc = ['aria-current', 'tabindex'],
  Ic = { name: 'ElPaginationPager' },
  Rc = ne(
    Ce(se({}, Ic), {
      props: Tc,
      emits: ['change'],
      setup(e, { emit: t }) {
        const n = e,
          l = Y('pager'),
          a = Y('icon'),
          s = P(!1),
          r = P(!1),
          u = P(!1),
          o = P(!1),
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
          n.disabled || (E ? (u.value = !0) : (o.value = !0))
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
          B(
            'ul',
            { class: I(f(l).b()), onClick: w, onKeyup: Ve(m, ['enter']) },
            [
              E.pageCount > 0
                ? (A(),
                  B(
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
                    Pc,
                  ))
                : U('v-if', !0),
              s.value
                ? (A(),
                  B(
                    'li',
                    {
                      key: 1,
                      class: I([
                        'more',
                        'btn-quickprev',
                        f(a).b(),
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
                        ? (A(), Q(f(Ia), { key: 0 }))
                        : (A(), Q(f(ml), { key: 1 })),
                    ],
                    42,
                    Ac,
                  ))
                : U('v-if', !0),
              (A(!0),
              B(
                Te,
                null,
                xt(
                  f(p),
                  (h) => (
                    A(),
                    B(
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
                      Oc,
                    )
                  ),
                ),
                128,
              )),
              r.value
                ? (A(),
                  B(
                    'li',
                    {
                      key: 2,
                      class: I([
                        'more',
                        'btn-quicknext',
                        f(a).b(),
                        f(l).is('disabled', E.disabled),
                      ]),
                      tabindex: f(v),
                      onMouseenter: g[4] || (g[4] = (h) => b()),
                      onMouseleave: g[5] || (g[5] = (h) => (o.value = !1)),
                      onFocus: g[6] || (g[6] = (h) => d()),
                      onBlur: g[7] || (g[7] = (h) => (c.value = !1)),
                    },
                    [
                      o.value || c.value
                        ? (A(), Q(f(Ra), { key: 0 }))
                        : (A(), Q(f(ml), { key: 1 })),
                    ],
                    42,
                    Lc,
                  ))
                : U('v-if', !0),
              E.pageCount > 1
                ? (A(),
                  B(
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
                    Nc,
                  ))
                : U('v-if', !0),
            ],
            42,
            xc,
          )
        )
      },
    }),
  )
var zc = he(Rc, [
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
  Fc = {
    'update:current-page': (e) => typeof e == 'number',
    'update:page-size': (e) => typeof e == 'number',
    'size-change': (e) => typeof e == 'number',
    'current-change': (e) => typeof e == 'number',
    'prev-click': (e) => typeof e == 'number',
    'next-click': (e) => typeof e == 'number',
  },
  jl = 'ElPagination'
var Wc = ne({
  name: jl,
  props: Bc,
  emits: Fc,
  setup(e, { emit: t, slots: n }) {
    const { t: l } = st(),
      a = Y('pagination'),
      s = ge().vnode.props || {},
      r = 'onUpdate:currentPage' in s || 'onUpdate:current-page' in s || 'onCurrentChange' in s,
      u = 'onUpdate:pageSize' in s || 'onUpdate:page-size' in s || 'onSizeChange' in s,
      o = $(() => {
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
      mt(bo, {
        pageCount: v,
        disabled: $(() => e.disabled),
        currentPage: b,
        changeEvent: d,
        handleSizeChange: m,
      }),
      () => {
        var h, C
        if (!o.value) return Nt(jl, l('el.pagination.deprecationWarning')), null
        if (!e.layout || (e.hideOnSinglePage && v.value <= 1)) return null
        const O = [],
          T = [],
          S = _('div', { class: a.e('rightwrapper') }, T),
          x = {
            prev: _(Vu, {
              disabled: e.disabled,
              currentPage: b.value,
              prevText: e.prevText,
              onClick: w,
            }),
            jumper: _(Sc),
            pager: _(zc, {
              currentPage: b.value,
              pageCount: v.value,
              pagerCount: e.pagerCount,
              onChange: d,
              disabled: e.disabled,
            }),
            next: _(Yu, {
              disabled: e.disabled,
              currentPage: b.value,
              pageCount: v.value,
              nextText: e.nextText,
              onClick: E,
            }),
            sizes: _(gc, {
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
            total: _(Mc, { total: Ne(e.total) ? 0 : e.total }),
          },
          L = e.layout.split(',').map((W) => W.trim())
        let D = !1
        return (
          L.forEach((W) => {
            if (W === '->') {
              D = !0
              return
            }
            D ? T.push(x[W]) : O.push(x[W])
          }),
          g(O[0], a.is('first')),
          g(O[O.length - 1], a.is('last')),
          D &&
            T.length > 0 &&
            (g(T[0], a.is('first')), g(T[T.length - 1], a.is('last')), O.push(S)),
          _(
            'div',
            {
              role: 'pagination',
              'aria-label': 'pagination',
              class: [a.b(), a.is('background', e.background), { [a.m('small')]: e.small }],
            },
            O,
          )
        )
      }
    )
  },
})
const _c = gt(Wc)
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var Hc = /["'&<>]/,
  Dc = Vc
function Vc(e) {
  var t = '' + e,
    n = Hc.exec(t)
  if (!n) return t
  var l,
    a = '',
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
    r !== s && (a += t.substring(r, s)), (r = s + 1), (a += l)
  }
  return r !== s ? a + t.substring(r, s) : a
}
const Pn = function (e) {
    var t
    return (t = e.target) == null ? void 0 : t.closest('td')
  },
  ql = function (e) {
    return e !== null && typeof e == 'object'
  },
  Kc = function (e, t, n, l, a) {
    if (!t && !l && (!a || (Array.isArray(a) && !a.length))) return e
    typeof n == 'string' ? (n = n === 'descending' ? -1 : 1) : (n = n && n < 0 ? -1 : 1)
    const s = l
        ? null
        : function (u, o) {
            return a
              ? (Array.isArray(a) || (a = [a]),
                a.map((i) => (typeof i == 'string' ? He(u, i) : i(u, o, e))))
              : (t !== '$key' && ql(u) && '$value' in u && (u = u.$value), [ql(u) ? He(u, t) : u])
          },
      r = function (u, o) {
        if (l) return l(u.value, o.value)
        for (let i = 0, c = u.key.length; i < c; i++) {
          if (u.key[i] < o.key[i]) return -1
          if (u.key[i] > o.key[i]) return 1
        }
        return 0
      }
    return e
      .map((u, o) => ({ value: u, index: o, key: s ? s(u, o) : null }))
      .sort((u, o) => {
        let i = r(u, o)
        return i || (i = u.index - o.index), i * +n
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
  jc = function (e, t) {
    let n = null
    for (let l = 0; l < e.columns.length; l++) {
      const a = e.columns[l]
      if (a.columnKey === t) {
        n = a
        break
      }
    }
    return n
  },
  Gl = function (e, t, n) {
    const l = (t.className || '').match(new RegExp(`${n}-table_[^\\s]+`, 'gm'))
    return l ? Vo(e, l[0]) : null
  },
  xe = (e, t) => {
    if (!e) throw new Error('Row is required when get row identity')
    if (typeof t == 'string') {
      if (!t.includes('.')) return `${e[t]}`
      const n = t.split('.')
      let l = e
      for (const a of n) l = l[a]
      return `${l}`
    } else if (typeof t == 'function') return t.call(null, e)
  },
  $t = function (e, t) {
    const n = {}
    return (
      (e || []).forEach((l, a) => {
        n[xe(l, t)] = { row: l, index: a }
      }),
      n
    )
  }
function qc(e, t) {
  const n = {}
  let l
  for (l in e) n[l] = e[l]
  for (l in t)
    if (Ut(t, l)) {
      const a = t[l]
      typeof a != 'undefined' && (n[l] = a)
    }
  return n
}
function nl(e) {
  return (
    e === '' || (e !== void 0 && ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))), e
  )
}
function Ko(e) {
  return e === '' || (e !== void 0 && ((e = nl(e)), Number.isNaN(e) && (e = 80))), e
}
function Gc(e) {
  return typeof e == 'number'
    ? e
    : typeof e == 'string'
    ? /^\d+(?:px)?$/.test(e)
      ? Number.parseInt(e, 10)
      : e
    : null
}
function Uc(...e) {
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
  const a = e.indexOf(t),
    s = a !== -1,
    r = () => {
      e.push(t), (l = !0)
    },
    u = () => {
      e.splice(a, 1), (l = !0)
    }
  return typeof n == 'boolean' ? (n && !s ? r() : !n && s && u()) : s ? u() : r(), l
}
function Yc(e, t, n = 'children', l = 'hasChildren') {
  const a = (r) => !(Array.isArray(r) && r.length)
  function s(r, u, o) {
    t(r, u, o),
      u.forEach((i) => {
        if (i[l]) {
          t(i, null, o + 1)
          return
        }
        const c = i[n]
        a(c) || s(i, c, o + 1)
      })
  }
  e.forEach((r) => {
    if (r[l]) {
      t(r, null, 0)
      return
    }
    const u = r[n]
    a(u) || s(r, u, 0)
  })
}
let ft
function Xc(e, t, n, l, a) {
  const { nextZIndex: s } = ka(),
    r = e == null ? void 0 : e.dataset.prefix,
    u = e == null ? void 0 : e.querySelector(`.${r}-scrollbar__wrap`)
  function o() {
    const d = a === 'light',
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
  const v = o(),
    b = i()
  return (
    v.appendChild(b),
    (p = Ma(
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
const jo = (e, t, n, l) => {
    let a = 0,
      s = e
    if (l) {
      if (l[e].colSpan > 1) return {}
      for (let o = 0; o < e; o++) a += l[o].colSpan
      s = a + l[e].colSpan - 1
    } else a = e
    let r
    const u = n.states.columns
    switch (t) {
      case 'left':
        s < n.states.fixedLeafColumnsLength.value && (r = 'left')
        break
      case 'right':
        a >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
        break
      default:
        s < n.states.fixedLeafColumnsLength.value
          ? (r = 'left')
          : a >= u.value.length - n.states.rightFixedLeafColumnsLength.value && (r = 'right')
    }
    return r ? { direction: r, start: a, after: s } : {}
  },
  ll = (e, t, n, l, a) => {
    const s = [],
      { direction: r, start: u } = jo(t, n, l, a)
    if (r) {
      const o = r === 'left'
      s.push(`${e}-fixed-column--${r}`),
        o && u === l.states.fixedLeafColumnsLength.value - 1
          ? s.push('is-last-column')
          : !o &&
            u === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value &&
            s.push('is-first-column')
    }
    return s
  }
function Ul(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth)
}
const ol = (e, t, n, l) => {
    const { direction: a, start: s = 0 } = jo(e, t, n, l)
    if (!a) return
    const r = {},
      u = a === 'left',
      o = n.states.columns.value
    return (
      u
        ? (r.left = o.slice(0, e).reduce(Ul, 0))
        : (r.right = o
            .slice(s + 1)
            .reverse()
            .reduce(Ul, 0)),
      r
    )
  },
  zt = (e, t) => {
    !e || Number.isNaN(e[t]) || (e[t] = `${e[t]}px`)
  }
function Qc(e) {
  const t = ge(),
    n = P(!1),
    l = P([])
  return {
    updateExpandRows: () => {
      const o = e.data.value || [],
        i = e.rowKey.value
      if (n.value) l.value = o.slice()
      else if (i) {
        const c = $t(l.value, i)
        l.value = o.reduce((p, v) => {
          const b = xe(v, i)
          return c[b] && p.push(v), p
        }, [])
      } else l.value = []
    },
    toggleRowExpansion: (o, i) => {
      an(l.value, o, i) && t.emit('expand-change', o, l.value.slice())
    },
    setExpandRowKeys: (o) => {
      t.store.assertRowKey()
      const i = e.data.value || [],
        c = e.rowKey.value,
        p = $t(i, c)
      l.value = o.reduce((v, b) => {
        const d = p[b]
        return d && v.push(d.row), v
      }, [])
    },
    isRowExpanded: (o) => {
      const i = e.rowKey.value
      return i ? !!$t(l.value, i)[xe(o, i)] : l.value.includes(o)
    },
    states: { expandRows: l, defaultExpandAll: n },
  }
}
function Zc(e) {
  const t = ge(),
    n = P(null),
    l = P(null),
    a = (i) => {
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
    setCurrentRowKey: a,
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
function Jc(e) {
  const t = P([]),
    n = P({}),
    l = P(16),
    a = P(!1),
    s = P({}),
    r = P('hasChildren'),
    u = P('children'),
    o = ge(),
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
        Yc(
          E,
          (C, O, T) => {
            const S = xe(C, g)
            Array.isArray(O)
              ? (h[S] = { children: O.map((x) => xe(x, g)), level: T })
              : a.value && (h[S] = { children: [], lazy: !0, level: T })
          },
          u.value,
          r.value,
        ),
        h
      )
    },
    v = (
      E = !1,
      g = ((h) => ((h = o.store) == null ? void 0 : h.states.defaultExpandAll.value))(),
    ) => {
      var h
      const C = i.value,
        O = c.value,
        T = Object.keys(C),
        S = {}
      if (T.length) {
        const x = f(n),
          L = [],
          D = (V, J) => {
            if (E)
              return t.value ? g || t.value.includes(J) : !!(g || (V == null ? void 0 : V.expanded))
            {
              const ee = g || (t.value && t.value.includes(J))
              return !!((V == null ? void 0 : V.expanded) || ee)
            }
          }
        T.forEach((V) => {
          const J = x[V],
            ee = se({}, C[V])
          if (((ee.expanded = D(J, V)), ee.lazy)) {
            const { loaded: fe = !1, loading: le = !1 } = J || {}
            ;(ee.loaded = !!fe), (ee.loading = !!le), L.push(V)
          }
          S[V] = ee
        })
        const W = Object.keys(O)
        a.value &&
          W.length &&
          L.length &&
          W.forEach((V) => {
            const J = x[V],
              ee = O[V].children
            if (L.includes(V)) {
              if (S[V].children.length !== 0)
                throw new Error('[ElTable]children must be an empty array.')
              S[V].children = ee
            } else {
              const { loaded: fe = !1, loading: le = !1 } = J || {}
              S[V] = {
                lazy: !0,
                loaded: !!fe,
                loading: !!le,
                expanded: D(J, V),
                children: ee,
                level: '',
              }
            }
          })
      }
      ;(n.value = S), (h = o.store) == null || h.updateTableScrollY()
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
      o.store.assertRowKey()
      const h = e.rowKey.value,
        C = xe(E, h),
        O = C && n.value[C]
      if (C && O && 'expanded' in O) {
        const T = O.expanded
        ;(g = typeof g == 'undefined' ? !O.expanded : g),
          (n.value[C].expanded = g),
          T !== g && o.emit('expand-change', E, g),
          o.store.updateTableScrollY()
      }
    },
    m = (E) => {
      o.store.assertRowKey()
      const g = e.rowKey.value,
        h = xe(E, g),
        C = n.value[h]
      a.value && C && 'loaded' in C && !C.loaded ? w(E, h, C) : d(E, void 0)
    },
    w = (E, g, h) => {
      const { load: C } = o.props
      C &&
        !n.value[g].loaded &&
        ((n.value[g].loading = !0),
        C(E, h, (O) => {
          if (!Array.isArray(O)) throw new TypeError('[ElTable] data must be an array')
          ;(n.value[g].loading = !1),
            (n.value[g].loaded = !0),
            (n.value[g].expanded = !0),
            O.length && (s.value[g] = O),
            o.emit('expand-change', E, !0)
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
      lazy: a,
      lazyTreeNodeMap: s,
      lazyColumnIdentifier: r,
      childrenColumnName: u,
    },
  }
}
const ed = (e, t) => {
    const n = t.sortingColumn
    return !n || typeof n.sortable == 'string'
      ? e
      : Kc(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy)
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
function td() {
  var e
  const t = ge(),
    { size: n } = Xt((e = t.proxy) == null ? void 0 : e.$props),
    l = P(null),
    a = P([]),
    s = P([]),
    r = P(!1),
    u = P([]),
    o = P([]),
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
    D = P(null),
    W = P(null),
    V = P(null)
  re(a, () => t.state && fe(!1), { deep: !0 })
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
      o.value = [].concat(c.value).concat(H).concat(p.value)
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
          y = $t(a.value, l.value)
        for (const k in q) Ut(q, k) && !y[k] && H.push(q[k].row)
      } else H = h.value.filter((q) => !a.value.includes(q))
      if (H.length) {
        const q = h.value.filter((y) => !H.includes(y))
        ;(h.value = q), t.emit('selection-change', q.slice())
      }
    },
    M = () => (h.value || []).slice(),
    F = (H, q = void 0, y = !0) => {
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
      a.value.forEach((de, Oe) => {
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
      a.value.forEach((q) => {
        const y = xe(q, l.value),
          k = H[y]
        k && (h.value[k.index] = q)
      })
    },
    oe = () => {
      var H, q, y
      if (((H = a.value) == null ? void 0 : H.length) === 0) {
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
      for (let Me = 0, je = (a.value || []).length; Me < je; Me++) {
        const Be =
            (y = (q = t == null ? void 0 : t.store) == null ? void 0 : q.states) == null
              ? void 0
              : y.rowKey.value,
          Le = Me + Oe,
          qe = a.value[Me],
          Zo = T.value && T.value.call(null, qe, Le)
        if (z(qe)) de++
        else if (!T.value || Zo) {
          K = !1
          break
        }
        Oe += pe(xe(qe, Be))
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
        (D.value = q),
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
      a.value = ed(x.value, { sortingColumn: L.value, sortProp: D.value, sortOrder: W.value })
    },
    Ae = (H = void 0) => {
      ;(H && H.filter) || we(), Ee()
    },
    De = (H) => {
      const { tableHeaderRef: q } = t.refs
      if (!q) return
      const y = Object.assign({}, q.filterPanels),
        k = Object.keys(y)
      if (!!k.length)
        if ((typeof H == 'string' && (H = [H]), Array.isArray(H))) {
          const z = H.map((K) => jc({ columns: i.value }, K))
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
    } = Qc({ data: a, rowKey: l }),
    {
      updateTreeExpandKeys: Je,
      toggleTreeExpansion: lt,
      updateTreeData: Ct,
      loadOrToggle: ut,
      states: ct,
    } = Jc({ data: a, rowKey: l }),
    {
      updateCurrentRowData: St,
      updateCurrentRow: dt,
      setCurrentRowKey: N,
      states: te,
    } = Zc({ data: a, rowKey: l })
  return {
    assertRowKey: J,
    updateColumns: ee,
    scheduleLayout: fe,
    isSelected: le,
    clearSelection: be,
    cleanSelection: R,
    getSelectionRows: M,
    toggleRowSelection: F,
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
    clearFilter: De,
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
            data: a,
            _data: s,
            isComplex: r,
            _columns: u,
            originColumns: o,
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
            sortProp: D,
            sortOrder: W,
            hoverRow: V,
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
function qo(e) {
  e.forEach((t) => {
    var n, l
    ;(t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t)),
      (l = t.children) != null && l.length && qo(t.children)
  }),
    e.sort((t, n) => t.no - n.no)
}
function nd() {
  const e = ge(),
    t = td(),
    n = Y('table'),
    l = {
      setData(r, u) {
        const o = f(r._data) !== u
        ;(r.data.value = u),
          (r._data.value = u),
          e.store.execQuery(),
          e.store.updateCurrentRowData(),
          e.store.updateExpandRows(),
          e.store.updateTreeData(e.store.states.defaultExpandAll.value),
          f(r.reserveSelection)
            ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
            : o
            ? e.store.clearSelection()
            : e.store.cleanSelection(),
          e.store.updateAllSelected(),
          e.$ready && e.store.scheduleLayout()
      },
      insertColumn(r, u, o) {
        const i = f(r._columns)
        let c = []
        o
          ? (o && !o.children && (o.children = []), o.children.push(u), (c = jn(i, o)))
          : (i.push(u), (c = i)),
          qo(c),
          (r._columns.value = c),
          u.type === 'selection' &&
            ((r.selectable.value = u.selectable), (r.reserveSelection.value = u.reserveSelection)),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      removeColumn(r, u, o) {
        const i = f(r._columns) || []
        if (o)
          o.children.splice(
            o.children.findIndex((c) => c.id === u.id),
            1,
          ),
            o.children.length === 0 && delete o.children,
            (r._columns.value = jn(i, o))
        else {
          const c = i.indexOf(u)
          c > -1 && (i.splice(c, 1), (r._columns.value = i))
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
      },
      sort(r, u) {
        const { prop: o, order: i, init: c } = u
        if (o) {
          const p = f(r.columns).find((v) => v.property === o)
          p &&
            ((p.order = i),
            e.store.updateSort(p, o, i),
            e.store.commit('changeSortCondition', { init: c }))
        }
      },
      changeSortCondition(r, u) {
        const { sortingColumn: o, sortProp: i, sortOrder: c } = r
        f(c) === null && ((r.sortingColumn.value = null), (r.sortProp.value = null))
        const p = { filter: !0 }
        e.store.execQuery(p),
          (!u || !(u.silent || u.init)) &&
            e.emit('sort-change', { column: f(o), prop: f(i), order: f(c) }),
          e.store.updateTableScrollY()
      },
      filterChange(r, u) {
        const { column: o, values: i, silent: c } = u,
          p = e.store.updateFilters(o, i)
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
    a = function (r, ...u) {
      const o = e.store.mutations
      if (o[r]) o[r].apply(e, [e.store.states].concat(u))
      else throw new Error(`Action not found: ${r}`)
    },
    s = function () {
      ve(() => e.layout.updateScrollY.apply(e.layout))
    }
  return Ce(se({ ns: n }, t), { mutations: l, commit: a, updateTableScrollY: s })
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
function ld(e, t) {
  if (!e) throw new Error('Table is required.')
  const n = nd()
  return (
    (n.toggleAllSelection = It(n._toggleAllSelection, 10)),
    Object.keys(Kt).forEach((l) => {
      Go(Uo(t, l), l, n)
    }),
    od(n, t),
    n
  )
}
function od(e, t) {
  Object.keys(Kt).forEach((n) => {
    re(
      () => Uo(t, n),
      (l) => {
        Go(l, n, e)
      },
    )
  })
}
function Go(e, t, n) {
  let l = e,
    a = Kt[t]
  typeof Kt[t] == 'object' && ((a = a.key), (l = l || Kt[t].default)), (n.states[a].value = l)
}
function Uo(e, t) {
  if (t.includes('.')) {
    const n = t.split('.')
    let l = e
    return (
      n.forEach((a) => {
        l = l[a]
      }),
      l
    )
  } else return e[t]
}
class ad {
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
      const a = this.scrollY.value
      return (l = n.wrap$.scrollHeight > n.wrap$.clientHeight), (this.scrollY.value = l), a !== l
    }
    return !1
  }
  setHeight(t, n = 'height') {
    if (!Pt) return
    const l = this.table.vnode.el
    if (((t = Gc(t)), (this.height.value = Number(t)), !l && (t || t === 0)))
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
    const a = this.getFlattenColumns(),
      s = a.filter((o) => typeof o.width != 'number')
    if (
      (a.forEach((o) => {
        typeof o.width == 'number' && o.realWidth && (o.realWidth = null)
      }),
      s.length > 0 && t)
    ) {
      if (
        (a.forEach((o) => {
          l += Number(o.width || o.minWidth || 80)
        }),
        l <= n)
      ) {
        this.scrollX.value = !1
        const o = n - l
        if (s.length === 1) s[0].realWidth = Number(s[0].minWidth || 80) + o
        else {
          const i = s.reduce((v, b) => v + Number(b.minWidth || 80), 0),
            c = o / i
          let p = 0
          s.forEach((v, b) => {
            if (b === 0) return
            const d = Math.floor(Number(v.minWidth || 80) * c)
            ;(p += d), (v.realWidth = Number(v.minWidth || 80) + d)
          }),
            (s[0].realWidth = Number(s[0].minWidth || 80) + o - p)
        }
      } else
        (this.scrollX.value = !0),
          s.forEach((o) => {
            o.realWidth = Number(o.minWidth)
          })
      ;(this.bodyWidth.value = Math.max(l, n)),
        (this.table.state.resizeState.value.width = this.bodyWidth.value)
    } else
      a.forEach((o) => {
        !o.width && !o.minWidth
          ? (o.realWidth = 80)
          : (o.realWidth = Number(o.width || o.minWidth)),
          (l += o.realWidth)
      }),
        (this.scrollX.value = l > n),
        (this.bodyWidth.value = l)
    const r = this.store.states.fixedColumns.value
    if (r.length > 0) {
      let o = 0
      r.forEach((i) => {
        o += Number(i.realWidth || i.width)
      }),
        (this.fixedWidth.value = o)
    }
    const u = this.store.states.rightFixedColumns.value
    if (u.length > 0) {
      let o = 0
      u.forEach((i) => {
        o += Number(i.realWidth || i.width)
      }),
        (this.rightFixedWidth.value = o)
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
      var a, s
      switch (t) {
        case 'columns':
          ;(a = l.state) == null || a.onColumnsChange(this)
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
const { CheckboxGroup: sd } = Rt,
  rd = ne({
    name: 'ElTableFilterPanel',
    components: {
      ElCheckbox: Rt,
      ElCheckboxGroup: sd,
      ElScrollbar: Qn,
      ElTooltip: yn,
      ElIcon: Re,
      ArrowDown: so,
      ArrowUp: ro,
    },
    directives: { ClickOutside: io },
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
        a = t == null ? void 0 : t.parent
      a.filterPanels.value[e.column.id] || (a.filterPanels.value[e.column.id] = t)
      const s = P(!1),
        r = P(null),
        u = $(() => e.column && e.column.filters),
        o = $({
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
        p = (C) => C.value === o.value,
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
          ;(o.value = C), g(typeof C != 'undefined' && C !== null ? i.value : []), v()
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
        filterValue: o,
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
  id = { key: 0 },
  ud = ['disabled'],
  cd = ['label', 'onClick']
function dd(e, t, n, l, a, s) {
  const r = $e('el-checkbox'),
    u = $e('el-checkbox-group'),
    o = $e('el-scrollbar'),
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
              B('div', id, [
                Z(
                  'div',
                  { class: I(e.ns.e('content')) },
                  [
                    X(
                      o,
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
                                B(
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
                      ud,
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
              B(
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
                  B(
                    Te,
                    null,
                    xt(
                      e.filters,
                      (d) => (
                        A(),
                        B(
                          'li',
                          {
                            key: d.value,
                            class: I([e.ns.e('list-item'), e.ns.is('active', e.isActive(d))]),
                            label: d.value,
                            onClick: (m) => e.handleSelect(d.value),
                          },
                          ue(d.text),
                          11,
                          cd,
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
            B(
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
var fd = he(rd, [
  ['render', dd],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue',
  ],
])
function Yo(e) {
  const t = ge()
  to(() => {
    n.value.addObserver(t)
  }),
    Ze(() => {
      l(n.value), a(n.value)
    }),
    Un(() => {
      l(n.value), a(n.value)
    }),
    no(() => {
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
      const o = s.getFlattenColumns(),
        i = {}
      o.forEach((c) => {
        i[c.id] = c
      })
      for (let c = 0, p = u.length; c < p; c++) {
        const v = u[c],
          b = v.getAttribute('name'),
          d = i[b]
        d && v.setAttribute('width', d.realWidth || d.width)
      }
    },
    a = (s) => {
      var r, u
      const o =
        ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll('colgroup > col[name=gutter]')) ||
        []
      for (let c = 0, p = o.length; c < p; c++)
        o[c].setAttribute('width', s.scrollY.value ? s.gutterWidth : '0')
      const i = ((u = e.vnode.el) == null ? void 0 : u.querySelectorAll('th.gutter')) || []
      for (let c = 0, p = i.length; c < p; c++) {
        const v = i[c]
        ;(v.style.width = s.scrollY.value ? `${s.gutterWidth}px` : '0'),
          (v.style.display = s.scrollY.value ? '' : 'none')
      }
    }
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: a }
}
const et = Symbol('ElTable')
function pd(e, t) {
  const n = ge(),
    l = Se(et),
    a = (m) => {
      m.stopPropagation()
    },
    s = (m, w) => {
      !w.filters && w.sortable ? d(m, w, !1) : w.filterable && !w.sortable && a(m),
        l == null || l.emit('header-click', w, m)
    },
    r = (m, w) => {
      l == null || l.emit('header-contextmenu', w, m)
    },
    u = P(null),
    o = P(!1),
    i = P({}),
    c = (m, w) => {
      if (!!Pt && !(w.children && w.children.length > 0) && u.value && e.border) {
        o.value = !0
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
        const x = (D) => {
            const W = D.clientX - i.value.startMouseLeft,
              V = i.value.startLeft + W
            S.style.left = `${Math.max(T, V)}px`
          },
          L = () => {
            if (o.value) {
              const { startColumnLeft: D, startLeft: W } = i.value,
                J = Number.parseInt(S.style.left, 10) - D
              ;(w.width = w.realWidth = J),
                E == null || E.emit('header-dragend', w.width, W - D, w, m),
                requestAnimationFrame(() => {
                  e.store.scheduleLayout(!1, !0)
                }),
                (document.body.style.cursor = ''),
                (o.value = !1),
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
      if (!(!w || !w.resizable) && !o.value && e.border) {
        const h = g.getBoundingClientRect(),
          C = document.body.style
        h.width > 12 && h.right - m.pageX < 8
          ? ((C.cursor = 'col-resize'),
            Dt(g, 'is-sortable') && (g.style.cursor = 'col-resize'),
            (u.value = w))
          : o.value ||
            ((C.cursor = ''),
            Dt(g, 'is-sortable') && (g.style.cursor = 'pointer'),
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
      if (C && Dt(C, 'noclick')) {
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
    handleFilterClick: a,
  }
}
function vd(e) {
  const t = Se(et),
    n = Y('table')
  return {
    getHeaderRowStyle: (u) => {
      const o = t == null ? void 0 : t.props.headerRowStyle
      return typeof o == 'function' ? o.call(null, { rowIndex: u }) : o
    },
    getHeaderRowClass: (u) => {
      const o = [],
        i = t == null ? void 0 : t.props.headerRowClassName
      return (
        typeof i == 'string'
          ? o.push(i)
          : typeof i == 'function' && o.push(i.call(null, { rowIndex: u })),
        o.join(' ')
      )
    },
    getHeaderCellStyle: (u, o, i, c) => {
      var p
      let v = (p = t == null ? void 0 : t.props.headerCellStyle) != null ? p : {}
      typeof v == 'function' &&
        (v = v.call(null, { rowIndex: u, columnIndex: o, row: i, column: c }))
      const b = c.isSubColumn ? null : ol(o, c.fixed, e.store, i)
      return zt(b, 'left'), zt(b, 'right'), Object.assign({}, v, b)
    },
    getHeaderCellClass: (u, o, i, c) => {
      const p = c.isSubColumn ? [] : ll(n.b(), o, c.fixed, e.store, i),
        v = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...p]
      c.children || v.push('is-leaf'), c.sortable && v.push('is-sortable')
      const b = t == null ? void 0 : t.props.headerCellClassName
      return (
        typeof b == 'string'
          ? v.push(b)
          : typeof b == 'function' &&
            v.push(b.call(null, { rowIndex: u, columnIndex: o, row: i, column: c })),
        v.push(n.e('cell')),
        v.filter((d) => Boolean(d)).join(' ')
      )
    },
  }
}
const Xo = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        n.children ? (t.push(n), t.push.apply(t, Xo(n.children))) : t.push(n)
      }),
      t
    )
  },
  hd = (e) => {
    let t = 1
    const n = (s, r) => {
      if ((r && ((s.level = r.level + 1), t < s.level && (t = s.level)), s.children)) {
        let u = 0
        s.children.forEach((o) => {
          n(o, s), (u += o.colSpan)
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
      Xo(e).forEach((s) => {
        s.children
          ? ((s.rowSpan = 1), s.children.forEach((r) => (r.isSubColumn = !0)))
          : (s.rowSpan = t - s.level + 1),
          l[s.level - 1].push(s)
      }),
      l
    )
  }
function md(e) {
  const t = Se(et),
    n = $(() => hd(e.store.states.originColumns.value))
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
var gd = ne({
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
      a = Y('table'),
      s = P({}),
      { onColumnsChange: r, onScrollableChange: u } = Yo(l)
    Ze(() =>
      ot(this, null, function* () {
        yield ve(), yield ve()
        const { prop: T, order: S } = e.defaultSort
        l == null || l.store.commit('sort', { prop: T, order: S, init: !0 })
      }),
    )
    const {
        handleHeaderClick: o,
        handleHeaderContextMenu: i,
        handleMouseDown: c,
        handleMouseMove: p,
        handleMouseOut: v,
        handleSortClick: b,
        handleFilterClick: d,
      } = pd(e, t),
      {
        getHeaderRowStyle: m,
        getHeaderRowClass: w,
        getHeaderCellStyle: E,
        getHeaderCellClass: g,
      } = vd(e),
      { isGroup: h, toggleAllSelection: C, columnRows: O } = md(e)
    return (
      (n.state = { onColumnsChange: r, onScrollableChange: u }),
      (n.filterPanels = s),
      {
        ns: a,
        filterPanels: s,
        onColumnsChange: r,
        onScrollableChange: u,
        columnRows: O,
        getHeaderRowClass: w,
        getHeaderRowStyle: m,
        getHeaderCellClass: g,
        getHeaderCellStyle: E,
        handleHeaderClick: o,
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
      getHeaderCellClass: a,
      getHeaderRowClass: s,
      getHeaderRowStyle: r,
      handleHeaderClick: u,
      handleHeaderContextMenu: o,
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
                  class: a(E, h, w, g),
                  colspan: g.colSpan,
                  key: `${g.id}-thead`,
                  rowspan: g.rowSpan,
                  style: l(E, h, w, g),
                  onClick: (C) => u(C, g),
                  onContextmenu: (C) => o(C, g),
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
                        _(fd, {
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
function bd(e) {
  const t = Se(et),
    n = P(''),
    l = P(_('div')),
    a = (v, b, d) => {
      var m
      const w = t,
        E = Pn(v)
      let g
      const h = (m = w == null ? void 0 : w.vnode.el) == null ? void 0 : m.dataset.prefix
      E &&
        ((g = Gl({ columns: e.store.states.columns.value }, E, h)),
        g && (w == null || w.emit(`cell-${d}`, b, g, E, v))),
        w == null || w.emit(`row-${d}`, b, g, v)
    },
    s = (v, b) => {
      a(v, b, 'dblclick')
    },
    r = (v, b) => {
      e.store.commit('setCurrentRow', b), a(v, b, 'click')
    },
    u = (v, b) => {
      a(v, b, 'contextmenu')
    },
    o = It((v) => {
      e.store.commit('setHoverRow', v)
    }, 30),
    i = It(() => {
      e.store.commit('setHoverRow', null)
    }, 30)
  return {
    handleDoubleClick: s,
    handleClick: r,
    handleContextMenu: u,
    handleMouseEnter: o,
    handleMouseLeave: i,
    handleCellMouseEnter: (v, b) => {
      var d
      const m = t,
        w = Pn(v),
        E = (d = m == null ? void 0 : m.vnode.el) == null ? void 0 : d.dataset.prefix
      if (w) {
        const T = Gl({ columns: e.store.states.columns.value }, w, E),
          S = (m.hoverState = { cell: w, column: T, row: b })
        m == null || m.emit('cell-mouse-enter', S.row, S.column, S.cell, v)
      }
      const g = v.target.querySelector('.cell')
      if (!(Dt(g, `${E}-tooltip`) && g.childNodes.length)) return
      const h = document.createRange()
      h.setStart(g, 0), h.setEnd(g, g.childNodes.length)
      const C = h.getBoundingClientRect().width,
        O =
          (Number.parseInt(gl(g, 'paddingLeft'), 10) || 0) +
          (Number.parseInt(gl(g, 'paddingRight'), 10) || 0)
      ;(C + O > g.offsetWidth || g.scrollWidth > g.offsetWidth) &&
        Xc(
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
function yd(e) {
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
function Cd(e) {
  const t = Se(et),
    n = Y('table'),
    {
      handleDoubleClick: l,
      handleClick: a,
      handleContextMenu: s,
      handleMouseEnter: r,
      handleMouseLeave: u,
      handleCellMouseEnter: o,
      handleCellMouseLeave: i,
      tooltipContent: c,
      tooltipTrigger: p,
    } = bd(e),
    {
      getRowStyle: v,
      getRowClass: b,
      getCellStyle: d,
      getCellClass: m,
      getSpan: w,
      getColspanRealWidth: E,
    } = yd(e),
    g = $(() => e.store.states.columns.value.findIndex(({ type: S }) => S === 'default')),
    h = (S, x) => {
      const L = t.props.rowKey
      return L ? xe(S, L) : x
    },
    C = (S, x, L, D = !1) => {
      const { tooltipEffect: W, store: V } = e,
        { indent: J, columns: ee } = V.states,
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
            onClick: (R) => a(R, S),
            onContextmenu: (R) => s(R, S),
            onMouseenter: () => r(x),
            onMouseleave: u,
          },
          ee.value.map((R, M) => {
            const { rowspan: F, colspan: j } = w(S, R, x, M)
            if (!F || !j) return null
            const ie = se({}, R)
            ie.realWidth = E(ee.value, j, M)
            const oe = {
              store: e.store,
              _self: e.context || t,
              column: ie,
              row: S,
              $index: x,
              cellIndex: M,
              expanded: D,
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
                rowspan: F,
                colspan: j,
                onMouseenter: (we) => o(we, Ce(se({}, S), { tooltipEffect: W })),
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
        { isRowExpanded: D, assertRowKey: W } = L,
        { treeData: V, lazyTreeNodeMap: J, childrenColumnName: ee, rowKey: fe } = L.states,
        le = L.states.columns.value
      if (le.some(({ type: R }) => R === 'expand')) {
        const R = D(S),
          M = C(S, x, void 0, R),
          F = t.renderExpanded
        return R
          ? F
            ? [
                [
                  M,
                  _('tr', { key: `expanded-row__${M.key}` }, [
                    _(
                      'td',
                      { colspan: le.length, class: 'el-table__cell el-table__expanded-cell' },
                      [F({ row: S, $index: x, store: L, expanded: R })],
                    ),
                  ]),
                ],
              ]
            : (console.error('[Element Error]renderExpanded is required.'), M)
          : [[M]]
      } else if (Object.keys(V.value).length) {
        W()
        const R = xe(S, fe.value)
        let M = V.value[R],
          F = null
        M &&
          ((F = { expanded: M.expanded, level: M.level, display: !0 }),
          typeof M.lazy == 'boolean' &&
            (typeof M.loaded == 'boolean' &&
              M.loaded &&
              (F.noLazyChildren = !(M.children && M.children.length)),
            (F.loading = M.loading)))
        const j = [C(S, x, F)]
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
                  ((M = se({}, V.value[Ae])),
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
                  const De = J.value[Ae] || we[ee.value]
                  oe(De, M)
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
const Sd = {
  store: { required: !0, type: Object },
  stripe: Boolean,
  tooltipEffect: String,
  context: { default: () => ({}), type: Object },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: { type: String, default: '' },
  highlight: Boolean,
}
var wd = ne({
  name: 'ElTableBody',
  props: Sd,
  setup(e) {
    const t = ge(),
      n = Se(et),
      l = Y('table'),
      { wrappedRowRender: a, tooltipContent: s, tooltipTrigger: r } = Cd(e),
      { onColumnsChange: u, onScrollableChange: o } = Yo(n)
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
      no(() => {
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
        onScrollableChange: o,
        wrappedRowRender: a,
        tooltipContent: s,
        tooltipTrigger: r,
      }
    )
  },
  render() {
    const { wrappedRowRender: e, store: t } = this,
      n = t.states.data.value || []
    return _('tbody', {}, [n.reduce((l, a) => l.concat(e(a, l.length)), [])])
  },
})
function al(e) {
  const t = e.tableLayout === 'auto'
  let n = e.columns || []
  t && n.every((a) => a.width === void 0) && (n = [])
  const l = (a) => {
    const s = { key: `${e.tableLayout}_${a.id}`, style: {}, name: void 0 }
    return t ? (s.style = { width: `${a.width}px` }) : (s.name = a.id), s
  }
  return _(
    'colgroup',
    {},
    n.map((a) => _('col', l(a))),
  )
}
al.props = ['columns', 'tableLayout']
function Ed() {
  const e = Se(et),
    t = e == null ? void 0 : e.store,
    n = $(() => t.states.fixedLeafColumnsLength.value),
    l = $(() => t.states.rightFixedColumns.value.length),
    a = $(() => t.states.columns.value.length),
    s = $(() => t.states.fixedColumns.value.length),
    r = $(() => t.states.rightFixedColumns.value.length)
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: l,
    columnsCount: a,
    leftFixedCount: s,
    rightFixedCount: r,
    columns: t.states.columns,
  }
}
function $d(e) {
  const { columns: t } = Ed(),
    n = Y('table')
  return {
    getCellClasses: (s, r) => {
      const u = s[r],
        o = [n.e('cell'), u.id, u.align, u.labelClassName, ...ll(n.b(), r, u.fixed, e.store)]
      return u.className && o.push(u.className), u.children || o.push(n.is('leaf')), o
    },
    getCellStyles: (s, r) => {
      const u = ol(r, s.fixed, e.store)
      return zt(u, 'left'), zt(u, 'right'), u
    },
    columns: t,
  }
}
var kd = ne({
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
    const { getCellClasses: t, getCellStyles: n, columns: l } = $d(e)
    return { ns: Y('table'), getCellClasses: t, getCellStyles: n, columns: l }
  },
  render() {
    const {
        columns: e,
        getCellStyles: t,
        getCellClasses: n,
        summaryMethod: l,
        sumText: a,
        ns: s,
      } = this,
      r = this.store.states.data.value
    let u = []
    return (
      l
        ? (u = l({ columns: e, data: r }))
        : e.forEach((o, i) => {
            if (i === 0) {
              u[i] = a
              return
            }
            const c = r.map((d) => Number(d[o.property])),
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
            ...e.map((o, i) =>
              _(
                'td',
                { key: i, colspan: o.colSpan, rowspan: o.rowSpan, class: n(e, i), style: t(o, i) },
                [_('div', { class: ['cell', o.labelClassName] }, [u[i]])],
              ),
            ),
          ]),
        ]),
      ])
    )
  },
})
function Md(e) {
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
function Td(e, t, n, l) {
  const a = P(!1),
    s = P(null),
    r = P(!1),
    u = (R) => {
      r.value = R
    },
    o = P({ width: null, height: null, headerHeight: null }),
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
      const { pixelX: F, pixelY: j } = M
      Math.abs(F) >= Math.abs(j) && (l.refs.bodyWrapper.scrollLeft += M.pixelX / 5)
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
        (o.value = {
          width: (p.value = R.offsetWidth),
          height: R.offsetHeight,
          headerHeight: e.showHeader && M ? M.offsetHeight : null,
        }),
        n.states.columns.value.forEach((F) => {
          F.filteredValue &&
            F.filteredValue.length &&
            l.store.commit('filterChange', { column: F, values: F.filteredValue, silent: !0 })
        }),
        (l.$ready = !0)
    }),
  )
  const O = (R, M) => {
      if (!R) return
      const F = Array.from(R.classList).filter((j) => !j.startsWith('is-scrolling-'))
      F.push(t.scrollX.value ? M : 'is-scrolling-none'), (R.className = F.join(' '))
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
      const { scrollLeft: M, offsetWidth: F, scrollWidth: j } = R,
        { headerWrapper: ie, footerWrapper: oe } = l.refs
      ie && (ie.scrollLeft = M), oe && (oe.scrollLeft = M)
      const pe = j - F - 1
      M >= pe ? T('is-scrolling-right') : T(M === 0 ? 'is-scrolling-left' : 'is-scrolling-middle')
    },
    L = () => {
      !l.refs.scrollBarRef ||
        (l.refs.scrollBarRef.wrap$ && fl(l.refs.scrollBarRef.wrap$, 'scroll', x, { passive: !0 }),
        e.fit ? Qt(l.vnode.el, D) : fl(window, 'resize', D))
    },
    D = () => {
      var R, M
      if (!l.$ready) return
      let F = !1
      const j = l.vnode.el,
        { width: ie, height: oe, headerHeight: pe } = o.value,
        ae = (p.value = j.offsetWidth)
      ie !== ae && (F = !0)
      const ye = j.offsetHeight
      ;(e.height || g.value) && oe !== ye && (F = !0)
      const we = l.refs.headerWrapper
      e.showHeader && (we == null ? void 0 : we.offsetHeight) !== pe && (F = !0),
        (v.value = ((R = l.refs.tableWrapper) == null ? void 0 : R.scrollHeight) || 0),
        (d.value = (we == null ? void 0 : we.scrollHeight) || 0),
        (m.value = ((M = l.refs.footerWrapper) == null ? void 0 : M.scrollHeight) || 0),
        (b.value = v.value - d.value - m.value),
        F &&
          ((o.value = {
            width: ae,
            height: ye,
            headerHeight: (e.showHeader && (we == null ? void 0 : we.offsetHeight)) || 0,
          }),
          C())
    },
    W = Mt(),
    V = $(() => {
      const { bodyWidth: R, scrollY: M, gutterWidth: F } = t
      return R.value ? `${R.value - (M.value ? F : 0)}px` : ''
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
          const F = ((R = l.refs.headerWrapper) == null ? void 0 : R.scrollHeight) || 0,
            j = ((M = l.refs.footerWrapper) == null ? void 0 : M.scrollHeight) || 0,
            ie = e.maxHeight
          if (v.value >= Number(ie)) return { maxHeight: `${v.value - F - j}px` }
        }
      }
      return {}
    })
  return {
    isHidden: a,
    renderExpanded: s,
    setDragVisible: u,
    isGroup: i,
    handleMouseLeave: w,
    handleHeaderFooterMousewheel: E,
    tableSize: W,
    emptyBlockStyle: ee,
    handleFixedMousewheel: (R, M) => {
      const F = l.refs.bodyWrapper
      if (Math.abs(M.spinY) > 0) {
        const j = F.scrollTop
        M.pixelY < 0 && j !== 0 && R.preventDefault(),
          M.pixelY > 0 && F.scrollHeight - F.clientHeight > j && R.preventDefault(),
          (F.scrollTop += Math.ceil(M.pixelY / 5))
      } else F.scrollLeft += Math.ceil(M.pixelX / 5)
    },
    resizeProxyVisible: r,
    bodyWidth: V,
    resizeState: o,
    doLayout: C,
    tableBodyStyles: h,
    tableLayout: J,
    scrollbarViewStyle: c,
    tableInnerStyle: fe,
    scrollbarStyle: le,
  }
}
var xd = {
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
const Pd = () => {
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
let Ad = 1
const Od = ne({
    name: 'ElTable',
    directives: { Mousewheel: $i },
    components: { TableHeader: gd, TableBody: wd, TableFooter: kd, ElScrollbar: Qn, hColgroup: al },
    props: xd,
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
      const a = ld(l, e)
      l.store = a
      const s = new ad({ store: l.store, table: l, fit: e.fit, showHeader: e.showHeader })
      l.layout = s
      const r = $(() => (a.states.data.value || []).length === 0),
        {
          setCurrentRow: u,
          getSelectionRows: o,
          toggleRowSelection: i,
          clearSelection: c,
          clearFilter: p,
          toggleAllSelection: v,
          toggleRowExpansion: b,
          clearSort: d,
          sort: m,
        } = Md(a),
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
          bodyWidth: D,
          resizeState: W,
          doLayout: V,
          tableBodyStyles: J,
          tableLayout: ee,
          scrollbarViewStyle: fe,
          tableInnerStyle: le,
          scrollbarStyle: be,
        } = Td(e, s, a, l),
        { scrollBarRef: R, scrollTo: M, setScrollLeft: F, setScrollTop: j } = Pd(),
        ie = It(V, 50),
        oe = `el-table_${Ad++}`
      ;(l.tableId = oe),
        (l.state = { isGroup: h, resizeState: W, doLayout: V, debouncedUpdateLayout: ie })
      const pe = $(() => e.sumText || t('el.table.sumText')),
        ae = $(() => e.emptyText || t('el.table.emptyText'))
      return {
        ns: n,
        layout: s,
        store: a,
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
        bodyWidth: D,
        tableBodyStyles: J,
        emptyBlockStyle: S,
        debouncedUpdateLayout: ie,
        handleFixedMousewheel: x,
        setCurrentRow: u,
        getSelectionRows: o,
        toggleRowSelection: i,
        clearSelection: c,
        clearFilter: p,
        toggleAllSelection: v,
        toggleRowExpansion: b,
        clearSort: d,
        doLayout: V,
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
        setScrollLeft: F,
        setScrollTop: j,
      }
    },
  }),
  Ld = ['data-prefix'],
  Nd = { ref: 'hiddenColumns', class: 'hidden-columns' }
function Id(e, t, n, l, a, s) {
  const r = $e('hColgroup'),
    u = $e('table-header'),
    o = $e('table-body'),
    i = $e('el-scrollbar'),
    c = $e('table-footer'),
    p = Xn('mousewheel')
  return (
    A(),
    B(
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
            Z('div', Nd, [ce(e.$slots, 'default')], 512),
            e.showHeader && e.tableLayout === 'fixed'
              ? ze(
                  (A(),
                  B(
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
                            o,
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
                          B(
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
                          B(
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
                  B(
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
              ? (A(), B('div', { key: 2, class: I(e.ns.e('border-left-patch')) }, null, 2))
              : U('v-if', !0),
          ],
          6,
        ),
        ze(Z('div', { ref: 'resizeProxy', class: I(e.ns.e('column-resize-proxy')) }, null, 2), [
          [Tt, e.resizeProxyVisible],
        ]),
      ],
      46,
      Ld,
    )
  )
}
var Rd = he(Od, [
  ['render', Id],
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue'],
])
const zd = { selection: 'table-column--selection', expand: 'table__expand-column' },
  Bd = {
    default: { order: '' },
    selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    index: { width: 48, minWidth: 48, realWidth: 48, order: '' },
  },
  Fd = (e) => zd[e] || '',
  Wd = {
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
          onClick: (a) => a.stopPropagation(),
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
          a = [l.e('expand-icon')]
        return (
          n && a.push(l.em('expand-icon', 'expanded')),
          _(
            'div',
            {
              class: a,
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
function _d({ row: e, column: t, $index: n }) {
  var l
  const a = t.property,
    s = a && ba(e, a).value
  return t && t.formatter
    ? t.formatter(e, t, s, n)
    : ((l = s == null ? void 0 : s.toString) == null ? void 0 : l.call(s)) || ''
}
function Hd({ row: e, treeNode: t, store: n }, l = !1) {
  const { ns: a } = n
  if (!t) return l ? [_('span', { class: a.e('placeholder') })] : null
  const s = [],
    r = function (u) {
      u.stopPropagation(), n.loadOrToggle(e)
    }
  if (
    (t.indent &&
      s.push(_('span', { class: a.e('indent'), style: { 'padding-left': `${t.indent}px` } })),
    typeof t.expanded == 'boolean' && !t.noLazyChildren)
  ) {
    const u = [a.e('expand-icon'), t.expanded ? a.em('expand-icon', 'expanded') : '']
    let o = Cn
    t.loading && (o = za),
      s.push(
        _(
          'div',
          { class: u, onClick: r },
          {
            default: () => [
              _(Re, { class: { [a.is('loading')]: t.loading } }, { default: () => [_(o)] }),
            ],
          },
        ),
      )
  } else s.push(_('span', { class: a.e('placeholder') }))
  return s
}
function Yl(e, t) {
  return e.reduce((n, l) => ((n[l] = l), n), t)
}
function Dd(e, t) {
  const n = ge()
  return {
    registerComplexWatchers: () => {
      const s = ['fixed'],
        r = { realWidth: 'width', realMinWidth: 'minWidth' },
        u = Yl(s, r)
      Object.keys(u).forEach((o) => {
        const i = r[o]
        Ut(t, i) &&
          re(
            () => t[i],
            (c) => {
              let p = c
              i === 'width' && o === 'realWidth' && (p = nl(c)),
                i === 'minWidth' && o === 'realMinWidth' && (p = Ko(c)),
                (n.columnConfig.value[i] = p),
                (n.columnConfig.value[o] = p)
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
        u = Yl(s, r)
      Object.keys(u).forEach((o) => {
        const i = r[o]
        Ut(t, i) &&
          re(
            () => t[i],
            (c) => {
              n.columnConfig.value[o] = c
            },
          )
      })
    },
  }
}
function Vd(e, t, n) {
  const l = ge(),
    a = P(''),
    s = P(!1),
    r = P(),
    u = P(),
    o = Y('table')
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
    v = P(Ko(e.minWidth)),
    b = (h) => (
      p.value && (h.width = p.value),
      v.value && (h.minWidth = v.value),
      h.minWidth || (h.minWidth = 80),
      (h.realWidth = Number(h.width === void 0 ? h.minWidth : h.width)),
      h
    ),
    d = (h) => {
      const C = h.type,
        O = Wd[C] || {}
      Object.keys(O).forEach((S) => {
        const x = O[S]
        S !== 'className' && x !== void 0 && (h[S] = x)
      })
      const T = Fd(C)
      if (T) {
        const S = `${f(o.namespace)}-${T}`
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
    columnId: a,
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
          : ((C = C || _d),
            (h.renderCell = (T) => {
              let S = null
              if (t.default) {
                const W = t.default(T)
                S = W.some((V) => V.type !== ya) ? W : C(T)
              } else S = C(T)
              const x = O && T.cellIndex === 0,
                L = Hd(T, x),
                D = { class: 'cell', style: {} }
              return (
                h.showOverflowTooltip &&
                  ((D.class = `${D.class} ${f(o.namespace)}-tooltip`),
                  (D.style = { width: `${(T.column.realWidth || Number(T.column.width)) - 1}px` })),
                m(S),
                _('div', D, [L, S])
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
var Kd = {
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
let jd = 1
var Qo = ne({
  name: 'ElTableColumn',
  components: { ElCheckbox: Rt },
  props: Kd,
  setup(e, { slots: t }) {
    const n = ge(),
      l = P({}),
      a = $(() => {
        let g = n.parent
        for (; g && !g.tableId; ) g = g.parent
        return g
      }),
      { registerNormalWatchers: s, registerComplexWatchers: r } = Dd(a, e),
      {
        columnId: u,
        isSubColumn: o,
        realHeaderAlign: i,
        columnOrTableParent: c,
        setColumnWidth: p,
        setColumnForcedProps: v,
        setColumnRenders: b,
        getPropsData: d,
        getColumnElIndex: m,
        realAlign: w,
      } = Vd(e, t, a),
      E = c.value
    ;(u.value = `${E.tableId || E.columnId}_column_${jd++}`),
      to(() => {
        o.value = a.value !== E
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
        ;(L = qc(C, L)), (L = Uc(b, p, v)(L)), (l.value = L), s(), r()
      }),
      Ze(() => {
        var g
        const h = c.value,
          C = o.value
            ? h.vnode.el.children
            : (g = h.refs.hiddenColumns) == null
            ? void 0
            : g.children,
          O = () => m(C || [], n.vnode.el)
        ;(l.value.getColumnIndex = O),
          O() > -1 &&
            a.value.store.commit('insertColumn', l.value, o.value ? h.columnConfig.value : null)
      }),
      gn(() => {
        a.value.store.commit('removeColumn', l.value, o.value ? E.columnConfig.value : null)
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
        a = []
      if (Array.isArray(l))
        for (const r of l)
          ((n = r.type) == null ? void 0 : n.name) === 'ElTableColumn' || r.shapeFlag & 2
            ? a.push(r)
            : r.type === Te &&
              Array.isArray(r.children) &&
              r.children.forEach((u) => {
                ;(u == null ? void 0 : u.patchFlag) !== 1024 &&
                  !Xe(u == null ? void 0 : u.children) &&
                  a.push(u)
              })
      return _('div', a)
    } catch (l) {
      return _('div', [])
    }
  },
})
const qd = gt(Rd, { TableColumn: Qo })
Ke(Qo)
const Gd = ne({
    name: 'Render',
    props: { menuData: { type: Array, default: () => [] } },
    setup(e, t) {
      const { t: n } = Ta(),
        l = Yn(e).menuData,
        a = (o) => {
          const i = {
              title: () =>
                X(Te, null, [
                  X(cl, { name: o.icon || '', style: { marginRight: '10px' } }, null),
                  X('span', null, [n(o.meta.title) || '']),
                ]),
            },
            c = o.children
          return X(zu, { index: o.path }, se({ default: () => [r(c)] }, i))
        },
        s = (o) =>
          X(
            Ru,
            { index: o.path },
            {
              default: () => [
                X(cl, { name: o.icon || '', style: { marginRight: '10px' } }, null),
                X('span', null, [n(o.meta.title) || '']),
              ],
            },
          ),
        r = (o) => (o == null ? void 0 : o.map((i) => (i.hiddenChildren ? s(i) : a(i)))),
        u = r(l)
      return () => X(Te, null, [u])
    },
  }),
  Ud = [
    {
      name: 'home',
      path: '/dashboard',
      title: '\u9996\u9875',
      parent: 'root',
      icon: 'menu-home',
      hiddenChildren: !0,
    },
    {
      name: 'charts',
      path: '/charts',
      title: '\u56FE\u6807',
      parent: 'root',
      icon: 'menu-home',
      children: [
        {
          name: 'pie',
          path: '/charts/pie',
          title: '\u997C\u56FE',
          parent: 'charts',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'line',
          path: '/charts/line',
          title: '\u7EBF\u56FE',
          parent: 'charts',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'map',
          path: '/charts/map',
          title: '\u5730\u56FE',
          parent: 'charts',
          icon: '',
          hiddenChildren: !1,
          children: [
            {
              name: 'baidu',
              path: '/charts/map/baidu',
              title: '\u767E\u5EA6',
              parent: 'map',
              icon: '',
              hiddenChildren: !0,
            },
            {
              name: 'gaode',
              path: '/charts/map/gaode',
              title: '\u9AD8\u5FB7',
              parent: 'map',
              icon: '',
              hiddenChildren: !0,
            },
            {
              name: 'google',
              path: '/charts/map/google',
              title: '\u8C37\u6B4C',
              parent: 'map',
              icon: '',
              hiddenChildren: !0,
            },
          ],
        },
      ],
      hiddenChildren: !1,
      uniqueId: 3,
      level: 1,
    },
    {
      name: 'category',
      path: '/category/index',
      title: '\u5206\u7C7B',
      parent: 'root',
      icon: 'menu-system',
      children: '',
      hiddenChildren: !0,
      uniqueId: 1,
      level: 1,
    },
    {
      name: 'system',
      path: '/system',
      title: '\u7CFB\u7EDF',
      parent: 'root',
      icon: 'menu-home',
      children: [
        {
          name: 'menu',
          path: '/system/menu',
          title: '\u83DC\u5355\u7BA1\u7406',
          parent: 'system',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'process',
          path: '/system/process',
          title: '\u6D41\u7A0B\u7BA1\u7406',
          parent: 'system',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'account',
          path: '/system/account',
          title: '\u8D26\u6237\u7BA1\u7406',
          parent: 'system',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'roles',
          path: '/system/roles',
          title: '\u89D2\u8272\u7BA1\u7406',
          parent: 'system',
          icon: '',
          hiddenChildren: !0,
        },
        {
          name: 'tests',
          path: '/system/tests',
          title: '\u6D4B\u8BD5\u7BA1\u7406',
          parent: 'system',
          icon: '',
          hiddenChildren: !1,
          children: [
            {
              name: 'testsOne',
              path: '/system/tests/testone',
              title: '\u6D4B\u8BD5\u4EE5',
              parent: 'tests',
              icon: '',
              hiddenChildren: !0,
            },
          ],
        },
      ],
      hiddenChildren: !1,
      uniqueId: 3,
      level: 1,
    },
  ],
  Yd = ne({
    __name: 'index',
    setup(e) {
      console.log(Ud, dl)
      let t = P([])
      t.value = dl
      const n = lo(),
        l = $(() => n.getIsCollapse),
        a = Ca(),
        s = $(() =>
          a.currentRoute.value.meta.currentActiveMenu
            ? a.currentRoute.value.meta.currentActiveMenu
            : a.currentRoute.value.path,
        ),
        r = (u, o) => {
          console.log(u, o)
        }
      return (u, o) => {
        const i = Iu
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
            { default: G(() => [X(f(Gd), { menuData: f(t) }, null, 8, ['menuData'])]), _: 1 },
            8,
            ['default-active', 'collapse'],
          )
        )
      }
    },
  })
const Xd = { class: 'common-layout' },
  Qd = { key: 0, class: 'page-topnav' },
  Zd = { class: 'page-content' },
  Jd = at(
    ' Copyright \xA9 2013-2022 Eli eli.xin.com All Rights Reserved. \u5907\u6848\u53F7\uFF1A\u5DDDICP\u590715874534\u53F7-1 ',
  ),
  ef = ne({
    __name: 'index',
    setup(e) {
      const t = lo()
      console.log(t)
      const n = P(1),
        l = bt([])
      return (a, s) => {
        const r = pu,
          u = du,
          o = qd,
          i = _c,
          c = $e('router-view'),
          p = vu,
          v = fu,
          b = cu
        return (
          A(),
          B('div', Xd, [
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
                        { default: G(() => [X(Yd)]), _: 1 },
                        8,
                        ['width', 'class'],
                      ),
                      X(b, null, {
                        default: G(() => [
                          X(p, null, {
                            default: G(() => [
                              (A(), B('div', Qd, [X(Pa)])),
                              Z('div', Zd, [
                                (A(),
                                B(
                                  Te,
                                  null,
                                  xt(2, (d) => Z('h1', { key: d }, ue(d), 1)),
                                  64,
                                )),
                                at(' Main' + ue(n.value) + ue(l) + ' ', 1),
                                X(o, { 'mb-1': '', data: [] }),
                                X(i, { total: 100 }),
                                X(c),
                              ]),
                            ]),
                            _: 1,
                          }),
                          X(v, null, { default: G(() => [Jd]), _: 1 }),
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
const hf = _a(ef, [['__scopeId', 'data-v-ddf675c7']])
export { hf as default }
