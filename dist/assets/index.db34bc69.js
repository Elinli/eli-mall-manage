import {
  d as u,
  r as _,
  a as l,
  b as p,
  o as m,
  c as d,
  f,
  g as o,
  t as e,
  h as t,
  w as v,
  F as h,
  u as x,
} from './index.c83f165b.js'
import { E as B } from './el-button.a68b4578.js'
import './index.841c5669.js'
import './icon.f63980c2.js'
const w = o('dianc'),
  F = u({
    __name: 'index',
    setup(C) {
      const n = _([]),
        a = l(1),
        s = x()
      function r() {
        s.push('/')
      }
      return (E, g) => {
        const c = B,
          i = p('router-view')
        return (
          m(),
          d(
            h,
            null,
            [
              f('div', null, [
                o(e(n) + e(a.value) + '------- ', 1),
                t(c, { onClick: r }, { default: v(() => [w]), _: 1 }),
              ]),
              t(i),
            ],
            64,
          )
        )
      }
    },
  })
export { F as default }
