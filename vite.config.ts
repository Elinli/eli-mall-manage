// @ts-ignore
import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/plugins'
import { createViteProxy } from './build/proxy'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLICK_PATH, VITE_PROXY } = viteEnv
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  console.log(VITE_PORT, VITE_PUBLICK_PATH, VITE_PROXY)

  const isBuild = command === 'build'
  console.log('command', command, 'mode', mode, 'isBuild', isBuild)
  return {
    base: '/eli-mall-manage/',
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },

    build: {
      target: 'es2015',
      minify: 'esbuild',
      cssTarget: 'chrome86',
      outDir: 'dist',
      // terserOptions: {
      //   compress: {
      //     // eslint-disable-next-line camelcase
      //     keep_infinity: true,
      //     // eslint-disable-next-line camelcase
      //     drop_console: true,
      //   },
      // },
      chunkSizeWarningLimit: 2000,
    },

    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "./src/assets/default/basic.scss";@import "./src/assets/default/common.scss";`,
        },
      },
    },

    plugins: [createVitePlugins(viteEnv, isBuild)],
    server: {
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createViteProxy(VITE_PROXY),
    },
    optimizeDeps: {
      include: ['@vue/runtime-core', '@vue/shared'],
    },
  }
}
