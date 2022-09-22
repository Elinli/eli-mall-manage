import { createApp } from 'vue'

import 'element-plus/es/components/message/style/css'

import 'virtual:svg-icons-register'

import './global-style.css'

import App from './App.vue'
import router from '/@/router'
import SvgIcon from '/@/components/SvgIcon/index.vue'
import { setupStore } from '/@/store'
import { setupI18n } from '/@/locales/setupI18n'

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  await setupI18n(app)
  app.component('EliSvgIcon', SvgIcon).use(router)
  app.mount('#app')
}
bootstrap()
