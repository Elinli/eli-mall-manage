import { o, c as n, _ as e, d as i, a3 as t, a0 as l, a as d, X as h } from './index.b73a18cc.js'
import { E as p, J as m } from './index.b96c5203.js'
const u = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  f = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896z',
    },
    null,
    -1,
  ),
  v = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z',
    },
    null,
    -1,
  ),
  M = [f, v]
function x(a, c) {
  return o(), n('svg', u, M)
}
const z = { name: 'ep-aim', render: x },
  C = {
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  g = e(
    'path',
    { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
    null,
    -1,
  ),
  $ = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
    },
    null,
    -1,
  ),
  w = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z',
    },
    null,
    -1,
  ),
  B = [g, $, w]
function E(a, c) {
  return o(), n('svg', C, B)
}
const V = { name: 'ep-add-location', render: E },
  H = e('div', null, 'process', -1),
  F = i({
    __name: 'index',
    setup(a) {
      return (c, k) => {
        const _ = V,
          s = z,
          r = p
        return (
          o(),
          n(
            h,
            null,
            [
              H,
              t(_),
              t(s),
              t(s),
              t(
                r,
                { color: '#409EFC', class: 'no-inherit' },
                { default: l(() => [t(d(m))]), _: 1 },
              ),
            ],
            64,
          )
        )
      }
    },
  })
export { F as default }
