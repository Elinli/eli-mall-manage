import { createApp } from 'vue'
import 'element-plus/es/components/message/style/css'

import piniaPersist from 'pinia-plugin-persist'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from '/@/router'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.use(pinia).use(router)
app.mount('#app')
