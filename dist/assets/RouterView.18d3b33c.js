import { _ as n } from './_plugin-vue_export-helper.cdc0426e.js'
import {
  b as l,
  o as e,
  c as i,
  h as u,
  w as m,
  G as t,
  H as a,
  J as s,
  ax as _,
} from './index.c83f165b.js'
const p = {},
  v = { class: 'router-view' }
function d(o, f) {
  const c = l('router-view', !0)
  return (
    e(),
    i('div', v, [
      u(c, null, {
        default: m(({ Component: r }) => [
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
