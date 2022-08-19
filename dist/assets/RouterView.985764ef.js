import {
  _ as n,
  b as l,
  o as e,
  c as u,
  g as i,
  w as _,
  v as t,
  x as a,
  y as s,
  K as m,
} from './index.777de502.js'
const v = {},
  p = { class: 'router-view' }
function d(o, f) {
  const c = l('router-view', !0)
  return (
    e(),
    u('div', p, [
      i(c, null, {
        default: _(({ Component: r }) => [
          (e(),
          t(m, null, [o.$route.meta.keepAlive ? (e(), t(a(r), { key: 0 })) : s('', !0)], 1024)),
          o.$route.meta.keepAlive ? s('', !0) : (e(), t(a(r), { key: 0 })),
        ]),
        _: 1,
      }),
    ])
  )
}
const w = n(v, [['render', d]])
export { w as default }
