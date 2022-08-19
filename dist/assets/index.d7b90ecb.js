import {
  d as n,
  E as s,
  o as a,
  c,
  g as u,
  w as _,
  F as r,
  e as l,
  f as d,
  u as i,
} from './index.777de502.js'
const m = l('div', null, 'account', -1),
  p = d('\u5730\u78C1\u573A\u9519\u9519'),
  C = n({
    __name: 'index',
    setup(f) {
      const e = i()
      function t() {
        e.push('/system/account_detail/1')
      }
      return (h, x) => {
        const o = s
        return a(), c(r, null, [m, u(o, { onClick: t }, { default: _(() => [p]), _: 1 })], 64)
      }
    },
  })
export { C as default }
