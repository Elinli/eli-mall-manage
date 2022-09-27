import { b2 as o } from './index.b73a18cc.js'
function s(t) {
  const { t: r } = o()
  function u(n, ...i) {
    return n ? (!n.includes('.') && !t ? n : r(n, ...i)) : ''
  }
  return { t: u }
}
export { s as u }
