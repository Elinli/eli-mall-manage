import { s as o } from './index.b73a18cc.js'
function d(n, f = 'lang') {
  const e = {}
  return (
    Object.keys(n).forEach((l) => {
      const a = n[l].default
      let t = l.replace(`./${f}/`, '').replace(/^\.\//, '')
      const r = t.lastIndexOf('.')
      t = t.substring(0, r)
      const c = t.split('/'),
        s = c.shift(),
        i = c.join('.')
      s && (i ? (o(e, s, e[s] || {}), o(e[s], i, a)) : o(e, s, a || {}))
    }),
    e
  )
}
export { d as g }
