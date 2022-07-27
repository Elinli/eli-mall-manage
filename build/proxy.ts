import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]
type ProxyList = ProxyItem[]
type ProxyTargetArray = Record<string, ProxyOptions>

const httpsReg = /^https?:\/\//

export function createViteProxy(list: ProxyList) {
  const result = {} as ProxyTargetArray
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)
    console.log('isHttps', isHttps, target, prefix, new RegExp(`^${prefix}`), /^\/user/)

    result[prefix] = {
      target: target + prefix,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // ...(isHttps ? { secure: false } : {}),
    }
  }
  console.log('result', result)

  return result
}
