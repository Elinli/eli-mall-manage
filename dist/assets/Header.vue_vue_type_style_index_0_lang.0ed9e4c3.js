import {
  d as l,
  aG as p,
  A as m,
  o as d,
  c as u,
  _ as s,
  a3 as o,
  a as e,
  t as r,
  ag as f,
  ap as g,
} from './index.b73a18cc.js'
import { _ as h } from './Search.vue_vue_type_script_setup_true_lang.15402080.js'
import { _ as v } from './Fullscreen.vue_vue_type_script_setup_true_lang.841ea935.js'
import { _ as x } from './Language.vue_vue_type_script_setup_true_lang.d81041c3.js'
import { _ as C } from './UserInfo.vue_vue_type_style_index_0_lang.0ddf00fa.js'
import { u as y } from './useI18n.b50b777a.js'
const $ = { class: 'header-content' },
  k = { class: 'logo' },
  A = f(' \xA0 '),
  B = { class: 'operation-area' },
  E = l({
    __name: 'Header',
    setup(I) {
      const { t } = y(),
        n = p(),
        a = m({
          get: () => n.getIsCollapse,
          set: (_) => {
            n.setIsCollapse(_)
          },
        })
      function i() {
        a.value = !a.value
      }
      return (_, N) => {
        const c = g('eli-svg-icon')
        return (
          d(),
          u('div', $, [
            s('div', k, [
              o(c, { name: 'logo', width: '120px', height: '28px' }),
              A,
              o(
                c,
                {
                  onClick: i,
                  name: e(a) ? 'menu-fold' : 'menu-unfold',
                  width: '20px',
                  height: '20px',
                },
                null,
                8,
                ['name'],
              ),
            ]),
            s('div', B, [
              o(e(h)),
              o(e(v)),
              o(e(x)),
              o(e(C)),
              s('span', null, r(e(t)('common.searchText')), 1),
              s('span', null, r(e(t)('routes.system.charts.googleMap')), 1),
            ]),
          ])
        )
      }
    },
  })
export { E as _ }
