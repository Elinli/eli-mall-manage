import type { Plugin } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const { VITE_LEGACY } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: [],
    }),
  ]

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  return vitePlugins
}
