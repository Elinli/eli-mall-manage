import {
  d as n,
  o as s,
  c as a,
  f as c,
  w as u,
  F as r,
  b as _,
  u as i,
  e as l,
} from './index.a980d1e6.js'
import { E as m } from './el-button.093e0ba3.js'
import './index.d7808d24.js'
import './icon.ce3baaf7.js'
const d = _('div', null, 'account', -1),
  p = l('\u5730\u78C1\u573A\u9519\u9519'),
  N = n({
    __name: 'index',
    setup(f) {
      const t = i()
      function e() {
        t.push('/system/account_detail/1')
      }
      return (h, x) => {
        const o = m
        return s(), a(r, null, [d, c(o, { onClick: e }, { default: u(() => [p]), _: 1 })], 64)
      }
    },
  })
export { N as default }