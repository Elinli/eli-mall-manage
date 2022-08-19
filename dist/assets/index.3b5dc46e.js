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
} from './index.621804dd.js'
import { E as m } from './el-button.41354580.js'
import './index.0ec3a293.js'
import './icon.10dd7727.js'
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
