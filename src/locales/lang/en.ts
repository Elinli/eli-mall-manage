import { genMessage } from '../helper'
import en from 'element-plus/dist/locale/en.mjs'

const modules = import.meta.glob('./en/**/*.ts', { eager: true })
export default {
  message: {
    ...genMessage(modules, 'en'),
    en,
  },
}
