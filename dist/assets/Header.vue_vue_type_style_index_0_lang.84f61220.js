import { u as i, _ as r } from './UserInfo.vue_vue_type_style_index_0_lang.93dc77b3.js'
import { _ as l } from './Search.vue_vue_type_script_setup_true_lang.eba067f1.js'
import { _ as p } from './Fullscreen.vue_vue_type_script_setup_true_lang.fa9f70f2.js'
import { _ as m } from './Language.vue_vue_type_script_setup_true_lang.9cbb3201.js'
import {
  d,
  h as u,
  o as f,
  c as h,
  b as _,
  f as e,
  k as o,
  e as g,
  g as v,
} from './index.a980d1e6.js'
const x = { class: 'header-content' },
  C = { class: 'logo' },
  k = g(' \xA0 '),
  $ = { class: 'operation-area' },
  I = d({
    __name: 'Header',
    setup(B) {
      const t = i(),
        s = u({
          get: () => t.getIsCollapse,
          set: (a) => {
            t.setIsCollapse(a)
          },
        })
      function c() {
        s.value = !s.value
      }
      return (a, N) => {
        const n = v('eli-svg-icon')
        return (
          f(),
          h('div', x, [
            _('div', C, [
              e(n, { name: 'logo', width: '120px', height: '28px' }),
              k,
              e(
                n,
                {
                  onClick: c,
                  name: o(s) ? 'menu-fold' : 'menu-unfold',
                  width: '20px',
                  height: '20px',
                },
                null,
                8,
                ['name'],
              ),
            ]),
            _('div', $, [e(o(l)), e(o(p)), e(o(m)), e(o(r))]),
          ])
        )
      }
    },
  })
export { I as _ }