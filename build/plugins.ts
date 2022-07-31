import type { Plugin } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const { VITE_LEGACY } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      imports: ['vue', 'vue-router'],
    }),

    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: [],
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
    visualizer({ open: true, gzipSize: true }),
  ]

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  return vitePlugins
}
