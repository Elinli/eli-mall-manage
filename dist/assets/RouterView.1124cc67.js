import { _ as n } from './_plugin-vue_export-helper.cdc0426e.js'
import {
  o as e,
  c as l,
  a3 as i,
  a0 as u,
  $ as t,
  a1 as a,
  W as s,
  b4 as m,
  ap as _,
} from './index.b73a18cc.js'
const p = {},
  v = { class: 'router-view' }
function d(o, f) {
  const c = _('router-view', !0)
  return (
    e(),
    l('div', v, [
      i(c, null, {
        default: u(({ Component: r }) => [
          (e(),
          t(m, null, [o.$route.meta.keepAlive ? (e(), t(a(r), { key: 0 })) : s('', !0)], 1024)),
          o.$route.meta.keepAlive ? s('', !0) : (e(), t(a(r), { key: 0 })),
        ]),
        _: 1,
      }),
    ])
  )
}
const h = n(p, [['render', d]])
export { h as default }
