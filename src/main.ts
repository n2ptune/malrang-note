import '@/plugins/firebase'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import '@/assets/tailwind.css'
import '@/assets/global.css'
import '@/assets/tippy.css'
import VueTippy from 'vue-tippy'
// import '@/plugins/storage'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(VueTippy, {
  directive: 'tippy',
  component: 'Tippy',
  componentSingleton: 'Tippy-Singleton'
})

app.mount('#app')
