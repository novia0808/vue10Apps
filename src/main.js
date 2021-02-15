import { createApp } from 'vue'
import App from './App.vue'
// Vue.config.devtools = true;
import "./assets/stylel.css"
import router from './router'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
