import {
  d as u,
  r as _,
  b as p,
  u as l,
  o as m,
  c as d,
  _ as f,
  ag as o,
  t as e,
  a3 as t,
  a0 as v,
  X as x,
  ap as B,
} from './index.b73a18cc.js'
import { E as h } from './el-button.42d22c5b.js'
import './index.b96c5203.js'
import './icon.66172442.js'
const C = o('dianc'),
  y = u({
    __name: 'index',
    setup(E) {
      const a = _([]),
        n = p(1),
        s = l()
      function r() {
        s.push('/')
      }
      return (g, k) => {
        const c = h,
          i = B('router-view')
        return (
          m(),
          d(
            x,
            null,
            [
              f('div', null, [
                o(e(a) + e(n.value) + '------- ', 1),
                t(c, { onClick: r }, { default: v(() => [C]), _: 1 }),
              ]),
              t(i),
            ],
            64,
          )
        )
      }
    },
  })
export { y as default }
