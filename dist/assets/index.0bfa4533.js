import {
  d as u,
  r as _,
  a as l,
  o as p,
  c as m,
  b as d,
  e as o,
  t as e,
  f as t,
  w as f,
  F as v,
  g as x,
  u as B,
} from './index.77b5ea65.js'
import { E as h } from './el-button.12607d6d.js'
import './index.6a963975.js'
import './icon.4e5e88aa.js'
const w = o('dianc'),
  F = u({
    __name: 'index',
    setup(C) {
      const n = _([]),
        a = l(1),
        s = B()
      function r() {
        s.push('/')
      }
      return (E, g) => {
        const c = h,
          i = x('router-view')
        return (
          p(),
          m(
            v,
            null,
            [
              d('div', null, [
                o(e(n) + e(a.value) + '------- ', 1),
                t(c, { onClick: r }, { default: f(() => [w]), _: 1 }),
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
