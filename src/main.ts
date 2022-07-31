import { createApp } from 'vue'

import 'element-plus/es/components/message/style/css'

import 'virtual:svg-icons-register'

import piniaPersist from 'pinia-plugin-persist'
import { createPinia } from 'pinia'

import './global-style.css'

import App from './App.vue'
import router from '/@/router'
import SvgIcon from '/@/components/SvgIcon/index.vue'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.component('EliSvgIcon', SvgIcon)
app.use(pinia).use(router)
app.mount('#app')
