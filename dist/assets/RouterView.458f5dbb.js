import { _ as n } from './_plugin-vue_export-helper.cdc0426e.js'
import {
  o as e,
  c as l,
  f as i,
  w as u,
  g as m,
  v as t,
  x as a,
  z as s,
  ad as _,
} from './index.a980d1e6.js'
const p = {},
  v = { class: 'router-view' }
function d(o, f) {
  const c = m('router-view', !0)
  return (
    e(),
    l('div', v, [
      i(c, null, {
        default: u(({ Component: r }) => [
          (e(),
          t(_, null, [o.$route.meta.keepAlive ? (e(), t(a(r), { key: 0 })) : s('', !0)], 1024)),
          o.$route.meta.keepAlive ? s('', !0) : (e(), t(a(r), { key: 0 })),
        ]),
        _: 1,
      }),
    ])
  )
}
const h = n(p, [['render', d]])
export { h as default }
