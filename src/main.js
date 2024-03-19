/*
 * @Author: yym
 * @Date: 2024-03-19 13:20:02
 * @LastEditTime: 2024-03-19 14:18:47
 */
import { createApp } from 'vue'
import router from '@/router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
