import {
  d as a,
  u as n,
  o as s,
  c,
  a3 as u,
  a0 as r,
  X as _,
  _ as i,
  ag as l,
} from './index.b73a18cc.js'
import { E as m } from './el-button.42d22c5b.js'
import './index.b96c5203.js'
import './icon.66172442.js'
const d = i('div', null, 'account', -1),
  p = l('\u5730\u78C1\u573A\u9519\u9519'),
  N = a({
    __name: 'index',
    setup(f) {
      const t = n()
      function e() {
        t.push('/system/account_detail/1')
      }
      return (h, x) => {
        const o = m
        return s(), c(_, null, [d, u(o, { onClick: e }, { default: r(() => [p]), _: 1 })], 64)
      }
    },
  })
export { N as default }
