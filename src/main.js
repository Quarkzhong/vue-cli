
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/hooks/useRem"
import useRem from "@/hooks/useRem"
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import "virtual:svg-icons-register"
import SvgIcon from './components/SvgIcon.vue'
import 'normalize.css'

const { px2rem } = useRem()

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.component('svg-icon', SvgIcon)
app.provide("px2rem", px2rem)
app.mount('#app')
