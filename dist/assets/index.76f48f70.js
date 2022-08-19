import {
  d as _,
  r as i,
  a as l,
  E as p,
  b as d,
  o as m,
  c as f,
  e as v,
  f as o,
  t as e,
  g as t,
  w as x,
  F as B,
  u as h,
} from './index.777de502.js'
const w = o('dianc'),
  N = _({
    __name: 'index',
    setup(C) {
      const n = i([]),
        a = l(1),
        s = h()
      function r() {
        s.push('/')
      }
      return (E, g) => {
        const c = p,
          u = d('router-view')
        return (
          m(),
          f(
            B,
            null,
            [
              v('div', null, [
                o(e(n) + e(a.value) + '------- ', 1),
                t(c, { onClick: r }, { default: x(() => [w]), _: 1 }),
              ]),
              t(u),
            ],
            64,
          )
        )
      }
    },
  })
export { N as default }
